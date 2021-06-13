resource "aws_route_table" "route_table" {
  vpc_id = aws_vpc.b_plus_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "b_plus_route_table"
  }
}

resource "aws_route_table_association" "route_table_association_1a" {
  subnet_id      = aws_subnet.public_1a.id
  route_table_id = aws_route_table.route_table.id
}

resource "aws_route_table_association" "route_table_association_1c" {
  subnet_id      = aws_subnet.public_1c.id
  route_table_id = aws_route_table.route_table.id
}
