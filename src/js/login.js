// 工具箱
function $(selector){
    if(arguments[1] == true){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}
// 获取页面元素
var oTxt = document.querySelectorAll('.txt');
var oBtn = document.querySelectorAll('.btn');
//二、事件
oTxt[0].onblur = function() {
    var str = this.value;
    var re = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    if (!re.test(str)) {
        alert('请输入正确的邮箱！');
    }
}
oTxt[1].onblur = function() {
    var str = this.value;
    var re = /^\w{3,12}$/;
    if (!re.test(str)) {
        alert('请输入3到12位的字母数字下划线的组合！');
    }
}
oBtn[0].onclick = function() {
    var email = oTxt[0].value;
    var upwd = oTxt[1].value;
    //是否为空
    if (!email && !upwd) {
        alert('用户名和密码不能为空！');
        return;
    }
    //获取cookie
    var cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
    //转为对象
    var cookieObj = convertCookieStrToCookieObj(cookieStr);

    if (email in cookieObj) {
        if (cookieObj[email] === upwd) {
            location.href = 'product.html';
            return;
        } else {
            alert('密码不正确！');
        }
    } else {
        alert('用户不存在！');
    }
}
function convertCookieStrToCookieObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}