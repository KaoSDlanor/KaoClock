import { Index } from 'solid-js';

import Styles from './index.module.scss';

import type { Component }   from 'solid-js';
import type { ClockConfig } from '@/types/config';
import type { ClockTime }   from '@/types/time';


const AnalogClock: Component<{ Config : ClockConfig, Time : ClockTime }> = (Props) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class={Styles.Container}>
      <g class="back-face-container">
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill="var(--theme-background)"
        ></circle>
      </g>

      <g class="tick-container">
        <Index each={new Array(Props.Config.Ticks)}>
          {(_,Index) => (
            <line
              class="tick"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="0.5%"
              stroke="var(--theme-tick)"
              stroke-width="1px"
              style={{
                'transform-origin' : '50% 50%',
                'transform'        : `rotate(${Index * 360 / Props.Config.Ticks}deg)`
              }}
            ></line>
          )}
        </Index>
      </g>

      <g class="increment-container">
        <Index each={new Array(Props.Config.Increments)}>
          {(_,Index) => (
            <line
              class="increment"
              x1="50%"
              x2="50%"
              y1="0%"
              y2={(Index % 5) === 0 ? '2.5%' : '1%'}
              stroke="var(--theme-increment)"
              stroke-width="2px"
              style={{
                'transform-origin' : '50% 50%',
                'transform'        : `rotate(${Index * 360 / Props.Config.Increments}deg)`
              }}
            ></line>
          )}
        </Index>
      </g>

      <g class="segment-container">
        <Index each={new Array(Props.Config.Segments)}>
          {(_,Index) => (
            <line
              class="segment"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="4%"
              stroke="var(--theme-segment)"
              stroke-width="3px"
              style={{
                'transform-origin' : '50% 50%',
                'transform'        : `rotate(${Index * 360 / Props.Config.Segments}deg)`
              }}
            ></line>
          )}
        </Index>
      </g>

      <g class="face-container">
        <circle
          cx="50%"
          cy="50%"
          r="calc(50% - 1px)"
          stroke="var(--theme-clock-face)"
          stroke-width="2px"
          fill="none"
        ></circle>
        <circle
          cx="50%"
          cy="50%"
          r="2.5px"
          fill="var(--theme-clock-face)"
        ></circle>
      </g>

      <g class="hand-container">
        <line
          class="hand-segment"
          x1="50%"
          x2="50%"
          y1="15%"
          y2="50%"
          stroke="var(--theme-segment)"
          stroke-width="4px"
          style={{
            'transform-origin' : '50% 50%',
            'transform'        : `rotate(${Props.Time.Segment * 360 / Props.Config.Segments}deg)`
          }}
        ></line>
        <line
          class="hand-increment"
          x1="50%"
          x2="50%"
          y1="10%"
          y2="50%"
          stroke="var(--theme-increment)"
          stroke-width="2px"
          style={{
            'transform-origin' : '50% 50%',
            'transform'        : `rotate(${Props.Time.Increment * 360 / Props.Config.Increments}deg)`
          }}
        ></line>
        <line
          class="hand-tick"
          x1="50%"
          x2="50%"
          y1="5%"
          y2="50%"
          stroke="var(--theme-tick)"
          stroke-width="1px"
          style={{
            'transform-origin' : '50% 50%',
            'transform'        : `rotate(${Math.round(Props.Time.Tick) * 360 / Props.Config.Ticks}deg)`
          }}
        ></line>
      </g>
    </svg>
  );
};

export default AnalogClock;
