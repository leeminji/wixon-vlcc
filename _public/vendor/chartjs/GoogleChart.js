var GoogleChart = (function(){
    
    return {
        basicLineColor : '#394959', //라인색상
        basicMinorLineColor : '#1d2c3d', //라인색상
        basicFontColor : "#d6d6d6", //폰트색상
        basicFont :'Roboto Condensed', //폰트
        initLineChart : function(_chartId, _options){
            var thisObj = this;
            if( document.getElementById(_chartId) == null ) return;          
            var chartOptions = {
                chartType   : "LineChart",
                containerId : _chartId, //라인 차트 생성할 영역
                options     : {
                    backgroundColor: 'transparent',
                    isStacked   : 'percent',
                    focusTarget : 'category',
                    height : '400',
                    width : '100%',
                    chartArea : {
                        width : '85%',
                        height : '80%',
                        top:10,
                    },
                    legend : { 
                        position: "bottom", 
                        alignment:'center',
                        textStyle: {
                            fontSize:11,
                            color : thisObj.basicFontColor,
                            fontName : thisObj.basicFont
                        }
                    },
                    pointSize : 5,
                    tooltip : {
                        textStyle : {
                            fontSize:11
                        }, 
                        showColorCode : true,
                        trigger: 'both'
                    },
                    hAxis : { 
                        format: 'dd-MMM YYYY',
                        baselineColor : thisObj.basicLineColor,
                        gridlines:{
                            color : 'transparent',
                            units: {
                                years : {format: ['yyyy']},
                                months: {format: ['MM']},
                                days  : {format: ['dd']}
                            }
                        },
                        minorGridlines : {
                            count : 1,
                            color : thisObj.basicMinorLineColor,
                        },
                        textStyle: {
                            fontSize:12,
                            color : thisObj.basicFontColor,
                            fontName : thisObj.basicFont
                        }
                    },
                    vAxes : {
                        0 :{
                            textStyle: {
                                fontSize:12,
                                color : thisObj.basicFontColor,
                                fontName : thisObj.basicFont
                            },
                            titleTextStyle: {
                                fontSize:12,
                                color : thisObj.basicFontColor,
                                fontName : thisObj.basicFont,
                                italic : false,
							},
                            gridlines: {
                                count : 4,
                                color : thisObj.basicLineColor
                            },
                            minorGridlines : {
                                count : 1,
                                color : thisObj.basicMinorLineColor,
                            },
                        },
                        1 :{
                            textStyle: {
                                fontSize:12,
                                color : thisObj.basicFontColor,
                                fontName : thisObj.basicFont
                            },
                            titleTextStyle: {
                                fontSize:12,
                                color : thisObj.basicFontColor,
                                fontName : thisObj.basicFont,
                                italic : false,
							},
                            gridlines: {
                                count : 4,
                                color : 'transparent'
                            },
                            minorGridlines : {
                                count : 1,
                                color : 'transparent'
                            },
                        }
                    },
                    animation : { startup: true, duration: 200, easing: 'in' },
                    annotations : {
                        pattern: "dd-MMM YYYY",
                        textStyle: {
                            fontSize: 11,
                            bold: true,
                            color: '#871b47',
                            auraColor: '#d799ae',
                            opacity: 0.8
                        }
                    }
                }
            };
            $.extend(true, chartOptions.options, _options);

            var chart = new google.visualization.ChartWrapper(chartOptions);
            return chart;
        },
        controlLineChart : function(_chartId, _options){
            var thisObj = this;
            if( document.getElementById(_chartId) == null ) return;
            var controlOptions = {
                controlType: 'ChartRangeFilter',
                containerId: _chartId,  //control bar를 생성할 영역
                options: {
                    ui:{
                        chartType: 'LineChart',
                        chartOptions: {
                            backgroundColor: 'transparent',
                            height : 80,
                            width : '100%', 
                            chartArea: {
                                width: '90%',
                                height : '90%',
                                top: '5%'
                            },
                            hAxis: {
                                baselineColor: thisObj.basicLineColor, 
                                format: 'yyyy/MM/dd', 
                                textStyle: {
                                    fontSize : 12,
                                    color : thisObj.basicFontColor,
                                    fontName : thisObj.basicFont
                                },
                                gridlines:{
                                    color : 'transparent',
                                    units : {
                                        years : {format: ['yyyy']},
                                        months: {format: ['MM']},
                                        days  : {format: ['dd']}
                                    }
                                },
                                minorGridlines : {
                                    color : thisObj.basicMinorLineColor,
                                },
                            }
                        }
                    },
                    filterColumnIndex: 0
                }
            };

            //옵션설정
            $.extend(true, controlOptions.options.ui.chartOptions, _options);

            var control = new google.visualization.ControlWrapper(controlOptions);
            return control;
        }
    }
})();