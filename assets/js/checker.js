function required()
{
var empt1 = document.forms["form1"]["text1"].value;
var empt2 = document.forms["form1"]["text2"].value;
var empt3 = document.forms["form1"]["text3"].value;
if (empt1 == ""||empt2 == ""||empt3 == "")
{
alert("Please fill all the fields");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}