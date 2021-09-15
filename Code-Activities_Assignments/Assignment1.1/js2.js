


let obj = [
{username : "user1", password: "password"},
{username : "user2", password: "password1"},
{username : "user3", password: "password2"},
{username : "user4", password: "thispassword"} 
        ];

        var a = prompt ("username: ")
        var b = prompt ("password: ")
        var checker;

        for (var i = 0; i < 4 ; i++){
            if(a == obj[i].username && b == obj[i].password){
            checker = 1;
            break;
            }
        }
            
            if (checker == 1){
               alert("Valid credentials")
                }
            else
            alert("Invalid credentials")
      
