/**
 * Created by DB on 2016/9/5.
 */
$(function() {
    var $pageIndex=1;
    var $flag;
    var pageIndex;//商品列表页的页签
    var nowPageIndex=1;//当前所在的页签
    var userEmail;
    var password;//登录注册 输入的 邮箱和密码
    $(".banner>ul>li:first").css("background","#ee910d");
    start();//开始轮播
    clickPageIndex();//点击数字页签是的函数
    prevAndNext();//给轮播左右按钮 添加 事件
    shopHover();//给“商店”按钮 添加 鼠标悬浮 事件
    shopDetailHover();
    designerHover();//给“设计师开店”按钮 添加 鼠标悬浮 事件
    designerDetailHover();
    login();//给"登录"按钮加事件
    loginClose();//点击 X 关闭登录界面
    register();//给"注册"按钮加事件
    registerClose();//给"注册"按钮加事件
    showWallHover();
    detailPicHover();//商品详情页 商品小图片 鼠标悬浮效果
    detailBigPicHover();//放大镜效果
    detailBigPicLeave();
    itemCountEvent();//点击按钮改变商品的数量
    itemContentClick();//点击 商品介绍 和 售后保障 进行切换
    clickPrice();//点击 手机壳的系列或者手机机型 进行选中效果的显示
    pageClick();//点击页签时的操作
    clickCategory();//点击 点击 手机壳的系列或者手机机型 进行选中效果的显示
    clickType();
    backToTop();//回到顶部
    checkLogin();//点击登录按钮
    checkRegister();//点击注册按钮
    function start(){
        $flag=setInterval(function () {
            $pageIndex++;
            $(".banner>ul>li").each(function () {
                $(this).css("background","#838383");
            });
            if($pageIndex>5){
                $pageIndex=1;
            }
            switch ($pageIndex){
                case 1:{
                    $(".banner>ul>li:eq(0)").css("background","#ee910d");
                    break;
                }
                case 2:{
                    $(".banner>ul>li:eq(1)").css("background","#ee910d");
                    break;
                }
                case 3:{
                    $(".banner>ul>li:eq(2)").css("background","#ee910d");
                    break;
                }
                case 4:{
                    $(".banner>ul>li:eq(3)").css("background","#ee910d");
                    break;
                }
                case 5:{
                    $(".banner>ul>li:eq(4)").css("background","#ee910d");
                    break;
                }

            }
            $(".bannerPic2 img").attr("src","img/banner"+$pageIndex+".png");
            $(".bannerPic1 img").fadeTo("1000", 0,function () {
                $(this).attr("src","img/banner"+$pageIndex+".png").fadeTo("0",1);
            });
        },4000);
    }
    function clickPageIndex(){
        $(".banner>ul>li").each(function (index) {
            $(this).on("click", function () {
                $(".bannerPic1 img").stop(false,true);//立即结束当前动画
                clearInterval($flag);
                $(".banner>ul>li").each(function () {
                    $(this).css("background","#838383")
                });
                $(this).css("background","#ee910d");
                $(".bannerPic2 img").attr("src","img/banner"+(index+1)+".png");
                $(".bannerPic1 img").fadeTo("1000", 0,function () {
                    $(this).attr("src","img/banner"+(index+1)+".png").fadeTo("0",1);
                });
                $pageIndex=index+1;
                start();
            })
        });
    }
    function prevAndNext(){
        $(".banner .next").on("click", function () {
            $(".bannerPic1 img").stop(false,true);//立即结束当前动画
            clearInterval($flag);
            $(".banner>ul>li").each(function () {
                $(this).css("background","#838383")
            });
            $pageIndex++;
            if($pageIndex>5){
                $pageIndex=1;
            }
            switch ($pageIndex){
                case 1:{
                    $(".banner>ul>li:eq(0)").css("background","#ee910d");
                    break;
                }
                case 2:{
                    $(".banner>ul>li:eq(1)").css("background","#ee910d");
                    break;
                }
                case 3:{
                    $(".banner>ul>li:eq(2)").css("background","#ee910d");
                    break;
                }
                case 4:{
                    $(".banner>ul>li:eq(3)").css("background","#ee910d");
                    break;
                }
                case 5:{
                    $(".banner>ul>li:eq(4)").css("background","#ee910d");
                    break;
                }

            }
            $(".bannerPic2 img").attr("src","img/banner"+$pageIndex+".png");
            $(".bannerPic1 img").fadeTo("1000", 0,function () {
                $(this).attr("src","img/banner"+$pageIndex+".png").fadeTo("0",1);
            });
            start();
        });
        $(".banner .prev").on("click", function () {
            $(".bannerPic1 img").stop(false,true);//立即结束当前动画
            clearInterval($flag);
            $pageIndex--;
            $(".banner>ul>li").each(function () {
                $(this).css("background","#838383")
            });
            if($pageIndex<1){
                $pageIndex=5;
            }
            switch ($pageIndex){
                case 1:{
                    $(".banner>ul>li:eq(0)").css("background","#ee910d");
                    break;
                }
                case 2:{
                    $(".banner>ul>li:eq(1)").css("background","#ee910d");
                    break;
                }
                case 3:{
                    $(".banner>ul>li:eq(2)").css("background","#ee910d");
                    break;
                }
                case 4:{
                    $(".banner>ul>li:eq(3)").css("background","#ee910d");
                    break;
                }
                case 5:{
                    $(".banner>ul>li:eq(4)").css("background","#ee910d");
                    break;
                }

            }
            $(".bannerPic2 img").attr("src","img/banner"+$pageIndex+".png");
            $(".bannerPic1 img").fadeTo("1000", 0,function () {
                $(this).attr("src","img/banner"+$pageIndex+".png").fadeTo("0",1);
            });
            start();
        });
    }
    function shopHover(){
        $(".navBox a:eq(1)").on("mouseenter", function () {
           $(".shopDetail").css("display","block");
        });
        $(".navBox a:eq(1)").on("mouseleave", function () {
            $(".shopDetail").css("display","none");
        });
    }
    function designerHover(){
        $(".navBox a:eq(2)").on("mouseenter", function () {
            $(".designer").css("display","block");
        });
        $(".navBox a:eq(2)").on("mouseleave", function () {
            $(".designer").css("display","none");
        });
    }
    function shopDetailHover(){
        $(".shopDetail").on("mouseenter", function () {
            $(this).css("display","block");
        });
        $(".shopDetail").on("mouseleave", function () {
            $(this).css("display","none");
        });
    }
    function designerDetailHover(){
        $(".designer").on("mouseenter", function () {
            $(this).css("display","block");
        });
        $(".designer").on("mouseleave", function () {
            $(this).css("display","none");
        });
    }
    function login(){
        $("#login").on("click", function () {
            $(".bg").css("display","block");
            $(".login").animate({"width":"560px"},500);
            $(".login").css("display","block");
        });
    }
    function loginClose(){
        $(".loginClose").on("click", function () {
            $(".bg").css("display","none");
            $(".login").animate({"width":"0px"},500, function () {
                $(".login").css("display","none");
            });
        });
    }
    function register(){
        $("#register").on("click", function () {
            $(".bg").css("display","block");
            $(".register").animate({"width":"560px"},500);
            $(".register").css("display","block");
        });
    }
    function registerClose(){
        $(".registerClose").on("click", function () {
            $(".bg").css("display","none");
            $(".register").animate({"width":"0px"},500, function () {
                $(".register").css("display","none");
            });
        });
    }
    function showWallHover(){
        $(".showWall .row img").on("mouseenter", function () {
            $(this).animate({
                "width":"225px",
                "height":"230px",
                "margin":"-15px -15px 0 0"
            },500);
        });
        $(".showWall .row img").on("mouseleave", function () {
            $(this).animate({
                "width":"195px",
                "height":"200px",
                "margin":"0"
            },500);
        })
    }
    function detailPicHover(){
        $(".detail-top .smallPic img").on("mouseover", function () {
            $(".smallPic img").css("border","0");
            $(this).css("border","1px solid red");
            $(".detail-top .bigPic img").attr("src",$(this).attr("src"));
        });
    }
    function detailBigPicHover(){
        $(".detail-top .bigPic").on("mouseenter",function(){
            $(".detail-top .bigPic span").css({"display":"block"});
        });
        $(".detail-top .bigPic .maskLayer").on("mousemove",function(event){
            $(".detail-top .showBigPic").css("display","block");
            $(".detail-top .showBigPic img").attr("src",$(this).parent().children(0).attr("src"));
            if(event.offsetX<50){
                $(".detail-top .bigPic span").css({"left":"0px"});
            }
            else if(event.offsetX>350){
                $(".detail-top .bigPic span").css({"left":"300px"});
            }
            else{
                $(".detail-top .bigPic span").css({"left":(event.offsetX-50)+"px"});
            }
            if(event.offsetY<50){
                $(".detail-top .bigPic span").css({"top":"0px"});
            }
            else if(event.offsetY>300){
                $(".detail-top .bigPic span").css({"top":"250px"});
            }
            else{
                $(".detail-top .bigPic span").css({"top":(event.offsetY-50)+"px"});
            }
            if(event.offsetX>240){
                $(".detail-top .showBigPic img").css("left",-160+"px");
            }
            else{
                $(".detail-top .showBigPic img").css("left",-event.offsetX+100+"px");
            }
            if(event.offsetY>240){
                $(".detail-top .showBigPic img").css("top",-160+"px");
            }
            else{
                $(".detail-top .showBigPic img").css("top",-event.offsetY+100+"px");
            }
        });
        $(".detail-top .bigPic .maskLayer").on("mouseleave",function(){
            $(".detail-top .bigPic span").css({"display":"none"});
            $(".detail-top .showBigPic").css("display","none");
        });
    }
    function detailBigPicLeave(){
        $(".detail-top .bigPic img").on("mouseleave", function () {
            $(".detail-top .showBigPic").css("display","none");
        });
    }
    function itemCountEvent(){
        var $nowCount;
        $(".detail-top .right .add").on("click", function () {
            $nowCount=parseInt($(".detail-top .right .itemCount").val());
            $(".detail-top .right .itemCount").val($nowCount+1);
            if($nowCount!=1){
                $(".detail-top .right .sub").removeAttr("disabled");
            }
        });
        $(".detail-top .right .sub").on("click", function () {
            $nowCount=parseInt($(".detail-top .right .itemCount").val());
            if($nowCount==1){
                $(".detail-top .right .sub").attr("disabled","disabled");
            }
            else{
                $(".detail-top .right .itemCount").val($nowCount-1);
            }
        });
    }
    function itemContentClick(){
        $(".content .a1").on("click", function () {
           $(".content .itemContent-bottom1").css("display","block");
            $(".content .itemContent-bottom2").css("display","none");
        });
        $(".content .a2").on("click", function () {
            $(".content .itemContent-bottom2").css("display","block");
            $(".content .itemContent-bottom1").css("display","none");
        });
    }
    function clickPrice(){
           $(".detail-top .right .colorBtn a").on("click", function () {
               $(".detail-top .right .colorBtn a").each(function () {
                   $(".detail-top .right .colorBtn a").css({
                       "border":"0",
                       "color":"#000"
                   });
               });
               $(this).css({
                   "border":"1px solid red",
                   "textDecoration":"none",
                   "color":"red"
               });
           }) ;
        $(".detail-top .right .typeBtn a").on("click", function () {
            $(".detail-top .right .typeBtn a").each(function () {
                $(".detail-top .right .typeBtn a").css("border","0");
            });
            $(this).css({
                "border":"1px solid red",
                "textDecoration":"none",
                "color":"red"
            });
        }) ;
    }
    function pageClick(){
        $(".pageLink a").on("click", function () {
            $(".pageLink a").each(function () {
                $(".pageLink a").css("background","#ffffff");
            });
            $(".phoneDetail>ul li").remove();
            switch ($(this).attr("num")){
                case "1":{
                    pageIndex=1;
                    nowPageIndex=1;
                    $(".pageLink a:eq(1)").css("background","#C5C5C5");
                    break;
                }
                case "2":{
                    pageIndex=2;
                    nowPageIndex=2;
                    $(".pageLink a:eq(2)").css("background","#C5C5C5");
                    break;
                }
                case "3":{
                    pageIndex=3;
                    nowPageIndex=3;
                    $(".pageLink a:eq(3)").css("background","#C5C5C5");
                    break;
                }
                case "4":{
                    pageIndex=4;
                    nowPageIndex=4;
                    $(".pageLink a:eq(4)").css("background","#C5C5C5");
                    break;
                }
                case "<":{
                    switch (nowPageIndex){
                        case 1:{
                            pageIndex=1;
                            nowPageIndex=1;
                            $(".pageLink a:eq(1)").css("background","#C5C5C5");
                            break;
                        }
                        case 2:{
                            pageIndex=1;
                            nowPageIndex=1;
                            $(".pageLink a:eq(1)").css("background","#C5C5C5");
                            break;
                        }
                        case 3:{
                            pageIndex=2;
                            nowPageIndex=2;
                            $(".pageLink a:eq(2)").css("background","#C5C5C5");
                            break;
                        }
                        case 4:{
                            pageIndex=3;
                            nowPageIndex=3;
                            $(".pageLink a:eq(3)").css("background","#C5C5C5");
                            break;
                        }
                    }
                    break;
                }
                case ">":{
                    switch (nowPageIndex){
                        case 1:{
                            pageIndex=2;
                            nowPageIndex=2;
                            $(".pageLink a:eq(2)").css("background","#C5C5C5");
                            break;
                        }
                        case 2:{
                            pageIndex=3;
                            nowPageIndex=3;
                            $(".pageLink a:eq(3)").css("background","#C5C5C5");
                            break;
                        }
                        case 3:{
                            pageIndex=4;
                            nowPageIndex=4;
                            $(".pageLink a:eq(4)").css("background","#C5C5C5");
                            break;
                        }
                        case 4:{
                            pageIndex=4;
                            nowPageIndex=4;
                            $(".pageLink a:eq(4)").css("background","#C5C5C5");
                            break;
                        }
                    }
                    break;
                }
            }
            $.ajax({
                url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=20&pageindex="+pageIndex,
                success: function (data) {
                    dealData(data);
                },
                dataType:"json"
            })
        });

    }
    function dealData(param){
        for(var i=0;i<param.length;i++){
            var arrData=[];
            arrData=param[i].Data.split(";");
            var $li= $("<li><a href=\"detail.html?id="+param[i].Id+"\"><img  src=\""+arrData[0]+"\"/></a><div class=\"tips\"><img src=\""+arrData[4]+
                "\"/><span class=\"lookThrough\">"+arrData[5]+"</span><img src=\""+arrData[6]+"\"/><span class=\"collect\">"+
                arrData[7]+"</span></div><p class=\"name\">"+arrData[8]+"</p><p class=\"price\">"+arrData[9]+
                "</p><a class=\"putInCard\" href=\"#\">"+arrData[10]+
                "</a><a class=\"collectThis\" href=\"#\"><img class=\"collectIt\" src=\""+arrData[11]+"\">收藏 </a> </li>");
            $(".phoneDetail>ul").append($li);
        }
    }
    function clickCategory(){
        $(".phoneList .category a").on("click", function () {
            $(".phoneList .category a").each(function () {
                $(".phoneList .category a").css({
                    "color":"#000",
                    "border":"0"
                });
            });
            $(this).css({
                "textDecoration":"none",
                "color":"red"
            });
        });
    }
    function clickType(){
        $(".phoneList .type a").on("click", function () {
            $(".phoneList .type a").each(function () {
                $(".phoneList .type a").css({
                    "color":"#000",
                    "border":"0"
                });
            });
            $(this).css({
                "textDecoration":"none",
                "color":"red"
            });
        });
    }
    function backToTop(){
        $(window).on("scroll",function(){
            var top=$(window).scrollTop();
            if(top>100){
                $(".backToTop").fadeIn(1000);
            }
            else{
                $(".backToTop").fadeOut(1000);
            }
        });
        $(".backToTop").on("click", function () {
           $("body,html").animate({scrollTop:0},600);
        });
    }
    function checkLogin(){
        $(".login .loginClick").on("click",function(){
            userEmail=$(".login .loginEmail input").val();
            password=$(".login .password input").val();
            if(userEmail&&password){
                $.ajax({
                    url:"http://localhost:8080/user/loginGet",
                    data:{
                        "name":userEmail,
                        "password":password
                    },
                    success:function(data){
                        if(data==1){
                            alert("登陆成功！");
                            $(".bg").css("display","none");
                            $(".register").animate({"width":"0px"},500, function () {
                                $(".register").css("display","none");
                            });
                        }else{
                            alert("邮箱或密码错误！");
                        }
                    }
                })
            }else{
                alert("邮箱和密码不能为空！");
            }
        });
    }
    function checkRegister(){
        $(".register .registerClick").on("click",function(){
            userEmail=$(".register .registerEmail input").val();
            password=$(".register .registerPassword input").val();
            if(userEmail&&password){
                $.ajax({
                    url:"http://localhost:8080/user/registerGet",
                    data:{
                        "name":userEmail,
                        "password":password
                    },
                    success:function(data){
                        if(data==1){
                            alert("用户已存在！");
                        }else{
                            alert("注册成功！");
                            $(".bg").css("display","none");
                            $(".register").animate({"width":"0px"},500, function () {
                                $(".register").css("display","none");
                            });
                        }
                    }
                })
            }
            else{
                alert("邮箱和密码不能为空！");
            }
        });
    }
    // 根据姓名返回 密码
    // function getPassword(name){
    //     var LoginPassword;
    //     var strLogin=Cookie.getCookie("logincookie");
    //     var arrLogin=strLogin.split("||");
    //     var arrItem;
    //     for(var i=0;i<arrLogin.length;i++){
    //         arrItem=arrLogin[i].split("&&");
    //         if(arrItem[0]==name){
    //             LoginPassword=arrItem[1];
    //             return LoginPassword;
    //         }
    //     }
    //     return LoginPassword;
    // };
    // //创建 cookie
    // function setLoginCookie(name,value,days){
    //     if(!Cookie.getCookie(name)){//如果名字为 name 的cookie不存在 则创建该cookie
    //         //形如：logincookie=name1&&lisi||name2&&zhangsan-
    //         Cookie.setCookie(name,value,days);
    //         alert("注册成功");
    //         $(".bg").css("display","none");
    //         $(".register").animate({"width":"0px"},500, function () {
    //             $(".register").css("display","none");
    //         });
    //         return 1;
    //     }
    //     else{//若已经存在了 则在 名称为name的cookie 值后面继续添加内容
    //         var oldLoginStr=Cookie.getCookie(name);
    //         var arrOldLogin=oldLoginStr.split("||");
    //         var arrItem;
    //         for(var i=0;i<arrOldLogin.length;i++){
    //           arrItem=arrOldLogin[i].split("&&");
    //             if(arrItem[0]==userEmail){
    //                 alert("用户已存在");
    //                 return -1;
    //             }
    //         };
    //         var newLoginStr=oldLoginStr+"||"+value;
    //         Cookie.setCookie(name,newLoginStr,days);
    //         alert("注册成功")
    //         return 1;
    //     }
    // };
});
