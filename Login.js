var login_Users = [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ];
       function checkData()
       {
           var name =document.getElementById('text_signin').value;
           var Password =document.getElementById('pass_signin').value;
           for(var i =0; i<login_Users.length ;i++)
           {
               if(name === login_Users[i].username && Password ===login_Users[i].pass
                ||name=== login_Users.username && Password === login_Users.pass)
               {
               
                 alert("Login Successfully!");
                
                 window.location.href ='file:///C:/Users/IT/Desktop/MostafaMedhat_(W3)/Review.html';
                
               }
               else
               {
                   alert("invaild Password or username");
                   return false;
               }
           }
       }
       function AddData()
       {   
           var letters =/[a-zA-Z]/;
           var Number =/\d/;
           var Specail_char=/[!@#$%^&*()?]/;
           var Username = document.getElementById('text_signup').value;
           var Pass = document.getElementById('pass_signup').value;
           var Age = document.getElementById('Age').value;
           var Gender = document.getElementById('Gender').value;
           var Phone = document.getElementById('Phone').value;
          for(var i =0; i<login_Users.length; i++)
          {
             if(Pass !=="" && Username !=="" && Age !=="" && Gender !=="" && Phone !=="")
           {
               if(letters.test(Pass) && Number.test(Pass) && Specail_char.test(Pass) &&Pass.length>=8)
               {
                   if(Age>=18 && Age<=60)
                   {
                       if(Phone.length==11)
                       {
                           if(Gender=="male" || Gender =="female" || Gender=="Male" || Gender=="Female" ||Gender=="Female" 
                           || Gender=="MALE" || Gender=="FEMALE")
                           {
                               /*login_Users.username.push(Username);
                             login_Users.pass.push(Pass);
                             login_Users.age.push(Age);
                             login_Users.gender.push(Gender);
                             login_Users.phone.push(Phone);*/
                             login_Users.push({Username,Pass,Age,Gender,Phone});

                             alert("Data Saved");
                             console.log(login_Users);
                             window.location.href ='file:///C:/Users/IT/Desktop/MostafaMedhat_(W3)/Review.html';
                             return true;
                           }
                           else
                           {
                               alert("Gender is male or female and you should write it as Small char");
                               return false;
                           }
                      
                       }
                       else
                       {
                           alert("Phone number must be 11 number");
                           return false;
                       }
                   }
                   else
                   {
                       alert("Age must be  between 18 and 60 ");
                       return false;       
                   }
               }
               else
               {
                   alert("Password not strong");
                   return false;
               }
           }
           else
           {
               alert('Fill All Data');
               return false;
           }
          }
       }
       function UpdateData()
       {
           var Name =document.getElementById('name_Forget').value;
           var newPassword =document.getElementById('Pass_Forget').value;
           for(var i=0; i<login_Users.length ;i++)
           {
               if(Name == login_Users[i].username)
               {
                  login_Users[i].pass=newPassword
                   console.log(login_Users);
                   alert("Password updated");
                   window.location.href ='file:///C:/Users/IT/Desktop/MostafaMedhat_(W3)/Review.html';
                   return true;
               }
               else
               {
                   alert('Invaild username ');
                   return false;
               }
           }
           console.log(login_Users);
       }