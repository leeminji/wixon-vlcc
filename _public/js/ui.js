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
        svgList : [
            {
                name : "ship1",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#ffffff",
                opacity : 1,
                strokeColor : "#ffffff",
                width:20,
                height:30
            },
            {
                name : "ship2",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#000000",
                opacity : 1,
                strokeColor : "#ffffff",
                width:20,
                height:30
            },
            {
                name : "ship3",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#dcc088",
                opacity : 1,
                strokeColor : "#dcc088",
                width:20,
                height:30
            },
            {
                name : "ship4",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#dcc088",
                opacity : 1,
                strokeColor : "#dcc088",
                width:20,
                height:30
            },
            {
                name : "ship4",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#bdff64",
                opacity : 1,
                strokeColor : "#e79b6f",
                width:20,
                height:30
            },
            {
                name : "ship5",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#ff657d",
                opacity : 1,
                strokeColor : "#ff657d",
                width:20,
                height:30
            },
            {
                name : "ship6",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#c1ff65",
                opacity : 1,
                strokeColor : "#c1ff65",
                width:20,
                height:30
            },
            {
                name : "ship7",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#65b5ff",
                opacity : 1,
                strokeColor : "#d07ca3",
                width:20,
                height:30
            },
            {
                name : "ship8",
                path : "M16.5,28.5h-15v-16L9,2.5l7.5,10V28.5z",
                strokeWidth : 1,
                fillColor : "#ffc965",
                opacity : 1,
                strokeColor : "#ff8275",
                width:20,
                height:30
            },
        ],
        scrollbar : null,
        init : function(){
            //메뉴
            this.menu();
            
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
                var icon = thisObj.svgList.find(function(item){
                    return item.name == iconName;
                });
                $(this).append(thisObj.svgImageCreate(icon));
            });
        },
        svgImageCreate : function(icon){
            var xmlns = "http://www.w3.org/2000/svg";
            var svgElem = document.createElementNS(xmlns, "svg");
            var boxWidth = icon.width;
            var boxHeight = icon.height;
            svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
            svgElem.setAttributeNS(null, "width", boxWidth-4);
            svgElem.setAttributeNS(null, "height", boxHeight); 
            var g = document.createElementNS(xmlns, "g");
            svgElem.appendChild(g);
            var path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', icon.strokeColor);
            path.setAttributeNS(null, 'stroke-width', icon.strokeWidth);
            path.setAttributeNS(null, 'd', icon.path);
            path.setAttributeNS(null, 'fill', icon.fillColor);
            path.setAttributeNS(null, 'opacity', icon.opacity);
            g.appendChild(path); 
            return svgElem;
        },
        menu : function(){
            var thisObj = this;
            
            //사이드메뉴
            var layoutWrap = $("#LayoutAllwrap");
            var btn_sideMenuClose = $("#sideMenuClose");

            btn_sideMenuClose.on("click", function(){
                if( layoutWrap.hasClass("inactive") ){
                    subMenuOpen();
                }else{
                    totalMenuClose();
                    subMenuClose();
                }
            });

            function subMenuOpen(){
                layoutWrap.removeClass("inactive");
                btn_sideMenuClose.toggleClass("rotate");
                setTimeout(function(){
                    thisObj.scrollbar.scrollbar("init");
                },800);
                
            }
            function subMenuClose(){
                layoutWrap.addClass("inactive");
                btn_sideMenuClose.toggleClass("rotate");
                setTimeout(function(){
                    thisObj.scrollbar.scrollbar('destroy');
                },800);
            }

            //전체메뉴
            var totalMenu = $("#totalMenu");
            var btn_totalMenuOpen = $("#totalMenuOpen");
            var btn_totalMenuClose = $("#totalMenuClose");

            btn_totalMenuOpen.on("click", function(){
                totalMenuOpen();
            });

            btn_totalMenuClose.on("click", function(){
                totalMenuClose();
            });

            function totalMenuOpen(){
                totalMenu.addClass("active");
                thisObj.scrollbar.scrollbar('destroy').scrollbar("init");
            }
            function totalMenuClose(){
                totalMenu.removeClass("active");
                thisObj.scrollbar.scrollbar('destroy').scrollbar("init");
            }

            //툴팁
            var totalMenuTooltip = $("#totalMenuTooltip");
            var totalMenuList = $("#totalMenuList");
            totalMenuList.children("li").each(function(){
                var item = $(this);
                var item_offset = item.offset();
                item.on("mouseenter", function(event){
                    if( totalMenu.hasClass("active") ) return;
                    var str_title = item.attr("data-title");
                    var str_width = str_title.length * 10;
                    totalMenuTooltip.empty().append("<span style='width:"+str_width+"px'>"+str_title+"</span>").css({                        
                        left : item_offset.left + $(this).width()-12,
                        top : item_offset.top-20
                    })
                });
            });
            totalMenuList.on("mouseleave", function(){
                totalMenuTooltip.empty().attr('style', '');
            });
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