/* male */


var namesMale = ["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],

  

function birthDay1(cc,yy,mm,dd){
  var dd = document.getElementById("dateofbirth").value; 
  var mm = document.getElementById("monthofbirth").value;
  var cc = document.getElementById("centuryofbirth").value;
  var yy = document.getElementById("yearofbirth").value;
 
  
  const BIRTHDAY = ((((cc/4)- 2 * cc -1) + ((5 * yy /4)) + ((5 * yy/4 )) + ((26 * (mm + 1 )/ 10)) + dd)%7).toFixed(0);
  if (BIRTHDAY == 0) {alert(namesFemale[0] + "is your Ghanian name.You were born on + "weekNames[0]")
  }else if (BIRTHDAY == 1){
  alert(namesMale[0] + " is your Ghanian name.You were born on  + "weekNames[1]")
  }else if (BIRTHDAY == 2){
  ralert(namesMale[0] + " is your Ghanian name.You were born on  + "weekNames[2]")
  }else if (BIRTHDAY == 3){
  alert(namesMale[0] + " is your Ghanian name.You were born on  + "weekNames[3]")
  }else if (BIRTHDAY == 4){
  alert(namesMale[0] + " is your Ghanian name.You were born on  + "weekNames[4]")
  }else if (BIRTHDAY == 5){
  alert(namesMale[0] + " is your Ghanian name.You were born on  + "weekNames[5]")
  }else if (BIRTHDAY == 6){
  alert(namesMale[0] + "  is your Ghanian name.You were born on  + "weekNames[6]")
  }
  }




/* female */
var namesFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function birthDay2(cc1,yy1,mm1,dd1){
   
  var dd1 = document.getElementById("dateofbirth").value; 
  var mm1 = document.getElementById("monthofbirth").value;
  var cc1 = document.getElementById("centuryofbirth").value;
  var yy1 = document.getElementById("yearofbirth").value;
  

  const BIRTHDAY = ((((cc1/4)- 2 * cc1 -1) + ((5 * yy1 /4)) + ((5 * yy1/4 )) + ((26 * (mm1 + 1 )/ 10)) + dd1)%7).toFixed(0);
if (BIRTHDAY == 0) {alert(namesFemale[0] + "is your Ghanian name.You were born on + "weekNames[0]")
}else if (BIRTHDAY == 1){
alert(namesFemale[0] + " is your Ghanian name.You were born on  + "weekNames[1]")
}else if (BIRTHDAY == 2){
ralert(namesFemale[1] + " is your Ghanian name.You were born on  + "weekNames[2]")
}else if (BIRTHDAY == 3){
alert(namesFemale[2] + " is your Ghanian name.You were born on  + "weekNames[3]")
}else if (BIRTHDAY == 4){
alert(namesFemale[3] + " is your Ghanian name.You were born on  + "weekNames[4]")
}else if (BIRTHDAY == 5){
alert(namesFemale[4] + " is your Ghanian name.You were born on  + "weekNames[5]")
}else if (BIRTHDAY == 6){
alert(namesFemale[6] + "  is your Ghanian name.You were born on  + "weekNames[6]")
}
}