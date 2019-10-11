// 工具箱
function $(selector){
    if(arguments[1] == true){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}

 //一、 获取页面元素
 var oTxt = document.querySelectorAll('.txt');
 var oBtn = document.querySelectorAll('.btn');
 //二、事件
 oTxt[0].onblur = function() {
     var str = this.value;
     var re = /^[\u4e00-\u9fa5]{3,}$/;
     if (!re.test(str)) {
         alert('请输入三个及以上的中文字符！');
     }
 }
 oTxt[1].onblur = function() {
    var str = this.value;
    var re = /^[\u4e00-\u9fa5]{1,2}$/;
    if (!re.test(str)) {
        alert('请输入一到两个的中文字符！');
    }
}
 oTxt[2].onblur = function() {
     var str = this.value;
     var re = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
     if (!re.test(str)) {
         alert('请输入正确的邮箱！');
     }
 }
 oTxt[3].onblur = function() {
    var str = this.value;
    var re = /^\w{3,12}$/;
    if (!re.test(str)) {
        alert('请输入3到12位的字母数字下划线的组合！');
    }
}
oTxt[4].onblur = function() {
    var str = this.value;
    var arr = oTxt[4].value;
    var re = /^\w{3,12}$/;
    if (!re.test(str)) {
        alert('请输入3到12位的字母数字下划线的组合！');
        if(!str == arr){
        alert("两次密码输入不一致！")
     }
    }
    
}
 oBtn.onclick = function() {
     var uname = oTxt[0].value;
     var name = oTxt[1].value;
     var email = oTxt[2].value;
     var upwd =  oTxt[3].value;
     //是否为空
     if (!uname && !upwd &!name &email) {
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