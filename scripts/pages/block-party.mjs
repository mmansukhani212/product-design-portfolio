const conceptScenes = {
  kiosk: `<svg viewBox="0 0 320 240" role="img" aria-labelledby="bp-kiosk-title bp-kiosk-desc">
    <title id="bp-kiosk-title">Physical building-block kiosk</title><desc id="bp-kiosk-desc">Residents at an on-site kiosk arrange small physical building blocks on a shared scale model of their neighborhood, rather than viewing a computer screen.</desc>
    <ellipse cx="160" cy="217" rx="140" ry="12" fill="#eae4ef"/>
    <path d="M102 193v-69m119 66v-68" stroke="#b6a3c4" stroke-width="12"/>
    <path d="m58 117 104-53 104 53-104 56z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="m58 117 104 56 104-56v12l-104 56-104-56z" fill="#b6a3c4" stroke="currentColor" stroke-width="1.5"/>
    <path d="m79 117 83-43 83 43-83 45z" fill="#e2dbe7"/>
    <path d="m108 137 83-43m-58 56 82-43m-81-10 82 44" stroke="#fff" stroke-width="4"/>
    <g stroke="currentColor" stroke-width="1.4" stroke-linejoin="round">
      <path d="m120 108 22-12 23 12-23 13z" fill="#fff"/><path d="m120 108 22 13v16l-22-13zm22 13 23-13v16l-23 13z" fill="#b6a3c4"/>
      <g class="bp-animate bp-block-drop"><path d="m120 89 22-12 23 12-23 13z" fill="#fff"/><path d="m120 89 22 13v15l-22-13z" fill="#c9bcd4"/><path d="m142 102 23-13v15l-23 13z" fill="#ab96bc"/><ellipse cx="135" cy="88" rx="4" ry="2.5" fill="#e2dbe7"/><ellipse cx="149" cy="88" rx="4" ry="2.5" fill="#e2dbe7"/></g>
      <path d="m177 120 25-13 27 13-27 14z" fill="#c0d0b4" stroke="#97ae86"/><path d="M196 117v-12" stroke="#66825c"/><circle cx="196" cy="102" r="7" fill="#90ab7d" stroke="none"/>
    </g>
    <path d="M242 78V45" stroke="#ab96bc" stroke-width="3"/><rect x="204" y="20" width="76" height="34" rx="6" fill="#fff" stroke="#ab96bc"/><text x="242" y="34" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor">COMMUNITY KIOSK</text><text x="242" y="46" text-anchor="middle" font-size="7" fill="currentColor">SCALE MODEL</text>
    <g fill="currentColor"><circle cx="28" cy="100" r="11"/><path d="M13 146v-22a15 15 0 0 1 30 0v22z"/><path d="M18 145v57m20-57v57" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><circle cx="292" cy="100" r="11"/><path d="M277 146v-22a15 15 0 0 1 30 0v22z"/><path d="M282 145v57m20-57v57" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></g>
    <path d="m41 122 30-11 29-4m179 15-26-9-22 5" fill="none" stroke="#ab96bc" stroke-width="7" stroke-linecap="round"/>
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
const conceptScene = kind => `<div class="bp-concept-scene" data-concept-scene tabindex="0" role="group" aria-label="${kind === 'kiosk' ? 'Physical kiosk' : kind === 'ar' ? 'AR' : 'Visual planning sandbox'} concept animation" aria-keyshortcuts="Space Enter" aria-describedby="bp-${kind}-motion-status">${conceptScenes[kind]}<span class="sr-only" id="bp-${kind}-motion-status" data-concept-status>Animation loops automatically. Press Space to pause or resume.</span></div>`;

/** Block Party: 2025 capstone research, with a clearly separated current interactive prototype. */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, media, section, preview, nextProject, next, productLink} = ctx;
  const screen = (name, alt, caption, eager = false) => media({
    src: `/assets/block-party-mobile-${name}.webp`, alt, caption,
    width: 393, height: 852, className: 'bp-phone-screen', eager,
  });
  const featureScreen = (name, alt) => media({src: `/assets/block-party-feature-${name}.jpg`, alt, width: 393, height: 852, className: 'bp-phone-screen'});
  const excerpt = (name, alt, width, height) => media({src: `/assets/block-party-feature-excerpt-${name}.jpg`, alt, width, height, className: 'bp-feedback-excerpt'});
  const featurePairs = [
    [
      ['explore', 'Explore', 'Discover nearby projects on the neighborhood map.'],
      ['project', 'Project Details', 'Read a project’s location, status, context, and planning timeline.'],
    ],
    [
      ['street', 'Street View', 'Switch from the city map to an illustrated street-level view.'],
      ['proposals', 'Community Proposals', 'Browse ideas and filter by support or your own submissions.'],
    ],
    [
      ['feedback', 'Comments & Votes', 'Support or oppose a proposal, read comments, and contribute feedback.'],
      ['builder', 'Visual Builder', 'Look through prefab elements in Buildings, Outdoors, and Mobility categories to propose.'],
    ],
    [
      ['mobility', 'Categorized Elements', 'Drag and drop selected elements into active project plots to propose your ideas.'],
      ['review', 'Review & Submit', 'Preview your design, name the idea, and explain its community value.'],
    ],
    [
      ['upload', 'Supporting References', 'Add visual inspiration or documents alongside a project idea.'],
      ['my-activity', 'My Activity', 'Revisit drafts, continue designing, and find your submitted proposals.'],
    ],
    [
      ['notifications', 'Notifications', 'Follow planner messages, community responses, and unread updates.'],
      ['progress', 'Progress Tracker', 'See the submission’s review stage and what happens next.'],
    ],
  ];
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
        'block-party-research',
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
      id: 'block-party-research', title: 'A narrower problem made meaningful participation possible.',
      body: `<div class="case-prose"><p>My architecture work in India and experiences as a pedestrian in Bloomington raised the same question: how can residents help shape the places they use? I studied participation approaches, then investigated how Bloomington gathered public input.</p></div>
        <dl class="bp-research-methods">
          <div><dt>Secondary research</dt><dd>Research papers, articles, and case studies helped me compare outreach methods, design approaches, and reported participation outcomes.</dd></div>
          <div><dt>Digital ethnography</dt><dd>I reviewed Reddit threads, public forums, and government websites to understand how people encountered and discussed community projects.</dd></div>
          <div><dt>Stakeholder interviews</dt><dd><strong>4 planning interviews</strong> and <strong>6 resident interviews</strong> brought together the perspectives of Bloomington planners and civic-oriented community members.</dd></div>
          <div><dt>Contextual observation</dt><dd>I attended City Council meetings and mapped the existing public-input process with planners and other stakeholders.</dd></div>
        </dl>
        <div class="case-prose bp-current-system"><h3>Understanding the current system</h3><p>Input came through newsletters and online surveys, public council meetings, and design presentations for larger projects. Interviews revealed that residents often did not know meetings were happening. Attendance represented only a small part of the community, while the effort involved discouraged participation.</p></div>
        <div class="bp-research-insights"><h3>What kept people out</h3><ul>
          <li><strong>Awareness comes before access.</strong> Poor outreach and inconvenient participation methods left younger and marginalized residents out of the conversation.</li>
          <li><strong>Feeling heard affects willingness to engage.</strong> The literature connected unheard community voices with distrust and disengagement; participation needed a clearer sense of purpose.</li>
          <li><strong>One approach cannot fit every community.</strong> Different places and project types called for context-specific methods. Participatory workshops and interactive platforms offered promising directions.</li>
          <li><strong>Resources shape whose input is considered.</strong> Tight timelines and limited capacity could leave public involvement overlooked, despite its importance to long-term project sustainability.</li>
        </ul></div>
        <aside class="bp-research-pivot"><h3>Scope was the turning point.</h3><p>I initially wanted to standardize meaningful public input across urban design projects. Differences between communities, regions, and project types made that ambition too broad. I narrowed the brief to community projects overseen by Bloomington’s City Council, focusing on civic-oriented residents aged 18–35 who were underrepresented in existing participation methods. Defining one place, audience, and planning context made the problem feasible to investigate and the proposed experience specific enough to design and test.</p></aside>`,
    })}

    ${section({
      id: 'block-party-exploration', title: 'Keep the context of a place. Add the freedom to propose.',
      body: `<div class="case-prose"><p>A co-design workshop with four participants explored three directions. After designing and evaluating paper concepts with two city planners and two users, I developed a visual planning sandbox: contextual feedback plus a way to arrange and share ideas.</p></div>
        <div class="bp-concepts">
          <article>${conceptScene('kiosk')}<div><span class="bp-small-label">Explored · Kiosk</span><h3>Build together, in person.</h3><p>Residents arrange physical building blocks on a shared neighborhood scale model at an on-site kiosk.</p></div></article>
          <article>${conceptScene('ar')}<div><span class="bp-small-label">Explored · AR</span><h3>Overlay a proposal on a place.</h3><p>An AR concept connected feedback to a resident’s view of the physical site.</p></div></article>
          <article class="bp-selected-concept">${conceptScene('sandbox')}<div><span class="bp-small-label">Selected · Visual planning sandbox</span><h3>Explore, respond, and create.</h3><p>A virtual neighborhood combined proposal feedback with resident-built ideas in one experience.</p></div></article>
        </div>`,
    })}

    ${section({
      id: 'block-party-testing', title: 'Testing made choice and feedback the next priorities.',
      body: `<div class="case-prose"><p>Six Bloomington residents tested the initial MVP. Their feedback shaped clearer building choices and placement feedback. Additional feedback highlighted the need to know whether submissions were being considered, leading to a visible progress tracker.</p></div>
        <dl class="bp-change-ledger">
          <div><dt>Choosing an element</dt><dd><span>Feedback</span>Prefab elements needed clearer organization.</dd><dd><span>Change</span>Buildings, Outdoors, and Mobility categories organize the library.</dd><dd>${excerpt('categories','Deployed builder excerpt showing the Buildings, Outdoors, and Mobility categories above the element library.',369,160)}</dd></div>
          <div><dt>Recognizing a result</dt><dd><span>Feedback</span>A new design’s arrival in the plot needed emphasis.</dd><dd><span>Change</span>Placement feedback and a design preview make the result visible before submission.</dd><dd>${excerpt('result','Deployed proposal review excerpt showing the placed park and design summary.',307,72)}</dd></div>
          <div><dt>Following a submission</dt><dd><span>Feedback</span>Residents wanted to feel acknowledged and know their ideas were being considered.</dd><dd><span>Change</span>A progress tracker shows review stages and the next step, so a submission does not feel lost.</dd><dd>${excerpt('progress','Deployed submission tracker showing Received, Initial review, Feasibility review, Decision, and the next step.',355,240)}</dd></div>
        </dl>
`,
    })}

    ${section({
      id: 'block-party-solution', title: 'Explore, propose, and follow what happens next.',
      body: `<div class="case-prose"><p>Block Party brings project discovery, visual proposal-making, and community feedback into one mobile experience. Residents explore neighborhood projects, switch to street view, compare proposals, and add their votes and comments.</p><p>The builder offers categorized features to arrange on a site, with a design preview, saved drafts, supporting references, and a submission form. My Activity brings drafts and proposals together; notifications and the progress tracker show responses, review stages, and next steps.</p></div>
        <section class="bp-feature-carousel" data-bp-slideshow role="region" aria-roledescription="carousel" aria-label="Block Party app features">
          <div class="bp-feature-stage">
            <button class="bp-slide-arrow" type="button" data-bp-step="-1" aria-controls="bp-feature-panels" aria-label="Previous Screens" hidden><span aria-hidden="true">←</span></button>
            <div class="bp-feature-panels" id="bp-feature-panels">${featurePairs.map((pair, index) => `<div class="bp-feature-pair" data-bp-slide role="group" aria-roledescription="slide" aria-label="${index + 1} of ${featurePairs.length}: ${pair.map(([,title])=>title).join(' and ')}">${pair.map(([name,title,description])=>`<article><h3>${title}</h3>${featureScreen(name, `${title}: ${description}`)}<p>${description}</p></article>`).join('')}</div>`).join('')}</div>
            <button class="bp-slide-arrow" type="button" data-bp-step="1" aria-controls="bp-feature-panels" aria-label="Next Screens" hidden><span aria-hidden="true">→</span></button>
          </div>
          <p class="bp-slide-status" role="status" aria-live="polite" data-bp-slide-status></p>
        </section>
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
      id: 'block-party-impact', title: 'Making participation more accessible.',
      body: `<div class="bp-impact"><div class="bp-impact-number"><strong>42%</strong><span>Increase in community engagement</span></div><div><p>In beta testing with 30 Bloomington residents, proposal submissions reflected a reported 42% increase in community engagement compared with previous participation patterns. The visual planning sandbox gave residents a more accessible way to contribute ideas.</p></div></div>`,
    })}

    ${section({
      id: 'block-party-reflection', title: 'Two lessons I’ll take forward.',
      body: `<div class="bp-reflections">
        <div><h3>Understanding why users disengage is as important as understanding what they need.</h3><p>This project taught me to look beyond surface-level usability challenges and understand the motivations behind user behavior. Through research, I realized that limited civic participation wasn't simply an accessibility problem, but also one of awareness, trust, and perceived impact. This reinforced the importance of uncovering the root causes of disengagement before designing solutions.</p></div>
        <div><h3>Giving users creative freedom requires thoughtful constraints.</h3><p>Designing the visual planning sandbox challenged me to balance creative freedom with usability. By introducing predefined design elements, I explored how thoughtful constraints could make complex urban planning concepts approachable to people without technical expertise. I learned that empowering users isn't always about offering more options, but making meaningful participation easier.</p></div>
      </div>`,
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
