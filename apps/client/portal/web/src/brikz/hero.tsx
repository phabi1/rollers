import UiContainer from '@/components/ui/container';
import { BrikzProps } from '@rollers/libs-client-brikz';

export function BrikzHero({
  brik,
}: BrikzProps<{ title: string; image: string; description: string }>) {
  return (
    <div className="bg-red-800">
      <UiContainer bottom="01">
        <div className=" h-[420px] flex flex-col justify-center items-center">
          <div>
            <img src={brik.image} className="max-w-sm" />
            <div>
              <h1 className="text-5xl font-bold">{brik.title}</h1>
              <p className="py-6">{brik.description}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div></div>
      </UiContainer>
    </div>
  );
}

export default BrikzHero;
