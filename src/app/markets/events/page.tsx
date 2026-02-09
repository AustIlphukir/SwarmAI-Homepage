import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function EventsScenarioPage() {
  return (
    <ScenarioTemplate
      category="Civil protection scenario"
      title="Major events"
      subtitle="Temporary protection for crowds and high-profile venues."
      intro="Events require rapid deployment, clear operator workflows, and tight false-alarm control. Swarm.ai supports temporary node deployment and track-based intelligence export into event security operations."
      constraints={[
        'Rapid setup and temporary infrastructure',
        'Crowd safety and strict authorization requirements',
        'Dense clutter and background motion (lights, screens, structures)',
        'Integration into event security command posts and audit requirements',
      ]}
      deployment={[
        {
          title: 'Rapidly deployable nodes',
          desc: 'Battery-powered or temporary fixed nodes positioned for coverage of key approach corridors.',
        },
        {
          title: 'Track-based workflows',
          desc: 'Operator-facing alerts and evidence capture based on stable tracks and explicit thresholds.',
        },
        {
          title: 'Short lifecycle operations',
          desc: 'Setup → operate → teardown with a clean operational playbook and telemetry capture.',
        },
      ]}
      outputs={[
        'Real-time track-based alerting for security operators',
        'Evidence archiving for post-event review',
        'Integration into event security dashboards and comms',
        'Explicit decision steps and audit trail',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Define venue layout, workflows, and authorization; select deployment placements.',
        },
        {
          title: 'Pilot',
          desc: 'Dry-run with telemetry and false-alarm measurement; validate operator workflow.',
        },
        {
          title: 'Operation',
          desc: 'Run the event with continuous monitoring and evidence capture; post-event review.',
        },
      ]}
    />
  );
}

