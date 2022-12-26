const recog = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
recog.continuous = false;
recog.lang = "en-US";
recog.interimResults = false;

let canvas = document.getElementById("circle");
let c = canvas.getContext("2d");
let button = document.getElementById("button");

button.addEventListener("click", () => {
    if (button.innerHTML === "Start Listening") {
        button.innerHTML = "Stop Listening";
        recog.start();
    } else if (button.innerHTML === "Stop Listening") {
        button.innerHTML = "Start Listening";
        recog.stop();
    }
});

respond = (message) => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
};

var color = "White";
var radius = 100;

const render = () => {
    console.log(color + " " + radius);
    c.beginPath();
    c.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI, false);
    c.fillStyle = color;
    c.fill();
    c.stroke();
};

render();

recog.onspeechend = () => {
    button.innerHTML = "Start Listening";
    recog.stop();
};

recog.onresult = (e) => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    button.innerHTML = "Start Listening";
    let message = e.results[0][0].transcript.replace(/\s/g, "").toLowerCase();
    console.log(message);
    switch (true) {
        case +message < 10:
            respond("Size too small, the minimum size is 10");
            break;

        case +message > 300:
            respond("Size too big, the limit is 300");
            break;

        case +message >= 10 && +message <= 300:
            respond(`Size changed to ${message}`);
            radius = message;
            break;

        case colors.includes(message):
            respond(`Color changed to ${message}`);
            color = message;
            break;

        case message === "help":
            respond(
                "Say a color to change the circle's color or say a number between 10 and 300 to change it's size"
            );
            break;

        default:
            respond(
                "Sorry, I don't understand. Please try again or say help for assistance"
            );
    }
    render();
};

var colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgrey",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgrey",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "transparent",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
];
