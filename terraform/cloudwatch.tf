resource "aws_cloudwatch_log_group" "yada" {
  name = "/ecs/project/b_plus"

  tags = {
    Environment = "production"
    Application = "serviceA"
  }
}
