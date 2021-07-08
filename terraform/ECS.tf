#タスク定義

data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

resource "aws_ecs_task_definition" "service" {
  family = "b_plus_service"
  requires_compatibilities = ["FARGATE"]
  cpu = "256"
  memory = "512"
  execution_role_arn = "${data.aws_iam_role.ecs_task_execution_role.arn}"
  network_mode = "awsvpc"

  container_definitions = jsonencode([
    {
      name      = "api"
      image     = "242989754518.dkr.ecr.ap-northeast-1.amazonaws.com/api"
      #cpu       = 10
      memory    = 128
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
      #mountPoints = [
      #  {
      #    sourceVolume = "tmp"
      #    containerPath = "/app/tmp/"
      #  },
      #  {
      #    sourceVolume = "tmp"
      #    containerPath = "/app/public/"
      #  }
      #]
      environment = [
        {
          name = "APP_DATABASE_PASSWORD"
          value = "${var.APP_DATABASE_PASSWORD}"
        },
        {
          name = "DB_ENDPOINT"
          value = "${var.DB_ENDPOINT}"
        },
        {
          name = "RAILS_MASTER_KEY"
          value = "${var.MASTER_KEY}"
        }
      ]
      logConfiguration = {
          logDriver = "awslogs"
          options = {
            awslogs-region = "ap-northeast-1"
            awslogs-group = "/ecs/project/b_plus"
            awslogs-stream-prefix = "yada"

          }
        }

    },
    {
      name      = "front"
      image     = "242989754518.dkr.ecr.ap-northeast-1.amazonaws.com/front"
      #cpu       = 10
      memory    = 128
      essential = true
      portMappings = [
        {
          containerPort = 80 #8000を80に
          hostPort      = 80
        }
      ]
      logConfiguration = {
          logDriver = "awslogs"
          options = {
            awslogs-region = "ap-northeast-1"
            awslogs-group = "/ecs/project/b_plus"
            awslogs-stream-prefix = "yada"

          }
        }
      environment = [
        {
          name = "REACT_APP_RAKUTEN_ID"
          value = "${var.REACT_APP_RAKUTEN_ID}"
        }
      ]
      volumesFrom = [
        {
          sourceContainer = "api"
        }
      ]
    } #,
    #{
    #  name      = "nginx"
    #  image     = "242989754518.dkr.ecr.ap-northeast-1.amazonaws.com/nginx"
    #  #cpu       = 10
    #  memory    = 128
    #  essential = true
    #  portMappings = [
    #    {
    #      containerPort = 80
    #      hostPort      = 80
    #    }
    #  ]
    #  volumesFrom = [
    #    {
    #      sourceContainer = "api"
    #    }
    #  ]
    #}
  ])

  volume {
    name      = "tmp"
    #host_path = "/ecs/service-storage"
  }
}

#クラスタ

resource "aws_ecs_cluster" "b_plus_cluster" {
  name = "b-plus"

  setting {
    name  = "containerInsights"
    value = "disabled"
  }
}

#サービス

resource "aws_ecs_service" "b_plus" {
  name            = "b_plus"
  cluster         = aws_ecs_cluster.b_plus_cluster.id
  task_definition = aws_ecs_task_definition.service.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets = [aws_subnet.public_1a.id]
    security_groups = [aws_security_group.b_plus_ecs_security.id]
    assign_public_ip = true
  }
  #ordered_placement_strategy {
  #  type  = "binpack"
  #  field = "cpu"
  #}
#
  load_balancer {
    target_group_arn = aws_lb_target_group.targetGP.arn
    container_name   = "front" #"nginx"
    container_port   = 80
  }
#
  #placement_constraints {
  #  type       = "memberOf"
  #  expression = "attribute:ecs.availability-zone in [us-west-2a, us-west-2b]"
  #}
}
