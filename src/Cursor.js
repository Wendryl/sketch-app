import { CANVAS_BG } from "./Canvas.js";

export const CursorModes = {
  eraser: 0,
  pen: 1,
}

export class Cursor {
  constructor() {
    this.mode = CursorModes.pen;
    this.x = 0;
    this.y = 0;
    this.width = 1;
    this.isDrawing = false;
    this.color = '#000';
  }

  /**
   * @param {MouseEvent | PointerEvent} event
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(event, ctx) {
    if (!this.isDrawing) return;

    ctx.setLineDash([]);

    ctx.lineWidth = event.type == 'mouse' ? this.width : this.width * event.pressure;
    ctx.strokeStyle = this.mode == CursorModes.pen ? this.color : CANVAS_BG;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.moveTo(this.x, this.y);

    this.updatePosition(event, ctx);

    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * @param {MouseEvent | PointerEvent} event
   * @param {CanvasRenderingContext2D} ctx
   */
  updatePosition(event, ctx) {
    this.x = event.clientX - ctx.canvas.offsetLeft;
    this.y = event.clientY - ctx.canvas.offsetTop;
  }

  /**
   * @param {MouseEvent | PointerEvent} event
   * @param {CanvasRenderingContext2D} ctx
   */
  startDrawing(event, ctx) {
    this.isDrawing = true;
    this.updatePosition(event, ctx);
  }

  stopDrawing() {
    this.isDrawing = false;
  }
}
