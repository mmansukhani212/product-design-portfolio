/** Block Party: 2025 capstone research, with a clearly separated current interactive prototype. */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, media, section, preview, nextProject, next, productLink} = ctx;
  const screen = (name, alt, caption, eager = false) => media({
    src: `/assets/block-party-mobile-${name}.webp`, alt, caption,
    width: 393, height: 852, className: 'bp-phone-screen', eager,
  });
  return `<article class="case-study block-party-page">
    ${caseHeader({
      kicker: 'Block Party | Civic Tech Mobile App',
      title: 'Reimagining civic participation through interactive urban design',
      summary: 'A gamified mobile experience that empowers residents to visualize neighborhood changes, propose ideas, and shape the future of their communities.',
      tags: ['Civic Technology', 'Gamification', 'UX Research'],
    })}

    <div class="case-wrap bp-hero">
      <div class="bp-hero-phones" aria-label="Block Party mobile app screens">
        ${screen('explore', 'Block Party mobile Explore screen with an illustrated neighborhood, project bottom sheet, and bottom navigation.', '', true)}
        ${screen('builder', 'Block Party mobile proposal builder with ready-made elements and a highlighted planning site.', '', true)}
      </div>
    </div>

    ${productLink('/demos/block-party/', 'Open Mobile Demo')}

    ${overview({
      summary: '<p>Bloomington’s public input process for urban planning projects relied on newsletters, surveys, and council meetings, yet many younger residents were unaware of opportunities to participate. Research with residents and city planners led me to focus on civic-oriented residents aged 18–35 and make urban proposals easier to understand and respond to.</p><p>Working with the City Council of Bloomington, Indiana, I developed Block Party, an interactive community planning mobile app. Its visual planning sandbox lets residents arrange predefined features such as parks and bike lanes, create proposals, vote, and share feedback—making neighborhood planning more accessible.</p>',
      metadata: [
        ['My role', 'UX Designer'],
        ['Design scope', 'User research, participatory design, interaction design, prototyping, usability testing'],
        ['Target users', 'Civic-oriented Bloomington residents, ages 18–35'],
        ['Team', 'Bloomington urban planners and city council members'],
        ['Duration', 'January–May 2025']
      ],
      outcome: {title: '42% increase in community engagement', body: 'Beta testing with 30 Bloomington residents showed higher participation through proposal submissions, with a reported 42% increase in engagement compared with previous participation patterns.'}
    })}

    <div class="case-reading-layout">
      ${caseNav([
        'block-party-problem',
        'block-party-exploration',
        'block-party-testing',
        'block-party-solution',
        'block-party-impact',
        'block-party-reflection',
      ])}
      <div class="case-reading-content bp-story">

    ${section({
      id: 'block-party-problem', title: 'A proposal cannot invite input if people cannot picture it.',
      body: `<div class="case-prose"><p>Bloomington’s existing input channels included newsletters, surveys, council meetings, and design presentations. Research exposed gaps in awareness, convenience, and visual context. I narrowed a broad urban-design ambition to community projects and civic-oriented residents aged 18–35.</p></div>
        <figure class="bp-friction-map"><ol>
          <li><span>01 · Discover</span><strong>Hear about a project</strong><p>Low awareness kept residents out of the conversation.</p></li>
          <li><span>02 · Understand</span><strong>Picture the change</strong><p>Proposals were difficult to visualize in context.</p></li>
          <li><span>03 · Contribute</span><strong>Make an opinion useful</strong><p>Input could arrive too late or be misinterpreted.</p></li>
        </ol></figure>
        <p class="bp-hmw"><span>How might we</span> help younger residents understand neighborhood changes and contribute ideas that planners can interpret?</p>
        <div class="bp-table-wrap" role="region" aria-label="Research evidence and design implications; scroll on small screens" tabindex="0"><table class="bp-evidence"><caption><strong>Documented Findings → Design Implications</strong></caption><thead><tr><th scope="col">Evidence</th><th scope="col">Design implication</th></tr></thead><tbody>
          <tr><td>Low awareness and inconvenient participation.</td><td>Let residents explore projects beyond a meeting.</td></tr>
          <tr><td>Proposals shown without enough spatial context.</td><td>Locate a proposed change in its neighborhood.</td></tr>
          <tr><td>Feedback could be misinterpreted.</td><td>Pair comments with visual ideas and project context.</td></tr>
        </tbody></table></div>`,
    })}

    ${section({
      id: 'block-party-exploration', title: 'Keep the context of a place. Add the freedom to propose.',
      body: `<div class="case-prose"><p>A workshop with four participants explored three directions. After comparing paper concepts with two city planners and two users, I developed a visual planning sandbox: contextual feedback plus a way to arrange and share ideas.</p></div>
        <div class="bp-concepts">
          <article><div><span class="bp-small-label">Explored · Kiosk</span><h3>Build together, in person.</h3><p>Collaborative blocks at City Hall offered shared discussion, tied to organized sessions.</p></div></article>
          <article><div><span class="bp-small-label">Explored · AR</span><h3>Overlay a proposal on a place.</h3><p>An AR concept connected feedback to a resident’s view of the physical site.</p></div></article>
          <article class="bp-selected-concept"><div><span class="bp-small-label">Selected · Visual planning sandbox</span><h3>Explore, respond, and create.</h3><p>A virtual neighborhood combined proposal feedback with resident-built ideas in one experience.</p></div></article>
        </div>`,
    })}

    ${section({
      id: 'block-party-testing', title: 'Testing made choice and feedback the next priorities.',
      body: `<div class="case-prose"><p>Six Bloomington residents tested the 2025 high-fidelity prototype. Their feedback identified two refinements. The later mobile app carries these refinements into the participation flow.</p></div>
        <dl class="bp-change-ledger">
          <div><dt>Choosing an element</dt><dd><span>2025 finding</span>Prefab elements needed clearer organization.</dd><dd><span>Later change</span>Buildings, Outdoors, and Mobility categories give the library structure.</dd></div>
          <div><dt>Recognizing a result</dt><dd><span>2025 finding</span>A new design’s arrival in the plot needed emphasis.</dd><dd><span>Later change</span>Placement feedback and a submission preview show the result of an action.</dd></div>
        </dl>
        <div class="bp-current-builder">${screen('builder','Deployed Block Party mobile builder with Buildings, Outdoors, and Mobility categories.','Categorized elements in the deployed mobile app')}</div>
`,
    })}

    ${section({
      id: 'block-party-solution', title: 'Explore, propose, and follow what happens next.',
      body: `<div class="case-prose"><p>Block Party demonstrates three connected participation flows: understand a project, create a proposal in a visual planning sandbox, and follow updates. Residents arrange predefined assets and share ideas through a visual, game-like experience. Beta testing with 30 Bloomington residents showed a reported 42% increase in community engagement through proposal submissions.</p></div>
        <div class="bp-flow-gallery" role="region" aria-label="Three mobile flows; scroll to inspect on small screens" tabindex="0">
          <article><h3>01 · Understand a project</h3>${screen('project','Current Block Party expanded project sheet with location, status, and timeline.','Project details in an expandable sheet')}<p>Explore → Hopewell West → expand the sheet. Read context before contributing.</p></article>
          <article><h3>02 · Put an idea in place</h3>${screen('builder','Current mobile builder with a Park placed inside the highlighted planning boundary.','A browser-local design draft')}<p>Design this space → choose or drag an element → Review idea. A limited library reduces the blank-page task.</p></article>
          <article><h3>03 · Stay involved</h3>${screen('activity','Current mobile Notifications screen with a sample proposal in feasibility review.','Illustrative proposal progress')}<p>Notifications → My proposals. A reference, next step, and review stage explain what follows.</p></article>
        </div>
        ${preview({
          id: 'block-party-prototype',
          title: 'Try the mobile prototype',
          src: 'https://mmansukhani212.github.io/block-party/',
          externalUrl: '/demos/block-party/',
          image: '/assets/block-party-mobile-explore.webp',
          alt: 'Static mobile Explore screen; load the working app or open the phone demo below.',
          width: 393, height: 852,
          loadLabel: 'Load Interactive Prototype',
        })}`,
    })}

    ${section({
      id: 'block-party-impact', title: '42% increase in community engagement.',
      body: `<div class="bp-impact"><div class="bp-impact-number"><strong>42%</strong><span>Increase in community engagement · Beta testing</span></div><div><h3>Streamlining public input.</h3><p>In beta testing with 30 Bloomington residents, proposal submissions reflected a reported 42% increase in community engagement compared with previous participation patterns. The visual planning sandbox gave residents a more approachable way to contribute ideas.</p><p>Six Bloomington residents tested the 2025 prototype, saw potential for inclusive engagement, and identified two usability refinements. The beta findings are distinct from this earlier usability study.</p></div></div>`,
    })}

    ${section({
      id: 'block-party-reflection', title: 'A digital channel needs a representative conversation.',
      body: '<div class="case-prose"><p>Architecture taught me that a proposal changes everyday life. This project taught me to narrow the question enough to test it—and to consider whose input reaches a decision.</p><p>Ready-made elements lower the barrier to proposing, while limiting what residents can express. Next, I would test the revised builder and feedback flow across different levels of digital confidence, then work with planners on interpreting conflicting input. Outreach and a credible review process need to grow alongside the interface.</p></div>',
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
