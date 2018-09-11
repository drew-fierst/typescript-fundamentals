var writeColor = function () {
    console.log("color = " + this.color);
};
var o = {
    color: 'blue',
    outputColor: writeColor
};
o.outputColor();
writeColor();
