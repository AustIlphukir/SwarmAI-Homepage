import ScenarioTemplate from '../../../components/ScenarioTemplate';

export default function TacticalBaseScenarioPage() {
  return (
    <ScenarioTemplate
      category="Defense & tactical scenario"
      title="Tactical base protection"
      subtitle="Distributed sensing built for degraded comms and contested environments."
      intro="Tactical environments assume degraded communications, mobility constraints, and multi-target behavior. Swarm.ai is designed as a distributed mesh where nodes keep operating locally and fusion degrades gracefully without central dependencies."
      constraints={[
        'Degraded comms and partial node loss as baseline',
        'Multi-target behavior including swarms and decoys',
        'Strict timing constraints and explicit safety/authorization rules',
        'Integration into existing C2 / operational workflows',
      ]}
      deployment={[
        {
          title: 'Distributed mesh',
          desc: 'Deploy multiple nodes with overlap where possible; fusion remains operational without central control.',
        },
        {
          title: 'Edge autonomy',
          desc: 'Local perception and tracking with explicit decision steps; human authorization where required.',
        },
        {
          title: 'Interface-driven integration',
          desc: 'Export track intelligence into your C2 stack via a defined output contract.',
        },
      ]}
      outputs={[
        'Track/event intelligence for recognized air picture and alerts',
        'Explicit policy and safety interlock hooks',
        'Graceful degradation behavior under comms stress',
        'Auditability and evidence capture for review',
      ]}
      pilot={[
        {
          title: 'Discovery',
          desc: 'Define operational constraints, comms assumptions, and integration surfaces; set measurable outcomes.',
        },
        {
          title: 'Pilot',
          desc: 'Deploy a dense mesh for validation; run degraded-comms and multi-target scenarios with telemetry.',
        },
        {
          title: 'Rollout',
          desc: 'Scale to realistic density; harden interfaces, operations, and safety procedures.',
        },
      ]}
    />
  );
}

