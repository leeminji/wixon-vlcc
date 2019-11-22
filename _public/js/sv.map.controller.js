var SvUtilObjType = {
    isNull: function(a) {
        if ((typeof a) === "undefined") {
            return true
        } else {
            if (a === null) {
                return true
            } else if (typeof(a) == "string") {
                if (a == "") {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    },
    isString: function(a) {
        if ((typeof a) === "string") {
            return true
        } else {
            return false
        }
    },
    isArray: function(a) {
        if (!this.isNull(a)) {
            if ((a.constructor === Array) == true) {
                return true
            } else {
                return false
            }
        }
    },
    isEmpty: function(a) {
        if (this.isArray(a)) {
            if (a.length == 0) {
                return true
            } else {
                return false
            }
        }
    },
    isObject: function(a) {
        if ((typeof a) === "object") {
            return true
        } else {
            return false
        }
    },
    isFunction: function(a) {
        if ((typeof a) === "function") {
            return true
        } else {
            return false
        }
    },
    isNumber: function(a) {
        if (!this.isNull(a)) {
            var b = parseInt(a);
            if (isNaN(b)) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    },
    isFloat: function(a) {
        if (!this.isNull(a)) {
            var b = parseFloat(a);
            if (isNaN(b)) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    },
    isBoolean: function(a) {
        if ((typeof a) === "boolean") {
            return true
        } else {
            return false
        }
    }
};
var SvUtilJson = {
    decode: function(a) {
        var b = JSON.stringify(a);
        return b
    },
    encode: function(a) {
        var b = eval("(" + a + ")");
        return b
    }
};
var SvUtilObjLog = {
    blnIsLogging: true,
    strTag: "[VinfluxMobile] :: ",
    d: function() {
        if (!this.blnIsLogging) {
            return
        }
        Array.prototype.unshift.call(arguments, this.strTag);
        console.log.apply(this, arguments)
    },
    e: function() {
        if (!this.blnIsLogging) {
            return
        }
        Array.prototype.unshift.call(arguments, this.strTag);
        console.log.apply(this, arguments);
        throw (new Error(this.strTag + " : Exception : ", arguments));
    }
};
var SvUtilObjResource = {
    obj_Head: document.head,
    addScriptTagInHeader: function(a, b) {
        var c = document.createElement('script');
        c.type = a;
        c.src = b;
        this.obj_Head.appendChild(c)
    },
    addLinkTagInHeader: function(a, b) {
        var c = document.createElement("link");
        c.type = a;
        c.rel = "stylesheet";
        c.href = b;
        this.obj_Head.appendChild(c)
    },
    writeScriptTag: function(a, b) {
        document.write('<script type="' + a + '" src="' + b + '"></' + 'script>')
    },
    writeCSSTag: function(a, b) {
        document.write('<link rel="' + a + '" href="' + b + '">')
    }
};

function Param() {
    this.onInitCommon();
    this.onInitParam();
    this.onInitSearchInfo()
};
Param.prototype.ParamInfo = {
    common: null,
    param: null,
    searchinfo: null
};
Param.prototype.getData = function() {
    return this.ParamInfo
};
Param.prototype.onInitCommon = function() {
    this.getData().common = new Object()
};
Param.prototype.getCommon = function() {
    return this.getData().common
};
Param.prototype.setCommon = function(a) {
    this.getData().common = a
};
Param.prototype.addCommonData = function(a, b) {
    var c = this.getData().common;
    c[a] = b
};
Param.prototype.onInitParam = function() {
    this.getData().param = new Object()
};
Param.prototype.getParam = function() {
    return this.getData().param
};
Param.prototype.setParam = function(a) {
    this.getData().param = a
};
Param.prototype.addParamData = function(a, b) {
    var c = this.getData().param;
    c[a] = b
};
Param.prototype.onInitSearchInfo = function() {
    this.getData().searchinfo = new Array()
};
Param.prototype.getSearchList = function() {
    return this.getData().searchinfo
};
Param.prototype.setSearchList = function(a) {
    this.getData().searchinfo = a
};
Param.prototype.addSearchListData = function(a, b) {
    var c = this.getData().searchinfo;
    var d = new Object();
    d[a] = b;
    c.push(d)
};
var SvRequestObjOption = {
    setRequestStructure: function() {
        var d = {
            strIP: null,
            getIP: function() {
                return this.strIP
            },
            setIP: function(a) {
                this.strIP = a
            },
            strPort: null,
            getPort: function() {
                return this.strPort
            },
            setPort: function(a) {
                this.strPort = a
            },
            getServerInfo: function(a, b) {
                this.strIP = a;
                this.strPort = b
            },
            strModule: null,
            getModule: function() {
                return this.strModule
            },
            setModule: function(a) {
                this.strModule = a
            },
            strMethod: null,
            getMethod: function() {
                return this.strMethod
            },
            setMethod: function(a) {
                this.strMethod = a
            },
            strMode: null,
            getMode: function() {
                return this.strMode
            },
            setMode: function(a) {
                this.strMode = a
            },
            blnAync: null,
            getAync: function() {
                return this.blnAync
            },
            setAync: function(a) {
                this.blnAync = a
            },
            setServerModule: function(a, b, c) {
                this["blnHave" + a] = true;
                this["strIP_" + a] = b;
                this["strPort_" + a] = c
            },
            setHaveServerModule: function(a, b) {
                this["blnHave" + a] = b
            },
            setServerModuleIP: function(a, b) {
                this["strIP_" + a] = b
            },
            setServerModulePort: function(a, b) {
                this["strPort_" + a] = b
            },
            getServerModule: function(a) {
                var b = new Object();
                b["blnHave" + a] = this["blnHave" + a];
                b["strIP_" + a] = this["strIP_" + a];
                b["strPort_" + a] = this["strPort_" + a];
                return b
            },
            getHaveServerModule: function(a) {
                return this["blnHave" + a]
            },
            getServerModuleIP: function(a) {
                return this["strIP_" + a]
            },
            getServerModulePort: function(a) {
                return this["strPort_" + a]
            }
        };
        return d
    },
    setResponseStructure: function() {
        var b = {
            objRequestCtrl: null,
            setRequestCtrl: function(a) {
                this.objRequestCtrl = a
            },
            getRequestCtrl: function() {
                return this.objRequestCtrl
            },
            objScope: null,
            setScope: function(a) {
                this.objScope = a
            },
            getScope: function() {
                return this.objScope
            },
            callback: null,
            setCallback: function(a) {
                this.callback = a
            },
            getCallback: function() {
                return this.callback
            }
        };
        return b
    }
};

function Request(a) {
    this.objType = SvUtilObjType;
    this.objJson = SvUtilJson;
    this.objLog = SvUtilObjLog;
    this.objServerInfo = a;
    if (this.objType.isNull(a.strMode)) {
        this.objRequestMethod.strMode = this.Code.Mode_JSON
    } else {
        this.objRequestMethod.strMode = a.strMode
    }
    if (this.objType.isNull(a.strMethod)) {
        this.objRequestMethod.strMethod = this.Code.Method_POST
    } else {
        this.objRequestMethod.strMethod = a.strMethod
    }
    if (this.objType.isNull(a.blnAync)) {
        this.objRequestMethod.blnAync = true
    } else {
        this.objRequestMethod.blnAync = a.blnAync
    }
};
Request.prototype.Code = {
    Method_POST: "POST",
    Method_GET: "GET",
    Mode_JSON: "JSON",
    READY_UNINITIALIZED: 0,
    READY_LOADING: 1,
    READY_LOADED: 2,
    READY_INTERACTIVE: 3,
    READY_COMPLETE: 4,
    HTTP_SUCCESS: 200,
    HTTP_FORBIDDEN: 403,
    HTTP_NOTFOUND: 404,
    HTTP_INTERNAL: 500,
    HTTP_CONNECTION_ERROR: 999
};
Request.prototype.objServerInfo = {};
Request.prototype.objRequestMethod = {
    strMode: null,
    strMethod: null,
    blnAync: null
};
Request.prototype.setRequestMethod = function(a) {
    if ((typeof objRequestMethod) === "string") {
        this.objRequestMethod.strMethod = a.toUpperCase()
    } else {
        this.objRequestMethod.strMethod = this.Code.Method_POST
    }
};
Request.prototype.getRequestMethod = function() {
    return this.objRequestMethod.strMethod
};
Request.prototype.setAsync = function(a) {
    this.objRequestMethod.blnAync = a
};
Request.prototype.isAsync = function() {
    return this.objRequestMethod.blnAync
};
Request.prototype.setJSONParamData = function(a) {
    var b = this.objJson.decode(a);
    return b
};
Request.prototype.setUrlForJSONRequest = function(a, b) {
    var c = null;
    var d = this.objServerInfo.strModule;
    if (d != null) {
        var e = this.objServerInfo["blnHave" + d]
    } else {
        e = false
    }
    if (e == true) {
        c = this.objServerInfo["strIP_" + d];
        if (c != null && c != undefined && c.length > 0) {
            if (this.objServerInfo.strIP.indexOf("http") == -1) {
                c = "http://" + c
            }
            var f = "";
            if (this.objType.isNull(f)) {
                c = c + "/"
            } else {
                c = c + ":" + f + "/"
            }
        }
    } else {
        c = this.objServerInfo.strIP;
        if (c != null && c != undefined && c.length > 0) {
            if (this.objServerInfo.strIP.indexOf("http") == -1) {
                c = "http://" + c
            }
            if (this.objType.isNull(this.objServerInfo.strPort)) {
                c = c + "/"
            } else {
                c = c + ":" + this.objServerInfo.strPort + "/"
            }
        }
    }
    c = c + d + "/" + a + "/" + b + ".do";
    return c
};
Request.prototype.requestUsingJSON = function(a, b, c, d) {
    var e = this.setJSONParamData(c);
    var f = this.setUrlForJSONRequest(a, b);
    var g = this.getRequestObject();
    if (this.isAsync()) {
        this.setAsyncInfo(g, a, b, d)
    }
    g.open(this.getRequestMethod(), f, this.isAsync());
    g.setRequestHeader("Content-Type", "application/json;charset=utf-8;");
    g.send(e);
    if (!this.isAsync()) {
        return g
    }
};
Request.prototype.request = function(a, b, c) {
    var d = a.split('.');
    if (d.length != 2) {
        return false
    }
    var e = d[0];
    var f = d[1];
    if (this.objRequestMethod.strMode == this.Code.Mode_JSON) {
        return this.requestUsingJSON(e, f, b.getData(), c)
    } else {
        return null
    }
};
Request.prototype.getRequestObject = function() {
    var a = null;
    if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (objError) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (objError) {
                console.log("Can't set AmlHttpRequest!!")
            }
        }
    } else if (window.XMLHttpRequest) {
        a = new XMLHttpRequest()
    }
    return a
};
Request.prototype.setAsyncInfo = function(d, e, f, g) {
    var h = this;
    d.onreadystatechange = function(a) {
        var b = g.getRequestCtrl();
        if (d.readyState == h.Code.READY_COMPLETE) {
            var c = new Object();
            c.httpStatus = d.status;
            c.ControllerName = e;
            c.methodName = f;
            if (d.status === h.Code.HTTP_SUCCESS) {
                c.resultData = h.objJson.encode(d.responseText)
            }
            b.callback(c, g)
        } else {}
    };
    d.onerror = function(a) {
        var b = g.getRequestCtrl();
        var c = new Object();
        c.httpStatus = h.Code.HTTP_CONNECTION_ERROR;
        c.ControllerName = e;
        c.methodName = f;
        c.message = "Error : Connection Fail.<br>Check server settings.";
        c.resultData = h.objJson.encode(a);
        b.callback(c, g)
    }
};

function Response(a) {
    if ((typeof a) !== "undefined") {
        this.serviceId = a.common.method;
        this.common = a.common;
        this.param = a.param;
        this.result = a.result;
        this.searchInfo = a.searchInfo;
        this.message = a.message;
        this.statusCode = a.statusCode;
        this.httpStatus = null;
        this.limit = a.limit;
        this.page = a.page;
        this.start = a.start
    }
};
Response.prototype.serviceId = null;
Response.prototype.setServiceId = function(a) {
    this.serviceId = a
};
Response.prototype.getServiceId = function() {
    return this.serviceId
};
Response.prototype.common = null;
Response.prototype.setCommon = function(a) {
    this.common = a
};
Response.prototype.getCommon = function() {
    return this.common
};
Response.prototype.param = null;
Response.prototype.getParam = function(a) {
    this.param = a
};
Response.prototype.getParam = function() {
    return this.param
};
Response.prototype.result = null;
Response.prototype.setResult = function(a) {
    this.result = a
};
Response.prototype.getResult = function() {
    return this.result
};
Response.prototype.searchInfo = null;
Response.prototype.setSearchInfo = function(a) {
    this.searchInfo = a
};
Response.prototype.getSearchInfo = function() {
    return this.searchInfo
};
Response.prototype.statusCode = null;
Response.prototype.setStatusCode = function(a) {
    this.statusCode = a
};
Response.prototype.getStatusCode = function() {
    return this.statusCode
};
Response.prototype.message = null;
Response.prototype.setMessage = function(a) {
    this.message = a
};
Response.prototype.getMessage = function() {
    return this.message
};
Response.prototype.limit = null;
Response.prototype.setLimit = function(a) {
    this.limit = a
};
Response.prototype.getLimit = function() {
    return this.limit
};
Response.prototype.page = null;
Response.prototype.setPage = function(a) {
    this.page = a
};
Response.prototype.getPage = function() {
    return this.page
};
Response.prototype.start = null;
Response.prototype.setStart = function(a) {
    this.start = a
};
Response.prototype.getStart = function() {
    return this.start
};
var Ajax = function() {
    this._$init.apply(this, arguments)
};
Ajax.prototype._$init = function(a) {
    this.objOption = a;
    this.objType = SvUtilObjType;
    this.objRequestParam = Param;
    this.objRequestModuleOption = SvRequestObjOption;
    this.objRequestModule = Request;
    this.objResponseModule = Response;
    this.objCookie = SvStorageObjCookie;
    var b = this.objRequestModuleOption.setRequestStructure();
    b.getServerInfo(a.ip, a.port);
    b.setMethod(a.method);
    b.setMode(a.mode);
    b.setModule(a.module);
    b.setAync(a.aync);
    this.objRequest = new this.objRequestModule(b)
};
Ajax.prototype.setParam = function() {
    var a = new this.objRequestParam();
    return a
};
Ajax.prototype.callback = function(a, b) {
    var c = SvComponentPopupAlert;
    if (window.top.sv != null) {
        c = window.top.sv.popup.Alert
    }
    var d = b.getScope();
    var e = b.getCallback();
    if (a.httpStatus == this.objRequest.Code.HTTP_SUCCESS) {
        var f = new this.objResponseModule(a.resultData);
        if (f.getStatusCode() == "000000") {
            e(f, d)
        } else {
            c.error(c.TYPE_ERROR, f.getMessage());
            e(f, d)
        }
    } else {
        if (a.httpStatus != '302') {
            alert("HTTP CONNECTION STATUS : " + a.statusCode)
        }
    }
};
Ajax.prototype.request = function(a, b, c, d, e) {
    var f = this;
    if (e != false) {}
    var g = a.split('.');
    var h = g[0];
    var i = g[1];
    b.addCommonData('bean', h);
    b.addCommonData('method', i);
    var j = this.objRequestModuleOption.setResponseStructure();
    j.setRequestCtrl(this);
    j.setScope(d);
    j.setCallback(c);
    j.objParent = this;
    var k = this.objRequest.request(a, b, j);
    return k
};
var SvStorageObjCookie = {
    intDays: 0,
    write: function(a, b, c) {
        var d = new Date();
        if ((typeof c) != "undefined") {
            d.setDate(d.getDate() + c);
            document.cookie = a + '=' + escape(b) + ';expires=' + d.toGMTString() + "; path=/"
        } else {
            document.cookie = a + '=' + escape(b) + ';expires=' + this.intDays + "; path=/"
        }
    },
    read: function(a) {
        if (document.cookie.length > 0) {
            var b = document.cookie.indexOf(a + '=');
            if (b != -1) {
                b = b + a.length + 1;
                var c = document.cookie.indexOf(';', b);
                if (c == -1) c = document.cookie.length;
                return unescape(document.cookie.substring(b, c))
            }
        }
        return null
    },
    remove: function(a) {
        var b = new Date();
        b.setTime(b.getDate() - 1);
        document.cookie = a + '=' + ';expires=' + b.toGMTString() + "; path=/"
    },
    clear: function() {
        var a = document.cookie.split(";");
        for (var b = 0; b < a.length; b++) {
            var c = a[b].split("=");
            this.remove(c[0].trim())
        }
    }
};
var SvStorageObjLocal = {
    set: function(a, b) {
        localStorage.setItem(a, b)
    },
    get: function(a) {
        return localStorage.getItem(a)
    },
    remove: function(a) {
        localStorage.removeItem(a)
    },
    removeAll: function() {
        localStorage.clear()
    }
};
var _Lang = function() {};
_Lang.prototype.setLocale = function(b, c) {
    var d = this.getLocaleData(c);
    var e = function(a) {
        $("." + b).i18n()
    };
    $.i18n.init({
        lng: c,
        debug: false,
        getAsync: false,
        resStore: d,
        useDataAttrOptions: true,
        interpolation: {
            prefix: "__",
            suffix: "__"
        }
    }, e)
};
_Lang.prototype.setLocaleData = function(a, b) {
    var c = SvUtilJson;
    var d = SvStorageObjLocal;
    var e = c.decode(b);
    d.set("Locale_" + a, e)
};
_Lang.prototype.getLocaleData = function(a) {
    var b = SvUtilJson;
    var c = SvStorageObjLocal;
    var d = c.get("Locale_" + a);
    var e = b.encode(d);
    return e
};
_Lang.prototype.getText = function(a, b) {
    if (b) {
        return $.i18n.t(a, b)
    } else {
        return $.i18n.t(a)
    }
};
_Lang.prototype.changeLang = function(a) {
    $("." + a).i18n()
};
var _ComboBox = function() {};
_ComboBox.prototype.setData = function(a, b, c) {
    var d = a[0];
    this.clearOption(d);
    for (var e = 0; e < b.length; e++) {
        var f = b[e];
        var g = document.createElement("option");
        g.text = f[c.text];
        g.value = f[c.value];
        g.codeValue = f[c.codeValue];
        d.options.add(g)
    }
};
_ComboBox.prototype.clearOption = function(a) {
    var b = a.options.length;
    for (idxOptionItem = 0; idxOptionItem < b; idxOptionItem++) {
        a.options[idxOptionItem] = null
    }
};

function SvComponentPopupAlert(j) {
    var k = SvUtilObjResource;
    k.addLinkTagInHeader("text/css", "../assets/css/sweetalert2.min.css");
    var l = {
        TYPE_ERROR: 'error',
        TYPE_SUCCESS: 'success',
        TYPE_WARNING: 'warning',
        show: function(b, c, d, e, f) {
            var g = {
                title: b,
                html: c,
                type: d,
            };
            if (!sv.util.Type.isNull(e)) {
                g.showCancelButton = true;
                g.confirmButtonColor = '#3085d6';
                g.cancelButtonColor = '#d33';
                g.confirmButtonText = 'OK';
                this.swal(g).then(function() {
                    e()
                }, function(a) {
                    if (!sv.util.Type.isNull(f)) {
                        f()
                    } else {
                        if (a === 'cancel') {} else {
                            throw a;
                        }
                    }
                });
                return null
            } else {
                return this.swal(g)
            }
        },
        error: function(a, b, c, d) {
            var e = null;
            if (sv.util.Type.isNull(a)) {
                e = "Warning"
            } else {
                if (a == this.TYPE_ERROR) {
                    e = "Error"
                } else if (a == this.TYPE_SUCCESS) {
                    e = "Success"
                } else if (a == this.TYPE_WARNING) {
                    e = "Warning"
                }
            }
            return this.show(e, b, a, c, d)
        },
        image: function(f, g, h) {
            var i = {
                title: f,
                text: g,
                input: 'file',
                inputAttributes: {
                    accept: 'image/*',
                    id: "file_image_upload"
                },
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK',
                preConfirm: function(e) {
                    return new Promise(function(a, b) {
                        if (!e) {
                            b('File not found')
                        }
                        var c = /\.(jpg|gif|tif|bmp|png|jpeg)$/i;
                        var d = e.name.toLowerCase();
                        if (!d.match(c)) {
                            b('No image file')
                        } else {
                            a()
                        }
                    })
                }
            };
            this.swal(i).then(function(a) {
                var b = $("#file_image_upload");
                h(b[0].files, a)
            }, function(a) {
                if (a === 'cancel') {} else {
                    throw a;
                }
            })
        }
    };
    l.swal = j;
    return l
};
var sv = new Object();
var objType = SvUtilObjType;
var objJson = SvUtilJson;
var objLog = SvUtilObjLog;
var objResource = SvUtilObjResource;
sv.util = new Object();
sv.util.Type = objType;
sv.util.Json = objJson;
sv.util.Log = objLog;
sv.util.Resource = objResource;
var objParam = Param;
var objOption = SvRequestObjOption;
var objRequest = Request;
var objResponse = Response;
var objAjax = Ajax;
sv.request = new Object();
sv.request.Param = objParam;
sv.request.Option = objOption;
sv.request.Request = objRequest;
sv.request.Response = objResponse;
sv.Ajax = objAjax;
var objLocal = SvStorageObjLocal;
var objCookie = SvStorageObjCookie;
sv.storage = new Object();
sv.storage.Local = objLocal;
sv.storage.Cookie = objCookie;
var objLang = _Lang;
sv.locale = new Object();
sv.locale.Lang = objLang;
var objCombo = _ComboBox;
sv.input = new Object();
sv.input.Combo = objCombo;
var objAlert = SvComponentPopupAlert;
sv.popup = new Object();
sv.popup.Alert = objAlert;
var seavantage = seavantage || {};
seavantage.map = seavantage.map || {};
seavantage.map.Controller = seavantage.map.Controller || {};
seavantage.map.Controller = function(a, b) {
    this.setDomInfo(a);
    var c = {
        cursorControl: {
            userYn: true,
            position: 'google.maps.ControlPosition.RIGHT_BOTTOM'
        },
        map: {
            options: {}
        },
        events: {}
    };
    this.config = $.extend(true, {}, c, b);
    this.map = gmap.init(this.dom[0], this.config);
    this.layer = new Layers(this.map);
    this.data = new Data();
    this.marker = new Marker(this.map);
    this.circle = new Circle(this.map);
    this.line = new Line(this.map);
    this.dataLayer = new DataLayer(this.map);
    this.drawLayer = new DrawLayer(this.map);
    this.distance = new Distance(this.map);
    this.imageOverlay = new ImageOverlay(this.map);
    if (this.config.cursorControl.userYn) {
        this.cursorControl = new CursorControl(this.dom, this.map, this.config.cursorControl);
        this.cursorControl.init()
    }
    this.setValidCenter(this.map);
    this.setAllowedBounds();
    var d = this;
    google.maps.event.addListener(this.map, 'center_changed', function() {
        d.validCenter(d.map)
    })
};
seavantage.map.Controller.prototype = Object.create(Component.prototype);
seavantage.map.Controller.prototype.constructor = seavantage.map.Controller;
seavantage.map.Controller.prototype.OVERLAYTYPE = "overlay";
seavantage.map.Controller.prototype.MAKERTYPE = "marker";
seavantage.map.Controller.prototype.CIRCLETYPE = "circle";
seavantage.map.Controller.prototype.POLYGONTYPE = "polygon";
seavantage.map.Controller.prototype.LINETYPE = "line";
seavantage.map.Controller.prototype.CLUSTERTYPE = "cluster";
seavantage.map.Controller.prototype.LABELTYPE = "label";
seavantage.map.Controller.prototype.DATALAYERTYPE = "datalayer";
seavantage.map.Controller.prototype.DRAWMANAGER = "drawManager";
seavantage.map.Controller.prototype.DISTANCE = "distance";
let allowedBounds;
let lastValidCenter;
let boundLimits;
let newLat, newLng;
seavantage.map.Controller.prototype.setValidCenter = function(a) {
    lastValidCenter = a.getCenter()
};
seavantage.map.Controller.prototype.setAllowedBounds = function() {
    allowedBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-85, -180), new google.maps.LatLng(85, 180));
    boundLimits = {
        maxLat: allowedBounds.getNorthEast().lat(),
        maxLng: allowedBounds.getNorthEast().lng(),
        minLat: allowedBounds.getSouthWest().lat(),
        minLng: allowedBounds.getSouthWest().lng()
    }
};
seavantage.map.Controller.prototype.validCenter = function(a) {
    var b = a.getCenter();
    if (b.lat() >= -85 && b.lat() <= 85) {
        lastValidCenter = a.getCenter();
        return
    }
    newLat = lastValidCenter.lat();
    newLng = b.lng();
    if (b.lng() > boundLimits.minLng && b.lng() < boundLimits.maxLng) {
        newLng = b.lng()
    }
    if (b.lat() > boundLimits.minLat && b.lat() < boundLimits.maxLat) {
        newLat = b.lat()
    }
    newLat = b.lat() > boundLimits.maxLat ? 85 : -85;
    a.panTo(new google.maps.LatLng(newLat, newLng))
};
seavantage.map.Controller.prototype.setData = function(a, b) {
    this.data.setData(a, b)
};
seavantage.map.Controller.prototype.addData = function(a, b) {
    var c = this.getData(a);
    var d = [];
    if (c == undefined) {
        d.push(b);
        this.setData(a, d)
    } else {
        c.values.push(b)
    }
};
seavantage.map.Controller.prototype.getData = function(a) {
    return this.data.getData(a)
};
seavantage.map.Controller.prototype.removeDatas = function(a) {
    this.data.removeDatas(a)
};
seavantage.map.Controller.prototype.setMapTypes = function(a, b) {
    this.map.mapTypes.set(a, b)
};
seavantage.map.Controller.prototype.setOptions = function(a) {
    this.map.setOptions(a)
};
seavantage.map.Controller.prototype.setMapTypeId = function(a) {
    this.map.setMapTypeId(a)
};
seavantage.map.Controller.prototype.getMapTypeId = function() {
    return this.map.getMapTypeId()
};
seavantage.map.Controller.prototype.createMarkers = function(a, b) {
    var c = seavantage.map.Controller.prototype.MAKERTYPE;
    var d = this.data.getData(a);
    this.layer.setLayer(b.groupId, b.layerId);
    var e = this.layer.getLayer(b.groupId, b.layerId);
    var f = this.marker.createMarkers(e, d.values, b);
    e.type = c;
    e.dataId = a;
    return f
};
seavantage.map.Controller.prototype.runMarker = function(a, b) {
    var c = this.layer.getLayer(a, b);
    this.marker.run(c);
    return c
};
seavantage.map.Controller.prototype.getMarkers = function(a, b) {
    var c = this.layer.getLayer(a, b);
    return this.marker.getMarkers(c)
};
seavantage.map.Controller.prototype.getMarkersArray = function(c, d) {
    var e = this.layer.getLayer(c, d);
    var f = this.marker.getMarkers(e);
    var g = [];
    $.each(f, function(a, b) {
        g.push(b)
    });
    return g
};
seavantage.map.Controller.prototype.setMarkerPosition = function(a, b, c) {
    var d = new google.maps.LatLng(b, c);
    a.setPosition(d)
};
seavantage.map.Controller.prototype.createLine = function(a, b) {
    var c = seavantage.map.Controller.prototype.LINETYPE;
    var d = this.data.getData(a);
    this.layer.setLayer(b.groupId, b.layerId);
    var e = this.layer.getLayer(b.groupId, b.layerId);
    var f = this.line.createPath(e, d.values, b);
    e.type = c;
    e.dataId = a;
    e.layerId = b.layerId;
    e.groupId = b.groupId;
    return e
};
seavantage.map.Controller.prototype.runLine = function(a, b) {
    var c = this.layer.getLayer(b.groupId, b.layerId);
    this.line.run(c);
    return c
};
seavantage.map.Controller.prototype.createCircle = function(a, b) {
    var c = seavantage.map.Controller.prototype.CIRCLETYPE;
    var d = this.data.getData(a);
    this.layer.setLayer(b.groupId, b.layerId);
    var e = this.layer.getLayer(b.groupId, b.layerId);
    var f = this.circle.createCircles(e, d.values, b);
    e.type = c;
    e.dataId = a;
    return e
};
seavantage.map.Controller.prototype.createAddDatalayer = function(a, b) {
    var c = this.createDatalayer(a, b);
    this.addGeoJson(c);
    return c
};
seavantage.map.Controller.prototype.createDatalayer = function(a, b) {
    var c = seavantage.map.Controller.prototype.DATALAYERTYPE;
    this.layer.setLayer(b.groupId, b.layerId);
    var d = this.layer.getLayer(b.groupId, b.layerId);
    var e = this.dataLayer.createDatalayer(d, b);
    e.type = c;
    e.dataId = a;
    return d
};
seavantage.map.Controller.prototype.addGeoJson = function(a) {
    var b = this.data.getData(a.dataId);
    if (b.values.geometry == undefined) {
        b.values = {
            type: "Feature",
            geometry: b.values
        }
    }
    var c = this.dataLayer.addGeoJson(a, b.values);
    return c
};
seavantage.map.Controller.prototype.createDrawManager = function(a) {
    var b = seavantage.map.Controller.prototype.DRAWMANAGER;
    this.layer.setLayer(a.groupId, a.layerId);
    var c = this.layer.getLayer(a.groupId, a.layerId);
    var d = this.drawLayer.createDrawLayer(c, a);
    d.type = b;
    return c
};
seavantage.map.Controller.prototype.createDistance = function(a) {
    var b = seavantage.map.Controller.prototype.DISTANCE;
    var c = this.distance.createDistance(a);
    c.type = b;
    return c
};
seavantage.map.Controller.prototype.createCluster = function(c, d, e) {
    var f = this;
    var g = seavantage.map.Controller.prototype.CLUSTERTYPE;
    var h = {
        zoomOnClick: false,
        imagePath: '../assets/image/cluster/m'
    };
    h = $.extend(true, {}, h, e);
    var i = this.layer.getLayer(c, d);
    var j = this.marker.getMarkers(i);
    var k = [];
    $.each(j, function(a, b) {
        k.push(b)
    });
    var l = this.layer.getLayer(c, d + "_cluster");
    if (!l) {
        this.layer.setLayer(c, d + "_cluster");
        l = this.layer.getLayer(c, d + "_cluster")
    }
    if (l.markerCluster) {
        l.markerCluster.clearMarkers()
    }
    window.setTimeout(function() {
        l.markerCluster = new MarkerClusterer(f.map, k, h);
        l.option = h;
        l.type = g
    }, 0);
    return l.markerCluster
};
seavantage.map.Controller.prototype.createWmsLayer = function(a, b, c) {
    var d = seavantage.map.Controller.prototype.OVERLAYTYPE;
    var e = this.imageOverlay.wmsOverlay(c);
    this.map.overlayMapTypes.insertAt(c.idx, e);
    this.layer.setLayer(c.groupId, c.layerId);
    var f = this.layer.getLayer(a, b);
    var d = seavantage.map.Controller.prototype.OVERLAYTYPE;
    f.type = d;
    f.layer = e;
    f.option = c;
    return f
};
seavantage.map.Controller.prototype.createImgLayer = function(a, b, c) {
    var d = seavantage.map.Controller.prototype.OVERLAYTYPE;
    var e = this.imageOverlay.imgOverlay(c);
    this.map.overlayMapTypes.insertAt(c.idx, e);
    this.layer.setLayer(a, b);
    var f = this.layer.getLayer(a, b);
    var d = seavantage.map.Controller.prototype.OVERLAYTYPE;
    f.type = d;
    f.layer = e;
    f.option = c;
    return f
};
seavantage.map.Controller.prototype.clearLayer = function(a, b) {
    var c = this.layer.getLayer(a, b);
    var d = c.option;
    if (c) {
        var e = c.type;
        if (e == seavantage.map.Controller.prototype.MAKERTYPE) {
            this.marker.remove(c)
        } else if (e == seavantage.map.Controller.prototype.LINETYPE) {
            this.line.remove(c)
        } else if (e == seavantage.map.Controller.prototype.POLYGONTYPE) {} else if (e == seavantage.map.Controller.prototype.OVERLAYTYPE) {
            this.map.overlayMapTypes.removeAt(d.idx, wms)
        } else if (e == seavantage.map.Controller.prototype.DATALAYERTYPE) {
            this.dataLayer.remove(c)
        } else if (e == seavantage.map.Controller.prototype.CLUSTERTYPE) {
            if (c.markerCluster) {
                c.markerCluster.clearMarkers();
                c.markerCluster.repaint()
            }
        }
    }
};
seavantage.map.Controller.prototype.getGroupLayer = function(a) {
    var b = this.layer.getGroup(a);
    return b
};
seavantage.map.Controller.prototype.getLayer = function(a, b) {
    var c = this.layer.getLayer(a, b);
    return c
};
seavantage.map.Controller.prototype.setLayerVisible = function(a, b, c) {
    var d = this.layer.getLayer(a, b);
    d.visible = c
};
seavantage.map.Controller.prototype.setGroupLayerVisible = function(e, f) {
    var g = this;
    var h = this.layer.getGroup(e);
    $.each(h.layers, function(a, b) {
        var c = b.dataId;
        b.visible = f;
        var d = b.option;
        if (b.type == 'marker') {
            g.runMarker(e, c)
        } else if (b.type == 'line') {
            g.runLine(c, {
                groupId: e,
                layerId: c
            })
        }
    })
};
seavantage.map.Controller.prototype.clearGroupLayer = function(c) {
    var d = this;
    var e = this.layer.getGroup(c);
    $.each(e.layers, function(a, b) {
        d.clearLayer(c, b.layerId)
    })
};

function Component() {};
Component.prototype.setDomInfo = function(a) {
    if (sv.util.Type.isString(a)) {
        this.domId = a;
        this.dom = $("#" + this.domId)
    } else {
        this.dom = a;
        this.domId = this.dom.attr("id")
    }
    if (sv.util.Type.isNull($.fn.getManager)) {
        $.fn.getManager = function() {
            return this.data("Object")
        }
    }
    this.dom.data("Object", this)
};
Component.prototype.selectDom = function(a) {
    return $(this.dom.find(a))
};
Component.prototype.closest = function(a) {
    return this.dom.closest(a)
};
Component.prototype.data = function(a, b) {
    if (sv.util.Type.isNull(b)) {
        this.dom.data(a)
    } else {
        this.dom.data(a, b)
    }
};
var gmap = {
    init: function(a, b) {
        var c = {
            zoom: 12,
            center: new google.maps.LatLng(37.295, 126.893),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scaleControl: true,
            disableDoubleClickZoom: true,
            minZoom: 2,
            maxZoom: 18,
            controlSize: 40
        };
        var d = $.extend(true, {}, c, b);
        var e = new google.maps.Map(a, d);
        return e
    }
};

function Layers(a) {
    this.map = a;
    this.root = {};
    this.layerIds = {};
    this.groupIds = {};
    this.GroupTmp = {
        type: 'G',
        groupId: null,
        display: null,
        visible: true,
        layers: null
    };
    this.LayerTmp = {
        type: 'L',
        layerId: null,
        display: null,
        visible: true,
        viewType: null,
        dataId: null,
        features: null
    };
    this.labelLayer = new Array()
}
Layers.prototype.getGroups = function() {
    return this.root
};
Layers.prototype.getMap = function() {
    return this.map
};
Layers.prototype.deleteLayer = function(a, b) {
    var c = this.getLayer(a, b);
    if (c != null) {
        if (c.zoomListener) {
            google.maps.event.removeListener(c.zoomListener)
        }
        delete c
    }
};
Layers.prototype.deleteGroup = function(b) {
    if (b == undefined) {
        b = "defaultGroup"
    }
    if (this.root[b] != undefined && this.root[b] != null) {
        var c = this.root[b];
        $.each(c, function(a) {
            this.deleteLayer(b, a)
        })
    }
    delete this.root[b]
};
Layers.prototype.setLayer = function(a, b) {
    if (this.root[a] == undefined || this.root[a] == null) {
        this.addGroup({
            groupId: a,
            display: a,
            visible: true
        })
    }
    if (b) {
        if (this.root[a].layers[b] == undefined || this.root[a].layers[b] == null) {
            this.addLayer({
                layerId: b,
                display: b,
                visible: true
            }, a)
        }
    }
};
Layers.prototype.addGroup = function(a) {
    var b = {
        type: 'G',
        groupId: '',
        display: '',
        visible: true,
        layers: {}
    };
    a = $.extend({}, b, a);
    if (this.root[a.groupId] == undefined) {
        this.root[a.groupId] = a
    } else {
        return $.alertText('ERROR', 'addGroup-> ' + a.groupId + ': 중복된 id 입니다.', 1000)
    }
};
Layers.prototype.addLayer = function(a, b) {
    var c = {
        type: 'L',
        layerId: '',
        display: '',
        visible: true,
        viewType: '',
        dataId: '',
        features: {}
    };
    a = $.extend({}, c, a);
    var d = false;
    var e = false;
    if (b !== undefined) {
        d = this.root[b] == undefined ? false : true
    } else {
        b = 'defaultGroup'
    }
    this.putLayer(this.root[b], a)
};
Layers.prototype.putLayer = function(a, b) {
    if (a.type !== 'G') {
        return $.alertText('ERROR', 'putLayer-> ' + a.groupId + ': 없는 그룹 id 입니다.', 1000)
    }
    if (b.type !== 'L') {
        return $.alertText('ERROR', 'putLayer-> ' + b.layerId + ': 없는 레이어 id 입니다.', 1000)
    }
    if (a.layers[b.layerId] !== undefined) {
        return $.alertText('ERROR', 'putLayer-> ' + b.layerId + '는 ' + a.groupId + '에 이미 존재 합니다.', 1000)
    }
    this.root[a.groupId].layers[b.layerId] = b
};
Layers.prototype.isLayer = function(a, b) {
    var c = false;
    if (a && b) {
        if (this.root[a] && this.root[a].layers[b]) {
            c = true
        }
    }
    return c
};
Layers.prototype.isGroup = function(a) {
    var b = false;
    if (a) {
        if (this.root[a]) {
            b = true
        }
    }
    return b
};
Layers.prototype.getGroup = function(a) {
    if (a == undefined) {
        a = "defaultGroup"
    }
    if (this.root[a] == undefined || this.root[a] == null) {
        this.setLayer(a)
    }
    return this.root[a]
};
Layers.prototype.getLayer = function(a, b) {
    if (!a) {
        a = "defaultGroup"
    }
    if (!b) {
        b = "defaultLayer"
    }
    var c = this.getGroup(a);
    if (c.layers[b] == undefined || c.layers[b] == null) {
        this.setLayer(a, b)
    }
    return c.layers[b]
};
Layers.prototype.getLayers = function(a) {
    if (a == undefined) {
        a = "defaultGroup"
    }
    if (this.root[a] == undefined || this.root[a] == null) {
        this.setLayer(a)
    }
};

function Data() {
    this.pool = {}
};
Data.prototype.setData = function(a, b, c) {
    if (c == undefined) {
        c = "Data"
    }
    this.pool[a] = {
        type: c,
        values: b
    }
};
Data.prototype.getData = function(a) {
    if (a == null) {
        return pool
    };
    var b = null;
    b = this.pool[a];
    return b
};
Data.prototype.poolCheck = function(a) {
    if (this.pool[a] == null || this.pool[a] == undefined) {
        return false
    } else {
        return true
    }
};
Data.prototype.removeData = function(c, d, e) {
    if (d == undefined) {
        d = "id"
    }
    if (this.poolCheck(c)) {
        var f = this.getData(c);
        $.each(f.values, function(a, b) {
            if (b[d] && b[d] == e) {
                f.splice(i, 1)
            }
        })
    }
};
Data.prototype.removeDatas = function(a) {
    this.pool[a] = null;
    delete this.pool[a]
};

function CursorControl(u, v, x) {
    var y = "box_" + x.domId;
    var z = "txt_" + x.domId;
    this.init = function() {
        var b = document.getElementById(y);
        var c = x.position;
        if (b === undefined || b === null) {
            v.addListener("mouseover", function() {
                C()
            });
            v.addListener("mouseout", function(a) {
                if (!v.getBounds().contains(a.latLng)) D()
            });
            MapCursorControl(c)
        }
    };

    function MapCursorControl(e) {
        var f = document.createElement("div");
        f.id = y;
        f.className = "map_cursor_box";
        var g = document.createElement("div");
        g.id = z;
        g.style.padding = "3px";
        f.appendChild(g);
        var h = 0;
        google.maps.event.addListener(v, 'mousemove', function(a) {
            var b = new Date;
            if (b.getTime() > h) {
                var c = a.latLng;
                if (c) {
                    var d = B(c.lat(), c.lng());
                    g.className = "map_cursor_white";
                    g.innerHTML = d;
                    h = b.getTime() + 50
                }
            }
        });
        v.controls[eval(e)].push(f);
        return f
    };
    var A = function(a, b, c) {
        var d = a.getProjection().fromLatLngToPoint(a.getBounds().getNorthEast());
        var e = a.getProjection().fromLatLngToPoint(a.getBounds().getSouthWest());
        var f = Math.pow(2, a.getZoom());
        var g = new google.maps.Point(b / f + e.x, c / f + d.y);
        return a.getProjection().fromPointToLatLng(g)
    };
    var B = function(a, b) {
        var s = "N";
        var w = "E";
        if (a < 0) {
            a = -a;
            s = "S"
        }
        if (b < 0) {
            b = -b;
            w = "W"
        }
        var c = Math.floor(a);
        var d = Math.round((a - c) * 1E4);
        var e = c.toString();
        while (e.length < 2) e = "0" + e;
        var f = d.toString();
        while (f.length < 4) f = "0" + f;
        var g = Math.floor(b);
        var h = Math.round((b - g) * 1E4);
        var i = g.toString();
        while (i.length < 3) i = "0" + i;
        var j = h.toString();
        while (j.length < 4) j = "0" + j;
        var k = Math.floor((a - c) * 60);
        var l = ((a - c) * 60 - k) * 60;
        var m = Math.floor(l);
        var n = Math.floor((l - m) * 100);
        if (k.toString().length == 1) k = "0" + k;
        if (m.toString().length == 1) m = "0" + m;
        if (n.toString().length == 1) n = "0" + n;
        var o = Math.floor((b - g) * 60);
        var p = ((b - g) * 60 - o) * 60;
        var q = Math.floor(p);
        var r = Math.floor((p - q) * 100);
        if (o.toString().length == 1) o = "0" + o;
        if (q.toString().length == 1) q = "0" + q;
        if (r.toString().length == 1) r = "0" + r;
        var t = "";
        t = s + e + "&deg;" + k + "'" + m + "." + n + '"<br/>';
        t += w + i + "&deg;" + o + "'" + q + "." + r + '"<br/>';
        t += "(" + (s == "S" ? "-" : "") + e + "." + f + ", " + (w == "W" ? "-" : "") + i + "." + j + ")";
        return t
    };
    var C = function() {
        var a = document.getElementById(z);
        if (a) a.style.visibility = "visible"
    };
    var D = function() {
        var a = document.getElementById(z);
        if (a) a.style.visibility = "hidden"
    }
};

function Marker(a) {
    this.map = a
};
Marker.prototype.createMarker = function(c, d) {
    var e = c[d.latNm];
    var f = c[d.lngNm];
    var g = {
        heading: 0,
        cog: 0,
        sog: 0,
        length: 0,
        ship_type: 70
    };
    var h = new google.maps.LatLng(e, f);
    var i = c[d.id];
    var j = d.zIndex;
    var k = true;
    var l = null;
    if (typeof d.getIcon != "function") {
        if (i == undefined || i == null) {
            i = "m" + new Date().getTime()
        }
        if (c[d.headingId] != undefined && c[d.headingId] != null) {
            g.heading = c[d.headingId]
        }
        if (c[d.cogId] != undefined && c[d.cogId] != null) {
            g.cog = c[d.cogId]
        }
        if (c[d.sogId] != undefined && c[d.sogId] != null) {
            g.sog = c[d.sogId]
        }
        if (c[d.lengthId] != undefined && c[d.lengthId] != null) {
            g.length = c[d.lengthId]
        }
        if (c[d.shipTypeId] != undefined && c[d.shipTypeId] != null) {
            g.ship_type = c[d.shipTypeId]
        }
        if (d.optimized != null && d.optimized != undefined) {
            k = d.optimized
        }
        l = this.getMarkerIcon(d, g, d.iconNm)
    } else {
        l = d.getIcon(c, d)
    }
    var m = new google.maps.Marker({
        icon: l,
        position: h,
        id: i,
        data: c,
        headingId: d.headingId,
        cogId: d.cogId,
        sogId: d.sogId,
        lengthId: d.lengthId,
        shipTypeId: d.shipTypeId,
        iconNm: d.iconNm,
        optimized: k,
        isFilter: d.isFilter
    });
    if (d.useTootltip) {
        if (typeof d.tooltip == "function") {
            m.setTitle(d.tooltip(c))
        } else if (typeof d.tooltip == "string") {
            m.setTitle(c[d.tooltip])
        }
    }
    if (j) {
        m.setZIndex(j)
    }
    if (d.label && d.label.labelExist) {
        m.mapLabel = this.getLabelOption(d.label);
        m.mapLabel.text = c[d.label.labelContent]
    } else {
        m.mapLabel = this.getLabelOption(d.label);
        m.mapLabel.text = " "
    }
    $.each(d.event, function(a, b) {
        m.addListener(a, b)
    });
    return m
};
Marker.prototype.updateMarker = function(c, d, e) {
    var f = d[e.latNm];
    var g = d[e.lngNm];
    var h = d[e.headingId];
    var i = {
        heading: 0,
        cog: 0,
        sog: 0,
        length: 0,
        ship_type: 70
    };
    var j = new google.maps.LatLng(f, g);
    var k = e.zIndex;
    var l = null;
    if (typeof e.getIcon != "function") {
        if (d[e.headingId] != undefined && d[e.headingId] != null) {
            i.heading = d[e.headingId]
        }
        if (d[e.cogId] != undefined && d[e.cogId] != null) {
            i.cog = d[e.cogId]
        }
        if (d[e.sogId] != undefined && d[e.sogId] != null) {
            i.sog = d[e.sogId]
        }
        if (d[e.lengthId] != undefined && d[e.lengthId] != null) {
            i.length = d[e.lengthId]
        }
        if (d[e.shipTypeId] != undefined && d[e.shipTypeId] != null) {
            i.ship_type = d[e.shipTypeId]
        }
        var l = this.getMarkerIcon(e, i, e.iconNm)
    } else {
        l = e.getIcon(d, e)
    }
    if (l) {
        c.setIcon(l)
    }
    if (j && !c.getPosition().equals(j)) {
        c.setPosition(j)
    }
    if (k) {
        c.setZIndex(k)
    }
    if (e.label && e.label.labelExist) {
        c.mapLabel = this.getLabelOption(e.label);
        c.mapLabel.text = d[e.label.labelContent]
    }
    c.data = d;
    c.headingId = e.headingId;
    c.iconNm = e.iconNm;
    $.each(e.event, function(a, b) {
        c.addListener(a, b)
    });
    return c
};
Marker.prototype.createMarkers = function(e, f, g) {
    var h = this;
    var i = this.getMarkers(e);
    var j = this.getMarkerOption(g);
    var k = {};
    if (f.length != undefined) {
        $.each(f, function(a, b) {
            var c = b[g.id];
            if (g.refresh) {
                if (i[c]) {
                    var d = i[c];
                    h.updateMarker(d, b, j)
                } else {
                    var d = h.createMarker(b, j);
                    i[c] = d
                }
            } else {
                var d = h.createMarker(b, j);
                i[c] = d
            }
        })
    } else {
        var l = f[g.id];
        if (g.refresh) {
            if (i[l]) {
                var m = i[l];
                h.updateMarker(m, f, j)
            } else {
                var m = h.createMarker(f, j);
                i[l] = m
            }
        } else {
            var m = h.createMarker(f, j);
            i[l] = m
        }
    }
    e.option = j;
    if (!e.zoomListener) {
        e.zoomListener = this.map.addListener('zoom_changed', function() {
            if (j.labelVisible) {
                $.each(i, function(a, b) {
                    if (b.getMap() && b.getVisible()) {
                        if (h.getLabelVisible(b, j.labelVisible)) {
                            b.setLabel(b.mapLabel)
                        } else {
                            b.setLabel(null)
                        }
                    }
                })
            }
        })
    }
    return i
};
Marker.prototype.getMarkerOption = function(a) {
    var b = {
        layerId: 'defaultLayer',
        groupId: 'defaultGroup',
        latNm: 'latitude',
        lngNm: 'longitude',
        id: 'id',
        iconType: 'IMAGE',
        image: null,
        iconNm: 'type',
        icon: null,
        headingId: "heading",
        cogId: "cog",
        sogId: "sog",
        lengthId: "length",
        shipTypeId: "ship_type",
        isFilter: false,
        layerVisible: true,
        labelVisible: true,
        refresh: false,
        tooltip: null,
        useTootltip: false,
        optimized: true,
        zIndex: null,
        label: {
            labelExist: false,
            labelContent: 'id'
        },
        event: null
    };
    var c = $.extend(true, {}, b, a);
    return c
};
Marker.prototype.getLabelOption = function(a) {
    var b = {
        color: "#bb6b06",
        fontWeight: "bold",
        fontSize: "12px",
        minZoom: 2,
        maxZoom: 21,
    };
    var c = $.extend(true, {}, b, a);
    return c
};
Marker.prototype.getLabelVisible = function(a, b) {
    if (b) {
        var c = a.mapLabel;
        var d = c.minZoom;
        var e = c.maxZoom;
        if (d === undefined) {
            d = 0
        }
        if (e === undefined) {
            e = 22
        }
        var f = a.getMap();
        if (!f) {
            return true
        }
        var g = f.getZoom();
        if (g < d || g > e) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
};
Marker.prototype.getMarkerIcon = function(a, b, c) {
    if (b == undefined || b == null) {
        b = 0
    }
    if (c == undefined || c == null) {
        c = ""
    }
    var d = null;
    var e = {
        url: '//maps.google.com/mapfiles/marker_green.png',
        size: new google.maps.Size(20, 32),
        labelOrigin: new google.maps.Point(10, 38)
    };
    if (a && a.icon) {
        d = a.icon;
    } else {
        if (a && a.iconType == "IMAGE") {
            var f = a.image[c];
            var g, offy;
            if (f) {
                if (typeof f.file == "undefined") {
                    return e
                }
                if (typeof f.file.offX == "undefined" && typeof f.file.offX == "undefined") {
                    g = f.file.width / 2;
                    offy = f.file.height / 2
                }
                var h;
                var i;
                if (f.file.direction) {
                    if (f.file.axis == "Y") {
                        i = new google.maps.Point(f.x, f.file.height * b)
                    } else if (f.file.axis == "X") {
                        i = new google.maps.Point(f.file.width * b, f.y)
                    } else {
                        i = new google.maps.Point(f.x, f.file.height * b)
                    }
                } else {
                    i = new google.maps.Point(0, 0)
                }
                d = {
                    url: f.file.url,
                    scaledSize: new google.maps.Size(f.file.width, f.file.height),
                    origin: i,
                    anchor: new google.maps.Point(g, offy),
                    labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20)
                }
            } else {
                d = e
            }
        } else if (a && a.iconType == "SYMBOL") {
            var j = a.image[c];
            var k = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: "#FEEC22",
                fillOpacity: 0.8,
                strokeColor: "#EF22CC",
                strokeWeight: 2
            };
            d = $.extend(true, {}, k, j);
            d.rotation = b
        } else if (a && a.iconType == "PNG") {
            var l = a.image[c].largeFile.url || 'statics/icons/ship/ship_large.png';
            var m = a.image[c].mediumFile.url || 'statics/icons/ship/ship_medium.png';
            var n = a.image[c].smallFile.url || 'statics/icons/ship/ship_small.png';
            var o = b.heading != null ? Math.floor(b.heading / 10) : b.cog != null && b.cog != '3600' ? Math.floor(b.cog / 10) : 0;
   
            var d;
            var p = b.ship_type;
            var q = (p - 1) < 8 ? (p - 1) : 7;
            if (b.length <= 45) {
                if (b.sog == 0) {
                    d = {
                        url: n,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * 36),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                } else {
                    d = {
                        url: n,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * o),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                }
            } else if (b.length <= 159) {
                if (b.sog == 0) {
                    d = {
                        url: m,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * 36),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                } else {
                    d = {
                        url: m,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * o),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                }
            } else {
                if (b.sog == 0) {
                    d = {
                        url: l,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * 36),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                } else {
                    d = {
                        url: l,
                        size: new google.maps.Size(24, 24),
                        origin: new google.maps.Point(24 * q, 24 * o),
                        anchor: new google.maps.Point(12, 12),
                        labelOrigin: new google.maps.Point(a.label.labelOffX || 0, a.label.labelOffY || 20),
                    }
                }
            }
            return d
        } else if(a && a.iconType == "SVG") {
            var d;
            var o = b.heading != null ? Math.floor(b.heading / 10) : b.cog != null && b.cog != '3600' ? Math.floor(b.cog / 10) : 0;
            d = a.images.ship[b.ship_type].icon;
            d.size = new google.maps.Point(12, 20),
            d.anchor = new google.maps.Point(7, 0),
            d.rotation = o*9;
            return d
        } else {
            d = e;
        }
    }
    if (d == undefined || d == null) {
        d = e
    }
    return d
};
Marker.prototype.isMarker = function(a, b) {
    var c = this.getMarkers(a);
    var d = null;
    if (c) {
        d = c[b]
    }
    if (d) {
        return true
    } else {
        return false
    }
};
Marker.prototype.getMarkers = function(a) {
    var b = null;
    if (a.features) {
        b = a.features
    }
    return b
};
Marker.prototype.getMarker = function(a, b) {
    var c = this.getMarkers(a);
    var d = null;
    if (c) {
        d = c[b]
    }
    return d
};
Marker.prototype.run = function(d) {
    var e = this;
    var f = this.getMarkers(d);
    var g = true;
    var h = true;
    var j = d.visible;
    var k = d.option.labelVisible;
    if (j == undefined || j == null) {
        g = true
    } else {
        g = j
    }
    if (k == undefined || k == null) {
        h = true
    } else {
        h = k
    }
    var i = 0;
    $.each(f, function(a, b) {
        var c = false;
        if (b.isFilter == undefined || b.isFilter == null) {
            c = false
        } else {
            c = b.isFilter
        }
        if (!c) {
            if (b.getMap() == null) {
                b.setMap(e.map)
            }
        } else {
            if (b.getMap() != null) {
                b.setMap(null)
            }
        }
        if (b.mapLabel) {
            if (e.getLabelVisible(b, h)) {
                b.setLabel(b.mapLabel)
            } else {
                b.setLabel(null)
            }
        }
        b.setVisible(g);
        i++
    })
};
Marker.prototype.remove = function(c) {
    var d = this;
    var e = this.getMarkers(c);
    $.each(e, function(a, b) {
        if (b.mapLabel) {
            b.setMap(null);
            delete b["mapLabel"]
        }
        b.setMap(null);
        delete e[a]
    })
};

function Line(a) {
    this.map = a
};
Line.prototype.createPath = function(f, g, h) {
    var i = this;
    var j = this.getLines(f);
    var k = [];
    var l = [];
    var m = 0;
    var n = g.features;
    $.each(n, function(c, d) {
        if (d && d.geometry) {
            k = [];
            $.each(d.geometry.coordinates, function(a, b) {
                k.push(new google.maps.LatLng(b[1], b[0]))
            });
            var e = i.getLineOption(h.lines[c], d.properties, k);
            if (j[e.id]) {
                j[e.id].setMap(null);
                delete j[e.id]
            }
            j[e.id] = new google.maps.Polyline(e);
            $.each(e.event, function(a, b) {
                j[e.id].addListener(a, b)
            })
        }
    });
    return j
};
Line.prototype.getLineOption = function(a, b, c) {
    var d = {
        layerId: "defaultLayer",
        groupId: "defaultGroup",
        id: "default",
        latNm: 'lat',
        lngNm: 'lng',
        strokeColor: '#FF0000',
        strokeOpacity: 0.7,
        strokeWeight: 2,
        zIndex: 2,
        visible: true,
        geodesic: true,
        icons: [{
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
            },
            offset: '100%',
            repeat: '40px'
        }],
        path: c,
        data: b,
        callback: null
    };
    var e = $.extend(true, {}, d, a);
    return e
};
Line.prototype.run = function(f) {
    var g = this;
    var h = this.getLines(f);
    var i = new google.maps.LatLngBounds();
    var j = true;
    var k = f.visible;
    if (k == undefined || k == null) {
        j = true
    } else {
        j = k
    }
    $.each(h, function(c, d) {
        d.setVisible(k);
        d.setMap(g.map);
        var e = d.getPath().getArray();
        $.each(e, function(a, b) {
            i.extend(b)
        })
    });
    if (h[1] != undefined) {
        g.map.fitBounds(i)
    } else {
        g.map.setZoom(3);
        g.map.setCenter({
            lat: -34.397,
            lng: 150.644
        })
    }
};
Line.prototype.getLines = function(a) {
    var b = null;
    if (a.features) {
        b = a.features
    }
    return b
};
Line.prototype.getLine = function(a, b) {
    var c = this.getLines(a);
    var d = null;
    if (c) {
        d = c[b]
    }
    return d
};
Line.prototype.remove = function(c) {
    var d = this;
    var e = this.getLines(c);
    $.each(e, function(a, b) {
        b.setMap(null);
        delete e[a]
    })
};

function Circle(a) {
    this.map = a
};
Circle.prototype.createCircle = function(c, d) {
    var e = c[d.latNm];
    var f = c[d.lngNm];
    var g = new google.maps.LatLng(e, f);
    var h = c[d.id];
    var i = d.zIndex;
    var j = c[d.radiusId];
    var k = new google.maps.Circle({
        fillColor: d.fillColor,
        fillOpacity: d.fillOpacity,
        strokeColor: d.strokeColor,
        strokeOpacity: d.strokeOpacity,
        strokeWeight: d.strokeWeight,
        center: g,
        id: h,
        data: c
    });
    if (j != undefined && j != null) {
        k.setRadius(j)
    }
    if (d.useTootltip) {
        if (typeof d.tooltip == "fucntion") {
            k.setTitle(d.tooltip)
        } else if (typeof d.tooltip == "string") {
            k.setTitle(c[d.tooltip])
        }
    }
    if (i) {
        marker.setZIndex(i)
    }
    $.each(d.event, function(a, b) {
        k.addListener(a, b)
    });
    return k
};
Circle.prototype.createCircles = function(e, f, g) {
    var h = this;
    var i = this.getCircleOption(g);
    var j = {};
    $.each(f, function(a, b) {
        var c = b[g.id];
        var d = h.createCircle(b, i);
        j[c] = d;
        marker.setVisible(i.layerVisible);
        d.setMap(this.map)
    });
    e.option = i;
    return j
};
Circle.prototype.getCircleOption = function(a) {
    var b = {
        layerId: 'defaultLayer',
        groupId: 'defaultGroup',
        latNm: 'lat',
        lngNm: 'lng',
        id: 'id',
        radiusId: 'radius',
        layerVisible: true,
        tooltip: null,
        zIndex: null,
        fillColor: "#ac725e",
        fillOpacity: 0.5,
        strokeColor: "#ac725e",
        strokeOpacity: 1,
        strokeWeight: 1,
        event: null
    };
    var c = $.extend(true, {}, b, a);
    return c
};
Circle.prototype.getCircles = function(a) {
    var b = null;
    if (a.features) {
        b = a.features
    }
    return b
};
Circle.prototype.getCircle = function(a) {
    var b = this.getCircles(a);
    var c = null;
    if (b) {
        c = b[mid]
    }
    return c
};
Circle.prototype.run = function(c) {
    var d = this;
    var e = this.getCircles(c);
    var f = c.option.layerVisible;
    $.each(e, function(a, b) {
        marker.setVisible(f)
    })
};
Circle.prototype.remove = function(c) {
    var d = this;
    var e = this.getCircles(c);
    $.each(e, function(a, b) {
        b.setMap(null);
        delete e[a]
    })
};

function DrawLayer(a) {
    this.map = a;
    this.overlay = null
};
DrawLayer.prototype.createDrawLayer = function(a, b) {
    var c = this.getOption(b);
    a.darwManager = new google.maps.drawing.DrawingManager(c);
    a.darwManager.setMap(this.map);
    a.option = c;
    return a
};
DrawLayer.prototype.getOption = function(a) {
    var b = {
        circleOptions: {
            draggable: true,
            editable: true,
            fillColor: "#ac725e",
            fillOpacity: 0.5,
            strokeColor: "#ac725e",
            strokeOpacity: 1,
            strokeWeight: 1
        },
        drawingControl: false,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'polyline', 'rectangle', 'circle', 'polygon']
        },
        markerOptions: {
            draggable: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#ac725e",
                fillOpacity: 0.5,
                strokeColor: "#ac725e",
                strokeOpacity: 1,
                strokeWeight: 1
            }
        },
        polygonOptions: {
            draggable: true,
            editable: true,
            fillColor: "#ac725e",
            fillOpacity: 0.5,
            strokeColor: "#ac725e",
            strokeOpacity: 1,
            strokeWeight: 1,
            geodesic: false
        },
        polylineOptions: {
            draggable: true,
            editable: true,
            fillColor: "#ac725e",
            fillOpacity: 0.5,
            strokeColor: "#ac725e",
            strokeOpacity: 1,
            strokeWeight: 1,
            geodesic: false
        },
        rectangleOptions: {
            draggable: true,
            editable: true,
            fillColor: "#ac725e",
            fillOpacity: 0.5,
            strokeColor: "#ac725e",
            strokeOpacity: 1,
            strokeWeight: 1
        }
    };
    b = $.extend(true, {}, b, a);
    return b
};
DrawLayer.prototype.convertWKT = function(c) {
    var d = "";
    var e = c.overlay.overlay;
    var f = c.overlay.type;
    if (f == google.maps.drawing.OverlayType.POLYGON) {
        var g = e.getPath().getArray();
        g.push(g[0]);
        d = "POLYGON((";
        $.each(g, function(a, b) {
            if (a == 0) {
                d += b.lng() + " " + b.lat()
            } else {
                d += "," + b.lng() + " " + b.lat()
            }
        });
        d += "))"
    } else if (f == google.maps.drawing.OverlayType.RECTANGLE) {
        var h = e.getBounds().getNorthEast();
        var i = e.getBounds().getSouthWest();
        d = "POLYGON((";
        d += i.lng() + " " + i.lat();
        d += "," + h.lng() + " " + i.lat();
        d += "," + h.lng() + " " + h.lat();
        d += "," + i.lng() + " " + h.lat();
        d += "," + i.lng() + " " + i.lat();
        d += "))"
    } else if (f == google.maps.drawing.OverlayType.CIRCLE) {
        var j = e.getCenter();
        d = "POINT(";
        d += j.lng() + " " + j.lat();
        d += ")"
    } else if (f == google.maps.drawing.OverlayType.POLYLINE) {
        var k = e.getPath().getArray();
        d = "LINESTRING(";
        $.each(k, function(a, b) {
            if (a == 0) {
                d += b.lng() + " " + b.lat()
            } else {
                d += "," + b.lng() + " " + b.lat()
            }
        });
        d += ")"
    }
    return d
};

function Distance(a, b) {
    this.map = a;
    this.resource = null;
    this.layer = null;
    this.lineStyle = {
        fillColor: "#FF0000",
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 2
    };
    this.labelStyle = {
        icon: {}
    };
    this.label = {
        color: "#EA1100",
        fontWeight: "bold",
        fontSize: "14px",
        text: 0
    };
    this.syboleIcon = {
        fillColor: "#FF0000",
        fillOpacity: 0.5,
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        labelOrigin: new google.maps.Point(12, 0)
    };
    this.imageIcon = {
        size: new google.maps.Size(24, 24),
        anchor: new google.maps.Point(6, 24)
    }
};
Distance.prototype.createDistance = function(f) {
    var g = this;
    this.resource = f;
    this.createButtons();
    var h = this.resource.pointImageUrl;
    var i = this.resource.firstImageUrl;
    var j = this.resource.lastImageUrl;
    this.imageIcon.url = i;
    if (!this.layer) {
        this.layer = new google.maps.Data();
        this.layer.addListener("overlaycomplete", function(e) {})
    }
    this.layer.setStyle(function(a) {
        var b = a.getGeometry();
        if (b) {
            if (b.getType() == "LineString") {
                g.createLabels(b.getArray());
                return g.lineStyle
            } else {
                var c = false;
                if (a.getProperty("isFirst")) {
                    c = a.getProperty("isFirst")
                }
                var d = $.extend({}, g.labelStyle);
                if (c) {
                    d.icon = g.imageIcon
                } else {
                    var e = a.getProperty("distance");
                    if (e < 1000) {
                        e = e.toFixed(2) + "m"
                    } else {
                        e = e / 1000;
                        e = e.toFixed(2) + "Km"
                    }
                    d.icon = g.syboleIcon;
                    d.label = g.label;
                    d.label.text = e
                }
                return d
            }
        }
        return g.lineStyle
    });
    return this.layer
};
Distance.prototype.createLabels = function(d) {
    var e = this;
    var f;
    var g = 0;
    $.each(d, function(a, b) {
        var c = new google.maps.Data.Feature();
        if (a > 0) {
            g += google.maps.geometry.spherical.computeDistanceBetween(f, b);
            c.setProperty("distance", g)
        } else {
            c.setProperty("isFirst", true)
        }
        c.setGeometry(b);
        e.layer.add(c);
        f = b
    })
};
Distance.prototype.createButtons = function() {
    var a = this;
    var b = document.createElement('div');
    b.style.clear = 'both';
    b.index = 1;
    b.style['padding-top'] = '10px';
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(b);
    var c = $(document.createElement('p'));
    $(b).append(c);
    var d = $(document.createElement('button'));
    d.addClass('btn');
    d.addClass('btn-white');
    d.addClass('btn-sm');
    d.addClass('btn-primary');
    c.append(d);
    var e = $(document.createElement('i'));
    e.addClass('fa cus-icon-Ruler');
    e.css('width', "13px");
    e.css('height', "13px");
    d.append(e);
    var f = $(document.createElement('button'));
    f.addClass('btn');
    f.addClass('btn-white');
    f.addClass('btn-sm');
    f.addClass('btn-primary');
    c.append(f);
    var g = $(document.createElement('i'));
    g.addClass('ace-icon');
    g.addClass('glyphicon');
    g.addClass('glyphicon-trash');
    f.append(g);
    d.click(function() {
        a.stop();
        a.start()
    });
    f.click(function() {
        a.stop()
    })
};
Distance.prototype.start = function() {
    this.layer.setDrawingMode("LineString");
    this.layer.setMap(this.map)
};
Distance.prototype.stop = function() {
    this.layer.setDrawingMode(null);
    this.layer.setMap(null);
    this.clear()
};
Distance.prototype.clear = function() {
    var b = this;
    if (b.layer) {
        b.layer.forEach(function(a) {
            b.layer.remove(a)
        })
    }
};

function MarkerClusterer(b, c, d) {
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = b;
    this.markers_ = [];
    this.clusters_ = [];
    this.sizes = [53, 56, 66, 78, 90];
    this.styles_ = [];
    this.ready_ = false;
    var e = d || {};
    this.gridSize_ = e['gridSize'] || 60;
    this.minClusterSize_ = e['minimumClusterSize'] || 2;
    this.maxZoom_ = e['maxZoom'] || null;
    this.styles_ = e['styles'] || [];
    this.imagePath_ = e['imagePath'] || this.MARKER_CLUSTER_IMAGE_PATH_;
    this.imageExtension_ = e['imageExtension'] || this.MARKER_CLUSTER_IMAGE_EXTENSION_;
    this.zoomOnClick_ = true;
    if (e['zoomOnClick'] != undefined) {
        this.zoomOnClick_ = e['zoomOnClick']
    }
    this.averageCenter_ = false;
    if (e['averageCenter'] != undefined) {
        this.averageCenter_ = e['averageCenter']
    }
    this.setupStyles_();
    this.setMap(b);
    this.prevZoom_ = this.map_.getZoom();
    var f = this;
    google.maps.event.addListener(this.map_, 'zoom_changed', function() {
        var a = f.map_.getZoom();
        if (f.prevZoom_ != a) {
            f.prevZoom_ = a;
            f.resetViewport()
        }
    });
    google.maps.event.addListener(this.map_, 'idle', function() {
        f.redraw()
    });
    if (c && c.length) {
        this.addMarkers(c, false)
    }
};
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';
MarkerClusterer.prototype.extend = function(c, d) {
    return (function(a) {
        for (var b in a.prototype) {
            this.prototype[b] = a.prototype[b]
        }
        return this
    }).apply(c, [d])
};
MarkerClusterer.prototype.onAdd = function() {
    this.setReady_(true)
};
MarkerClusterer.prototype.draw = function() {};
MarkerClusterer.prototype.setupStyles_ = function() {
    if (this.styles_.length) {
        return
    }
    for (var i = 0, size; size = this.sizes[i]; i++) {
        this.styles_.push({
            url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
            height: size,
            width: size
        })
    }
};
MarkerClusterer.prototype.fitMapToMarkers = function() {
    var a = this.getMarkers();
    var b = new google.maps.LatLngBounds();
    for (var i = 0, marker; marker = a[i]; i++) {
        b.extend(marker.getPosition())
    }
    this.map_.fitBounds(b)
};
MarkerClusterer.prototype.setStyles = function(a) {
    this.styles_ = a
};
MarkerClusterer.prototype.getStyles = function() {
    return this.styles_
};
MarkerClusterer.prototype.isZoomOnClick = function() {
    return this.zoomOnClick_
};
MarkerClusterer.prototype.isAverageCenter = function() {
    return this.averageCenter_
};
MarkerClusterer.prototype.getMarkers = function() {
    return this.markers_
};
MarkerClusterer.prototype.getTotalMarkers = function() {
    return this.markers_.length
};
MarkerClusterer.prototype.setMaxZoom = function(a) {
    this.maxZoom_ = a
};
MarkerClusterer.prototype.getMaxZoom = function() {
    return this.maxZoom_
};
MarkerClusterer.prototype.calculator_ = function(a, b) {
    var c = 0;
    var d = a.length;
    var e = d;
    c = Math.ceil(e / 20);
    c = Math.min(c, b);
    return {
        text: d,
        index: c
    }
};
MarkerClusterer.prototype.setCalculator = function(a) {
    this.calculator_ = a
};
MarkerClusterer.prototype.getCalculator = function() {
    return this.calculator_
};
MarkerClusterer.prototype.addMarkers = function(a, b) {
    for (var i = 0, marker; marker = a[i]; i++) {
        this.pushMarkerTo_(marker)
    }
    if (!b) {
        this.redraw()
    }
};
MarkerClusterer.prototype.pushMarkerTo_ = function(a) {
    a.isAdded = false;
    if (a['draggable']) {
        var b = this;
        google.maps.event.addListener(a, 'dragend', function() {
            a.isAdded = false;
            b.repaint()
        })
    }
    this.markers_.push(a)
};
MarkerClusterer.prototype.addMarker = function(a, b) {
    this.pushMarkerTo_(a);
    if (!b) {
        this.redraw()
    }
};
MarkerClusterer.prototype.removeMarker_ = function(a) {
    var b = -1;
    if (this.markers_.indexOf) {
        b = this.markers_.indexOf(a)
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == a) {
                b = i;
                break
            }
        }
    }
    if (b == -1) {
        return false
    }
    a.setMap(null);
    this.markers_.splice(b, 1);
    return true
};
MarkerClusterer.prototype.removeMarker = function(a, b) {
    var c = this.removeMarker_(a);
    if (!b && c) {
        this.resetViewport();
        this.redraw();
        return true
    } else {
        return false
    }
};
MarkerClusterer.prototype.removeMarkers = function(a, b) {
    var c = false;
    for (var i = 0, marker; marker = a[i]; i++) {
        var r = this.removeMarker_(marker);
        c = c || r
    }
    if (!b && c) {
        this.resetViewport();
        this.redraw();
        return true
    }
};
MarkerClusterer.prototype.setReady_ = function(a) {
    if (!this.ready_) {
        this.ready_ = a;
        this.createClusters_()
    }
};
MarkerClusterer.prototype.getTotalClusters = function() {
    return this.clusters_.length
};
MarkerClusterer.prototype.getMap = function() {
    return this.map_
};
MarkerClusterer.prototype.setMap = function(a) {
    this.map_ = a
};
MarkerClusterer.prototype.getGridSize = function() {
    return this.gridSize_
};
MarkerClusterer.prototype.setGridSize = function(a) {
    this.gridSize_ = a
};
MarkerClusterer.prototype.getMinClusterSize = function() {
    return this.minClusterSize_
};
MarkerClusterer.prototype.setMinClusterSize = function(a) {
    this.minClusterSize_ = a
};
MarkerClusterer.prototype.getExtendedBounds = function(a) {
    var b = this.getProjection();
    var c = new google.maps.LatLng(a.getNorthEast().lat(), a.getNorthEast().lng());
    var d = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng());
    var e = b.fromLatLngToDivPixel(c);
    e.x += this.gridSize_;
    e.y -= this.gridSize_;
    var f = b.fromLatLngToDivPixel(d);
    f.x -= this.gridSize_;
    f.y += this.gridSize_;
    var g = b.fromDivPixelToLatLng(e);
    var h = b.fromDivPixelToLatLng(f);
    a.extend(g);
    a.extend(h);
    return a
};
MarkerClusterer.prototype.isMarkerInBounds_ = function(a, b) {
    return b.contains(a.getPosition())
};
MarkerClusterer.prototype.clearMarkers = function() {
    this.resetViewport(true);
    this.markers_ = []
};
MarkerClusterer.prototype.resetViewport = function(a) {
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        cluster.remove()
    }
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        marker.isAdded = false;
        if (a) {
            marker.setMap(null)
        }
    }
    this.clusters_ = []
};
MarkerClusterer.prototype.repaint = function() {
    var a = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();
    window.setTimeout(function() {
        for (var i = 0, cluster; cluster = a[i]; i++) {
            cluster.remove()
        }
    }, 0)
};
MarkerClusterer.prototype.redraw = function() {
    this.createClusters_()
};
MarkerClusterer.prototype.distanceBetweenPoints_ = function(b, e) {
    if (!b || !e) {
        return 0
    }
    var R = 6371;
    var f = (e.lat() - b.lat()) * Math.PI / 180;
    var g = (e.lng() - b.lng()) * Math.PI / 180;
    var a = Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(b.lat() * Math.PI / 180) * Math.cos(e.lat() * Math.PI / 180) * Math.sin(g / 2) * Math.sin(g / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d
};
MarkerClusterer.prototype.addToClosestCluster_ = function(a) {
    var b = 40000;
    var c = null;
    var e = a.getPosition();
    for (var i = 0, g; g = this.clusters_[i]; i++) {
        var f = g.getCenter();
        if (f) {
            var d = this.distanceBetweenPoints_(f, a.getPosition());
            if (d < b) {
                b = d;
                c = g
            }
        }
    }
    if (c && c.isMarkerInClusterBounds(a)) {
        c.addMarker(a)
    } else {
        var g = new Cluster(this);
        g.addMarker(a);
        this.clusters_.push(g)
    }
};
MarkerClusterer.prototype.createClusters_ = function() {
    if (!this.ready_) {
        return
    }
    var a = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast());
    var b = this.getExtendedBounds(a);
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        if (!marker.isAdded && this.isMarkerInBounds_(marker, b)) {
            this.addToClosestCluster_(marker)
        }
    }
};

function Cluster(a) {
    this.markerClusterer_ = a;
    this.map_ = a.getMap();
    this.gridSize_ = a.getGridSize();
    this.minClusterSize_ = a.getMinClusterSize();
    this.averageCenter_ = a.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, a.getStyles(), a.getGridSize())
};
Cluster.prototype.isMarkerAlreadyAdded = function(a) {
    if (this.markers_.indexOf) {
        return this.markers_.indexOf(a) != -1
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == a) {
                return true
            }
        }
    }
    return false
};
Cluster.prototype.addMarker = function(a) {
    if (this.isMarkerAlreadyAdded(a)) {
        return false
    }
    if (!this.center_) {
        this.center_ = a.getPosition();
        this.calculateBounds_()
    } else {
        if (this.averageCenter_) {
            var l = this.markers_.length + 1;
            var b = (this.center_.lat() * (l - 1) + a.getPosition().lat()) / l;
            var c = (this.center_.lng() * (l - 1) + a.getPosition().lng()) / l;
            this.center_ = new google.maps.LatLng(b, c);
            this.calculateBounds_()
        }
    }
    a.isAdded = true;
    this.markers_.push(a);
    var d = this.markers_.length;
    if (d < this.minClusterSize_ && a.getMap() != this.map_) {
        a.setMap(this.map_)
    }
    if (d == this.minClusterSize_) {
        for (var i = 0; i < d; i++) {
            this.markers_[i].setMap(null)
        }
    }
    if (d >= this.minClusterSize_) {
        a.setMap(null)
    }
    this.updateIcon();
    return true
};
Cluster.prototype.getMarkerClusterer = function() {
    return this.markerClusterer_
};
Cluster.prototype.getBounds = function() {
    var a = new google.maps.LatLngBounds(this.center_, this.center_);
    var b = this.getMarkers();
    for (var i = 0, marker; marker = b[i]; i++) {
        a.extend(marker.getPosition())
    }
    return a
};
Cluster.prototype.remove = function() {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_
};
Cluster.prototype.getSize = function() {
    return this.markers_.length
};
Cluster.prototype.getMarkers = function() {
    return this.markers_
};
Cluster.prototype.getCenter = function() {
    return this.center_
};
Cluster.prototype.calculateBounds_ = function() {
    var a = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(a)
};
Cluster.prototype.isMarkerInClusterBounds = function(a) {
    return this.bounds_.contains(a.getPosition())
};
Cluster.prototype.getMap = function() {
    return this.map_
};
Cluster.prototype.updateIcon = function() {
    var a = this.map_.getZoom();
    var b = this.markerClusterer_.getMaxZoom();
    if (b && a > b) {
        for (var i = 0, marker; marker = this.markers_[i]; i++) {
            marker.setMap(this.map_)
        }
        return
    }
    if (this.markers_.length < this.minClusterSize_) {
        this.clusterIcon_.hide();
        return
    }
    var c = this.markerClusterer_.getStyles().length;
    var d = this.markerClusterer_.getCalculator()(this.markers_, c);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(d);
    this.clusterIcon_.show()
};

function ClusterIcon(a, b, c) {
    a.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.styles_ = b;
    this.padding_ = c || 0;
    this.cluster_ = a;
    this.center_ = null;
    this.map_ = a.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;
    this.setMap(this.map_)
};
ClusterIcon.prototype.triggerClusterClick = function(a) {
    var b = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(b, 'clusterclick', this.cluster_, a);
    if (b.isZoomOnClick()) {
        this.map_.fitBounds(this.cluster_.getBounds())
    }
};
ClusterIcon.prototype.onAdd = function() {
    this.div_ = document.createElement('DIV');
    if (this.visible_) {
        var b = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(b);
        this.div_.innerHTML = this.sums_.text
    }
    var c = this.getPanes();
    c.overlayMouseTarget.appendChild(this.div_);
    var d = this;
    var e = false;
    google.maps.event.addDomListener(this.div_, 'click', function(a) {
        if (!e) {
            d.triggerClusterClick(a)
        }
    });
    google.maps.event.addDomListener(this.div_, 'mousedown', function() {
        e = false
    });
    google.maps.event.addDomListener(this.div_, 'mousemove', function() {
        e = true
    })
};
ClusterIcon.prototype.getPosFromLatLng_ = function(a) {
    var b = this.getProjection().fromLatLngToDivPixel(a);
    if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
        b.x -= this.iconAnchor_[0];
        b.y -= this.iconAnchor_[1]
    } else {
        b.x -= parseInt(this.width_ / 2, 10);
        b.y -= parseInt(this.height_ / 2, 10)
    }
    return b
};
ClusterIcon.prototype.draw = function() {
    if (this.visible_) {
        var a = this.getPosFromLatLng_(this.center_);
        
        this.div_.style.top = a.y + 'px';
        this.div_.style.left = a.x + 'px'
    }
};
ClusterIcon.prototype.hide = function() {
    if (this.div_) {
        this.div_.style.display = 'none'
    }
    this.visible_ = false
};
ClusterIcon.prototype.show = function() {
    if (this.div_) {
        var a = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(a);
        this.div_.style.display = ''
    }
    this.visible_ = true
};
ClusterIcon.prototype.remove = function() {
    this.setMap(null)
};
ClusterIcon.prototype.onRemove = function() {
    if (this.div_ && this.div_.parentNode) {
        this.hide();
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null
    }
};
ClusterIcon.prototype.setSums = function(a) {
    this.sums_ = a;
    this.text_ = a.text;
    this.index_ = a.index;
    if (this.div_) {
        this.div_.innerHTML = a.text
    }
    this.useStyle()
};
ClusterIcon.prototype.useStyle = function() {
    var a = Math.max(0, this.sums_.index - 1);
    a = Math.min(this.styles_.length - 1, a);
    var b = this.styles_[a];
    this.url_ = b['url'];
    this.height_ = b['height'];
    this.width_ = b['width'];
    this.textColor_ = b['textColor'];
    this.anchor_ = b['anchor'];
    console.log(this.anchor)
    this.textSize_ = b['textSize'];
    this.backgroundPosition_ = b['backgroundPosition'];
    this.iconAnchor_ = b['iconAnchor']
};
ClusterIcon.prototype.setCenter = function(a) {
    this.center_ = a
};
ClusterIcon.prototype.createCss = function(a) {
    var b = [];
    b.push('background-image:url(' + this.url_ + ');');
    var c = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
    b.push('background-position:' + c + ';');
    if (typeof this.anchor_ === 'object') {
        if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 && this.anchor_[0] < this.height_) {
            b.push('height:' + (this.height_ - this.anchor_[0]) + 'px; padding-top:' + this.anchor_[0] + 'px;')
        } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 && -this.anchor_[0] < this.height_) {
            b.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) + 'px;')
        } else {
            b.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px;')
        }
        if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 && this.anchor_[1] < this.width_) {
            b.push('width:' + (this.width_ - this.anchor_[1]) + 'px; padding-left:' + this.anchor_[1] + 'px;')
        } else {
            b.push('width:' + this.width_ + 'px; text-align:center;')
        }
    } else {
        b.push('height:' + this.height_ + 'px; line-height:' + this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;')
    }
    var d = this.textColor_ ? this.textColor_ : 'black';
    var e = this.textSize_ ? this.textSize_ : 11;
    
    b.push('cursor:pointer; top:' + a.y + 'px; left:' + a.x + 'px; color:' + d + '; position:absolute; font-size:' + e + 'px; font-family:Arial,sans-serif; font-weight:bold');
    return b.join('')
};
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] = MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] = MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] = MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] = MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] = MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] = MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] = MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] = MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] = MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] = MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] = MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] = MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] = MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] = MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;
Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;
ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

function ImageOverlay(m) {
    this.map = m;
    this.imgOverlay = function(e) {
        var f = {
            opacity: 0,
            name: e.name,
            maxZoom: 18,
            tileSize: new google.maps.Size(256, 256),
            getTileUrl: function(a, b) {
                var c = 1 << b;
                var x = a.x % c;
                if (x < 0) {
                    x = c + x
                }
                var d = e.token;
                return e.url + b + "/" + x + "/" + a.y + "." + e.extension + "?access_token=" + d
            },
        };
        var g = $.extend({}, f, e);
        var h = new google.maps.ImageMapType(g);
        return h
    };
    this.wmsOverlay = function(i) {
        var j = {
            version: "1.1.0",
            layers: "",
            opacity: 0.85,
            getTileUrl: function(a, b) {
                var s = Math.pow(2, b);
                var c = 256;
                var d = 256;
                var e = m.getProjection().fromPointToLatLng(new google.maps.Point(a.x * c / s, (a.y + 1) * d / s));
                var f = m.getProjection().fromPointToLatLng(new google.maps.Point((a.x + 1) * c / s, a.y * d / s));
                var g = e.lng() + "," + e.lat() + "," + f.lng() + "," + f.lat();
                var h = this.url;
                h += "?service=WMS";
                h += "&version=" + this.version;
                h += "&request=GetMap";
                h += "&layers=" + this.layers;
                h += "&styles=";
                h += "&format=image/png";
                h += "&TRANSPARENT=TRUE";
                h += "&srs=EPSG:4326";
                h += "&bbox=" + g;
                h += "&width=450";
                h += "&height=350";
                return h
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true
        };
        var k = $.extend({}, j, i);
        var l = new google.maps.ImageMapType(k);
        return l
    };
    this.superMapOverlay = function(a) {};
    this.remove = function(a) {}
};

function DataLayer(a) {
    this.map = a
};
DataLayer.prototype.createDatalayer = function(d, e) {
    var f = this.getMarkerOption(e);
    var g = this;
    if (!d.layer) {
        d.layer = new google.maps.Data();
        $.each(f.event, function(a, b) {
            d.layer.addListener(a, b)
        });
        if (f.useZoomLabel && !d.zoomListener) {
            d.zoomListener = g.map.addListener('zoom_changed', function() {
                if (f.labelVisible) {
                    d.layer.forEach(function(a) {
                        var b = "";
                        if (g.getLabelVisible(a, f.labelVisible)) {
                            b = a.getProperty("labelText");
                            var c = a.getProperty("mapLabel");
                            c.text = b;
                            d.layer.overrideStyle(a, {
                                label: c
                            })
                        } else {
                            d.layer.overrideStyle(a, {
                                label: undefined
                            })
                        }
                    })
                }
            })
        }
    }
    if (f.visible) {
        if (d.layer.getMap() == null) {
            d.layer.setMap(this.map)
        }
    } else {
        d.layer.setMap(null)
    }
    d.option = f;
    return d
};
DataLayer.prototype.addGeoJson = function(f, g, h) {
    var i = f.option;
    var j = this;
    var k = new google.maps.LatLngBounds();
    if (i.styleType == "option") {
        if (i.setStyle) {
            f.layer.setStyle(function(a) {
                return j.getStyle(a, i)
            })
        }
    } else if (i.styleType == "function") {
        if (i.setStyle) {
            f.layer.setStyle(function(a) {
                return i.setStyle(a, j)
            })
        }
    } else {
        if (i.setStyle) {
            f.layer.setStyle(i.setStyle)
        }
    }
    f.layer.addGeoJson(g);
    if (i.setFitBounds) {
        $.each(g.geometry.coordinates, function(d, e) {
            $.each(e, function(a, b) {
                var c = new google.maps.LatLng(b[1], b[0]);
                k.extend(c)
            })
        });
        j.map.fitBounds(k)
    }
    return f.layer
};
DataLayer.prototype.getMarkerOption = function(a) {
    var b = {
        layerId: 'defaultLayer',
        groupId: 'defaultGroup',
        styleType: "style",
        setStyle: null,
        visible: true,
        labelVisible: false,
        setFitBounds: true,
        label: {
            labelExist: false,
            labelContent: 'id'
        },
        useZoomLabel: true,
        event: null
    };
    var c = $.extend(true, {}, b, a);
    return c
};
DataLayer.prototype.getLabelOption = function(a) {
    var b = {
        color: "#bb6b06",
        fontWeight: "bold",
        fontSize: "12px",
        minZoom: 2,
        maxZoom: 21
    };
    var c = $.extend(true, {}, b, a);
    return c
};
DataLayer.prototype.getStyle = function(a, b) {
    var c = b.label;
    var d = b.setStyle;
    var e = a.getProperty("option");
    var f = a.getProperty("data");
    var g = {};
    if (d.title) {
        g.title = f[b.title]
    }
    if (d.zIndex) {
        g.zIndex = d.zIndex
    }
    if (d.iconData) {
        var h = "";
        var i = 0;
        var j = 0;
        if (e.iconDataType) {
            h = e.iconDataType
        }
        if (e.heading) {
            i = e.heading
        }
        if (e.range) {
            j = e.range
        }
        var k = {
            url: '//maps.google.com/mapfiles/marker_green.png',
            size: new google.maps.Size(20, 32),
            labelOrigin: new google.maps.Point(10, 38)
        };
        var l = d.iconData[h];
        if (d.styleType == "icon") {
            var m, offy;
            if (typeof l.file == "undefined") {
                g.icon = k
            }
            if (typeof l.file.offX == "undefined" && typeof l.file.offX == "undefined") {
                m = l.file.width / 2;
                offy = l.file.height / 2
            }
            var n;
            var o;
            if (l.file.direction) {
                if (i >= 36) {
                    i = 0
                }
                if (l.file.axis == "Y") {
                    o = new google.maps.Point(l.x + (l.file.width * j), l.y + (l.file.height * i))
                } else if (l.file.axis == "X") {
                    o = new google.maps.Point(l.x + (l.file.width * i), l.y + (l.file.height * j))
                } else {
                    o = new google.maps.Point(l.x + (l.file.width * j), l.y + (l.file.height * i))
                }
            } else {
                o = new google.maps.Point(0, 0)
            }
            g.icon = {
                url: l.file.url,
                size: new google.maps.Size(l.file.width, l.file.height),
                origin: o,
                anchor: new google.maps.Point(m, offy),
                labelOrigin: new google.maps.Point(12, 30)
            };
            if (c) {
                var p = this.getLabelOption(c);
                if (p.labelExist) {
                    var q = "";
                    if (f[c.labelContent]) {
                        q = f[c.labelContent];
                        a.setProperty("labelText", q);
                        a.setProperty("mapLabel", p);
                        if (this.getLabelVisible(a, b.labelVisible)) {
                            p.text = q;
                            g.label = p
                        } else {
                            delete g.label
                        }
                    }
                } else {
                    delete g.label
                }
            }
        } else if (d.styleType == "symbol") {
            var r = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: "#FEEC22",
                fillOpacity: 0.8,
                strokeColor: "#EF22CC",
                strokeWeight: 2
            };
            g.icon = $.extend(true, {}, r, l);
            g.icon.rotation = i
        } else {
            g.icon = k
        }
        if (e.isFilter) {
            g.visible = false
        } else {
            g.visible = true
        }
    }
    return g
};
DataLayer.prototype.getLabelVisible = function(a, b) {
    if (b) {
        var c = a.getProperty("mapLabel");
        var d = c.minZoom || 0;
        var e = c.maxZoom || 22;
        if (d === undefined) {
            d = 0
        }
        if (e === undefined) {
            e = 22
        }
        var f = this.map;
        if (!f) {
            return true
        }
        var g = f.getZoom();
        if (g < d || g > e) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
};
DataLayer.prototype.getFeatureById = function(a, b) {
    var c = a.layer.getFeatureById(b);
    return c
};
DataLayer.prototype.convertWKT = function() {
    var c = "";
    if (mapOverlay.type == google.maps.drawing.OverlayType.POLYGON) {
        var d = mapOverlay.getPath().getArray();
        d.push(d[0]);
        c = "POLYGON((";
        $.each(d, function(a, b) {
            if (a == 0) {
                c += b.lng() + " " + b.lat()
            } else {
                c += "," + b.lng() + " " + b.lat()
            }
        });
        c += "))"
    } else if (mapOverlay.type == google.maps.drawing.OverlayType.RECTANGLE) {
        var e = mapOverlay.getBounds().getNorthEast();
        var f = mapOverlay.getBounds().getSouthWest();
        c = "POLYGON((";
        c += f.lng() + " " + f.lat();
        c += "," + e.lng() + " " + f.lat();
        c += "," + e.lng() + " " + e.lat();
        c += "," + f.lng() + " " + e.lat();
        c += "," + f.lng() + " " + f.lat();
        c += "))"
    } else if (mapOverlay.type == google.maps.drawing.OverlayType.CIRCLE) {
        var g = mapOverlay.getCenter();
        c = "POINT(";
        c += g.lng() + " " + g.lat();
        c += ")"
    } else if (mapOverlay.type == google.maps.drawing.OverlayType.POLYLINE) {
        var h = mapOverlay.getPath().getArray();
        c = "LINESTRING(";
        $.each(h, function(a, b) {
            if (a == 0) {
                c += b.lng() + " " + b.lat()
            } else {
                c += "," + b.lng() + " " + b.lat()
            }
        });
        c += ")"
    }
    return c
};
DataLayer.prototype.remove = function(b) {
    if (b.layer) {
        b.layer.forEach(function(a) {
            if (a.rectangle) {
                a.rectangle.setMap(null);
                delete b.layer.rectangle
            }
            if (a.circle) {
                a.circle.setMap(null);
                delete a.circle
            }
            b.layer.remove(a)
        })
    }
};