export class Cursor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1;
    this.isDrawing = false;
  }

  /**
   * @param {MouseEvent | PointerEvent} event
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(event, ctx) {
    if (!this.isDrawing) return;

    ctx.lineWidth = event.type == 'mouse' ? this.width : this.width * event.pressure;
    ctx.strokeStyle = '#000';
    ctx.lineCap = 'round';

    ctx.beginPath();
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
