window.onload = function () {

var chart = new CanvasJS.Chart("chartContainerOne", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainerTwo", {
	theme: "light1", // "light1", "ligh2", "dark1", "dark2"
	animationEnabled: true,
	title: {
		text: "Company Finance"
	},
	axisY: {
		title: "Amount (in USD)",
		prefix: "$",
		suffix: "k",
		lineThickness: 0,
		includeZero: true
	},
	data: [{
		type: "waterfall",
		indexLabel: "{y}",
		indexLabelFontColor: "#EEEEEE",
		indexLabelPlacement: "inside",
		yValueFormatString: "#,##0k",
		dataPoints: [
			{ label: "Sales",  y: 1273 },
			{ label: "Service", y: 623 },
			{ label: "Total Revenue", isIntermediateSum: true},
			{ label: "Research", y: -150 },
			{ label: "Marketing",  y: -226 },
			{ label: "Salaries", y: -632 },
			{ label: "Operating Income", isCumulativeSum: true },
			{ label: "Taxes",  y: -264 },
			{ label: "Net Income",  isCumulativeSum: true }
		]
	}]
});
chart.render();


var chart = new CanvasJS.Chart("chartContainerThree", {
	animationEnabled: true,  
	title:{
		text: "Music Album Sales by Year"
	},
	axisY: {
		title: "Units Sold",
		valueFormatString: "#0,,.",
		suffix: "mn",
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]
	},
	data: [{
		yValueFormatString: "#,### Units",
		xValueFormatString: "YYYY",
		type: "spline",
		dataPoints: [
			{x: new Date(2002, 0), y: 2506000},
			{x: new Date(2003, 0), y: 2798000},
			{x: new Date(2004, 0), y: 3386000},
			{x: new Date(2005, 0), y: 6944000},
			{x: new Date(2006, 0), y: 6026000},
			{x: new Date(2007, 0), y: 2394000},
			{x: new Date(2008, 0), y: 1872000},
			{x: new Date(2009, 0), y: 2140000},
			{x: new Date(2010, 0), y: 7289000},
			{x: new Date(2011, 0), y: 4830000},
			{x: new Date(2012, 0), y: 2009000},
			{x: new Date(2013, 0), y: 2840000},
			{x: new Date(2014, 0), y: 2396000},
			{x: new Date(2015, 0), y: 1613000},
			{x: new Date(2016, 0), y: 2821000},
			{x: new Date(2017, 0), y: 2000000}
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainerFour", {
	animationEnabled: true,
	title: {
		text: "Desktop Search Engine Market Share - 2016"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 79.45, label: "Google"},
			{y: 7.31, label: "Bing"},
			{y: 7.06, label: "Baidu"},
			{y: 4.91, label: "Yahoo"},
			{y: 1.26, label: "Others"}
		]
	}]
});
chart.render();



}


