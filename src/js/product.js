var closeTop = $(".head-top-right");
var headTop = $(".head-top")
closeTop.onclick = function(){
    closeTop.style.display = "none";
    headTop.style.display = "none";
}
// 头部
var btn_one = $(".btn-one");
var btn_two = $(".btn-two");
var one = $(".produst-main-one");
var two = $(".produst-main-two");
btn_one.onclick = function(){
    btn_one.style.border_bottom = "3px solid #623381";
    one.style.display = "block";
    two.style.display = "none";
}
btn_two.onclick = function(){
    btn_two.style.border_bottom = "3px solid #623381";
    two.style.display = "block";
    one.style.display = "none";
}
// 评价及详情点击跳转
var box = $(".container");
var box1 = box.children;
var box2 = $(".go-circle");
var go_left = $(".go-left");
var go_right = $(".go-right");
var len = box1.length -3;
// alert(len);
var current = 0;
for(var j = 0;j<len;j++){
    var li = document.createElement("li");
    box2.appendChild(li);
}
function go(){
    for(var j =0;j<len;j++){
        box1[j].style.display = "none";
    }
    if(len == current){
        current = 0;
    }
    box1[current].style.display = "block";
    // li[current].style.background = "#70378d";
    current++;
}
function back(){
    for(var j =0;j<len;j++){
        box1[j].style.display = "none";
    }
    if(current == 0){
        current = len;
    }
    // box1[current-1].style.display = "block";
    box1[current-1].style.display = "block";
    current--;
}
go_left.onclick = function(){
    back();
}
go_right.onclick = function(){
    go();
}
// 加购
var oBuy = document.querySelector('#buy');
var oAddToCart = document.querySelectorAll('.goodList .addToCart');
initNum();
oAddToCart.onclick = function() {
var produstSrc = $("#product-img src");
var produstName = $(".contain-right h2");
var produstFullName = $(".contain-right p");
var productMil = $(".contain-right em");
var produstPrice = $(".contain-right h5 strong");
var goodId = this.parentNode.getAttribute('data-good-id');
var storage = window.localStorage;
var goodStr = storage.carts ? storage.carts : '';
var goodObj = convertStorageStrToStorageObj(goodStr);
if (goodId in goodObj) {
    //在，数量 + 1
    goodObj[goodId].num++;
} else {
    //不在，全局加入对象
    goodObj[goodName] = {
        "name": produstName,
        "price": produstPrice,
        "fullname":produstFullName,
        "contain":productMil,
        "src": produstSrc ,
        "num": 1
    }
}
//重新加入localStorage
storage.carts = JSON.stringify(goodObj);
   //改变购物车中按钮中的数量
   var strNum = oBuy.value;
   var re = /(\d+)/;
   var num = Number(re.exec(strNum)[1]);
   oBuy.value = `(${num + 1})`;
}
function initNum() {
    var storage = window.localStorage;
    var str = storage.carts;
    var obj = convertStorageStrToStorageObj(str);
    var sum = 0;
    for (let key in obj) {
        sum += obj[key].num;
    }
    oBuy.value = `(${sum})`;
}
function convertStorageStrToStorageObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}
function $(selector){
    if(arguments[1] == true){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}