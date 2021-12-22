// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
            
           

//         }
      
//     }
// }); 

// // window.onload = function () {

// //     var chart = new CanvasJS.Chart("chartContainer", {
// //         animationEnabled: true,
// //         title:{
// //             text: "Crude Oil Reserves vs Production, 2016"
// //         },	
// //         axisY: {
// //             title: "Runs Per Over",
// //             titleFontColor: "#4F81BC",
// //             lineColor: "#4F81BC",
// //             labelFontColor: "#4F81BC",
// //             tickColor: "#4F81BC"
// //         },
// //         axisY2: {
// //             title: "Millions of Barrels/day",
// //             titleFontColor: "#C0504E",
// //             lineColor: "#C0504E",
// //             labelFontColor: "#C0504E",
// //             tickColor: "#C0504E"
// //         },	
// //         toolTip: {
// //             shared: true
// //         },
// //         legend: {
// //             cursor:"pointer",
// //             itemclick: toggleDataSeries
// //         },
// //         data: [{
// //             type: "column",
// //             name: "Proven Oil Reserves (bn)",
// //             legendText: "Proven Oil Reserves",
// //             showInLegend: true, 
// //             dataPoints:[
// //                 { label: "Saudi", y: 266.21 },
// //                 { label: "Venezuela", y: 302.25 },
// //                 { label: "Iran", y: 157.20 },
// //                 { label: "Iraq", y: 148.77 },
// //                 { label: "Kuwait", y: 101.50 },
// //                 { label: "UAE", y: 97.8 }
// //             ]
// //         },
// //         {
// //             type: "column",	
// //             name: "Oil Production (million/day)",
// //             legendText: "Oil Production",
// //             axisYType: "secondary",
// //             showInLegend: true,
// //             dataPoints:[
// //                 { label: "Saudi", y: 10.46 },
// //                 { label: "Venezuela", y: 2.27 },
// //                 { label: "Iran", y: 3.99 },
// //                 { label: "Iraq", y: 4.45 },
// //                 { label: "Kuwait", y: 2.92 },
// //                 { label: "UAE", y: 3.1 }
// //             ]
// //         }]
// //     });
// //     chart.render();
    
// //     function toggleDataSeries(e) {
// //         if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// //             e.dataSeries.visible = false;
// //         }
// //         else {
// //             e.dataSeries.visible = true;
// //         }
// //         chart.render();
// //     }
    
// //     }

$(function() {
    "use strict";
    // ------------------------------
    // Basic bar chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
        var myChart = echarts.init(document.getElementById('basic-bar'));

        // specify chart configuration item and data
        var option = {
                // Setup grid
                grid: {
                    left: '1%',
                    right: '2%',
                    bottom: '3%',
                    containLabel: true
                },

                // Add Tooltip
                tooltip : {
                    trigger: 'axis'
                },

                legend: {
                    data:['Bangladesh','Pakistan']
                },
                toolbox: {
                    show : true,
                    feature : {

                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                color: ["#ff0000", "#02055A"],
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['0','1','2','4','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'Bangladesh',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: 'Max'},
                                {type : 'min', name: 'Min'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: 'Average'}
                            ]
                        }
                    },
                    {
                        name:'Pakistan',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : 'The highest year', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : 'Year minimum', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : 'Average'}
                            ]
                        }
                    }
                ]
            };
        // use configuration item and data specified to show chart
        myChart.setOption(option);
    
    
    // ------------------------------
    // Stacked bar chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
        var stackedChart = echarts.init(document.getElementById('stacked-bar'));

        // specify chart configuration item and data
        var option = {
                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // Axis indicator axis trigger effective
                        type : 'shadow'        // The default is a straight line, optionally: 'line' | 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['Direct access', 'Email marketing', 'Advertising alliance', 'Video ads', 'Search Engine']
                },

                // Add custom colors
                color: ['#2962FF', '#4fc3f7', '#212529', '#f62d51', '#dadada'],

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }],

                // Add series
                series : [
                    {
                        name:'Direct access',
                        type:'bar',
                        stack: 'Total',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'Email marketing',
                        type:'bar',
                        stack: 'Total',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'Advertising alliance',
                        type:'bar',
                        stack: 'Total',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'Video ads',
                        type:'bar',
                        stack: 'Total',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'Search Engine',
                        type:'bar',
                        stack: 'Total',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
        // use configuration item and data specified to show chart
        stackedChart.setOption(option);
       
    
        //***************************
       // Stacked chart
       //***************************
        
        
        //***************************
       // Stacked Area chart
       //***************************
        var stackedbarcolumnChart = echarts.init(document.getElementById('stacked-column'));
        var option = {
            
             // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // Axis indicator axis trigger effective
                        type : 'shadow'        // The default is a straight line, optionally: 'line' | 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: [  'Video', 'Search engine', 'Google', 'Safari', 'Opera', 'Firefox']
                },

                // Add custom colors
                color: ['#2962FF', '#4fc3f7', '#212529', '#f62d51', '#dadada'],

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                }],

                // Add series
                series : [
                    
                    {
                        name:'Video',
                        type:'bar',
                        stack: 'advertising',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'Search engine',
                        type:'bar',
                        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine : {
                            itemStyle:{
                                normal:{
                                    lineStyle:{
                                        type: 'dashed'
                                    }
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'Google',
                        type:'bar',
                        barWidth : 12,
                        stack: 'search engine',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name:'Safari',
                        type:'bar',
                        stack: 'search engine',
                        data:[120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                        name:'Opera',
                        type:'bar',
                        stack: 'search engine',
                        data:[60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                        name:'Firefox',
                        type:'bar',
                        stack: 'search engine',
                        data:[62, 82, 91, 84, 109, 110, 120]
                    }
                ]
                // Add series
                
        };
        stackedbarcolumnChart.setOption(option);
        
    // ------------------------------
    // Basic line chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
        var barbasicChart = echarts.init(document.getElementById('bar-basic'));

        var option = {

             // Setup grid
                grid: {
                    x: 60,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['2017', '2018']
                },

                // Add custom colors
                color: ['#2962FF', '#4fc3f7'],

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    data: ['Apple', 'Samsung', 'HTC', 'Nokia', 'Sony', 'LG']
                }],

                // Add series
                series : [
                    {
                        name:'2017',
                        type:'bar',
                        data:[600, 450, 350, 268, 474, 315]
                    },
                    {
                        name:'2018',
                        type:'bar',
                        data:[780, 689, 468, 174, 436, 482]
                    }
                ]
        };
        // use configuration item and data specified to show chart
        barbasicChart.setOption(option);
    
    
       //------------------------------------------------------
       // Resize chart on menu width change and window resize
       //------------------------------------------------------
        $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".sidebartoggler").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Resize chart
                        myChart.resize();
                        stackedChart.resize();
                        stackedbarcolumnChart.resize();
                        barbasicChart.resize();
                    }, 200);
                }
            });
});


