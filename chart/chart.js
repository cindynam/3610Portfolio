let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

var fruit = [
  { name: "Strawberry", quantity: 15, color: "#df4b3b" },
  { name: "Peach", quantity: 10, color: "#e98d6e" },
  { name: "Banana", quantity: 25, color: "#f7dd41" },
  { name: "Pear", quantity: 10, color: "#bed32e" },
  { name: "Grape", quantity: 20, color: "#be4dbe" }
];

for (let i = 0; i < fruit.length; i++) {
  c.fillStyle = fruit[i].color;
  c.fillRect(i * 140, 350, 130, -fruit[i].quantity * 10);
  c.font = "16px Sans-serif";
  c.textAlign = "center";
  c.fillStyle = "black";
  c.fillText(fruit[i].name, i * 140 + 130 / 2, 370);
  c.fillText(
    fruit[i].quantity,
    i * 140 + 130 / 2,
    330 + fruit[i].quantity * -10
  );
}

c.font = "25px Sans-serif";
c.fillStyle = "black";
c.fillText("Cindy Nam", 63, 30);
