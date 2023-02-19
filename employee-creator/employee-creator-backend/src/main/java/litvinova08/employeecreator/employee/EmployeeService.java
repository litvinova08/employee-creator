package litvinova08.employeecreator.employee;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;

	//add a new employee to a database
	public Employee create(EmployeeCreateDTO data) {
		Employee newEmployee = new Employee(data.getFirstName(), data.getMiddleName(), data.getLastName(),
				data.getEmail(), data.getMobileNumber(), data.getAddress(), data.getContract(), data.getStartDate(),
				data.getFinishDate(), data.isOngoing(), data.getBasis(), data.getHours());
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
	//get all employees from a database
	public List<Employee> getAll() {
		return this.repository.findAll();
	}
}
