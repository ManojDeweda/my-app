package com.project.mums.exceptions;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException{
	String resourceName;
	String fieldName;
	String fieldValue;
	int fieldValue3;
	
	
	public ResourceNotFoundException(String resourceName, String fieldName, String fieldValue) {
		super(String.format("%s not found with %s = %s", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
		
		
	}
	public ResourceNotFoundException(String resourceName, String fieldName, int fieldValue) {
		super(String.format("%s not found with %s = %s", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue3 = fieldValue;
		
		
	}


	
}
