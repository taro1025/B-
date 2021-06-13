resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.b_plus_vpc.id

  tags = {
    Name = "b_plus_gw"
  }
}
