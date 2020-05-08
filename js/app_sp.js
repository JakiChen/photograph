var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function wheelEnabled(e) {
    _wheelEnabled = e
}

function wheel(e) {
    _wheelEnabled || (e || (e = window.event), e.preventDefault && e.preventDefault(), e.returnValue = !1)
}

function imageLoad(e, a) {
    var n = 0,
        o = 0;
    for (n; n < e.length; ++n) {
        var t = $(new Image);
        t.attr("src", e[n]), t.complete ? ++o == e.length && a.call(this) : t.on("load", function () {
            ++o == e.length && a.call(this)
        })
    }
}
$.fn.imagesLoaded = function (e) {
    var a = $(this),
        n = 0,
        o = a.length;
    a.each(function (a) {
        var t = new Image;
        t.src = $(this).attr("src");
        var i = setTimeout(function () {
            ++n == o && e.call(this)
        }, 1e4);
        t.complete ? (clearTimeout(i), ++n == o && e.call(this)) : t.onload = function () {
            clearTimeout(i), ++n == o && e.call(this)
        }
    })
};
var _wheelEnabled = !0;
window.addEventListener && (window.addEventListener("touchmove", wheel, {
    passive: !1
}), window.addEventListener("mousewheel", wheel, {
    passive: !1
})), window.onmousewheel = document.onmousewheel = wheel, $(function () {
    function e(e, a) {
        (v += e) < a || setTimeout(function () {
            $(".loaderWrap").fadeOut(200).find(".loader").removeClass("loading"), $("body.home")[0] ? ($("#af").addClass("loaded").css("opacity", 1), $("#imageSlide").show(), c($("#contents")), S.kill(), b.restart(), l($("#contents"))) : ($("body.products")[0] || $("body.portrait")[0] || $("body.artworks")[0]) && (d($("#contents")), $("#imageSlide").show(), O.kill(), k.restart(), l($("#contents")))
        }, 600)
    }

    function a() {
        var e = location.search.substring(1);
        if (e) {
            for (var a = e.split("&"), o = [], t = 0; t < a.length; t++) {
                var i = a[t].split("=");
                o[i[0]] = i[1]
            }
            o.position && n("#" + o.position, "Power4.easeInOut", .6, 0, "none")
        }
    }

    function n(e, a, n, o, t) {
        wheelEnabled(!1);
        var i = $(e).offset().top;
        i += o, scrollY = w.height() - i;
        var r = window.innerHeight ? window.innerHeight : f.height();
        r > scrollY && (i = w.height() - r), TweenMax.to(window, n, {
            scrollTo: {
                y: i,
                autoKill: !1
            },
            ease: a,
            onComplete: function () {
                wheelEnabled(!0), "none" != t && t.call(this)
            }
        })
    }

    function o(e, a) {
        $("body").addClass("pageMove"), $("#imageSlide").hide(), $("#cover").addClass(a).show(), O.fromTo("#cover .left", 1, {
            height: 0
        }, {
            height: "50%",
            ease: Power4.easeInOut
        }, "start").fromTo("#cover .right", 1, {
            height: 0
        }, {
            height: "50%",
            ease: Power4.easeInOut,
            onComplete: function () {
                $(".loaderWrap").show().find(".loader").addClass("loading"), $.pjax({
                    url: e,
                    container: "#contents",
                    fragment: "#contents",
                    timeout: 5e3
                })
            }
        }, "start+=0.08").pause(), $("#" + a + "Section")[0], O.restart()
    }

    function t(e, a) {
        $("body").addClass("pageMove"), $("#imageSlide").hide(), $("#cover").addClass(a).show(), S.fromTo("#cover .right", 1, {
            width: 0,
            backgroundPosition: "50% -100%"
        }, {
            width: "100%",
            backgroundPosition: "50% 50%",
            ease: Power4.easeInOut
        }, "start").fromTo("#cover .left", 1, {
            width: 0,
            backgroundPosition: "50% -100%"
        }, {
            width: "100%",
            backgroundPosition: "50% 50%",
            ease: Power4.easeInOut,
            onComplete: function () {
                $(".loaderWrap").show().find(".loader").addClass("loading"), $.pjax({
                    url: e,
                    container: "#contents",
                    fragment: "#contents",
                    timeout: 5e3
                })
            }
        }, "start+=0.05").pause(), S.restart()
    }

    function i(e, a) {
        return Math.floor(Math.random() * (1 + e - a) + a)
    }

    function r(e) {
        var a = document.createElement("div");
        for (var n in e)
            if (e.hasOwnProperty(n) && void 0 !== a.style[n]) return e[n]
    }

    function s(e) {
        e.removeClass();
        var a = Number(e.attr("data-move"));
        a == I ? a = x : a += 1, e.addClass("move" + a), e.attr("data-move", a), e.addClass("time" + i(I, x));
        var n = i(30, 5);
        e.css({
            top: i(f.height(), 0) + "px",
            left: i(f.width(), 0) + "px",
            width: n + "px",
            height: n + "px"
        })
    }

    function l(e) {
        $("#nav").find(".home").removeClass("on"), clearInterval(P), $(".scrollbar")[0] && e.find(".scrollbar").mCustomScrollbar({
            theme: "minimal-dark"
        }), e.find(".linkToList").on("click", function () {
            $("#navOpener").hasClass("on") && ($("#navOpener").removeClass("on"), y.kill(), C.restart());
            var e = $(this).attr("href");
            return u = $(this).data("target"), o(e, u), !1
        }), e.find(".linkToTop").on("click", function () {
            if ($("body").hasClass("home") && $(this).hasClass("home")) return !1;
            $("#navOpener").hasClass("on") && ($("#navOpener").removeClass("on"), y.kill(), C.restart());
            var e = $(this).attr("href");
            return u = $(this).data("target"), t(e, u), !1
        })
    }

    function d(e) {
        e.find("a.viewPhoto").on("click", function () {
            if (!$("#worksSingle").hasClass("open")) {
                var e = $(this).data("info"),
                    a = $(this).data("focus"),
                    n = [];
                n[0] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", ""), imageLoad(n, function () {
                    $("#worksSingle").find(".focus .i img, .shadow .i img").attr("src", a), $("#worksSingle").find(".info .t").text(e), T.restart()
                })
            }
        }), $("#worksSingle").find(".close a, .focus .i").on("click", function () {
            $("#worksSingle").hasClass("open") && T.reverse()
        });
        new ScrollMagic.Scene({
            triggerElement: "#contents",
            triggerHook: "onLeave",
            duration: f.height()
        }).setTween(function () {
            TweenMax.fromTo(e.find("#headImage"), 2, {
                scale: 1.3,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                ease: Power4.easeOut
            })
        }).addTo(p), new ScrollMagic.Scene({
            triggerElement: "#footerArea",
            triggerHook: "onCenter",
            offset: 300,
            reverse: !1
        }).on("enter", function (e) {
            $("#footerArea").addClass("on")
        }).addTo(p);
        e.find(".linkToNext").on("click", function () {
            var e = $(this).attr("href");
            return u = $(this).data("target"), o(e, u), !1
        }), e.find("#worksList .item img").each(function () {
            var e = $(this).clone(!0);
            e.addClass("shadow").addClass("luxy-el").attr("data-speed-y", "10").attr("data-offset", -$(this).offset().top / $("#luxy").height() * 1e3), e.insertAfter($(this).parent("a"))
        }), e.find(".itemColumn:nth-child(1) .lazyload").lazyload({
            threshold: 0,
            placeholder: "/img/common/blank.png"
        }), e.find(".itemColumn:nth-child(2) .lazyload").lazyload({
            threshold: 0,
            placeholder: "/img/common/blank.png"
        }), e.find(".itemColumn:nth-child(3) .lazyload").lazyload({
            threshold: 0,
            placeholder: "/img/common/blank.png"
        }), e.find(".itemColumn:nth-child(4) .lazyload").lazyload({
            threshold: 0,
            placeholder: "/img/common/blank.png"
        }), $(".lazyload").on("appear", function () {
            $(this).addClass("show")
        })
    }

    function c(e) {
        e.find(".imgWrap").each(function () {
            function e(e) {
                n < a && a < o ? e.addClass("on") : e.removeClass("on")
            }
            var a, n = -.9 * f.width() + 10,
                o = f.width() - 10,
                t = $(this);
            P = setInterval(function () {
                a = t.offset().left, t.parent().parent().parent(".showThumb").hasClass("on") && e(t)
            }, 100), e(t)
        }), e.find(".showThumb").each(function () {
            var e = $(this).attr("id");
            new ScrollMagic.Scene({
                triggerElement: "#" + e,
                triggerHook: .6,
                duration: 1.2 * f.height()
            }).on("enter", function (a) {
                $("#" + e).addClass("on")
            }).on("leave", function (a) {
                $("#" + e).removeClass("on")
            }).addTo(p)
        });
        new ScrollMagic.Scene({
            triggerElement: "#productsSection",
            triggerHook: "onCenter"
        }).on("enter", function (e) {
            $("#nav").find(".home").addClass("on")
        }).on("leave", function (e) {
            $("#nav").find(".home").removeClass("on")
        }).addTo(p), new ScrollMagic.Scene({
            triggerElement: "#af",
            triggerHook: "onLeave",
            duration: f.height()
        }).setTween("#af .headline path:nth-child(3n-2)", {
            y: -1200
        }).addTo(p), new ScrollMagic.Scene({
            triggerElement: "#af",
            triggerHook: "onLeave",
            duration: f.height()
        }).setTween("#af .headline path:nth-child(3n-1)", {
            y: -800
        }).addTo(p), new ScrollMagic.Scene({
            triggerElement: "#af",
            triggerHook: "onLeave",
            duration: f.height()
        }).setTween("#af .headline path:nth-child(3n)", {
            y: -200
        }).addTo(p);
        e.find(".dataInput").each(function () {
            $(this).attr("data-offset", $(window).height() * $(this).data("input"))
        }), luxy.init({
            wrapper: "#luxy",
            targets: ".luxy-el",
            wrapperSpeed: .9
        })
    }

    function h() {
        $("#navOpener").on("click", function () {
            wheelEnabled(!1), $("#navOpener").hasClass("on") || ($("#navOpener").addClass("on"), m.addClass("navOn"), C.kill(), y.restart())
        }), $("#nav .close, #navBg").on("click", function () {
            wheelEnabled(!0), $("#navOpener").removeClass("on"), m.removeClass("navOn"), y.kill(), C.restart()
        }), $("#imageSlide a").each(function () {
            var e = $(this),
                a = i(I, x);
            e.addClass("move" + a), e.attr("data-move", a), s(e), e.on(animationEnd, function () {
                s($(this))
            })
        })
    }

    function g(e, a) {
        (M += e) < a || ($("#af").css("opacity", 1), E.restart())
    }
    var m = $("body"),
        f = $(window),
        w = $(document),
        u = (window.innerWidth, window.innerHeight, $("body").attr("class")),
        p = new ScrollMagic.Controller,
        v = 0;
    w.on("pjax:complete", function (a, n, o, t) {
        if ("success" == o)
            if ($("body").removeClass().addClass(u), $("body.home")[0]) {
                i = [];
                $(".imgWrap").each(function (e) {
                    var a = $(this).css("background-image");
                    i[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
                }), imageLoad(i, function () {
                    e(1, 1)
                })
            } else if ($("body.products")[0] || $("body.portrait")[0] || $("body.artworks")[0]) {
            v = 0;
            var i = [];
            $("img.lazyload").each(function (e) {
                var a = $(this).data("original");
                i[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
            }), imageLoad(i, function () {
                e(1, 2)
            }), $("#headImage, .linkToNext").find("img").imagesLoaded(function () {
                e(1, 2)
            })
        }
    });
    var k = new TimelineMax,
        b = new TimelineMax;
    k.to("#cover", .6, {
        height: 0,
        ease: Power2.easeInOut,
        clearProps: "all",
        onComplete: function () {
            wheelEnabled(!0), $("#cover").hide().removeClass(), a()
        }
    }).pause(), b.to("#cover", .6, {
        width: 0,
        ease: Power2.easeInOut,
        clearProps: "all",
        onComplete: function () {
            wheelEnabled(!0), $("#cover").hide().removeClass(), a()
        }
    }).pause();
    var y = new TimelineMax,
        C = new TimelineMax;
    C.fromTo(".gnav .tit .inner, .gnav .products a, .gnav .portrait a, .gnav .artworks a, .gnav .profile a, .gnav .contact a", .6, {
        y: 0
    }, {
        y: 40,
        ease: Power2.easeOut
    }, "start").fromTo("#navBg", .6, {
        "background-color": "rgba(0,0,0,0.1)"
    }, {
        "background-color": "rgba(0,0,0,0)",
        display: "none",
        ease: Power4.easeOut
    }, "start+=0").to("#nav", .6, {
        width: 0,
        ease: Power4.easeOut
    }, "start+=0").to("#nav .home", .8, {
        left: "5vw",
        ease: Power2.easeOut,
        onStart: function () {
            $("#nav").find(".home").removeClass("open")
        }
    }, "start+=0").fromTo("#navOpener", .6, {
        x: 60
    }, {
        x: 0,
        ease: Power4.easeOut
    }, "start+=0").staggerFromTo("#navOpener .l1, #navOpener .l2, #navOpener .l3", .9, {
        width: 0
    }, {
        width: "100%",
        ease: Power4.easeOut
    }, .06, "start+=0.4").pause(), y.staggerFromTo("#navOpener .l1, #navOpener .l2, #navOpener .l3", .4, {
        width: "100%"
    }, {
        width: 0,
        ease: Power4.easeOut
    }, .04, "start").fromTo("#navOpener", 1, {
        x: 0
    }, {
        x: 60,
        ease: Power3.easeOut
    }, "start+=0").fromTo("#navBg", .8, {
        "background-color": "rgba(0,0,0,0)"
    }, {
        display: "block",
        "background-color": "rgba(0,0,0,0.1)",
        ease: Power4.easeOut
    }, "start+=0.2").to(".gnav", .2, {
        display: "block"
    }, "start+=0.2").fromTo("#nav", .8, {
        width: 0
    }, {
        width: "90vw",
        ease: Power4.easeOut
    }, "start+=0.2").to("#nav .home", .8, {
        left: "10vw",
        ease: Power2.easeInOut,
        onStart: function () {
            $("#nav").find(".home").addClass("open")
        }
    }, "start+=0").to(".gnav", .2, {
        display: "block"
    }, "start+=0.2").staggerFromTo(".gnav .tit .inner, .gnav .products a, .gnav .portrait a, .gnav .artworks a, .gnav .profile a, .gnav .contact a", .6, {
        y: 60,
        x: -30
    }, {
        y: 0,
        x: 0,
        ease: Power2.easeOut
    }, .03, "start+=0.5").pause();
    var T = new TimelineMax;
    T.fromTo("#worksSingle .bg", .3, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.easeNone,
        onStart: function () {
            wheelEnabled(!1), $("#imageSlide").hide(), $("#worksSingle").show(), $("#worksSingle").addClass("open"), $("body").addClass("singleOpen")
        },
        onReverseComplete: function () {
            wheelEnabled(!0), $("#imageSlide").show(), $("#worksSingle").hide(), $("#worksSingle").removeClass("open"), $("body").removeClass("singleOpen")
        }
    }, "img").fromTo("#worksSingle .shadow", .6, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.easeNone
    }, "img+=0").fromTo("#worksSingle .focus", 1.2, {
        left: "-125vw"
    }, {
        left: 0,
        ease: Power3.easeInOut
    }, "img+=0").fromTo("#worksSingle .focus .i", 1.2, {
        skewX: 30,
        width: "90%",
        height: "90%"
    }, {
        skewX: 0,
        width: "96%",
        height: "96%",
        ease: Power3.easeInOut
    }, "img+=0").fromTo("#worksSingle .focus .i img", 1.2, {
        skewX: -30,
        marginLeft: "125vw"
    }, {
        skewX: 0,
        marginLeft: 0,
        ease: Power3.easeInOut
    }, "img+=0").fromTo("#worksSingle .info", .6, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.easeNone
    }, "img+=0").fromTo("#worksSingle .info .t", 1, {
        y: -100
    }, {
        y: 0,
        ease: Power4.easeInOut
    }, "img+=0.2").pause();
    var O = new TimelineMax,
        S = new TimelineMax;
    window.transitionEnd = r({
        transition: "transitionend",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
    }), window.animationEnd = r({
        animation: "animationend",
        MozAnimation: "mozAnimationEnd",
        WebkitAnimation: "webkitAnimationEnd"
    });
    var P, x = 1,
        I = 4;
    if ($("body.home")[0]) {
        var E = new TimelineMax,
            L = "/img/photos/artworks/ar_" + i(27, 1) + ".jpg",
            M = 0;
        $("body").css({
            height: f.height(),
            overflow: "hidden"
        }).append('<div id="scrollLine"><div class="inner"></div></div>').append('<div id="openingImage"><div class="i"><img src="' + L + '" alt="" /></div></div>'), $("#imageSlide").hide();
        var z = [];
        $(".imgWrap").each(function (e) {
            var a = $(this).css("background-image");
            z[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
        }), imageLoad(z, function () {
            g(1, 2)
        }), $("#openingImage").find("img").imagesLoaded(function () {
            g(1, 2)
        }), E.fromTo("#openingImage", 2.5, {
            opacity: 0,
            scale: .9
        }, {
            opacity: 1,
            scale: 1,
            ease: Power3.easeOut
        }).fromTo("#openingImage", 1.2, {
            left: 0
        }, {
            left: "-100vw",
            ease: Power3.easeInOut
        }, "img+=0").fromTo("#openingImage .i", 1.2, {
            skewX: 0,
            width: "96%",
            height: "96%"
        }, {
            skewX: 30,
            width: "90%",
            height: "90%",
            ease: Power3.easeInOut
        }, "img+=0").fromTo("#openingImage .i img", 1.2, {
            skewX: 0,
            marginLeft: 0
        }, {
            skewX: -30,
            marginLeft: "100vw",
            ease: Power3.easeInOut
        }, "img+=0").staggerFrom("#af .headline path", 1, {
            opacity: 0,
            x: 50,
            y: 150,
            ease: Power4.easeOut,
            clearProps: "all"
        }, .05, "img+=0.7").staggerFromTo("#navOpener .l1, #navOpener .l2, #navOpener .l3", 1.2, {
            width: 0
        }, {
            width: "100%",
            ease: Power4.easeOut,
            clearProps: "all"
        }, .1, "line").fromTo("#scrollLine .inner", 1.2, {
            height: 0,
            top: 0
        }, {
            height: "100%",
            top: 0,
            ease: Power4.easeInOut,
            onStart: function () {
                $("body").css({
                    height: "",
                    overflow: ""
                }), $("#af").addClass("loaded"), $("#imageSlide").show(), c($("#wrap")), l($("#wrap")), h(), a()
            }
        }, "line+=0.6").to("#scrollLine .inner", .8, {
            height: 0,
            top: "inherit",
            bottom: 0,
            ease: Power4.easeInOut,
            onComplete: function () {
                $("#scrollLine").remove(), $("#openingImage").remove()
            }
        }).pause()
    } else($("body.products")[0] || $("body.portrait")[0] || $("body.artworks")[0]) && $("#contents img").imagesLoaded(function () {
        d($("#wrap")), l($("#wrap")), h(), a()
    })
});
