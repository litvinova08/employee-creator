package litvinova08.employeecreator.employee;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/employee")

public class EmployeeController {

	@Autowired 
	EmployeeService service;
	
	//add a new employee to a database
	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeCreateDTO data) {
		Employee newEmployee = this.service.create(data);
		return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
	}
	
	//get all employees from a database
	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.service.getAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}


}
