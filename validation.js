
function validateForm(){
    var fname = document.forms["regForm"]["firstname"].value;
    var lname = document.forms["regForm"]["lastname"].value;
    var dob = document.forms["regForm"]["dob"].value;
    var email = document.forms["regForm"]["email"].value;
    var phone = document.forms["regForm"]["phone"].value;
    var address = document.forms["regForm"]["address"].value;
    var city = document.forms["regForm"]["city"].value;
    var pin = document.forms["regForm"]["pin"].value;
    var country = document.forms["regForm"]["country"].value;
    var hobby = document.forms["regForm"]["hobby"].value;

    //firstname validation
    if(fname==""){
       alert("** Please fill your firstname");
       return false; 
    }if(fname.length>20){
        alert("** firstname should be less than 20 characters");
        return false;
    }if(fname.match(/^[A-Za-z]+$/))
        true;
        else{
           alert("** only alphabets are allowed");
           return false;
        }

    //lastname validation
    if(lname==""){
        alert("** Please fill your lastname");
        return false; 
     }if(lname.length>20){
         alert("** lastname should be less than 20 characters");
         return false;
     }if(lname.match(/^[A-Za-z]+$/))
         true;
         else{
            alert("** only alphabets are allowed");
            return false;
         }

    //date of birth validation
    var birth_date = new Date(document.getElementById("dob").value);
    var birth_date_day = birth_date.getDate();
    var birth_date_month = birth_date.getMonth();
    var birth_date_year = birth_date.getFullYear();
        
    var today_date = new Date();
    var today_date_day = today_date.getDate();
    var today_date_month = today_date.getMonth();
    var today_date_year = today_date.getFullYear();

    var calculated_age = 0;

     if(today_date_month > birth_date_month){
        calculated_age = today_date_year - birth_date_year;
            }else if(today_date_month == birth_date_month)
                {
                    if(today_date_day >=  birth_date_day){
                    calculated_age = today_date_year - birth_date_year;
                    }else{
                        calculated_age =  today_date_year - birth_date_year - 1; 
                    }                                 
                }
                else{
                    calculated_age =  today_date_year - birth_date_year - 1;
                }
        
           if(calculated_age > 24){
                alert("** Age greater than 24 is not applicable");
                return false;
            }else if(calculated_age <= 24){
                true;
            }else{
                alert("** Please enter a valid date of birth");
                return false;
            }

    //email validation
    if(email==""){
        alert("** Please provide your email Id");
        return false; 
     }if(email.match(/^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/))
        true;
        else{
            alert("** Please provide a valid email Id");
            return false;
     }

    //phone validation
     if(phone==""){
        alert("** Please insert your phone number");
        return false; 
     }if(phone.match(/^[7-9][0-9]{9}$/))
        true;
        else{
            alert("** Please enter a valid mobile number");
            return false;
        }

    //gender validation
    var rd1 = document.getElementById("male");
    var rd2 = document.getElementById("female");
    var rd3 = document.getElementById("other");
    if(rd1.checked == true){
        true;
    }else if(rd2.checked == true){
        true;
    }else if(rd3.checked == true)
        true;
        else{
        alert("** Please select your gender");
        return false;
    }

    //address validation
     if(address==""){
        alert("** Please give your address for correspondance");
        return false; 
     }

    //city validation
     if(city==""){
        alert("** Please provide your city");
        return false; 
        }if(city.match(/^[A-Z][a-zA-Z]+$/))
            true;
            else{
                alert("** Not a valid city name");
                return false;
            }

    //pin validation
     if(pin==""){
        alert("** Please provide your pincode");
        return false;
        } if(pin.match(/^[0-9]{6}$/))
            true;
            else{
                alert("** Please enter a valid pin code");
                return false;
            }

    //state validation
    var state = document.getElementById("statelist");
    if(state.value == ""){
        alert("** please select your state");
        return false;
    } 
    
    //country validation
    if(country==""){
        alert("** Please provide your country");
        return false; 
     }if (country.match(/^[A-Z][a-zA-Z]+$/))
        true;
        else{
            alert("** Not a valid country name");
            return false;
        }

    //hobby validation
    if(hobby==""){
        alert("** Please provide your hobbies");
        return false; 
     }

}