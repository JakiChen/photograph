! function (e) {
    function a(n) {
        if (o[n]) return o[n].exports;
        var t = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    var o = {};
    a.m = e, a.c = o, a.d = function (e, o, n) {
        a.o(e, o) || Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, a.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(o, "a", o), o
    }, a.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, a.p = "", a(a.s = 0)
}([function (e, a, o) {
    e.exports = o(1)
}, function (e, a) {
    function o(e) {
        i = e
    }

    function n(e) {
        i || (e || (e = window.event), e.preventDefault && e.preventDefault(), e.returnValue = !1)
    }

    function t(e, a) {
        var o = 0,
            n = 0;
        for (o; o < e.length; ++o) {
            var t = $(new Image);
            t.attr("src", e[o]), t.complete ? ++n == e.length && a.call(this) : t.on("load", function () {
                ++n == e.length && a.call(this)
            })
        }
    }
    $.fn.imagesLoaded = function (e) {
        var a = $(this),
            o = 0,
            n = a.length;
        a.each(function (a) {
            var t = new Image;
            t.src = $(this).attr("src");
            var i = setTimeout(function () {
                ++o == n && e.call(this)
            }, 1e4);
            t.complete ? (clearTimeout(i), ++o == n && e.call(this)) : t.onload = function () {
                clearTimeout(i), ++o == n && e.call(this)
            }
        })
    };
    var i = !0;
    window.addEventListener && window.addEventListener("mousewheel", n, {
        passive: !1
    }), window.onmousewheel = document.onmousewheel = n, $(function () {
        function e(e, a) {
            (k += e) < a || setTimeout(function () {
                $(".loaderWrap").fadeOut(200).find(".loader").removeClass("loading"), $("body.home")[0] ? ($("#af").addClass("loaded").css("opacity", 1), $("#imageSlide").show(), f($("#contents")), P.kill(), T.restart(), c($("#contents"))) : ($("body.products")[0] || $("body.portrait")[0] || $("body.artworks")[0]) && (h($("#contents")), $("#imageSlide").show(), S.kill(), C.restart(), c($("#contents")))
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

        function n(e, a, n, t, i) {
            o(!1);
            var r = $(e).offset().top;
            r += t, scrollY = w.height() - r;
            var s = window.innerHeight ? window.innerHeight : m.height();
            s > scrollY && (r = w.height() - s), TweenMax.to(window, n, {
                scrollTo: {
                    y: r
                },
                ease: a,
                onComplete: function () {
                    o(!0), "none" != i && i.call(this)
                }
            })
        }

        function i(e, a, o) {
            $("body").addClass("pageMove"), $("#imageSlide").hide(), $("#cover").addClass(a).show(), S.fromTo("#cover .left", 1, {
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
            }, "start+=0.08").pause(), null == o ? S.restart() : $("#" + o)[0] ? n("#" + o, "Power4.easeInOut", .5, 0, function () {
                S.restart()
            }) : S.restart()
        }

        function r(e, a) {
            $("body").addClass("pageMove"), $("#imageSlide").hide(), $("#cover").addClass(a).show(), P.fromTo("#cover .right", 1, {
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
            }, "start+=0.05").pause(), P.restart()
        }

        function s(e, a) {
            return Math.floor(Math.random() * (1 + e - a) + a)
        }

        function l(e) {
            var a = document.createElement("div");
            for (var o in e)
                if (e.hasOwnProperty(o) && void 0 !== a.style[o]) return e[o]
        }

        function d(e) {
            e.removeClass();
            var a = Number(e.attr("data-move"));
            a == M ? a = I : a += 1, e.addClass("move" + a), e.attr("data-move", a), e.addClass("time" + s(M, I));
            var o = s(60, 6);
            e.css({
                top: s(m.height(), 0) + "px",
                left: s(m.width(), 0) + "px",
                width: o + "px",
                height: o + "px"
            })
        }

        function c(e) {
            $("#nav").find(".home").removeClass("on"), clearInterval(L), $(".scrollbar")[0] && e.find(".scrollbar").mCustomScrollbar({
                theme: "minimal-dark"
            }), e.find(".dataInput").each(function () {
                $(this).attr("data-offset", $(window).height() * $(this).data("input"))
            }), luxy.init({
                wrapper: "#luxy",
                targets: ".luxy-el",
                wrapperSpeed: .05
            }), e.find(".linkToList").on("click", function () {
                var e = $(this).attr("href"),
                    a = null;
                return void 0 != $(this).attr("data-hash") && (a = $(this).attr("data-hash")), v = $(this).data("target"), i(e, v, a), !1
            }), e.find(".linkToTop").on("click", function () {
                if ($("body").hasClass("home") && $(this).hasClass("home")) return !1;
                var e = $(this).attr("href");
                return v = $(this).data("target"), r(e, v), !1
            })
        }

        function h(e) {
            e.find("a.viewPhoto").transformHeroes(), e.find("a.viewPhoto").on("click", function () {
                if (!$("#worksSingle").hasClass("open")) {
                    var e = $(this).data("info"),
                        a = $(this).data("focus"),
                        o = [];
                    o[0] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", ""), t(o, function () {
                        $("#worksSingle").find(".focus .i img, .shadow .i img").attr("src", a), $("#worksSingle").find(".info .t").text(e), x.restart()
                    })
                }
            }), $("#worksSingle").find(".close a, .focus .i").on("click", function () {
                $("#worksSingle").hasClass("open") && x.reverse()
            });
            new ScrollMagic.Scene({
                triggerElement: "#contents",
                triggerHook: "onLeave",
                duration: m.height()
            }).setTween(function () {
                TweenMax.fromTo(e.find("#headImage"), 2, {
                    scale: 1.3,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: Power4.easeOut
                })
            }).addTo(y);
            n("#worksListTarget", "Power4.easeInOut", 1.3, 0, "none");
            new ScrollMagic.Scene({
                triggerElement: "#footerArea",
                triggerHook: "onCenter",
                offset: 300,
                reverse: !1
            }).on("enter", function (e) {
                $("#footerArea").addClass("on")
            }).addTo(y);
            $("#footerArea").find("a").hover(function () {
                $("#footerArea").addClass("hover")
            }, function () {
                $("#footerArea").removeClass("hover")
            }), e.find(".linkToNext").on("click", function () {
                var e = $(this).attr("href"),
                    a = null;
                return void 0 != $(this).attr("data-hash") && (a = $(this).attr("data-hash")), v = $(this).data("target"), i(e, v, a), !1
            }), e.find("#worksList .item img").each(function () {
                var e = $(this).clone(!0);
                e.addClass("shadow").addClass("luxy-el").attr("data-speed-y", "10").attr("data-offset", -$(this).offset().top / $("#luxy").height() * 1e3), e.insertAfter($(this).parent("a"))
            }), e.find(".itemColumn:nth-child(1) .lazyload").lazyload({
                threshold: 300,
                placeholder: "/img/common/blank.png"
            }), e.find(".itemColumn:nth-child(2) .lazyload").lazyload({
                threshold: 300,
                placeholder: "/img/common/blank.png"
            }), e.find(".itemColumn:nth-child(3) .lazyload").lazyload({
                threshold: 300,
                placeholder: "/img/common/blank.png"
            }), e.find(".itemColumn:nth-child(4) .lazyload").lazyload({
                threshold: 300,
                placeholder: "/img/common/blank.png"
            }), $(".lazyload").on("appear", function () {
                $(this).addClass("show")
            }), luxy.init({
                wrapper: "#luxy",
                targets: ".shadow.luxy-el",
                wrapperSpeed: .9
            })
        }

        function f(e) {
            e.find(".imgWrap").each(function () {
                function e(e) {
                    o < a && a < n ? e.addClass("on") : e.removeClass("on")
                }
                var a, o = -m.width() / 2 + 50,
                    n = m.width() - 50,
                    t = $(this);
                L = setInterval(function () {
                    a = t.offset().left, t.parent().parent().parent(".showThumb").hasClass("on") && e(t)
                }, 100), e(t)
            }), e.find(".showThumb").each(function () {
                var e = $(this).attr("id");
                new ScrollMagic.Scene({
                    triggerElement: "#" + e,
                    triggerHook: .4,
                    duration: 1.1 * m.height()
                }).on("enter", function (a) {
                    $("#" + e).addClass("on")
                }).on("leave", function (a) {
                    $("#" + e).removeClass("on")
                }).addTo(y);
                $("#" + e).find("a").hover(function () {
                    $("#" + e).addClass("hover")
                }, function () {
                    $("#" + e).removeClass("hover")
                })
            });
            new ScrollMagic.Scene({
                triggerElement: "#productsSection",
                triggerHook: "onCenter"
            }).on("enter", function (e) {
                $("#nav").find(".home").addClass("on")
            }).on("leave", function (e) {
                $("#nav").find(".home").removeClass("on")
            }).addTo(y), new ScrollMagic.Scene({
                triggerElement: "#af",
                triggerHook: "onLeave",
                duration: m.height()
            }).setTween("#af .headline path:nth-child(3n-2)", {
                y: -600
            }).addTo(y), new ScrollMagic.Scene({
                triggerElement: "#af",
                triggerHook: "onLeave",
                duration: m.height()
            }).setTween("#af .headline path:nth-child(3n-1)", {
                y: -400
            }).addTo(y), new ScrollMagic.Scene({
                triggerElement: "#af",
                triggerHook: "onLeave",
                duration: m.height()
            }).setTween("#af .headline path:nth-child(3n)", {
                y: -100
            }).addTo(y);
            e.find(".dataInput").each(function () {
                $(this).attr("data-offset", $(window).height() * $(this).data("input"))
            }), luxy.init({
                wrapper: "#luxy",
                targets: ".luxy-el",
                wrapperSpeed: .9
            })
        }

        function g() {
            $("#navOpener a").on("click", function () {
                o(!1), $("#navOpener").hasClass("on") || ($("#navOpener").addClass("on"), p.addClass("navOn"), O.kill(), b.restart())
            }), $("#navOpener").hover(function () {}, function () {}), $("#nav").on("mouseleave", function () {
                $("#navOpener").hasClass("on") && (o(!0), $("#navOpener").removeClass("on"), p.removeClass("navOn"), b.kill(), O.restart())
            }), $("#imageSlide a").each(function () {
                var e = $(this),
                    a = s(M, I);
                e.addClass("move" + a), e.attr("data-move", a), d(e), e.on(animationEnd, function () {
                    d($(this))
                })
            })
        }

        function u(e, a) {
            (H += e) < a || ($("#af").css("opacity", 1), E.restart())
        }
        var p = $("body"),
            m = $(window),
            w = $(document),
            v = (window.innerWidth, window.innerHeight, $("body").attr("class")),
            y = new ScrollMagic.Controller,
            k = 0;
        w.on("pjax:complete", function (a, o, n, i) {
            if ("success" == n)
                if ($("body").removeClass().addClass(v), $("body.home")[0]) {
                    r = [];
                    $(".imgWrap").each(function (e) {
                        var a = $(this).css("background-image");
                        r[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
                    }), t(r, function () {
                        e(1, 1)
                    })
                } else if ($("body.products")[0] || $("body.portrait")[0] || $("body.artworks")[0]) {
                k = 0;
                var r = [];
                $("img.lazyload").each(function (e) {
                    var a = $(this).data("original");
                    r[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
                }), t(r, function () {
                    e(1, 2)
                }), $("#headImage, .linkToNext").find("img").imagesLoaded(function () {
                    e(1, 2)
                })
            }
        });
        var C = new TimelineMax,
            T = new TimelineMax;
        C.to("#cover", .6, {
            height: 0,
            ease: Power2.easeInOut,
            clearProps: "all",
            onComplete: function () {
                $("#cover").hide().removeClass(), a()
            }
        }).pause(), T.to("#cover", .6, {
            width: 0,
            ease: Power2.easeInOut,
            clearProps: "all",
            onComplete: function () {
                $("#cover").hide().removeClass(), a()
            }
        }).pause();
        var b = new TimelineMax,
            O = new TimelineMax;
        O.fromTo(".gnav .tit .inner, .gnav .products a, .gnav .portrait a, .gnav .artworks a, .gnav .About a, .gnav .contact a", .6, {
            y: 0
        }, {
            y: 40,
            ease: Power2.easeOut
        }, "start").fromTo("#nav", .6, {
            width: "350px"
        }, {
            width: 0,
            ease: Power4.easeOut
        }, "start+=0").fromTo("#navOpener", .6, {
            width: "350px",
            "background-color": "rgba(0,0,0,0.1)"
        }, {
            width: "114px",
            "background-color": "rgba(0,0,0,0)",
            ease: Power4.easeOut
        }, "start+=0").staggerFromTo("#navOpener .l1, #navOpener .l2, #navOpener .l3", .9, {
            width: 0
        }, {
            width: "100%",
            ease: Power4.easeOut
        }, .06, "start+=0.4").pause(), b.staggerFromTo("#navOpener .l1, #navOpener .l2, #navOpener .l3", .4, {
            width: "100%"
        }, {
            width: 0,
            ease: Power4.easeOut
        }, .04, "start").fromTo("#navOpener", 1, {
            width: "114px",
            "background-color": "rgba(0,0,0,0)"
        }, {
            width: "350px",
            "background-color": "rgba(0,0,0,0.1)",
            ease: Power3.easeOut
        }, "start+=0").fromTo("#nav", .8, {
            width: 0
        }, {
            width: "350px",
            ease: Power4.easeOut
        }, "start+=0.2").to(".gnav", .2, {
            display: "block"
        }, "start+=0.2").staggerFromTo(".gnav .tit .inner, .gnav .products a, .gnav .portrait a, .gnav .artworks a, .gnav .About a, .gnav .contact a", .6, {
            y: 60,
            x: -30
        }, {
            y: 0,
            x: 0,
            ease: Power2.easeOut
        }, .03, "start+=0.5").pause();
        var x = new TimelineMax;
        x.fromTo("#worksSingle .bg", .3, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.easeNone,
            onStart: function () {
                o(!1), $("#imageSlide").hide(), $("#worksSingle").show(), $("#worksSingle").addClass("open"), $("body").addClass("singleOpen")
            },
            onReverseComplete: function () {
                o(!0), $("#imageSlide").show(), $("#worksSingle").hide(), $("#worksSingle").removeClass("open"), $("body").removeClass("singleOpen")
            }
        }, "img").fromTo("#worksSingle .shadow", .6, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.easeNone
        }, "img+=0").fromTo("#worksSingle .focus", .8, {
            left: "-100vw"
        }, {
            left: 0,
            ease: Power3.easeInOut
        }, "img+=0").fromTo("#worksSingle .focus .i", .8, {
            skewX: 30,
            width: "90%",
            height: "90%"
        }, {
            skewX: 0,
            width: "96%",
            height: "96%",
            ease: Power3.easeInOut
        }, "img+=0").fromTo("#worksSingle .focus .i img", .8, {
            skewX: -30,
            marginLeft: "100vw"
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
        var S = new TimelineMax,
            P = new TimelineMax;
        window.transitionEnd = l({
            transition: "transitionend",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        }), window.animationEnd = l({
            animation: "animationend",
            MozAnimation: "mozAnimationEnd",
            WebkitAnimation: "webkitAnimationEnd"
        });
        var I = 1,
            M = 4;
        $.fn.transformHeroes = function () {
            var e = this.width() / 2,
                a = this.height() / 2;
            return this.on({
                mousemove: function (o) {
                    var n = $(this).offset(),
                        t = o.pageX - n.left,
                        i = o.pageY - n.top,
                        r = e - t,
                        s = a - i;
                    $(this).css("transform", "perspective(500px) rotateX(" + s / 20 + "deg) rotateY(" + -r / 20 + "deg) translate(" + -r / 2 + "px, " + -s / 2 + "px)  scale(1.15)"), $(this).removeClass("is-out")
                },
                mouseleave: function () {
                    $(this).addClass("is-out")
                }
            }), this
        };
        var L;
        if ($("body.home")[0]) {
            var E = new TimelineMax,
                z = "/img/photos/artworks/ar_" + s(27, 1) + ".jpg",
                H = 0;
            $("body").css({
                height: m.height(),
                overflow: "hidden"
            }).append('<div id="scrollLine"><div class="inner"></div></div>').append('<div id="openingImage"><div class="i"><img src="' + z + '" alt="" /></div></div>'), $("#imageSlide").hide();
            var A = [];
            $(".imgWrap").each(function (e) {
                var a = $(this).css("background-image");
                A[e] = a.replace("url(", "").replace(")", "").replace('"', "").replace("'", "").replace('"', "").replace("'", "")
            }), t(A, function () {
                u(1, 2)
            }), $("#openingImage").find("img").imagesLoaded(function () {
                u(1, 2)
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
            }, "img+=0").staggerFrom("#af .headline path", 1.2, {
                opacity: 0,
                x: 100,
                y: 300,
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
                    }), $("#af").addClass("loaded"), $("#imageSlide").show(), f($("#wrap")), c($("#wrap")), g(), a()
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
            h($("#wrap")), c($("#wrap")), g(), a()
        })
    })
}]);
