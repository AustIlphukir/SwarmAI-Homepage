import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function BorderPerimeterScenarioPage() {
  return (
    <ScenarioTemplate
      category="Defense & tactical scenario"
      title="Border / perimeter"
      subtitle="Wide-area monitoring across large boundaries and terrain variability."
      intro="Borders and large perimeters require coverage planning, low-bandwidth operations, and robust tracking under changing terrain and weather. Swarm.ai uses edge-first nodes and distributed fusion to scale coverage without central fragility."
      constraints={[
        'Large-area coverage and terrain variability',
        'Limited bandwidth and intermittent comms',
        'Weather variability and low visibility',
        'Integration into existing monitoring and command workflows',
      ]}
      deployment={[
        {
          title: 'Coverage planning by density',
          desc: 'Scale range and reliability via node placement and overlap, not by relying on a single monolithic sensor.',
        },
        {
          title: 'Low-bandwidth operation',
          desc: 'Track/event outputs over secure links; no requirement to stream video centrally.',
        },
        {
          title: 'Incremental integration',
          desc: 'Start with track exports and alerting, then expand fusion and coordination features.',
        },
      ]}
      outputs={[
        'Track/event feeds into monitoring and command centers',
        'Alerting tuned for boundary approaches and behavior patterns',
        'Evidence and telemetry for audit and improvement',
        'Interfaces aligned to your integration requirements',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Define coverage zones, comms assumptions, and integration outputs; set measurable success criteria.',
        },
        {
          title: 'Pilot',
          desc: 'Deploy an initial segment; validate clutter behavior, timing, and degraded-comms operation.',
        },
        {
          title: 'Rollout',
          desc: 'Extend coverage in segments; standardize operations and maintenance.',
        },
      ]}
    />
  );
}

