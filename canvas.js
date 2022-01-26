// we get the height of the div where we want to mount the canvas (see CSS classes)
const canvasSize = document.querySelector(".art").clientHeight;

// we create a function that accepts a p5 instance (called p5instance here) as a parameter, and attaches a setup method to it
const sketch = (p5instance) => {
  p5instance.setup = function () {
    //  we create a canvas with the exact same dimensions as our HTML div
    p5instance.createCanvas(canvasSize, canvasSize);
  };
};

// we create a new p5 instance, and pass in the sketch function as a callback, and the id of the div as a mounting point (see CSS Ids)
new p5(sketch, "shapes");
