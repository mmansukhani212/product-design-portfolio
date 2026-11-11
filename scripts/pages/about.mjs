/** About copy follows content/about.md and Monisha's approved personal notes. */
export default function render(ctx) {
  const {e, section} = ctx;
  const values = [
    ["Human first", "I design for different abilities, contexts, and levels of confidence, with clarity and accessibility built into the experience."],
    ["Stay curious", "I ask questions early and use research to check whether we're solving the right problem."],
    ["Make complexity clear", "I simplify workflows and interactions while keeping the detail people need to make confident decisions."],
    ["Keep learning", "I adapt to feedback, new evidence, and changing constraints, treating each iteration as a chance to improve."]
  ];
  const strengths = [
    ["User research", "I turn interviews, usability tests, and feedback into clear design decisions."],
    ["Product thinking", "I connect user needs, business goals, and technical constraints to help the team decide what to build."],
    ["Design systems", "I build reusable components and interaction patterns that keep interfaces consistent as products grow."],
    ["Collaboration", "I work with product, engineering, and stakeholders to share context, resolve trade-offs, and move ideas into implementation."]
  ];

  return `<article class="about-page case-study">
    <header class="about-hero">
      <h1>Hi, I'm Monisha!</h1>
        <div class="about-intro-copy">
          <p>I'm a multidisciplinary Product Designer with a background in architecture and a master's in Human-Computer Interaction and Design from Indiana University Bloomington. My journey from designing physical spaces to digital experiences has shaped how I approach design—combining spatial thinking, user research, and a systems perspective to create intuitive, meaningful products.</p>
          <p>Today, I work at the intersection of design, strategy, and technology, turning complex problems into simple, human-centered solutions. From interfaces to AI-powered tools, I love bringing ideas to life while balancing form, function, and impact.</p>
          <p>Originally from Bangalore and now based in NYC, I enjoy collaborating across disciplines, exploring new ideas, and creating experiences that make a difference.</p>
        </div>
      <figure class="about-portrait"><div class="portrait-crop"><img src="/assets/monisha-bio-portrait.webp" alt="Monisha Mansukhani smiling outdoors" width="1120" height="1182" fetchpriority="high" decoding="async"></div></figure>
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

    <section id="outside-work" class="about-interests" aria-labelledby="interests-title">
      <div class="outside-copy">
        <h2 id="interests-title">Outside work</h2>
        <p>Away from my desk, you'll usually find me at the piano, lost in a book, or out on a hiking trail.</p>
        <p>I love noticing the small details—with a camera in hand, exploring somewhere new, or taking a quick escape to the beach.</p>
      </div>
      <div class="outside-collage" role="group" aria-label="A few moments outside work">
        <div class="outside-photo-grid">
          <img class="collage-piano" src="/assets/outside-piano.webp" alt="Monisha playing the piano beside a sunlit window" width="415" height="900" loading="lazy" decoding="async">
          <img class="collage-books" src="/assets/outside-books.webp" alt="An aisle lined with stacks of books" width="675" height="900" loading="lazy" decoding="async">
          <img class="collage-tower" src="/assets/outside-tower.webp" alt="An ornate stone tower against a blue sky" width="675" height="900" loading="lazy" decoding="async">
          <img class="collage-beach" src="/assets/outside-beach.webp" alt="A quiet beach with palm trees along the shore" width="1000" height="450" loading="lazy" decoding="async">
          <img class="collage-trail" src="/assets/outside-trail.webp" alt="A woodland trail beside a flowing stream" width="675" height="900" loading="lazy" decoding="async">
          <img class="collage-architecture" src="/assets/outside-architecture.webp" alt="A patterned museum facade with a lawn in front" width="675" height="900" loading="lazy" decoding="async">
        </div>
      </div>
    </section>

  </article>`;
}
