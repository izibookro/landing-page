import type { ISourceOptions } from '@tsparticles/engine';

const palette = ['#f97316', '#fb923c', '#fdba74', '#ea580c', '#fed7aa'];

export const plansParticlesOptions: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      limit: {
        mode: 'delete',
        value: 40,
      },
      density: {
        enable: false,
      },
    },
    paint: {
      color: {
        value: palette,
      },
    },
    size: {
      value: {
        min: 5,
        max: 11,
      },
    },
    opacity: {
      value: {
        min: 0.45,
        max: 0.85,
      },
      animation: {
        enable: true,
        sync: false,
        speed: 0.35,
        startValue: 'max',
        destroy: 'min',
      },
    },
    move: {
      enable: true,
      speed: {
        min: 2,
        max: 4.5,
      },
      direction: 270,
      random: false,
      straight: true,
      outModes: {
        default: 'destroy',
      },
    },
  },
  emitters: [
    {
      position: {
        x: 15,
        y: 100,
      },
      size: {
        width: 70,
        height: 0,
      },
      rate: {
        delay: 0.5,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 268,
          speed: {
            min: 2.2,
            max: 4,
          },
        },
        size: {
          value: {
            min: 4,
            max: 8,
          },
        },
      },
    },
    {
      position: {
        x: 50,
        y: 100,
      },
      size: {
        width: 40,
        height: 0,
      },
      rate: {
        delay: 0.42,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 270,
          speed: {
            min: 1.8,
            max: 3.6,
          },
        },
      },
    },
    {
      position: {
        x: 82,
        y: 100,
      },
      size: {
        width: 55,
        height: 0,
      },
      rate: {
        delay: 0.48,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 272,
          speed: {
            min: 2.4,
            max: 4.2,
          },
        },
        size: {
          value: {
            min: 5,
            max: 10,
          },
        },
      },
    },
  ],
};
