$(function() {
	var myChart = echarts.init(document.getElementById('echarts1'));
	var xAxisData = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	var legendData = ['在线数'];
	var title = "多横向折线图";
	var serieData = [];
	var metaDate = [
		[120, 140, 100, 120, 300, 230, 130, 170, 140, 120, 300, 230],

	]
	for(var v = 0; v < legendData.length; v++) {
		var serie = {
			name: legendData[v],
			type: 'line',
			symbol: "circle",
			symbolSize: 10,
			data: metaDate[v]
		};
		serieData.push(serie)
	}
	var colors = ["#036BC8", "#4A95FF", "#5EBEFC", "#2EF7F3", "#FFFFFF"];
	var option = {
		legend: {
			show: true,
			left: "right",
			data: legendData,
			y: "5%",
			itemWidth: 18,
			itemHeight: 12,
			textStyle: {
				color: "#fff",
				fontSize: 14
			},
		},
		color: colors,
		grid: {
			left: '2%',
			top: "12%",
			bottom: "5%",
			right: "5%",
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: true,
				lineStyle: {
					color: '#6173A3'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#9ea7c4',
					fontSize: 14
				}
			},
			axisTick: {
				show: false
			},
			data: xAxisData,
		}, ],
		yAxis: [{
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#9ea7c4',
					fontSize: 14
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#6173A3'
				}
			},
		}, ],
		series: serieData
	};
	myChart.setOption(option);

	//echarts2
	var myChart2 = echarts.init(document.getElementById('echarts2'));
	const radius = {
		pie: '55%',
		doughnut: ['40%', '55%'],
		rose: ['20%', '55%']
	};

	let data = [{
			value: 400,
			name: '公共交通工具'
		},
		{
			value: 335,
			name: '旅店宾馆类'
		},
		{
			value: 310,
			name: '文化服务场所'
		},
		{
			value: 274,
			name: '公共服务场所'
		},
		{
			value: 235,
			name: '购物场所'
		}
	];

	let type = 'rose'; // pie doughnut

	function getOption() {
		return {
			color: ['#b34020', '#d95132', '#ff6347', '#ff8170', '#ffa199'],
			grid: {
				top: 46,
				left: 16,
				right: 16,
				bottom: 16,
				containLabel: true
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b} : {c} ({d}%)',
				backgroundColor: '#000'
			},
			//			legend: {
			//				data: data.map(item => item.name)
			//			},
			series: [{
				type: 'pie',
				radius: radius[type],
				center: ['50%', '50%'],
				data: data,
				roseType: type === 'rose' ? 'radius' : void 0,

				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function(idx) {
					return Math.random() * 200;
				}
			}]
		};
	}

	let types = ['rose', 'doughnut', 'pie'];
	let i = 0;

	setInterval(function() {
		type = types[(i++) % 3];
		option = getOption();
		myChart2.setOption(option);
	}, 1000);
	//echarts3
	var myChart3 = echarts.init(document.getElementById('echarts3'));
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['顺德', '龙岗', '天河', '增城', '越秀', '白云', '黄埔'],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1,
				}
			}
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1,
				}
			}
		}],
		series: [{
			name: '认证数',
			type: 'bar',
			barWidth: 18,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#00b0ff'
					}, {
						offset: 0.8,
						color: '#7052f4'
					}], false)
				}
			},
			data: [254, 3254, 1654, 2454, 4757, 2011, 1211]
		}]

	};
	myChart3.setOption(option);

	//echarts4
	var myChart4 = echarts.init(document.getElementById('echarts4'));
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['QQ', '微信', '手机', '微博', '其他'],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1,
				}
			}
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					width: 1,
				}
			}
		}],
		series: [{
			name: '认证数',
			type: 'bar',
			barWidth: 18,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#00b0ff'
					}, {
						offset: 0.8,
						color: '#7052f4'
					}], false)
				}
			},
			data: [3254, 1654, 2454, 4757, 2011]
		}]

	};
	myChart4.setOption(option);

	//water_percent_1
	var water_percent_1 = echarts.init(document.getElementById('water_percent_1'));
	var option = {
		series: [{
			direction: 'right',
			center: ['40%', '60%'],
			type: 'liquidFill',
			data: [0.48, 0.5, 0.4, 0.3],
			itemStyle: {
				shadowBlur: 0
			},
			radius: '100%',
		}],
	};
	water_percent_1.setOption(option);

	//water_percent_2
	var water_percent_2 = echarts.init(document.getElementById('water_percent_2'));
	var option = {
		series: [{
			direction: 'left',
			center: ['40%', '60%'],
			type: 'liquidFill',
			data: [0.98, 0.5, 0.4, 0.3],
			itemStyle: {
				shadowBlur: 0
			},
			radius: '100%',
		}],
	};
	water_percent_2.setOption(option);

	//echarts5
	var myChart5 = echarts.init(document.getElementById('echarts5'));
	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'rect',
			itemWidth: 14,
			itemHeight: 5,
			itemGap: 13,
			data: ['心跳'],
			right: '4%',
			textStyle: {
				fontSize: 12,
				color: '#292f39'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#6173A3'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#9ea7c4',
					fontSize: 14
				}
			},
			data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35']
		}],
		yAxis: [{
			type: 'value',
			name: '单位（%）',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#6173A3'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#9ea7c4',
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B'
				}
			}
		}],
		series: [{
			name: '移动',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'rgba(16,97,204, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(17,235,210, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {

					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'rgba(16,97,204,1)'
					}, {
						offset: 1,
						color: 'rgba(17,235,210,1)'
					}])
				},
				emphasis: {
					color: 'rgb(0,196,132)',
					borderColor: 'rgba(0,196,132,0.2)',
					extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
					borderWidth: 10
				}
			},
			data: [20, 18, 19, 13, 15, 12, 11, 12]
		}]
	};
	myChart5.setOption(option);

	//middle_top
	var middle_top = echarts.init(document.getElementById('middle_top'));
	var uploadedDataURL = "./json/guangdong.json";
	//var uploadedDataURL = "./json/data-1507621331560-H1nRFl53b.json";

	$.getJSON(uploadedDataURL, function(geoJson) {
		echarts.registerMap('guangdong', geoJson);
		myChart.hideLoading();
		var geoCoordMap = {
			"广州市": [113.5107, 23.2196],
			"韶关市": [113.7964, 24.7028],
			"清远市": [112.9175, 24.3292],

			"湛江市": [110.3577, 20.9894],
			"梅州市": [116.1255, 24.1534],
			"河源市": [114.917, 23.9722],

			"肇庆市": [112.1265, 23.5822],
			"惠州市": [114.6204, 23.1647],
			"茂名市": [111.0059, 22.0221],

			"江门市": [112.6318, 22.1484],
			"阳江市": [111.8298, 22.0715],
			"云浮市": [111.7859, 22.8516],

			"汕尾市": [115.5762, 23.0438],
			"揭阳市": [116.1255, 23.313],
			"珠海市": [113.7305, 22.1155],

			"佛山市": [112.8955, 23.1097],
			"潮州市": [116.7847, 23.8293],
			"汕头市": [117.1692, 23.3405],

			"深圳市": [114.5435, 22.5439],
			"东莞市": [113.8953, 22.901],
			"中山市": [113.4229, 22.478],

		}
		var data = [
		{
				name: '深圳市',
				value: 4119
			},
			{
				name: '东莞市',
				value: 9371
			},
			{
				name: '中山市',
				value: 26943 
			},
			{
				name: '佛山市',
				value: 33161 
			},
			{
				name: '潮州市',
				value: 6799
			},
			{
				name: '汕头市',
				value: 581
			},
			{
				name: '汕尾市',
				value: 344
			},
			{
				name: '揭阳市',
				value: 1234
			},
			{
				name: '珠海市',
				value: 10036
			},
			{
				name: '江门市',
				value: 4470
			},
			{
				name: '阳江市',
				value: 5117 
			},
			{
				name: '云浮市',
				value: 1177 
			},
			{
				name: '肇庆市',
				value: 1835 
			},
			{
				name: '惠州市',
				value: 8143 
			},
			{
				name: '茂名市',
				value: 3318 
			},
			{
				name: '清远市',
				value: 15087 
			},
			{
				name: '广州市',
				value: 49614
			},
			{
				name: '韶关市',
				value: 2997
			},
			{
				name: '湛江市',
				value: 2954 
			},
			{
				name: '梅州市',
				value: 2455 
			},
			{
				name: '河源市',
				value: 1145
			},

		];
		var max = 480,
			min = 9; // todo 
		var maxSize4Pin = 100,
			minSize4Pin = 20;

		var convertData = function(data) {
			var res = [];
			for(var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if(geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
					});
				}
			}
			return res;
		};

		option = {
			tooltip: {
				trigger: 'item',
				formatter: function(params) {
					if(typeof(params.value)[2] == "undefined") {
						return params.name + ' : ' + params.value;
					} else {
						return params.name + ' : ' + params.value[2];
					}
				}
			},
			//			legend: {
			//				orient: 'vertical',
			//				y: 'bottom',
			//				x: 'right',
			//				data: ['credit_pm2.5'],
			//				textStyle: {
			//					color: '#fff'
			//				}
			//			},
			visualMap: {
				show: false,
				min: 500,
				max: 40000,
				left: 'left',
				top: 'bottom',
				text: ['高', '低'], // 文本，默认为数值文本
				calculable: true,
				seriesIndex: [1],
				inRange: {
					//color: ['#1488CC', '#2B32B2'] // 浅蓝
					//					color:['#94f100d9','#fbf305d9','#fb0505']
										color: ['#42B8FA','#138CDB', '#253F76','blue']
				}
			},
			geo: {
				show: true,
				map: 'guangdong',
				label: {
					normal: {
						show: false //直接显示所有城市
					},
					emphasis: {
						show: false, //鼠标移上去显示城市
					}
				},
				roam: true, //可以拖动
				itemStyle: {
					normal: {
						areaColor: 'rgba(247, 253, 255, 0.88)',
						borderColor: '#FFD700',
					},
					emphasis: {
						areaColor: '#2B91B7',
					}
				}
			},
			series: [{
					name: '游客',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: convertData(data),
					//					symbolSize: function(val) {
					//						return val[2] / 100;
					//					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ffffffc2'
						}
					}
				},
				{ //数量颜色
					type: 'map',
					map: 'guangdong',
					geoIndex: 0,
					aspectScale: 0.75, //长宽比
					showLegendSymbol: true, // 存在legend时显示
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					roam: true,
					itemStyle: {
						normal: {
							areaColor: '#031525',
							borderColor: '#3B5077',
						},
						emphasis: {
							areaColor: '#2B91B7'
						}
					},
					animation: true,
					data: data
				},
				//				{
				//					name: '点',
				//					type: 'scatter',
				//					coordinateSystem: 'geo',
				//					symbol: 'pin',
				//					symbolSize: function(val) {
				//						var a = (maxSize4Pin - minSize4Pin) / (max - min);
				//						var b = minSize4Pin - a * min;
				//						b = maxSize4Pin - a * max;
				//						return a * val[2] + b;
				//					},
				//					label: {
				//						normal: {
				//							show: false,
				//							textStyle: {
				//								color: '#fff',
				//								fontSize: 9,
				//							}
				//						}
				//					},
				//					itemStyle: {
				//						normal: {
				//							color: '#5FB878', //标志颜色
				//						}
				//					},
				//					zlevel: 6,
				//					data: convertData(data),
				//				},
				//				{
				//					name: 'Top 5',
				//					type: 'effectScatter',
				//					coordinateSystem: 'geo',
				//					data: convertData(data.sort(function(a, b) {
				//						return b.value - a.value;
				//					}).slice(0, 5)),
				//					symbolSize: function(val) {
				//						return val[2] / 10;
				//					},
				//					showEffectOn: 'render',
				//					rippleEffect: {
				//						brushType: 'stroke'
				//					},
				//					hoverAnimation: true,
				//					label: {
				//						normal: {
				//							formatter: '{b}',
				//							position: 'right',
				//							show: true
				//						}
				//					},
				//					itemStyle: {
				//						normal: {
				//							color: '#05C3F9',
				//							shadowBlur: 10,
				//							shadowColor: '#05C3F9'
				//						}
				//					},
				//					zlevel: 1
				//				},

			]
		};

		middle_top.setOption(option);
	});

	//	middle_top.setOption(option);
	//	setTimeout(function() {
	//		window.onresize = function() {
	//			myChart.resize();
	//			myChart2.resize();
	//			myChart3.resize();
	//			myChart4.resize();
	//			myChart5.resize();
	//			middle_top.resize();
	//			water_percent_1.resize();
	//			water_percent_2.resize();
	//		}
	//	}, 200)
})