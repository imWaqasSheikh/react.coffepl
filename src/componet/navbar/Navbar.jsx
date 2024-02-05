import React from "react";


function Navbar() {
  return (
    <div class="navbar" id="navbar">
      <div class="navbar-container">
        <div class="logo">
          <a href="#">
            <img src="upload/logo_white.png" alt="" />
          </a>
        </div>
        <div class="menu-toggle" id="mobile-menu">
          <div class="hamburger" id="hamburger">
            &#9776;
          </div>
        </div>
        <div class="navbar-links" id="navbar-links">
          <a href="#" class="nav-link">
            Home
          </a>
          <a href="about.html" class="nav-link">
            About
          </a>
          <a href="contact.html" class="nav-link">
            Contact
          </a>
          <a href="shop.html" class="nav-link">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
