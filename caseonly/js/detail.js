/**
 *
 * Created by 靠谱大巴你爱吗 on 2016/9/11.
 */
var nowUrl=window.location.search ;
$(".detail-top .left").remove();
$(".detail-top .showBigPic").remove();
$(".detail-top .right").remove();
$(".detail-top #city_china").remove();
$.ajax({
    url:"http://localhost:8080/product/GetProductById_get"+nowUrl,
    success: function (data) {
        dealData(data);
    },
    dataType:"json",
    complete: function () {
        $("<script src=\"js/jquery.cxselect.min.js\"></script>").appendTo(".detail-top");
        $.cxSelect.defaults.url="data/cityData.min.js";
        $.cxSelect.defaults.nodata = "none";
        $("#city_china").cxSelect({
            selects: ["province", "city", "area"]
        });
    }
});
function dealData(param){
    var arrData=[];
    arrData=param.Data.split("&");
    $("<div class=\"left\"><div class=\"bigPic\"><img src=\""+arrData[0]+
        "\"/></div><div class=\"smallPic\"><img class=\"p1\" src=\""+arrData[0]
        +"\"/><img class=\"p2\" src=\""+arrData[1]+
        "\"/><img class=\"p3\" src=\""+arrData[2]+
        "\"/><img class=\"p4\" src=\""+arrData[3]+
        "\"/></div></div>").appendTo(".detail-top");
    $("<div class=\"showBigPic\"><img src=\"\"\" /></div>").appendTo(".detail-top");
    $("<div class=\"right\"><p class=\"title\">"+arrData[8]+"<p><p class=\"price\">优&nbsp;惠&nbsp;价：<span>"+arrData[9]+
        "</span></p><div class=\"chooseColor\"><span>选择颜色：</span><div class=\"colorBtn\"><a href=\"#\">扣扣系列-自由</a>" +
        "<a href=\"#\">扣扣系列-自由</a><a href=\"#\">扣扣系列-自由</a><a href=\"#\">扣扣系列-自由</a></div></div><div class=\"chooseType\">" +
        "<span>选择型号：</span><div class=\"typeBtn\"><a href=\"#\">iPhone6/6s 4.7 英寸</a><a href=\"#\">6 plus/6s plus  5.5英寸</a></div></div>" +
        "<div id=\"city_china\"><p>选择配送地区： <select class=\"province cxselect\" data-value=\"浙江省\" data-first-title=\"选择省\"></select>" +
        "<select class=\"city cxselect\" data-value=\"杭州市\" data-first-title=\"选择市\"></select><select class=\"area cxselect\" data-value=\"西湖区\" data-first-title=\"选择地区\"></select> " +
        "</p></div>"+
        "<div class=\"count\"><span>数量：</span><input type=\"button\" class=\"sub\" value=\"-\" /><input type=\"text\" class=\"itemCount\" value=\"1\" />" +
        "<input type=\"button\" class=\"add\" value=\"+\"/></div><a class=\"putInCard\" href=\"#\"><span class=\"glyphicon glyphicon-shopping-cart\">" +
        "</span>加入购物车</a><p class=\"tips\">温馨提示：支持7天无理由退货</p></div>").appendTo(".detail-top");
}