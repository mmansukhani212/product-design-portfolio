/**
 * iHeartMedia: original copy from the reviewed draft and confirmed shared scope.
 * Internal review: exact individual task allocation and full team roster remain
 * undocumented. Do not infer exclusive ownership or quantified retention impact.
 */
export default function render(ctx) {
  const {caseHeader, overview, section, media, nextProject, next} = ctx;
  const reference = 'https://www.manasighutukade.work/iheartmedia';
  const sourceLink = `<a href="${reference}" target="_blank" rel="noopener">Shared project account by Manasi Ghutukade <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`;

  return `<article class="case-study iheart-study">
    ${caseHeader({
      kicker: 'iHeartMedia',
      title: 'Make listening easier to start and more social',
      summary: 'An Indiana University studio project with iHeartMedia.',
      tags: ['Consumer UX', 'Product strategy', 'Usability testing']
    })}
    <div class="case-wrap">
      ${media({
        src: '/assets/iheart-listening.webp',
        alt: 'Shared iHeartMedia concepts: a listening home, radio player with interaction options, and genre selection.',
        caption: 'Listening and preference-setting concepts from the shared studio project.',
        width: 1600,
        height: 900,
        className: 'iheart-overview-art',
        eager: true
      })}
      ${overview({
        summary: '<p>I contributed to research, concept design, and iteration.</p>',
        metadata: [
          ['Role', 'Product Designer & Product Manager'],
          ['Timeline', 'September–December 2024'],
          ['Context', 'I590 Studio Project · Indiana University Bloomington'],
          ['Collaborators', 'Manasi Ghutukade, the studio design team, and iHeartMedia research and product partners'],
          ['Core constraint', 'Privacy and moderation limits on social interaction']
        ],
        outcome: null
      })}
      <nav class="case-jump-nav" aria-label="On this page">
        <a href="#iheart-problem">The challenge</a>
        <a href="#iheart-decisions">Design decisions</a>
        <a href="#iheart-iteration">Iteration</a>
        <a href="#iheart-reflection">Reflection</a>
      </nav>
      ${section({
        id: 'iheart-problem',
        kicker: '01 / The challenge',
        title: 'Help younger listeners get started and participate.',
        body: '<div class="case-prose"><p>Starting a listening session and finding meaningful social connection were the two experience problems we explored.</p><p>The team used heuristic evaluation, 5 interviews, and analysis of 500+ reviews to guide the direction.</p></div>'
      })}
      ${section({
        id: 'iheart-decisions',
        kicker: '02 / Design decisions',
        title: 'Simplify entry. Give interaction a clear purpose.',
        body: `<ol class="decision-list iheart-decisions">
          <li><span class="decision-number" aria-hidden="true">01</span><h3>Start listening sooner</h3><p>Reduce onboarding steps and clarify questions.</p></li>
          <li><span class="decision-number" aria-hidden="true">02</span><h3>Make room for participation</h3><p>Explore dedications and podcast polls within privacy and moderation limits.</p></li>
          <li><span class="decision-number" aria-hidden="true">03</span><h3>Make actions understandable</h3><p>Surface settings and explain playback controls.</p></li>
        </ol>`
      })}
      ${section({
        id: 'iheart-iteration',
        kicker: '03 / Solution & evidence',
        title: 'Improve the controls people already need.',
        body: `<div class="case-prose"><p>The concepts combined easier entry with ways to participate while listening. Usability findings informed the revisions shown below.</p></div>
        ${media({
          src: '/assets/iheart-iteration.webp',
          alt: 'Shared iteration comparison: location selection moved into the profile, and the playback action gains an explicit Played label.',
          caption: 'Shared iterations: location selection and playback feedback.',
          width: 2400,
          height: 1560,
          className: 'iheart-iteration-art'
        })}
        <p class="case-source-credit">Project visuals and shared process: ${sourceLink}.</p>`
      })}
      ${section({
        id: 'iheart-reflection',
        kicker: '04 / Reflection',
        title: 'Clarity before more features.',
        body: '<div class="case-prose"><p>For a next iteration, I would test core-action comprehension before expanding social features.</p></div>'
      })}
    </div>
    ${nextProject(next)}
  </article>`;
}
