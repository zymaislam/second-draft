google.load("visualization", "1", {
	packages: ["corechart"]
});
google.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() { //fcb

      var data = google.visualization.arrayToDataTable(dhsData);
      	
     data.addColumn('string', 'ID');
     	data.addColumn('number', 'Cost');
	data.addColumn('number', 'Percentage of people of the total');
	data.addColumn('number', 'Population receiving shelter');
	 data.addColumn('string', 'Legend');
 

	var options = {//scb
		chartArea :{
			height: 800,
			width: 300
		},
		title : 'How can Project Reconnect help decrease costs?',
		hAxis : {//tcb 
			title : 'Homeless population sleeping in the city shelter system',
			ticks: [0,45000000]},//tcb
		vAxis : {//tcb
			title : 'Money spent on sheltering the homeless in dollars',
			//ticks: [250000000, 337500000, 450000000]
			},//tcb
		bubble : {stroke:'grey',
		opacity: 0.2},
		
		
		colors : ['#bad80a','#045FB4'],
		sizeAxis: {minSize:20,  maxSize: 60}
		
	};//scb

	var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
	chart.draw(data, options);
}