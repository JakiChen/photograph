$(function () {
    var a = navigator.userAgent; - 1 != a.search(/iPhone/) || -1 != a.search(/iPad/) || -1 != a.search(/iPod/) || -1 != a.search(/Android/) ? $.ajax({
        url: "/js/app_sp.js?190505",
        dataType: "script",
        cache: !1
    }) : $.ajax({
        url: "/js/app.js?190505",
        dataType: "script",
        cache: !1
    })
});
