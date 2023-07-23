// console.log(document.getElementById('login-btn'));
document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
     
    if(email == 'admin@gmail.com' && password == 'admin'){
        // console.log("You are real user");
        window.location.href = 'dashboard.html';
    }else{
        // console.log("You are false");
        alert('You are a hacker.')
    }
})