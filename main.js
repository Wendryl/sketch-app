import { Canvas } from "./src/Canvas.js";
import { Cursor, CursorModes } from "./src/Cursor.js";

const canvasElement = document.querySelector('canvas');
const canvas = new Canvas(canvasElement);
const cursor = new Cursor();

window.updateWidth = function (event) {
  cursor.width = event.target.value;
}

window.updateColor = function (event) {
  cursor.color = event.target.value;
}

window.exportImage = function() {
  const link = document.createElement('a');
  const extension = document.querySelector('#export-options').value;
  link.download = `sketch-${Date.now()}.${extension}`;
  link.href = canvasElement.toDataURL();
  link.click();
}

canvasElement.addEventListener('pointermove', e => {
  cursor.draw(e, canvas.ctx);
});

canvasElement.addEventListener('pointerdown', e => {
  if (e.button == 2) {
    cursor.mode = cursor.mode == CursorModes.eraser ? CursorModes.pen : CursorModes.eraser;
  }

  if (e.button == 0) {
    cursor.startDrawing(e, canvas.ctx)
  }

});

canvasElement.addEventListener('pointerup', _e => {
  cursor.stopDrawing(canvas.ctx)
});

document.addEventListener('keypress', e => {
  if (e.key == 'C') {
    canvas.clear();
  }
});

window.addEventListener('resize', e => {
  canvas.resize();
});
