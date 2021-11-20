import { createSignal, onMount, onCleanup } from 'solid-js';
import { GenerateTime } from '@/lib/time-calc';

import AnalogClock from '@/components/analog';

import type { Component }   from 'solid-js';
import type { ClockConfig } from '@/types/config';
import type { ClockTime }   from '@/types/time';

const Clock: Component<{ Config : ClockConfig }> = (Props) => {
  const [GetTime,SetTime] = createSignal<ClockTime>(GenerateTime(Props.Config));

  const Update = () => {
    SetTime(GenerateTime(Props.Config));
    QueueUpdate();
  };

  let TimerID : ReturnType<typeof setTimeout> | void;
  const ClearUpdate = () => {
    if (TimerID != null) {
      clearTimeout(TimerID as ReturnType<typeof setTimeout>);
      TimerID = undefined;
    }
  }
  const QueueUpdate = () => {
    ClearUpdate();
    TimerID = setTimeout(Update,Props.Config.TickDuration - (+new Date() % Props.Config.TickDuration));
  };

  onMount(() => QueueUpdate());
  onCleanup(() => ClearUpdate());

  return (
    <AnalogClock Config={Props.Config} Time={GetTime()} />
  );
};

export default Clock;