import { BrikzComponent, useBrikzContent } from '@rollers/libs-client-brikz';

export default async function IndexPage() {
  const { content } = await useBrikzContent('home');
  return <div className="h-[2000px]"><BrikzComponent brik={content} /></div>;
}
