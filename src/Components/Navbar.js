import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode}`} data-bs-theme={props.mode}>
      <div className="container-fluid">
        <h3 className="navbar-brand">{props.title}</h3>
        {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">{props.findBtn}</button>
          </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.changeText()}</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  findBtn: PropTypes.string
}

Navbar.defaultProps = {
  title: "My New WebApp",
  findBtn: "Find"
}