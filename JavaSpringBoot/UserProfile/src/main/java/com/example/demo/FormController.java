package com.example.demo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class FormController {
@GetMapping("profile")

public String profile()
{
	return "profile";
}
@PostMapping("/details")

public String ViewDetails(@RequestParam("User_id") String User_id,
		@RequestParam("User_name") String User_name,
		@RequestParam("Location") String Location,
		@RequestParam("Email") String Email, ModelMap modelMap)
{
	modelMap.put("User_id",User_id);
	modelMap.put("User_name",User_name);
	modelMap.put("Location",Location);
	modelMap.put("Email",Email);
	return "ViewUserDetails";
	
}
	

}
