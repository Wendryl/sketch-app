import { Canvas } from "./src/Canvas.js";
import { Cursor } from "./src/Cursor.js";

const canvas = new Canvas(document.querySelector('canvas'));
const cursor = new Cursor();

window.updateWidth = function (event) {
  cursor.width = event.target.value;
}

document.addEventListener('mousemove', e => {
  cursor.draw(e, canvas.ctx);
});

document.addEventListener('pointermove', e => {
  cursor.draw(e, canvas.ctx);
});

document.addEventListener('mousedown', e => {
  cursor.startDrawing(e, canvas.ctx)
});

document.addEventListener('pointerdown', e => {
  cursor.startDrawing(e, canvas.ctx)
});

document.addEventListener('mouseup', _e => {
  cursor.stopDrawing(canvas.ctx)
});

document.addEventListener('pointerup', _e => {
  cursor.stopDrawing(canvas.ctx)
});

document.addEventListener('keypress', e => {
  if (e.key == 'C') {
    canvas.clear();
  }
});
