export enum ClockType {
  Analog  = 1,
  Digital = 2,
};

export type ClockConfig = {
  Type              : ClockType,

  Segments          : number,
  SegmentDuration   : number,
  Increments        : number,
  IncrementDuration : number,
  Ticks             : number,
  TickDuration      : number,
};