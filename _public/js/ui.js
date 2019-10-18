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
            this.menu();
            this.scrollbar = $(".js-scrollbar");

            //스크롤바커스텀
            this.scrollbar.scrollbar();

            //메일드래그
            this.mail();

            //로딩중
            this.loading();

            //스크롤 애니메이션적용
            this.loadMotion();
        },
        loading : function(){
            var loading = $("#loading");
            $(window).on("load", function(){
                loading.addClass("inactive");
            });           
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