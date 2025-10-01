'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Community</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['EightyDays.org: disaster relief', 'Combating discrimination', 'Community forums', 'Travel communities'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Hosting</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Host your home', 'Host an Experience', 'Resource Center', 'Community forum'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">EightyDays</h3>
            <ul className="space-y-1 sm:space-y-2">
              {['Newsroom', 'New features', 'Careers', 'Investors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-600">
              <span>© 2025 EightyDays, Inc.</span>
              <span>·</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <span>·</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
            </div>

            {/* Language & Currency */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>English (IN)</span>
              </button>
              
              <button className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <span>₹</span>
                <span>INR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}