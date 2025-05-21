import { Brik, BrikzComponent } from '@rollers/libs-client-brikz';
import UiContainer from '../components/ui/container';

export interface BrikzContainerProps {
  brik: Brik;
}

export function BrikzContainer({ brik }: BrikzContainerProps) {
  const children: Brik[] = (brik.children || []) as Brik[];
  return (
    <UiContainer>
      {children.map((child, index) => (
        <BrikzComponent key={index} brik={child} />
      ))}
    </UiContainer>
  );
}

export default BrikzContainer;