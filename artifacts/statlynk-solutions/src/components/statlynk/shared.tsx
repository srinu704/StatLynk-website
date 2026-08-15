import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export const siteRoutes = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const;

export type PageMetaValues = {
  title: string;
  description: string;
};

export function PageMeta({ title, description }: PageMetaValues) {
  useEffect(() => {
    document.title = title;
    const updateMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, selector.match(/["']([^"']+)["']/)?.[1] ?? '');
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    updateMeta('meta[name="description"]', 'name', description);
    updateMeta('meta[property="og:title"]', 'property', title);
    updateMeta('meta[property="og:description"]', 'property', description);
    updateMeta('meta[property="og:type"]', 'property', 'website');
    updateMeta('meta[property="og:url"]', 'property', 'https://statlynksolutions.com');
  }, [description, title]);

  return null;
}

export function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      className="sl-wordmark"
      onClick={onNavigate}
      data-testid="link-wordmark"
      aria-label="StatLynk Solutions home"
    >
      <span className="sl-mark" aria-hidden="true">S</span>
      <span>StatLynk <span style={{ fontWeight: 500 }}>Solutions</span></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setOpen(false);

  return (
    <header className="sl-header">
      <div className="sl-container">
        <nav className="sl-nav" aria-label="Primary navigation">
          <Wordmark onNavigate={closeMenu} />
          <div className="sl-navlinks">
            {siteRoutes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={location === item.href ? 'page' : undefined}
                onClick={closeMenu}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="sl-btn sl-btn-primary"
            onClick={closeMenu}
            data-testid="link-header-consultation"
          >
            Get a Consultation <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="sl-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            data-testid="button-mobile-menu"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
        <div id="mobile-navigation" className={`sl-mobile ${open ? 'open' : ''}`}>
          {siteRoutes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={location === item.href ? 'page' : undefined}
              onClick={closeMenu}
              data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="sl-btn sl-btn-primary"
            style={{ marginTop: 14 }}
            onClick={closeMenu}
            data-testid="link-mobile-consultation"
          >
            Get a Consultation <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="sl-footer">
      <div className="sl-container">
        <div className="sl-footer-grid">
          <div>
            <Wordmark />
            <p>Infinite Possibilities.<br />A security-conscious technology partner for modern business.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            {siteRoutes.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Services</h3>
            {['AI Survey Solutions', 'Managed IT Support', 'Cybersecurity & VAPT', 'Cloud & DevOps', 'Data Analytics', 'AI Automation'].map((label) => (
              <Link key={label} href="/services" data-testid={`link-footer-service-${label.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:info@statlynksolutions.com" data-testid="link-footer-email">info@statlynksolutions.com</a>
            <p data-testid="text-footer-domain">statlynksolutions.com</p>
          </div>
        </div>
        <div className="sl-footer-bottom">
          <span data-testid="text-footer-copyright">© StatLynk Solutions. Infinite Possibilities.</span>
          <span data-testid="text-footer-positioning">Technology · Intelligence · Security</span>
        </div>
      </div>
    </footer>
  );
}

export function Shell({
  children,
  meta,
}: {
  children: ReactNode;
  meta: PageMetaValues;
}) {
  return (
    <div className="sl-site">
      <PageMeta {...meta} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="sl-page-hero" data-testid={`hero-${kicker.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>
      <div className="sl-container">
        <div className="sl-kicker">{kicker}</div>
        <h1 data-testid="text-page-title">{title}</h1>
        <p className="sl-lead" data-testid="text-page-lead">{copy}</p>
      </div>
    </section>
  );
}

export const Arrow = () => <ArrowRight size={16} aria-hidden="true" />;