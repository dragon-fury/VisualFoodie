var radar = (function() {

	RadarChart.defaultConfig.radius = 3;
	RadarChart.defaultConfig.w = 400;
	RadarChart.defaultConfig.h = 400;
	RadarChart.defaultConfig.color = function(){};

	return {
		renderRadar: function(data) {
			RadarChart.draw("#spider-chart", data);
		}
	};
})();