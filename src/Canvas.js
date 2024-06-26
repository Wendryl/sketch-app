export const CANVAS_BG = '#fff';

export class Canvas {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.resize();
  }

  resize() {
    this.canvasElement.width = window.innerWidth - 30;
    this.canvasElement.height = window.innerHeight - 30;
    this.ctx.strokeStyle = '#333';
    this.ctx.setLineDash([5]);
    this.ctx.fillStyle = CANVAS_BG;
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.strokeRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  clear() {
    this.ctx.fillStyle = CANVAS_BG;
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.resize();
  }
}
