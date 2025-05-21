'use client';
import Link from 'next/link';

export function LayoutHeader() {
  return (
    <div className="layout-header bg-white shadow sticky top-0 z-10 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">My Application</div>
          <div className="hidden lg:flex">
            <nav className="flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="text-gray-700 hover:text-gray-900">
                Signin
              </Link>
              <Link
                href="/auth/signup"
                className="text-gray-700 hover:text-gray-900"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="xs:visible lg:hidden">
            <button>menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutHeader;
