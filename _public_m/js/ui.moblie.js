/*
 writer : wixon
 date : 2020-02-10
*/

$(document).ready(function(){
    uiMobile.init();
});
var uiMobile = (function(){
  return {
    init : function(){
        var thisObj = this;
        var mainmenu = this.menu();
        mainmenu.init("TotalMenu");

        this.datepicker();
        this.loading();

        //svg이미지 아이콘 적용
        this.svgImage();
        
        $(window).load(function(){
            thisObj.navigation();
        });
    },
    loading : function(){
        var loading = $("#loading");
        $(window).on("load", function(){
            loading.addClass("inactive");
        });           
    },
    navigation : function(){
       var navigation = document.querySelector(".Navigation__list");
       if( navigation != null ){
           var list = document.querySelector(".Navigation__list__inner");
           var items = document.querySelectorAll(".Navigation__item");
           var totalWidth = 0;
           var active_item = null;
           for( var i =0; i<items.length; i++ ){
               totalWidth += items[i].offsetWidth;
               if( items[i].classList.contains("active") ){
                  active_item = items[i];
               }
           }
           totalWidth+=20;
           list.style.width = totalWidth+"px";
           list.style.minWidth = totalWidth+'px';
           navigation.scrollLeft = active_item.offsetLeft;
       }
    },
    menu : function(){
        return {
            isOpen : false,
            init : function(_el){
                var thisObj = this;
                this.el = $("#"+_el);
                $("."+_el+"__close").on('click', function(e){
                    e.preventDefault();
                    thisObj.close();
                })
                $("."+_el+"__blind").on('click', function(e){
                    e.preventDefault();
                    thisObj.close();
                })
                $("."+_el+"__open").on('click', function(e){
                    e.preventDefault();
                    thisObj.open();
                })
            },
            open : function(callback){
               if( this.el.size() == 0 || this.isOpen === true) return;
               this.el.addClass('active');
               this.isOpen = true;
               //콜백함수
               if( callback ){
                   callback();
               }
            },
            close : function(callback){
                if( this.el.size() == 0 || this.isOpen === false ) return;
                this.el.removeClass('active');
                this.isOpen = false;
                //콜백함수
                if( callback ){
                    callback();
                } 
            }
        }
    },
    datepicker : function(){
        $('input.datepicker').bootstrapMaterialDatePicker({
            format : 'DD/MM/YYYY',
            weekStart : 0, 
            time: false
        });
        $('input.timepicker').bootstrapMaterialDatePicker({
            date: false
        });
        $('input.datetimepicker').bootstrapMaterialDatePicker({
            format : 'dddd DD MMMM YYYY - HH:mm' 
        });
    },
    popup : {
        open : function(_el){
            var thisObj = this;
            var popup = _el == null ? null : $("#"+_el);
            if( popup == null ) return;
            popup.addClass("active");
            var blind = $("#"+_el+"__blind");
            if(blind.size() > 0){
                blind.on('click', function(){
                    thisObj.close(_el);
                });
            }
        },
        close : function(_el){
            var popup = _el == null ? null : $("#"+_el);
            if( popup == null ) return;
            popup.removeClass("active");
        }   
    },
    pageSearch : {
        el : $("#PageSearch"),
        open : function(){
            this.el.addClass("active");
        },
        close : function(){
            this.el.removeClass("active");
        },
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
    }    
  }
})();

/* ClassList ie9 하위버전 호환 */
;(function() {
  // helpers
  var regExp = function(name) {
      return new RegExp('(^| )'+ name +'( |$)');
  };
  var forEach = function(list, fn, scope) {
      for (var i = 0; i < list.length; i++) {
          fn.call(scope, list[i]);
      }
  };

  // class list object with basic methods
  function ClassList(element) {
      this.element = element;
  }

  ClassList.prototype = {
      add: function() {
          forEach(arguments, function(name) {
              if (!this.contains(name)) {
                  this.element.className += this.element.className.length > 0 ? ' ' + name : name;
              }
          }, this);
      },
      remove: function() {
          forEach(arguments, function(name) {
              this.element.className =
                  this.element.className.replace(regExp(name), '');
          }, this);
      },
      toggle: function(name) {
          return this.contains(name) 
              ? (this.remove(name), false) : (this.add(name), true);
      },
      contains: function(name) {
          return regExp(name).test(this.element.className);
      },
      // bonus..
      replace: function(oldName, newName) {
          this.remove(oldName), this.add(newName);
      }
  };

  // IE8/9, Safari
  if (!('classList' in Element.prototype)) {
      Object.defineProperty(Element.prototype, 'classList', {
          get: function() {
              return new ClassList(this);
          }
      });
  }

  // replace() support for others
  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
      DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();