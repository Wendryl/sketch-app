import { Canvas } from "./src/Canvas.js";
import { Cursor } from "./src/Cursor.js";

const canvasElement = document.querySelector('canvas');
const canvas = new Canvas(canvasElement);
const cursor = new Cursor();

window.updateWidth = function (event) {
  cursor.width = event.target.value;
}

canvasElement.addEventListener('mousemove', e => {
  cursor.draw(e, canvas.ctx);
});

canvasElement.addEventListener('pointermove', e => {
  cursor.draw(e, canvas.ctx);
});

canvasElement.addEventListener('mousedown', e => {
  cursor.startDrawing(e, canvas.ctx)
});

canvasElement.addEventListener('pointerdown', e => {
  cursor.startDrawing(e, canvas.ctx)
});

canvasElement.addEventListener('mouseup', _e => {
  cursor.stopDrawing(canvas.ctx)
});

canvasElement.addEventListener('pointerup', _e => {
  cursor.stopDrawing(canvas.ctx)
});

document.addEventListener('keypress', e => {
  if (e.key == 'C') {
    canvas.clear();
  }
});
