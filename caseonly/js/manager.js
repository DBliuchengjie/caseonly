/**
 * Created by 靠谱大巴你爱吗 on 2016/9/11.
 */
$(function () {
    $(".center .left ul li:first-child").on("click",function(){
        if(parseInt($(this).parent().css("height"))>36){
            $(this).parent().animate({
                "height":"36px"
            },300);
            $(this).children(0).attr("class","glyphicon glyphicon-chevron-down");
        }
        else{
            $(this).parent().animate({
                "height":"180px"
            },300);
            $(this).children(0).attr("class","glyphicon glyphicon-chevron-up");
        }
    });
    $(".center .left ul li").on("mouseenter", function () {
       $(this).css({
           "color":"#777"
       });
    });
    $(".center .left ul li").on("mouseleave", function () {
        $(this).css({
            "color":"#c5c5c5"
        });
    });
    $(".top .title span").on("click", function () {
        if(parseInt($(".center .left").css("width"))>40){
            $(".center .left ul").animate({
              "height":"36px"
            },100);
            $(".center .left ul").children(0).children(0).attr("class","glyphicon glyphicon-chevron-down");
            $(".center .left").animate({
                "width":"40px"
            },400);
        }
       else{
            $(".center .left").animate({
                "width":"200px"
            },400);
        }
    });
    $(".center .left .searchById").on("click",function(){
      $(".center .right").empty();
      $("<div class=\"searchBox\"><div class=\"input-group\">"+
      "<input type=\"text\" class=\"form-control\" placeholder=\"输入要查询商品的ID\">"+
      "<span class=\"input-group-btn\"><button class=\"btn btn-default btn-search\" type=\"button\">查询</button><button class=\"btn btn-default btn-searchAll\" type=\"button\">查询所有商品</button></span>"+
      "</div></div><table class=\"table\"><tr><td>序号</td><td>商品ID</td><td>价格</td><td>浏览次数</td><td>收藏次数</td><td>图片路径</td><td>操作</td></tr></table>").appendTo(".center .right");
      $(".center .right .searchBox .input-group .btn-search").on("click",function(){
        $(".center .right .table tr:not(:first-child)").remove();
        $(".center .right nav").remove();
        var proId=parseInt($(".center .right .searchBox .form-control").val());
        $.ajax({
          url:"http://localhost:8080/product/GetProductById_get?id="+proId,
          dataType:"json",
          success:function(data){
            if(data!=null){
              var arrData=data.Data.split("&");
              $("<tr><td>1</td><td>"+proId+"</td><td>"+arrData[9]+"</td><td>"+arrData[5]+"</td><td>"+arrData[7]+"</td><td>"+arrData[0]+
              "</td><td><button type=\"button\" class=\"btn change\">修改</button><button "+
              "type=\"button\" class=\"btn remove\">删除</button></td></tr>").appendTo(".center .right table");
            }
            else{
              alert("没有此商品！");
            }
          }
        })
      });
      $(".center .right .searchBox .input-group .btn-searchAll").on("click",function(){
        $(".center .right .table tr:not(:first-child)").remove();

        $.ajax({
          url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=8&pageindex=1",
          dataType:"json",
          success:function(data){
            var nowPage=1;
            for(var i=0;i<data.length;i++){
              var arrData=data[i].Data.split("&");
              $("<tr><td>"+(i+1)+"</td><td>"+data[i].Id+"</td><td>"+arrData[9]+"</td><td>"+arrData[5]+"</td><td>"+arrData[7]+"</td><td>"+arrData[0]+
              "</td><td><button type=\"button\" class=\"btn change\">修改</button><button "+
              "type=\"button\" class=\"btn remove\">删除</button></td></tr>").appendTo(".center .right table");

            }
            $("<nav><ul class=\"pagination\"><li><a href=\"#\">&laquo;</a></li><li class=\"active\"><a href=\"#\">1</a></li><li><a href=\"#\">2</a></li>"+
            "<li><a href=\"#\">3</a></li><li><a href=\"#\">4</a></li><li><a href=\"#\">5</a></li><li><a href=\"#\">&raquo;</a></li></ul>"+
            "</nav>").appendTo(".center .right");
            $(".center .right nav ul li:first-child").attr("class","disabled");
            $(".center .right .table tr .remove").on("click",function(){
              var deleteId=parseInt($(this).parent().parent().children(1).html());
              $.ajax({
                url:"http://localhost:8080/product/DeleteProductById_get?id="+deleteId,
                success:function(){
                  alert("删除商品成功！");
                }
              })
              $(this).parent().parent().remove();
            });
            $(".center .right nav ul li:not(:first-child,:last-child)").on("click",function(){
              $(".center .right nav ul li:eq(1)").removeClass("active");
              $(".center .right nav ul li:not(:first-child,:last-child)").children(0).css({"background":"#eee","color":"#23527c"});
              $(this).children(0).css({"background":"#337ab7","color":"fff"});
              nowPage=parseInt($(this).children(0).html());
              switch (nowPage) {
                case 1:{
                  $(".center .right nav ul li:last-child").removeClass("disabled");
                  $(".center .right nav ul li:first-child").attr("class","disabled");
                  break;
                }
                case 5:{
                  $(".center .right nav ul li:first-child").removeClass("disabled");
                  $(".center .right nav ul li:last-child").attr("class","disabled");
                  break;
                }
                default:{
                  $(".center .right nav ul li:first-child,.center .right nav ul li:last-child").removeClass("disabled");
                  break;
                }
              }
              $(".center .right nav").css({"display":"none"});
              $(".center .right .table tr:not(:first-child)").remove();
              $.ajax({
                url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=8&pageindex="+nowPage,
                dataType:"json",
                success:function(data){
                  for(var i=0;i<data.length;i++){
                    var arrData=data[i].Data.split("&");
                    $("<tr><td>"+(i+1)+"</td><td>"+data[i].Id+"</td><td>"+arrData[9]+"</td><td>"+arrData[5]+"</td><td>"+arrData[7]+"</td><td>"+arrData[0]+
                    "</td><td><button type=\"button\" class=\"btn change\">修改</button><button "+
                    "type=\"button\" class=\"btn remove\">删除</button></td></tr>").appendTo(".center .right table");
                  }
                },
                complete:function(){
                  $(".center .right nav").css({"display":"block"});
                }
              })
            })
            $(".center .right nav ul li:eq(0)").on("click",function(){
              $(".center .right nav ul li:last-child").removeClass("disabled");
              if(nowPage!=1){
                $(".center .right .table tr:not(:first-child)").remove();
                $.ajax({
                  url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=8&pageindex="+(--nowPage),
                  dataType:"json",
                  success:function(data){
                    for(var i=0;i<data.length;i++){
                      var arrData=data[i].Data.split("&");
                      $("<tr><td>"+(i+1)+"</td><td>"+data[i].Id+"</td><td>"+arrData[9]+"</td><td>"+arrData[5]+"</td><td>"+arrData[7]+"</td><td>"+arrData[0]+
                      "</td><td><button type=\"button\" class=\"btn change\">修改</button><button "+
                      "type=\"button\" class=\"btn remove\">删除</button></td></tr>").appendTo(".center .right table");
                    }
                  }
                })
                $(".center .right nav ul li:not(:first-child,:last-child)").children(0).css({"background":"#eee","color":"#23527c"});
                $(".center .right nav ul li:eq("+nowPage+")").children(0).css({"background":"#337ab7","color":"fff"});
              }
              else{
                $(this).attr("class","disabled");
              }
            })
            $(".center .right nav ul li:eq(6)").on("click",function(){
              $(".center .right nav ul li:first-child").removeClass("disabled");
              $(".center .right nav ul li:eq(1)").removeClass("active");
              if(nowPage!=5){
                $(".center .right .table tr:not(:first-child)").remove();
                $.ajax({
                  url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=8&pageindex="+(++nowPage),
                  dataType:"json",
                  success:function(data){
                    for(var i=0;i<data.length;i++){
                      var arrData=data[i].Data.split("&");
                      $("<tr><td>"+(i+1)+"</td><td>"+data[i].Id+"</td><td>"+arrData[9]+"</td><td>"+arrData[5]+"</td><td>"+arrData[7]+"</td><td>"+arrData[0]+
                      "</td><td><button type=\"button\" class=\"btn change\">修改</button><button "+
                      "type=\"button\" class=\"btn remove\">删除</button></td></tr>").appendTo(".center .right table");
                    }
                  }
                })
                $(".center .right nav ul li:not(:first-child,:last-child)").children(0).css({"background":"#eee","color":"#23527c"});
                $(".center .right nav ul li:eq("+nowPage+")").children(0).css({"background":"#337ab7","color":"fff"});
              }
              else{
                $(this).attr("class","disabled");
              }
            })
          },
          error:function(){
            alert("获取商品失败！");
          }
        })
      });

    });
    $(".center .left .changeById").on("click",function(){
      $(".center .right").empty();
    });
});
