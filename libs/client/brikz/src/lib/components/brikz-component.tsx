import { Brik } from '../models/brik';
import { getBrikz } from '../services/brikz';

export function BrikzComponent({ brik }: { brik: Brik }) {
  const { componentsRegistry } = getBrikz();

  const Component = componentsRegistry.getComponent(brik.component);
  if (!Component) {
    console.error(`Component ${brik.component} not found in registry.`);
    return null;
  }
  return <Component brik={brik} />;
}
