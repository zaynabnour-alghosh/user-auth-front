const pages={}
let uname=''
pages.base_url="http://localhost/user-auth-back/";
pages.page_register=() => {
    console.log("register working..")
       
    document.getElementById("btnRegister").addEventListener('click',(e)=>{
        e.preventDefault();
        const first_name=document.getElementById('first_name').value;
        const last_name=document.getElementById('last_name').value;
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        console.log(first_name)
        console.log(last_name)
        console.log(email)
        console.log(password)
        const newUser={
            first_name,
            last_name,
            email,
            password
        };        
        console.log(newUser)
        fetch("http://localhost/user-auth-back/register.php",{
            method:"POST",
            mode:"no-cors",
            body:JSON.stringify(newUser),
            headers:{
                "Content-Type":"application/json"
            }})
            .then(response=>response.json())
            .then(data=>{
            if(data.status=='success'){
                console.log("user created successfully!");
            }
           
        });
    
        
    }
    
    // function createUser(e){
        // e.preventDefault()
    );}
pages.page_login=() => {
    console.log("login working..")
    document.getElementById("btnLogin").addEventListener('submit',(e)=>{
        e.preventDefault();
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        console.log(email)
        console.log(password)
        const user={email,password}
        console.log(user)

        fetch("localhost/user-auth/login.html", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
              first_name=data.first_name
            console.log(first_name)
            uname=first_name
        })
            .catch(error => console.log(error))
        });
       



    }

pages.page_dashboard=()=>{
    document.getElementById('username').innerHTML="<h1>"+uname+"</h1>"
}
    
