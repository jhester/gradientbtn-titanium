Easy Gradient Buttons - Titanium
===
This Alloy widget and custom controller allows for quick creation of decent looking gradient buttons, just specify a base gradient color from which the gradient is calculated from. The button is touch responsive, going a shade darker onTouch. All other button styles and events are also supported.

Everything needed to run in Alloy is included in the `widgets` folder. For use in regular Titanium, just include `GradientButton.js` inside your `Resources` folder. Examples for both are included. 
![image](https://raw.githubusercontent.com/jhester/gradientbtn-titanium/master/screen.png)
####Alloy Example
Include this in your XML view file:

	<Widget id="btn1" src="GradientButton" buttonBackgroundColor="#EA6A20" title="Button One" top="50dp"/>

Access and use it just like any other button.

####Vanilla Titanium Example
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