let writeColor = function () {
	console.log(`color = ${this.color}`);
}

let o = {
	color: 'blue',
	outputColor: writeColor
};

o.outputColor();
writeColor();
