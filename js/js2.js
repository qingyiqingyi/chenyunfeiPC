
function toTop(){
    var go = document.getElementById("goTop");
    go.onclick = function(){
        window.onscroll = null;
        this.style.display = "none";
        var distance = DOM.win("scrollTop");
        var sec = 500;
        var interval = 10;
        var step = distance/sec*interval;
        var timer = setInterval(function(){
            var curTop = DOM.win("scrollTop");
            var top = curTop-step;
            if(curTop===0){
                clearInterval(timer);
                window.onscroll = scroll;
            }
            DOM.win("scrollTop",top);
        },interval)
    };
    function scroll(){
        var t = DOM.win("scrollTop");
        var h = DOM.win("clientHeight");
        go.style.display = (t-h)>0? "block":"none";
    }
    window.onscroll = scroll;
}
toTop();
var hi= document.getElementById("hi");
var nav = document.getElementById("qmenu_menu");
var nav_ = document.getElementById("qmenu");
var none= document.getElementById("none");
var mn = document.getElementById("mn_forum");
var mn_= document.getElementById("mn_forum_menu");
var hh= document.getElementById("hh")
var hii= document.getElementById("hii")
var nv= document.getElementById("nv")
var body = document.body||document.documentElement;
//
console.log(none.childNodes)
body.onmouseover= function (e) {

    e=e||window.event;
    e.stopPropagation();
    var tar= e.target|| e.srcElement;

    if(tar!== nav&&tar!==nav_&&tar!==none&&tar!==hh&&tar!==hii){
        nav.style.display="none";}else{ nav.style.display="block";}

};


//左面hover效果
mn.onmouseenter= function () {
    mn_.style.display="block";
}
mn.onmouseleave= function () {
    mn_.style.display="none";
}





































//function isUndefined(variable) {
//    return typeof variable == 'undefined' ? true : false;
//}
//
//function _attachEvent(obj, evt, func, eventobj) {
//    eventobj = !eventobj ? obj : eventobj;
//    if(obj.addEventListener) {
//        obj.addEventListener(evt, func, false);
//    } else if(eventobj.attachEvent) {
//        obj.attachEvent('on' + evt, func);
//    }
//}
//
//var delayShowST = null;
//function delayShow(ctrlObj, call, time) {
//    if(typeof ctrlObj == 'object') {
//        var ctrlid = ctrlObj.id;
//        call = call || function () {showMenu(ctrlid);};
//    }
//    var time = isUndefined(time) ? 500 : time;
//    delayShowST = setTimeout(function () {
//        if(typeof call == 'function') {
//            call();
//        } else {
//            eval(call);
//        }
//    }, time);
//    if(!ctrlObj.delayinit) {
//        _attachEvent(ctrlObj, 'mouseout', function() {clearTimeout(delayShowST);});
//        ctrlObj.delayinit = 1;
//    }
//}
















