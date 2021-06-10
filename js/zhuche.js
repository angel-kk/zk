var zhuche,user1,pass1
init()
function init(){
    zhuche=document.querySelector('button')
    zhuche.addEventListener('click',clickHander1)
    user1=document.querySelector('[type="text"]')
    pass1=document.querySelector('[type="password"]')
}
function clickHander1(){
    var u1 = user1.value
    var p1 = pass1.value
    ajax({
        url: '../php/zhuche.php',
        data: `username=${u1}&password=${p1}`,//账号密码
        success:function(dt){
            alert('注册成功，点击跳转登录')
            location.href='./login.html'
        }
    })
}