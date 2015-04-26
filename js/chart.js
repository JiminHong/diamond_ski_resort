//create variables
var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlable = 0;
var valueMultiplier = 0;

//create a document ready statement
$(document).ready(function(){

	//setting the global variables
	window.chartHeight = Number($(".chart-area").height());
	window.barWidth = $(".chart-area .chart-bar").width();
	window.highestYlable = Number($(".chart-y-axis p").first().html());
	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
	window.chartScale = chartHeightArea/window.highestYlable;
	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));

	animateChart();
	positionBars();
});

function positionBars(){
	//create a function that will position the bars
	$(".chart-area .chart-bar").each(function(index){
		var barPosition = (window.barWidth * index) + (window.barSpacing * index) + window.barSpacing;
		$(this).css("left", barPosition + "px");

		//add text to bar and axis
		$(this).html("<p>"+$(this).attr("bar-value") + "°F</p>");

		//x-axis
		$('.chart-x-axis').append('<p style="left:'+(barPosition - (window.barWidth/2)) + 'px;">' + $(this).attr('label')+'</p>');

		//relative height of bars
		var barValue = Number($(this).attr("bar-value"));

		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYlable;
		}
	})

}

//create a new function that will animate our chart

function animateChart(){
	//get each bar to animate to its proper height
	$(".chart-area .chart-bar").each(function(index){
		//height relative to chart 
		var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;

		//create a variable for delay
		var newDelay = 125*index;

		//Animate the bar
		$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
			//fadein our <p> tags
			$(this).children("p").delay(500).fadeIn(250);
		});
	});
}

