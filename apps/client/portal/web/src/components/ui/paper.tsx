export function Paper({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={`rounded-lg bg-white shadow-md p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Paper;