var dot_url = "http://itest-monitor.aliyun.com:8000/accesslog";
$(function () {
     $(document).delegate('.itest-dot','click',function(){
        doDot(this);
    });
    dots(null,"visit");
});


function dot(id){
    var ele = $("#" + id);
    if (ele != null){
        doDot(ele);
    }
}

function doDot(ele){
    var projectId;
    if ($(ele).attr("dot-productId") == undefined){
        var url = window.location.href.toLowerCase();
        if (url.indexOf("linkcheck") > 0){
            projectId = 1;
        }else if (url.indexOf("multitest") > 0){
            projectId = 2;
        }else if (url.indexOf("multibrowsers") > 0){
            projectId = 5;
        }else if (url.indexOf("aui") > 0){
            projectId = 3;
        }else if (url.indexOf("portal") > 0){
            projectId = 4;
        }else if (url.indexOf("auiplugin") > 0){
            projectId = 0;
        }
    }else{
        projectId = $(ele).attr("dot-projectId");
    }
    $.ajax({
        type: 'POST',
        url: dot_url ,
        data: {
            "bu_id":"",
            "out_id":$('#projectId').val(),
            "out_from":$(ele).attr("dot-out-from") == undefined ? document.referrer : $(ele).attr("dot-out-from"),
            "detail":$(ele).attr("dot-detail") == undefined ? window.location.href : $(ele).attr("dot-detail"),
            "user":$('#userId').val() == "" ? "" : $('#userId').val(),
            "source":$(ele).attr("dot-source") == undefined ? "" : $(ele).attr("dot-source"),
            "insertflag":$(ele).attr("dot-insertflag") == undefined ? 0 : $(ele).attr("dot-insertflag"),
            "productId": projectId
        } ,
        success: function(){
        }
    });
}

function dots(productId, source, detail){
    if (productId == null){
        var url = window.location.href.toLowerCase();
        if (url.indexOf("linkcheck") > 0){
            productId = 1;
        }else if (url.indexOf("multitest") > 0){
            productId = 2;
        }else if (url.indexOf("multibrowsers") > 0){
            productId = 5;
        }else if (url.indexOf("aui") > 0){
            productId = 3;
        }else if (url.indexOf("portal") > 0){
            productId = 4;
        }else if (url.indexOf("auiplugin") > 0){
            productId = 0;
        }
    }

    $.ajax({
        type: 'POST',
        url: dot_url ,
        data: {
            "bu_id":"",
            "out_id":$('#projectId').val(),
            "out_from":document.referrer,
            "detail":detail == null ? window.location.href : detail,
            "user":$('#userId').val() == "" ? "" : $('#userId').val(),
            "source":source,
            "insertflag":0,
            "productId": productId
        } ,
        success: function(){
        }
    });
}