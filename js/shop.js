var box, cartList, name1
init()
function init() {
    box = document.getElementById('main')
    console.log(box)
    box.addEventListener('click', box1)
    //获取localStorage中是否有cartList
    cartList = localStorage.getItem('cartList') || []
    //获取cookie
    name1 = getCookie('name')
    //这里判断是否登录
    if (name1) {

    } else {
        alert('先登录后重试')
        //获取当前页面地址
        var url = location.href
        //跳转同时把当前页面地址拼接在地址栏
        location.href = './login.html?newUrl=' + url
    }
    if (cartList.length > 0) {
        cartList = eval('(' + cartList + ')')
        show1()
    }

}

function show1() {
    if (cartList.length > 0) {
        var bool = cartList.every(item => {
            return item.sele == 1
        })
        var str2 = `
        <table class="contop" style="clear: both;">
        <tr>
            <td colspan="6">
                <div class="flex">
                    <div class="w80">
                        <input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选
                    </div>
                    <div class="w251">商品信息</div>
                    <div class="w165"></div>
                    <div class="w129">单价</div>
                    <div class="w120 mar">数量</div>
                    <div class="w140">金额</div>
                    <div class="w119">操作</div>
                </div>
            </td>
        </tr>
    </table>
        `

        cartList.forEach(item => {
            str2 += `
            
            <div class="content">
            <div class="pro w1190">
            <div class="pro-hd">
            <input type="checkbox" name="xuan" ${item.sele == 1 ? "checked" : ''} data-id=${item.id}>
                <img src="../images/tm.png" alt="">
                <a href="javaScript:;">商品介绍：${item.jianjia}</a>
            </div>
            <div class="pro-bd">
                <div class="w552">
                    <input type="checkbox" name="xuan" ${item.sele == 1 ? "checked" : ''} data-id=${item.id}>
                    <img src="${item.img2}" alt="" style="width:80px;height:80px">
                    <a href="javaScript:;" style="white-space:nowrap;">${item.tie}</a>
                    
                </div>
                <div class="w130">${item.price}</div>
                <div class="w120 btn">
                    <button ${item.number <= 1 ? "disabled" : ''} data-id=${item.id}>-</button>
                    <input type="text" placeholder="" value="${item.number}" class='shuliang'>
                    <button data-id=${item.id}>+</button>
                </div>
                <div class="w140">
                    <div class="price" id="p1">${(item.price * item.number).toFixed(2)}</div>
                    </div>
                <div class="w119">
                    <div class="cz">
                        <a href="javaScript:;">移入收藏夹</a>
                        <a href="javaScript:;" style="color: red;" data-id=${item.id}>删除</a>
                        <a href="javaScript:;">相似宝贝</a>
                        </div>
                    </div>
                </div>
                </div>
            
        
            `
        })
        str2 += `
        <div class="w1190 jiesuan" style="margin-bottom:50px;">
        <div class="fl">
            <div class="qx">
                <input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选
            </div>
            <a href="javaScript:;">清空购物车</a>
            <a href="javaScript:;">移入收藏夹</a>
            <a href="javaScript:;">分享</a>
        </div>
        <div class="fr">
            <a href="javaScript:;">已选商品 <i>${total()[0]}</i> 件 </a>
            <span>合计（不含运费）： <i class="yf">${(total()[1]).toFixed(2)}</i> </span>
            <button class="js">结算</button>
        </div>
        </div>
        `
        box.innerHTML = str2
    } else {
        console.log(123)
        str2 = `
        <table class="contop" style="clear: both;">
        <tr>
            <td colspan="6">
                <div class="flex">
                    <div class="w80">
                        <input type="checkbox" name="quan">全选
                    </div>
                    <div class="w251">商品信息</div>
                    <div class="w165"></div>
                    <div class="w129">单价</div>
                    <div class="w120 mar">数量</div>
                    <div class="w140">金额</div>
                    <div class="w119">操作</div>
                </div>
            </td>
        </tr>
    </table>
    <div class="content">
    <div class="pro w1190">
    <div class="pro-hd">
        <div style="width: 200px;height: 30px;line-height: 30px;
        background: red; margin: auto; border-radius: 15px;
        text-align: center;"><a href="./list.html" 
        style="color: white;text-decoration: none;">赶紧去选购吧</a></div>
    </div>
</div>
    </div>
    <div class="w1190 jiesuan"style="margin-bottom:50px;">
    <div class="fl">
        <div class="qx">
            <input type="checkbox" name="quan">全选
        </div>
        <a href="javaScript:;">清空购物车</a>
        <a href="javaScript:;">移入收藏夹</a>
        <a href="javaScript:;">分享</a>
    </div>
    <div class="fr">
        <a href="javaScript:;">已选商品 <i>0</i> 件 </a>
        <span>合计（不含运费）： <i class="yf">0.00</i> </span>
        <button class="js">结算</button>
    </div>
    </div>
        `

        box.innerHTML = str2


    }
}
function box1() {
    var e = e || window.event
    var target = e.target
    if (target.innerHTML == '+') {
        var id = target.getAttribute('data-id')
        console.log(cartList)
        cartList.forEach(item => {
            if (item.id == id) {
                item.number++
            }
        })
        localStorage.setItem("cartList", JSON.stringify(cartList))
        show1()
    }
    if (target.innerHTML == '-') {
        var id = target.getAttribute('data-id')
        cartList.forEach(item => {
            if (item.id == id) {
                if (item.number <= 1) {
                    item.number = 1
                } else {
                    item.number--
                }
            }
        })
        localStorage.setItem("cartList", JSON.stringify(cartList))
        show1()
    }
    if (target.innerHTML == '删除') {
        console.log(123)
        var id = target.getAttribute('data-id')
        cartList = cartList.filter(item => {
            return item.id != id
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    if (target.name == "quan") {
        cartList.forEach(item => {

            if (target.checked) {
                item.sele = 1
            } else {
                item.sele = 0
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    if (target.name == 'xuan') {
        var id = target.getAttribute('data-id')
        cartList.forEach(item => {
            if (item.id == id) {
                if (item.sele == 1) {
                    item.sele = 0
                } else {
                    item.sele = 1
                }
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    if (target.innerHTML == '清空购物车') {
        cartList = []
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }

}

function total() {
    var nums = 0 //所选商品数量
    var prices = 0 //所选商品价格
    //遍历所有商品
    cartList.forEach(item => {
        if (item.sele == 1) {
            nums += item.number
            prices += parseFloat(item.price) * parseInt(item.number)
        }
    })
    console.log(cartList)
    return [nums, prices]
}


