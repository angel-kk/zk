var dt, box, search1, box1, index = 0, lastIndex = 0
init()
function init() {
    box = document.querySelector('.nuv3')
    search1 = location.search//获取地址栏参数
    Search()//判断地址栏是否有参数
    console.log(box)


}
function Search() {
    if (search1) {
        var ar1 = search1.split("=")
        //以=分割 数组第一位为？id
        if (ar1[0] == "?id") {
            //第二位就是id
            var id = ar1[1];
            console.log(id)
            fn1()
            async function fn1() {
                //发送请求，并获取响应结果
                dt = await promiseAjax({
                    url: '../php/xiangqing.php',
                    data: 'id=' + id
                })
                //把字符串转为对象
                dt = eval('(' + dt + ')')
                //把数据渲染到页面中
                var str = `
                <div class="nuv3-c">
            <div class="nuv3-z">
                <p>
                    <dddk1> &nbsp;<a href="./index1.html" class="nuv-sc">
                            商城首页></a></dddk1>

                    <dddk1 class="nuv-sc">智能翻译></dddk1>
                    <dddk1 class="nuv-sg">搜狗出品 糖猫词典笔 随扫随译扫出好成绩</dddk1>
                </p>

                <div class="nuv3-tp">
                    <img src="${dt.img2}" class="dimg img2" style="margin-top: 15px; width: 600px; height: 500px;">
                    

                <div class="dddk">
                <img src="${dt.img2}" class="img1 img2">
                </div>
                <div class="dddk1"></div>

               



                </div>
               
            </div>
 <ul class="xt">
                <li><img src="${dt.img2}" alt="" class="ac"></li>
                <li><img src="${dt.img3}" alt=""></li>
                <li><img src="${dt.img4}" alt=""></li>
                <li><img src="${dt.img5}" alt=""></li>
                <li><img src="${dt.img2}" alt=""></li>
            </ul>



            <div class="nuv3-y">
                <h3 style="margin: 50px 0px 20px;">${dt.tie}</h3>

                <p style="font-size: 16px; color: #ced0d4;width: 500px;">${dt.img1}</p>

                <p class="nuv3-p">${dt.price}<dddk1
                        style="color: #ddd;text-decoration:line-through; font-size: 20px;">￥798</dddk1>
                    &nbsp;&nbsp;&nbsp; <dddk1 class="nuv3-p1">包邮</dddk1></p>

                <p style="margin-top: 30px;">颜色</p>

                <button class="but" style="border: 1px solid red;">粉色</button> &nbsp;&nbsp;
                <button class="but">蓝色</button>

                <p style="margin-top: 30px;">数量</p>

                <button class="but1">+</button><button class="but1">1</button><button class="but1">-</button>

                <br>
                <br>

                <button class="but">加入购物车</button> &nbsp;&nbsp;
                <button class="but" style="background: red;"><a href="./购物车页面">立即购买</a></button>

                <br>
                <br>
                <img src="../images/gwjt.png" style="margin-left: 20px;">











            </div>

        </div>
                `

                box.innerHTML = str
                var nuv3 = document.querySelector('.nuv3-z')
                var dddk = document.querySelector('.dddk')
                var dddk1 = document.querySelector('.dddk1')
                var img = document.querySelector('.img1')
                var img2 = document.querySelectorAll('.img2')
                var lis = Array.from(document.querySelectorAll(".xt li"))

                lis.forEach(function (item) {
                    item.addEventListener("click", click1)

                })
                function click1() {



                    img2[0].src = this.firstElementChild.src
                    img2[1].src = this.firstElementChild.src



                }

                // console.log(dddk)
                nuv3.onmouseenter = function () {
                    dddk.style.display = "block"
                    dddk1.style.display = "block"

                }
                nuv3.onmouseleave = function () {
                    dddk.style.display = "none"
                    dddk1.style.display = "none"

                }
                nuv3.onmousemove = function () {
                    var e = e || window.event
                    // 鼠标距离浏览器边缘距离减去盒子到边缘的距离得到鼠标到盒子边缘的坐标
                    // 盒子内部位置/2让鼠标在小盒子中间
                    var left = e.pageX - nuv3.offsetLeft - dddk1.offsetWidth / 2
                    var top = e.pageY - nuv3.offsetTop - dddk1.offsetHeight / 2
                    // 限定范围
                    //鼠标移出盒子高宽，直接让高宽等于零，让盒子出不去
                    //小盒子高宽超出大盒子，让高宽等于盒子高宽，这样小盒子就不会过界限
                    if (left < 0) left = 0
                    if (top < 0) top = 0
                    if (left > nuv3.clientWidth - dddk1.offsetWidth) left = nuv3.clientWidth - dddk1.offsetWidth
                    if (top > nuv3.clientHeight - dddk1.offsetHeight) top = nuv3.clientHeight - dddk1.offsetHeight
                    dddk1.style.left = left + 'px'
                    dddk1.style.top = top + 'px'
                    // 大图片的坐标是dddk1坐标的-2倍
                    img.style.left = -2 * left + 'px'
                    img.style.top = -2 * top + 'px'

                }


            }

        } else {
            alert("参数有误")
            location.href = '../html/list.html'
        }
    } else {
        alert("非法进入")
        location.href = '../html/list.html'
    }
}

box1()
function box1() {
    var box = document.querySelector('.nuv3')
    box.onclick = function () {

        var e = e || window.event
        var target = e.target
        if (target.innerHTML == "加入购物车") {
            var cartList = localStorage.getItem("cartList") || []
            if (cartList.length > 0) {
                //把cartList转为数组对象
                cartList = eval('(' + cartList + ')')
                console.log(cartList)
                var bool = true//设置开关，默认是true 代表里面没有该商品
                //遍历后 如果存在 则布尔值为false 只修改商品数量
                cartList.forEach(item => {
                    //判断当前遍历的商品是否跟添加的商品相同
                    if (dt.id == item.id) {
                        bool = false
                        //让当前的商品数量加1
                        item.number++
                        localStorage.setItem('cartList', JSON.stringify(cartList))

                    }
                })

                if (bool) {
                    dt.number = 1
                    cartList.push(dt)
                    localStorage.setItem('cartList', JSON.stringify(cartList))
                }
            } else {//第一次进来肯定没有商品 直接添加
                dt.number = 1
                cartList.push(dt)
                localStorage.setItem('cartList', JSON.stringify(cartList))
            }
        }
    }

}

