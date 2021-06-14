#ECS用のセキュリティグループ

resource "aws_security_group" "b_plus_ecs_security" {
  name        = "allow_tls_ecs"
  description = "Allow TLS inbound traffic"
  vpc_id      = aws_vpc.b_plus_vpc.id

  ingress {
    description      = "TLS from VPC"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #["10.0.0.0/16"]
    #ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "b_plus_ecs_security"
  }
}

#RDS用のセキュリティグループ

resource "aws_security_group" "b_plus_rds_security" {
  name        = "allow_tls_rds"
  description = "Allow TLS inbound traffic"
  vpc_id      = aws_vpc.b_plus_vpc.id

  ingress {
    description      = "TLS from VPC"
    from_port        = 3306
    to_port          = 3306
    protocol         = "tcp"
    security_groups = [aws_security_group.b_plus_ecs_security.id]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "b_plus_rds_security"
  }
}

#albのセキュリティグループ


resource "aws_security_group" "b_plus_alb_security" {
  name        = "allw_tls_"
  description = "Allowc"
  vpc_id      = aws_vpc.b_plus_vpc.id

  ingress {
    description      = "TLS from VPC"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #["10.0.0.0/16"]
    #ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "rom VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"] #["10.0.0.0/16"]
    #ipv6_cidr_blocks = ["::/0"]
  }


  egress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    security_groups = [aws_security_group.b_plus_ecs_security.id]
  }

  tags = {
    Name = "b_plus_ecs_security"
  }
}
