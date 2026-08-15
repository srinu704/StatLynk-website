import { Arrow, PageHero, Shell } from '@/components/statlynk/shared';
import { Link } from 'wouter';

const industries = [
  ['01', 'Healthcare', 'Support secure, dependable systems and better information flows across care organizations.'],
  ['02', 'Education', 'Make learning operations, collaboration and data more connected and accessible.'],
  ['03', 'Small & Medium Businesses', 'Build a reliable technology foundation that scales with the business.'],
  ['04', 'Startups', 'Move quickly with focused digital products, infrastructure and automation.'],
  ['05', 'Government & Public Sector', 'Approach complex environments with discipline, security and clear accountability.'],
  ['06', 'Professional Services', 'Help knowledge-led teams protect information and streamline delivery.'],
  ['07', 'Retail & E-commerce', 'Connect customer experience, operational data and dependable digital platforms.'],
  ['08', 'Research & Survey Organizations', 'Turn feedback and research data into useful, timely intelligence.'],
];

export default function Industries() {
  return (
    <Shell meta={{ title: 'Industries | StatLynk Solutions', description: 'StatLynk Solutions adapts secure, practical technology delivery to healthcare, education, businesses, startups, public sector and other operating environments.' }}>
      <main>
        <PageHero kicker="Industries we serve" title="Business context changes everything." copy="Our technology work starts with the realities of your organization—your people, risk profile, workflows and ambitions." />
        <section className="sl-section"><div className="sl-container"><div className="sl-industry-grid">{industries.map(([num, title, text]) => <article className="sl-card sl-industry" key={title} data-testid={`card-industry-${num}`}><div className="sl-num">{num}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="sl-section sl-dark"><div className="sl-container sl-2col"><div><div className="sl-kicker">A grounded approach</div><h2>Technology should fit the way work actually happens.</h2></div><div><p className="sl-copy">Whether you are building a new capability or improving an established operation, we focus on practical architecture, secure delivery and outcomes your team can sustain.</p><Link className="sl-btn sl-btn-outline" style={{ color: '#d3eef3', borderColor: '#5f91a7', marginTop: 18 }} href="/contact" data-testid="link-industries-challenge">Talk through your challenge <Arrow /></Link></div></div></section>
      </main>
    </Shell>
  );
}