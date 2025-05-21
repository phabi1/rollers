import UiSection from '@/components/ui/section';
import { Brik, BrikzComponent, BrikzProps } from '@rollers/libs-client-brikz';

export interface BrikzSectionProps extends BrikzProps<{ title: string }> {}

export function BrikzSection({ brik }: BrikzSectionProps) {
  const children: Brik[] = (brik.children || []) as Brik[];
  return (
    <UiSection title={brik.title || ''}>
      {children.map((child, index) => (
        <BrikzComponent key={index} brik={child} />
      ))}
    </UiSection>
  );
}

export default BrikzSection;