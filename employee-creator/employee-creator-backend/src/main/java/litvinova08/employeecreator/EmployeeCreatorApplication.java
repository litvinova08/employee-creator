package litvinova08.employeecreator;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class EmployeeCreatorApplication {
	


	public static void main(String[] args) {
		SpringApplication.run(EmployeeCreatorApplication.class, args);
	}
	
//	@Bean
//	public CorsFilter corsFilter() {
//	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//
//	    CorsConfiguration config = new CorsConfiguration();
//	    config.setAllowCredentials(false);
//	    config.addAllowedOrigin("*");
//	    config.addAllowedHeader("*");
//	    config.addAllowedMethod("*");
//
//	    source.registerCorsConfiguration("/**", config);
//
//	    return new CorsFilter(source);
//	}

}
