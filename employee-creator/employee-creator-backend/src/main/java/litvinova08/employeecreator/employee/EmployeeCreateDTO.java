package litvinova08.employeecreator.employee;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

public class EmployeeCreateDTO {

//	@NotBlank
	private String firstName;

	private String middleName;

//	@NotBlank
	private String lastName;

	private String email;

	private String mobileNumber;

	private String address;

	private String contract;

	private String startDate;

	private String finishDate;

	private String ongoing;

	private String basis;

	private String hours;

	public EmployeeCreateDTO(@NotBlank String firstName, String middleName, @NotBlank String lastName, String email,
			String mobileNumber, String address, String contract, String startDate, String finishDate, String ongoing,
			String basis, String hours) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.contract = contract;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.ongoing = ongoing;
		this.basis = basis;
		this.hours = hours;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public String getContract() {
		return contract;
	}

	public String getStartDate() {
		return startDate;
	}

	public String getFinishDate() {
		return finishDate;
	}

	public String isOngoing() {
		return ongoing;
	}

	public String getBasis() {
		return basis;
	}

	public String getHours() {
		return hours;
	}
	
	

}
