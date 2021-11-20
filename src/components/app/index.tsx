import { createSignal } from 'solid-js';
import Clock            from '@/components/clock';
import StorageLib       from '@/lib/storage';

import Styles from './index.module.scss';

import type { Component } from 'solid-js';

const App: Component = () => {
  const [GetConfig,SetConfig] = createSignal(StorageLib.Config.Load());
  const [GetTheme,SetTheme]   = createSignal(StorageLib.Theme.Load());

  return (
    <div
      class={Styles.Container}
      style={{
        '--theme-size'       : GetTheme().Size,

        '--theme-background' : GetTheme().Background,
        '--theme-clock-face' : GetTheme().ClockFace,

        '--theme-segment'    : GetTheme().Segment   ?? GetTheme().ClockFace,
        '--theme-increment'  : GetTheme().Increment ?? GetTheme().ClockFace,
        '--theme-tick'       : GetTheme().Tick      ?? GetTheme().ClockFace,
      }}
    >
      <Clock Config={GetConfig()} />
    </div>
  );
};

export default App;
