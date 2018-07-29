package edu.zhangmeng.manage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication

@MapperScan("edu.zhangmeng.manage.mapper")
@ComponentScan(basePackages="edu.zhangmeng")
public class OnlineduManageServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineduManageServiceApplication.class, args);
	}
}
