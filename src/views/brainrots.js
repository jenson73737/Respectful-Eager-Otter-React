import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './brainrots.css'

const Brainrots = (props) => {
  return (
    <div className="brainrots-container1">
      <Helmet>
        <title>Brainrots - Respectful Eager Otter</title>
        <meta
          property="og:title"
          content="Brainrots - Respectful Eager Otter"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="brainrots-container2">
        <div className="brainrots-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-title, .stat-number, .center-icon, .price-pulse, .cta-primary {
  animation: none !important;
}
.particles, .particles::before, .particles::after {
  display: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero-section"
        role="region"
        aria-labelledby="hero-heading"
        className="hero-section"
      >
        <div className="hero-container">
          <div className="hero__content">
            <h1 id="hero-heading" className="brainrots-hero-title">
              {' '}
              Cheaprots — Brainrots Catalog
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="brainrots-hero-subtitle">
              {' '}
              Discover elite Brainrots for Steal a Brainrot. Sleek, secure, and
              lightning-fast — browse the catalog and find the perfect gear to
              dominate the game.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <form
              role="search"
              aria-label="Search Brainrots catalog"
              className="hero__controls"
            >
              <div className="search-wrapper">
                <input
                  type="search"
                  id="search-input"
                  aria-label="Search Brainrots"
                  placeholder="Search by name, trait, or rarity..."
                  className="search-input"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="search-btn"
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
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="quick-filters">
                <button
                  type="button"
                  aria-label="Filter: All items"
                  aria-pressed="true"
                  className="filter-chip"
                >
                  {' '}
                  All
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Filter: New items"
                  aria-pressed="false"
                  className="filter-chip"
                >
                  {' '}
                  New
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Filter: Rare items"
                  aria-pressed="false"
                  className="filter-chip"
                >
                  {' '}
                  Rare
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Filter: Legendary items"
                  aria-pressed="false"
                  className="filter-chip"
                >
                  {' '}
                  Legendary
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                <button
                  type="button"
                  aria-label="Filter: Under 500 Robux"
                  aria-pressed="false"
                  className="filter-chip"
                >
                  {' '}
                  Under 500 Robux
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="hero__visual">
            <div className="visual-grid">
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item grid-item--center">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                  className="center-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18m-9-9h18"></path>
                    <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  </g>
                </svg>
              </div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
              <div aria-hidden="true" className="grid-item"></div>
            </div>
            <div aria-hidden="true" className="particles"></div>
          </div>
        </div>
      </section>
      <section
        id="product-grid"
        role="region"
        aria-label="Brainrot product placeholders"
        className="product-grid-section"
      >
        <div className="grid-container">
          <div role="group" aria-labelledby="grid-header" className="panel">
            <header className="grid-header">
              <h2 id="grid-header" className="grid-title">
                Product Grid — Placeholder
              </h2>
              <p className="grid-subtitle">
                {' '}
                Grid reserved for Brainrots. Product cards will appear here with
                thumbnails, names, rarity tags, price, ratings, and quick
                actions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </header>
            <div className="products-grid">
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge">Legendary</span>
                    <span className="price">1,250 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.8 (234)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge--rare rarity-badge">
                      Rare
                    </span>
                    <span className="price">750 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.6 (142)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card--featured card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                  <span className="featured-badge">Featured</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Premium Brainrot</h3>
                  <div className="card-meta">
                    <span className="rarity-badge rarity-badge--epic">
                      Epic
                    </span>
                    <span className="price">2,100 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.9 (567)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge--uncommon rarity-badge">
                      Uncommon
                    </span>
                    <span className="price">350 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.5 (89)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge">Legendary</span>
                    <span className="price">1,850 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.7 (321)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge--rare rarity-badge">
                      Rare
                    </span>
                    <span className="price">950 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.4 (178)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge rarity-badge--epic">
                      Epic
                    </span>
                    <span className="price">1,500 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.8 (412)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
              <article tabindex="0" className="card">
                <div className="card-thumbnail">
                  <div className="skeleton-shimmer"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Brainrot Title</h3>
                  <div className="card-meta">
                    <span className="rarity-badge--uncommon rarity-badge">
                      Uncommon
                    </span>
                    <span className="price">480 R$</span>
                  </div>
                  <div className="card-rating">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>4.3 (96)</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button aria-label="Add to favorites" className="icon-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        id="browse-highlights"
        role="region"
        aria-label="Browse highlights carousel"
        className="highlights-section"
      >
        <div className="highlights-container">
          <aside className="highlights-rail">
            <div className="spotlight-card rail-card">
              <div className="spotlight-content">
                <h3 className="spotlight-title">Creator Spotlight</h3>
                <p className="spotlight-name">@NeonDealer</p>
                <div className="spotlight-badges">
                  <span className="badge">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
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
                    <span>
                      {' '}
                      Verified
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="badge">
                    <svg
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      4.9
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <p className="spotlight-desc">
                  Top seller with 2,400+ verified sales
                </p>
              </div>
            </div>
            <div className="trust-strip rail-card">
              <h3 className="rail-title">Trust &amp; Assurance</h3>
              <ul className="trust-list">
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
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
                  <span>
                    {' '}
                    Secure checkout
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    72h refund window
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Community-rated
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section
        id="information-section"
        role="region"
        aria-label="Information and guidance"
        className="information-section"
      >
        <div className="info-container">
          <div className="info-panel">
            <article
              role="region"
              aria-labelledby="safety"
              className="guidance-block"
            >
              <h2 id="safety" className="guidance-title">
                Safety &amp; Account Guidance
              </h2>
              <p className="guidance-text">
                {' '}
                Cheaprots never asks for your Roblox password. Use secure
                payment methods and enable two-factor authentication on your
                Roblox account.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="guidance-list">
                <li>
                  <span>Account protection guaranteed</span>
                </li>
                <li>
                  <span>Report suspicious activity immediately</span>
                </li>
              </ul>
            </article>
          </div>
          <aside className="info-rail">
            <div className="security-badges">
              <div className="badge-item">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
                <span>Secure Platform</span>
              </div>
              <div className="badge-item">
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
              <div className="badge-item">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Verified</span>
              </div>
            </div>
            <button
              aria-label="Get help from support team"
              className="btn btn-primary cta-persistent"
            >
              <span>
                {' '}
                Need Help?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Contact Support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </aside>
        </div>
      </section>
      <section
        id="trust-section"
        role="region"
        aria-labelledby="trust-heading"
        aria-describedby="trust-desc"
        className="trust-section"
      >
        <div className="trust-wrapper">
          <div className="trust-panel">
            <div className="trust-cluster">
              <div className="trust-card-central">
                <div className="central-stat">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
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
                  <span className="stat-number">4.9/5</span>
                </div>
                <h2 id="trust-heading" className="trust-heading">
                  {' '}
                  Trusted by players, rated by the community
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p id="trust-desc" className="trust-tagline">
                  Cheaprots Trust Score
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <span className="metric-value">12,430</span>
                <span className="metric-label">Secured Transactions</span>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="metric-value">98%</span>
                <span className="metric-label">Delivery Success</span>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <span className="metric-value">6 min</span>
                <span className="metric-label">Avg. Response Time</span>
              </div>
            </div>
            <div className="trust-pills">
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                <span>
                  {' '}
                  Encrypted payments
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                <span>
                  {' '}
                  Account protection
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  72h refund guarantee
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  4,812 verified reviews
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
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
                <span>
                  {' '}
                  99.98% uptime
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="pill">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
                <span>
                  {' '}
                  Live support 7 days/week
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="cta-section"
        role="region"
        aria-label="Browse Brainrots call to action"
        className="cta-section"
      >
        <div className="cta-container">
          <div className="cta-panel">
            <h2 className="cta-title">Explore the Grid</h2>
            <p className="cta-subtitle">Find your next Brainrot</p>
            <p className="cta-text">
              {' '}
              Dive into our neon-curated catalog and unlock rare steals, curated
              for speed and style.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-benefits">
              <div className="benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Save Favorites</span>
              </div>
              <div className="benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
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
                <span>Secure Checkout</span>
              </div>
              <div className="benefit">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
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
                <span>Instant Alerts</span>
              </div>
            </div>
            <div className="cta-actions">
              <button
                aria-describedby="cta-microcopy"
                className="btn-lg cta-primary btn btn-primary"
              >
                {' '}
                Browse Catalog
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button className="btn-lg btn-outline btn">Contact Team</button>
            </div>
            <p id="cta-microcopy" className="cta-microcopy">
              {' '}
              Fast, encrypted purchases with purchase guarantees and clear
              refund terms for peace of mind.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="trust-badges-inline">
              <span className="trust-badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                <span>
                  {' '}
                  Buyer Protection
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="trust-badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  72h Refund
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="trust-badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                <span>
                  {' '}
                  Encrypted
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
          <div className="product-canvas">
            <div className="canvas-card"></div>
            <div className="canvas-card"></div>
            <div className="canvas-card"></div>
            <div className="canvas-card"></div>
            <div className="canvas-card"></div>
            <div className="canvas-card"></div>
          </div>
        </div>
      </section>
      <div className="brainrots-container4">
        <div className="brainrots-container5">
          <Script
            html={`<style>
        @keyframes glow-pulse {0% {text-shadow: 0 0 20px var(--logo-glow);}
100% {text-shadow: 0 0 30px var(--logo-glow), 0 0 40px var(--logo-glow);}}@keyframes grid-pulse {0% {box-shadow: --shadow-level-1;}
100% {box-shadow: var(--shadow-level-2), 0 0 12px var(--panel-glow);}}@keyframes icon-rotate {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes particle-float {0%,100% {transform: translateY(0);
opacity: 0.3;}
50% {transform: translateY(-20px);
opacity: 0.6;}}@keyframes shimmer {0% {background-position: 200% 0;}
100% {background-position: -200% 0;}}@keyframes scale-pulse {0% {transform: scale(1);}
100% {transform: scale(1.03);}}@keyframes pulse {0%,100% {box-shadow: --shadow-level-2;}
50% {box-shadow: var(--shadow-level-3), 0 0 20px var(--panel-glow);}}@keyframes fade-in-up {to {opacity: 1;
transform: translateY(0);}}@keyframes cta-glow {0% {box-shadow: --shadow-level-2;}
100% {box-shadow: var(--shadow-level-3), 0 0 24px var(--panel-glow);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="brainrots-container6">
        <div className="brainrots-container7">
          <Script
            html={`<script defer data-name="brainrots-catalog">
(function(){
  // Search Input Typing Animation
  const searchInput = document.getElementById("search-input")
  if (searchInput) {
    const placeholders = [
      "Search by name, trait, or rarity...",
      'Try "Legendary"...',
      'Try "Combat Brainrot"...',
      "Search for your perfect steal...",
    ]
    let currentIndex = 0

    setInterval(() => {
      currentIndex = (currentIndex + 1) % placeholders.length
      searchInput.placeholder = placeholders[currentIndex]
    }, 3000)
  }

  // Filter Chip Toggle
  const filterChips = document.querySelectorAll(".filter-chip")
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const isPressed = chip.getAttribute("aria-pressed") === "true"
      chip.setAttribute("aria-pressed", !isPressed)
    })
  })

  // Sidebar Filter Chips
  const chips = document.querySelectorAll(".chip")
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const isPressed = chip.getAttribute("aria-pressed") === "true"
      chip.setAttribute("aria-pressed", !isPressed)
    })
  })

  // Price Range Slider
  const priceMin = document.getElementById("price-min")
  const priceMax = document.getElementById("price-max")
  const priceDisplay = document.getElementById("price-display")

  function updatePriceDisplay() {
    if (priceMin && priceMax && priceDisplay) {
      const minVal = parseInt(priceMin.value)
      const maxVal = parseInt(priceMax.value)

      if (minVal <= maxVal) {
        priceDisplay.textContent = \`\${minVal} - \${maxVal} Robux\`
      }
    }
  }

  if (priceMin && priceMax) {
    priceMin.addEventListener("input", updatePriceDisplay)
    priceMax.addEventListener("input", updatePriceDisplay)
  }

  // Carousel Functionality
  const carousel = document.getElementById("highlights-carousel")
  const slides = document.querySelectorAll(".carousel-slide")
  const indicators = document.querySelectorAll(".indicator")
  const prevBtn = document.querySelector(".carousel-btn--prev")
  const nextBtn = document.querySelector(".carousel-btn--next")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index)
    })
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index)
      indicator.setAttribute("aria-selected", i === index)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide)
  if (prevBtn) prevBtn.addEventListener("click", prevSlide)

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto-rotate carousel (respect prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  if (!prefersReducedMotion && carousel) {
    setInterval(nextSlide, 5000)
  }

  // Parallax Effect on Hero Visual (respect reduced motion)
  if (!prefersReducedMotion) {
    const heroVisual = document.querySelector(".hero__visual")

    window.addEventListener("scroll", () => {
      if (heroVisual) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.2
        heroVisual.style.transform = \`translateY(\${rate}px)\`
      }
    })
  }

  // Product Card Hover Effects
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (!prefersReducedMotion) {
        card.style.transform = "translateY(-4px)"
      }
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })

  // Filter Apply Button
  const applyBtn = document.querySelector(".filter-apply")
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      console.log("Filters applied")
      // Filter logic would go here
    })
  }

  // Filter Reset Button
  const resetBtn = document.querySelector(".filter-reset")
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      // Reset all chips
      chips.forEach((chip) => {
        chip.setAttribute("aria-pressed", "false")
      })

      // Reset sliders
      if (priceMin) priceMin.value = 0
      if (priceMax) priceMax.value = 5000
      updatePriceDisplay()

      // Reset toggles
      const toggles = document.querySelectorAll(".toggle-input")
      toggles.forEach((toggle) => {
        toggle.checked = true
      })

      console.log("Filters reset")
    })
  }

  // Icon Button Favorites
  const iconBtns = document.querySelectorAll(".icon-btn")
  iconBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const svg = btn.querySelector("svg path")
      if (svg) {
        const isFilled = svg.getAttribute("fill") === "currentColor"
        svg.setAttribute("fill", isFilled ? "none" : "currentColor")
      }
    })
  })

  // Accessibility: Keyboard navigation for cards
  cards.forEach((card) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        card.click()
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="brainrots-container8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="brainrots-icon201"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="brainrots-text42">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Brainrots
