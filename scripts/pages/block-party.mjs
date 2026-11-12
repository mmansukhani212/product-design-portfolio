const conceptScenes = {
  kiosk: `<svg viewBox="0 0 320 240" role="img" aria-labelledby="bp-kiosk-title bp-kiosk-desc">
    <title id="bp-kiosk-title">Collaborative kiosk concept</title><desc id="bp-kiosk-desc">A digital illustration of the paper concept: residents arrange stackable blocks on a shared City Hall planning screen.</desc>
    <rect x="54" y="24" width="212" height="146" rx="14" fill="#fff" stroke="currentColor" stroke-width="2"/>
    <rect x="65" y="35" width="190" height="122" rx="7" fill="#f2edf5"/>
    <path d="M145 170h30l8 27h-46z" fill="#d7cede"/><rect x="121" y="195" width="78" height="7" rx="3.5" fill="currentColor"/>
    <path d="m83 116 77-40 77 40-77 40z" fill="#e2dbe7"/>
    <g stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
      <path d="m116 113 31-16 31 16-31 16z" fill="#fff"/><path d="m116 113 31 16v19l-31-16z" fill="#c9bcd4"/><path d="m147 129 31-16v19l-31 16z" fill="#ab96bc"/>
      <g class="bp-animate bp-block-drop"><path d="m116 88 31-16 31 16-31 16z" fill="#fff"/><path d="m116 88 31 16v19l-31-16z" fill="#c9bcd4"/><path d="m147 104 31-16v19l-31 16z" fill="#ab96bc"/><ellipse cx="137" cy="85" rx="6" ry="3" fill="#e2dbe7"/><ellipse cx="155" cy="85" rx="6" ry="3" fill="#e2dbe7"/></g>
      <path d="m181 124 22-12 22 12-22 12z" fill="#e3ebdd"/><path d="m181 124 22 12v11l-22-12z" fill="#b8c9ae"/><path d="m203 136 22-12v11l-22 12z" fill="#9fb192"/>
    </g>
    <g fill="currentColor"><circle cx="48" cy="182" r="12"/><path d="M29 219v-9a19 19 0 0 1 38 0v9z"/><circle cx="272" cy="182" r="12"/><path d="M253 219v-9a19 19 0 0 1 38 0v9z"/></g>
    <path d="m63 191 26-18m168 18-26-18" stroke="#ab96bc" stroke-width="7" stroke-linecap="round"/>
    <g class="bp-animate bp-confirm" fill="#574565"><rect x="224" y="54" width="20" height="20" rx="10"/><path d="m229 64 4 4 6-8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>
  </svg>`,
  ar: `<svg viewBox="0 0 320 240" role="img" aria-labelledby="bp-ar-title bp-ar-desc">
    <title id="bp-ar-title">Augmented reality concept</title><desc id="bp-ar-desc">A digital interpretation of the paper sketch: a phone overlays a proposed green space on an existing neighborhood street.</desc>
    <path d="M20 150 138 90l162 69-140 65z" fill="#e2dbe7"/>
    <path d="m26 61 50-20 40 19v84l-40 20-50-24z" fill="#fff" stroke="#bcb0c7" stroke-width="1.6"/><path d="M76 41v123m-50-103 50 20 40-21" fill="none" stroke="#bcb0c7" stroke-width="1.6"/>
    <path d="m210 40 44-17 39 17v92l-39 18-44-18z" fill="#fff" stroke="#bcb0c7" stroke-width="1.6"/><path d="M254 23v127m-44-110 44 18 39-18" fill="none" stroke="#bcb0c7" stroke-width="1.6"/>
    <path d="m91 188 55-28 45 20" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="12 9"/>
    <g class="bp-animate bp-phone-pan"><rect x="66" y="85" width="208" height="119" rx="17" fill="#fff" stroke="currentColor" stroke-width="3"/><rect x="78" y="96" width="181" height="96" rx="8" fill="#f2edf5"/><path d="m85 168 74-39 91 34-78 27z" fill="#e2dbe7"/><circle cx="266" cy="144" r="3" fill="#c9bcd4"/>
      <g class="bp-animate bp-proposal-reveal"><path d="m112 154 54-27 57 25-55 27z" fill="#c0d0b4" stroke="#97ae86"/><path d="m132 154 33-17 35 16-33 16z" fill="none" stroke="#fff" stroke-width="3"/><path d="M149 147v-12m38 18v-12" stroke="#66825c" stroke-width="3"/><circle cx="149" cy="131" r="9" fill="#90ab7d"/><circle cx="187" cy="138" r="9" fill="#90ab7d"/></g>
    </g>
    <g class="bp-animate bp-confirm"><rect x="109" y="43" width="85" height="29" rx="14.5" fill="currentColor"/><path d="m130 56 5 5 8-10" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M153 53h22m-22 7h15" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>
  </svg>`,
  sandbox: `<svg viewBox="0 0 320 240" role="img" aria-labelledby="bp-sandbox-title bp-sandbox-desc">
    <title id="bp-sandbox-title">Visual planning sandbox concept</title><desc id="bp-sandbox-desc">A digital illustration of the chosen paper concept: a resident places a ready-made park into a neighborhood plot, then shares the proposal.</desc>
    <rect x="24" y="22" width="272" height="196" rx="14" fill="#fff" stroke="currentColor" stroke-width="2"/>
    <rect x="35" y="34" width="250" height="135" rx="6" fill="#f2edf5"/><path d="m44 99 112-57 121 57-113 60z" fill="#e2dbe7"/>
    <path d="m55 107 98-49m-64 68 98-49m-64 67 98-49m-33 49-99-49m133 32-99-49" stroke="#fff" stroke-width="3"/>
    <path d="m99 96 58-29 63 29-59 31z" fill="#fff" stroke="#ab96bc" stroke-width="1.4" stroke-dasharray="5 4"/>
    <path d="m48 72 24-12 24 12-24 12z" fill="#c9bcd4"/><path d="m48 72 24 12v22l-24-12zm24 12 24-12v22l-24 12z" fill="#b6a3c4"/>
    <rect x="45" y="181" width="43" height="25" rx="6" fill="#e2dbe7"/><rect x="96" y="181" width="43" height="25" rx="6" fill="#e3ebdd"/><rect x="147" y="181" width="43" height="25" rx="6" fill="#e2dbe7"/>
    <path d="m56 195 10-6 11 6-10 6z" fill="#ab96bc"/><circle cx="118" cy="192" r="6" fill="#90ab7d"/><path d="M157 194h23" stroke="#ab96bc" stroke-width="3"/>
    <g class="bp-animate bp-park-place"><path d="m112 96 45-22 48 22-46 23z" fill="#c0d0b4" stroke="#97ae86"/><path d="m130 96 27-13 29 13-27 14z" fill="none" stroke="#fff" stroke-width="3"/><path d="M145 91v-12m33 20V87" stroke="#66825c" stroke-width="2.5"/><circle cx="145" cy="77" r="8" fill="#90ab7d"/><circle cx="178" cy="85" r="8" fill="#90ab7d"/></g>
    <g class="bp-animate bp-confirm"><rect x="229" y="178" width="53" height="30" rx="15" fill="currentColor"/><path d="m245 193 7 7 13-14" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
  </svg>`,
};
const conceptScene = kind => `<div class="bp-concept-scene" data-concept-scene>${conceptScenes[kind]}<button class="bp-concept-play" type="button" aria-pressed="false" aria-label="Play ${kind === 'ar' ? 'AR' : kind} concept animation" hidden>Play Animation</button></div>`;

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
      body: `<div class="case-prose"><p>A co-design workshop with four participants explored three directions. After designing and evaluating paper concepts with two city planners and two users, I developed a visual planning sandbox: contextual feedback plus a way to arrange and share ideas.</p></div>
        <div class="bp-concepts">
          <article>${conceptScene('kiosk')}<div><span class="bp-small-label">Explored · Kiosk</span><h3>Build together, in person.</h3><p>Collaborative blocks at City Hall offered shared discussion, tied to organized sessions.</p></div></article>
          <article>${conceptScene('ar')}<div><span class="bp-small-label">Explored · AR</span><h3>Overlay a proposal on a place.</h3><p>An AR concept connected feedback to a resident’s view of the physical site.</p></div></article>
          <article class="bp-selected-concept">${conceptScene('sandbox')}<div><span class="bp-small-label">Selected · Visual planning sandbox</span><h3>Explore, respond, and create.</h3><p>A virtual neighborhood combined proposal feedback with resident-built ideas in one experience.</p></div></article>
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
