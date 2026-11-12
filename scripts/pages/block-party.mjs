/** Block Party: 2025 capstone research, with a clearly separated current interactive prototype. */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, media, section, preview, nextProject, next, productLink} = ctx;
  const screen = (name, alt, caption, eager = false) => media({
    src: `/assets/block-party-mobile-${name}.webp`, alt, caption,
    width: 393, height: 852, className: 'bp-phone-screen', eager,
  });
  const research = [
    ['4', 'Planning interviews', 'Bloomington City Council planning members.'],
    ['6', 'Resident interviews', 'Civic-oriented Bloomington residents.'],
    ['4', 'Workshop participants', 'Plus my participation in the workshop.'],
  ];

  return `<article class="case-study block-party-page">
    ${caseHeader({
      kicker: 'Block Party',
      title: 'Give residents a way to shape their neighborhood',
      summary: 'A mobile civic-design prototype: explore a place, propose a change, and stay involved.',
      tags: ['Mobile product design', 'Participatory research', 'Civic technology'],
    })}

    <div class="case-wrap bp-hero">
      <div class="bp-hero-phones" aria-label="Block Party mobile app screens">
        ${screen('explore', 'Block Party mobile Explore screen with an illustrated neighborhood, project bottom sheet, and bottom navigation.', 'Explore a neighborhood.', true)}
        ${screen('builder', 'Block Party mobile proposal builder with ready-made elements and a highlighted planning site.', 'Put an idea on the map.', true)}
      </div>
      <p class="bp-hero-note">Current mobile prototype · Illustrative city, sample projects, and browser-local activity.</p>
    </div>

    ${productLink('/demos/block-party/', 'Open mobile demo')}

    ${overview({
      summary: '<p>Younger Bloomington residents faced low awareness of planning meetings and proposals that were hard to picture. My HCI/d capstone explored a mobile way to understand neighborhood projects and contribute ideas.</p><p>Resident and planner research led to a simulated neighborhood, ready-made design elements, and proposal feedback. The current prototype adds a categorized builder and progress updates; six residents tested the original 2025 concept.</p>',
      metadata: [
        ['My role', 'HCI/d capstone thesis author'],
        ['Design scope', 'User research, participatory design, interaction design, prototyping, usability testing'],
        ['Target users', 'Civic-oriented Bloomington residents, ages 18–35'],
        ['Team', 'Indiana University Bloomington · HCI/d capstone'],
        ['Duration', 'January–May 2025']
      ],
      outcome: {title: '6 residents tested the concept', body: 'Participants saw potential for inclusive community engagement and identified two usability refinements. This is qualitative feedback on the 2025 prototype; participation growth and the current revision’s usability remain unmeasured.'}
    })}

    <div class="case-reading-layout">
      ${caseNav([
        ['block-party-problem', 'The problem'],
        ['block-party-research', 'Research'],
        ['block-party-journey', 'Place and context'],
        ['block-party-participation', 'Designing an idea'],
        ['block-party-progress', 'Staying involved'],
        ['block-party-testing', 'Testing'],
        ['block-party-prototype', 'Try the prototype'],
        ['block-party-reflection', 'Reflection'],
      ])}
      <div class="case-reading-content">

    ${section({
      id: 'block-party-problem', title: 'A public meeting only works if people can take part.',
      body: '<div class="case-prose"><p>My research in Bloomington pointed to low awareness of planning meetings, inconvenient participation methods, and proposals that were difficult to picture in context. Younger residents were often missing from the conversation.</p><p>I narrowed an initially broad urban-design problem to Bloomington community projects and residents aged 18–35. That focus made the concept specific enough to test.</p></div>',
    })}

    ${section({
      id: 'block-party-research', title: 'Listen to both sides of participation.',
      body: `<div class="case-prose"><p>The capstone combined secondary research and digital ethnography with resident and planning interviews. A participatory workshop helped explore three directions: a collaborative kiosk, an AR app, and a simulated neighborhood.</p></div>
        <dl class="bp-research">${research.map(([count, label, note]) => `<div><dt><strong>${count}</strong><span>${label}</span></dt><dd>${note}</dd></div>`).join('')}</dl>
        <p class="bp-research-note">Paper concepts were also compared with <strong>2 city planners and 2 users</strong>. These are activity-specific counts; participant overlap is unconfirmed.</p>`,
    })}

    ${section({
      id: 'block-party-journey', title: 'See the place before judging the proposal.',
      body: `<div class="bp-phone-story"><div class="case-prose"><p>I chose the simulation direction to connect exploration, feedback, and resident-made proposals. A map gives changes a spatial context; project details explain their purpose and constraints.</p><p>On mobile, a draggable bottom sheet snaps between collapsed, middle, and expanded states, balancing the map with project information. Bottom navigation keeps Explore, Proposals, My activity, and Notifications within reach.</p><p>Search, zoom, and a simulated street view support exploration. Project dates, contacts, and dimensions remain explicitly unconfirmed.</p></div>
        ${screen('project', 'Block Party mobile Hopewell West sample-project details in an expandable bottom sheet.', 'Expand the project sheet to understand the proposal. City imagery and project records are illustrative.')}</div>`,
    })}

    ${section({
      id: 'block-party-participation', title: 'Give people a starting point for their ideas.',
      body: `<div class="bp-phone-story"><div class="case-prose"><p>Ready-made elements let residents suggest a use for a space without drawing a plan from scratch. A bounded library offers an approachable starting point, with less freedom than a full design tool.</p><p>Residents browse Buildings, Outdoors, and Mobility, then drag an element onto the plot—or select and tap to place it. They can adjust or remove elements, save a draft, and review their idea before a mock submission.</p></div>
        ${screen('builder', 'Block Party mobile builder showing element categories and the neighborhood planning site.', 'Choose an element, place it in the site, then review the idea. Drafts remain in this browser.')}</div>`,
    })}

    ${section({
      id: 'block-party-progress', title: 'Keep participation going after “submit.”',
      body: `<div class="bp-phone-story"><div class="case-prose"><p>A resident needs to know what happens to an idea. Notifications brings together an acknowledgment, reference number, next step, and progress tracker for their proposal.</p><p>Residents can also follow proposals they voted on or commented on. Dedicated proposal views make room for feedback without competing with the map.</p><p>Committee messages, votes, and review stages are mock data. They demonstrate the flow, not community consensus or real planning decisions.</p></div>
        ${screen('activity', 'Block Party mobile Notifications screen with sample proposal progress and next steps.', 'Track a sample proposal from Received through Decision. Nothing is sent to the council.')}</div>`,
    })}

    ${section({
      id: 'block-party-testing', title: 'What testing revealed—and what still needs testing.',
      body: `<div class="case-prose"><p>Six Bloomington residents tested the 2025 high-fidelity prototype. They saw it as a valuable, inclusive way to engage with community projects and identified two usability refinements.</p></div>
        <div class="bp-findings">
          <div><span class="bp-small-label">Finding 01</span><h3>Make elements easier to choose.</h3><p>Participants needed clearer categories in the builder. The current app now groups elements by function; its effect on usability still needs testing.</p></div>
          <div><span class="bp-small-label">Finding 02</span><h3>Make the result easy to notice.</h3><p>A proposed design’s arrival in the plot needed more emphasis. The current app provides placement feedback and a submission preview; whether these resolve the original issue is untested.</p></div>
        </div>
        <p class="bp-research-note">The original findings support the concept’s potential, not city-wide adoption or improved participation. The current interactive version is a later prototype, not the artifact tested in 2025.</p>`,
    })}

    <div class="case-wrap bp-prototype">
      ${preview({
        id: 'block-party-prototype',
        title: 'Try Block Party',
        description: 'Try the mobile app in a phone-sized preview, or open it in a new tab. Activity stays in your browser; city views, committee messages, and review stages are simulated. Proposals are not sent to the council.',
        src: 'https://mmansukhani212.github.io/block-party/',
        externalUrl: '/demos/block-party/',
        image: '/assets/block-party-mobile-explore.webp',
        alt: 'Block Party mobile Explore screen, provided as a static fallback.',
        width: 393, height: 852,
        loadLabel: 'Load interactive prototype',
      })}
    </div>

    ${section({
      id: 'block-party-reflection', title: 'An inviting interface is only part of inclusion.',
      body: '<div class="case-prose"><p>Architecture taught me to think about how a place affects everyday life. This project pushed me to ask whose experience reaches a planning decision—and whose is missing.</p><p>Next, I would test the revised builder and progress flow with residents of different digital confidence levels, then work with planners on interpreting conflicting input. A digital channel needs outreach and a credible review process before it can represent a community.</p></div>',
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
