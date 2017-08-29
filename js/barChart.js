// var barData = [52,12,45,300,100,200,52,12,45,74,100,200,20];
var barData = [];
for (var i = 0; i < 50; i++) {
	barData.push(Math.random()*100);
};

var barWidth = 50,
	barOffSet = 5,
	width = 1000,
	height = 600;

var yScale = d3.scaleLinear()
	.domain([0, d3.max(barData)])
	.range([0, height])

var xScale = d3.scaleBand()
	.domain(d3.range(0, barData.length))
	.range([0, width])

// var colour = d3.scaleLinear()
// 	.domain([0, d3.max(barData)])
// 	.range(["#3498db", "#e74c3c"])

var colour = d3.scaleLinear()
	.domain([0, barData.length*0.33, barData.length*0.66, barData.length])
	.range(["#3498db", "#27ae60", "#f1c40f", "#e74c3c"])

d3.select("#container")
	.append('svg')
		.attr("width", width)
		.attr("height", height)
		.style("background-color", "#7f8c8d")
		.style("margin-top", "10px")
		.selectAll("rect")
			.data(barData)
			.enter().append('rect')
			// .style("fill", colour)
			.style("fill", function(data, i){
				return(colour(i))
			})
			.attr("width", xScale.bandwidth()+"px")
			.attr("height", function(data){
				return yScale(data)
			})
			.attr("x", function(data, i){
				return xScale(i)
			})
			.attr("y", function(data){
				return height - yScale(data)
			}).on('mouseover', function(data){
				d3.select(this)
					.style("opacity", 0.5)
			}).on('mouseout', function(data){
				d3.select(this)
					.style("opacity", 1)
			}).on('click', function(data){
				document.getElementById("value").innerText=data
				console.log(data);
			}).exit();
















// d3.select("#chart")
// 	.append('svg')
// 		.attr("width", width)
// 		.attr("height", height)
// 		.style("background-color", "#7f8c8d")
// 		.style("margin-top", "10px")
// 		.selectAll("rect")
// 			.data(barData)
// 			.enter().append('rect')
// 			.style("fill", "#d35400")
// 			.attr("height", barWidth)
// 			.attr("width", function(data){
// 				return data
// 			})
// 			.attr("y", function(data, i){
// 				return i * (barWidth+barOffSet);
// 			})
// 			.attr("x",0)
// 			.exit();

