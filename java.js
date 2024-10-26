function validate(){
    const user = document.getElementById("txtuser").value;
    const pwd = document.getElementById("txtpwd").value;
    var message="";
    var msgbox=document.getElementById("msg");
    if (user==""){
        message="Please Enter Username";
        msgbox.style.color="red";
    }
    else if (pwd==""){
        message="Please enter Password";
        msgbox.style.color="red";
    }
    else{
        message="Sign In Successfull";
        msgbox.style.colors="green";
    }
    msgbox.innerText=message;
}