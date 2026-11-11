/** Block Party: 2025 capstone research, with a clearly separated current interactive prototype. */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, media, section, preview, nextProject, next} = ctx;
  const screen = (name, alt, caption, eager = false) => media({
    src: `/assets/block-party-final-${name}.webp`, alt, caption,
    width: 1470, height: 863, eager,
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
      summary: 'Explore a place, propose a change, and stay part of the conversation.',
      tags: ['Civic design', 'Participatory research', 'Spatial interaction'],
    })}

    <div class="case-wrap bp-hero">
      ${screen('explore', 'Block Party showing the Explore Bloomington project list beside an illustrated neighborhood and a highlighted planning site.', 'The current interactive prototype connects neighborhood projects with a shared visual context. Project records and city imagery are illustrative.', true)}
    </div>

    ${overview({
      summary: '<p>Block Party began as my HCI/d capstone at Indiana University Bloomington. I explored how civic-oriented residents aged 18–35 could understand urban proposals and contribute ideas before decisions were made.</p><p>The current browser prototype extends that concept with a categorized builder, proposal feedback, and progress updates.</p>',
      metadata: [
        ['Role', 'HCI/d capstone thesis author'],
        ['Capstone timeline', 'January–May 2025'],
        ['Context', 'INFO I695 · Indiana University Bloomington'],
        ['Audience', 'Civic-oriented Bloomington residents, ages 18–35'],
        ['Core constraint', 'Make spatial proposals understandable without requiring design expertise.'],
      ],
      outcome: {
        title: '6 residents tested the capstone prototype',
        body: 'They saw value in its potential for inclusive community engagement. This qualitative feedback applies to the 2025 prototype; the current app has no documented retest or measured participation increase.',
      },
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
      body: `<div class="case-prose"><p>I chose the simulation direction to bring exploration, feedback, and resident-made proposals into one experience. A map gives changes a spatial context; project details explain their purpose and constraints.</p><p>The current prototype pairs a project list with an illustrated, pannable city. Search, zoom, recenter, and a simulated street view support exploration. Sample project details leave unconfirmed dates, contacts, and dimensions explicit.</p></div>
        ${screen('project', 'Hopewell West sample-project details beside the illustrated Block Party planning site.', 'Understand the project before contributing. The illustrated map is a prototype setting, not a surveyed model of Bloomington.')}`,
    })}

    ${section({
      id: 'block-party-participation', title: 'Give people a starting point for their ideas.',
      body: `<div class="case-prose"><p>Prefabricated elements make it possible to suggest a use for a space without drawing a plan from scratch. The trade-off is a bounded set of choices, rather than a full design tool.</p><p>In the current app, residents browse Buildings, Outdoors, and Mobility, then drag an element onto the highlighted plot—or select and tap to place it. They can adjust or remove elements, save a draft, and review a name and description before a mock submission.</p></div>
        ${screen('builder', 'Block Party proposal builder with categorized prefabricated elements and a design placed inside the planning boundary.', 'A bounded site and categorized elements turn an open-ended task into a concrete proposal. Drafts and mock submissions stay in the visitor’s browser.')}`,
    })}

    ${section({
      id: 'block-party-progress', title: 'Keep participation going after “submit.”',
      body: `<div class="case-prose"><p>A resident needs to know what happens to an idea. The revised prototype adds an acknowledgment, a reference number, a next step, and a progress tracker in Notifications. Updates are grouped around proposals the resident submitted, voted on, or commented on.</p><p>Separate proposal views support votes and discussion. Their sample counts show how the interface behaves; they do not establish community consensus or real planning decisions.</p></div>
        ${screen('activity', 'Block Party Notifications showing a sample resident proposal, review progress, and next steps.', 'Illustrative progress from Received through Decision keeps the next step visible. Committee messages and status changes are mocked; nothing is sent to the council.')}`,
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
        description: 'Explore the illustrated neighborhood, build an idea, and inspect the sample progress flow. This browser-local prototype uses mock data and simulated street views; proposals are not sent to the council.',
        src: 'https://mmansukhani212.github.io/block-party/',
        externalUrl: 'https://mmansukhani212.github.io/block-party/',
        image: '/assets/block-party-final-explore.webp',
        alt: 'Static overview of the current Block Party interactive prototype.',
        width: 1470, height: 863,
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
