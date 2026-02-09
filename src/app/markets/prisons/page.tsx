import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function PrisonsScenarioPage() {
  return (
    <ScenarioTemplate
      category="Civil protection scenario"
      title="Prisons"
      subtitle="Suppress drop-offs and reconnaissance with reliable tracking."
      intro="Prisons face low-altitude flights close to walls and buildings—exactly where clutter and background motion create false alarms. Swarm.ai focuses on stable tracking, clear alerting, and evidence archiving for operations."
      constraints={[
        'High clutter near walls/buildings; short distances and quick approaches',
        'Strict false-alarm constraints to avoid operator overload',
        'Continuous operations with clear auditing and evidence retention',
        'Integration into existing perimeter security workflows',
      ]}
      deployment={[
        {
          title: 'Fixed coverage around zones',
          desc: 'Sensor nodes covering approach corridors and critical points with overlap for fusion.',
        },
        {
          title: 'Edge-first outputs',
          desc: 'Track/event intelligence rather than raw video; reduce bandwidth and improve auditability.',
        },
        {
          title: 'Operational playbook',
          desc: 'Alert thresholds and escalation rules tailored to site procedures and authorization requirements.',
        },
      ]}
      outputs={[
        'Track-based alerts with confidence and behavior cues',
        'Evidence archiving for incident review',
        'Integration into existing security dashboards or APIs',
        'Graceful degradation behavior under comms issues',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Map corridors, clutter, and escalation rules; define success metrics for false alarms and timing.',
        },
        {
          title: 'Pilot',
          desc: 'Deploy a small mesh; measure operator workload, false alarms, and detection-to-track latency.',
        },
        {
          title: 'Rollout',
          desc: 'Extend coverage, harden thresholds, and formalize incident evidence workflows.',
        },
      ]}
    />
  );
}

