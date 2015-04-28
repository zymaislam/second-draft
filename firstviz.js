
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawHomeless);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawHomeless() {

var homelessCost = new google.visualization.DataTable();
	homelessCost.addColumn('string', '');
	homelessCost.addColumn('number', '');
	//homelessBudget.addColumn({type:'number', role:'annotation'}); // annotation role col.
	

	homelessCost.addRows(costData);

	// Set chart options
	var homelessCostoptions = {//1
		'title' : '',
		'subtitle': 'in thousands of dollars',
		'width' : 800,
		'height' : 500,
		'dataOpacity' : 1.0,
		 'legend':'left',
		 'hAxis': { ticks: [10000,20000,30000]
}

		
		
	};

	// Instantiate and draw our chart, passing in some options.
	var homelessCostchart = new google.visualization.BarChart(document.getElementById('compare_div'));
	homelessCostchart.draw(	homelessCost, homelessCostoptions);
}

google.setOnLoadCallback(drawCost);

function drawCost() {

var ticketCost = new google.visualization.DataTable();
	ticketCost.addColumn('string', '');
	ticketCost.addColumn('number', '');
	//homelessBudget.addColumn({type:'number', role:'annotation'}); // annotation role col.
	

	ticketCost.addRows(ticketData);

	// Set chart options
	var ticketCostoptions = {//1
		'title' : '',
		'subtitle': 'in thousands of dollars',
		'width' : 800,
		'height' : 500,
		'dataOpacity' : 1.0,
		 'legend':'left',
		 


		
		
	};

	// Instantiate and draw our chart, passing in some options.
	var ticketCostchart = new google.visualization.BarChart(document.getElementById('ticket_div'));
	ticketCostchart.draw(ticketCost, ticketCostoptions);
}

