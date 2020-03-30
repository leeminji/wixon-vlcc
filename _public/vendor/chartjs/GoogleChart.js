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
                        height : '80%'
                    },
                    legend : { 
                        position: "top", 
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
                            color : thisObj.basicLineColor,
                            units: {
                                years : {format: ['yyyy']},
                                months: {format: ['MM']},
                                days  : {format: ['dd']}
                            }
                        },
                        minorGridlines : {
                            color : thisObj.basicMinorLineColor,
                        },
                        textStyle: {
                            fontSize:11,
                            color : thisObj.basicFontColor,
                            fontName : thisObj.basicFont
                        }
                    },
                    vAxis : {
                        baselineColor : thisObj.basicLineColor,
                        textStyle: {
                            fontSize:11,
                            color : thisObj.basicFontColor,
                            fontName : thisObj.basicFont
                        },
                        gridlines: {
                            count : -1,
                            color : thisObj.basicLineColor
                        },
                        minorGridlines : {
                            color : thisObj.basicMinorLineColor,
                        }
                    },
 
                    animation : { startup: true, duration: 500, easing: 'in' },
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
                            },
                            hAxis: {
                                baselineColor: thisObj.basicLineColor, 
                                format: 'yyyy/MM/dd', 
                                textStyle: {
                                    fontSize : 11,
                                    color : thisObj.basicFontColor,
                                    fontName : thisObj.basicFont
                                },
                                gridlines:{
                                    color : thisObj.basicLineColor,
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