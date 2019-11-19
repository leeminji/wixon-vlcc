var uiGooglMap = (function(){
    return {
        IMG_DIR : "/_public/images/map/",
        mapStyle : [
            {
                strokeColor : "#ffffff",
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
                            path: "M 0, 0 L 14, 14.5  L 10.5, 18  L 0, 7  L -10.5, 18  L -14, 14.5  L 0, 0 Z",
                            fillOpacity: 1,
                            scale: 0.9,
                            fillColor : "#ffffff",
                            strokeColor: "#FFFFFF",
                        },
                        offset: '0',
                        repeat: '120px'
                    }
                ]
            },
            {
                strokeColor : "#ffffff",
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
                            path: "M 0, 0 L 14, 14.5  L 10.5, 18  L 0, 7  L -10.5, 18  L -14, 14.5  L 0, 0 Z",
                            fillOpacity: 1,
                            scale: 0.9,
                            fillColor : "#ffffff",
                            strokeColor: "#FFFFFF",
                        },
                        offset: '0',
                        repeat: '120px'
                    }
                ]
            },
            {
                strokeColor : "#ffffff",
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
                            path: "M 0, 0 L 14, 14.5  L 10.5, 18  L 0, 7  L -10.5, 18  L -14, 14.5  L 0, 0 Z",
                            fillOpacity: 1,
                            scale: 0.9,
                            fillColor : "#0068e6",
                            strokeColor: "#FFFFFF",
                        },
                        offset: '0',
                        repeat: '120px'
                    }
                ]
            },
        ],
        mapController : null,
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
				styles: [
					{elementType: 'geometry', stylers: [{color: '#1e363d'}]},
					{elementType: 'labels.text.stroke', stylers: [{color: '#1e363d'}]},
					{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
					{
					featureType: 'administrative.locality',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
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
					stylers: [{color: '#38414e'}]
					},
					{
					featureType: 'road',
					elementType: 'geometry.stroke',
					stylers: [{color: '#212a37'}]
					},
					{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9ca5b3'}]
					},
					{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#746855'}]
					},
					{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [{color: '#1f2835'}]
					},
					{
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [{color: '#f3d19c'}]
					},
					{
					featureType: 'transit',
					elementType: 'geometry',
					stylers: [{color: '#2f3948'}]
					},
					{
					featureType: 'transit.station',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
					},
					{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#0b121b'}]
					},
					{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#515c6d'}]
					},
					{
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [{color: '#17263c'}]
					}
				]		
				,mapTypeControl : true
				,mapTypeControlOptions: {
					mapTypeIds: mapTypeIds,
					style : google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
					position : google.maps.ControlPosition.TOP_RIGHT
				}
				,zoom : 2
				,streetViewControl : false
				,streetViewControlOptions:{
					on : google.maps.ControlPosition.LEFT_TOP
				}
				,fullscreenControl : false
			};
            this.mapController = new seavantage.map.Controller(_mapId, mapControllerOptions);
            
            //라인보이기
            this.chkDefaultLine(null, true);

            //배 마커
            this.chkShipMarker(null, true);
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
                        let line = {
                            id : _id,
                            strokeColor: thisObj.mapStyle[_id].strokeColor,
                            strokeOpacity: 0,
                            strokeWeight: 1,
                            geodesic: true,
                            icons: thisObj.mapStyle[_id].icons,
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
                        console.log(line);
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
        chkDefaultMarkerWithLabel : function(checkbox){
            let layerId = "DEFAULT_MARKER_WITH_LABEL_LAYER";
            let groupId = "DEFAULT_GROUP_LAYER";
    
            if(checkbox.checked){
                let markerOpt = {
                    layerId   : layerId,
                    groupId   : groupId,
                    id      : "port_id",
                    //lengthId : "port_size",
                    //shipTypeId : "port_type",
                    getIcon : function(portData, opt){  
                        let icon;
                        let imgOption = {
                            url: null,
                            width: null,
                            height: null,
                            x: null,
                            y: null,
                        };
    
                        imgOption.x = 1;
    
                        if(portData.port_size<45){
                            imgOption = {
                                url : "img/port/13X11.png",
                                width : 13,
                                height : 11,
                                x : imgOption.x,
                                y : 0
                            }   
                        }else if(portData.port_size <= 159){
                            imgOption = {
                                url : "img/port/16X14.png",
                                width : 16,
                                height : 14,
                                x : imgOption.x,
                                y : 0
                            }
                        }else {
                            imgOption = {
                                url : "img/port/19X17.png",
                                width : 19,
                                height : 17,
                                x : imgOption.x,
                                y : 0
                            }  
                        }
                        
                        icon = {
                            url : imgOption.url,
                            size : new google.maps.Size(imgOption.width, imgOption.height),
                            origin : new google.maps.Point(imgOption.width * imgOption.x, imgOption.height * imgOption.y ),
                            anchor: new google.maps.Point(imgOption.width/2, imgOption.height/2 ),
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
                    labelVisible : true,
                    label : {
                        labelContent : "port_name",
                        labelExist : true,
                        labelOffX : 10,
                        labelOffY : 22,
                        color : "#CC0000"
                    },
                    refresh : true,
                };
                
                let res = portData;
                mapController.setData( layerId, res );
                mapController.createMarkers(layerId, markerOpt);
                mapController.runMarker(groupId, layerId);
            }else{
                mapController.clearLayer(groupId, layerId);
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
                    iconType : "PNG",
                    image   : { 
                        ship : {
                            largeFile : {
                                url : thisObj.IMG_DIR+"/ship/ship_large_2.png",
                            },
                            mediumFile : {
                                url : thisObj.IMG_DIR+"/ship/ship_medium_2.png",
                            },
                            smallFile : {
                                url : thisObj.IMG_DIR+"/ship/ship_small_2.png",
                            },
                        }
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
                            //var marker = this;
                            console.dir(this)
                        },
                        mouseover : function(event) {

                        },
                        mouseout : function(event) {

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

                    vessel_info.ship_type = ship_type;
                    vessel_info.mmsi = res.vessel_info_list[i].mmsi;
                    vessel_info.vessel_name = res.vessel_info_list[i].vessel_name;
                    vessel_info_list.push(vessel_info)     
                }
                thisObj.mapController.setData( layerId, vessel_info_list);
                thisObj.mapController.createMarkers( layerId, markerOpt );
                thisObj.mapController.runMarker(groupId, layerId);
            }else{
                thisObj.mapController.clearLayer(groupId, layerId);
            }
        } 
    }
})();