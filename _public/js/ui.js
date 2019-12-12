/*
    author : wixon
    date : 2019-10-10
    file : ui.js
*/
$(document).ready(function(){
   ui.init();
});
var ui = (function(){
    return{
        scrollbar : null,
        init : function(){
            //메뉴
            this.menu().init();

            //사이드메뉴
            this.sideMenu().init();

            //스크롤바 적용엘리먼트
            this.scrollbar = $(".js-scrollbar");

            //스크롤바커스텀
            this.scrollbar.scrollbar();

            //메일드래그
            this.mail();

            //로딩중
            this.loading();

            //스크롤 애니메이션적용
            this.loadMotion();

            //검색
            this.topSearch();

            //svg이미지 아이콘 적용
            this.svgImage();

            this.datepicker();
        },
        datepicker : function(){
            $(".datepicker").datepicker();
        },
        loading : function(){
            var loading = $("#loading");
            $(window).on("load", function(){
                loading.addClass("inactive");
            });           
        },
        svgImage : function(){
            var thisObj = this;
            $(".js-svg").each(function(){
                var iconName = $(this).data('icon');
                var findType = window.uiGooglMap.findShipType(iconName);
                if( findType ){
                    $(this).append(thisObj.svgImageCreate(findType.icon));
                }
            });
        },
        svgImageCreate : function(icon){
            var xmlns = "http://www.w3.org/2000/svg";
            var svgElem = document.createElementNS(xmlns, "svg");
            var boxWidth = icon.width ? icon.width : 25;
            var boxHeight = icon.height  ? icon.height : 30;
            svgElem.setAttributeNS(null, "viewBox","0 0 " + boxWidth + " " + boxHeight);
            svgElem.setAttributeNS(null, "width", boxWidth);
            svgElem.setAttributeNS(null, "height", boxHeight); 
            var g = document.createElementNS(xmlns, "g");
            svgElem.appendChild(g);
            var path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', icon.strokeColor);
            path.setAttributeNS(null, 'stroke-width', icon.strokeWeight);
            path.setAttributeNS(null, 'd', icon.path);
            path.setAttributeNS(null, 'fill', icon.fillColor);
            path.setAttributeNS(null, 'opacity', icon.opacity);
            g.appendChild(path); 
            return svgElem;
        },
        sideMenu : function(){
            var layoutWrap = $("#LayoutAllwrap");
            var btn_sideMenuClose = $("#sideMenuClose");
            return {
                init : function(){
                    var thisObj = this;
                    btn_sideMenuClose.on("click", function(){
                        if( layoutWrap.hasClass("inactive") ){
                            thisObj.open();
                        }else{
                            thisObj.close();
                            window.ui.menu().close();
                        }
                    });
                },
                open : function(){
                    layoutWrap.removeClass("inactive");
                    btn_sideMenuClose.toggleClass("rotate");
                    setTimeout(function(){
                        window.ui.scrollbar.scrollbar("init");
                    },800);   
                },
                close : function(){
                    layoutWrap.addClass("inactive");
                    btn_sideMenuClose.toggleClass("rotate");
                    setTimeout(function(){
                        window.ui.scrollbar.scrollbar('init');
                    },800);                   
                }
            }
        },
        menu : function(){
            var totalMenu =  $("#totalMenu");
            var btn_totalMenuClose = $("#totalMenuClose");
            var btn_totalMenuOpen = $("#totalMenuOpen");
            return {
                init : function(){
                    var thisObj = this;
                    btn_totalMenuOpen.on("click", function(){
                        thisObj.open();
                    });
                    btn_totalMenuClose.on("click", function(){
                        thisObj.close();
                    });
                    //툴팁
                    this.tooltip();
                },
                close: function(){
                    totalMenu.removeClass("active");
                    window.ui.scrollbar.scrollbar('destroy').scrollbar("init");
                },
                open : function(){
                    totalMenu.addClass("active");
                    window.ui.scrollbar.scrollbar('destroy').scrollbar("init"); 
                },
                tooltip : function(){
                    //툴팁
                    var totalMenuTooltip = $("#totalMenuTooltip");
                    var totalMenuList = $("#totalMenuList");
                    totalMenuList.children("li").each(function(){
                        var item = $(this);
                        var item_offset = item.offset();
                        item.on("mouseenter", function(event){
                            if( totalMenu.hasClass("active") ) return;
                            var str_title = item.attr("data-title");
                            var str_width = str_title.length * 6.5;
                            totalMenuTooltip.empty().append("<span style='width:"+str_width+"px'>"+str_title+"</span>").css({                        
                                left : item_offset.left + $(this).width()-12,
                                top : item_offset.top-20
                            })
                        });
                    });
                    totalMenuList.on("mouseleave", function(){
                        totalMenuTooltip.empty().attr('style', '');
                    });
                }
            }
        },
        topSearch : function(){
            $(".TopSearch__input").on('change', function(){
                var label = $(this).next('label');
                if( label.length <= 0) return;
                if( $(this).val() == "" ){
                    label.css('display', 'block');
                }else{
                    label.css('display', 'none');
                }
            });
        },
        mail : function(){
            //메일 리스트, 내용 영역 드래그사용
            var mailSplit = $("#mailAreaSplit");
            var mailList = $("#mailAreaListArea");
            var mailBody = $("#mailAreaBody");
            var options = {
                axis : "x",
                start : function(event, ui){
                    dragleft = ui.offset.left;
                },
                drag : function(event, ui){
                    if( ui.position.left > 800 ) ui.position.left = 800;
                    if( ui.position.left < 300 ) ui.position.left = 300;
                    mailSplit.css( 'left', ui.position.left );
                    mailList.css( 'width', ui.position.left );
                    mailBody.css( 'left', ui.position.left );
                }
            }
            mailSplit.draggable(options);
        },
        loadMotion : function(){
            var $motion = $('.n-motion');
            var windowT;
            if($motion.length){
                $motion.each(function(i){
                    var $this = $(this);
                    var thisT = $this.offset().top;
                    var thisH = $this.height() / 2;
                    var thisP = thisT + thisH;
                    var event = 'load.'+i+' scroll.'+i;
                    $(window).on(event, function(){
                        windowT = $(window).scrollTop() + $(window).outerHeight();
                        if(windowT > thisP){
                            $this.addClass('n-active');
                            $(window).off(event);
                        }
                    });
                });
            }
        }
    }
})();

//팝업
var uiPopup = (function(){
    return {
        open : function(_el){
            var thisObj = this;
            var popup = _el == null ? null : $("#"+_el);
            if( popup == null ) return;
            
            //내용
            var inner = popup.find(".PopupArea__inner");

            //배경
            var blind = popup.find(".PopupArea__blind");
            inner.css({
                'margin-top' : -(inner.height()/2)+"px"
            });

            popup.addClass("active");
            blind.on('click', function(){
                thisObj.close(_el);
            });
        },
        close : function(_el){
            var popup = _el == null ? null : $("#"+_el);
            if( popup == null ) return;
            popup.removeClass("active");
        }
    }
})();


//셋팅
var uiSettingPopup = (function(){
    return {
        open : function(_el){
            var thisObj = this;
            var content = _el == null ? null : $("#"+_el);
            if( content == null ) return;
            
            //배경
            var blind = content.find("#"+_el+"__blind");
  
            content.addClass("active");
            blind.on('click', function(){
                thisObj.close(_el);
            });
        },
        close : function(_el){
            var content = _el == null ? null : $("#"+_el);
            if( content == null ) return;
            content.removeClass("active");
        }
    }
})();