'use client';
import Link from 'next/link';

export function LayoutMenuMobile({ className }: { className?: string }) {
  const handleMenuClick = () => {
    document.querySelector('body')?.classList.toggle('menu-open');
  };
  return (
    <div className="`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 ${className}`">
      <div>
        <button
          onClick={handleMenuClick}
          className="absolute top-4 right-4 text-white"
        >
          Close
        </button>
      </div>
      <ul>
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default LayoutMenuMobile;
