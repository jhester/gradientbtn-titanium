// Containing window
var win = Ti.UI.createWindow({
    navBarHidden : true,
    backgroundColor : "#ffffff",
    height : Ti.UI.FILL,
    width : Ti.UI.FILL,
    layout : 'vertical'
});

// Require gradient button
var GradientButton = require('GradientButton');

// Create buttons
var btn1 = new GradientButton("Button One", "#EA6A20");
btn1.top = '50dp';
var btn2 = new GradientButton("Button Two", "#522D80");
btn2.top = '20dp';
var btn3 = new GradientButton("Button Three", "#109dc0");
btn3.top = '20dp';

// Add event listeners just like a regular button
function buttonListener(e) {
   alert('Button clicked'); 
}
btn1.addEventListener('click', buttonListener);
btn2.addEventListener('click', buttonListener);
btn3.addEventListener('click', buttonListener);

// Add to window
win.add(btn1);
win.add(btn2);
win.add(btn3);
win.open();