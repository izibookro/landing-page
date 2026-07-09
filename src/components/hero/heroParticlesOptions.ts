import type { ISourceOptions } from '@tsparticles/engine';

export const heroParticlesOptions: ISourceOptions = {
  preset: 'meteors',
  background: {
    color: {
      value: '#ffffff',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
    },
    paint: {
      color: {
        value: ['#f97316', '#fb923c', '#ea580c', '#fdba74'],
      },
    },
    effect: {
      type: 'trail',
      options: {
        trail: {
          length: 48,
        },
      },
    },
    size: {
      value: {
        min: 1,
        max: 2.5,
      },
    },
    opacity: {
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        enable: true,
        sync: true,
        speed: 0.18,
        startValue: 'max',
        destroy: 'min',
      },
    },
    move: {
      enable: true,
      speed: {
        min: 10,
        max: 22,
      },
      straight: true,
      direction: 118,
      outModes: {
        default: 'destroy',
      },
    },
  },
  emitters: [
    {
      position: {
        x: -5,
        y: -2,
      },
      size: {
        width: 55,
        height: 0,
      },
      rate: {
        delay: 0.35,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 112,
        },
      },
    },
    {
      position: {
        x: 25,
        y: 0,
      },
      size: {
        width: 50,
        height: 0,
      },
      rate: {
        delay: 0.22,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 118,
          speed: {
            min: 12,
            max: 24,
          },
        },
        effect: {
          options: {
            trail: {
              length: 56,
            },
          },
        },
      },
    },
    {
      position: {
        x: 55,
        y: -1,
      },
      size: {
        width: 50,
        height: 0,
      },
      rate: {
        delay: 0.28,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 124,
        },
      },
    },
    {
      position: {
        x: 82,
        y: 2,
      },
      size: {
        width: 40,
        height: 0,
      },
      rate: {
        delay: 0.45,
        quantity: 1,
      },
      particles: {
        move: {
          direction: 128,
          speed: {
            min: 14,
            max: 26,
          },
        },
        effect: {
          options: {
            trail: {
              length: 64,
            },
          },
        },
      },
    },
  ],
};
