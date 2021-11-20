import { ClockConfig, ClockType } from '@/types/config';
import { Theme }                  from '@/types/theme';

const StorageLib = {
  Config : {
    StorageKey : 'KaoClock.Config',
    Default : (): ClockConfig => {
      const DefaultConfig: ClockConfig = {
        Type              : ClockType.Analog,

        Segments          : 10,
        SegmentDuration   : 0,
        Increments        : 100,
        IncrementDuration : 0,
        Ticks             : 100,
        TickDuration      : 0,
      };

      return DefaultConfig;
    },

    Save : (Config: ClockConfig) => {
      localStorage[StorageLib.Config.StorageKey] = JSON.stringify(Config);
    },

    Load : (): ClockConfig => {
      const Config: ClockConfig = JSON.parse(localStorage[StorageLib.Config.StorageKey] ?? JSON.stringify(StorageLib.Config.Default()));

      Config.SegmentDuration   = (1000 * 60 * 60 * 24)    / Config.Segments;
      Config.IncrementDuration = Config.SegmentDuration   / Config.Increments;
      Config.TickDuration      = Config.IncrementDuration / Config.Ticks;

      return Config;
    },
  },

  Theme : {
    StorageKey : 'KaoClock.Theme',
    Default : (): Theme => ({
      Size       : '100vmin',

      Background : '#000',
      ClockFace  : '#fff',
    }),

    Save : (Theme: Theme) => {
      localStorage[StorageLib.Theme.StorageKey] = JSON.stringify(Theme);
    },

    Load : (): Theme => {
      return JSON.parse(localStorage[StorageLib.Theme.StorageKey] ?? JSON.stringify(StorageLib.Theme.Default()));
    },
  },
};

export default StorageLib;