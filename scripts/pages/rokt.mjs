/** Original project evidence and the revised fictional-data prototype remain distinct. */
export default function render(ctx) {
  const {caseNav, e, project, media, section, caseHeader, overview, preview, nextProject, next, productLink} = ctx;
  const demoUrl = 'https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/';
  const flows = [
    {id:'account-manager', title:'Account manager’s flow', steps:[
      ['Find the review', 'Open the AM Review Queue and identify the forms that need attention.'],
      ['Review and submit', 'Check the prefilled data, add relationship context, and approve the record.'],
      ['Track account health', 'Return to Intelligence and filter to the manager’s accounts.']
    ]},
    {id:'decision-maker', title:'Decision makers’ flow', steps:[
      ['Start with the overview', 'Spot portfolio trends and accounts that need attention.'],
      ['Customize the view', 'Open At-Risk Accounts and filter by competitor and risk level.'],
      ['Explore competitor insights', 'Compare competitors, common threats, and patterns across accounts.']
    ]}
  ];
  const walkthrough = `<div class="rokt-flow-tabs">
    <div class="rokt-flow-tablist" role="tablist" aria-label="Choose an audience flow" hidden>${flows.map((flow,index)=>`<button type="button" role="tab" id="rokt-tab-${flow.id}" aria-controls="rokt-flow-${flow.id}" aria-selected="${index===0}" tabindex="${index===0 ? '0' : '-1'}">${e(flow.title)}</button>`).join('')}</div>
    ${flows.map(flow=>`<section class="rokt-flow" id="rokt-flow-${flow.id}" aria-labelledby="rokt-flow-${flow.id}-title">
      <h3 id="rokt-flow-${flow.id}-title">${e(flow.title)}</h3>
      <div class="rokt-flow-media"><video controls playsinline preload="none" width="1470" height="920" poster="/assets/rokt-flow-${flow.id}-poster.png" aria-labelledby="rokt-flow-${flow.id}-title" aria-describedby="rokt-flow-${flow.id}-steps"><source src="/assets/rokt-flow-${flow.id}.mp4" type="video/mp4">Use the link below to open this flow video.</video></div>
      <a class="text-link rokt-flow-open" href="/assets/rokt-flow-${flow.id}.mp4" target="_blank" rel="noopener">Open flow video <span aria-hidden="true">↗</span><span class="sr-only"> (${e(flow.title)}, opens in a new tab)</span></a>
      <ol id="rokt-flow-${flow.id}-steps">${flow.steps.map(([title,body])=>`<li><strong>${e(title)}</strong><p>${e(body)}</p></li>`).join('')}</ol>
    </section>`).join('')}</div>`;

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
        'rokt-problem',
        'rokt-evidence',
        'rokt-workflow',
        'rokt-review',
        'rokt-dashboard',
        'rokt-impact',
        'rokt-reflection'
      ])}
      <div class="case-reading-content rokt-story">

      ${section({id:'rokt-problem',title:'A signal could be recorded—and still disappear.',body:`
        <div class="case-prose"><p>Gong recorded client calls, but competitor and churn mentions reached retention decision-makers only when an account manager passed them on. Updates arrived through Google Chat and personal spreadsheets, leaving stakeholders without a shared view of what had been heard or needed attention. Important signals could slip through the cracks or reach the right people too late to act.</p></div>
        <figure class="rokt-before-map">
          <ol>
            <li><span>01 · Recorded</span><strong>Client conversation in Gong</strong><p>The signal exists inside a call.</p></li>
            <li class="rokt-friction"><span>02 · Relayed manually</span><strong>Google Chat or a personal spreadsheet</strong><p>Someone must notice, interpret, and report it.</p></li>
            <li><span>03 · Reassembled</span><strong>Retention stakeholders piece it together</strong><p>Scattered records can leave signals unseen.</p></li>
          </ol>
        </figure>
        <p class="rokt-hmw"><span>How might we</span> capture important churn signals and make them accessible to the right stakeholders in time for informed retention decisions?</p>`})}

      ${section({id:'rokt-evidence',title:'Manual reporting was the bottleneck.',body:`
        <div class="case-prose"><p>I interviewed 6+ team leads to understand where the competitive-intelligence process broke down. Account managers had limited time for manual reporting, and flagging potential churn was not consistently prioritized. Team leads received scattered updates across disconnected channels, sometimes too late to plan a response.</p><p>Across UX/UI, research, automation, and CRM integration, I focused on reducing that reporting burden: capture signals early, sync them automatically to a shared dashboard, and give account managers an easy way to review the information and add context.</p></div>
        <div class="rokt-table-wrap" role="region" aria-label="Research insights and design responses; scroll on small screens" tabindex="0"><table class="rokt-evidence"><caption>Research insights → design direction</caption><thead><tr><th scope="col">What was happening</th><th scope="col">What the design needed to do</th></tr></thead><tbody>
          <tr><td>Manual reporting competed with account managers’ other priorities.</td><td>Prepare the record automatically, so managers can review and enrich it instead of starting from scratch.</td></tr>
          <tr><td>Signals arrived across Google Chat and personal spreadsheets.</td><td>Sync signals daily to one dashboard accessible to all relevant stakeholders.</td></tr>
          <tr><td>In the manual process, a form cannot submit without account-manager input.</td><td>Give managers three days to validate and add context. Then automatically submit unactioned records, keeping review status visible so stakeholders can distinguish them from reviewed information.</td></tr>
        </tbody></table></div>`})}

      ${section({id:'rokt-workflow',title:'Automate the handoff. Keep human review explicit.',body:`
        <div class="case-prose"><p>The workflow links detection to a prepared questionnaire, gives the relevant account manager three days to review, and syncs the collected information daily. Automatic submission keeps information moving, helping decision makers form a retention plan in time.</p></div>
        <figure class="rokt-system-map" aria-label="Reconstructed detection, review and reporting workflow">
          <ol class="rokt-pipeline"><li><span>01</span><strong>AI trackers</strong><p>Flag competitor and churn mentions in Gong.</p></li><li><span>02</span><strong>n8n → HubSpot</strong><p>Send a prefilled questionnaire to the relevant manager.</p></li></ol>
          <div class="rokt-review-gate"><span>03 · Three-day review window</span><strong>Account manager reviews the prepared record</strong></div>
          <div class="rokt-branches"><div><span>Manager responds</span><strong>Reviewed information proceeds</strong><p>Human context accompanies the detected signal.</p></div><div><span>No action by deadline</span><strong>Original details submit automatically</strong><p>Managers can update the information after submission.</p></div></div>
          <div class="rokt-converge"><span>04 · Daily sync</span><strong>Company-wide dashboard</strong><p>A shared starting point for retention planning.</p></div>
        </figure>`})}

      ${section({id:'rokt-review',title:'Two paths to a shared view of churn risk.',body:`
        <div class="case-prose"><p>I designed the final flow around two audiences: account managers who supply relationship context, and decision makers who need a timely view of client risk. Prefilled records keep manual input focused on validation and additional context, helping signals reach the people planning a retention response with less effort from account managers.</p><p>The queue makes reviews easy to find; the dashboard connects account-level detail with portfolio and competitor patterns. Managers can revisit submitted information to add context as the client relationship evolves.</p></div>
        ${walkthrough}`})}

      ${section({id:'rokt-dashboard',title:'Trace a risk pattern back to its source.',body:`
        <div class="case-prose"><p>The overview shows trends and priority accounts. Intelligence search and filters narrow the investigation by competitor, risk, manager, or review status; account details keep the excerpt and review history close. Stakeholders can inspect the context behind a signal instead of relying on an aggregate alone.</p></div>
        <ol class="rokt-demo-path"><li><strong>Overview</strong><span>Spot a pattern</span></li><li><strong>Intelligence</strong><span>Find the record</span></li><li><strong>AM Review Queue</strong><span>Inspect its evidence</span></li></ol>
        ${preview({id:'rokt-demo',title:'Try the fictional-data dashboard',description:'Open a review to inspect its source context and validation prompts. All accounts, activity, and financial figures are fictional. The prototype runs independently of Gong, HubSpot, and n8n.',src:demoUrl,externalUrl:demoUrl,image:'/assets/rokt-final-review-queue.webp',alt:'Static fallback of the fictional-data AM queue with deadlines, remaining time, review status and three-day submission policy.',width:1470,height:919,loadLabel:'Load dashboard demo'})}`})}

      ${section({id:'rokt-impact',title:'More signals reached a shared starting point.',body:`
        <div class="rokt-impact-ledger"><div><span>Before</span><strong>Manual reporting across separate channels</strong></div><span class="rokt-impact-arrow" aria-hidden="true">→</span><div><span>After</span><strong>Automated collection with daily shared visibility</strong></div></div>
        <div class="case-prose"><p>The project reported an 83% increase in the existing churn-risk response rate. Broader collection and centralized access supported retention planning. This is a reported rate increase, not a claim of 83% less response time or independently validated lift.</p></div>
        <details class="rokt-support"><summary>What the evidence does—and does not—show</summary><p>Raw timings, denominator, and calculation are unavailable. The public prototype’s account counts, revenue exposure, and risk scores are fictional examples, not business outcomes. No retained-revenue figure is claimed.</p></details>`})}

      ${section({id:'rokt-reflection',title:'Two lessons I’ll take forward.',body:`
        <div class="rokt-reflections">
          <div><h3>The best UX improvements aren't always new interfaces.</h3><p>This project challenged me to think beyond screens and interactions. The core problem wasn't a poorly designed interface, but a fragmented process across multiple tools. I learned that meaningful UX improvements sometimes come from redesigning the underlying workflow rather than introducing another standalone product.</p></div>
          <div><h3>Automation should reduce effort, not eliminate human judgment.</h3><p>Automating competitive intelligence taught me the importance of balancing efficiency with trust. While AI helped identify and capture signals at scale, preserving human validation ensured that insights remained reliable and actionable. I learned to design systems that use automation without losing the contextual understanding people bring to decision-making.</p></div>
        </div>`})}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
