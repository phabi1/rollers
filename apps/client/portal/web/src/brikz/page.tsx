import { Brik, BrikzComponent } from '@rollers/libs-client-brikz';

export function BrikzPage({ brik }: { brik: Brik }) {
  const children: Brik[] = (brik.body || []) as Brik[];
  return (
    <>
      {children.map((child, index) => (
        <BrikzComponent key={index} brik={child} />
      ))}
    </>
  );
}

export default BrikzPage;