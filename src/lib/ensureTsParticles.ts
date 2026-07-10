import { tsParticles } from '@tsparticles/engine';
import { loadMeteorsPreset } from '@tsparticles/preset-meteors';

let ensurePromise: Promise<void> | null = null;

export function ensureTsParticles(): Promise<void> {
  if (!ensurePromise) {
    ensurePromise = loadMeteorsPreset(tsParticles);
  }

  return ensurePromise;
}
