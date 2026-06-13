#!/usr/bin/env python3
"""Generate the social-share card -> public/og.png (1200x630).
Mirrors the hero: dark field, a living mesh that radiates from two gateway
hubs (a Prim/MST tree, like the animation's primary links), the headline.
Requires rsvg-convert (brew install librsvg).
Run from the lbmlabs.org/ dir:  python3 scripts/make-og.py"""
import random, subprocess, os

W, H = 1200, 630
ACC, HOT, BG, INK, DIM = "#9ff5c9", "#e0ffee", "#0c120e", "#e8f3ec", "#8aa194"
TITLE = ["The network for", "the Earth."]
SUB = "A free, open, encrypted telemetry mesh anyone can build."

random.seed(11)
# two gateways, spread out and well inside the right portion of the frame
GWS = [(1010, 180), (880, 470)]
# scatter nodes across the right ~65%, biased right, min-spaced
NODES, MIN = [], 56
tries = 0
while len(NODES) < 40 and tries < 4000:
    tries += 1
    x = random.uniform(420, 1170)
    y = random.uniform(55, 575)
    if x < 660 and random.random() < 0.6:      # thin out the left (text lives there)
        continue
    if any((x - px) ** 2 + (y - py) ** 2 < MIN * MIN for px, py in NODES + GWS):
        continue
    NODES.append((x, y))

pts = GWS + NODES                              # 0,1 = gateways
# Prim MST grown from both gateways -> radial, non-crossing, organic
connected = {0, 1}
edges = []
while len(connected) < len(pts):
    best = bsrc = None; bd = 1e18
    for j in range(len(pts)):
        if j in connected:
            continue
        for i in connected:
            d = (pts[i][0] - pts[j][0]) ** 2 + (pts[i][1] - pts[j][1]) ** 2
            if d < bd:
                bd, best, bsrc = d, j, i
    edges.append((bsrc, best)); connected.add(best)

FAM = "Inter, Helvetica, Arial, sans-serif"
s = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
     f'<rect width="{W}" height="{H}" fill="{BG}"/>',
     f'<g stroke="{ACC}" stroke-width="1.2" opacity="0.34" stroke-linecap="round">']
for a, b in edges:
    s.append(f'<line x1="{pts[a][0]:.1f}" y1="{pts[a][1]:.1f}" x2="{pts[b][0]:.1f}" y2="{pts[b][1]:.1f}"/>')
s.append('</g>')
# nodes (a few brighter, like nodes mid-relay)
for i in range(2, len(pts)):
    x, y = pts[i]
    lit = random.random() < 0.22
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{3.4 if lit else 2.6:.1f}" fill="{ACC}" opacity="{0.95 if lit else 0.55}"/>')
# gateways: halo + ring + hot core
for i in (0, 1):
    x, y = pts[i]
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="24" fill="{ACC}" opacity="0.10"/>')
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="10.5" fill="none" stroke="{ACC}" stroke-width="1.6" opacity="0.85"/>')
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4.6" fill="{HOT}"/>')
# left scrim so the text stays legible over the mesh
s.append(f'<defs><linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">'
         f'<stop offset="0" stop-color="{BG}" stop-opacity="0.94"/>'
         f'<stop offset="0.7" stop-color="{BG}" stop-opacity="0.78"/>'
         f'<stop offset="1" stop-color="{BG}" stop-opacity="0"/></linearGradient></defs>')
s.append(f'<rect width="720" height="{H}" fill="url(#scrim)"/>')
s.append(f'<text x="84" y="232" font-family="{FAM}" font-size="24" font-weight="600" letter-spacing="3" fill="{ACC}">LBM LABS</text>')
for k, line in enumerate(TITLE):
    s.append(f'<text x="80" y="{330 + k*94}" font-family="{FAM}" font-size="86" font-weight="700" letter-spacing="-1.5" fill="{INK}">{line}</text>')
s.append(f'<text x="84" y="486" font-family="{FAM}" font-size="29" font-weight="400" fill="{DIM}">{SUB}</text>')
s.append('</svg>')

here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
open("/tmp/og.svg", "w").write("\n".join(s))
subprocess.run(["rsvg-convert", "-w", str(W), "-h", str(H), "/tmp/og.svg",
                "-o", os.path.join(here, "public", "og.png")], check=True)
print("wrote public/og.png")
