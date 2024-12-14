import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto flex flex-wrap justify-between items-start gap-10">
      {/* Logo and Description */}
      <div className="max-w-sm">
        <h2 className="text-2xl font-bold text-orange-500">
          DIS<span className="text-green-500">COUNT</span> ME
        </h2>
        <p className="mt-4 text-gray-400">
          Ecommerce is a free UI Kit from Paperpillar that you can use for
          your personal or commercial project.
        </p>
        <div className="mt-4 flex">
          <input
            type="email"
            placeholder="Type your email address"
            className="px-4 py-2 w-3/4 rounded-l-md bg-gray-800 text-gray-300 focus:outline-none"
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600">
            Submit
          </button>
        </div>
      </div>

      {/* Account Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Account</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              My Account
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Login / Register
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Cart
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Shop
            </a>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms Of Use
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Support</h4>
        <p>
          <a href="mailto:exclusive@gmail.com" className="text-gray-300 hover:text-white">
            exclusive@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+8801588889999" className="text-gray-300 hover:text-white">
            +88015-88888-9999
          </a>
        </p>
      </div>

      {/* Download App */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Download App</h4>
        <div className="flex gap-4">
          <img
            src="/playstore.png"
            alt="Get it on Google Play"
            className="w-32"
          />
          <img
            src="/ios.jpeg"
            alt="Download on the App Store"
            className="w-32"
          />
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer