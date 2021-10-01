var firstName2 = " ";
var secondName2 = " ";
var email2 = " ";

// Booleans
var isValidFirstName = true;
var isValidSecondName = true;
var isValidEmail = true;
// Date Calculation to get today's date




function firstNameValidator(){
    isValidFirstName = true;
    firstName2 = document.getElementById("firstName").value;
     if (firstName2.length < 2)
        {
        alert("Name Error === First Name Is Below Min. Length \n Please Re-enter");
         isValidFirstName = false;   
            
        }
 }

function secondNameValidatorChanger()
{     isValidSecondName = true;
    secondName2 = document.getElementById("secondName").value;
    if (secondName2.length < 2)
        {
        alert("Name Error === Second Name Is Below Min. Length \n Please Re-enter");
         isValidSecondName = false;   
            
        }
     
  } 


function emailValidator(){ /* Test for tomorrow */ 
    isValidEmail = true;
     email2 = document.getElementById("email").value;
   
    var count = 0;
    var emailArr = email2.split('@');
    
 
    for (count = 0; count< emailArr.length; count++)
        {
            if(emailArr[count].length < 2){ /* If either part is only one char long */ 
                isValidEmail = false; 
                break;
            }
            
        }
    var lastString = emailArr[emailArr.length - 1];
    var posnOfDot = lastString.indexOf(".")+1;
    var charsAfterDot = lastString.length - posnOfDot;
    if (charsAfterDot < 2)
        {
          
        isValidEmail = false;    
        }
    
    if(!lastString.includes("."))
        {
        
        isValidEmail = false;     
        }

    
    if (!isValidEmail){
        alert("Email Error === Invalid Email Address \ Please Re-enter");
    } 
}




 
function sameNameChecked()
{ 
    
   document.getElementById("firstName2").value = document.getElementById("firstName").value ;
   document.getElementById("secondName2").value = document.getElementById("secondName").value ; 
}



function submitFormEnd(treeType2)
{   
     var validSubmission = true; 
    var errorMessage = "\t Ooops There seems to be a problem with \n";
    var gifts = " ";
    var picImg = " ";
if (!isValidSecondName)
    {
     errorMessage += "\tYour Second Name is below the minimum length \n";   
    validSubmission = false;
    }
if (!isValidEmail)
    {
     errorMessage += "\tYour email address was invalid" +email2+ " \n";   
    validSubmission = false;
    }
 if(!validSubmission){
     alert(errorMessage);
   } else {
       
       alert("Your gift of " +moneyDonated+ "has gone through. Thanks" );
      /* document.getElementById("amountPaid").innerHTML = moneyDonated;
       document.getElementById("senderField").innerHTML = document.getElementById("firstName").value ;
       document.getElementById("receiverField").innerHTML = document.getElementById("firstName2").value ;
       document.getElementById("messageField").innerHTML = document.getElementById("personalMessage").value ; */ 



function resetFormAll()
{
    document.getElementById("allForm").reset(); 
}
