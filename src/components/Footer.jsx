import React from 'react';
import { SITE_METADATA } from '../data/stories';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-divider-line" aria-hidden="true"></div>
      <div className="footer-content">
        <span className="footer-star" aria-hidden="true">✦</span>
        <p className="footer-text">
          {SITE_METADATA.disclaimer}
        </p>
      </div>
    </footer>
  );
}
