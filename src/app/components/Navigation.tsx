import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white font-family-orange-squash hover:text-nwt-light-teal transition-colors">
              New Wave Therapy
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/faq" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              FAQ
            </Link>
            <Link href="/team" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Our Team
            </Link>
            <Link href="/contact" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              Contact
            </Link>
            <Link href="/contact" className="text-white hover:text-nwt-light-teal transition-colors font-medium">
              About
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-white hover:text-nwt-light-teal transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;