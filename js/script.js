// d3.select('.item:nth-child(2)')
	// .text('this item is selected');

// d3.selectAll('.item:nth-child(even)')
// 	.html('<strong>all are selected</strong>');

// d3.selectAll('.item:nth-child(2)')
// 	.append('div')
// 	.html('<strong>we have appeneded</strong.')

// d3.select('#container')
// 	.insert('div', ':nth-child(3)')
// 	.html('This has been added');


// d3.select("#container .item:nth-child(3)")
// 	.remove();


// d3.select(".item:nth-child(2)")
// 	.attr('class', 'newClass');

// d3.select(".item:nth-child(2)")
// 	.classed('newClass anotherClass', true)
// 	.classed('item', false)


// d3.select(".item:nth-child(2)")
// 	.style("color", "green")
// 	.style("background-color", "#3498db")


// d3.selectAll(".item")
// 	.data([true, true, false])
// 	.style("background-color", "#1abc9c");

var data = [
	{
		color: "#1abc9c",
		width: 200,
		title: "Item 1"
	},
	{
		color: "#e74c3c",
		width: 220,
		title: "Item 2"
	},
	{
		color: "#f1c40f",
		width:240,
		title: "Item 3"
	},
	{
		color: "#8e44ad",
		width: 260,
		title: "Item 4"
	},
	{
		color: "#2ecc71",
		width: 280,
		title: "Item 5"
	},
	{
		color: "#bdc3c7",
		width: 300,
		title: "Item 6"
	}
];
// d3.selectAll(".item")
// 	.data(styles)
// 	.style("background-color", function(d){
// 		return d.color
// 	})
// 	.style("width", function(d){
// 		return d.width+"px"
// 	})

d3.selectAll("#container").selectAll(".item")
	.data(data)
	.enter().append('div')
	.classed('item', true)
	.text(function(d){
		return d.title
	})
	.style("background-color", function(d){
		return d.color
	})
	.style("width", function(d){
		return d.width+"px"
	}).exit()













