import sketch from './sketch';

export default class Example {
  constructor() {
    sketch.colorMode(sketch.HSB, 360, 100, 100);
    sketch.noStroke();

    this.h = 0;
  }

  update() {
    this.h = sketch.frameCount % 360;
  }

  draw() {
    sketch.fill(this.h, 100, 100);
    sketch.rect(0, 0, sketch.width, sketch.height);
  }
}
