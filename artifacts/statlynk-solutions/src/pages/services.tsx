import { Arrow, PageHero, Shell } from '@/components/statlynk/shared';
import { Link } from 'wouter';

const services = [
  ['01', 'AI Survey Solutions', 'Design intelligent survey platforms, feedback systems and AI-powered survey analytics for organizations that need faster insights from customer, employee, citizen and stakeholder feedback.'],
  ['02', 'Managed IT Support Services', 'Reliable IT support, monitoring, troubleshooting and infrastructure management to help businesses maintain secure and productive technology environments.'],
  ['03', 'Cybersecurity & VAPT Services', 'Security assessments, vulnerability assessment and penetration testing, infrastructure hardening and cybersecurity improvement services.'],
  ['04', 'Cloud & DevOps', 'Cloud infrastructure, automation, CI/CD, containerization, infrastructure as code, monitoring and DevOps transformation.'],
  ['05', 'Data Analytics & Business Intelligence', 'Turn business data into dashboards, insights, trends and actionable intelligence using modern analytics and BI approaches.'],
  ['06', 'AI Automation & Digital Transformation', 'Automate repetitive processes and use AI to improve productivity, decision-making and customer experiences.'],
  ['07', 'Software & Application Development', 'Build modern business applications, portals, SaaS products, dashboards and digital platforms.'],
  ['08', 'IT Infrastructure Management', 'Infrastructure assessment, server management, virtualization, networking, backup, monitoring and operational support.'],
  ['09', 'Digital Workplace', 'Help organizations improve employee productivity through modern workplace technology, collaboration and secure access.'],
  ['10', 'Business Process Automation', 'Identify manual processes and automate workflows to reduce effort, errors and operational costs.'],
];

export default function Services() {
  return (
    <Shell meta={{ title: 'Services | StatLynk Solutions', description: 'Explore StatLynk Solutions capabilities across AI survey solutions, managed IT, cybersecurity, cloud and DevOps, analytics, automation and digital transformation.' }}>
      <main>
        <PageHero kicker="Capabilities / Services" title="Technology that moves the business forward." copy="From secure infrastructure to intelligent automation, StatLynk Solutions connects the pieces organizations need to operate with more confidence." />
        <section className="sl-section"><div className="sl-container"><div className="sl-services-grid">{services.map(([num, title, text]) => <article className="sl-card sl-service" key={title} data-testid={`card-service-${num}`}><div className="sl-num">{num}</div><div><h3>{title}</h3><p>{text}</p><Link href="/contact" data-testid={`link-service-contact-${num}`}>Discuss this service <Arrow /></Link></div></article>)}</div></div></section>
        <section className="sl-banner"><div className="sl-container"><div className="sl-kicker" style={{ color: '#9de2df' }}>A practical starting point</div><h2>Not sure where to begin?</h2><p>Tell us what is slowing the business down. We will help you understand the challenge and identify a sensible next step.</p><Link className="sl-btn sl-btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,.4)', marginTop: 14 }} href="/contact" data-testid="link-services-consultation">Get a Consultation <Arrow /></Link></div></section>
      </main>
    </Shell>
  );
}