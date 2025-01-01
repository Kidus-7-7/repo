import Link from 'next/link';
import { Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Home className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">Addis Bete</span>
            </Link>
            <p className="text-sm text-gray-600">
              Your trusted real estate platform in Ethiopia
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Properties
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/buy" className="text-sm text-gray-600 hover:text-gray-900">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-sm text-gray-600 hover:text-gray-900">
                  Rent
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-gray-600 hover:text-gray-900">
                  Sell
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/find-agent" className="text-sm text-gray-600 hover:text-gray-900">
                  Find an Agent
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-gray-600 hover:text-gray-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Addis Bete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}