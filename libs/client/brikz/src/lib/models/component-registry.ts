import { ElementType } from 'react';

export class ComponentRegistry {
  private types = new Map<string, ElementType>();

  register(name: string, component: ElementType) {
    this.types.set(name, component);
  }

  unregister(name: string) {
    this.types.delete(name);
  }

  isRegistered(name: string) {
    return this.types.has(name);
  }

  getComponent(name: string) {
    return this.types.get(name);
  }
}
