// we get the height of the div where we want to mount the canvas (see CSS classes)
const canvasSize = document.querySelector(".art").clientHeight; // 600 px

// we create a function that accepts a p5 instance (called p5instance here) as a parameter, and attaches a setup method to it
const sketch = (p5instance) => {
  p5instance.setup = function () {
    //  we create a canvas with the exact same dimensions as our HTML div
    p5instance.createCanvas(canvasSize, canvasSize);
    // we add a shape to the canvas
    p5instance.background("#62c9c4"); // set bg color
    p5instance.fill(0); // set  fill
    let x = p5instance.random(0, canvasSize); // set random point on the x axis
    let y = p5instance.random(0, canvasSize); // set random point on the y axis
    let width = p5instance.random(0, 50); // set random width
    let height = p5instance.random(0, 50); // set random height
    p5instance.ellipse(x, y, width, height); // creat an instance of an ellipse with the coordinated and measures we set above
  };
};

// we create a new p5 instance, and pass in the sketch function as a callback, and the id of the div as a mounting point (see CSS Ids)
new p5(sketch, "shapes");

// we create a function that randomizes colors
const getRandomColorHex = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
