const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
            
           

        }
      
    }
}); 

// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         title:{
//             text: "Crude Oil Reserves vs Production, 2016"
//         },	
//         axisY: {
//             title: "Runs Per Over",
//             titleFontColor: "#4F81BC",
//             lineColor: "#4F81BC",
//             labelFontColor: "#4F81BC",
//             tickColor: "#4F81BC"
//         },
//         axisY2: {
//             title: "Millions of Barrels/day",
//             titleFontColor: "#C0504E",
//             lineColor: "#C0504E",
//             labelFontColor: "#C0504E",
//             tickColor: "#C0504E"
//         },	
//         toolTip: {
//             shared: true
//         },
//         legend: {
//             cursor:"pointer",
//             itemclick: toggleDataSeries
//         },
//         data: [{
//             type: "column",
//             name: "Proven Oil Reserves (bn)",
//             legendText: "Proven Oil Reserves",
//             showInLegend: true, 
//             dataPoints:[
//                 { label: "Saudi", y: 266.21 },
//                 { label: "Venezuela", y: 302.25 },
//                 { label: "Iran", y: 157.20 },
//                 { label: "Iraq", y: 148.77 },
//                 { label: "Kuwait", y: 101.50 },
//                 { label: "UAE", y: 97.8 }
//             ]
//         },
//         {
//             type: "column",	
//             name: "Oil Production (million/day)",
//             legendText: "Oil Production",
//             axisYType: "secondary",
//             showInLegend: true,
//             dataPoints:[
//                 { label: "Saudi", y: 10.46 },
//                 { label: "Venezuela", y: 2.27 },
//                 { label: "Iran", y: 3.99 },
//                 { label: "Iraq", y: 4.45 },
//                 { label: "Kuwait", y: 2.92 },
//                 { label: "UAE", y: 3.1 }
//             ]
//         }]
//     });
//     chart.render();
    
//     function toggleDataSeries(e) {
//         if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         }
//         else {
//             e.dataSeries.visible = true;
//         }
//         chart.render();
//     }
    
//     }


