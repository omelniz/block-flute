// Отчет времени
define([	
	'moment'
], 


function () {	

var Timer = function (el) {
	var timer;
	this.el = el;
	

	this.start = function (fn, duration, param) {	
		if (!timer) {	
			this.startTime = new Date();
			timer = setInterval(fn, duration, param);
		}
	};

	this.stop = function () {		
		clearInterval(timer);						
	};

	this.startCountTime = function (el) {		
		this.start(this.countTime, 1000, [this, el]);			
	};

	this.countTime = function (param) {		
		var now = new Date(),
			time,
			self = param[0],
			el = param[1];

		time = now - self.startTime;

		timeString = moment(time).format("mm:ss");				

		if (el) {
			$(el).text(timeString);
		}
		else {
			console.log(timeString);
		}
	};
};

return Timer;

});