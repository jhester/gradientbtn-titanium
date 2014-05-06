var shadeColor = function(color, percent) {
    var num = parseInt(color.slice(1), 16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};

function GradientButton(title, color) {
    // Programmatically assign a gradient for the login / logout buttons
    // We create a gradient by taking the section background property color, and darkening it, and lightening it, for two sides of a gradient
    var colorstart = shadeColor(color, -10);
    var colorend = shadeColor(color, 10);
    var btngradient = {
        type : 'linear',
        startPoint : {
            x : 0,
            y : 0
        },
        endPoint : {
            x : 0,
            y : '100%'
        },
        colors : [{
            color : colorend,
            offset : 0.0
        }, {
            color : colorstart,
            offset : 1.0
        }]
    };
   
    var btngradientclick = {
        type : 'linear',
        startPoint : {
            x : 0,
            y : 0
        },
        endPoint : {
            x : 0,
            y : '100%'
        },
        colors : [{
            color : shadeColor(color, -10),
            offset : 0.0
        }, {
            color : shadeColor(color, -20),
            offset : 1.0
        }]
    };
    var self = Ti.UI.createButton({
        title : title,
        backgroundGradient: btngradient,
        font : {
            fontFamily : 'Arial',
            fontWeight : 'bold',
            fontSize : '15dp'
        },
        width : "300dp",
        height : "45dp",
        borderRadius : 4,
        style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    });
    self.addEventListener('touchstart', function(e) {
        self.backgroundGradient = btngradientclick;
    });
    self.addEventListener('touchend', function(e) {
        self.backgroundGradient = btngradient;
    });
    self.addEventListener('touchcancel', function(e) {
        self.backgroundGradient = btngradient;
    });
    return self;
}

module.exports = GradientButton;