package litvinova08.employeecreator.employee;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

	@Autowired 
	EmployeeService service;
	
	//add a new employee to a database
	@PostMapping()
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeCreateDTO data) {
		Employee newEmployee = this.service.create(data);
		return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
	}
	
	//get all employees from a database
	@GetMapping()
	public ResponseEntity<List<Employee>> getAll() {	
		List<Employee> allEmployees = this.service.getAll();
		return ResponseEntity.ok(allEmployees);
	}


	//get an employee by id
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.getById(id);
		
		if (maybeEmployee.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		} else {
			return ResponseEntity.ok(maybeEmployee.get());
		}
	}
	
	//delete an employee by id
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id) {
		boolean isDeleted = this.service.deleteById(id);
		
		if (isDeleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

}
