import React from 'react'

const Header = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div className="container py-2">
        <a className="navbar-brand fw-bold" href="#">Tesa Cafe</a>

        <div className="d-flex ms-auto gap-2">
          <button type="button" className="btn btn-outline-secondary btn-sm">Home</button>
          <button type="button" className="btn btn-outline-secondary btn-sm">Menu</button>
          <button type="button" className="btn btn-outline-secondary btn-sm">About</button>
          <button type="button" className="btn btn-outline-secondary btn-sm">Contact</button>
        </div>
      </div>
    </header>
  )
}

export default Header
