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
          name = "MASTER_KEY"
          value = "${var.MASTER_KEY}"
        }
      ]
    },
    {
      name      = "front"
      image     = "242989754518.dkr.ecr.ap-northeast-1.amazonaws.com/front"
      #cpu       = 10
      memory    = 128
      essential = true
      portMappings = [
        {
          containerPort = 8000
          hostPort      = 8000
        }
      ]
    },
    {
      name      = "nginx"
      image     = "242989754518.dkr.ecr.ap-northeast-1.amazonaws.com/nginx"
      #cpu       = 10
      memory    = 128
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
      volumesFrom = [
        {
          sourceContainer = "api"
        }
      ]
    }
  ])

  volume {
    name      = "service-storage"
    #host_path = "/ecs/service-storage"
  }
}
