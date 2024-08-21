const form = document.querySelector("#form")
const username=document.getElementById('username')
const email = document.getElementById('email')
const password =document.getElementById('password')
const cpasswprd=document.querySelector('#cpassword')

form.addEventListener('submit'),(e)=>{
    if(!validateinput()){
        e.prevendefault();
    }
}

function validateinput(){
    const usernameval = username.value.trim()
    const emialval = document.getElementById('email').value.trim()
    const passwordval = document.getElementById('password').value.trim()
    const cpasswprdval = document.getElementById('cpassword').value.trim()


    if(usernameval ===''){
        seterror(username,"username is required")
    }
    else{
        setsuccess(username)
    }
    if(emialval==""){
        seterror(email,'Email is required')
    }
    else if(validateEmail(email)){
        seterror(email,'please enter a valid email')
    }
    else{
        setsuccess(email)
    }
    if(passwordval==''){
        seterror(password,'password is required')
    }
    else if (passwordval.length<7){
        seterror(password,'password must be atleast 7 characters')
    }
    else{
        setsuccess(password)
    }
    if(cpasswprd===''){
        seterror(cpasswprd,'confirmm password is required')
    }
    else if (cpasswordval!=passwordval){
        seterror(cpasswprd,'password does not match')
    }
    else{
        setsuccess(cpasswprd)
    }
}
function seterror(element,messaege){
    const inputgroup  = element.parentElement
    const erroreelement = inputgroup.querySelector('.error')

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}
function setsuccess(element){
    const inputgroup = element.parentElement
    const erroreelement = inputgroup.querySelector('.error')

    erroreelement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}
const validateEmail = (email)=>{
    return String(email).toLowerCase
    .main('/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')

}

