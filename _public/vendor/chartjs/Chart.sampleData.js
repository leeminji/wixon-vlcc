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

var lineChartData_7 = {
    labels: ['PROMPT', '1-3', '4-6', '7-9', '10-12', '13-15', '16-18', '19-21'],
    datasets: [
        {
            label: 'OPEN',
            backgroundColor: ChartUtil.colors.darkblue,
            borderColor: ChartUtil.colors.darkblue,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        }, 
        {
            label: 'OPEN(HANDICAP)',
            borderColor: ChartUtil.colors.blue,
            fillOpacity: 0,
            borderWidth : 3,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        }, 
        {
            label: 'SUB',
            backgroundColor: ChartUtil.colors.darkgray,
            borderColor: ChartUtil.colors.darkgray,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        },
        {
            label: 'PROJECT',
            backgroundColor: ChartUtil.colors.gray,
            borderColor: ChartUtil.colors.gray,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        },
        {
            label: 'BALLASTING TO WEST',
            backgroundColor: ChartUtil.colors.royalblue,
            borderColor: ChartUtil.colors.royalblue,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        },
        {
            label: 'OPEN SOON',
            backgroundColor: ChartUtil.colors.yellowgreen,
            borderColor: ChartUtil.colors.yellowgreen,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        },
        {
            label: 'OPEN SOON(HANDICAP)',
            borderColor: ChartUtil.colors.olive,
            borderWidth : 3,
            data: [
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
                ChartUtil.randomData(-5, 12),
            ]
        },
    ]

};

var lineChartData_8 = {
    labels: ['1-10 MAY', '11-20 MAY', '21-31 MAY', '1-10 JUN', '11-20 JUN', '21-30 JUN'],
    datasets: [
        {
            label: 'Spot',
            backgroundColor: ChartUtil.colors.navy,
            borderColor: ChartUtil.colors.navy,
            data: [
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
            ]
        }, 
        {
            label: 'Project',
            backgroundColor: ChartUtil.colors.darkgray,
            borderColor: ChartUtil.colors.darkgray,
            data: [
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
            ]
        }, 
    ]
};

var lineChartData_9 = {
    datalist : [
        {
            category : 'ws',
            labels: ['1-MAY', '11-MAY', '21-MAY', '01-JUN', '10-JUN', '20-JUN', '30-JUN'],
            datasets: [{
                label: 'AG/USG',
                borderWidth : 3,
                borderColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                ],
                lineTension : 0,
            }, {
                label: 'AG/SPORE',
                borderWidth : 3,
                borderColor: ChartUtil.colors.darkgray,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                ],
                lineTension : 0,
            }, {
                label: 'AG/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.royalblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'tce',
            labels: ['1-MAY', '11-MAY', '21-MAY', '01-JUN', '10-JUN', '20-JUN', '30-JUN'],
            datasets: [{
                label: 'AG/USG',
                borderWidth : 3,
                borderColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                    ChartUtil.randomData(10,25),
                ],
                lineTension : 0,
            }, {
                label: 'AG/SPORE',
                borderWidth : 3,
                borderColor: ChartUtil.colors.darkgray,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                    ChartUtil.randomData(35, 50),
                ],
                lineTension : 0,
            }, {
                label: 'AG/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.royalblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                    ChartUtil.randomData(40, 55),
                ],
                lineTension : 0,
            }]
        },
    ]
};


var lineChartData_10 = {
    labels: ['1-Nov', '3', '5', '7', '9', '12', '14', '16', '18', '20', '22'],
    datasets: [{
        label: 'MEG-USG',
        borderWidth : 2,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 2,
        fill: false,
		data: [ 80, 100, 20, 30, 60, 60, 70, 70, 88,90, 85],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    },
    {
        label: 'MEG-SPORE ',
        borderWidth : 2,
        borderColor: ChartUtil.colors.royalblue,
        backgroundColor: ChartUtil.colors.royalblue,
        pointRadius: 2,
        fill: false,
		data: [
            ChartUtil.randomData(80, 100),
            ChartUtil.randomData(90, 105),
            ChartUtil.randomData(10, 25),
            ChartUtil.randomData(20, 35),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(60, 75),
            ChartUtil.randomData(60, 80),
            ChartUtil.randomData(70, 90),
            ChartUtil.randomData(60, 90),
            ChartUtil.randomData(70, 100),
            ChartUtil.randomData(70, 85),
        ],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    },
    {
        label: 'MEG-CHINA',
        borderWidth : 2,
        borderColor: ChartUtil.colors.green,
        backgroundColor: ChartUtil.colors.green,
        pointRadius: 2,
        fill: false,
		data: [
            ChartUtil.randomData(80, 100),
            ChartUtil.randomData(90, 105),
            ChartUtil.randomData(10, 25),
            ChartUtil.randomData(20, 35),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(60, 75),
            ChartUtil.randomData(60, 80),
            ChartUtil.randomData(70, 90),
            ChartUtil.randomData(60, 90),
            ChartUtil.randomData(70, 100),
            ChartUtil.randomData(70, 85),
        ],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    },
    {
        label: 'WAF-CHINA',
        borderWidth : 2,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
		data: [
            ChartUtil.randomData(80, 100),
            ChartUtil.randomData(90, 105),
            ChartUtil.randomData(10, 25),
            ChartUtil.randomData(20, 35),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(60, 75),
            ChartUtil.randomData(60, 80),
            ChartUtil.randomData(70, 90),
            ChartUtil.randomData(60, 90),
            ChartUtil.randomData(70, 100),
            ChartUtil.randomData(70, 85),
        ],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    },
    {
        label: 'USG-CHINA',
        borderWidth : 2,
        borderColor: ChartUtil.colors.darkgray,
        backgroundColor: ChartUtil.colors.darkgray,
        pointRadius: 2,
        fill: false,
		data: [
            ChartUtil.randomData(80, 100),
            ChartUtil.randomData(90, 105),
            ChartUtil.randomData(10, 25),
            ChartUtil.randomData(20, 35),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(50, 65),
            ChartUtil.randomData(60, 75),
            ChartUtil.randomData(60, 80),
            ChartUtil.randomData(70, 90),
            ChartUtil.randomData(60, 90),
            ChartUtil.randomData(70, 100),
            ChartUtil.randomData(70, 85),
        ],
        yAxisID: 'y-axis-1',
        lineTension : 0,
    }]
};


var lineChartData_11 = {
    labels: ['1-Jul', '3', '5', '7', '9', '12', '14', '16', '18', '20'],
    datasets: [{
        label: 'Laden',
        borderWidth : 2,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
        ],
        lineTension : 0,
    }, {
        label: 'Ballast',
        borderWidth : 3,
        borderColor: ChartUtil.colors.gray,
        backgroundColor: ChartUtil.colors.gray,
        pointRadius: 3,
        fill: false,
        data: [
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
            ChartUtil.randomData(11, 14),    
        ],
        lineTension : 0,
    }]
};


var lineChartData_12 = {
    datalist : [
        {
            category : 'LSFO',
            labels: ['', '', '', '', '', '', '', '', '', '', '','','',''],
            datasets: [{
                label: 'Spore',
                borderWidth : 3,
                borderColor: ChartUtil.colors.green,
                backgroundColor: ChartUtil.colors.green,
                pointRadius: 3,
                fill: false,
                data: [
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                ],
                lineTension : 0,
            }, {
                label: 'Fujairah',
                borderWidth : 3,
                borderColor: ChartUtil.colors.royalblue,
                backgroundColor: ChartUtil.colors.royalblue,
                pointRadius: 3,
                fill: false,
                data: [
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                ],
                lineTension : 0,
            },{
                label: 'Rotterdam',
                borderWidth : 3,
                borderColor: ChartUtil.colors.skyblue,
                backgroundColor: ChartUtil.colors.skyblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                ],
                lineTension : 0,
            },{
                label: 'Houston',
                borderWidth : 3,
                borderColor: ChartUtil.colors.gray,
                backgroundColor: ChartUtil.colors.gray,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'HSFO',
            labels: ['', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
                label: 'Spore',
                borderWidth : 3,
                borderColor: ChartUtil.colors.green,
                backgroundColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                ],
                lineTension : 0,
            }, {
                label: 'Fujairah',
                borderWidth : 3,
                borderColor: ChartUtil.colors.royalblue,
                backgroundColor: ChartUtil.colors.royalblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                ],
                lineTension : 0,
            },{
                label: 'Rotterdam',
                borderWidth : 3,
                borderColor: ChartUtil.colors.skyblue,
                backgroundColor: ChartUtil.colors.skyblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                ],
                lineTension : 0,
            },{
                label: 'Houston',
                borderWidth : 3,
                borderColor: ChartUtil.colors.gray,
                backgroundColor: ChartUtil.colors.gray,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                ],
                lineTension : 0,
            }]
        },
        {
            category : 'SPREAD',
            labels: ['', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
                label: 'Spore',
                borderWidth : 3,
                borderColor: ChartUtil.colors.green,
                backgroundColor: ChartUtil.colors.green,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                    ChartUtil.randomData(500, 620),
                ],
                lineTension : 0,
            }, {
                label: 'Fujairah',
                borderWidth : 3,
                borderColor: ChartUtil.colors.royalblue,
                backgroundColor: ChartUtil.colors.royalblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                    ChartUtil.randomData(850, 750),
                ],
                lineTension : 0,
            },{
                label: 'Rotterdam',
                borderWidth : 3,
                borderColor: ChartUtil.colors.skyblue,
                backgroundColor: ChartUtil.colors.skyblue,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                    ChartUtil.randomData(450, 560),
                ],
                lineTension : 0,
            },{
                label: 'Houston',
                borderWidth : 3,
                borderColor: ChartUtil.colors.gray,
                backgroundColor: ChartUtil.colors.gray,
                pointRadius: 2,
                fill: false,
                data: [
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                    ChartUtil.randomData(550, 700),
                ],
                lineTension : 0,
            }]
        },
    ]
};

var lineChartData_13 = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [{
        label: 'Laden',
        borderWidth : 3,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
            ChartUtil.randomData(40, 60),
        ],
        lineTension : 0,
    }, {
        label: 'Ballast',
        borderWidth : 3,
        borderColor: ChartUtil.colors.green,
        backgroundColor :  ChartUtil.colors.green,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
            ChartUtil.randomData(140, 90),
        ],
        lineTension : 0,
    }]
};

var lineChartData_14 = {
    labels: ['2-FEB', '5-FEB', '8-FEB', '11-FEB', '14-FEB', '17-FEB', '20-FEB', '23-FEB', '26-FEB'],
    datasets: [{
        label: 'Handicap',
        borderWidth : 3,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue_op5,
        pointRadius: 2,
        fill: true,
        data: [
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
            ChartUtil.randomData(6, 0),
        ],
        lineTension : 0,
    }, {
        label: 'Non-handicap',
        borderWidth : 3,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.green_op2,
        pointRadius: 2,
        fill: true,
        data: [
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
            ChartUtil.randomData(12, 3),
        ],
        lineTension : 0,
    }, {
        label: '-',
        borderWidth : 4,
        borderColor: ChartUtil.colors.royalblue,
        backgroundColor : ChartUtil.colors.royalblue,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
            ChartUtil.randomData(15, 12),
        ],
        lineTension : 0,
    }]
};

var lineChartData_15 = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [{
        label: 'CHINA',
        borderWidth : 0,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(5, 7),
            ChartUtil.randomData(5, 7),
            ChartUtil.randomData(5, 9),
            ChartUtil.randomData(5, 9),
            ChartUtil.randomData(5, 9),
            ChartUtil.randomData(5, 7),
        ],
        lineTension : 0,
    }, {
        label: 'NINGBO',
        borderWidth : 0,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(0, 9),
            ChartUtil.randomData(0, 9),
            ChartUtil.randomData(0, 9),
            ChartUtil.randomData(0, 9),
            ChartUtil.randomData(0, 9),
            ChartUtil.randomData(0, 9),
        ],
        lineTension : 0,
    }, {
        label: 'SHANDONG',
        borderWidth : 0,
        borderColor: ChartUtil.colors.green,
        backgroundColor : ChartUtil.colors.green,
        pointRadius: 0,
        fill: false,
        data: [
            ChartUtil.randomData(3, 6.5),
            ChartUtil.randomData(3, 6.5),
            ChartUtil.randomData(3, 6.5),
            ChartUtil.randomData(3, 6.5),
            ChartUtil.randomData(3, 6.5),
            ChartUtil.randomData(3, 6.5),
        ],
        lineTension : 0,
    }]
};

var lineChartData_16 = {
    datasets: [{
        borderWidth : [3,3],
        borderColor : ChartUtil.colors.green,
        data: [
            ChartUtil.randomData(1, 100),
            ChartUtil.randomData(1, 100),
        ],
        backgroundColor: [
            ChartUtil.colors.gray,
            ChartUtil.colors.skyblue,
        ]
    }],
    labels: [
        'Ballast',
        'Loaded'
    ]
};

var lineChartData_17 = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [{
        label: 'Laden',
        borderWidth : 4,
        borderColor: ChartUtil.colors.skyblue,
        backgroundColor: ChartUtil.colors.skyblue,
        pointRadius: 2,
        fill: false,
        data: [
            ChartUtil.randomData(7000, 9500),
            ChartUtil.randomData(7000, 9500),
            ChartUtil.randomData(7000, 9500),
            ChartUtil.randomData(7000, 9500),
            ChartUtil.randomData(7000, 9500),
            ChartUtil.randomData(7000, 9500),
        ],
        lineTension : 0,
    }]
};


var lineChartData_18 = {
    labels: ['JAN-17', '', 'MAR-17','',  'SEP-17', '', 'JAN-18','',  'MAY-18','',  'SEP-18'],
    datasets: [{
        label: 'Laden VLCCs Leaving US Gulf',
        borderWidth : 0,
        borderColor: ChartUtil.colors.blue,
        backgroundColor: ChartUtil.colors.blue,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),            
        ],
        lineTension : 0,
    }, {
        label: 'Laden VLCCs Arriving US Gulf',
        borderWidth : 0,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),            
        ],
        lineTension : 0,
    }]
};



var lineChartData_19 = {
    labels: ['14-NOV', '','11-NOV', '','9-NOV', '','5-NOV', '','3-NOV', '','1-NOV',''],
    datasets: [
        {
            label: 'MEG/CHINA',
            backgroundColor: ChartUtil.colors.navy,
            borderColor: ChartUtil.colors.navy,
            data: [
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
            ]
        }, 
        {
            label: 'OTHERS',
            backgroundColor: ChartUtil.colors.darkgray,
            borderColor: ChartUtil.colors.darkgray,
            data: [
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
                ChartUtil.randomData(0, 20),
            ]
        }, 
    ]
};


var lineChartData_20 = {
    datalist : [
        {
            category : 'WS',
            labels: ['1-MAY', '', '11-MAY', '','21-MAY', '','01-JUN', '', '10-JUN', '', '20-JUN', '', '30-JUN'],
            datasets: [{
                label: 'WAF/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.navy,
                backgroundColor: ChartUtil.colors.navy,
                pointRadius: 2,
                fill: false,
                data: [40,45,50,47,46,45,40,35,45,40,35,45,50],
                lineTension : 0,
            },
            {
                label: 'MEG/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.darkblue,
                backgroundColor: ChartUtil.colors.darkblue,
                pointRadius: 2,
                fill: false,
                data: [35,40,45,42,41,40,35,30,40,35,30,40,45],
                lineTension : 0,
            },
            {
                label: 'AG/USG',
                borderWidth : 3,
                borderColor: ChartUtil.colors.white,
                backgroundColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [15,16,18,10,11,16,13,13,16,13,13,12,17],
                lineTension : 0,
            }]
        },
        {
            category : 'TCE',
            showValue : {
                "fontSize" : 12,
                "fontStyle" : "Roboto Condensed",
                "valueWidth" : 110
            },
            labels: ['1-MAY', '', '11-MAY', '','21-MAY', '','01-JUN', '', '10-JUN', '', '20-JUN', '', '30-JUN'],
            datasets: [{
                label: 'AG/SPORE',
                borderWidth : 3,
                borderColor: ChartUtil.colors.navy,
                fontColor: ChartUtil.colors.white,
                backgroundColor : ChartUtil.colors.navy,
                pointRadius: 2,
                fill: false,
                data: [
                    36500,37000,35000,35500,35600,37000,35000,37500, 37000,35000,37500,36000,35500
                ],
                lineTension : 0,
                dataInfo : 'SCRUBBER-FITTED'
            },
            {
                label: 'MEG/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.darkblue,
                backgroundColor: ChartUtil.colors.darkblue,
                fontColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [36400,36000,34000,34500,34600,35000,34000,36500, 35000,34000,36500,35000,32500 ],
                lineTension : 0,
                dataInfo : 'SCRUBBER FITTED',
            },
            {
                label: 'AG/SPORE',
                borderWidth : 3,
                borderColor: ChartUtil.colors.navy,
                backgroundColor: ChartUtil.colors.navy,
                fontColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [33400,33000,32000,32500,32600,33000,33000,33500, 33000,33000,33500,32000,28500 ],
                lineTension : 0,
                dataInfo : 'NON SCRUBBER',
                hideLegend : false,
            },
            {
                label: 'MEG/CHINA',
                borderWidth : 3,
                borderColor: ChartUtil.colors.darkblue,
                backgroundColor: ChartUtil.colors.darkblue,
                fontColor: ChartUtil.colors.white,
                pointRadius: 2,
                fill: false,
                data: [32400,32000,31000,31500,31600,32000,32000,32500, 32000,32000,32500, 31000,25500 ],
                lineTension : 0,
                dataInfo : 'NON SCRUBBER',
                hideLegend : false,
            },
            {
                label: 'AG/USG',
                borderWidth : 3,
                borderColor: ChartUtil.colors.white,
                backgroundColor: ChartUtil.colors.white,
                fontColor:ChartUtil.colors.black,
                pointRadius: 2,
                fill: false,
                data: [10000,13000,12000,12500,12600,13000,13000,13500, 12000,13000,13500, 12000,12500 ],
                lineTension : 0,
                dataInfo : 'SCRUBBER-FITTED'
            },
            {
                label: 'AG/USG',
                borderWidth : 3,
                borderColor: ChartUtil.colors.white,
                backgroundColor: ChartUtil.colors.white,
                fontColor: ChartUtil.colors.black,
                pointRadius: 2,
                fill: false,
                data: [9000,11000,11000,11500,11600,12000,12500,12500, 11000,12500,12500, 11000, 9500 ],
                lineTension : 0,
                dataInfo : 'NON SCRUBBER',
                hideLegend : false,
            }]
        }
    ]
 };


 var lineChartData_21 = {
    labels: ['JAN-17', '', 'MAR-17','',  'SEP-17', '', 'JAN-18','',  'MAY-18','',  'SEP-18'],
    datasets: [{
        label: 'Laden VLCCs Leaving UKC',
        borderWidth : 0,
        borderColor: ChartUtil.colors.blue,
        backgroundColor: ChartUtil.colors.blue,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),            
        ],
        lineTension : 0,
    }, {
        label: 'Laden VLCCs Arriving UKC',
        borderWidth : 0,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),            
        ],
        lineTension : 0,
    }]
};


var lineChartData_22 = {
    labels: ['JAN-17', '', 'MAR-17','',  'SEP-17', '', 'JAN-18','',  'MAY-18','',  'SEP-18'],
    datasets: [{
        label: 'Laden VLCCs Leaving US Gulf',
        borderWidth : 0,
        borderColor: ChartUtil.colors.blue,
        backgroundColor: ChartUtil.colors.blue,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(5, 25),
            ChartUtil.randomData(0, 25),            
        ],
        lineTension : 0,
    }, {
        label: 'Laden VLCCs Arriving US Gulf',
        borderWidth : 0,
        borderColor: ChartUtil.colors.white,
        backgroundColor: ChartUtil.colors.white,
        pointRadius: 0,
        fill: true,
        data: [
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),
            ChartUtil.randomData(2, 25),            
        ],
        lineTension : 0,
    }]
};