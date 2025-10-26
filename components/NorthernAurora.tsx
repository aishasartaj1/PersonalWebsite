"use client";
import React, { useEffect, useRef } from "react";

// Simple noise implementation
const noise = {
  simplex3(x: number, y: number, z: number): number {
    // Simplified noise function using sine/cosine for smooth variations
    const n1 = Math.sin(x + Math.cos(y * 0.5) * Math.cos(z * 0.7)) * 0.5;
    const n2 = Math.cos(y + Math.sin(x * 0.7) * Math.sin(z * 0.5)) * 0.5;
    const n3 = Math.sin(z + Math.cos(x * 0.5) * Math.sin(y * 0.7)) * 0.5;
    return (n1 + n2 + n3) / 3;
  }
};

// Vector helper class
class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  setAngle(angle: number) {
    const length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  setLength(length: number) {
    const angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  addTo(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
}

// FlowField class
class FlowField {
  settings: { frequency: number };
  w: number;
  h: number;
  time: number;
  cols: number = 0;
  rows: number = 0;
  field: Vector[][] = [];
  manipulateVector?: (vector: Vector, x: number, y: number) => void;
  onDraw?: (vector: Vector, x: number, y: number) => void;

  constructor(w: number, h: number, settings: { frequency?: number } = {}) {
    this.settings = { frequency: 0.2, ...settings };
    this.w = w || 10;
    this.h = h || 10;
    this.time = 0;
    this.build();
  }

  build() {
    this.cols = Math.ceil(this.w);
    this.rows = Math.ceil(this.h);

    this.field = new Array(this.cols);
    for (let x = 0; x < this.cols; x++) {
      this.field[x] = new Array(this.rows);
      for (let y = 0; y < this.rows; y++) {
        this.field[x][y] = new Vector(0, 0);
      }
    }
  }

  update(delta: number) {
    this.time += delta;
    const updateTime = this.time * this.settings.frequency / 1000;

    for (let x = 0; x < this.field.length; x++) {
      for (let y = 0; y < this.field[x].length; y++) {
        const angle = noise.simplex3(x / 20, y / 20, updateTime) * Math.PI * 2;
        const length = noise.simplex3(x / 10 + 40000, y / 10 + 40000, updateTime);
        this.field[x][y].setAngle(angle);
        this.field[x][y].setLength(length);

        if (typeof this.manipulateVector === 'function') {
          this.manipulateVector(this.field[x][y], x, y);
        }

        if (typeof this.onDraw === 'function') {
          this.onDraw(this.field[x][y], x, y);
        }
      }
    }
  }
}

interface NorthernAuroraProps {
  variant?: 'northern' | 'brown';
}

export default function NorthernAurora({ variant = 'northern' }: NorthernAuroraProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const ffRef = useRef<FlowField | null>(null);
  const mouse = useRef(new Vector(0, 0));

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Settings
    const settings = { frequency: 0.1 };
    const tileSize = 20; // Smaller for smoother effect
    const tileRatio = 2;

    // Setup canvas - full screen
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Flowfield setup
    const cols = Math.ceil(container.clientWidth / tileSize);
    const rows = Math.ceil(container.clientHeight / (tileSize * tileRatio));

    const ctxScale = {
      x: canvas.width / cols,
      y: canvas.height / rows,
    };
    const widthColorScaling = 255 / cols;
    const heightColorScaling = 255 / rows;

    // Init flowfield
    const ff = new FlowField(cols, rows, settings);
    ffRef.current = ff;

    // Mouse interaction
    ff.manipulateVector = (vector, x, y) => {
      const pos = new Vector(
        (x * ctxScale.x) + (0.5 * ctxScale.x),
        (y * ctxScale.y) + (0.5 * ctxScale.y),
      );

      const mouseEffect = new Vector(
        (mouse.current.x - pos.x) / canvas.width,
        (mouse.current.y - pos.y) / canvas.height,
      );

      vector.addTo(mouseEffect);
      if (vector.getLength() > 1) vector.setLength(1);
    };

    // Custom draw function for Northern Lights
    ff.onDraw = (vector, x, y) => {
      if (x === 0 && y === 0) {
        ctx.fillStyle = variant === 'brown' ? 'rgba(20, 16, 12, 0.3)' : 'rgba(0, 16, 16, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const xmove = vector.getLength() * Math.abs(vector.x);
      const ymove = vector.getLength() * Math.abs(vector.y);

      let red, green, blue;

      if (variant === 'brown') {
        // Brown palette - adapted to your website colors
        // Using your brown/blush palette: brown-300 #C6A48B, brown-400 #B08B73, blush-400 #E8B4A2, terra-500 #D07C5A
        red = Math.round((120 * xmove) + (140 * ymove) + (60 - (0.4 * y * heightColorScaling)));
        green = Math.round((90 * xmove) + (60 * ymove) - 20 + (0.3 * y * heightColorScaling));
        blue = Math.round((60 * xmove) + (40 * ymove) - 30 + (0.2 * y * heightColorScaling));
      } else {
        // Northern Lights color mapping (original cool colors)
        red = Math.round((-20 * xmove) + (80 * ymove) + (50 - (0.6 * y * heightColorScaling)));
        green = Math.round((180 * xmove) + (20 * ymove) - 60 + (0.4 * y * heightColorScaling));
        blue = Math.round((50 * xmove) + (30 * ymove) + (40 - (0.5 * y * heightColorScaling)) + (0.5 * y * heightColorScaling));
      }

      ctx.fillStyle = `rgba(${Math.max(0, Math.min(255, red))}, ${Math.max(0, Math.min(255, green))}, ${Math.max(0, Math.min(255, blue))}, 0.6)`;
      ctx.fillRect(x * ctxScale.x, y * ctxScale.y, ctxScale.x, ctxScale.y);
    };

    // Mouse tracking
    const updateMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', updateMouse);

    // Animation loop
    let lastStep = 0;
    const step = (time: number) => {
      if (ffRef.current) {
        ffRef.current.update(time - lastStep || 0);
      }
      lastStep = time;
      rafRef.current = requestAnimationFrame(step);
    };
    step(0);

    // Resize handler
    const handleResize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [variant]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor: variant === 'brown' ? '#1E1A17' : '#001010' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          filter: 'blur(8px)',
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
}