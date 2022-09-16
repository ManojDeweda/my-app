package com.project.mums.payload;

import java.sql.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class EmpAuditDto {

	@NotNull
	private int serialno;
	
	@NotEmpty
	private String empno;
	
	@NotEmpty
	private String user;
	
	@NotNull
	private Date timestamp;
	
	@NotEmpty
	private String remark;

	public EmpAuditDto() {
		super();
	}

	public EmpAuditDto(int serialno, String empno, String user, Date timestamp, String remark) {
		super();
		this.serialno = serialno;
		this.empno = empno;
		this.user = user;
		this.timestamp = timestamp;
		this.remark = remark;
	}

	public int getSerialno() {
		return serialno;
	}

	public void setSerialno(int serialno) {
		this.serialno = serialno;
	}

	public String getEmpno() {
		return empno;
	}

	public void setEmpno(String empno) {
		this.empno = empno;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
}
