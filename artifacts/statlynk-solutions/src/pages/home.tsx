import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Arrow, Shell } from '@/components/statlynk/shared';

const reasons = [
  ['01', 'Operational Discipline', 'Experience gained from demanding operational environments where reliability, accuracy, situational awareness and rapid decision-making matter.'],
  ['02', 'Security First', 'Security-conscious technology, infrastructure and cybersecurity solutions designed to help organizations reduce risk and improve resilience.'],
  ['03', 'Data-Driven Thinking', 'Analytics, survey intelligence, AI and automation that transform information into meaningful business decisions.'],
  ['04', 'Business-Focused Technology', 'Practical technology solutions designed around business outcomes, efficiency, scalability and long-term value.'],
];
const services = [
  ['01', 'AI Survey Solutions', 'Design intelligent survey platforms, feedback systems and AI-powered survey analytics for faster insight.'],
  ['02', 'Managed IT Support Services', 'Reliable support, monitoring and infrastructure management for secure, productive environments.'],
  ['03', 'Cybersecurity & VAPT Services', 'Assessments, vulnerability testing, hardening and cybersecurity improvement services.'],
  ['04', 'Cloud & DevOps', 'Cloud infrastructure, automation, CI/CD, containerization and DevOps transformation.'],
  ['05', 'Data Analytics & Business Intelligence', 'Turn business data into dashboards, trends and actionable intelligence.'],
  ['06', 'AI Automation & Digital Transformation', 'Automate repetitive processes and use AI to improve productivity and decision-making.'],
];
const industries = ['Healthcare', 'Education', 'Small & Medium Businesses', 'Startups', 'Government & Public Sector', 'Professional Services', 'Retail & E-commerce', 'Research & Survey Organizations'];

export default function Home() {
  return (
    <Shell meta={{ title: 'StatLynk Solutions | Technology. Intelligence. Security.', description: 'StatLynk Solutions helps organizations modernize technology, secure infrastructure, automate operations and transform data into actionable business intelligence.' }}>
      <main>
        <section className="sl-hero">
          <div className="sl-container sl-hero-grid">
            <div>
              <div className="sl-eyebrow">StatLynk Solutions · Infinite Possibilities</div>
              <h1>Technology.<br /><span style={{ color: 'var(--sl-blue, #0f4c81)' }}>Intelligence.</span><br />Security.<br /><span style={{ color: 'var(--sl-mint, #00c896)' }}>Infinite Possibilities.</span></h1>
              <p className="sl-lead" data-testid="text-home-lead">We help organizations modernize technology, secure infrastructure, automate operations, and transform data into actionable business intelligence.</p>
              <div className="sl-actions">
                <Link className="sl-btn sl-btn-primary" href="/services" data-testid="link-home-services">Explore Our Services <ArrowRight size={15} aria-hidden="true" /></Link>
                <a className="sl-btn sl-btn-outline" href="mailto:info@statlynksolutions.com" data-testid="link-home-experts">Talk to Our Experts</a>
              </div>
              <p className="sl-cred" data-testid="text-home-cred">Founded by an Indian Air Force Veteran | Nearly 20 Years of Operational Experience | Technology &amp; Business Solutions</p>
            </div>
            <div className="sl-hero-art" role="img" aria-label="Abstract StatLynk technology network visual" data-testid="visual-home-orbit">
              <div className="sl-orbit" aria-hidden="true" />
              <div className="sl-core" aria-hidden="true">SL</div>
              <div className="sl-art-label">Operational intelligence / 01</div>
            </div>
          </div>
        </section>

        <section className="sl-section">
          <div className="sl-container">
            <div className="sl-section-head">
              <div><div className="sl-kicker">The StatLynk difference</div><h2>Why StatLynk Solutions?</h2></div>
              <p className="sl-copy">Technology should solve business problems, strengthen resilience and create measurable outcomes. StatLynk combines expertise with an operational mindset built around discipline, security and reliability.</p>
            </div>
            <div className="sl-grid-4">
              {reasons.map(([num, title, text]) => (
                <article className="sl-card" key={title} data-testid={`card-reason-${num}`}>
                  <div className="sl-num">{num}</div><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sl-section sl-dark">
          <div className="sl-container sl-leadership">
            <div className="sl-portrait" role="img" aria-label="Abstract StatLynk leadership visual" data-testid="visual-home-leadership" />
            <div>
              <div className="sl-kicker">Founder &amp; leadership</div>
              <h2>Built on Discipline.<br />Driven by Experience.</h2>
              <p className="sl-copy">The founder of StatLynk Solutions is an Indian Air Force veteran with nearly two decades of service experience. Today, he brings that operational mindset into technology—helping organizations strengthen IT infrastructure, cybersecurity, cloud environments, data capabilities and digital operations.</p>
              <Link className="sl-btn sl-btn-outline" style={{ marginTop: 20, color: '#d3eef3', borderColor: '#5f91a7' }} href="/about" data-testid="link-home-leadership">Meet Our Leadership <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="sl-section">
          <div className="sl-container">
            <div className="sl-section-head">
              <div><div className="sl-kicker">The translation</div><h2>From Defence to Digital</h2></div>
              <p className="sl-copy">Mission-Ready Thinking for Modern Business. Professional experience becomes a practical lens for technology leadership.</p>
            </div>
            <div className="sl-columns">
              <div><h3>Military Operations</h3><ul className="sl-list">{['Discipline', 'Situational Awareness', 'Risk Management', 'Mission Readiness', 'Resilience', 'Decision Making'].map((item) => <li key={item} data-testid={`list-item-operations-${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</li>)}</ul></div>
              <div><h3>StatLynk Solutions</h3><ul className="sl-list">{['IT Operations', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'AI Automation', 'Digital Transformation'].map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="sl-section" style={{ paddingTop: 20 }}>
          <div className="sl-container">
            <div className="sl-section-head">
              <div><div className="sl-kicker">Capabilities</div><h2>Technology with a job to do.</h2></div>
              <Link className="sl-btn sl-btn-outline" href="/services" data-testid="link-home-all-services">View all services <Arrow /></Link>
            </div>
            <div className="sl-services-grid">
              {services.map(([num, title, text]) => (
                <article className="sl-card sl-service" key={title} data-testid={`card-home-service-${num}`}>
                  <div className="sl-num">{num}</div><div><h3>{title}</h3><p>{text}</p><Link href="/services" data-testid={`link-home-service-${num}`}>Explore service <Arrow /></Link></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sl-section">
          <div className="sl-container">
            <div className="sl-section-head">
              <div><div className="sl-kicker">Perspective</div><h2>Industries we serve</h2></div>
              <Link className="sl-btn sl-btn-outline" href="/industries" data-testid="link-home-industries">See industries <Arrow /></Link>
            </div>
            <div className="sl-industry-grid">
              {industries.map((item, index) => <article className="sl-card sl-industry" key={item} data-testid={`card-home-industry-${index + 1}`}><div className="sl-num">0{index + 1}</div><h3>{item}</h3><p>Technology shaped around the realities of your operating environment.</p></article>)}
            </div>
          </div>
        </section>

        <section className="sl-section sl-dark">
          <div className="sl-container">
            <div className="sl-section-head"><div><div className="sl-kicker">Our approach</div><h2>From Challenge to Outcome</h2></div><p className="sl-copy">A clear, collaborative path from the problem in front of you to an operating model that keeps improving.</p></div>
            <div className="sl-timeline">
              {[['01', 'Understand', 'Understand the business, technology and operational challenge.'], ['02', 'Assess', 'Identify risks, inefficiencies and opportunities.'], ['03', 'Design', 'Develop a practical and scalable technology strategy.'], ['04', 'Implement', 'Deploy secure, reliable and maintainable solutions.'], ['05', 'Optimize', 'Continuously improve performance, security and outcomes.']].map(([num, title, text]) => <div className="sl-step" key={num} data-testid={`step-home-approach-${num}`}><div className="sl-num">{num}</div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="sl-section">
          <div className="sl-container">
            <div className="sl-section-head"><div><div className="sl-kicker">Example solutions</div><h2>What this can look like.</h2></div><Link className="sl-btn sl-btn-outline" href="/case-studies" data-testid="link-home-solution-areas">View solution areas <Arrow /></Link></div>
            <div className="sl-3col">
              {['AI Survey Intelligence Platform', 'Cloud & DevOps Modernization', 'Cybersecurity & Infrastructure Assessment'].map((item, index) => <article className="sl-card" key={item} data-testid={`card-home-solution-${index + 1}`}><div className="sl-num">Solution Area · 0{index + 1}</div><h3>{item}</h3><p>Illustrative ways StatLynk can help organizations modernize, understand risk and turn information into action.</p></article>)}
            </div>
          </div>
        </section>

        <section className="sl-section" style={{ paddingTop: 20 }}>
          <div className="sl-container sl-2col"><div><div className="sl-kicker">Insights</div><h2>Questions worth asking before you modernize.</h2></div><div><p className="sl-copy">Our future content hub will explore Cloud &amp; DevOps, Cybersecurity, AI &amp; Automation, Data Analytics, IT Infrastructure and Digital Transformation.</p><Link className="sl-btn sl-btn-outline" style={{ marginTop: 16 }} href="/insights" data-testid="link-home-insights">Explore Insights <Arrow /></Link></div></div>
        </section>

        <section className="sl-banner">
          <div className="sl-container"><div className="sl-kicker" style={{ color: '#9de2df' }}>Trust differentiator</div><h2>Built with the mindset of mission-critical operations.</h2><p>Discipline. Resilience. Security. Precision. Reliability. StatLynk brings an operational mindset into modern technology delivery.</p><Link className="sl-btn sl-btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,.4)', marginTop: 14 }} href="/contact" data-testid="link-home-conversation">Start a conversation <Arrow /></Link></div>
        </section>
      </main>
    </Shell>
  );
}