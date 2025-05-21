import Link from 'next/link';

export function LayoutBottom() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-600">
      <div className="container mx-auto">
        <div className="flex justify-between py-4 text-white text-sm">
          <div className="">© {year} My Application</div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="">
              Privacy Policy
            </Link>
            <Link href="/terms" className="">
              Terms of Service
            </Link>
            <Link href="/contact" className="">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutBottom;
