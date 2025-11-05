import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a className="text-xl font-bold text-gray-900" href="#">Tesa Cafe</a>

          <nav className="flex gap-3">
            <button type="button" className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">Home</button>
            <button type="button" className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">Menu</button>
            <button type="button" className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">About</button>
            <button type="button" className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">Contact</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
