var zhuche,user1,pass1

    zhuche = document.querySelector('.btn22')
    // zhuche=document.querySelector('button')
    // zhuche.addEventListener('click',clickHander1)
    user1=document.querySelector('[type="text"]')
    pass1=document.querySelector('[type="password"]')
    search1 = location.search
zhuche.onclick=function(){
        var u1 = user1.value
    var p1 = pass1.value
    // console.log(u1,p1)
    ajax({
        url: '../php/login.php',
        data: `username=${u1}&password=${p1}`,//账号密码
        success:function(dt){
            if (dt == 1) {
                setCookie('name', u1)//登陆成功的账号存入cookie
                if (search1) {//地址栏的参数
                    var url1 = search1.split('=')[1]
                    console.log(url1)
                    location.href = url1
                } else {
                    //列表页
                    location.href = "../html/index1.html"
                }
            } else {
                alert('登陆失败')
            }
        }
    })
        }
    

// function clickHander1(){
//     var u1 = user1.value
//     var p1 = pass1.value
//     ajax({
//         url: '../php/login.php',
//         data: `username=${u1}&password=${p1}`,//账号密码
//         success:function(dt){
//             alert('登录成功，点击跳转')
//             // location.href='./index1.html'
//         }
//     })
//     return false
// }