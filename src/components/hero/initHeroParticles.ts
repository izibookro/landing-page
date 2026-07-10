import { tsParticles } from '@tsparticles/engine';
import { ensureTsParticles } from '../../lib/ensureTsParticles';
import { heroParticlesOptions } from './heroParticlesOptions';

let initialized = false;

export async function initHeroParticles(): Promise<void> {
  if (initialized) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const element = document.getElementById('hero-particles');
  if (!element) return;

  await ensureTsParticles();

  await tsParticles.load({
    id: 'hero-particles',
    options: heroParticlesOptions,
  });

  initialized = true;
}
