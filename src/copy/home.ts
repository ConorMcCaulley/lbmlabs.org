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
    sub: `Our biosphere is changing faster than ever, but good field data is often challenging and expensive to collect. Part of that challenge is the price and complexity of existing telemetry systems that rely on satellite or cellular backhaul.
Mycelium is an open-source, mesh telemetry network designed to make the (measuring the world around us) (adding telemetry to your existing sensors) cheap, easy, and reliable. `,
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
      `Existing telemetry systems are costly. Hardware runs from $1,000 to over $5,000 dollars per unit, plus ongoing data costs which can be as high as $600 dollars per year. DIY solutions do exist, but are often more challenging to stand up and still require traditional cellular or satellite data plans. Many of the people closest to the land — watershed groups, small farms, tribes, researchers, teachers — are unable to use the existing option because of cost and technical roadblocks. `,
      `Mycelium is designed to make it easier, cheaper, and more reliable to telemeter sensors in the field. It uses low cost, open-source hardware than you can build easily from off the shelf parts and a fully open and free software stack. While it currently suffers from some of the same issues as other DIY telemetry solutions (namely needing some technical knowledge to understand and set up the hardware), I am working hard to build a no-terminal setup app that will streamline the entire process enough to allow anyone to stand up a node in a few minutes. `,
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
        body: `Any analog or SDI-12 sensor, from a $7 thermistor to a research sonde, plugs into the same node hardware. Readings are encrypted with AES-256-GCM the moment they're taken.`,
      },
      {
        title: `Mesh`,
        body: `Every node is designed to relay: nodes find each other over license-free, 915MHz Long Range radio and relay each other's traffic. Because packet routing and link optimization take place automatically, the network is continually reconfiguring itself to find the shortest egress pathway. The same mechanism allows the network to reroute around node or gateway outages without any outside intervention.`,
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
    kicker: `Free. Actually free.`,
    heading: `Not discounted. Not freemium. No markup.`,
    body: `Mycelium is a public good. The complete design — parts list, firmware, software, assembly guides — is published, and you build a node from off-the-shelf parts: Raspberry Pi, commodity LoRa radio, standard cables. There is no markup and no subscription anywhere in the stack: the design is free, the radio band is license-free, and your data lands somewhere you already own.`,
    caption: `Price it yourself — this list renders straight from the repo.`,
  },

  // ── 5 · Reach ───────────────────────────────────────────────────────
  reach: {
    kicker: `Reach.`,
    heading: `Built for the places cell towers never reached.`,
    body: `The valleys, forests, and rangelands that need monitoring most are exactly where coverage ends — where the only commercial answer has been a satellite subscription. Mycelium's answer is the mesh itself: every node is designed to relay by default, so each sensor anyone deploys is meant to carry the network further. It's designed so that a node on the ridgeline brings the canyon behind it online — coverage compounding by addition, not infrastructure. (The real range gets published once it's field-tested; until then the picture below is schematic.)`,
  },

  // ── 6 · Encryption / privacy ────────────────────────────────────────
  privacy: {
    kicker: `Your data stays yours.`,
    heading: `The relays can't read what they carry.`,
    body: `Every reading is encrypted on the sensor node and decrypted only at its owner's destination — the mesh in between, including whoever runs the gateway, sees ciphertext and a delivery address. That's not a policy; it's the architecture. Strangers' networks can strengthen each other without sharing anything but radio waves.`,
  },

  // ── 7 · Reliability (the drill output block lives in index.astro) ───
  reliability: {
    kicker: `Built like infrastructure, not a gadget.`,
    heading: `Reliability and survivability are the core of the Mycelium architecture.`,
    body: [
      `Every reading is committed to disk the moment it's taken and deleted only after its destination cryptographically confirms receipt. Outages buffer and drain. Nodes watch themselves — and recover from wedges, crashes, and even a radio knocked off the bus, on their own.`,
      `This is verified by sabotaging the bench network with scripted failure drills:`,
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
  // state controls the marker: "done" → ✓, "wip" → ◐ in progress, "todo" → none
  roadmap: {
    kicker: `Where this is going.`,
    heading: `A bench-proven core, growing toward the field.`,
    body: `The encrypted pipeline, the mesh, and the reliability layer all run end to end on the bench today. What comes next is making it survive real weather and easy enough that you never touch a terminal — built in the open, one honest milestone at a time. Two pieces are in active development right now.`,
    items: [
      { label: `bench network running end to end`, state: `done` },
      { label: `field hardware testing`, state: `wip` },
      { label: `zero-terminal setup app`, state: `wip` },
      { label: `fleet dashboards`, state: `todo` },
    ],
    caption: `All of it public, all of it free.`,
  },

  // ── 10 · Mission (the closing section) ──────────────────────────────
  mission: {
    kicker: `Knowing shouldn't be a luxury.`,
    heading: `Protecting anything starts with knowing what's happening to it.`,
    body: [
      `And for most of the living world, nobody is measuring. Mycelium exists to make the measuring cheap, trustworthy, and unowned, so the small places get watched too.`,
      `It's named for the network under the forest floor: invisible infrastructure that connects living things, moves what's needed to where it's needed, and belongs to no one in particular.`,
    ],
    storyLink: `the story behind Mycelium →`,
  },

  // ── Footer ──────────────────────────────────────────────────────────
  footer: {
    brandline: `LBM Labs builds open, public-good infrastructure for understanding the natural world.`,
  },
};
