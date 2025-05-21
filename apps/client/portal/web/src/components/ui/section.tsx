export interface UiSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function UiSection({
  title,
  children,
  className,
}: UiSectionProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 p-4 ${className}`}
    >
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
