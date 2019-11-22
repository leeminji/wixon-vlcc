var lineChartData_0 = {
    datasets: [
        {
            label: 'DATE',
            borderWidth : 3,
            borderColor: ChartUtil.colors.skyblue,
            backgroundColor: ChartUtil.colors.skyblue,
            pointRadius: 3,
            fill: false,
            data: [
                {
                    x : "01/01/2014",
                    y : 25000
                },
                {
                    x : "02/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "07/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "08/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "09/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "10/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "11/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "12/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "13/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "14/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "15/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "16/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "17/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	

                },
                {
                    x : "25/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "26/01/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "1/02/2014",
                    y : 20000
                },
                {
                    x : "20/02/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "1/03/2014",
                    y : 36000
                },
                {
                    x : "3/03/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "5/03/2014",
                    y :ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "10/03/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "1/04/2014",
                    y : 28000
                },
                {
                    x : "28/04/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "1/05/2014",
                    y : 30000
                },
                {
                    x : "15/05/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "20/05/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
                {
                    x : "1/06/2014",
                    y : 45000
                },
                {
                    x : "2/06/2014",
                    y : ChartUtil.randomData(10000, 60000)	
                },
            ],
            lineTension : 0,
        },
        {
            label: 'MONTH',
            borderWidth : 2,
            borderColor: ChartUtil.colors.white_op5,
            backgroundColor: ChartUtil.colors.white_op5,
            pointRadius : 10,
            pointHoverRadius: 20,
            pointBorderWidth :1,
            fill: false,
            data: [
                {
                    x : "01/01/2014",
                    y : 25000
                },
                {
                    x : "01/02/2014",
                    y : 20000
                },
                {
                    x : "01/03/2014",
                    y : 36000
                },
                {
                    x : "01/04/2014",
                    y : 28000
                },
                {
                    x : "01/05/2014",
                    y : 30000	
                },
                {
                    x : "01/06/2014",
                    y : 45000	
                },

            ],
            lineTension : 0,				
        },				
    ]
};


var lineChartData_1 = {
    labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
    datasets: [{
        label: 'in trade',
        borderWidth : 2,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
            ChartUtil.randomData(710, 750),
        ],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    }, {
        label: 'TCE(RHS)',
        borderWidth : 4,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
            ChartUtil.randomData(20000, 35000),
        ],
        yAxisID: 'y-axis-2',
        lineTension : 0,
    }]
};

var lineChartData_2 = {
    labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
    datasets: [{
        label: 'Drydock',
        borderWidth : 3,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue_op5,
        pointRadius: 2,
        fill: true,
        data: [50,55,30,40,50,60,70,80,90,70,50],
        lineTension : 0,
    }, {
        label: 'Floating Storage',
        borderWidth : 3,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white_op5,
        pointRadius: 2,
        fill: true,
        data: [20,30,50,60,45,30,20,10,20,10,22],
        lineTension : 0,
    }]
};

var lineChartData_3 = {
    datalist : [
        {
            category : 'world',
            labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
            datasets: [{
                label: '2018',
                borderWidth : 2,
                borderColor: ChartUtil.colors.blue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }, {
                label: '2019',
                borderWidth : 2,
                borderColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'waf',
            labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
            datasets: [{
                label: '2018',
                borderWidth : 2,
                borderColor: ChartUtil.colors.blue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }, {
                label: '2019',
                borderWidth : 2,
                borderColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'revers',
            labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
            datasets: [{
                label: '2018',
                borderWidth : 2,
                borderColor: ChartUtil.colors.blue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }, {
                label: '2019',
                borderWidth : 2,
                borderColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'west',
            labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
            datasets: [{
                label: '2018',
                borderWidth : 2,
                borderColor: ChartUtil.colors.blue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }, {
                label: '2019',
                borderWidth : 2,
                borderColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'ag',
            labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
            datasets: [{
                label: '2018',
                borderWidth : 2,
                borderColor: ChartUtil.colors.blue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }, {
                label: '2019',
                borderWidth : 2,
                borderColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                    ChartUtil.randomData(7000, 8000),
                ],
                lineTension : 0,
            }]
        }
    ]
};

var lineChartData_4 = {
    labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
    datasets: [{
        label: 'CEST',
        borderWidth : 2,
        borderColor: ChartUtil.colors.white,
        pointRadius: 2,
        fill: false,
        data: [14,13.5,15,12,10,15,12,11,10,15],
        lineTension : 0,
    }, {
        label: 'CMES',
        borderWidth : 2,
        borderColor: ChartUtil.colors.blue,
        pointRadius: 2,
        fill: false,
        data: [14.2,13,15,12,11,12,13,14,10,15],
        lineTension : 0,
    },{
        label: 'TI',
        borderWidth : 2,
        borderColor: ChartUtil.colors.green,
        pointRadius: 2,
        fill: false,
        data: [14.2,12,10,10,12,12,14,14,10,15.5],
        lineTension : 0,
    },{
        label: 'CMES',
        borderWidth : 2,
        borderColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [11.2,12,14,13,12,12,13.2,14,10,15],
        lineTension : 0,
    },{
        label: 'CMES',
        borderWidth : 2,
        borderColor: ChartUtil.colors.darkgray,
        pointRadius: 2,
        fill: false,
        data: [11.2,13,12.2,10,11,12,16,14,10,15],
        lineTension : 0,
    }]
};

var lineChartData_5 = {
    labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
    datasets: [{
        label: 'HSFO',
        borderWidth : 2,
        borderColor: ChartUtil.colors.green,
        pointRadius: 2,
        fill: false,
        data: [600,601,602,590,580,585,590,600,605,602,603],
        lineTension : 0,
    }, {
        label: 'LSFO',
        borderWidth : 2,
        borderColor: ChartUtil.colors.blue,
        pointRadius: 2,
        fill: false,
        data: [550,551,552,550,560,585,590,500,555,552,553],
        lineTension : 0,
    },{
        label: 'MGO',
        borderWidth : 2,
        borderColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [400,401,402,430,480,485,490,400,405,402,390],
        lineTension : 0,
    }]
};

var lineChartData_6 = {
    labels: ['oct', 'nov', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'sep', 'aug'],
    datasets: [{
        borderWidth : 3,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue_op5,
        pointRadius: 2,
        fill: true,
        data: [3,3.5,3.6,4,3.5,2.5,2.8,3,3.5,3,2.5],
        lineTension : 0,
    }]
};

