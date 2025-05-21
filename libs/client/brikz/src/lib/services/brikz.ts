import { ElementType } from 'react';
import { ComponentRegistry } from '../models/component-registry';

let instance: any = null;

export interface BrikzOptions {
  components: Record<string, ElementType>;
}

export function createBrikz(options: BrikzOptions) {
  const { components } = options;

  const componentsRegistry = new ComponentRegistry();
  Object.entries(components).forEach(([name, component]) => {
    if (componentsRegistry.isRegistered(name)) {
      console.warn(`Component ${name} is already registered.`);
    } else {
      componentsRegistry.register(name, component);
    }
  });

  instance = {
    componentsRegistry,
  };

  return instance;
}

export function getBrikz() {
  if (!instance) {
    throw new Error(
      'Brikz instance is not initialized. Please call createBrikz first.'
    );
  }
  return instance;
}
