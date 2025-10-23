import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-scanline, .footer-glow-orb, .footer-logo-glow {
  animation: none;
}
.footer-social-link, .footer-nav-link, .footer-back-to-top, .footer-contact-link {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-cheaprots" className="footer-section">
        <div aria-hidden="true" className="footer-scanline"></div>
        <div aria-hidden="true" className="footer-glow-orb"></div>
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <div aria-hidden="true" className="footer-logo-glow"></div>
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="footer-logo-icon"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <h2 className="footer-logo-text">Cheaprots</h2>
              </div>
              <p className="footer-brand-tagline">
                {' '}
                The ultimate marketplace for Steal a Brainrot. Level up your
                game with premium brainrots.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social-links">
                <a href="#discord">
                  <div
                    aria-label="Join our Discord community"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path>
                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3"></path>
                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#twitter">
                  <div
                    aria-label="Follow us on Twitter"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#youtube">
                  <div
                    aria-label="Subscribe to our YouTube channel"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15l5-3l-5-3z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-nav-columns">
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Shop</h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="/Brainrots">
                      <div className="footer-nav-link">
                        <span>All Brainrots</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#featured">
                      <div className="footer-nav-link">
                        <span>Featured Items</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#new-arrivals">
                      <div className="footer-nav-link">
                        <span>New Arrivals</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#bundles">
                      <div className="footer-nav-link">
                        <span>Bundle Deals</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Support</h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#help">
                      <div className="footer-nav-link">
                        <span>Help Center</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#faq">
                      <div className="footer-nav-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#delivery">
                      <div className="footer-nav-link">
                        <span>Delivery Info</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#returns">
                      <div className="footer-nav-link">
                        <span>Returns</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Company</h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#about">
                      <div className="footer-nav-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#contact">
                      <div className="footer-nav-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#hours">
                      <div className="footer-nav-link">
                        <span>Operating Hours</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#careers">
                      <div className="footer-nav-link">
                        <span>Careers</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Get in Touch</h3>
                <div className="footer-contact-info">
                  <a href="mailto:support@cheaprots.com?subject=">
                    <div className="footer-contact-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                      <span>support@cheaprots.com</span>
                    </div>
                  </a>
                </div>
                <div className="footer-trust-badges">
                  <div className="footer-trust-badge">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Secure</span>
                  </div>
                  <div className="footer-trust-badge">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                          width="18"
                          height="11"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                    <span>Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider-wrapper">
            <div aria-hidden="true" className="footer-divider"></div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © 2025 Cheaprots. All rights reserved.
              </p>
            </div>
            <div className="footer-bottom-right">
              <a href="#privacy">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-legal-separator">
                |
              </span>
              <a href="#terms">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-legal-separator">
                |
              </span>
              <a href="#cookies">
                <div className="footer-legal-link">
                  <span>Cookie Policy</span>
                </div>
              </a>
            </div>
          </div>
          <button
            id="footer-back-to-top"
            aria-label="Back to top"
            className="footer-back-to-top"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="m18 15l-6-6l-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-scan {0%,100% {transform: translateY(0);
opacity: 0.6;}
50% {transform: translateY(200px);
opacity: 0.3;}}@keyframes footer-glow-pulse {0%,100% {transform: scale(1) translateY(0);
opacity: 0.4;}
50% {transform: scale(1.2) translateY(-30px);
opacity: 0.6;}}@keyframes footer-logo-glow-pulse {0%,100% {opacity: 0.6;
transform: translateY(-50%) scale(1);}
50% {opacity: 1;
transform: translateY(-50%) scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  // Back to top button functionality
  const backToTopButton = document.getElementById("footer-back-to-top")

  // Show/hide button based on scroll position
  function handleScroll() {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("footer-visible")
    } else {
      backToTopButton.classList.remove("footer-visible")
    }
  }

  // Scroll to top with smooth animation
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Event listeners
  window.addEventListener("scroll", handleScroll, { passive: true })
  backToTopButton.addEventListener("click", scrollToTop)

  // Initial check
  handleScroll()
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
