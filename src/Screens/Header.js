import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to="home">Home</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link text-white" to="employee">Employee</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header