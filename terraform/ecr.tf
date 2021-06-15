resource "aws_ecr_repository" "api" {
  name                 = "api"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

resource "aws_ecr_repository" "front" {
  name                 = "front"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

#resource "aws_ecr_repository" "nginx" {
#  name                 = "nginx"
#  image_tag_mutability = "MUTABLE"
#
#  image_scanning_configuration {
#    scan_on_push = false
#  }
#}
