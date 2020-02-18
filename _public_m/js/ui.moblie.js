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
        $(".datepicker").datepicker();
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