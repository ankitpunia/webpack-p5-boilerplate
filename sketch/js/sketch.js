// In order to suppress the ESLint errors (Should only be used in the main sketch.js file)
/* eslint new-cap: ["error", { "newIsCapExceptions": ["p5"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-env browser */

// Import modules
import p5 from 'p5';
import Example from './example';

export default new p5((sketch) => {
  let example;

  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight);

    // Add your code here
    example = new Example();
  };

  sketch.draw = () => {
    // Add your code here

    example.update();
    example.draw();
  };

  sketch.mouseDragged = () => {
    // Add your code here
  };

  sketch.keyPressed = (key) => {
    if (key === '') {
      // Add your code here
    }
  };
});
