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
    sub: `The natural world is changing faster than it's being measured, and good monitoring costs thousands per site — so the small places go dark. Mycelium is a free, open, encrypted sensor network anyone can build: low-cost nodes that pass readings to each other over radio until they reach a spreadsheet you own. Owned by no one.`,
    // sample telemetry line along the bottom edge (3 parts; middle is green)
    statusPre: `leaf01 · last reading 3 min ago · temp_c 18.4 ·`,
    statusOk: `0 readings lost since deploy`,
    statusNote: `(sample)`,
    // the little legend over the animation. Keys MUST stay in this order
    // (each is paired with its coloured swatch): gateway, node, packet, buffered.
    legendTitle: `Mycelium network — a live representation`,
    legendKeys: [`gateway`, `node`, `data packet`, `buffered reading`],
    legendHintLead: `Click any node or gateway`,   // shown bold
    legendHintTail: `to knock it out — watch the rest of the network reroute itself.`,
    legendHintShortLead: `Tap a node or gateway`,   // bold, small screens
    legendHintShortTail: `— watch it reroute.`,
  },

  // ── 2 · The gap ─────────────────────────────────────────────────────
  gap: {
    kicker: `The gap.`,
    heading: `Good ground truth is priced like a luxury.`,
    body: [
      `The people closest to the land — watershed groups, small farms, tribes, researchers, teachers — are priced out of knowing what it's doing. A single commercial monitoring station runs past a thousand dollars before the first sensor, plus a data plan every year, so measurement goes where grants and mandates send it — and everywhere else declines in the dark.`,
      `Satellites fill in part of the picture, but they see broad, not deep: a satellite can spot an algal bloom spreading across a whole lake; it can't tell you the nitrate levels in the water on Tuesday night. That answer only comes from a sensor in the water, reading every few minutes.`,
    ],
    caption: `The bloom is visible from orbit; the nitrate driving it is not. Only a sensor in the water catches what a satellite never will.`,
  },

  // ── 3 · How it works ────────────────────────────────────────────────
  how: {
    kicker: `How it works.`,
    heading: `Sense → Mesh → Your data.`,
    lead: `A mesh network has no cell tower and no hub. Each node passes readings to the next one over license-free radio, hop by hop, until they reach a gateway with a way out — so adding a node extends the network for everyone behind it, and no carrier ever has to agree to cover the canyon.`,
    cards: [
      { title: `Sense`, body: `Any sensor, from a $7 thermistor to a research sonde, plugs into the same node. Readings are sealed with AES-256-GCM the moment they're taken.` },
      { title: `Mesh`, body: `Every node is designed to relay: nodes find each other over license-free LoRa radio and carry each other's traffic, so your node extends the network for everyone behind it — and the sealed readings stay unreadable at every hop.` },
      { title: `Your data`, body: `A gateway forwards each sealed reading to the destination its owner chose — today a Google Sheet you own. No platform, no subscription, no one between you and your data.` },
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
    badges: [`gateway outage ✓`, `node restart ✓`, `destination blackhole ✓`, `radio drop ✓`],
    punch: `Zero readings lost.`,   // shown bold
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
