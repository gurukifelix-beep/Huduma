const WHATSAPP_URL = 'https://wa.me/254789165611';
const EMAIL = 'gurukfelix@gmail.com';
const PREORDER_URL = 'https://pre-order.hudumacredit.com';

const requirements = [
  {
    number: '01',
    title: 'Valid driver’s licence',
    description: 'Bring a current licence for your application.',
  },
  {
    number: '02',
    title: 'National ID and KRA PIN',
    description: 'Have your national identification and KRA PIN certificate ready.',
  },
  {
    number: '03',
    title: 'Six-month M-PESA statement',
    description: 'Provide a statement covering the last six months.',
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function PlanCard({ title, duration, deposit, daily, featured = false }) {
  return (
    <article className={`plan-card${featured ? ' plan-card-featured' : ''}`}>
      <div className="plan-card-heading">
        <div>
          <span className="plan-label">{featured ? 'MOST POPULAR' : 'FLEXIBLE TERM'}</span>
          <h3>{title}</h3>
        </div>
        <span className="duration">{duration}</span>
      </div>
      <div className="plan-detail"><span>Deposit</span><strong>{deposit}</strong></div>
      <div className="plan-detail"><span>Daily payment</span><strong>{daily}</strong></div>
      <div className="plan-detail"><span>Contract term</span><strong>{duration}</strong></div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="page-width nav">
          <a className="brand" href="#home" aria-label="Huduma Credit home">
            <span className="brand-symbol" aria-hidden="true">h</span>
            <span>huduma<span className="brand-light">credit</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#plans">Plans</a>
            <a href="#requirements">Requirements</a>
            <a className="nav-cta" href={PREORDER_URL}>Get started <ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Premium e-bike financing</div>
              <h1>Own the road.<br /><em>Without the rush.</em></h1>
              <p className="hero-description">
                Flexible financing for modern riders across Kenya—with reliable support,
                nationwide battery swapping, and a simpler path to ownership.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href={PREORDER_URL}>Explore your options <ArrowIcon /></a>
                <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">→</span></a>
              </div>
              <div className="trust-row" aria-label="Huduma Credit network information">
                <div className="trust-item"><strong>415<span>+</span></strong><span>swap stations</span></div>
                <span className="trust-divider" aria-hidden="true" />
                <div className="trust-item"><strong>15,000<span>+</span></strong><span>riders supported</span></div>
              </div>
            </div>

            <div className="plans-panel" id="plans">
              <div className="panel-topline"><span>OWN YOUR RIDE</span><span className="availability"><i /> Plans available</span></div>
              <h2>Choose your pace.</h2>
              <p className="panel-intro">Straightforward options designed to help you ride sooner.</p>
              <div className="plan-list">
                <PlanCard title="Standard" duration="12 months" deposit="KSh 15,000" daily="KSh 500 / day" featured />
                <PlanCard title="Value" duration="24 months" deposit="Confirm amount" daily="KSh 290 / day" />
              </div>
              <p className="deposit-note"><span aria-hidden="true">*</span> The 24-month deposit appears in the supplied details as both KSh 10,000 and KSh 15,000. Please confirm the correct amount before publishing or finalising an application.</p>
            </div>
          </div>
          <div className="hero-caption page-width"><span>01 — BUILT FOR THE JOURNEY</span><span>KENYA</span></div>
        </section>

        <section className="requirements-section" id="requirements">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <div className="eyebrow">A simple start</div>
                <h2>Ready when you are.</h2>
              </div>
              <p>Just a few essentials to get your e-bike financing application moving.</p>
            </div>
            <div className="requirements-grid">
              {requirements.map((item) => (
                <article className="requirement" key={item.number}>
                  <span className="requirement-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="page-width closing-panel">
            <div className="closing-mark" aria-hidden="true">h.</div>
            <div className="closing-copy">
              <div className="eyebrow">Your road, your next chapter</div>
              <h2>Let’s get you moving.</h2>
              <p>Explore the pre-order page for full details, or reach out to our team with your questions.</p>
            </div>
            <div className="closing-actions">
              <a className="button button-light" href={PREORDER_URL}>Start your pre-order <ArrowIcon /></a>
              <a className="closing-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp our team</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-content">
          <a className="brand footer-brand" href="#home"><span className="brand-symbol" aria-hidden="true">h</span><span>huduma<span className="brand-light">credit</span></span></a>
          <span className="footer-copy">© {new Date().getFullYear()} Huduma Credit</span>
          <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>
    </>
  );
}

export default App;
