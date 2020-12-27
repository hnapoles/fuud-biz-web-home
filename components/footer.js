import Link from 'next/link';

import footerLinks from '../constants/footerLinks';

export default function Footer() {
  return (
    <footer>
      <ul className="flex items-center justify-between p-8">
        
          {footerLinks.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        
      </ul>
    </footer>
  )
}