#さぶねっとグループ

resource "aws_db_subnet_group" "b_plus_subnet_group" {
    name = "b_plus_subnet_group"
    description = "b_plus_subnet_group"
    subnet_ids = ["${aws_subnet.private_1a.id}", "${aws_subnet.private_1c.id}"]

    tags = {
      Name = "My B+ DB subnet group"
    }
}

#パラメータグループ
#
#resource "aws_db_parameter_group" "b_plus_param_group" {
#    name = "b-plus-param-group"
#    family = "mysql5.7"
#    description = "b_plus_param_group"
#
#    parameter {
#        name = "log_min_duration_statement"
#        value = "100"
#    }
#}

#RDS

variable "pass_b_plus" {} #Macの環境変数にDBのパスを入れてる

resource "aws_db_instance" "b_plus_db" {
    identifier = "b-plus-db"
    allocated_storage = 10
    engine = "mysql"
    engine_version = "5.7"
    instance_class = "db.t3.micro"
    name = "b_plus_db"
    username  = "root"
    password = "${var.pass_b_plus}"
    db_subnet_group_name = "${aws_db_subnet_group.b_plus_subnet_group.name}"
    vpc_security_group_ids = ["${aws_security_group.b_plus_rds_security.id}"]
    #parameter_group_name = "${aws_db_parameter_group.b_plus_param_group.name}"
    multi_az = false
    backup_retention_period = "7"
    backup_window = "19:00-19:30"
    auto_minor_version_upgrade = false
}

output "rds_endpoint" {
    value = "${aws_db_instance.b_plus_db.address}"
}
