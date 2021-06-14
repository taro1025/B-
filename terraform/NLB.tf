
resource "aws_lb" "example" {
  name               = "example"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.b_plus_alb_security.id]
  subnets            = [aws_subnet.public_1a.id, aws_subnet.public_1c.id]

  tags = {
    Environment = "production"
  }
}

resource "aws_lb_target_group" "targetGP" {
  name     = "tf-example-lb-tg"
  port     = 80
  protocol = "HTTP"
  target_type = "ip"
  vpc_id   = aws_vpc.b_plus_vpc.id
}


resource "aws_lb_listener" "front_end" {
  load_balancer_arn = aws_lb.example.arn
  port              = "80"
  protocol          = "HTTP" #"TLS"
  #certificate_arn   = "arn:aws:iam::187416307283:server-certificate/test_cert_rab3wuqwgja25ct3n4jdj2tzu4"
  #alpn_policy       = "HTTP2Preferred"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.targetGP.arn
  }
}
