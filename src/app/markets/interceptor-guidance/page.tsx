import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function InterceptorGuidanceScenarioPage() {
  return (
    <ScenarioTemplate
      category="Defense & tactical scenario"
      title="Interceptor data & AI guidance"
      subtitle="Decision-ready tracks and AI guidance to support interceptor workflows."
      intro="Mobile, distributed, battery-powered sensors can be deployed on demand in the field. Swarm.ai fuses detections into prioritized tracks and delivers AI guidance cues that help teams decide when, where, and how to commit interceptor assets."
      constraints={[
        'Fast engagement timelines with limited operator bandwidth',
        'Degraded comms and intermittent node connectivity',
        'Multi-target behavior including decoys and clutter',
        'Need for auditable guidance aligned with rules of engagement',
      ]}
      deployment={[
        {
          title: 'Field-deployable sensor mesh',
          desc: 'Deploy battery-powered nodes where needed and adapt coverage as the threat axis changes.',
        },
        {
          title: 'Guidance-first fusion',
          desc: 'Continuously rank tracks and generate recommendation cues for interceptor assignment and sequencing.',
        },
        {
          title: 'Integration into interceptor workflows',
          desc: 'Export track and recommendation data into command tools and fire-control interfaces.',
        },
      ]}
      outputs={[
        'Prioritized tracks with confidence and threat scoring',
        'AI guidance cues for assignment, timing, and interception windows',
        'Structured data products for C2 and interceptor systems',
        'Telemetry and audit trails for after-action review',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Define engagement workflows, response timing targets, and required integration outputs.',
        },
        {
          title: 'Pilot',
          desc: 'Deploy a field mesh and validate guidance quality in contested and degraded-comms scenarios.',
        },
        {
          title: 'Rollout',
          desc: 'Scale by sector, tune AI guidance thresholds, and standardize operator playbooks.',
        },
      ]}
    />
  );
}
