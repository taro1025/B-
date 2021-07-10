resource "aws_s3_bucket" "b-plus-image-bucket" {
  bucket = "b-plus-image-bucket"
  acl    = "public-read"

  tags = {
    Name        = "b-plus-image-bucket"
    Environment = "Dev"
  }
}
