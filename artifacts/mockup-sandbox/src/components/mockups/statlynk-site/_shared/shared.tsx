import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import "./styles.css";

export const routes = {
  Home: "/__mockup/preview/statlynk-site/Home",
  About: "/__mockup/preview/statlynk-site/About",
  Services: "/__mockup/preview/statlynk-site/Services",
  Industries: "/__mockup/preview/statlynk-site/Industries",
  "Case Studies": "/__mockup/preview/statlynk-site/CaseStudies",
  Insights: "/__mockup/preview/statlynk-site/Insights",
  Contact: "/__mockup/preview/statlynk-site/Contact",
};

export function Wordmark() { return <a className="sl-wordmark" href={routes.Home}><span className="sl-mark">S</span><span>StatLynk <span style={{fontWeight:500}}>Solutions</span></span></a>; }
export function Header() {
  const [open, setOpen] = useState(false);
  const links = Object.entries(routes);
  return <header className="sl-header"><div className="sl-container"><nav className="sl-nav" aria-label="Primary navigation"><Wordmark /><div className="sl-navlinks">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><a className="sl-btn sl-btn-primary" href={routes.Contact}>Get a Consultation <ArrowRight size={15}/></a><button className="sl-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></nav><div className={`sl-mobile ${open ? "open" : ""}`}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="sl-btn sl-btn-primary" style={{marginTop:14}} href={routes.Contact}>Get a Consultation <ArrowRight size={15}/></a></div></div></header>;
}
export function Footer() { return <footer className="sl-footer"><div className="sl-container"><div className="sl-footer-grid"><div><Wordmark/><p>Infinite Possibilities.<br/>A security-conscious technology partner for modern business.</p></div><div><h3>Quick Links</h3>{Object.entries(routes).map(([label,href])=><a key={label} href={href}>{label}</a>)}</div><div><h3>Services</h3><a href={routes.Services}>AI Survey Solutions</a><a href={routes.Services}>Managed IT Support</a><a href={routes.Services}>Cybersecurity & VAPT</a><a href={routes.Services}>Cloud & DevOps</a><a href={routes.Services}>Data Analytics</a><a href={routes.Services}>AI Automation</a></div><div><h3>Contact</h3><a href="mailto:info@statlynksolutions.com">info@statlynksolutions.com</a><p>statlynksolutions.com</p></div></div><div className="sl-footer-bottom"><span>© StatLynk Solutions. Infinite Possibilities.</span><span>Technology · Intelligence · Security</span></div></div></footer>; }
export function Shell({children}: {children: ReactNode}) { return <div className="sl-site"><Header/>{children}<Footer/></div>; }
export function PageHero({kicker,title,copy}: {kicker:string,title:string,copy:string}) { return <section className="sl-page-hero"><div className="sl-container"><div className="sl-kicker">{kicker}</div><h1>{title}</h1><p className="sl-lead">{copy}</p></div></section>; }
export const Arrow = () => <ArrowRight size={16}/>;