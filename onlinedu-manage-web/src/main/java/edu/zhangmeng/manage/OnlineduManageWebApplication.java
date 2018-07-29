package edu.zhangmeng.manage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="edu.zhangmeng")
public class OnlineduManageWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineduManageWebApplication.class, args);
	}
}
