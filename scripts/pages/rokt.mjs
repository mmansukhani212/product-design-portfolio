/** Original project evidence and the revised fictional-data prototype remain distinct. */
export default function render(ctx) {
  const {caseNav, e, project, media, section, caseHeader, overview, preview, nextProject, next, productLink} = ctx;
  const demoUrl = 'https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/';
  const views = [
    {id:'queue',label:'01 · Find the review',image:'review-queue',alt:'Final fictional-data AM review queue with manager, deadline, remaining time and review status.',caption:'The queue puts ownership, timing, and review status in the same row.'},
    {id:'form',label:'02 · Add human context',image:'review-form',alt:'Final fictional-data review form separating source context and AI-detected information from account-manager validation.',caption:'The form separates what AI detected from what the manager needs to verify.'},
    {id:'shared',label:'03 · Keep the status',image:'intelligence',alt:'Final fictional-data intelligence dashboard with review-status filter and status alongside each account record.',caption:'The shared table carries the review state alongside the signal.'}
  ];
  const walkthrough = `<div class="rokt-walkthrough" data-rokt-walkthrough>
    <div class="rokt-walk-controls" role="group" aria-label="Explore the review journey" hidden>${views.map((v,i)=>`<button type="button" data-rokt-view="${v.id}" aria-pressed="${i===0}" aria-controls="rokt-view-${v.id}">${e(v.label)}</button>`).join('')}</div>
    <div class="rokt-walk-panels">${views.map(v=>`<div id="rokt-view-${v.id}" data-rokt-panel="${v.id}">${media({src:`/assets/rokt-final-${v.image}.webp`,alt:v.alt,caption:v.caption,width:1470,height:919})}</div>`).join('')}</div>
    <p class="rokt-walk-status sr-only" role="status"></p>
  </div>`;

  return `<article class="case-study rokt-case">
    ${caseHeader({
      kicker: 'Rokt',
      title: 'From scattered churn signals to a shared retention workflow',
      summary: 'Connecting AI-detected signals, account-manager context, and a shared view of churn risk.',
      tags: project.tags
    })}

    <div class="case-wrap">${media({
      src: '/assets/rokt-final-overview.webp',
      alt: 'Revised Rokt demo overview with portfolio metrics, competitor mention trends, risk distribution, and competitor comparisons.',
      caption: 'Revised public prototype · all accounts, activity, and financial figures are fictional.',
      width: 1470, height: 919, className: 'case-hero-media', eager: true
    })}</div>

    ${productLink('https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/', 'Open dashboard demo')}

    ${overview({
      summary: '<p>Competitor and churn signals from client calls were scattered across Google Chat and personal spreadsheets, leaving gaps in the information available for retention planning.</p><p>I designed a connected workflow: AI flags mentions, n8n prepares a HubSpot questionnaire, and account managers have three days to review it before submission. A daily dashboard sync gives stakeholders a shared view while distinguishing reviewed records from automatic submissions.</p>',
      metadata: [
        ['My role', 'Lead UX Engineer'],
        ['Design scope', 'End-to-end UX/UI, user research, AI workflow automation, CRM integration'],
        ['Target users', 'Account managers and stakeholders planning client-retention actions'],
        ['Team', 'GTM sales representatives, developers, and the finance team'],
        ['Duration', 'July–September 2026']
      ],
      outcome: {title: '83% reported increase in response rate', body: 'An increase in the existing churn-risk response rate, reported from the project. Automated collection and daily shared reporting gave retention stakeholders a centralized basis for action.'}
    })}

    <div class="case-reading-layout">
      ${caseNav([
        ['rokt-problem', 'The missing handoff'],
        ['rokt-evidence', 'Evidence to direction'],
        ['rokt-workflow', 'The workflow'],
        ['rokt-review', 'Human review'],
        ['rokt-dashboard', 'Explore the solution'],
        ['rokt-impact', 'What changed'],
        ['rokt-reflection', 'Reflection']
      ])}
      <div class="case-reading-content rokt-story">

      ${section({id:'rokt-problem',title:'A signal could be recorded—and still disappear.',body:`
        <div class="case-prose"><p>Gong held the conversation. Getting a competitor mention to the people planning a retention response still depended on an account manager passing it along. Google Chat and personal spreadsheets left no common view of what had been heard or what needed attention.</p></div>
        <figure class="rokt-before-map">
          <ol>
            <li><span>01 · Recorded</span><strong>Client conversation in Gong</strong><p>The signal exists inside a call.</p></li>
            <li class="rokt-friction"><span>02 · Relayed manually</span><strong>Google Chat or a personal spreadsheet</strong><p>Someone must notice, interpret, and report it.</p></li>
            <li><span>03 · Reassembled</span><strong>Retention stakeholders piece it together</strong><p>Scattered records can leave signals unseen.</p></li>
          </ol>
          <figcaption>Before-state reconstruction from the confirmed workflow; not an original research artifact.</figcaption>
        </figure>
        <p class="rokt-hmw"><span>How might we</span> turn conversation signals into shared, actionable intelligence without losing the account manager’s judgment?</p>`})}

      ${section({id:'rokt-evidence',title:'The gap was between the tools.',body:`
        <div class="case-prose"><p>I worked across UX/UI, research, automation, and CRM integration. The problem called for a connected reporting experience: preserve the signal, give its owner a review task, and make the result visible to the wider team.</p></div>
        <div class="rokt-table-wrap" role="region" aria-label="Operational evidence and design implications; scroll on small screens" tabindex="0"><table class="rokt-evidence"><caption>Operational evidence → design direction</caption><thead><tr><th scope="col">What was happening</th><th scope="col">What the design needed to do</th></tr></thead><tbody>
          <tr><td>Mentions depended on manual reporting.</td><td>Carry detected information into a prepared questionnaire.</td></tr>
          <tr><td>Records lived in separate channels.</td><td>Give retention stakeholders one shared dashboard.</td></tr>
          <tr><td>A form can submit without a manager response.</td><td>Keep review state visible after the three-day fallback.</td></tr>
        </tbody></table></div>
        <details class="rokt-support"><summary>Evidence and research scope</summary><p>This synthesis reconstructs the supplied operational account. My research contribution is confirmed; methods, participant counts, and original study artifacts are not documented here. The final screens below are a revised public prototype.</p></details>`})}

      ${section({id:'rokt-workflow',title:'Automate the handoff. Keep human review explicit.',body:`
        <div class="case-prose"><p>The workflow links detection to a prepared questionnaire, gives the relevant account manager three days to review, and syncs the collected information daily. Automatic submission keeps information moving; it does not confirm that an account manager checked it.</p></div>
        <figure class="rokt-system-map" aria-label="Reconstructed detection, review and reporting workflow">
          <ol class="rokt-pipeline"><li><span>01</span><strong>AI trackers</strong><p>Flag competitor and churn mentions in Gong.</p></li><li><span>02</span><strong>n8n → HubSpot</strong><p>Send a prefilled questionnaire to the relevant manager.</p></li></ol>
          <div class="rokt-review-gate"><span>03 · Three-day review window</span><strong>Account manager reviews the prepared record</strong></div>
          <div class="rokt-branches"><div><span>Manager responds</span><strong>Reviewed information proceeds</strong><p>Human context accompanies the detected signal.</p></div><div><span>No action by deadline</span><strong>Original details submit automatically</strong><p>The information remains unconfirmed by the manager.</p></div></div>
          <div class="rokt-converge"><span>04 · Daily sync</span><strong>Company-wide dashboard</strong><p>A shared starting point for retention planning.</p></div>
          <figcaption>Explanatory reconstruction of the confirmed sequence. Daily sync is not a claim of real-time production reporting.</figcaption>
        </figure>`})}

      ${section({id:'rokt-review',title:'A submitted record is not always a verified record.',body:`
        <div class="case-prose"><p>In the revised prototype, the queue makes ownership and deadlines visible. The form separates the excerpt and AI-generated summary from manager validation: accuracy, switching intent, offer details, context, and a recommended next action.</p><p>Follow the same signal from queue to form to shared reporting. These are actual prototype screens, not a recording of the original production system.</p></div>
        ${walkthrough}
        <dl class="rokt-states"><div><dt><span class="rokt-state-dot" aria-hidden="true"></span>Approved</dt><dd>The manager reviewed and approved the record.</dd></div><div><dt><span class="rokt-state-dot rokt-state-auto" aria-hidden="true"></span>Auto-Submitted</dt><dd>The deadline passed. Original AI-detected details entered reporting without manager confirmation.</dd></div></dl>`})}

      ${section({id:'rokt-dashboard',title:'Trace a risk pattern back to its source.',body:`
        <div class="case-prose"><p>The overview shows trends and priority accounts. Intelligence search and filters narrow the investigation by competitor, risk, manager, or review status; account details keep the excerpt and review history close. Stakeholders can inspect the context behind a signal instead of relying on an aggregate alone.</p></div>
        <ol class="rokt-demo-path"><li><strong>Overview</strong><span>Spot a pattern</span></li><li><strong>Intelligence</strong><span>Find the record</span></li><li><strong>AM Review Queue</strong><span>Inspect its evidence</span></li></ol>
        ${preview({id:'rokt-demo',title:'Try the fictional-data dashboard',description:'Open a review to inspect its source context and validation prompts. All accounts, activity, and financial figures are fictional. The prototype runs independently of Gong, HubSpot, and n8n.',src:demoUrl,externalUrl:demoUrl,image:'/assets/rokt-final-review-queue.webp',alt:'Static fallback of the fictional-data AM queue with deadlines, remaining time, review status and three-day submission policy.',width:1470,height:919,loadLabel:'Load dashboard demo'})}`})}

      ${section({id:'rokt-impact',title:'More signals reached a shared starting point.',body:`
        <div class="rokt-impact-ledger"><div><span>Before</span><strong>Manual reporting across separate channels</strong></div><span class="rokt-impact-arrow" aria-hidden="true">→</span><div><span>After</span><strong>Automated collection with daily shared visibility</strong></div></div>
        <div class="case-prose"><p>The project reported an 83% increase in the existing churn-risk response rate. Broader collection and centralized access supported retention planning. This is a reported rate increase, not a claim of 83% less response time or independently validated lift.</p></div>
        <details class="rokt-support"><summary>What the evidence does—and does not—show</summary><p>Raw timings, denominator, and calculation are unavailable. The public prototype’s account counts, revenue exposure, and risk scores are fictional examples, not business outcomes. No retained-revenue figure is claimed.</p></details>`})}

      ${section({id:'rokt-reflection',title:'More coverage still needs a confidence signal.',body:`
        <div class="case-prose"><p>This work reinforced that automation changes the meaning of a completed task. A submitted form may represent a manager’s judgment or simply an expired deadline. That difference needs to travel with the record, from the queue to the detail view and shared dashboard. I would next test whether stakeholders recognize unreviewed signals, know when to follow up, and understand the three-day policy. The goal is to make confidence in the information as visible as the information itself.</p></div>`})}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
