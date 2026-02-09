## Swarm.ai – Distributed Optical Counter‑UAS

### SHORT DESCRIPTION (≤500 chars)
Swarm.ai develops a fully autonomous, distributed counter‑UAS system based on optical EO/IR sensor meshes and swarm coordination. The system enables very early detection, classification, and tracking of small and micro‑UAVs in real time and coordinates reversible, non‑destructive interception swarms for capture or controlled interception. Edge‑based data fusion provides a closed detect–decide–act loop that remains operational under degraded communications and swarm attack scenarios.

---

## 1. CORE IDEA (≤9,000 chars)

### System Overview
Swarm.ai is a fully distributed, edge‑first counter‑UAS system composed of optical sensor nodes, local AI processing units, a low‑bandwidth coordination mesh, and optional non‑destructive interceptor drones. The system operates without centralized control and without reliance on continuous high‑bandwidth communication.

Each sensor node integrates a 360° EO/IR optical front‑end with an edge AI compute unit. In Stage 1 and Stage 2, commercial off‑the‑shelf EO/IR cameras are used; custom sensor hardware is a later option and not required for early validation. The sensor continuously scans the surrounding airspace, performs local detection, classification cues, and multi‑object tracking of small and micro‑UAVs, and converts raw video into low‑bandwidth track and event data. Only structured information (e.g. target state, confidence, threat level) is exchanged between nodes.

Sensor nodes are connected via a resilient mesh network that enables track‑to‑track fusion and distributed posterior updates. Instead of streaming video to a central fusion centre, each node maintains its own belief state and refines it using information received from neighbouring nodes. This architecture maintains situational awareness under degraded communications, partial node loss, or active interference.

When a threat exceeds defined confidence and policy thresholds, the sensor mesh initiates a closed detect–decide–act loop. Track information is used to cue non‑destructive interceptor drones integrated into the same mesh. Interceptors consume target state estimates from the sensor network and execute guided capture or controlled interception manoeuvres, with final guidance supported by onboard vision. Human authorization and safety interlocks can be enforced depending on the operational context.

The system is modular by design: sensor nodes can be deployed as fixed installations, vehicle‑mounted units, or rapidly deployable battery‑powered assets. Optional cloud components are used exclusively for offline analysis, model validation, and update distribution and are not required for operational decision‑making.

### Detection and Target Tracking
Swarm.ai performs detection and tracking using a distributed network of optical EO/IR sensors, with all perception and tracking functions executed locally on edge compute nodes. The system is optimized for early detection of small and micro‑UAVs in cluttered environments and under challenging conditions such as low contrast, partial occlusion, and degraded communications.

Each sensor node applies on‑device object detection using general‑purpose vision models optimized for small airborne targets in visible and thermal domains. Detection outputs feed a multi‑object tracking pipeline that maintains persistent tracks, including position, velocity, confidence, and uncertainty. Tracking operates at up to 30 Hz in close‑tracking mode.

To enable robust classification without frequent retraining, the system employs a reference‑conditioned perception approach. Vision models are prompted using image‑ and CAD‑derived references of relevant UAV classes, including synthetically rendered views across diverse perspectives and conditions. Reference databases can be updated with minimal payload, allowing adaptation to new UAV types while reducing false positives from birds, debris, or background clutter.

Data fusion is performed at the track level. Sensor nodes exchange low‑bandwidth track and event messages via the mesh network. Tracks from different viewpoints are correlated and fused in a distributed manner, enabling multi‑agent posterior updates that materially improve detection reliability and classification performance compared to single‑sensor or centralized approaches. Performance is evaluated using ROC metrics.

Initial deployments target reliable detection and tracking at approximately 1 km range, with a system‑level target of extending detection ranges toward 5 km in later stages through denser sensor deployment and improved fusion. Detection‑to‑track latency is dominated by local processing and is fully instrumented for response‑time verification.

### Decision Logic
Swarm.ai implements a multi‑stage, safety‑first decision logic governing the transition from detection to response. Tracks are evaluated once they reach defined temporal stability and confidence through local tracking and multi‑sensor fusion.

Each track is continuously assessed using a threat assessment function that combines classification confidence, flight behaviour, trajectory, proximity to protected assets, and consistency across sensors. Decision‑making is rule‑based with probabilistic inputs: learned models provide perception and confidence estimates, while escalation follows explicit, verifiable rules.

When predefined policy and confidence thresholds are exceeded, the system enters response readiness. Sensor resources are reallocated to increase revisit rates, and interceptor assets are cued with continuously updated target state estimates. Interceptor activation can require human authorization depending on the deployment scenario and is always subject to safety interlocks.

Safety mechanisms include geofencing, exclusion zones, continuous link and health monitoring, and real‑time reassessment of collateral risk. Violations or confidence degradation trigger automatic abort to a safe observation state. All decisions and actions are logged with full traceability.

### Method of Interaction / Interception
The primary innovation lies in wide‑area detection and tracking across many square kilometres. Neutralisation mechanisms are integrated to close the end‑to‑end loop but are designed as reversible, non‑destructive measures.

For this program, a capture‑oriented interceptor drone provided by a consortium partner is used. The interceptor is cued directly by the sensor mesh, physically connects to the target UAV, and deploys a parachute to enforce controlled descent, minimizing collateral risk. Interceptors rely on low‑cost onboard sensing and flight control, with precision guidance primarily driven by distributed perception. Abort mechanisms ensure disengagement if safety constraints are violated.

### Software and Traceability
The system is implemented as an edge‑first, modular software architecture. During Stage 1 and Stage 2, all mission‑critical functions run on Linux‑based edge platforms. Services for perception, tracking, fusion, and decision support are containerized with well‑defined interfaces.

All system actions are logged as event‑based records with timestamps, software and model versions, configuration hashes, and policy identifiers. Models and reference databases are versioned and cryptographically signed, enabling reproducibility and auditability. A roadmap for FPGA‑based execution is planned for later stages to improve power efficiency and determinism; it is not required for early validation.

### Integration and Security Aspects
Swarm.ai integrates with existing airspace and security systems via standard interfaces. Track data can be exported using EUROCONTROL ASTERIX CAT062 and NATO standards including STANAG 5516 (Link 16) and STANAG 4586. The system avoids dependence on high‑bandwidth video and exchanges track‑level data only.

All communications are authenticated and encrypted. Role‑based access control separates observation, authorization, and administration. Testing is conducted in permissioned environments with conservative safety envelopes and human authorization where required.

---

## 2. APPLICATION SCENARIOS AND ADAPTABILITY (≤5,000 chars)
Swarm.ai protects distributed areas such as military forward bases, dispersed urban defence zones, or critical infrastructure perimeters. The system prioritizes very early detection and stable tracking to maximize response time.

Response timing is verified by instrumented end‑to‑end measurements. In close‑tracking mode, state updates are generated at up to 30 Hz. Compliance with the ≤1/3 flight‑distance criterion is validated by measuring the time from first detection to response initiation relative to declared target velocity and detection range.

The system supports multiple simultaneous tracks and does not assume cooperative flight behaviour. Track‑level fusion across overlapping sensors improves confidence for unknown, swarm, or decoy targets. Under degraded sensing or communication, nodes operate independently and degrade gracefully without single points of failure.

Where response is required, track information cues a capture interceptor available from project start. Engagements occur only in permissioned environments with applicable safety and authorization constraints. The architecture scales from small deployments to dense meshes; final configurations target coverage of ~40 km² with five sensors, while Stage 1 uses denser meshes for validation.

---

## 3. TECHNOLOGICAL MATURITY AND SAFETY (≤2,500 chars)
Core detection, tracking, and fusion algorithms are based on validated academic and industrial work, including peer‑reviewed research developed in collaboration with the Technical University of Munich. Models are fine‑tuned for EO/IR‑based small‑UAV detection and distributed fusion.

To date, testing has been conducted in laboratory and controlled environments, evaluating detection performance, tracking stability, fusion behaviour, and decision latency. End‑to‑end field interception is planned within the staged validation of this program.

Neutralisation is conservative and non‑destructive. The interceptor platform is available from project start and uses parachute‑based controlled descent for UAVs up to 50 kg. An inflatable impact‑attenuation system is planned for integration in Stage 3 to further reduce residual risk.

---

## 4. TEAM AND COMPETENCIES (≤1,500 chars)
The Swarm.ai team combines deep expertise in **3D computer vision, photogrammetry, remote sensing, AI systems, and real-time software platforms**, spanning academic research, industrial AI development, and system integration. The team is explicitly structured to cover the full chain from perception research to deployable, safety-critical systems.

The project is led by **Dr. Lukas Karge (CEO)**, Head of the Mercedes-Benz AI Platform, with extensive experience in large-scale AI systems, edge/cloud architectures, and applied research programs. The technical direction is led by **Prof. Dr. Benjamin Busam (CTO)**, Head of Photogrammetry and Remote Sensing at the Technical University of Munich (TUM), with internationally recognized expertise in 3D reconstruction, tracking, and perception under real-world conditions.

The founding and core team is complemented by senior engineers and researchers with backgrounds in **computer vision, tracking, robotics, and AI system architecture**, including contributors from TUM and industry startups. The team reflects **international and gender diversity**, including a **female co-founder** and team members of **Turkish and Bulgarian** background. Beyond the core team, Swarm.ai benefits from strong connections to leading research institutions and industrial partners, enabling rapid iteration, access to test infrastructure, and credible execution across all stages of the Funke.

---


## 5. FINANCIAL COST ESTIMATE (Stage 1)
€100,000 – required for EO/IR sensor deployment, edge AI integration, radios, and interceptor integration.

---

## 6. WORK PLAN (≤2,000 chars)
The project follows a **staged, risk-driven work plan** aligned with the three phases of the SPRIND Funke. Each stage builds on validated results from the previous one and incrementally increases system integration, operational realism, and safety scope.

**Stage 1 (4 months): Detection, Tracking, Fusion, and Response Readiness**  
Stage 1 focuses on perception dominance and timing verification. Commercial off-the-shelf EO/IR cameras are integrated with Linux-based edge computing platforms. The team implements on-node detection, multi-object tracking, and distributed track-level fusion across a dense sensor mesh. End-to-end response timing is instrumented and evaluated against the ≤1/3 flight-distance criterion. An interceptor platform available from project start is integrated at the interface level to demonstrate a closed detect–decide–cue loop without physical interception.

**Stage 2 (4 months): Controlled End-to-End Neutralisation**  
Stage 2 extends the system to a controlled, non-destructive interception demonstration in permissioned airspace. The focus is on validating the full detect–decide–act chain, including safety logic, human authorization where required, and complete auditability. A capture interceptor performs physical engagement followed by parachute-based controlled descent. Results are documented with synchronized telemetry, logs, and video evidence.

**Stage 3 (7 months): Scaling, Robustness, and System Maturity**  
Stage 3 addresses scalability and robustness. Detection range is extended through denser deployment and improved fusion. The system is tested under node loss, degraded communications, and multi-target scenarios, including coordinated use of multiple interceptor drones. An inflatable impact-attenuation system is integrated to further reduce residual risk. In parallel, feasibility of FPGA-based execution for selected perception components is evaluated to improve determinism and energy efficiency.

