import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function EnergyScenarioPage() {
  return (
    <ScenarioTemplate
      category="Civil protection scenario"
      title="Energy & utilities"
      subtitle="Perimeter monitoring for dispersed assets and restricted zones."
      intro="Energy sites and utilities need continuous monitoring with privacy/security constraints and minimal operational overhead. Swarm.ai provides edge-first EO/IR perception that exports track intelligence into site security operations."
      constraints={[
        'Wide perimeters and multiple asset zones',
        'Privacy / data sovereignty constraints and limited bandwidth',
        'Reliable operation in adverse weather and low visibility',
        'Integration into existing site security and alerting',
      ]}
      deployment={[
        {
          title: 'Fixed perimeter mesh',
          desc: 'Deploy sensor nodes around assets with overlap where clutter is highest.',
        },
        {
          title: 'Low-bandwidth operations',
          desc: 'Track/event outputs over secure links; no need to stream video centrally.',
        },
        {
          title: 'Staged rollout',
          desc: 'Start on one asset zone, validate, then extend coverage density across the perimeter.',
        },
      ]}
      outputs={[
        'Track/event feeds into site security operations',
        'Configurable alerting for restricted zones and approach behavior',
        'Evidence logs for audit and incident review',
        'Integration-first exports and APIs',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Define zones, false-alarm tolerance, and integration hooks; select initial sensor placements.',
        },
        {
          title: 'Pilot',
          desc: 'Instrument ROC-style metrics and timing; validate operator workflow and escalation steps.',
        },
        {
          title: 'Rollout',
          desc: 'Scale to additional zones; harden operations and maintenance playbook.',
        },
      ]}
    />
  );
}

