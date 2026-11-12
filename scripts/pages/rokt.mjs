/** Confirmed project narrative; the revised public prototype uses fictional data. */
export default function render(ctx) {
  const {caseNav, e, project, media, section, caseHeader, overview, preview, nextProject, next, productLink} = ctx;
  const step = (title, detail) => `<li><strong>${e(title)}</strong><span>${e(detail)}</span></li>`;

  const workflow = `<div class="rokt-workflows" aria-label="Before and after reporting workflows">
    <div class="rokt-flow rokt-flow-before">
      <div class="rokt-flow-label"><span>Before</span><h3>Reporting depended on manual follow-through</h3></div>
      <ol class="rokt-flow-steps rokt-flow-three">
        ${step('Gong recordings', 'Client conversations contain competitor and churn mentions.')}
        ${step('Manual reporting', 'Account managers relay signals through Google Chat or personal spreadsheets.')}
        ${step('Fragmented information', 'Scattered records leave stakeholders with an incomplete picture.')}
      </ol>
    </div>
    <div class="rokt-flow rokt-flow-after">
      <div class="rokt-flow-label"><span>After</span><h3>A connected path from signal to shared visibility</h3></div>
      <ol class="rokt-flow-steps rokt-flow-five">
        ${step('Detect', 'AI trackers flag competitor and churn mentions.')}
        ${step('Prepare', 'n8n sends the relevant account manager a prefilled HubSpot questionnaire.')}
        ${step('Review', 'The account manager has three days to review the information.')}
        ${step('Submit', 'Manager-reviewed information proceeds; unactioned questionnaires submit automatically.')}
        ${step('Share', 'Data syncs daily to a centralized company-wide dashboard.')}
      </ol>
      <p class="rokt-flow-note">Automatic submission applies only when the three-day window passes without action. It does not establish human validation.</p>
    </div>
    <p class="rokt-workflow-caption">Workflow explainer reconstructed from the confirmed project sequence.</p>
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
        ['rokt-problem', 'The problem'],
        ['rokt-workflow', 'Workflow'],
        ['rokt-review', 'Manager review'],
        ['rokt-dashboard', 'Dashboard'],
        ['rokt-demo', 'Explore the demo'],
        ['rokt-reflection', 'Reflection']
      ])}
      <div class="case-reading-content">

    ${section({
      id: 'rokt-problem', kicker: '01 · The problem', title: 'Important signals depended on someone passing them along.',
      body: '<div class="case-prose"><p>Client conversations were recorded in Gong, but competitor mentions and churn risks still depended on account managers relaying them through Google Chat or personal spreadsheets. Information was fragmented, and some signals never reached the people responsible for responding.</p><p>Stakeholders needed a common place to understand emerging risks and prepare a retention plan.</p></div>'
    })}

    ${section({id: 'rokt-workflow', kicker: '02 · Decisions and workflow', title: 'Connect collection, review, and visibility.', body: `<ol class="decision-list rokt-decisions">
      <li><h3>Prepare the record</h3><p>Flag mentions in Gong and prefill a HubSpot questionnaire through n8n, giving the account manager a signal to review.</p></li>
      <li><h3>Define a review window</h3><p>Allow three days for review, then submit unactioned questionnaires automatically. Coverage improves only if unreviewed information stays identifiable.</p></li>
      <li><h3>Share a common view</h3><p>Sync daily to a company-wide dashboard, so retention stakeholders can plan from the same collected information.</p></li>
      </ol>${workflow}`})}

    ${section({
      id: 'rokt-review', kicker: '03 · Account-manager experience', title: 'Review the signal, then add the relationship context.',
      body: `<div class="case-prose"><p>In the revised prototype, a review queue brings the account, assigned manager, deadline, time remaining, and status together. Opening a record separates AI-detected intelligence from the manager’s validation.</p><p>The prefilled form includes the conversation excerpt and AI-generated summary. The manager can assess accuracy and switching intent, clarify the offer, add context, and recommend a next action. A visible countdown and three-day policy explain what happens if no action is taken.</p></div>
      ${media({src: '/assets/rokt-final-review-form.webp', alt: 'Fictional Rokt review form separating account information, AI-detected intelligence, and account-manager validation, with a review countdown and approval controls.', caption: 'Prefilled source context above a separate manager-validation step.', width: 1470, height: 919})}
      <div class="rokt-validation" aria-label="Submission validation states">
        <div><h3>Approved</h3><p>A manager has reviewed and approved the record in the prototype.</p></div>
        <div><h3>Auto-Submitted</h3><p>The review window expired. Original AI-detected details enter reporting without manager confirmation.</p></div>
      </div>`
    })}

    ${section({
      id: 'rokt-dashboard', kicker: '04 · Shared dashboard', title: 'See the pattern. Keep the context.',
      body: `<div class="case-prose"><p>The revised overview brings trends, risk distribution, competitor comparisons, priority accounts, and recent activity into one view. The intelligence table then connects each mention to its client context, account manager, detection date, and review status.</p><p>Search and filters support different questions: which competitor is appearing, which accounts need attention, and which signals have been reviewed. An account detail drawer keeps the excerpt and review history available for closer inspection.</p></div>
      ${media({src: '/assets/rokt-final-intelligence.webp', alt: 'Revised Rokt intelligence dashboard with competitor and risk charts, filters including review status, and an account intelligence table.', caption: 'Revised public prototype: move from aggregate patterns to individual records, with review status kept alongside the signal. Every displayed value is fictional.', width: 1470, height: 919})}`
    })}

    ${preview({
      id: 'rokt-demo', title: 'Explore the revised demo',
      description: 'Start at Overview, open Intelligence Dashboard, then explore the AM Review Queue. All data is fictional. The prototype runs independently of Gong, HubSpot, and n8n.',
      src: 'https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/', externalUrl: 'https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/',
      image: '/assets/rokt-final-review-queue.webp',
      alt: 'Static fallback of the revised fictional-data AM review queue showing deadlines, time remaining, Approved and Auto-Submitted states, and the three-day policy.',
      width: 1470, height: 919, loadLabel: 'Load fictional-data demo'
    })}

    ${section({
      id: 'rokt-reflection', kicker: '05 · Evidence and reflection', title: 'Coverage and confidence need to travel together.',
      body: '<div class="case-prose"><p>The original project made churn-risk information accessible to more stakeholders and supported faster preparation of retention action plans. These are reported project outcomes; the prototype’s account counts, revenue figures, and risk scores are not impact measures.</p><p>The revised prototype makes the difference between approval and automatic submission visible. That distinction matters: collecting more information is useful only when people can judge its reliability. I would next test whether stakeholders can identify unreviewed signals and decide when follow-up is needed.</p></div>'
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
