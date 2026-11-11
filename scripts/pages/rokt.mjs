/** Rokt narrative: confirmed workflow and role; demo imagery is illustrative. */
export default function render(ctx) {
  const {caseNav, e, project, media, section, caseHeader, overview, preview, nextProject, next} = ctx;
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
      summary: 'AI detection, account-manager review, and a shared dashboard.',
      tags: project.tags
    })}

    <div class="case-wrap">${media({
      src: '/assets/rokt-dashboard.webp',
      alt: 'Dummy-data Rokt competitive-intelligence overview with account metrics, competitor mention trends, and risk distribution.',
      caption: 'Competitive-intelligence demo. Accounts, activity, and financial figures are fictional; this is not a production screenshot.',
      width: 1470, height: 706, className: 'case-hero-media', eager: true
    })}</div>

    ${overview({
      summary: '<p>I led UX research and end-to-end UX/UI design, alongside AI workflow automation and CRM integration. The work connected detection, a prepared questionnaire, and shared reporting instead of leaving each step disconnected.</p>',
      metadata: [
        ['Role', 'Lead UX Engineer'],
        ['Timeline', 'July–September 2026'],
        ['Scope', 'UX/UI, user research, AI automation, CRM integration'],
        ['Core constraint', 'Keep information moving while preserving the difference between reviewed and unreviewed signals.']
      ],
      outcome: {title: 'Daily shared visibility', body: 'Broader access to churn-risk information, with faster preparation of retention action plans reported from the project.'}
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

    ${section({id: 'rokt-workflow', kicker: '02 · The workflow', title: 'Connect the steps that used to sit apart.', body: workflow})}

    ${section({
      id: 'rokt-review', kicker: '04 · Account-manager experience', title: 'Start with a prepared questionnaire.',
      body: `<div class="case-prose"><p>The account manager starts with a prefilled questionnaire. This demo capture illustrates that review step with fictional records.</p></div>
      ${media({src: '/assets/rokt-review-form.webp', alt: 'Rokt dummy-data demo showing a prefilled account-manager validation form beside the review queue.', caption: 'Dummy-data demo: account-manager review form.', width: 1470, height: 762})}
      <div class="rokt-validation" aria-label="Submission validation states">
        <div><h3>Manager-reviewed</h3><p>The account manager has checked the information.</p></div>
        <div><h3>Automatically submitted</h3><p>The three-day window expired without a response. No manager confirmation is implied.</p></div>
      </div>`
    })}

    ${section({
      id: 'rokt-dashboard', kicker: '05 · Shared dashboard', title: 'One place to see the collected signals.',
      body: '<div class="case-prose"><p>A shared view lets retention stakeholders work from the same signals when planning a response.</p></div>'
    })}

    ${preview({
      id: 'rokt-demo', title: 'Try the demo',
      description: 'Fictional data only. This demo illustrates the workflow, not production scope.',
      src: 'https://roktcidash.netlify.app/', externalUrl: 'https://roktcidash.netlify.app/',
      image: '/assets/rokt-review-queue.webp',
      alt: 'Static fallback of the dummy-data Rokt account-manager review queue, with review deadlines and submission statuses.',
      width: 1470, height: 762, loadLabel: 'Load demo'
    })}

    ${section({
      id: 'rokt-reflection', kicker: '06 · Reflection', title: 'Coverage and confidence need to travel together.',
      body: '<div class="case-prose"><p>A review deadline can improve reporting coverage while leaving uncertainty about the underlying information. The next refinement I would prioritize is making the validation state unmistakable, so stakeholders can judge what is ready for action and what needs follow-up.</p></div>'
    })}

      </div>
    </div>
    ${nextProject(next)}
  </article>`;
}
