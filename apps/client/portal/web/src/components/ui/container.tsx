import { useMemo } from 'react';

function UiContainerBg({ url, position }: { url: string; position: string }) {
  return (
    <div
      className={`absolute ${position} w-full h-[220px] bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
}

export function UiContainer({
  children,
  top,
  bottom,
  className,
}: {
  top?: string | boolean;
  bottom?: string | boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const topUrl = useMemo(() => {
    if (typeof top === 'string') {
      return `images/white_top_wave_${top}.png`;
    }
    if (top) {
      return 'images/white_top_wave_1.png';
    }
    return '';
  }, [top]);

  const bottomUrl = useMemo(() => {
    if (typeof bottom === 'string') {
      return `images/white_bottom_wave_${bottom}.png`;
    }
    if (bottom) {
      return 'images/white_bottom_wave_1.png';
    }
    return '';
  }, [bottom]);

  return (
    <div className="relative">
      {top && <UiContainerBg url={topUrl} position="top-0" />}
      <div className={`container mx-auto p-4${className}`}>{children}</div>
      {bottom && <UiContainerBg url={bottomUrl} position="bottom-0" />}
    </div>
  );
}

export default UiContainer;
