// ════════════════════════════════════════════════════════════════════
//  HOMEPAGE COPY  —  edit the words here, not in the page markup.
//
//  This file holds every line of text on the homepage. The layout, styling
//  and visuals live in src/pages/index.astro and pull their words from
//  here, so you can rewrite copy freely without touching any code.
//
//  HOW TO EDIT SAFELY
//   • Change only the text between the `backticks`.
//   • Leave the field names, backticks, commas, [ ] and { } as they are.
//   • A block written as [ `first paragraph`, `second paragraph` ] renders
//     as separate paragraphs — add or remove items to add/remove paragraphs.
//   • Apostrophes and "quotes" are safe inside backticks. The only two
//     characters to avoid typing raw are a backtick ` and the sequence ${ .
//   • Em dashes —, arrows → ↗, and the ✓ ◐ marks are fine to keep or change.
//
//  NOT in this file (they're formatted data / evidence, edited in
//  index.astro): the BOM receipt, the drill output, the pytest line, the
//  cost chart numbers, and the footer license line.
// ════════════════════════════════════════════════════════════════════

export const home = {
  // Shared button labels (the hero and the closing section reuse these).
  cta: {
    build: `Build one`,
    code: `Read the code`,
  },

  // ── 1 · Hero (the full-screen opener over the animation) ────────────
  hero: {
    kicker: `LBM Labs — open, public-good infrastructure for understanding the natural world.`,
    heading: `The network for the Earth.`,
    sub: `Our biosphere is changing faster than ever, but data from the field is often challenging and expensive to collect. Part of that challenge is the price and complexity of existing telemetry systems that rely on satellite or cellular backhaul.
Mycelium is an open-source, LoRa mesh telemetry network designed to make measuring the world around us — and adding telemetry to your existing sensors — cheap, easy, and reliable. `,
    // sample telemetry line along the bottom edge (3 parts; middle is green)
    statusPre: `leaf01 · last reading 3 min ago · temp_c 18.4 ·`,
    statusOk: `0 readings lost since deploy`,
    statusNote: `(sample)`,
    // the little legend over the animation. Keys MUST stay in this order
    // (each is paired with its coloured swatch): gateway, node, packet, buffered.
    legendTitle: `Mycelium network — a live representation`,
    legendKeys: [`gateway`, `node`, `data packet`, `buffered reading`],
    legendHintLead: `Click any node or gateway`, // shown bold
    legendHintTail: `to knock it out — watch the rest of the network reroute itself.`,
    legendHintShortLead: `Tap a node or gateway`, // bold, small screens
    legendHintShortTail: `— watch it reroute.`,
  },

  // ── 2 · The gap ─────────────────────────────────────────────────────
  gap: {
    kicker: `The gap.`,
    heading: `Getting data out of the field is expensive.`,
    body: [
      `Existing telemetry systems are costly. Hardware runs from $1,000 to over $5,000 per unit, plus ongoing data costs that can be as high as $600 per year. DIY solutions do exist, but are often more challenging to stand up and still require traditional cellular or satellite data plans. Many of the people closest to the land — watershed groups, small farms, tribes, researchers, teachers — are unable to use the existing option because of cost and technical roadblocks. `,
      `Mycelium is designed to make it easier, cheaper, and more reliable to telemeter sensors in the field. It uses low-cost, open-source hardware that you can build easily from off-the-shelf parts and a fully open and free software stack. While it currently suffers from some of the same issues as other DIY telemetry solutions (namely needing some technical knowledge to understand and set up the hardware), the next release will include a no-terminal setup app to streamline the entire process. The goal is to make it simple enough to allow anyone to stand up a node in a few minutes with no technical knowledge. `,
    ],
    // NOTE: caption is stashed — not shown on the page right now (the satellite
    // visual it described was removed 2026-06-15). Kept here for when/if it returns.
    caption: `The bloom is visible from orbit; the nitrate driving it is not. Only a sensor in the water catches what a satellite never will.`,
  },

  // ── 3 · How it works ────────────────────────────────────────────────
  how: {
    kicker: `How it works.`,
    heading: `Sense → Mesh → Your data.`,
    lead: `Rather than relying on satellites or cell towers, mesh networks pass readings from one sensor node to the next, hop by hop, until they reach a gateway with internet access. Adding a node extends and strengthens the network for everyone. `,
    cards: [
      {
        title: `Sense`,
        body: `Any analog or SDI-12 sensor, from a $7 thermistor to a research sonde, plugs into the same node hardware. (I am actively working on integration for I²C, SPI, and OneWire sensors.) The hardware generates a 12 V boost to power external sondes (up to ~100 mA). Readings are encrypted with AES-256-GCM the moment they're taken.`,
      },
      {
        title: `Mesh`,
        body: `Every node is designed to relay: nodes find each other over license-free, 915 MHz Long Range radio and relay each other's traffic. Because packet routing and link optimization take place automatically, the network is continually reconfiguring itself to find the shortest egress pathway. The same mechanism allows the network to reroute around node or gateway outages without any outside intervention. The network stack underneath is Reticulum ↗, Mark Qvist's phenomenal open mesh networking project. Mycelium exists in large part because his work made it imaginable.`,
      },
      {
        title: `Your data`,
        body: `Encrypted readings stay unreadable at every hop, meaning users can trust their data is safe even if they don’t know whose nodes their data flows through. A gateway forwards each encrypted reading over the internet to the destination its owner chose. Right now that means a Google Sheet but my next goal is to stand up integrations for the most common hosted database platforms.  
`,
      },
    ],
  },

  // ── 4 · Free (the BOM receipt block lives in index.astro) ───────────
  free: {
    kicker: `Free and open-source`,
    heading: `Designed for everyone, not just research labs.`,
    body: `Mycelium is designed as a public good. The complete spec — parts list, firmware, software, assembly guides — is published, and you build a node from off-the-shelf parts. There is no markup and no subscription anywhere in the stack: the design is free, the radio band is license-free, and your data lands somewhere you already own.`,
    caption: `Price it yourself — this list renders straight from the repo.`,
  },

  // ── 5 · Reach ───────────────────────────────────────────────────────
  reach: {
    kicker: `Reach.`,
    heading: `Built for the places cell towers never reached.`,
    body: `The valleys, forests, and rangelands that need monitoring most are exactly where coverage ends — where the only commercial answer has been a satellite subscription. Mycelium's answer is the mesh itself: every node relays by default, so each sensor anyone deploys extends the range of the mesh for everyone. Want to monitor water quality in a deep canyon without cell coverage? Each node you deploy extends the network farther up the canyon. No WiFi or other gateways nearby? I am working on a field gateway with a cellular or satellite connection. Instead of needing a data plan for each individual sensor, one data plan for the gateway connects the entire network to the internet, even in the most remote of locations.`,
  },

  // ── 6 · Encryption / privacy ────────────────────────────────────────
  privacy: {
    kicker: `Your data stays yours.`,
    heading: `The relays can't read what they carry.`,
    body: `Every reading is encrypted with AES-256-GCM on the sensor node and decrypted only at its owner's destination. Every other node in the mesh sees only the final address and ciphertext. This allows nodes deployed by disparate teams and individuals to reinforce each other without sharing anything but radio waves.`,
  },

  // ── 7 · Reliability (the drill output block lives in index.astro) ───
  reliability: {
    kicker: `Built like infrastructure, not a gadget.`,
    heading: `Reliability and survivability are at the core of the Mycelium architecture.`,
    body: [
      `Breakdowns in the field are expensive. They often necessitate a technician physically going out to the station to reset it, which is especially problematic if your nodes are in hard-to-reach locations (on mountaintops, buoys, etc.). While hardware problems are to some extent inevitable, starting with field reliability as the basis for each decision in the software stack can help make field deployments more reliable and thus cheaper. 
Mycelium approaches software reliability in a variety of ways. 
1. Every reading is committed to disk the moment it's taken and deleted only after its destination cryptographically confirms receipt. 
2. Destination or gateway outages buffer and drain automatically. If a node loses its connection, it stores and consolidates readings until the connection is re-established. By transmitting multiple readings together after an outage, Mycelium helps to avoid network overload. If the destination is down, gateways themselves can hold onto packets, preventing retransmission from the source node and the resulting network bandwidth drain.
3. Nodes watch themselves — and recover from wedges, crashes, and even a radio knocked off the bus, on their own. Three watchdogs watch the system at separate layers (process → OS process-supervisor → silicon) and reboot if a process stalls, crashes, or enters an infinite loop.
4. Automatic notification of an offline node. If the destination script does not receive a reading for a specific amount of time (set to 3x the log rate but easily modifiable), it sends a message to the provided email that the node has fallen silent.
5. While the current node hardware design has a single logger, microcomputer, battery, and radio unit, the V2 node that is currently in the planning phase has complete hardware redundancy. The idea is that even with the physical degradation or destruction of a hardware component, the nodes should be able to reroute any process around the degraded hardware and alert the destination address of the failure. This means hardware degradation turns into something you can deal with during routine maintenance rather than necessitating an emergency trip to the field.`,
      `Features 1–4 have been verified by sabotaging the bench network with scripted failure drills:`,
    ],
    badges: [
      `gateway outage ✓`,
      `node restart ✓`,
      `destination blackhole ✓`,
      `radio drop ✓`,
    ],
    punch: `Zero readings lost.`, // shown bold
    caption: `A real drill run against the real (bench) network, June 2026. The drills ship in the repo — run them yourself.`,
  },

  // ── 8 · Open by default (pytest line + links live in index.astro) ───
  open: {
    kicker: `Open by default.`,
    heading: `Don't just trust. Check.`,
    body: `Everything is public: the firmware, the node and gateway software, the destination code, the parts list, the roadmap. The test suite runs on any laptop, and the failure drills that back the claims above are scripts in the repo — the evidence is re-runnable, not just readable.`,
  },

  // ── 9 · Roadmap ─────────────────────────────────────────────────────
  // state controls the marker: "done" → ✓, "wip" → ◐ in progress, "todo" → ○ in planning
  roadmap: {
    kicker: `Where this is going.`,
    heading: `A bench-proven core, growing toward the field.`,
    body: `The encrypted pipeline, the mesh, the gateway software which translates LoRa to TCP/IP, and the reliability layer all run end to end on the bench today. What comes next is making it hardened enough to survive real weather and easy enough that you never touch a terminal. Two pieces are in active development right now with two more in planning:`,
    items: [
      { label: `bench network running end to end`, state: `done` },
      { label: `field hardware testing`, state: `wip` },
      { label: `zero-terminal setup app`, state: `wip` },
      { label: `fleet dashboards`, state: `todo` },
      { label: `fully redundant hardware (v2)`, state: `todo` },
    ],
    caption: `All of it public, all of it free.`,
  },

  // ── 10 · Mission (the closing section) ──────────────────────────────
  mission: {
    kicker: `Knowing shouldn't be a luxury.`,
    heading: `Protecting anything starts with knowing what's happening to it.`,
    body: [
      `And for most of the living world, nobody is measuring. Mycelium exists to make the measuring cheap, easy, and reliable, so we can help protect our world before it disappears.`,
    ],
    storyLink: `the story behind Mycelium →`,
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    brandline: `LBM Labs builds open, public-good infrastructure for understanding the natural world.`,
  },
};
