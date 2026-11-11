/** About copy follows content/about.md and Monisha's approved personal notes. */
export default function render(ctx) {
  const {e, section} = ctx;
  const values = [
    ['Make participation easier.', 'Accessibility and inclusion shape how I think about different abilities, contexts, and levels of digital confidence.'],
    ['Let evidence change the direction.', 'I value adaptability: learning about the problem, questioning assumptions, and refining a design as needs evolve.'],
    ['Give every interaction a purpose.', 'My architecture background informs my belief that visual decisions should help people understand and use an experience.'],
    ['Connect disciplines.', 'I bring design into conversation with research, engineering, and business so the experience and the system behind it can work together.']
  ];
  const strengths = [
    ['A spatial perspective', 'Architecture taught me to consider how individual details shape a larger experience.'],
    ['Interface and workflow thinking', 'My Rokt work spans UX/UI, research, automation, and CRM integration.']
  ];

  return `<article class="about-page case-study">
    <header class="about-hero">
      <div class="about-introduction">
        <h1>Hi, I'm Monisha!</h1>
        <div class="about-intro-copy">
          <p>I'm a multidisciplinary Product Designer with a background in architecture and a master's in Human-Computer Interaction and Design from Indiana University Bloomington. My journey from designing physical spaces to digital experiences has shaped how I approach design—combining spatial thinking, user research, and a systems perspective to create intuitive, meaningful products.</p>
          <p>Today, I work at the intersection of design, strategy, and technology, turning complex problems into simple, human-centered solutions. From interfaces to AI-powered tools, I love bringing ideas to life while balancing form, function, and impact.</p>
          <p>Originally from Bangalore and now based in NYC, I enjoy collaborating across disciplines, exploring new ideas, and creating experiences that make a difference.</p>
        </div>
      </div>
      <figure class="about-portrait"><img src="/assets/monisha-mansukhani-portrait.jpeg" alt="Monisha Mansukhani" width="1280" height="1280" fetchpriority="high" decoding="async"></figure>
    </header>

    ${section({
      id:'approach',
      kicker:'Philosophy & process',
      title:'How I work',
      body:`<div class="about-strengths">${values.map(([title,copy]) => `<div><h3>${e(title)}</h3><p>${e(copy)}</p></div>`).join('')}</div>`
    })}

    ${section({
      id:'strengths',
      kicker:'What I bring to a team',
      title:'What I bring to a team',
      body:`<div class="about-strengths">${strengths.map(([title,copy]) => `<div><h3>${e(title)}</h3><p>${e(copy)}</p></div>`).join('')}</div>`
    })}

    <section class="about-interests" aria-labelledby="interests-title">
      <div><h2 id="interests-title">Outside work</h2></div>
      <div><p>I love traveling, discovering cultures, spending time at the piano, and heading to the beach.</p></div>
    </section>

  </article>`;
}
