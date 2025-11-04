import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        <p className="mb-2 mb-md-0 text-muted small">© {new Date().getFullYear()} Tesa Cafe. All rights reserved.</p>
        <nav className="d-flex gap-3">
          <a className="text-muted small" href="#about">About</a>
          <a className="text-muted small" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
