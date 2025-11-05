import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="mb-4 md:mb-0 text-sm text-gray-500">© {new Date().getFullYear()} Tesa Cafe. All rights reserved.</p>
          <nav className="flex space-x-6">
            <a className="text-sm text-gray-500 hover:text-gray-900" href="#about">About</a>
            <a className="text-sm text-gray-500 hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
