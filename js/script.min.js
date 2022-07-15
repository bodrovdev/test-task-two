const weightSlider = document.getElementById('slider-weight');
const stageSlider = document.getElementById('slider-stages');

noUiSlider.create(weightSlider, {
	range: {
		'min': [0],
		'12.5%': [320],
		'25%': [470],
		'37.5%': [620],
		'50%': [770],
		'62.5%': [920],
		'75%': [1220],
		'87.5%': [1370],
		'max': [1520]
	},
	tooltips: true,
	connect: [true, false],
	format: {
		to: function (value) {
			return Math.floor(value)
		},
		from: function (value) {
			return Math.floor(value)
		}
	},
	start: 0,
	pips: {
		mode: 'range',
		density: 3
	}
});

noUiSlider.create(stageSlider, {
	range: {
		'min': [0],
		'4%': [1],
		'8%': [2],
		'12%': [3],
		'16%': [4],
		'20%': [5],
		'24%': [6],
		'28%': [7],
		'32%': [8],
		'36%': [9],
		'40%': [10],
		'44%': [11],
		'48%': [12],
		'52%': [13],
		'56%': [14],
		'60%': [15],
		'64%': [16],
		'68%': [17],
		'72%': [18],
		'76%': [19],
		'80%': [20],
		'84%': [21],
		'88%': [22],
		'92%': [23],
		'96%': [24],
		'max': [25]
	},
	tooltips: true,
	connect: [true, false],
	format: {
		to: function (value) {
			return Math.floor(value)
		},
		from: function (value) {
			return Math.floor(value)
		}
	},
	start: 0,
	pips: {
		mode: 'range',
		density: 3
	}
});
