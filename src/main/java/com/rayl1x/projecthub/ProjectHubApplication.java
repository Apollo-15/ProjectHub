package com.rayl1x.projecthub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.rayl1x.projecthub")
public class ProjectHubApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectHubApplication.class, args);
	}

}
