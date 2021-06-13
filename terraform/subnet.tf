#パブリックさぶねっと

resource "aws_subnet" "public_1a" {
  vpc_id     = aws_vpc.b_plus_vpc.id
  cidr_block = "10.0.0.0/24"
  availability_zone = "ap-northeast-1a"

  tags = {
    Name = "b_plus_public_1a"
  }
}

resource "aws_subnet" "public_1c" {
  vpc_id     = aws_vpc.b_plus_vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "ap-northeast-1c"

  tags = {
    Name = "b_plus_public_1c"
  }
}
#プライベートさぶねっと

resource "aws_subnet" "private_1a" {
  vpc_id     = aws_vpc.b_plus_vpc.id
  cidr_block = "10.0.10.0/24"
  availability_zone = "ap-northeast-1a"

  tags = {
    Name = "b_plus_public_1a"
  }
}


resource "aws_subnet" "private_1c" {
  vpc_id     = aws_vpc.b_plus_vpc.id
  cidr_block = "10.0.11.0/24"
  availability_zone = "ap-northeast-1c"

  tags = {
    Name = "b_plus_public_1a"
  }
}
