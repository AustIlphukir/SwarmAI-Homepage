import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function AirportsScenarioPage() {
  return (
    <ScenarioTemplate
      category="Civil protection scenario"
      title="Airports"
      subtitle="Low-altitude awareness beyond classical radar coverage."
      intro="Airports need stable tracking under clutter, heat haze, and strict operational procedures. Swarm.ai is designed to export track intelligence into existing security and airspace operations without relying on a brittle central video pipeline."
      constraints={[
        'High clutter near runways, buildings, and vehicles; low SNR targets',
        'Strict false-alarm tolerance and clear operator workflows',
        'Timing: detect-to-track latency defines response options',
        'Integration surfaces: security operations, airspace monitoring, and audit requirements',
      ]}
      deployment={[
        {
          title: 'Fixed sensor nodes',
          desc: 'Overlapping EO/IR coverage around critical zones to stabilize tracks and suppress clutter-induced false alarms.',
        },
        {
          title: 'Edge-first processing',
          desc: 'Local inference with low-bandwidth track/event outputs; data sovereignty by design.',
        },
        {
          title: 'Integration-first rollout',
          desc: 'Start with track export + alerting into existing systems, then expand coverage density and fusion.',
        },
      ]}
      outputs={[
        'Track feed into airport security / airspace operations',
        'Alerting with confidence and audit trail',
        'Evidence archiving for review and continuous improvement',
        'Interfaces aligned to your stack (APIs + export formats as required)',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Map zones, constraints, and integration surfaces; define measurable success criteria.',
        },
        {
          title: 'Pilot',
          desc: 'Deploy a small mesh, instrument timing + false alarms, and validate operator workflow.',
        },
        {
          title: 'Rollout',
          desc: 'Scale density for coverage and robustness; harden integrations and operations playbooks.',
        },
      ]}
    />
  );
}

