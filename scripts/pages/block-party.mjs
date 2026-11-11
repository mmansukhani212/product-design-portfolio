/** Block Party: reviewed capstone narrative and original landscape screen exports. */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, media, section, preview, nextProject, next} = ctx;
  const screen = (name, alt, caption, eager = false) => media({
    src: `/assets/block-party-${name}.webp`, alt, caption,
    width: 852, height: 393, eager,
  });

  const research = [
    ['4', 'Planning interviews', 'Bloomington city-planning participants.'],
    ['6', 'Resident interviews', 'Civic-oriented Bloomington residents.'],
    ['4', 'Workshop participants', 'Monisha participated separately.'],
  ];

  return `<article class="case-study block-party-page">
    ${caseHeader({
      kicker: 'Block Party',
      title: 'Help residents see—and shape—their neighborhood’s future',
      summary: 'A simulation-based civic prototype for Bloomington residents.',
      tags: ['Civic design', 'Participatory design', 'Interaction design'],
    })}

    <div class="case-wrap bp-hero">
      ${screen('map', 'Block Party prototype showing a virtual Bloomington neighborhood and map navigation controls.', 'Explore neighborhood proposals in a virtual Bloomington. Prototype content, including project records, is illustrative.', true)}
    </div>

    ${overview({
      summary: '<p>Block Party is my HCI/d capstone thesis at Indiana University Bloomington. It explores how younger residents could understand urban proposals and contribute ideas through a simulated neighborhood.</p><p>The design challenge extends to planners: participation needs to produce input they can interpret and trust.</p>',
      metadata: [
        ['Role', 'HCI/d capstone thesis author'],
        ['Timeline', 'January–May 2025'],
        ['Context', 'INFO I695 · Indiana University Bloomington'],
        ['Audience', 'Civic-oriented Bloomington residents, ages 18–35'],
        ['Core constraint', 'Make spatial proposals understandable across different levels of digital confidence.'],
      ],
      outcome: {
        title: '6 residents tested the prototype',
        body: 'They saw it as valuable, inclusive, and potentially useful for community engagement. This is qualitative prototype feedback; participation growth was not measured.',
      },
    })}

    <div class="case-reading-layout">
      ${caseNav([
        ['block-party-problem', 'The problem'],
        ['block-party-research', 'Research'],
        ['block-party-journey', 'Design journey'],
        ['block-party-participation', 'Participation'],
        ['block-party-testing', 'Testing'],
        ['block-party-prototype', 'Prototype'],
        ['block-party-reflection', 'Reflection']
      ])}
      <div class="case-reading-content">

    ${section({
      id: 'block-party-problem', kicker: 'The challenge', title: 'Participation starts with understanding a place.',
      body: '<div class="case-prose"><p>Block Party focuses on the connection between seeing a possible neighborhood change and expressing an informed opinion about it. A proposal needs enough context for residents to understand what could change and how to respond.</p><p>More submissions alone would not demonstrate a better planning process. The experience also needs to consider how planners make sense of resident input.</p></div>',
    })}

    ${section({
      id: 'block-party-research', kicker: 'Research', title: 'Resident and planning perspectives, together.',
      body: `<div class="case-prose"><p>The capstone combined secondary research and digital ethnography across Reddit, public forums, and government websites with interviews, a participatory workshop, and prototype testing.</p></div>
        <dl class="bp-research">${research.map(([count, label, note]) => `<div><dt><strong>${count}</strong><span>${label}</span></dt><dd>${note}</dd></div>`).join('')}</dl>
        <p class="bp-research-note">A paper-prototype comparison also involved <strong>2 city planners and 2 users</strong>. These are activity-specific counts; participants may overlap and are not presented as a combined total.</p>`,
    })}

    ${section({
      id: 'block-party-journey', kicker: 'Decision 01', title: 'Put the proposal in its neighborhood.',
      body: `<div class="case-prose"><p>The virtual map and street-view option connect planning proposals to a spatial setting. Residents can explore the neighborhood, locate a project, and inspect its details before deciding how to participate.</p></div>
        <div class="case-gallery bp-screen-pair">
          ${screen('street', 'Block Party street-view prototype of the virtual neighborhood.', 'Street view')}
          ${screen('details', 'Block Party proposal-details panel over the virtual map, including vote/comment and upload actions.', 'Project details')}
        </div>`,
    })}

    ${section({
      id: 'block-party-participation', kicker: 'Decision 02', title: 'Offer more than one way to contribute.',
      body: `<div class="case-prose"><p>Residents can vote, comment, and upload an image in response to a proposal. A separate builder lets them assemble an idea from prefabricated elements, then save a draft or submit it.</p></div>
        ${screen('feedback', 'Block Party feedback interface for responding to a planning proposal.', 'Resident feedback')}
        <div class="case-gallery bp-screen-pair">
          ${screen('builder', 'Block Party proposal builder showing prefabricated elements in a virtual neighborhood.', 'Proposal builder')}
          ${screen('submit', 'Block Party prototype state for submitting a resident-generated proposal.', 'Proposal submission')}
        </div>`,
    })}

    ${section({
      id: 'block-party-testing', kicker: 'Decision 03 · Testing', title: 'Make choices—and their results—easier to notice.',
      body: `<div class="case-prose"><p>Testing identified two practical refinements.</p></div>
        <div class="bp-findings">
          <div><span class="bp-small-label">Builder discoverability</span><h3>Organize prefab elements.</h3><p>Clearer categories could help residents choose an element based on its function and relevance to a project.</p></div>
          <div><span class="bp-small-label">Feedback after an action</span><h3>Emphasize a proposal’s arrival.</h3><p>When the page changes, draw attention to the proposed design appearing in an empty plot so residents can recognize the result.</p></div>
        </div>
        <p class="bp-research-note">These are testing findings and proposed improvements. A completed revision or retest is not documented.</p>`,
    })}

    <div class="case-wrap bp-prototype">
      ${preview({
        id: 'block-party-prototype',
        title: 'Figma prototype',
        description: 'The actual screen walkthrough above remains available without a Figma account. Open any screen to inspect its details.',
        externalUrl: 'https://www.figma.com/proto/Da4fGEqDJjx3UoJ0lk1YgN/Capstone-2025?node-id=116-1331',
        image: '/assets/block-party-map.webp',
        alt: 'Static Block Party map screen, provided as a fallback for the Figma prototype.',
        width: 852, height: 393,
        unavailable: 'The Figma link currently requires access or an update. You can inspect the actual screens above.',
      })}
    </div>

    ${section({
      id: 'block-party-reflection', kicker: 'Reflection', title: 'Inclusion needs more than an inviting interface.',
      body: `<div class="case-prose"><p>The next iteration needs to address residents’ comfort with digital interfaces, planners’ ability to interpret conflicting submissions, and officials’ confidence that feedback is valid and representative.</p><p>I would test these questions with residents and planning stakeholders alongside the interface refinements.</p></div>`,
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
