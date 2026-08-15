import { Arrow, PageHero, Shell } from '@/components/statlynk/shared';
import { Link } from 'wouter';

const cases = [
  ['01', 'AI Survey Intelligence Platform', 'A solution area for designing intelligent surveys, gathering stakeholder feedback and turning responses into useful intelligence.'],
  ['02', 'Cloud & DevOps Modernization', 'A solution area covering cloud foundations, delivery automation, infrastructure as code, monitoring and operational improvement.'],
  ['03', 'Cybersecurity & Infrastructure Assessment', 'A solution area for understanding technology risk, reviewing infrastructure and identifying practical security improvements.'],
  ['04', 'Business Process Automation', 'A solution area for mapping manual work, reducing repetitive effort and creating more dependable workflows.'],
];

export default function CaseStudies() {
  return (
    <Shell meta={{ title: 'Example Solutions | StatLynk Solutions', description: 'Review example solution areas from StatLynk Solutions across survey intelligence, cloud and DevOps, cybersecurity and business process automation.' }}>
      <main>
        <PageHero kicker="Example Solutions / Solution Areas" title="A view of what we can help build." copy="These are example solution areas—not client case studies. They illustrate the kinds of business and technology challenges StatLynk is equipped to explore." />
        <section className="sl-section"><div className="sl-container"><div className="sl-3col">{cases.map(([num, title, text]) => <article className="sl-case-card" key={title} data-testid={`card-solution-${num}`}><div><div className="sl-case-label">Example Solution · {num}</div><h3 style={{ marginTop: 20 }}>{title}</h3></div><p>{text}</p><Link style={{ color: '#d8f3f0', fontSize: 13, fontWeight: 700 }} href="/contact" data-testid={`link-solution-contact-${num}`}>Discuss a similar challenge <Arrow /></Link></article>)}</div></div></section>
        <section className="sl-section" style={{ paddingTop: 20 }}><div className="sl-container sl-2col"><div><div className="sl-kicker">How we think</div><h2>Specific enough to be useful. Honest enough to trust.</h2></div><p className="sl-copy">We do not use invented client names, outcomes, dates, logos or testimonials. Every future engagement starts with understanding your context and defining the right measure of progress together.</p></div></section>
      </main>
    </Shell>
  );
}