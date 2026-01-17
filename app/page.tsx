
export default function Home() {
  return (
    <div className="container" style={{position: 'relative', zIndex: 1}}>
      {/* Animated Tech Bubbles Background */}
      <div style={{position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', width: '100vw', height: '100vh', overflow: 'hidden'}} aria-hidden="true">
        <svg width="100%" height="100%" style={{position: 'absolute', left: 0, top: 0}}>
          <circle cx="10%" cy="20%" r="48" fill="#1de9b6" fillOpacity="0.10">
            <animate attributeName="cy" values="20%;25%;20%" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="30%" r="32" fill="#ff7e29" fillOpacity="0.10">
            <animate attributeName="cy" values="30%;35%;30%" dur="9s" repeatCount="indefinite" />
          </circle>
          <rect x="60%" y="70%" width="60" height="60" rx="18" fill="#1de9b6" fillOpacity="0.08">
            <animate attributeName="y" values="70%;65%;70%" dur="11s" repeatCount="indefinite" />
          </rect>
          <rect x="20%" y="80%" width="40" height="40" rx="12" fill="#ff7e29" fillOpacity="0.08">
            <animate attributeName="y" values="80%;75%;80%" dur="13s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      {/* HERO SECTION */}
      <section className="section fade-in" id="hero" style={{position: 'relative', zIndex: 1}}>
        <div className="card" style={{paddingTop: '3rem', paddingBottom: '3rem', position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap'}}>
            {/* Main Hero Content Centered */}
            <div style={{flex: 1, minWidth: 240, textAlign: 'center'}}>
              {/* Hero Main Visual: heropic.png (Large Landing Visual) */}
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem', width: '100%'}}>
                <img 
                  src="/heropic.png" 
                  alt="Alex Gitari Hero" 
                  className="hero-img"
                />
              </div>
              <div style={{maxWidth: 600, margin: '0 auto', textAlign: 'center'}}>
                <h1 className="hero-title" style={{fontSize: '2.7rem', fontWeight: 800, marginBottom: '1.1rem', lineHeight: 1.15}}>
                  Building Scalable Digital Systems That Drive <span className="accent">Real Business Impact</span>
                </h1>
                <p className="hero-sub" style={{fontSize: '1.25rem', color: 'var(--foreground)', marginBottom: '2.2rem', lineHeight: 1.5}}>
                  Full-Stack Developer | Laravel • Java (Spring Boot) • Vue • React<br/>
                  POS Systems • DMS • Analytics • Automation
                </p>
                <div>
                  <a href="#projects" className="btn">View My Work</a>
                  <a href="#contact" className="btn" style={{background: 'var(--accent-alt)'}}>Hire Me / Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="section fade-in" id="about">
        <div className="card" style={{display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', padding: '2.5rem 2rem'}}>
          <div style={{flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', borderRadius: '1.2rem', width: 90, height: 90, boxShadow: '0 2px 12px 0 rgba(29,233,182,0.10)'}}>
            {/* About Me Icon */}
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><circle cx="27" cy="27" r="26" stroke="#1de9b6" strokeWidth="2" fill="#1de9b6" fillOpacity="0.08"/><path d="M27 16a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm0 16c-6.075 0-11 3.134-11 7v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2c0-3.866-4.925-7-11-7z" fill="#1de9b6" fillOpacity="0.18"/></svg>
          </div>
          <div style={{flex: 1, minWidth: 220}}>
            <h2 style={{fontWeight: 700, fontSize: '2rem', marginBottom: '0.7rem'}}>About Me</h2>
            <p style={{fontSize: '1.13rem', color: 'var(--foreground)', lineHeight: 1.7}}>
              I’m Alex Gitari, a Computer Science graduate and Full-Stack Developer with hands-on experience building and maintaining enterprise-level systems for universities, distributors, and retail/wholesale businesses.<br/><br/>
              I specialize in translating business problems into robust technical solutions, collaborating seamlessly with management, operations, and development teams. My focus is on delivering outcomes that drive efficiency, accuracy, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS & TECH STACK */}
      <section className="section fade-in" id="skills">
        <div className="card" style={{padding: '2.5rem 2rem'}}>
          <h2 style={{fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center'}}>Skills & Tech Stack</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center'}}>
            {/* Backend */}
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 270, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.3rem 1.1rem', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.07)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.7rem'}}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="6" width="24" height="16" rx="4" fill="#1de9b6" fillOpacity="0.13"/><rect x="2" y="6" width="24" height="16" rx="4" stroke="#1de9b6" strokeWidth="2"/><rect x="7" y="11" width="14" height="6" rx="2" fill="#1de9b6" fillOpacity="0.18"/></svg>
                <h4 style={{fontWeight: 600, fontSize: '1.15rem', margin: 0}}>Backend</h4>
              </div>
              <ul style={{fontSize: '1.05rem', lineHeight: 1.7, paddingLeft: 0, listStyle: 'none'}}>
                <li>Laravel (APIs, Auth, Orders, Payments, Mail, CRUD)</li>
                <li>Java – Spring Boot (JWT, REST APIs)</li>
                <li>PHP, MySQL</li>
              </ul>
            </div>
            {/* Frontend */}
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 270, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.3rem 1.1rem', boxShadow: '0 2px 12px 0 rgba(255,126,41,0.07)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.7rem'}}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="6" width="24" height="16" rx="4" fill="#ff7e29" fillOpacity="0.13"/><rect x="2" y="6" width="24" height="16" rx="4" stroke="#ff7e29" strokeWidth="2"/><rect x="7" y="11" width="14" height="6" rx="2" fill="#ff7e29" fillOpacity="0.18"/></svg>
                <h4 style={{fontWeight: 600, fontSize: '1.15rem', margin: 0}}>Frontend</h4>
              </div>
              <ul style={{fontSize: '1.05rem', lineHeight: 1.7, paddingLeft: 0, listStyle: 'none'}}>
                <li>Vue.js (Dashboards, Admin Panels, State Management)</li>
                <li>React.js (Modern UI, POS interfaces)</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>
            {/* Systems & Tools */}
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 270, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.3rem 1.1rem', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.07)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.7rem'}}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" fill="#1de9b6" fillOpacity="0.13" stroke="#1de9b6" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="3" fill="#ff7e29" fillOpacity="0.18"/></svg>
                <h4 style={{fontWeight: 600, fontSize: '1.15rem', margin: 0}}>Systems & Tools</h4>
              </div>
              <ul style={{fontSize: '1.05rem', lineHeight: 1.7, paddingLeft: 0, listStyle: 'none'}}>
                <li>POS Systems</li>
                <li>Distributor Management Systems (DMS)</li>
                <li>Analytics & Reporting</li>
                <li>Git & GitHub</li>
                <li>M-Pesa & payment workflows</li>
                <li>Mailjet / Email Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section fade-in" id="projects">
        <div className="card">
          <h2>Featured Projects</h2>
          <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
            {/* Project Card Example */}
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>Mobiz POS System</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Retail & Wholesale Management</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Laravel</span>, <span className="accent-alt">Vue.js</span>, MySQL</div>
              <p><b>Problem:</b> Manual sales, inventory, and reporting processes.<br/>
                <b>Solution:</b> Custom POS system for real-time sales, inventory, and analytics.<br/>
                <b>Impact:</b> Improved reporting accuracy, reduced manual work, supported business operations at scale.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>Distributor Management System (DMS)</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Super User & Automation</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Java</span>, <span className="accent-alt">Spring Boot</span>, MySQL</div>
              <p><b>Problem:</b> Inefficient distributor operations and lack of automation.<br/>
                <b>Solution:</b> DMS with automation, analytics, and super user controls.<br/>
                <b>Impact:</b> Streamlined operations, enabled automation, improved analytics.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>Ticket Hub</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Online Ticket Sales</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Laravel</span>, <span className="accent-alt">Vue.js</span>, M-Pesa</div>
              <p><b>Problem:</b> Manual ticketing and payment reconciliation.<br/>
                <b>Solution:</b> Online ticket sales platform with M-Pesa integration.<br/>
                <b>Impact:</b> Automated sales, secure payments, improved customer experience.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>E-commerce Platform for Digital Templates</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Digital Products</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Vue.js</span>, <span className="accent-alt">Laravel</span></div>
              <p><b>Problem:</b> No platform for digital template sales.<br/>
                <b>Solution:</b> E-commerce site for digital templates.<br/>
                <b>Impact:</b> Enabled new revenue stream, automated delivery.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>University Consultancy Website (DEKUTES)</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Consultancy</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Laravel</span>, <span className="accent-alt">Vue.js</span></div>
              <p><b>Problem:</b> Outdated, static university site.<br/>
                <b>Solution:</b> Modern, dynamic consultancy website.<br/>
                <b>Impact:</b> Improved engagement, streamlined information access.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
            <div className="card" style={{padding: '1.5rem'}}>
              <h3>Hospital Management System (HMS)</h3>
              <div className="accent" style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>Healthcare</div>
              <div style={{marginBottom: '0.5rem'}}><span className="accent-alt">Laravel</span>, <span className="accent-alt">Vue.js</span></div>
              <p><b>Problem:</b> Manual hospital operations and reporting.<br/>
                <b>Solution:</b> HMS for patient, staff, and reporting management.<br/>
                <b>Impact:</b> Increased efficiency, reduced errors, improved reporting.
              </p>
              <a href="#" className="btn" style={{marginTop: '1rem'}}>View Case Study</a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & IMPACT */}
      <section className="section fade-in" id="experience">
        <div className="card" style={{padding: '2.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '2.2rem', flexWrap: 'wrap'}}>
          <div style={{flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', borderRadius: '1.2rem', width: 80, height: 80, boxShadow: '0 2px 12px 0 rgba(255,126,41,0.10)'}}>
            {/* Experience Icon */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect x="2" y="8" width="40" height="28" rx="6" fill="#ff7e29" fillOpacity="0.10" stroke="#ff7e29" strokeWidth="2"/><rect x="10" y="16" width="24" height="12" rx="3" fill="#ff7e29" fillOpacity="0.18"/></svg>
          </div>
          <div style={{flex: 1, minWidth: 220}}>
            <h2 style={{fontWeight: 700, fontSize: '2rem', marginBottom: '0.7rem'}}>Experience & Impact</h2>
            <ul style={{fontSize: '1.13rem', color: 'var(--foreground)', lineHeight: 1.7, paddingLeft: '1.2rem', margin: 0}}>
              <li style={{marginBottom: '0.7rem'}}><b>Internship & Super User roles:</b> Supported enterprise system rollouts, trained users, and improved reporting accuracy.</li>
              <li style={{marginBottom: '0.7rem'}}><b>Freelancing:</b> Delivered custom web apps and automation tools for diverse clients.</li>
              <li style={{marginBottom: '0.7rem'}}><b>Enterprise Systems:</b> Built and maintained POS, DMS, analytics, and reporting solutions.</li>
              <li><b>Business Impact:</b> Improved reporting accuracy, reduced manual work, supported business operations at scale.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section fade-in" id="services">
        <div className="card" style={{padding: '2.5rem 2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem'}}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="3" y="8" width="32" height="22" rx="6" fill="#1de9b6" fillOpacity="0.10" stroke="#1de9b6" strokeWidth="2"/><rect x="10" y="15" width="18" height="8" rx="2" fill="#1de9b6" fillOpacity="0.18"/></svg>
            <h2 style={{fontWeight: 700, fontSize: '2rem', margin: 0}}>Services</h2>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem', justifyContent: 'center'}}>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent" style={{fontSize: '1.5rem'}}>🛠️</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>Custom Web Applications</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Tailored solutions for your business needs.</div>
              </div>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(255,126,41,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent-alt" style={{fontSize: '1.5rem'}}>💳</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>POS & Business Management</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Retail, wholesale, and operations systems.</div>
              </div>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent" style={{fontSize: '1.5rem'}}>📊</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>Admin Dashboards & Analytics</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Insightful reporting and management tools.</div>
              </div>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(255,126,41,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent-alt" style={{fontSize: '1.5rem'}}>🔗</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>API Development & Integrations</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Connect your systems and automate workflows.</div>
              </div>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(29,233,182,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent" style={{fontSize: '1.5rem'}}>⚡</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>Automation & Reporting</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Save time and reduce errors with automation.</div>
              </div>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 200, maxWidth: 260, background: 'var(--card-bg)', borderRadius: '1.1rem', padding: '1.2rem 1rem', boxShadow: '0 2px 12px 0 rgba(255,126,41,0.07)', display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}>
              <span className="accent-alt" style={{fontSize: '1.5rem'}}>💡</span>
              <div>
                <div style={{fontWeight: 600, fontSize: '1.08rem'}}>Technical Consultation</div>
                <div style={{fontSize: '0.98rem', opacity: 0.8}}>Expert advice for your digital projects.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section fade-in" id="contact">
        <div className="card" style={{padding: '2.5rem 2rem', maxWidth: 520, margin: '0 auto', background: 'linear-gradient(120deg, var(--card-bg) 80%, #1de9b610 100%)', boxShadow: '0 2px 24px 0 rgba(29,233,182,0.07)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1.1rem', justifyContent: 'center', marginBottom: '1.2rem'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="16" rx="6" fill="#ff7e29" fillOpacity="0.10" stroke="#ff7e29" strokeWidth="2"/><rect x="10" y="14" width="12" height="4" rx="2" fill="#ff7e29" fillOpacity="0.18"/></svg>
            <h2 style={{fontWeight: 700, fontSize: '1.5rem', margin: 0}}>Contact</h2>
          </div>
          <form style={{maxWidth: '400px', margin: '2rem auto 1rem auto', display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
            <input type="text" placeholder="Your Name" required style={{padding: '0.9rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: '1.05rem'}} />
            <input type="email" placeholder="Your Email" required style={{padding: '0.9rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: '1.05rem'}} />
            <textarea placeholder="Your Message" required rows={4} style={{padding: '0.9rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: '1.05rem'}} />
            <button type="submit" className="btn" style={{width: '100%'}}>Send Message</button>
          </form>
          {/* Contact Methods with Flip Hover */}
          <div style={{marginTop: '2.2rem', display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap'}}>
            {/* Email */}
            <a href="mailto:agitari65@gmail.com" className="contact-flip" style={{display: 'inline-block', width: 56, height: 56, perspective: 600}} aria-label="Email">
              <span style={{display: 'block', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--card-bg)', boxShadow: '0 2px 8px 0 rgba(29,233,182,0.10)', position: 'relative', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}} className="contact-flip-inner">
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#ff7e29', backfaceVisibility: 'hidden'}}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/></svg>
                </span>
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#ff7e29', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', fontWeight: 600}}>
                  Email
                </span>
              </span>
            </a>
            {/* Phone */}
            <a href="tel:+254748344757" className="contact-flip" style={{display: 'inline-block', width: 56, height: 56, perspective: 600}} aria-label="Phone">
              <span style={{display: 'block', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--card-bg)', boxShadow: '0 2px 8px 0 rgba(255,126,41,0.10)', position: 'relative', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}} className="contact-flip-inner">
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#1de9b6', backfaceVisibility: 'hidden'}}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
                </span>
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#1de9b6', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', fontWeight: 600}}>
                  Phone
                </span>
              </span>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/alex-gitari-766053228/" target="_blank" rel="noopener" className="contact-flip" style={{display: 'inline-block', width: 56, height: 56, perspective: 600}} aria-label="LinkedIn">
              <span style={{display: 'block', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--card-bg)', boxShadow: '0 2px 8px 0 rgba(29,233,182,0.10)', position: 'relative', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}} className="contact-flip-inner">
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#0077b5', backfaceVisibility: 'hidden'}}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                </span>
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#0077b5', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', fontWeight: 600}}>
                  LinkedIn
                </span>
              </span>
            </a>
            {/* GitHub */}
            <a href="https://github.com/Gitari65" target="_blank" rel="noopener" className="contact-flip" style={{display: 'inline-block', width: 56, height: 56, perspective: 600}} aria-label="GitHub">
              <span style={{display: 'block', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--card-bg)', boxShadow: '0 2px 8px 0 rgba(255,126,41,0.10)', position: 'relative', transition: 'transform 0.5s', transformStyle: 'preserve-3d'}} className="contact-flip-inner">
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#fff', backfaceVisibility: 'hidden'}}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <span style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', fontWeight: 600}}>
                  GitHub
                </span>
              </span>
            </a>
          </div>
          <div style={{marginTop: '2.5rem', fontWeight: 600, fontSize: '1.2rem', textAlign: 'center'}}>Let’s build systems that actually work.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section fade-in" style={{textAlign: 'center', fontSize: '1rem', color: 'var(--foreground)', opacity: 0.7, marginTop: '2rem'}}>
        <div>Alex Gitari &mdash; Full-Stack Developer</div>
        <div style={{marginTop: '0.5rem'}}>&copy; {new Date().getFullYear()} Alex Gitari. All rights reserved.</div>
      </footer>
    </div>
  );
}
