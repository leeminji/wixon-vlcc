/*
 writer : wixon
 date : 2020-02-10
*/

var uiMobile = (function(){
  return {
    init : function(){
    }
  }
})();

//페이지 로딩 뒤 실행
document.addEventListener("load", uiMobile.init());

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