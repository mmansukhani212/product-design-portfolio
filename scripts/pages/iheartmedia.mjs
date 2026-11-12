/** Original public account from the reviewed shared-project source pack.
 * Internal: individual task allocation and full team roster remain unconfirmed.
 * Two iteration crops retain source callout occlusion; no pixels are invented.
 * Video assets are mapped by their visible flow, not the original page order.
 */
export default function render(ctx) {
  const {caseNav, caseHeader, overview, section, media, nextProject, next} = ctx;
  const asset = name => `/assets/${name}.webp`;
  const screen = (name, alt, caption, width = 796, height = 1604, eager = false) => media({
    src: asset(name), alt, caption, width, height, eager,
    className: 'iheart-screen'
  });
  const recording = (filename, label) => `<a class="text-link iheart-recording" href="/assets/${filename}.mp4" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span><span class="sr-only"> (opens video in a new tab)</span></a>`;
  const journey = (screens, count = 3) => `<div class="iheart-phone-row iheart-row-${count}">${screens.join('')}</div>`;

  return `<article class="case-study iheart-study">
    ${caseHeader({
      kicker: 'iHeartMedia',
      title: 'Make listening easier to start and more social',
      summary: 'A studio collaboration exploring onboarding and participation for listeners under 35.',
      tags: ['Consumer UX', 'Product strategy', 'Usability testing']
    })}
    <div class="case-wrap">
      <div class="iheart-hero-art" aria-label="Listening and preference-setting concepts">
        ${journey([
          screen('iheart-ui-home', 'iHeart listening home with recent content and recommendations.', 'A familiar listening home', 626, 1353, true),
          screen('iheart-ui-player', 'Radio player with host contact, live chat, and song dedication controls.', 'A more connected player', 626, 1353, true),
          screen('iheart-ui-genres', 'Genre preferences with selectable listening interests.', 'Personal listening preferences', 624, 1352, true)
        ])}
      </div>
      ${overview({
        summary: '<p>As Product Designer and Product Manager, I contributed to research, concept design, and iteration.</p>',
        metadata: [
          ['Role', 'Product Designer & Product Manager'],
          ['Timeline', 'September–December 2024'],
          ['Context', 'I590 Studio Project · Indiana University Bloomington'],
          ['Team', 'Seven student designers, with iHeartMedia UX research and product partners'],
          ['Core constraint', 'Privacy, moderation capacity, and business constraints']
        ],
        outcome: null
      })}
      <div class="case-reading-layout">
        ${caseNav([
          ['iheart-problem', 'The challenge'],
          ['iheart-onboarding', 'Onboarding'],
          ['iheart-dedication', 'Song dedication'],
          ['iheart-podcasts', 'Podcast participation'],
          ['iheart-iteration', 'Testing & iteration'],
          ['iheart-reflection', 'Reflection']
        ])}
        <div class="case-reading-content">
          ${section({
            id: 'iheart-problem',
            title: 'Less effort before listening. More connection while listening.',
            body: '<div class="case-prose"><p>The team explored two barriers: demanding onboarding and limited opportunities for listeners to participate.</p><p>A heuristic evaluation, five interviews, and analysis of 500+ reviews focused the work on onboarding, navigation, and social connection.</p></div>'
          })}
          ${section({
            id: 'iheart-onboarding',
            title: '1. Make the first steps easier to follow.',
            body: `<div class="case-prose"><p>We explored clearer questions and fewer unnecessary steps. The recorded journey moves from account confirmation through location and genre preferences.</p></div>
              ${journey([
                screen('iheart-flow-onboarding-start', 'Account-created confirmation with Get Started action.', 'Confirm the account'),
                screen('iheart-flow-onboarding-location', 'Listening location step with ZIP code entry.', 'Set listening location'),
                screen('iheart-flow-onboarding-genres', 'Genre preference choices in the onboarding journey.', 'Choose listening interests')
              ])}
              ${recording('iheart-flow-onboarding', 'Watch the onboarding recording')}`
          })}
          ${section({
            id: 'iheart-dedication',
            title: '2. Give a song a personal meaning.',
            body: `<div class="case-prose"><p>Listeners can enter from the player, choose a song, add a personal message, and submit a dedication.</p></div>
              ${journey([
                screen('iheart-flow-dedication-player', 'Music player with Shoutout a Song entry point.', 'Start from the player'),
                screen('iheart-flow-dedication-form', 'Dedication form with sender, recipient, song, and message fields.', 'Compose a dedication'),
                screen('iheart-flow-dedication-confirmation', 'Return to the player with a request-sent confirmation.', 'See submission feedback')
              ])}
              ${recording('iheart-flow-song-dedication', 'Watch the dedication recording')}`
          })}
          ${section({
            id: 'iheart-podcasts',
            title: '3. Turn listening into a conversation.',
            body: `<div class="case-prose"><p>Episode-level polls and comments give listeners a way to respond alongside the audio.</p></div>
              ${journey([
                screen('iheart-flow-podcast-episode', 'Podcast episode information with Note and Transcript tabs.', 'Open an episode'),
                screen('iheart-flow-podcast-poll', 'Podcast comment panel with a poll and discussion.', 'Answer a poll'),
                screen('iheart-flow-podcast-discussion', 'Episode discussion with responses and a comment input.', 'Join the discussion')
              ])}
              ${recording('iheart-flow-podcast-polls', 'Watch the podcast recording')}`
          })}
          ${section({
            id: 'iheart-iteration',
            title: 'Make settings discoverable and actions explicit.',
            body: `<div class="case-prose"><p>Testing exposed hidden location controls and unclear playback actions. The revisions surface location in the profile and add explicit Played feedback.</p></div>
              <div class="iheart-iteration-grid">
                <div class="iheart-change"><h3>Location selection</h3>
                  ${journey([
                    screen('iheart-flow-location-before', 'Profile panel with location settings under Advanced Settings.', 'Before: hidden in settings', 742, 1510),
                    screen('iheart-flow-location-after', 'Revised profile panel with location selection visible at the top.', 'Iteration: location in profile', 742, 1510)
                  ], 2)}
                  ${screen('iheart-flow-location-detail', 'Bloomington location selection control.', 'Location control detail', 487, 144)}
                </div>
                <div class="iheart-change"><h3>Playback feedback</h3>
                  ${journey([
                    screen('iheart-flow-played-before', 'Podcast episode controls with a plus icon highlighted.', 'Before: an ambiguous icon', 742, 1510),
                    screen('iheart-flow-played-after', 'Podcast episode controls with a visible Played state.', 'Iteration: explicit feedback', 742, 1510)
                  ], 2)}
                  ${screen('iheart-flow-played-detail', 'Episode action row with an explicit Played label and playback controls.', 'Playback control detail', 786, 324)}
                </div>
              </div>
              <p class="iheart-evidence-note">These are prototype findings and iterations; measured retention impact is not established.</p>`
          })}
          ${section({
            id: 'iheart-reflection',
            title: 'Clarity before more features.',
            body: '<div class="case-prose"><p>Privacy and moderation capacity limited social concepts; advertising remained a business constraint. Next, I would test core-action comprehension before expanding participation features.</p></div>'
          })}
        </div>
      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
