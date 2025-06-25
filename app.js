let numberInShape = 1;
const button = document.getElementById("button");

button.onclick = () => {
  const n = Number(document.getElementById("number").value);
  const circle = document.getElementById("circle");
  const square = document.getElementById("square");
  const rectangle = document.getElementById("rectangle");
  const box = document.getElementById("box");

  if (!circle.checked && !square.checked && !rectangle.checked) {
    alert("Please select a shape!");
    return;
  }

  if (n <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  for (let j = 0; j < n; j++) {
    const shape = document.createElement("div");

    if (square.checked) shape.classList.add("square");
    else if (circle.checked) shape.classList.add("circle");
    else if (rectangle.checked) shape.classList.add("rectangle");

    box.appendChild(shape);
    numberInShape++;
  }

  document.getElementById("number").value = "";
};