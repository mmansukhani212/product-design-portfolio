/** Original public account from the reviewed shared-project source pack.
 * Internal: individual task allocation and full team roster remain unconfirmed.
 * Two iteration crops retain source callout occlusion; no pixels are invented.
 * Video assets are mapped by their visible flow, not the original page order.
 */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, section, media, nextProject, next, e} = ctx;
  const asset = name => `/assets/${name}.webp`;
  const screen = (name, alt, caption, width = 796, height = 1604, eager = false) => media({
    src: asset(name), alt, caption, width, height, eager,
    className: 'iheart-screen'
  });
  const journey = (screens, count = 3) => `<div class="iheart-phone-row iheart-row-${count}">${screens.join('')}</div>`;

  const comparison = d => `<article class="story-iteration"><h3>${e(d.title)}</h3>
    <dl class="story-change-reason"><div><dt>Initial approach</dt><dd>${e(d.before)}</dd></div><div><dt>Testing finding</dt><dd>${e(d.finding)}</dd></div><div><dt>Design change</dt><dd>${e(d.change)}</dd></div></dl>
    <div class="story-comparison" data-comparison>
      <div class="story-compare-controls" role="group" aria-label="${e(d.title)} versions" hidden><button type="button" data-compare-view="before" aria-pressed="true" aria-controls="${d.id}-before">Before</button><button type="button" data-compare-view="iteration" aria-pressed="false" aria-controls="${d.id}-iteration">Iteration</button></div>
      <div class="story-compare-frames"><div id="${d.id}-before" data-compare-panel="before">${screen(d.beforeAsset,d.beforeAlt,'Before',742,1510)}</div><div id="${d.id}-iteration" data-compare-panel="iteration">${screen(d.afterAsset,d.afterAlt,'Iteration',742,1510)}</div></div>
    </div>
    <div class="story-detail">${screen(d.detail,d.detailAlt,'Control detail',d.detailWidth,d.detailHeight)}</div>
  </article>`;
  const demonstration = d => `<article class="story-demo"><h3 id="demo-${d.id}-title">${e(d.title)}</h3><p>${e(d.description)}</p>
    <div class="story-video-shell"><img class="story-video-poster" src="/assets/${d.poster}.webp" width="796" height="1604" alt="Static preview of the ${e(d.id)} recorded prototype." loading="lazy" decoding="async"><video id="demo-${d.id}" controls playsinline preload="none" width="398" height="802" tabindex="0" aria-labelledby="demo-${d.id}-title" hidden></video></div>
    <div class="story-play-slot"><button type="button" class="button story-play" data-video-src="/assets/iheart-demo-${d.id}.mp4" aria-controls="demo-${d.id}" hidden>${e(d.label)} <span aria-hidden="true">▷</span></button></div>
    <p class="story-video-status" role="status"></p>
    <a class="text-link iheart-recording" href="/assets/iheart-demo-${d.id}.mp4" target="_blank" rel="noopener">Open Recording ↗<span class="sr-only"> (video, opens in a new tab)</span></a>
    <details class="story-transcript"><summary>Text Walkthrough</summary><ol>${d.steps.map(step=>`<li>${e(step)}</li>`).join('')}</ol></details>
  </article>`;

  return `<article class="case-study iheart-study">
    ${caseHeader({
      kicker: 'iHeart Media | Audio Streaming Mobile App',
      title: 'Making digital audio more personal and interactive for the next generation of listeners',
      summary: 'A redesigned listening experience that simplifies onboarding, personalizes discovery, and brings listeners closer through social interactions.',
      tags: ['Consumer UX', 'Product Strategy', 'Interaction']
    })}
    <div class="case-wrap">
      <div class="iheart-hero-art" aria-label="Listening home and connected player concepts">
        ${journey([
          screen('iheart-ui-home', 'iHeart listening home with recent content and recommendations.', '', 626, 1353, true),
          screen('iheart-ui-player', 'Radio player with host contact, live chat, and song dedication controls.', '', 626, 1353, true)
        ], 2)}
      </div>
      ${overview({
        summary: '<p>iHeart Media struggled to retain listeners under 35. An 82% onboarding drop-off rate, navigational friction, and limited social connection pointed to an experience that felt demanding and impersonal. Our studio team combined interviews, review analysis, and heuristic evaluation to focus the redesign on navigation and community.</p><p>I facilitated the team’s work and pitched and owned Song Dedication. Together, we streamlined onboarding to get listeners to music faster and introduced Call Your Host and Song Dedication to bring the intimacy of live radio into the app. Usability findings also guided clearer location settings and playback feedback.</p>',
        metadata: [
          ['My role', 'Product Designer & Product Manager'],
          ['Design scope', 'Team facilitation, User Research, UX/UI, prototyping and A/B testing'],
          ['Target users', 'New and younger iHeartRadio listeners, particularly under 35'],
          ['Team', 'Seven student designers, iHeart Media UX research and design team'],
          ['Duration', 'September–December 2024']
        ],
        outcome: {title: 'Increased content engagement by 18%', body: 'Online user testing with 45+ users showed higher content engagement and longer listening sessions. The redesign was developed for iHeart Media, whose wider audio network reaches 250M monthly listeners.'}
      })}
      <div class="case-reading-layout">
        ${caseNav([
          'iheart-problem',
          'iheart-discovery',
          'iheart-exploration',
          'iheart-iteration',
          'iheart-solution',
          'iheart-impact',
          'iheart-reflection'
        ])}
        <div class="case-reading-content iheart-story">
          ${section({id: 'iheart-problem', title: 'Getting to the music took effort. Connection stopped at playback.', body: `
            <div class="case-prose"><p>For a new listener, creating an account was only the beginning. The team found friction in onboarding and navigation, followed by an experience with few opportunities for personal connection. We needed to make listening easier to start and participation easier to understand.</p></div>
            <figure class="story-journey" aria-label="Reconstructed listener experience and friction points">
              <ol>
                <li><span class="story-stage">01 · Get started</span><strong>Answer onboarding questions</strong><p>Length and relevance could discourage new listeners.</p></li>
                <li><span class="story-stage">02 · Explore</span><strong>Find something to hear</strong><p>Complex navigation made features difficult to discover.</p></li>
                <li><span class="story-stage">03 · Manage listening</span><strong>Find settings and controls</strong><p>Hidden location settings and ambiguous actions added friction.</p></li>
                <li><span class="story-stage">04 · Participate</span><strong>Look for a human connection</strong><p>Listening offered limited two-way interaction.</p></li>
              </ol>
            </figure>
            <p class="story-hmw"><span>How might we</span> help younger listeners start listening with less effort and participate without losing the simplicity of audio?</p>`})}

          ${section({id: 'iheart-discovery', title: 'Research pointed to clarity and connection.', body: `
            <p class="story-research-line"><strong>5 interviews</strong><span>500+ reviews</span><span>Heuristic evaluation</span></p>
            <div class="case-prose"><p>We combined listener interviews with Reddit and App Store reviews and an evaluation of the existing experience. The synthesis brought three design implications into focus.</p></div>
            <div class="story-table-wrap" role="region" aria-label="Evidence to design implications; scroll horizontally on small screens" tabindex="0"><table class="story-evidence"><caption>From documented evidence to design implications</caption><thead><tr><th scope="col">Evidence</th><th scope="col">Insight</th><th scope="col">Design implication</th></tr></thead><tbody>
              <tr><td>Onboarding questions and flow created difficulty.</td><td>The first session needed less effort.</td><td>Clarify questions and remove unnecessary steps.</td></tr>
              <tr><td>Navigation and controls were hard to understand.</td><td>Useful features needed more visible entry points.</td><td>Surface settings and explain actions.</td></tr>
              <tr><td>Interview feedback expressed a desire for human interaction.</td><td>Connection mattered alongside content.</td><td>Explore dedications and episode-level participation.</td></tr>
            </tbody></table></div>`})}

          ${section({id: 'iheart-exploration', title: 'Explore broadly. Keep the prototype focused.', body: `
            <div class="case-prose"><p>Early sketches explored episode organization, live discussion, and karaoke. The recorded prototype focused on clearer onboarding, song dedication, and podcast participation. These sketches show a wider design space than the three recorded flows below.</p></div>
            <div class="story-sketches">
              ${media({src:'/assets/iheart-sketch-episodes.webp',alt:'Original hand-drawn concept for a podcast episode list and playback entry.',caption:'Episode organization',width:669,height:1229,className:'story-sketch'})}
              ${media({src:'/assets/iheart-sketch-chat.webp',alt:'Original hand-drawn live-chat concept with listener comments and responses.',caption:'Live discussion',width:702,height:1229,className:'story-sketch'})}
              ${media({src:'/assets/iheart-sketch-karaoke.webp',alt:'Original hand-drawn player exploration from the karaoke concept sketches.',caption:'Karaoke player exploration',width:702,height:1234,className:'story-sketch'})}
            </div>
            <div class="story-scope"><span>Prototype focus</span><p>Start listening → Personalize a dedication → Respond to an episode</p></div>
            <p class="story-note">Live interaction raised privacy and moderation questions. A convincing interface would also need a workable support model.</p>`})}

          ${section({id: 'iheart-iteration', title: 'Testing changed where controls lived—and what they said.', body: `
            <div class="case-prose"><p>In usability sessions with 10+ users, we observed independent app exploration, including onboarding. We looked for confusion, frustration, and unmet expectations. Two findings led to more visible settings and clearer playback feedback.</p></div>
            <div class="story-iteration-grid">
              ${comparison({id:'location',title:'Put location where listeners looked for it.',before:'Location was nested under Advanced Settings.',finding:'Listeners expected it in account or profile settings.',change:'Surface location selection directly in the profile.',beforeAsset:'iheart-flow-location-before',afterAsset:'iheart-flow-location-after',beforeAlt:'Initial profile: location settings are under Advanced Settings.',afterAlt:'Iteration: the listening location is visible at the top of the profile.',detail:'iheart-flow-location-detail',detailAlt:'Magnified location selector showing Bloomington, IN.',detailWidth:487,detailHeight:144})}
              ${comparison({id:'played',title:'Name the action instead of asking people to infer it.',before:'An unlabeled plus action marked an episode played.',finding:'The meaning of the episode controls was unclear.',change:'Add explicit Played feedback to the action row.',beforeAsset:'iheart-flow-played-before',afterAsset:'iheart-flow-played-after',beforeAlt:'Initial podcast episode actions with a plus icon highlighted.',afterAlt:'Iteration with an explicit Played state in the episode action row.',detail:'iheart-flow-played-detail',detailAlt:'Magnified episode action row with a Played label.',detailWidth:786,detailHeight:324})}
            </div>`})}

          ${section({id: 'iheart-solution', title: 'Three ways into a more connected listening experience.', body: `
            <div class="case-prose"><p>The prototype links easier entry with ways to participate alongside the audio. Play each original interaction below; these are recorded prototypes, not a live service.</p></div>
            <div class="story-demos" role="region" aria-label="Three prototype recordings; scroll horizontally on small screens" tabindex="0">
              ${demonstration({id:'onboarding',title:'Start with relevant preferences.',description:'Clearer questions guide location and genre choices, helping listeners shape their experience before the first session.',poster:'iheart-flow-onboarding-start',label:'Play Onboarding',steps:['Start from account confirmation.','Enter listening location and choose genres.','Finish setup and start listening.']})}
              ${demonstration({id:'dedication',title:'Make a song personal.',description:'I pitched and owned song dedication: a personal song-and-message flow, with confirmation that the request was sent.',poster:'iheart-flow-dedication-player',label:'Play Dedication',steps:['Open Shoutout a Song from the player.','Add sender, recipient, song and message.','Submit and see request-sent feedback.']})}
              ${demonstration({id:'podcast',title:'Respond to an episode.',description:'Episode-level polls and comments give listeners a concrete way to participate in the conversation around the content.',poster:'iheart-flow-podcast-episode',label:'Play Podcast Flow',steps:['Open the episode detail.','Visit its poll and comments.','Select a poll response and explore discussion.']})}
            </div>`})}

          ${section({id: 'iheart-impact', title: 'A more engaging listening experience.', body: `
            <div class="case-prose"><p>Online user testing with 45+ users showed an 18% increase in content engagement, contributing to longer listening sessions. Clearer onboarding and opportunities to participate helped make the experience more personal.</p></div>
            <dl class="story-outcomes"><div><dt>Observed changes</dt><dd>Location surfaced in profile; Played state made explicit.</dd></div><div><dt>Demonstrated scope</dt><dd>Onboarding, song dedication, and podcast participation.</dd></div><div><dt>Validation</dt><dd>Online user testing with 45+ users.</dd></div></dl>`})}

          ${section({id: 'iheart-reflection', title: 'Participation needs a clear path and an operational owner.', body: `
            <div class="case-prose"><p>This project sharpened how I think about social features: entry points, feedback, and operational support need to be designed together. A dedication form can look complete while leaving questions about which songs people can choose or what happens next. I would next test those expectations and the revised controls with new listeners, then work with product and research partners on privacy and moderation requirements. That would give the team stronger evidence before expanding the experience.</p></div>`})}
        </div>
      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
