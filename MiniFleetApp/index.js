(function(){
   const loginForm= document.getElementById('loginForm'); 

   const VALID_EMAIL= 'admin@gmail.com',
   const VALID_PASSWORD= 'admin1234'; 
   loginForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value;

    if(email===VALID_EMAIL && password===VALID_PASSWORD){
        alert("Login success");
        window.location.href='admin.html';
    }else{
        alert("Wrong email or password");
    }
   });
})
