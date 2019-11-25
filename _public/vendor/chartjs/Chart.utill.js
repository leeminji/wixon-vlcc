var ChartUtil = (function(){
	return {
		font : "'Roboto Condensed' , 'Noto Sans KR', 'sans-serif'",
		chartList : [],
		colors : {
			red: 'rgb(255, 99, 132)',
			orange: 'rgb(255, 154, 99)',
			yellow: 'rgb(255, 205, 86)',
			green: 'rgb(65, 255, 204)',
			green_op5: 'rgba(65, 255, 204, 0.5)',
			yellowish : 'rgb(151,211,188)',
			purple: 'rgb(153, 102, 255)',
			grey: 'rgb(201, 203, 207)',
			skyblue: 'rgb(23, 186, 205)',
			skyblue_op5: 'rgba(23, 186, 205, 0.5)',
			black : 'rgb(0,0,0)',
			blue : 'rgb(0,119,230)',
			blue_op5 : 'rgba(0,119,230,0.5)',
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
			navy : 'rgb(56,99,131)',
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
		initLineChart : function(_canvasId, _data, _stepSize, _tabCateogoryInit){
			var thisObj =this;
			var initData = _data;
			if( _tabCateogoryInit > -1 ){
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
		initLineChartWhite : function(_canvasId, _data, _stepSize){
			var thisObj =this;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
				legend : false,
				legendCallback : function(_chart){
					return thisObj.drawCustomLegend(_chart);
				},
				responsive: true,
				maintainAspectRatio: false,
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
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : _data,
				options: _options
			});

			this.addCustomLegend(_canvasId);
		},
		initLineChartMulti : function(_canvasId, _data, _stepSizeLeft, _stepSizeRight){
			var thisObj =this;
			var canvas = document.getElementById(_canvasId);
			if( !canvas ) return;
			var ctx = canvas.getContext('2d');
			var _options = {
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
					xAxes : [
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
								},
								fontFamily : window.ChartUtil.font,
							},
							//x축에 해당하는 모든선
							gridLines : {
								lineWidth: 1,
								display : true,
								color : window.ChartUtil.colors.white_op2
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
								userCallback: function(value, index, values) {
									value = value.toString();
									value = value.split(/(?=(?:...)*$)/);
									value = value.join(',');
									return value;
								},
								fontWeight : 600
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
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "line",
				data : _data,
				options: _options
			});
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
				_options.maintainAspectRatio = _ratio;
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
				_options.maintainAspectRatio = _ratio;
			}
			thisObj.chartList[_canvasId] = new Chart(ctx, {
				type : "horizontalBar",
				data : initData,
				options: _options
			});

			this.addCustomLegend(_canvasId);
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
			legendList.on('click', function(){
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
			text.push('<ul class="' + chart.id + '-legend">');
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
				if( item.category == _category ){
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
				thisObj.chartList[_canvasId].update();
			});
		},		
	}
})();

