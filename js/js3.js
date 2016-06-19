

var right= document.getElementsByClassName('uin')[0];
var face= document.getElementsByClassName('face')[0];
var leftBox= document.getElementById("qr_img_box");
var leftDis= document.getElementById("show");
var weiXin= document.getElementsByClassName('_list_item_wx')[0];
var weiC= document.getElementsByClassName('secondHide')[0];
var qqC= document.getElementById("qqLoad");
var qq= document.getElementsByClassName('_list_item_qq ')[0];
var tarClick= document.getElementsByClassName('switcher_plogin')[0];
var hideFi= document.getElementById("qrlogin");
var hideSe= document.getElementById("other_login");
var hideLi=  document.getElementsByClassName("firstHide")[0];
tarClick.onclick= function () {
    hideFi.style.display='none';
    hideSe.style.display='none';
    hideLi.style.display='block'
};
weiXin.onclick= function () {
    weiC.style.display='block';
    utils.addClass(weiXin,'current');
    utils.removeClass(qq,"current");
    qqC.style.display='none'

};
qq.onclick= function () {
    qqC.style.display='block';
    utils.addClass(qq,'current');
    utils.removeClass(weiXin,"current");
    weiC.style.display='none'
};


function pub(x) {
    zhufengAnimate( x,{opacity:1},500);
    x.style.display='block';
}
function pub2(x) {
    zhufengAnimate( x,{opacity:0},500);
    x.style.display='none'
}
leftBox.onmouseenter= function () {
    leftDis.style.display='block';
    pub( leftDis)
};
leftBox.onmouseleave= function () {
    pub2( leftDis)
};
face.onmouseenter= function () {
    pub(right)
};
face.onmouseleave= function () {
    pub2(right)

};
var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
var reg1=/^[0-9]{5,11}\s*$/;

var reg2=/^(13[0-9]{9})|(14[0-9])|(18[0-9])|(15[0-9][0-9]{8})$/;
//    手机号码
// QQ号密码
var reg3=/^[a-zA-Z]\w{5,17}$/;
var oName= document.getElementById("input1");
var va= document.getElementById("err_m");
var ser= document.getElementById("input2");
var mainV= document.getElementById("error_tips");
var ss= document.getElementById("ss");
var last= document.getElementById("last");
oName.onfocus= bind3;
ser.onfocus= function () {
    ss.style.display='none';
    bind3();
};
function bind3(){
    mainV.style.display='none';
    va.innerText='';
    if( this.value=this.defaultValue){
        this.value="";
    }
    this.value="";
}
var flag=false;

oName.onblur=function(){

    var val=this.value;
    var regSpace=/\s+/g;
    val=val.replace(regSpace,"");
    var length=val.length;
    if(length){
        if(3<length<10){
            if(!reg1.test(val)){
                mainV.style.display='block';
                va.innerText='请输入正确账号'
            }else{
                flag=true
            }
        }else if(length>10){
            if(!(reg2.test(val)||reg.test(val))){
                mainV.style.display='block';
                va.innerText='请输入账户'
            }else{
                flag=true
            }
        }
    }else{
        this.value='支持QQ号/邮箱/手机号登陆'
    }

};
var flag1=false;
ser.onblur= function () {
    var val=this.value;
    var regSpace=/\s+/g;
    val=val.replace(regSpace,"");
    var length=val.length;
    if(length){
        if(5<length<16){
            if(!reg3.test(val)){
                mainV.style.display='block';
                va.innerText='请输入正确密码'
            }else{
                flag1=true
            }
        }
    }else{
        this.value="";
        ss.style.display='block';
    }

};
last.onclick= function () {
    if(flag==flag1==true){
        window.open("二级.html");

    }else{
        mainV.style.display='block';
        va.innerText='非合法输入，请重新输入'
    }
};
