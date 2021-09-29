package com.example.demo;

public class Users {
	private int User_id;
	private String User_name;
	private int age;
	private String Gender;
	private String Location;
	private String Email;

public int getUser_id() {
		return User_id;
	}

	public void setUser_id(int user_id) {
		User_id = user_id;
	}

	public String getUser_name() {
		return User_name;
	}

	public void setUser_name(String user_name) {
		User_name = user_name;
	}

	public String getLocation() {
		return Location;
	}

	public void setLocation(String location) {
		Location = location;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}



@Override
public String toString() {
	return "Users [User_id=" + User_id + ", User_name=" + User_name + ", Location=" + Location + ", Email=" + Email + "]";

}
}
