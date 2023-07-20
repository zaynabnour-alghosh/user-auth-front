const pages={}
pages.base_url="http://localhost/user-auth-back/";
// pages.get_api=(url)=>{
//     fetch(url)
//     .then((response)=>{
//         console.log(response);
//     })
//     .catch((error)=>console.log("Error from api:", error))    
// }
pages.page_register=() => {
    console.log("register working..")
    document.getElementById("authform").addEventListener('submit', createUser);
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
        }
        const register_url = pages.base_url + "register.php"
        fetch(register_url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(response=>response.json())
        .then(newUser=>{
            console.log(newUser)
        })
        .catch(error=>console.log(error))
        
    }
};
pages.page_login=()=>{
    console.log("login working..")
    document.addEventListener("DOMContentLoaded", getCredentials);
    function getCredentials(e){
        e.preventDefault()
    }
};

