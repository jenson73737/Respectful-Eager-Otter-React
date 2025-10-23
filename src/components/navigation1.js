import React from 'react'

import Script from 'dangerous-html/react'

import './navigation1.css'

const Navigation1 = (props) => {
  return (
    <div className="navigation1-container1">
      <div className="navigation1-container2">
        <div className="navigation1-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation *, .navigation *::before, .navigation *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="mainNavigation" className="navigation">
        <div className="navigation-container">
          <a href="/" id="logoLink">
            <div className="navigation-logo">
              <span className="navigation-logo-text">Cheaprots</span>
              <span className="navigation-logo-glow"></span>
            </div>
          </a>
          <button
            id="navToggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="navMenu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span className="navigation1-navigation-toggle-icon1 navigation-toggle-icon-menu">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation1-navigation-toggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <div id="navMenu" className="navigation-menu">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="/brainrots">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Brainrots</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#information">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Information</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#contact">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Contact</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#hours">
                  <div className="navigation-link">
                    <span className="navigation-link-text">
                      Operating Hours
                    </span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-scanline"></div>
      </nav>
      <div className="navigation1-container4">
        <div className="navigation1-container5">
          <Script
            html={`<style>
        @keyframes navigation-pulse {0%,100% {opacity: 0.6;
transform: scaleX(1);}
50% {opacity: 1;
transform: scaleX(1.02);}}@keyframes navigation-logo-glow-pulse {0%,100% {opacity: 0.5;
transform: translate(-50%, -50%) scale(1);}
50% {opacity: 0.7;
transform: translate(-50%, -50%) scale(1.1);}}@keyframes navigation-scanline-move {0% {background-position: 0 0;}
100% {background-position: 0 100px;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation1-container6">
        <div className="navigation1-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navigation = document.getElementById("mainNavigation")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
      navToggle.setAttribute("aria-expanded", !isExpanded)
      navMenu.classList.toggle("navigation-menu-open")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInside = navigation.contains(event.target)
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true"

      if (!isClickInside && isExpanded) {
        navToggle.setAttribute("aria-expanded", "false")
        navMenu.classList.remove("navigation-menu-open")
      }
    })

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".navigation-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false")
        navMenu.classList.remove("navigation-menu-open")
      })
    })

    // Close menu on escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
        if (isExpanded) {
          navToggle.setAttribute("aria-expanded", "false")
          navMenu.classList.remove("navigation-menu-open")
        }
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation1
