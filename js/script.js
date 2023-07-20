const pages={}
pages.base_url="http://localhost/user-auth-back/";
pages.page_register=() => {
    console.log("register working..")
    document.getElementById("btnRegister").addEventListener('submit',createUser);
    function createUser(e){
        e.preventDefault()
        const first_name=document.getElementById('first_name').value;
        const last_name=document.getElementById('last_name').value;
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const newUser={
            first_name,
            last_name,
            email,
            password
        };        
        fetch("http://localhost/user-auth-back/register.php",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.status=='success'){
                console.log("user created successfully!");
            }
            else{
                console.log("email is already taken choose another email");
            }
        })
        .catch(error=>{console.log(error);});
        
    }
}
pages.page_register=() => {



    
}


