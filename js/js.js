
~function(){


//动态绑定
    bind();
    function bind(){
        var bind1= document.getElementById("bind1");
        var bind2= document.getElementById("cc");
        var bind3= document.getElementById("bind3");
        var bind4= document.getElementById("bind4");
        var con=null;
        var xhr=new XMLHttpRequest();
        xhr.open("get","json1.txt?_="+Math.random(),false);
        xhr.onreadystatechange= function () {
            if(xhr.readyState===4&&/^2\d{2}$/){
                con=JSON.parse(xhr.responseText);
            }
        };
        xhr.send(null);
        console.log(con)
        var str='',str1='',str2='',str3='';
        for (var i = 0; i < con.length; i++) {
            var cur = con[i];
            if(i==0){
              str+="<img class=big src="+cur['img']+">" ;
                str1+="<img  src="+cur['img1']+">"
            }
            if(i==1){
                str2+="<img src="+cur['img']+">" ;
                str3+="<img  src="+cur['img1']+">";
                str3+="<p>全新chrome内核，内存占用低，轻巧炫酷皮肤</p>"

            }

        }
        bind1.innerHTML=str;
        bind2.innerHTML=str1;
        bind3.innerHTML=str2;
        bind4.innerHTML+=str3;

    }



//微信关注
    var mark = document.getElementById('mark');
    var sign = mark.getElementsByClassName('sign')[0];
    var radius= document.getElementsByClassName("radius");

    ~function (){
        mark.onmouseover = function(){
            sign.style.display="block";
            zhufengAnimate(sign,{height:160,opacity:1},500)


        }  ;
        mark.onmouseout = function(){
            sign.style.display="none";
            zhufengAnimate(sign,{height:0,opacity:0},500)
        } ;
    }();


    //后面的圆点点
    var oUl= document.getElementById("con");
    var oLis= oUl.getElementsByTagName("li");
    function pub(x){
        for (var j = 0; j < radius.length; j++) {
            var cur1 =radius[j];
            cur1.style.display='none';
            zhufengAnimate(radius[x],{opacity:0},500)
        }
    }
    for (var i = 0; i < oLis.length; i++) {
        var cur = oLis[i];
        cur.index=i;
        cur.onmouseenter= function () {
               pub(this.index);
            radius[this.index].style.display='block';
            zhufengAnimate( radius[this.index],{opacity:1},500)
        };
        cur.onmouseleave= function () {
                pub(this.index);
        }
    }




//放大镜效果
~function(){
    var newsList= document.getElementsByClassName("newsImg")
  console.log(newsList);

        for(var i=0;i<newsList.length;i++){
            !function(i){
                var cur=newsList[i];
                cur.onmouseover= function () {
                    this.className="aniimgstyle"
                };
                cur.onmouseout= function () {
                    this.className="newsImg"
                }
            }(i)
        }



}()


//轮播效果实现
//    豹子效果
~function () {
    var animal= document.getElementById("box1");
    var bear= document.getElementById("box2");
    var text= document.getElementById("cc");
    var collect=document.getElementsByClassName('o1');
    var textBox=document.getElementsByClassName('c1-1')[0];
    var c1=document.getElementsByClassName('c1')[0];

    var c2=document.getElementsByClassName('obj-c')[0];
    var picture=document.getElementsByClassName('picture')[0];
 var c3=document.getElementsByClassName('obj-d')[0];
    var doc=document.body.clientWidth;
    var circle= document.getElementById("check");
    var foc=circle.getElementsByTagName("li");
    var banner= document.getElementById("banner");
    var header= document.getElementById("header");
    var leftBtn=document.getElementsByClassName('leftBtn')[0];
    var rightBtn=document.getElementsByClassName('rightBtn')[0];

    var d=doc*0.6;
    var a=doc*0.5;
    var h=doc*0.8;
    var count=1;
    c1.style.display='block';
    textBox.style.display='block';
    first(c1,a);
    first(c2,0);
    first(c3,h);
    text.className='cca';
    function auto(){

        for (var i = 0; i < collect.length;i++) {
            var cur = collect[count];
            collect[i].style.display='none';
            zhufengAnimate(collect[i],{opacity:0},500);
            cur.style.display='block';
            zhufengAnimate(cur,{opacity:1},500);
            if(count==0){
                c1.style.display='block';
                first(c1,a);
                first(c2,0);
                first(c3,h);
                picture.style.paddingTop=89+'px';

                text.className='cca'
            }
            if(count==1){
                first(c2,a);
                first(c3,a);
                first(c1,d);
                picture.style.paddingTop=0;

                text.className='none';
            }
        }
        count--;

        focus(count+1);
        if(count==-1)count=1;

    }


    function first(x,a){
        zhufengAnimate(x,{left:a},500)
    }
    var timer=window.setInterval(auto,3000);
    banner.onmouseover= function (e) {
        e=e||window.event;
        var tar= e.target|| e.srcElement;
        if(tar!==header){
            clearInterval(timer)
        }
    };
    banner.onmouseout= function (e) {
        e=e||window.event;
        var tar= e.target|| e.srcElement;
        if(tar!==header){
            timer=window.setInterval(auto,3000);
        }
    };
    function focus(count){

        for (var i = 0; i < foc.length; i++) {
            var cur = foc[i];
            cur.className='';

        }
        foc[count].className='selected'
    }

    //焦点点击
    for (var i = 0; i < foc.length; i++) {
        ~function (i) {
            var cur = foc[i];
            cur.onclick= auto
        }(i)

    }
    
//左右按钮点击
    leftBtn.onclick=rightBtn.onclick= auto;




}()




}()

