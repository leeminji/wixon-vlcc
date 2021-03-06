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
            svgElem.setAttributeNS(null, "viewBox","-3 -5 " + boxWidth + " " + boxHeight);
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
                currentActive : -1,
                isActive : false,
                init : function(){
                    var thisObj = this;
                    btn_totalMenuOpen.off("click").on("click", function(){
                        thisObj.open();
                    });
                    btn_totalMenuClose.off("click").on("click", function(){
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
                    var that = this;
                    //툴팁
                    var totalMenuTooltip = $("#totalMenuTooltip");
                    var totalMenuList = $("#totalMenuList");
                    
                    totalMenuList.children("li").each(function(i){
                        var item = $(this);
                        var item_offset = item.offset();
                        var itemIndex = i;
                        item.children("a").on("mouseenter", function(event){
                            if( totalMenu.hasClass("active") ) return;
                            
                            if( that.currentActive != itemIndex || that.isActive == false){
                                totalMenuTooltip.empty().attr('style', '');
                          
                                var subList = $(this).parent().children(".TotalMenu__sublist");
                                if( subList.length > 0 ){
                                    var clone = subList.clone();
                                    clone.attr("class", "clear  TotalMenu__tooltip__sublist");
                                    totalMenuTooltip.addClass("isSubList").append(clone);
                                }else{
                                    totalMenuTooltip.removeClass("isSubList");
                                }
                                var str_title = item.attr("data-title");                
                                
                                var title = $("<span></span>").addClass("title").text(str_title);
                                totalMenuTooltip.prepend(title);

                                totalMenuTooltip.css({                        
                                    left : item_offset.left + $(this).parent().width()-12,
                                    top :  subList.length > 0 ? item_offset.top-(totalMenuTooltip.height()-20) : item_offset.top-10
                                });

                                that.isActive = true;
                                that.currentActive = itemIndex;
                            }
                        });
                    })

                    $(".Layout__menu").on("mouseleave", tooltipReset);
                    totalMenuList.children("li").eq(0).on("mouseleave",tooltipReset);
                    function tooltipReset(){
                        if(that.isActive){
                            totalMenuTooltip.empty().attr('style', '');
                            that.isActive = false;
                            that.currentActive = -1;
                        }
                    }
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
        },
        windowPopup : function(_url, _width, _height, _left, _top){
            var popupX = _left != null ? _left : (window.screen.width / 2) - (_width / 2);
            var popupY = _top != null ? _top : (window.screen.height / 2) - (_height / 2);	
            var option="resizable=no, scrollbas=yes,status=no,width="+_width+",height="+_height+",left="+popupX+",top="+popupY;
            window.open(_url, 'portData', option);          
        },
        checkBroswer : function(){
            var agent = navigator.userAgent.toLowerCase(),
                name = navigator.appName,
                browser = '';
         
            // MS 계열 브라우저를 구분
            if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
                browser = 'ie';
                if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
                    agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
                    browser += parseInt(agent[1]);
                } else { // IE 11+
                    if(agent.indexOf('trident') > -1) { // IE 11
                        browser += 11;
                    } else if(agent.indexOf('edge/') > -1) { // Edge
                        browser = 'edge';
                    }
                }
            } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
                if(agent.indexOf('opr') > -1) { // Opera
                    browser = 'opera';
                } else if(agent.indexOf('chrome') > -1) { // Chrome
                    browser = 'chrome';
                } else { // Safari
                    browser = 'safari';
                }
            } else if(agent.indexOf('firefox') > -1) { // Firefox
                browser = 'firefox';
            }
            return browser;
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