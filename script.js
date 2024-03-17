// alert_name
function alert_name() {
  alert("Muhammad Imtiaz");
  document.getElementById("Orignal").innerHTML = "alert('Muhammad Imtiaz')";
  document.getElementById("output").innerHTML = "Muhammad Imtiaz";
  document.getElementById('output').style.textAlign="center";
}

// alert number
function alert_num() {
  alert("03056414851");
  document.getElementById("Orignal").innerHTML = "alert('03056414851')";
  document.getElementById("output").innerHTML = "03056414851";
  document.getElementById('output').style.textAlign="center";
}

// show var names
function show_var() {
  document.getElementById("Orignal").innerHTML = "Var_names";
  document.getElementById("output").innerHTML ="<li>A variable name can't contain any space</li> <li>A variable name can contain letters, digits, underscores, and dollar signs </li><li>Though a variable name can't be any of Javascript's keywords.it contains keywords. For Example, userAlert and myVar are legal.</li><li>A variable name can't contain any space</li><li>Capital letters are fine but be carefull.Variable name are case senstive.A rose is not a Rose.If you assign the string 'Floribundas' to the variable rose, and then ask Javascript for the value assigned to Rose,you'll come up empty.</li>";
    document.getElementById('output').style.textAlign="left";

}

// show camal case examples 
function show_cam()
{
    document.getElementById('Orignal').innerHTML= "ShowCamelCaseExample";
    document.getElementById('output').innerHTML = "<h3>CamelCaseExample</h3> <li>ThisIsJavaScriptCamelCase</li> <li>TheUserResponse</li>"
    document.getElementById('output').style.textAlign="left";
}

function sum()
{
    document.getElementById('Orignal').innerHTML = "<p>let num1 = 30;</p> <p>let num1 = 10;</p> <p>let sum = num1 + num2;</p>";
    document.getElementById('output').innerHTML = "40" ;
document.getElementById('output').style.textAlign = "center";

}
function sub()
{
    document.getElementById('Orignal').innerHTML = "<p>let num1 = 60;</p> <p>let num1 = 10;</p> <p>let sub = num1 - num2;</p>";
    document.getElementById('output').innerHTML = "50" ;
document.getElementById('output').style.textAlign = "center";

}
function mul()
{
    document.getElementById('Orignal').innerHTML = "<p>let num1 = 30;</p> <p>let num1 = 20;</p> <p>let sub = num1 * num2;</p>";
    document.getElementById('output').innerHTML = "600" ;
document.getElementById('output').style.textAlign = "center";

}
function div()
{
    document.getElementById('Orignal').innerHTML = "<p>let num1 = 200;</p> <p>let num1 = 20;</p> <p>let sub = num1 / num2;</p>";
    document.getElementById('output').innerHTML = "10" ;
document.getElementById('output').style.textAlign = "center";

}
function cal()
{
    document.getElementById('Orignal').innerHTML = "let num1 = 30;</br> let num2 = 5;</br>let num3 = 3; </br>let num4 = 2; </br>let num5 = 4; </br>let calculate = 30 / 5 * 3 + 2 ** 4 - (3 + 2) " ;
    document.getElementById('output').innerHTML = "29" ;
document.getElementById('output').style.textAlign = "center";

}

// clear orignal statement
function clrbtn() {
  document.getElementById("Orignal").innerHTML = "";
}

function clrbtn2() {
  document.getElementById("output").innerHTML = "";
}
