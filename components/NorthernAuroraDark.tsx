"use client";
import React, { useEffect, useRef } from "react";

// Vector helper class
class Vector {
  x: number; y: number;
  constructor(x = 0, y = 0) { this.x = x; this.y = y; }
  setAngle(a: number) { const len = this.getLength(); this.x = Math.cos(a) * len; this.y = Math.sin(a) * len; }
  setLength(l: number) { const a = this.getAngle(); this.x = Math.cos(a) * l; this.y = Math.sin(a) * l; }
  getAngle() { return Math.atan2(this.y, this.x); }
  getLength() { return Math.sqrt(this.x * this.x + this.y * this.y); }
  addTo(v: Vector) { this.x += v.x; this.y += v.y; }
}

// Simplex Noise
class SimplexNoise {
  private grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
  private p: number[] = []; private perm: number[] = []; private permMod12: number[] = [];
  constructor(seed = 2025) {
    let s = seed >>> 0;
    const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 0x100000000;
    this.p = Array.from({length:256}, () => Math.floor(rnd()*256));
    for (let i=0;i<512;i++){ this.perm[i] = this.p[i & 255]; this.permMod12[i] = this.perm[i] % 12; }
  }
  simplex3(xin: number, yin: number, zin: number) {
    const F3 = 1/3, G3 = 1/6;
    let n0 = 0, n1 = 0, n2 = 0, n3 = 0;
    
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);
    
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;
    
    let i1 = 0, j1 = 0, k1 = 0, i2 = 0, j2 = 0, k2 = 0;
    
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else {
      if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
      else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
      else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    }
    
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
    
    const ii = i & 255, jj = j & 255, kk = k & 255;
    
    const gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]];
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) n0 = 0; else {
      t0 *= t0;
      n0 = t0 * t0 * (this.grad3[gi0][0] * x0 + this.grad3[gi0][1] * y0 + this.grad3[gi0][2] * z0);
    }
    
    const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]];
    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) n1 = 0; else {
      t1 *= t1;
      n1 = t1 * t1 * (this.grad3[gi1][0] * x1 + this.grad3[gi1][1] * y1 + this.grad3[gi1][2] * z1);
    }
    
    const gi2 = this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]];
    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) n2 = 0; else {
      t2 *= t2;
      n2 = t2 * t2 * (this.grad3[gi2][0] * x2 + this.grad3[gi2][1] * y2 + this.grad3[gi2][2] * z2);
    }
    
    const gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]];
    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) n3 = 0; else {
      t3 *= t3;
      n3 = t3 * t3 * (this.grad3[gi3][0] * x3 + this.grad3[gi3][1] * y3 + this.grad3[gi3][2] * z3);
    }
    
    return 32 * (n0 + n1 + n2 + n3);
  }
}

interface NorthernAuroraDarkProps {
  variant?: 'northern' | 'brown';
}

export default function NorthernAuroraDark({ variant = 'brown' }: NorthernAuroraDarkProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols = 0, rows = 0;
    let ctxScale = { x: 1, y: 1 };
    let heightColorScaling = 1;
    const tileSize = 40, tileRatio = 2;

    function sizeCanvas() {
      const box = container.getBoundingClientRect();
      canvas.width = 400;
      canvas.height = Math.max(1, Math.floor((400 * box.height) / Math.max(1, box.width)));
      const visualScale = 8;
      canvas.style.width = Math.round(box.width / visualScale) + "px";
      canvas.style.height = Math.round(box.height / visualScale) + "px";
      cols = Math.max(1, Math.ceil(box.width / tileSize));
      rows = Math.max(1, Math.ceil(box.height / (tileSize * tileRatio)));
      ctxScale = { x: canvas.width / cols, y: canvas.height / rows };
      heightColorScaling = 255 / rows;
    }
    
    sizeCanvas();
    const noise = new SimplexNoise(2025);
    const mouse = new Vector(0, 0);
    
    function onMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / Math.max(1, rect.width)) * canvas.width;
      mouse.y = ((e.clientY - rect.top) / Math.max(1, rect.height)) * canvas.height;
    }
    
    window.addEventListener("mousemove", onMouseMove);
    const field: Vector[][] = Array.from({ length: cols }, () => Array.from({ length: rows }, () => new Vector(0, 0)));

    function updateField(time: number) {
      const t = (time * 0.1) / 1000;
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const angle = noise.simplex3(x / 20, y / 20, t) * Math.PI * 2;
          const length = noise.simplex3(x / 10 + 40000, y / 10 + 40000, t);
          const v = field[x][y];
          v.setAngle(angle);
          v.setLength(length);
          const pos = new Vector(x * ctxScale.x + 0.5 * ctxScale.x, y * ctxScale.y + 0.5 * ctxScale.y);
          const mouseEffect = new Vector((mouse.x - pos.x) / canvas.width, (mouse.y - pos.y) / canvas.height);
          v.addTo(mouseEffect);
          if (v.getLength() > 1) v.setLength(1);
        }
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const v = field[x][y];
          const xmove = v.getLength() * Math.abs(v.x);
          const ymove = v.getLength() * Math.abs(v.y);
          
          let red, green, blue;
          
          if (variant === 'northern') {
            // Northern Lights - exact formula from user's reference
            red = Math.round((-20 * xmove) + (80 * ymove) + (50 - (0.6 * y * heightColorScaling)));
            green = Math.round((180 * xmove) + (20 * ymove) - 60 + (0.4 * y * heightColorScaling));
            blue = Math.round((50 * xmove) + (30 * ymove) + (40 - (0.5 * y * heightColorScaling)) + (0.5 * y * heightColorScaling));
          } else {
            // Balanced brown/earth tones (dark mode) - slightly reduced warmth
            // Maintains warmth but less intense than before
            red = Math.round((130 * xmove) + (110 * ymove) + (150 - 0.5 * y * heightColorScaling));
            green = Math.round((80 * xmove) + (75 * ymove) + (110 - 0.45 * y * heightColorScaling));
            blue = Math.round((40 * xmove) + (80 * ymove) + (85 - 0.35 * y * heightColorScaling));
          }
          
          // Clamp colors to valid range
          red = Math.max(0, Math.min(255, red));
          green = Math.max(0, Math.min(255, green));
          blue = Math.max(0, Math.min(255, blue));
          
          // Opacity based on variant
          const opacity = variant === 'northern' ? 0.8 : 0.5 + (y / rows * 0.15);
          
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
          ctx.fillRect(x * ctxScale.x, y * ctxScale.y, ctxScale.x, ctxScale.y);
        }
      }
    }

    let last = 0;
    let raf = 0;
    function tick(time: number) {
      updateField(time);
      draw();
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onResize() { sizeCanvas(); }
    window.addEventListener("resize", onResize);
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, [variant]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ 
        background: variant === 'northern' 
          ? 'linear-gradient(to bottom, #001010 0%, #000A0A 100%)' 
          : 'linear-gradient(to bottom, #1E1A17 0%, #2A2420 100%)',
        zIndex: -1 
      }}
    >
      <canvas 
        ref={canvasRef}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(8)', filter: 'blur(6px)', display: 'block', width: '12.5%' }}
      />
    </div>
  );
}
