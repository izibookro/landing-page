import { tsParticles } from '@tsparticles/engine';
import { ensureTsParticles } from '../../lib/ensureTsParticles';
import { plansParticlesOptions } from './plansParticlesOptions';

export async function initPlansParticles(): Promise<void> {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const element = document.getElementById('plans-particles');
  if (!element || element.dataset.particlesInitialized === 'true') return;

  await ensureTsParticles();

  await tsParticles.load({
    element,
    options: plansParticlesOptions,
  });

  element.dataset.particlesInitialized = 'true';
}
