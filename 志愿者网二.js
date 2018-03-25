/**
 * Created by taizi on 2017/10/24.
 */
window.onload= function () {
    var oli=document.getElementById("login");
    var oUl=document.getElementById("nav-login-s");
    oli.onmouseover=function(){
        oUl.style.display="block";
    }
    oli.onmouseout=function(){
        oUl.style.display="none";
    }
    oUl.onmouseover=function(){
        oUl.style.display="block";
    }
    oUl.onmouseout=function(){
        oUl.style.display="none";
    }
    //控制内容部分
    var uu=document.getElementById("con-3-nav");
    var li=uu.getElementsByTagName("li");
    var aa= document.getElementById("aa");
    var bb=aa.getElementsByTagName("ul");
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onclick=function(){
            for(i=0;i<bb.length;i++){
                li[i].className="";
                bb[i].style.display="none";
            }
            li[this.index].className="con-3-nav-aa";
            bb[this.index].style.display="block";
        }
    }


}