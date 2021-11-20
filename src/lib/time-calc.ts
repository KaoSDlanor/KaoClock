import type { ClockConfig } from '@/types/config';
import type { ClockTime }   from '@/types/time';

export const GenerateTime = (Config: ClockConfig): ClockTime => {
  const Now               = new Date();
  const DayMilliseconds   = (+Now - Now.getTimezoneOffset() * 1000 * 60) % (1000 * 60 * 60 * 24); // Now.getHours() * 60 * 60 * 1000 + Now.getMinutes() * 60 * 1000 + Now.getSeconds() * 1000 + Now.getMilliseconds();

  const Segment           = DayMilliseconds / Config.SegmentDuration;
  const Increment         = (DayMilliseconds % Config.SegmentDuration) / Config.IncrementDuration;
  const Tick              = (DayMilliseconds % Config.IncrementDuration) / Config.TickDuration;

  return {Segment,Increment,Tick};
};