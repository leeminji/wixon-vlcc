
//ChartUtil.initStackedChart
var ChartUtil = (function(){
	return {
		font : "'Roboto Condensed' , 'Noto Sans KR', 'sans-serif'",
		chartList : [],
		colors : {
			red: 'rgb(255, 99, 132)',
			orange: 'rgb(255, 154, 99)',
			yellow: 'rgb(255, 205, 86)',
			darkgreen: 'rgb(65, 134, 113)',
			green: 'rgb(25, 167, 112)',
			green_op5: 'rgba(5, 167, 112, 0.5)',
			green_op2: 'rgba(5, 167, 112, 0.2)',
			yellowish : 'rgb(151,211,188)',
			purple: 'rgb(153, 102, 255)',
			grey: 'rgb(201, 203, 207)',
			skyblue: 'rgb(23, 186, 205)',
			skyblue_op5: 'rgba(23, 186, 205, 0.5)',
			skyblue_op2: 'rgba(23, 186, 205, 0.2)',
			black : 'rgb(0,0,0)',
			blue : 'rgb(105,213,255)',
			blue_op5 : 'rgba105,213,255,0.5)',
			royalblue : 'rgb(23,80,163)',
			royalblue_op5 : 'rgba(23,80,163,0.5)',
			darkblue : 'rgb(0,98,132)',
			darkblue_op5 : 'rgba(0,98,132,0.5)',
			gray : 'rgb(190,190,190)',
			darkgray : 'rgb(115,115,115)',
			white : '#d0d0d0',
			white_op8 : 'rgba(255,255,255, 0.8)',
			white_op5 : 'rgba(255,255,255, 0.5)',
			white_op2 : 'rgba(255,255,255, 0.2)',
			navy : 'rgba(56,99,131,1)',
			olive : 'rgba(108,111,54,1)',
			olive_op5 : 'rgba(108,111,54,0.5)',
			yellowgreen : 'rgba(136,190,0,1)',
			yellowgreen_op5 : 'rgba(136,190,0,0.5)',
			pink : 'rgb(203,107,107)',
		},
		randomData : function(min, max){
			return Math.floor(Math.random() * (max-min+1)) + min;
		},
		initLineChartYLabel : function(_canvasId, _data){
			var thisObj =this;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : _data,
				options: {
					legend : false,
					legendCallback : function(_chart){
						return thisObj.drawCustomLegend(_chart);
					},
					responsive: true,
					hoverMode: 'index',
					stacked: false,
					title: {
						display: 'none'
					},
					defaultFontFamily : window.ChartUtil.font,
					plugins: {
						datalabels: {
							display: function(context) {
								return ""
							}
						}
					},
					scales: {
						xAxes: [{
							display: true
						}],
						yAxes: [{
							display: true,
							ticks: {
								callback: function(label, index, labels) {
									var labelArr = ['WORLD','AG','WAF','WEST','REVERS'];
									return labelArr[index] +" "+ label;
								},
								fontColor: '#04b2bf',
								stepSize: 300
							}
						}]
					}
				}
			});
			this.addCustomLegend(_canvasId);
		},
		initLineChart : function(_canvasId, _data, _stepSize, _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;

			if( _tabCateogoryInit !== false && _tabCateogoryInit > -1 ){
				var initCategory = $("#"+_canvasId+"_tab > a").eq(_tabCateogoryInit).addClass('active').data('category');
				initData = this.categoryDataFind(_data, initCategory);
			}
			//console.log(initData);
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				stacked: false,
				title: {
					display: 'none'
				},
				plugins: {
					datalabels: {
						display: function(context) {
							return ""
						}
					}
				},	
				scales: {
					xAxes: [{
						display: true,
						//x축에 해당하는 모든선
						gridLines : {
							lineWidth: 1,
							display : true,
							borderDash: [2, 5],
							color : window.ChartUtil.colors.white_op2,
						},
						//글자
						ticks: {
							display : 'block',
							fontColor : window.ChartUtil.colors.white,
							fontFamily : window.ChartUtil.font,
						},	
					}],
					yAxes: [{
						display: true,
						ticks : {},
						//y축에 해당하는 모든선
						gridLines : {
							lineWidth: 1,
							display : true,
							borderDash: [2, 2],
							color : window.ChartUtil.colors.white_op2,
						},
						//글자
						ticks: {
							display : 'block',
							fontColor : window.ChartUtil.colors.white,
							fontFamily : window.ChartUtil.font,
						},	
					}]
				}
			}
			if( _stepSize ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSize;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : initData,
				options: _options
			});

			if( _tabCateogoryInit > -1 ){
				this.addDataTab(_canvasId, _data);
			}
			this.addCustomLegend(_canvasId);
		},
		initLineChartWhite : function(_canvasId, _data, _stepSize, _tabCateogoryInit, _ratio){
			var thisObj =this;
			if( _tabCateogoryInit !== false && _tabCateogoryInit > -1 ){
				var initCategory = $("#"+_canvasId+"_tab > a").eq(_tabCateogoryInit).addClass('active').data('category');
				initData = this.categoryDataFind(_data, initCategory);
			}
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				stacked: false,	
				title: {
					display: 'none'
				},
				defaultFontFamily : window.ChartUtil.font,
				plugins: {
					datalabels: {
						display: function(context) {
							return ""
						}
					}
				},
				scales: {
					xAxes: [
						{
							type: "time",
							time: {
								parser:'DD/MM/YYYY',
								unit: 'month',
								unitStepSize: 1,
								displayFormats: {
								  'day': 'MM/DD/YYYY'
								},
							},
							scaleLabel: {
								display:false,
								labelString: 'Date'
							},
							//글자
							ticks: {
								display : 'block',
								fontColor : window.ChartUtil.colors.white,
							},
							//x축에 해당하는 모든선
							gridLines : {
								lineWidth: 1,
								display : true,
								borderDash: [2, 5],
								color : window.ChartUtil.colors.white_op2,
							}
						}	
					],
					yAxes: [
						{
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								beginAtZero:true,
								userCallback: function(value, index, values) {
									value = value.toString();
									value = value.split(/(?=(?:...)*$)/);
									value = value.join(',');
									return value;
								}
							},
							//x축에 해당하는 모든선
							gridLines : {
								lineWidth: 1,
								display : true,
								color : window.ChartUtil.colors.white_op2,
							}
						}
					]
				}
			}
			if( _stepSize ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSize;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : _data,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},
		initLineChartMulti : function(_canvasId, _data, _stepSizeLeft, _stepSizeRight,  _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;

			if( _tabCateogoryInit !== false && _tabCateogoryInit > -1 ){
				var initCategory = $("#"+_canvasId+"_tab > a").eq(_tabCateogoryInit).addClass('active').data('category');
				initData = this.categoryDataFind(_data, initCategory);
			}	
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				stacked: false,
				title: {
					display: 'none'
				},
				defaultFontFamily : window.ChartUtil.font,
				plugins: {
					datalabels: {
						display: function(context) {
							return ""
						}
					}
				},
				scales: {
					xAxes : [
						{
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								beginAtZero:true,
								fontFamily : window.ChartUtil.font,
							},
							//x축에 해당하는 모든선
							gridLines : {
								lineWidth: 1,
								display : true,
								borderDash: [2, 5],
								color : window.ChartUtil.colors.white_op2,
							}
						}
					],
					yAxes: [
						{
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								fontFamily : window.ChartUtil.font,
							},	
							gridLines : {
								display : true,
								borderDash: [2, 5],
								drawOnChartArea: true, 
								color : window.ChartUtil.colors.white_op2
							},								
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						}, 
						{	
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								fontFamily : window.ChartUtil.font,
								fontWeight : 600,
								max:1500,
								min:1300,
							},																
							type: 'linear', 
							display: true,
							position: 'right',
							id: 'y-axis-2',

							// grid line settings
							gridLines: {
								display: true,
								drawOnChartArea: false, 
								color : window.ChartUtil.colors.white_op2
							},
						}
					],
				}
			}
			if( _stepSizeLeft ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSizeLeft;
			}
			if( _stepSizeRight ){
				_options.scales.yAxes[1].ticks.stepSize = _stepSizeRight;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}		
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : initData,
				options: _options
			});
			if( _tabCateogoryInit > -1 ){
				this.addDataTab(_canvasId, _data);
			}	
			this.addCustomLegend(_canvasId);
		},
		initBarChartMulti : function(_canvasId, _data, _stepSizeLeft, _stepSizeRight,  _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;

			if( _tabCateogoryInit !== false && _tabCateogoryInit > -1 ){
				var initCategory = $("#"+_canvasId+"_tab > a").eq(_tabCateogoryInit).addClass('active').data('category');
				initData = this.categoryDataFind(_data, initCategory);
			}	
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				stacked: false,
				title: {
					display: 'none'
				},
				defaultFontFamily : window.ChartUtil.font,
				plugins: {
					datalabels: {
						display: function(context) {
							return ""
						}
					}
				},
				scales: {
					xAxes : [
						{
							stacked : true,
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								beginAtZero:true,
								fontFamily : window.ChartUtil.font,
							},
							//x축에 해당하는 모든선
							gridLines : {
								lineWidth: 1,
								display : true,
								borderDash: [2, 5],
								color : window.ChartUtil.colors.white_op2,
							}
						}
					],
					yAxes: [
						{
							stacked : true,
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								fontFamily : window.ChartUtil.font,
							},	
							gridLines : {
								display : true,
								borderDash: [2, 5],
								drawOnChartArea: true, 
								color : window.ChartUtil.colors.white_op2
							},								
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						}, 
						{	
							//글자
							ticks: {
								fontColor : window.ChartUtil.colors.white,
								fontFamily : window.ChartUtil.font,
								fontWeight : 600,
								max:100,
								min:0,
							},																
							type: 'linear', 
							display: true,
							position: 'right',
							id: 'y-axis-2',

							// grid line settings
							gridLines: {
								display: true,
								drawOnChartArea: false, 
								color : window.ChartUtil.colors.white_op2
							},
						}
					],
				}
			}
			if( _stepSizeLeft ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSizeLeft;
			}			
			if( _stepSizeRight ){
				_options.scales.yAxes[1].ticks.stepSize = _stepSizeRight;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}		
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "bar",
				data : initData,
				options: _options
			});
			if( _tabCateogoryInit > -1 ){
				this.addDataTab(_canvasId, _data);
			}	
			this.addCustomLegend(_canvasId);
		},
		initStackedChart : function(_canvasId, _data, _stepSize, _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				title: {
					display: 'none'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
				defaultFontFamily : window.ChartUtil.font,
				responsive: true,
				plugins: {
					datalabels: {
						color: 'white',
						display: function(context) {
							if(context.chart.data.hideDataLabel){
								return "";
							}else{
								return context.dataset.data[context.dataIndex];
							}
						},
						formatter: Math.round
					}
				},	
				scales: {
					xAxes: [{
						stacked: true,						
						//글자
						ticks: {
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						},	
						gridLines : {
							lineWidth: 1,
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							zeroLineColor:  window.ChartUtil.colors.white,
							zeroLineWidth: 1,
							color : window.ChartUtil.colors.white_op2
						},	
					}],
					yAxes: [{
						stacked: true,
						gridLines : {
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							color : window.ChartUtil.colors.white_op2,
							zeroLineColor:  window.ChartUtil.colors.white_op5,
							zeroLineWidth: 1,
							lineWidth: 1,
						},							
						ticks :{
							stepSize : 10,
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						}
					}]
				}
			}
			if( _stepSize ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSize;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "bar",
				data : initData,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},		
		initHorizontalBarChart : function(_canvasId, _data, _stepSize, _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				title: {
					display: 'none'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
				defaultFontFamily : window.ChartUtil.font,
				responsive: true,
				plugins: {
					datalabels: {
						color: 'white',
						display: function(context) {
							return context.dataset.data[context.dataIndex];
						},
						formatter: Math.round
					}
				},	
				scales: {
					xAxes: [{
						stacked: true,						
						//글자
						ticks: {
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						},	
						gridLines : {
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							zeroLineColor:  window.ChartUtil.colors.white,
							zeroLineWidth: 1,
							color : window.ChartUtil.colors.white_op2
						},	
					}],
					yAxes: [{
						stacked: true,
						gridLines : {
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							color : window.ChartUtil.colors.white_op2,
							zeroLineColor:  window.ChartUtil.colors.white_op5,
							zeroLineWidth: 1,
						},							
						ticks :{
							stepSize : 10,
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						}
					}]
				}
			}
			if( _stepSize ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSize;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "horizontalBar",
				data : initData,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},
		initVerticalBarChart : function(_canvasId, _data, _stepSize, _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: true,
				hoverMode: 'index',
				title: {
					display: 'none'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
				defaultFontFamily : window.ChartUtil.font,
				responsive: true,
				plugins: {
					datalabels: {
						color: 'white',
						display: function(context) {
							//return context.dataset.data[context.dataIndex];
							return ''
						},
						formatter: Math.round
					}
				},	
				scales: {
					xAxes: [{						
						//글자
						ticks: {
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						},	
						gridLines : {
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							zeroLineColor:  window.ChartUtil.colors.white,
							zeroLineWidth: 1,
							color : window.ChartUtil.colors.white_op2
						},	
					}],
					yAxes: [{
						gridLines : {
							display : true,
							borderDash: [1, 3],
							drawOnChartArea: true, 
							color : window.ChartUtil.colors.white_op2,
							zeroLineColor:  window.ChartUtil.colors.white_op5,
							zeroLineWidth: 1,
						},							
						ticks :{
							stepSize : 10,
							fontColor : window.ChartUtil.colors.white_op5,
							fontFamily : window.ChartUtil.font,
						}
					}]
				}
			}
			if( _stepSize ){
				_options.scales.yAxes[0].ticks.stepSize = _stepSize;
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "bar",
				data : initData,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},
		initDoughnutChart : function(_canvasId, _data, _tabCateogoryInit, _ratio){
			var thisObj =this;
			var initData = _data;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				aspectRatio : 2,
				maintainAspectRatio: true,
				hoverMode: 'index',
				title: {
					display: 'none'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},			
				defaultFontFamily : window.ChartUtil.font,
				responsive: true,
				plugins: {
					datalabels: {
						color: 'white',
						display: function(context) {
							return context.dataset.data[context.dataIndex];
						},
						formatter: Math.round
					}
				}
			}
			if( _ratio ){
				_options.aspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "doughnut",
				data : initData,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},
		resetDataset : function(e, chart){
			//라벨 클릭 이벤트 전체리셋
			var total = chart.data.datasets.length;
			for( var i =0;i<total;i++ ){
				var meta = chart.getDatasetMeta(i);
				meta.hidden = null;
			}
			chart.update();
		},
		upDateDataset : function(e, datasetIndex, chart){
            var index = datasetIndex;
            var meta = chart.getDatasetMeta(index);
            var scaleList = chart.options.scales["yAxes"];
                
            meta.hidden = meta.hidden === null? !chart.data.datasets[index].hidden : null;
            chart.update();
		},
		addCustomLegend : function(_canvasId){
			var thisObj = this;
			var legendId = document.getElementById(_canvasId+"_legend");
			if( !legendId ) return;
			legendId.innerHTML = window.ChartUtil.chartList[_canvasId].generateLegend();

			var legendList = $("#"+_canvasId+"_legend li");
			if( legendList.size() <= 0 ) return;
			
			//리셋
			legendList.removeClass('inactvie');
			ChartUtil.resetDataset(null, window.ChartUtil.chartList[_canvasId]);

			legendList.off("click").on('click', function(){
				thisObj.upDateDataset(event, $(this).attr("data-index"), window.ChartUtil.chartList[_canvasId]);
				if( $(this).hasClass('inactive')){
					$(this).removeClass("inactive");
				}else{
					$(this).addClass("inactive");
				}
			});
		},
		drawCustomLegend : function(chart){
			var thisObj = this;
			var text = [];
			var getChartLabelStyle = function(_data, _type){
				var cssStyleLine = "";
				cssStyleLine += "border-width:2px;";
				cssStyleLine += "border-style:solid;";
				if( _type == 'line' ){
					cssStyleLine += "border-color:"+_data.borderColor+";";
					cssStyleLine += "background-color:"+_data.borderColor+";";
				}else{
					if( _data.borderColor ){
						cssStyleLine += "border-color:"+_data.borderColor+";";
					}
					if( _data.backgroundColor ){
						cssStyleLine += "background-color:"+_data.backgroundColor+";";
					}
				}
				return cssStyleLine;
			}	
			text.push('<ul class="'+chart.id+'-legend '+chart.config.type+'">');
			if(chart.config.type == 'bar'){//막대차트, 막대라인차트일 경우
			  var barIndex = chart.data.datasets.length;
				for (var i = 0; i <chart.data.datasets.length; i++) {
				  if(chart.data.datasets[i].type == 'line' == false){
					barIndex = i;
					break;
				  }
				}
				for (i = barIndex; i <chart.data.datasets.length; i++) {
				  if(!(chart.data.datasets[i].hideLegend) && chart.data.datasets[i].label){
					text.push('<li data-index="'+i+'"><span class="bar" style="'+getChartLabelStyle(chart.data.datasets[i], chart.config.type)+'" ></span>');
					text.push('<span>'+chart.data.datasets[i].label+'</span>');
					text.push('</li>');
				  }
				}
				//막대 형식 데이터셋의 범례를 먼저 그림	 
				for (i = 0; i <barIndex; i++) {
				  if(!(chart.data.datasets[i].hideLegend) && chart.data.datasets[i].label){				  
					text.push('<li data-index="'+i+'"><span class="bar" style="'+getChartLabelStyle(chart.data.datasets[i], chart.config.type)+'" ></span>');
					text.push('<span>'+chart.data.datasets[i].label+'</span>');
					text.push('</li>');
				  }
				}
			//막대 형식 데이터셋의 범례를 그린 후 라인 형식 데이터셋의 범례를 그림.
			} else if(chart.config.type == 'line'){//라인 차트일 경우
			    for (i = 0; i <chart.data.datasets.length; i++) {
				  if(!(chart.data.datasets[i].hideLegend) && chart.data.datasets[i].label){
					text.push('<li data-index="'+i+'"><span class="bar" style="'+getChartLabelStyle(chart.data.datasets[i], chart.config.type)+'" ></span>');
					text.push('<span>'+chart.data.datasets[i].label+'</span>');
					text.push('</li>');
				  }
			    }
			} else if(chart.config.type == 'doughnut'){//도넛 차트일 경우
				for (i = 0; i <chart.data.labels.length; i++) {
					if(chart.data.labels[i]){
					  text.push('<li data-index="'+i+'"><span class="bar" style="border: 2px solid '+chart.data.datasets[0].backgroundColor[i]+';background-color:'+chart.data.datasets[0].backgroundColor[i]+'" ></span>');
					  text.push('<span>'+chart.data.labels[i]+'</span>');
					  text.push('</li>');
					}
				}
			}else{
				for (i = 0; i <chart.data.datasets.length; i++) {
					if(!(chart.data.datasets[i].hideLegend) && chart.data.datasets[i].label){
					  text.push('<li data-index="'+i+'"><span class="bar" style="'+getChartLabelStyle(chart.data.datasets[i], chart.config.type)+'" ></span>');
					  text.push('<span>'+chart.data.datasets[i].label+'</span>');
					  text.push('</li>');
					}
				}				
			}
			text.push('</ul>');
			return text.join("");
		},
		//데이터에서 카테고리로 해당 데이터 찾기
		categoryDataFind : function(_dataList, _category){
			var result = null;	
			_dataList.datalist.forEach(function(item){
				if( item.category.toLowerCase() == _category.toLowerCase() ){
					result =  item;
					return;
				}
			});
			return result;
		},
		//탭클릭
		addDataTab : function(_canvasId, _data){
			var thisObj = this;
			var tabList = $("#"+_canvasId+"_tab a");
			tabList.on('click', function(e){
				e.preventDefault();
				var category = $(this).data('category');
				var changeData = thisObj.categoryDataFind(_data, category);
				if( !changeData ) return;
				thisObj.chartList[_canvasId].data = changeData;
				tabList.removeClass('active');
				$(this).addClass('active');

				//변환시 라벨클릭 안되는것, 제대로 변환 안되는것 수정.
				var chart = thisObj.chartList[_canvasId];
				$("#"+_canvasId+"_legend").empty().html(thisObj.drawCustomLegend(chart));

				thisObj.addCustomLegend(_canvasId);
				chart.update();
			});
		},		
	}
})();

//가운데 센터에 데이터 넣기
Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
			//Get ctx from string
			var ctx = chart.chart.ctx;
			
			//Get options from the center object in options
			var centerConfig = chart.config.options.elements.center;
			var fontStyle = centerConfig.fontStyle || 'Arial';
			var txt = centerConfig.text;
			var color = centerConfig.color || '#000';
			var sidePadding = centerConfig.sidePadding || 20;
			var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
			//Start with a base font of 30px
			ctx.font = "30px " + fontStyle;
			
			//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
			var stringWidth = ctx.measureText(txt).width;
			var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

			// Find out how much the font can grow in width.
			var widthRatio = elementWidth / stringWidth;
			var newFontSize = Math.floor(30 * widthRatio);
			var elementHeight = (chart.innerRadius * 2);

			// Pick a new font size so it will not be larger than the height of label.
			var fontSizeToUse = Math.min(newFontSize, elementHeight);

			//Set font settings to draw it correctly.
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
			var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
			ctx.font = fontSizeToUse+"px " + fontStyle;
			ctx.fillStyle = color;
			
			//Draw text in center
			ctx.fillText(txt, centerX, centerY);
		}
	}
});

//마지막 라벨보이기
Chart.plugins.register({
	afterDatasetsUpdate : function(chart, easing){
		//셀렉트박스 change 데이터 적용.
		if (chart.config.data.isSelect) {
			var chart_id = chart.ctx.canvas.id;
			var select_el = $("#"+chart_id+"_select");
			
			if(select_el.size() == 0) return;

			var data_list = chart.config.data;
			var select_data = select_el.val();
			selectChartData(select_data);

			select_el.on("change", function(){
				selectChartData($(this).val());
			});

			//선택시 이벤트
			function selectChartData(_select_data){
				var initData = ChartUtil.categoryDataFind(data_list, _select_data);
				chart.config.data = initData;
				var legend = $("#"+chart_id+"_legend");
				if( legend.size() == 0 ) return;
				legend.empty().append(ChartUtil.drawCustomLegend(chart));
				
				//Legned 클릭 이벤트연결
				var legendList = $("#"+chart_id+"_legend li");
				
				if( legendList.size() == 0 ) return;
				legendList.removeClass('inactvie');
				ChartUtil.resetDataset(event, chart);
				
				legendList.off("click").on('click', function(event){
					ChartUtil.upDateDataset(event, $(this).attr("data-index"), chart);
					if( $(this).hasClass('inactive')){
						$(this).removeClass("inactive");
					}else{
						$(this).addClass("inactive");
					}
				});	
				chart.update();
			}
		}

		//200226 defaultFontSize 추가 
		if( chart.config.data.defaultFontSize ){
			var fontsize = chart.config.data.defaultFontSize;
			chart.config.options.defaultFontSize = fontsize;
			if( chart.config.type != 'doughnut' ){
		
				if( chart.options.scales.xAxes || chart.options.scales.xAxes[0] ){
					chart.options.scales.xAxes[0].ticks.fontSize = fontsize;
				}
				chart.options.scales.yAxes[0].ticks.fontSize = fontsize;
				if(chart.options.scales.yAxes[1]){
					chart.options.scales.yAxes[1].ticks.fontSize = fontsize;
				}
				chart.options.plugins.datalabels.font = {
					size : fontsize
				}				
			}
		}
	},
	afterDraw: function (chart, easing) {

		//chartText
		if( chart.config.data.chartText ){
			var ctx = chart.chart.ctx;
			var chartText = chart.config.data.chartText;
			var fillStyle = chartText.fillStyle || "#ffffff";
			ctx.fillStyle = fillStyle;
			var fontSize = chartText.fontSize || "12";
			var fontStyle = chartText.fontStyle || "Arial";		
			ctx.font = fontSize+"px " + fontStyle;
			ctx.textAlign = chartText.textAlign || "right";
			ctx.fillText(chartText.text, chart.width, fontSize);
		}		
		//showDataLabel 가 있을시 해당 label data 보여줌.
		if( chart.config.data.showData ){
			var showData = chart.config.data.showData;
			var ctx = chart.chart.ctx;
			var fontSize = showData.fontSize || "12";
			var fontStyle = showData.fontStyle || "Arial";

			ctx.font = fontSize + "px " + fontStyle;
			ctx.textAlign = "center";
			ctx.fillStyle = showData.fillStyle || "#ffffff";

			chart.config.data.datasets.forEach(function (dataset, i) {
				if( dataset.label == showData.label ){
					var points = dataset._meta[chart.id].data;
					for(var i =0;i<points.length;i++){
						var coordination = {
							x : points[i]._model.x,
							y : points[i]._model.y,
						}
						var datatext = dataset.data[i];
						ctx.fillText(datatext, coordination.x, coordination.y-15);	
					}
				}
			});
		}		
		if (chart.config.data.showValue) {
			var showValue = chart.config.data.showValue;
			var width = showValue.valueWidth || 110 ;

			var ctx = chart.chart.ctx;
			var fontSize = showValue.fontSize || "9";
			var fontStyle = showValue.fontStyle || "Arial";

			ctx.font =  fontSize + "px " + fontStyle;
			ctx.textAlign = showValue.textAlign || "left";
			ctx.textBaseline = showValue.textAlign || "middle";
			
			chart.config.data.datasets.forEach(function (dataset, i) {
				ctx.fillStyle = dataset.fontColor || chart.config.options.showValue.textColor || "#000";
				var last = dataset.data.length;
				var coordination = {
					x : dataset._meta[chart.id].data[last-1]._model.x,
					y : dataset._meta[chart.id].data[last-1]._model.y,
				}
				var lastText =  dataset.dataInfo;
				var lines = lastText.split('\n');
				ctx.fillStyle = dataset.borderColor || "#000000";
				ctx.fillRect(coordination.x, coordination.y-(fontSize), width, fontSize*1.8);
				ctx.fillStyle = dataset.fontColor || "#ffffff";
				
				for( var i=0;i<lines.length;i++){
					ctx.fillText(lines[i], coordination.x+5, (i*(fontSize*1.8)) + coordination.y);
				}
				
			});
		}
		//x축에 맞춘 라인그리기
		if(chart.config.options.showPointLine){
			var pointLine = chart.config.data.pointLine;
			var ctx = chart.chart.ctx;
			var dataset = chart.config.data.datasets[0];
			var coordination = {
				x : dataset._meta[chart.id].data[pointLine.lineIndex]._model.x,
				y : dataset._meta[chart.id].data[pointLine.lineIndex]._model.y,
			}
			ctx.beginPath();
			ctx.moveTo(coordination.x, 10);
			ctx.lineTo(coordination.x, chart.height-30);
			ctx.strokeStyle = pointLine.borderColor || "#ff0000";
			ctx.lineWidth = pointLine.borderWidth || 4;
			if( pointLine.lineDashed ){
				ctx.setLineDash([3, 10]);
			}
			ctx.stroke();
			//초기화해줌 (다른 라인에 영향이 감.)
			ctx.setLineDash([0, 0]);
		}		
	}
});