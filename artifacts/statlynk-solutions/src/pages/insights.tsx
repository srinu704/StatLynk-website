import { Arrow, PageHero, Shell } from '@/components/statlynk/shared';
import { Link } from 'wouter';

const categories = [
  ['01', 'Cloud & DevOps', 'Practical notes on cloud foundations, delivery and operating change.'],
  ['02', 'Cybersecurity', 'Perspectives on risk, resilience and responsible security practice.'],
  ['03', 'AI & Automation', 'Ideas for using AI and automation where work can be meaningfully improved.'],
  ['04', 'Data Analytics', 'Ways to make information clearer, more useful and more actionable.'],
  ['05', 'IT Infrastructure', 'Foundations for reliable, maintainable technology environments.'],
  ['06', 'Digital Transformation', 'Grounded thinking about turning technology ambition into progress.'],
];

export default function Insights() {
  return (
    <Shell meta={{ title: 'Insights | StatLynk Solutions', description: 'Explore the StatLynk Solutions future content hub for grounded perspectives on cloud, cybersecurity, AI, analytics, infrastructure and digital transformation.' }}>
      <main>
        <PageHero kicker="Insights / Future content hub" title="Useful perspective for technology leaders." copy="An emerging library for clear thinking about the systems, risks and opportunities shaping modern business." />
        <section className="sl-section"><div className="sl-container"><div className="sl-grid-4">{categories.map(([num, title, text]) => <article className="sl-card" key={title} data-testid={`card-insight-${num}`}><div className="sl-num">{num}</div><h3>{title}</h3><p>{text}</p><div style={{ marginTop: 24, color: '#0f4c81', fontSize: 13, fontWeight: 700 }} data-testid={`status-insight-${num}`}>Coming to Insights <Arrow /></div></article>)}</div></div></section>
        <section className="sl-banner"><div className="sl-container"><div className="sl-kicker" style={{ color: '#9de2df' }}>A growing point of view</div><h2>Good decisions begin with better questions.</h2><p>We are building a collection of practical ideas for organizations navigating technology change with care.</p><Link className="sl-btn sl-btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,.4)', marginTop: 14 }} href="/contact" data-testid="link-insights-contact">Explore Insights <Arrow /></Link></div></section>
      </main>
    </Shell>
  );
}