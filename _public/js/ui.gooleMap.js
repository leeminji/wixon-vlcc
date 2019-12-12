
var uiGooglMap = (function(){
    return {
        PORT_PATH : "M12,2 C8.13,2 5,5.13 5,9 C5,13.17 9.42,18.92 11.24,21.11 C11.64,21.59 12.37,21.59 12.77,21.11 C14.58,18.92 19,13.17 19,9 C19,5.13 15.87,2 12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 Z",
        SHIP_PATH : "M0.1,26.9L9.5,0l9.6,26.9C12.6,20.8,6.3,20.8,0.1,26.9",
        IMG_DIR : "/_public/images/map/",
        //구글맵 스타일
        googleMapStyle : [
            {elementType: 'geometry', stylers: [{color: '#232f3f'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#232f3f'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'administrative.country',
                "elementType": "geometry.stroke",
                stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
            },
            {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#141b24'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#304056'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#232f3f'}]
            }
        ],
        mapController : null,
        mapShipStyle : function(){
            var ship_path = this.SHIP_PATH;
            return{
                list : [
                    //On Sub / Fixed / Project                    
                    {
                        type : "ship_1",
                        icon: {
                            path: ship_path,
                            fillOpacity: 1,
                            fillColor : "#ffffff",
                            strokeColor: "#FFFFFF",
                        },         
                    },
                    //Laden
                    {
                        type : "ship_2",
                        icon: {
                            path: ship_path,
                            fillOpacity: 0,
                            strokeColor: "#FFFFFF",
                            strokeOpacity: 1,
                            strokeWeight : 2
                        }
                    },
                    //Open soon
                    {
                        type : "ship_3",
                        icon: {
                            path: ship_path,
                            fillOpacity: 1,
                            scale: 0.5,
                            fillColor : "#8fc800",
                            strokeColor: "#8fc800",
                        }
                    },
                    //Open (Handicaped)
                    {
                        type : "ship_4",
                        icon: {
                            path: ship_path,
                            fillOpacity: 0,
                            strokeColor: "#00a1bc",
                            strokeOpacity: 1,
                            strokeWeight : 2
                        }
                    },
                    //Drydock / Others
                    {
                        type : "ship_5",
                        icon: {
                            path: ship_path,
                            fillOpacity: 1,
                            fillColor : "#ff6d6d",
                            strokeColor: "#ff6d6d",
                        }
                    },
                    //open
                    {
                        type : "ship_6",
                        icon: {
                            path: ship_path,
                            fillOpacity: 1,
                            fillColor : "#006286",
                            strokeColor: "#006286",
                        }
                    },
                    //floating stroag
                    {
                        type : "ship_7",
                        icon: {
                            path: ship_path,
                            fillOpacity: 1,
                            fillColor : "#1f84ff",
                            strokeColor: "#1f84ff",
                        }
                    },
                    //open soon(handicapped)
                    {
                        type : "ship_8",
                        icon: {
                            path: ship_path,
                            fillOpacity: 0,
                            strokeColor: "#999a05",
                            strokeOpacity: 1,
                            strokeWeight : 2
                        }
                    },
                ]
            }
        },
        mapLineStyle : function(){
            var arrow_path = this.SHIP_PATH;
            return {
               list : [
                    //실선
                    {
                        type : "lineType_1",
                        strokeColor : "#007c8b",  //선 색
                        strokeOpacity: 1.0, //선 투명도
                        strokeWeight: 2, //선 넓이
                        icons : [
                            {
                                icon: {
                                    path: 'M 0,-.1 0,.1', //점선
                                    strokeOpacity: 0.5,
                                    scale: 2
                                },
                                offset: '0',
                                repeat: '8px' //반복되는 간격
                            }
                        ]
                    },
                    //점선
                    {
                        type : "lineType_2",
                        strokeColor : "#FFFFFF",
                        icons : [
                            {
                                icon: {
                                    path: 'M 0,-.1 0,.1',
                                    strokeOpacity: 0.5,
                                    scale: 2
                                },
                                offset: '0',
                                repeat: '8px'
                            }
                        ]
                    },
                    //점선 라인위에 화살표               
                    {
                        type : "lineType_3",
                        strokeColor : "#FFFFFF",
                        icons : [
                            {
                                icon: {
                                    path: 'M 0,-.1 0,.1',
                                    strokeOpacity: 0.5,
                                    scale: 2
                                },
                                offset: '0',
                                repeat: '8px'
                            },
                            {
                                icon: {
                                    path: arrow_path,
                                    scale: 0.4,
                                    fillOpacity: 1,
                                    strokeColor: "#FFFFFF",
                                    strokeOpacity: 0,
                                    strokeWeight : 2
                                },
                                offset: '0',
                                repeat: '120px'
                            } 
                        ]
                    },                 
                ]
            }
        },
        findLineType : function(_type){
            var find = this.mapLineStyle().list.filter(function(line){
                return line.type == _type;
            });
            return find.length == 0 ? null : find[0];
        },
        findShipType : function(_type){
            var find = this.mapShipStyle().list.filter(function(ship){
                return ship.type == _type;
            });
            return find.length == 0 ? null : find[0];
        },
        initGoogleMap : function(_mapId){
 
            var thisObj = this;
			var mapTypeIds=[
				google.maps.MapTypeId.ROADMAP ,
				google.maps.MapTypeId.SATELLITE ,
				google.maps.MapTypeId.TERRAIN ,
				google.maps.MapTypeId.HYBRID ,
			];
			var mapControllerOptions = {
				center : {
					lat : 0,
					lng : 127
				},
				styles: thisObj.googleMapStyle		
				,mapTypeControl : true
				,mapTypeControlOptions: {
					mapTypeIds: mapTypeIds,
					style : google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
					position : google.maps.ControlPosition.BOTTOM_LEFT
				}
                ,zoom : 2,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }                
				,streetViewControl : false
				,streetViewControlOptions:{
					on : google.maps.ControlPosition.BOTTOM_LEFT
				}
                ,fullscreenControl : false
                ,disableDefaultUI: true
			};
            this.mapController = new seavantage.map.Controller(_mapId, mapControllerOptions);
            this.mapController.map.addListener("dragstart", function(){
                thisObj.infoShipMarker().close();
            });

            //라인보이기
            this.chkDefaultLine(null, true);

            //배 마커
            this.chkShipMarker(null, true);

            //포트마커
            this.chkDefaultMarker(null, true);
        },
        menu : function(){
            var infoEl = $("#MapMenu");
            return{
                open : function(e){
                    this.close();
                    infoEl.addClass("active");
                },
                close : function(){
                    infoEl.removeClass("active");
                }
            }
        },
        state : function(){
            var infoEl = $("#MapState");
            return{
                open : function(e){
                    this.close();
                    infoEl.addClass("active");
                },
                close : function(){
                    infoEl.removeClass("active");
                }
            }
        },
        infoShipMarker : function(){
            var infoEl = $("#MapShipInfo");
            return{
                open : function(e){
                    this.close();
                    var diff = 25;
                    infoEl.css({
                        'marginTop' : -(infoEl.height()+diff)+"px",
                        'transform':'translate('+e.x+'px,'+e.y+'px)'
                    });
                    infoEl.addClass("active");
                },
                close : function(){
                    infoEl.attr('style', '');
                    infoEl.removeClass("active");
                }
            }
        },
        overShipMarker : function(){
            var infoEl = $("#MapShipOver");
            return{
                open : function(e){
                    var diff = 24;
                    infoEl.css({
                        'marginTop' : -(infoEl.height()/2)+"px",
                        'marginLeft' : diff+"px",
                        'transform':'translate('+e.x+'px,'+e.y+'px)'
                    });
                    infoEl.addClass("active");
                },
                close : function(){
                    infoEl.removeClass("active");
                }
            }
        },
        chkDefaultLine : function(checkbox, is_on){
            let thisObj = this;
            
            let layerId = "DEFAULT_POLYLINE_LAYER";
            let groupId = "DEFAULT_GROUP_LAYER";

            if(is_on || checkbox.checked ){
                let res = defalutLineData;
                let lineOpt = {
                    layerId : layerId,
                    groupId : groupId,
                    lines : []
                };
                $.each(res.features, function(idx, feature){
                    if(feature &&  feature.geometry){
                        let _id = feature.properties.startNo;
                        //라인타입검색
                        let lineType =  thisObj.findLineType(feature.geometry.type);
                        let line = {
                            id : _id,
                            strokeColor: lineType.strokeColor ? lineType.strokeColor : "#ffffff",
                            strokeOpacity: lineType.strokeOpacity ? lineType.strokeOpacity : 0,
                            strokeWeight: lineType.strokeWeight ? lineType.strokeWeight : 0,
                            geodesic: true,
                            icons: lineType.icons,
                            event : {
                                click : function(event){
                                },
                                mouseover : function(event) {
                                    console.dir(feature.properties.startNo);
                                },
                                mouseout : function(event) {
                                }
                            }
                        }
                        if( line.icons[1] ){
                            line.icons[1].icon.anchor = new google.maps.Point(9, 0);
                        }
                        lineOpt.lines.push(line);
                    }
                });
                thisObj.mapController.setData(layerId, res);
                thisObj.mapController.createLine(layerId, lineOpt);
                thisObj.mapController.runLine(layerId, lineOpt)
            }else{
                thisObj.mapController.clearLayer(groupId, layerId);
            }
        },
        chkShipMarker : function(checkbox, is_on){
            var thisObj = this;
            var layerId = "SHIP_MARKER_PNG_LAYER";
            var groupId = "DEFAULT_GROUP_LAYER";
            if(is_on || checkbox.checked ){
                var markerOpt = {
                    layerId   : layerId,
                    groupId   : groupId,
                    id      : "mmsi",
                    getIcon : function(shipData, opt){
                        var icon = thisObj.mapShipStyle().list[shipData.ship_type].icon;
                        var rotation = shipData.heading != null ? Math.floor(shipData.heading / 10) : shipData.cog != null && shipData.cog != '3600' ? Math.floor(shipData.cog / 10) : 0;
                        icon.rotation = rotation * 9;
                        icon.size = new google.maps.Point(12, 20);
                        icon.anchor = new google.maps.Point(7, 0);
                        icon.scale = 0.5;
                        return icon;
                    },
                    latNm : "latitude", 
                    lngNm : "longitude", 
                    headingId : "heading",
                    cogId : "cog",
                    sogId : "sog",
                    lengthId : "length",
                    shipTypeId : "ship_type",
                    iconNm    : "ship",
                    zIndex    : 2100,
                    event     : {
                        click : function(event){
                            var info = window.uiGooglMap.infoShipMarker();
                            info.open(event.pixel);
                        },
                        mouseover : function(event) {
                            window.uiGooglMap.overShipMarker().open(event.pixel);
                        },
                        mouseout : function(event) {
                            window.uiGooglMap.overShipMarker().close();
                        }
                    },
                    useTootltip : true,
                    tooltip : "vessel_name",
                    labelVisible : false,   // false
                    label : {
                        labelContent : "vessel_name",
                        labelExist : false, // false
                        color : "#D70000",
                        fontWeight : "bold",
                        fontSize : "12px",
                        minZoom : 2 ,
                        maxZoom : 21,
                        labelOffX : 15,
                        labelOffY : 30,
                    },
                    refresh : true
                };

                var res = shipData;
                var vessel_info_list = [];                            
                for(var i = 0 ; i < res.vessel_info_list.length ; i++){
                    var vessel_info = {};
                    var ship_type = 9;
                    var ship_code = res.vessel_info_list[i].type_info.code;
                    vessel_info.latitude = res.vessel_info_list[i].position_info.lat;
                    vessel_info.longitude = res.vessel_info_list[i].position_info.lon;
                    vessel_info.cog = res.vessel_info_list[i].position_info.course;
                    vessel_info.heading = res.vessel_info_list[i].position_info.true_heading;
                    vessel_info.sog = res.vessel_info_list[i].position_info.speed;
                    vessel_info.length = res.vessel_info_list[i].dimension_info.a + res.vessel_info_list[i].dimension_info.b;
                    
                    // set marker type
                    if(ship_code>=70 && ship_code<=79){
                        ship_type = 1
                    }else if(ship_code>=80 && ship_code<=89){
                        ship_type = 2
                    }else if(ship_code>=20 && ship_code<=29){
                        ship_type = 3
                    }else if(ship_code>=31 && ship_code<=35){
                        ship_type = 3
                    }else if(ship_code>=50 && ship_code<=59){
                        ship_type = 3
                    }else if(ship_code>=60 && ship_code<=69){
                        ship_type = 4
                    }else if(ship_code==30){
                        ship_type = 5
                    }else if(ship_code>=40 && ship_code<=49){
                        ship_type = 6
                    }else if(ship_code>=36 && ship_code<=37){
                        ship_type = 7
                    }else if(ship_code>=38 && ship_code<=39){
                        ship_type = 8
                    }else if(ship_code>=90 && ship_code<=99){
                        ship_type = 8
                    }else{
                        ship_type = 9
                    }

                    vessel_info.ship_type = ship_type-1;
                    vessel_info.mmsi = res.vessel_info_list[i].mmsi;
                    vessel_info.vessel_name = res.vessel_info_list[i].vessel_name;

                    vessel_info_list.push(vessel_info);
                }

                thisObj.mapController.setData( layerId, vessel_info_list);
                thisObj.mapController.createMarkers( layerId, markerOpt );
                thisObj.mapController.runMarker(groupId, layerId);
            }else{
                thisObj.mapController.clearLayer(groupId, layerId);
            }
        },
        chkDefaultMarker  : function(checkbox, is_on){
            var thisObj = this;
            let layerId = "DEFAULT_MARKER_LAYER";
            let groupId = "DEFAULT_GROUP_LAYER";

            if(is_on || checkbox.checked){
                let markerOpt = {layerId   : layerId,
                groupId   : groupId,
                id      : "port_id",
                getIcon : function(portData, opt){
                    var ratio = Math.ceil(portData.port_size/45);
                    let imgOption = {
                        width : 10 * ratio,
                        height: 10 * ratio
                    }
                    let icon = {
                        path : thisObj.PORT_PATH,
                        fillOpacity : 1,
                        fillColor : "#3cb2a8",
                        strokeWeight:0,
                        scale : 1,
                        anchor : new google.maps.Point(5,10),
                        labelOrigin : new google.maps.Point(opt.label.labelOffX||0, opt.label.labelOffY||20),
                    };
                    return icon;
                },
                zIndex    : 1,
                event     : {
                    click : function(event){
                    
                    },
                    mouseover : function(event) {

                    },
                    mouseout : function(event) {

                    }
                },
                useTootltip : true,
                tooltip : "port_name",
                labelVisible : false,
                label : {
                    labelContent : "port_name",
                    labelExist : false,
                    labelOffX : 10,
                    labelOffY : 30,
                    color : "#CC0000"
                },
                    refresh : true,
                };
                let res = portData;
                thisObj.mapController.setData( layerId, res );
                thisObj.mapController.createMarkers(layerId, markerOpt);
                thisObj.mapController.runMarker(groupId, layerId);
            }else{
                thisObj.mapController.clearLayer(groupId, layerId);
            }            
        }
    }
})();