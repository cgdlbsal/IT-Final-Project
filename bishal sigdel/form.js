		function validate()
{
	var username, password;
	username=document.login.username.value;
	password=document.login.password.value;


	
	if(username=='' && password=='')
	{
		document.getElementById('errormsg').innerHTML="All fields are Required";
		return false;
	}
	else if(username=='')
	{
		document.getElementById('errormsg').innerHTML="Username is Required";
		return false;

	}

	else if(password=='')
	{
		document.getElementById('errormsg').innerHTML="email is Required";
		return false;
	}

	else if(username.length<6 || password.length<6)
	{
		document.getElementById('errormsg').innerHTML="username or email length should be min 6";
		return false;
	}

	else if(username=='admin1' && password=='admin1')
	{
		document.getElementById('errormsg').innerHTML="Valid username and email";
		return false;
	}
	else
	{
		document.getElementById('errormsg').innerHTML="Invalid username and email";
		return false;

	}
	
	return true;

	
}