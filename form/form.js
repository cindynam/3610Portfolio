function draw() {
  document.getElementById("name").style.color = document.getElementById(
    "text-color"
  ).value;
  document.getElementById(
    "name"
  ).style.backgroundColor = document.getElementById("bg-color").value;
  document.getElementById("name").style.fontSize =
    document.getElementById("font-size").value + "px";

  var radios = document.forms["form"].elements["font"];

  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      document.getElementById("name").style.fontFamily = this.value;
    };
  }
}
