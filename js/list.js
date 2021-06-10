var row, pagination
init()
function init() {
    row = document.querySelector('.banner7-c')
    pagination = document.querySelector('.pagination')
    name1 = getCookie('name')
    console.log(name1)
    //这里判断是否登录
    if (name1) {

    } else {
        alert('先登录后重试')
        //获取当前页面地址
        var url = location.href
        //跳转同时把当前页面地址拼接在地址栏
        location.href = '../html/login.html?newUrl=' + url
    }
}
(async function () {
    var arr = await promiseAjax({
        url: '../php/list.php'
    })
    arr = eval('(' + arr + ')')
    console.log(arr)
    var o1 = {
        pageInfo: {
            pageInfo: 1,
            pagesize: 10,
            totalsize: arr.length,
            totalpage: Math.ceil(arr.length / 10)
        },
        textInfo: {
            first: '首页',
            prev: '上一页',
            next: '下一页',
            last: '尾页'
        }
    }
    new Pagination(pagination, o1, (m) => {
        var arr2 = arr.slice((m - 1) * 8, m * 8)
        var str = ''
        console.log(arr2)
        arr2.forEach(item => {
            console.log(item)
            str += `
            <div class="banner7-c1">
    <img src="${item.img2}">    
    
    <p>${item.tie}</p>
    <p>${item.jianjia}</p>
    <span>${item.price}</span>
    <a class="btn" href="./xiangqing.html?id=${item.id}">查看详情</a>

        </div>
        </div>
            `
        })
        row.innerHTML = str
    })
})()