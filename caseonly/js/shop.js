$.ajax({
    url:"http://localhost:8080/product/GetProductsByPage_get?pagesize=20&pageindex=1",
    success: function (data) {
        dealData(data);
    },
    dataType:"json"
})
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
