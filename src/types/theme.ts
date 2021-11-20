import type { JSX } from 'solid-js';

type Color = JSX.CSSProperties['background-color'];

export type Theme = {
  Size       : JSX.CSSProperties['font-size'],

  Background : Color,
  ClockFace  : Color,

  Segment?   : Color,
  Increment? : Color,
  Tick?      : Color,
}