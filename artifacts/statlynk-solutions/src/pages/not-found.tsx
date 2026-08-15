import { ArrowLeft, CircleAlert } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="sl-site">
      <main className="sl-page-hero" style={{ minHeight: '70dvh', display: 'grid', placeItems: 'center' }}>
        <div className="sl-container" style={{ textAlign: 'center' }}>
          <CircleAlert size={42} color="#00a3e0" aria-hidden="true" />
          <div className="sl-kicker" style={{ marginTop: 20 }}>Signal not found</div>
          <h1 data-testid="text-not-found-title">That page is outside the network.</h1>
          <p className="sl-lead" style={{ marginInline: 'auto' }} data-testid="text-not-found-copy">The route you requested does not exist. Return to the StatLynk home base and continue exploring.</p>
          <Link className="sl-btn sl-btn-primary" style={{ marginTop: 24 }} href="/" data-testid="link-not-found-home"><ArrowLeft size={16} aria-hidden="true" /> Return home</Link>
        </div>
      </main>
      <footer className="sl-footer"><div className="sl-container"><div className="sl-footer-bottom" style={{ marginTop: 0 }}><span>© StatLynk Solutions. Infinite Possibilities.</span><span>Technology · Intelligence · Security</span></div></div></footer>
    </div>
  );
}
