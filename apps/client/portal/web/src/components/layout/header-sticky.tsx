'use client';

import { useEffect } from 'react';

export function LayoutHeaderSticky({
  top,
  children,
}: {
  top: number;
  children: React.ReactNode;
}) {
  const handleScroll = () => {
    updateSticked();
  };
  const updateSticked = () => {
    const scrollY = window.scrollY;
    const sticked = scrollY > top;
    document.querySelector('body')?.classList.toggle('sticked', sticked);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateSticked();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}

export default LayoutHeaderSticky;
