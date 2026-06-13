#!/usr/bin/env python3
"""Generate the social-share card -> public/og.png (1200x630).
Mirrors the hero: dark field, a living mesh with gateway hubs, the headline.
Requires rsvg-convert (brew install librsvg) + Pillow.
Run from the lbmlabs.org/ dir:  python3 scripts/make-og.py
Regenerate whenever the headline/tagline changes."""
import random, subprocess, os

W, H = 1200, 630
ACC, HOT, BG, INK, DIM = "#9ff5c9", "#e0ffee", "#0c120e", "#e8f3ec", "#8aa194"
TITLE = ["The network for", "the Earth."]
SUB = "A free, open, encrypted telemetry mesh anyone can build."

random.seed(7)
N = 46
pts = []
for _ in range(N):
    x = (random.uniform(120, W - 40) / W) ** 0.8 * W   # bias toward the right
    y = random.uniform(40, H - 40)
    pts.append((x, y))
links = set()
for i, (x, y) in enumerate(pts):
    d = sorted(range(N), key=lambda j: (pts[j][0] - x) ** 2 + (pts[j][1] - y) ** 2)
    for j in d[1:4]:
        if random.random() < 0.7:
            links.add(tuple(sorted((i, j))))
gws = sorted(range(N), key=lambda i: -pts[i][0])[:2]

FAM = "Inter, Helvetica, Arial, sans-serif"
s = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
     f'<rect width="{W}" height="{H}" fill="{BG}"/>',
     f'<g stroke="{ACC}" stroke-width="1.1" opacity="0.30">']
for a, b in links:
    s.append(f'<line x1="{pts[a][0]:.1f}" y1="{pts[a][1]:.1f}" x2="{pts[b][0]:.1f}" y2="{pts[b][1]:.1f}"/>')
s.append('</g>')
s.append(f'<g fill="{ACC}" opacity="0.55">')
for i, (x, y) in enumerate(pts):
    if i not in gws:
        s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="3"/>')
s.append('</g>')
for i in gws:
    x, y = pts[i]
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="22" fill="{ACC}" opacity="0.10"/>')
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="10" fill="none" stroke="{ACC}" stroke-width="1.6" opacity="0.8"/>')
    s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4.5" fill="{HOT}"/>')
s.append(f'<defs><linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">'
         f'<stop offset="0" stop-color="{BG}" stop-opacity="0.92"/>'
         f'<stop offset="1" stop-color="{BG}" stop-opacity="0"/></linearGradient></defs>')
s.append(f'<rect width="760" height="{H}" fill="url(#scrim)"/>')
s.append(f'<text x="84" y="232" font-family="{FAM}" font-size="24" font-weight="600" letter-spacing="3" fill="{ACC}">LBM LABS</text>')
for k, line in enumerate(TITLE):
    s.append(f'<text x="80" y="{330 + k*94}" font-family="{FAM}" font-size="86" font-weight="700" letter-spacing="-1.5" fill="{INK}">{line}</text>')
s.append(f'<text x="84" y="486" font-family="{FAM}" font-size="29" font-weight="400" fill="{DIM}">{SUB}</text>')
s.append('</svg>')

here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
svg_path = "/tmp/og.svg"
out = os.path.join(here, "public", "og.png")
open(svg_path, "w").write("\n".join(s))
subprocess.run(["rsvg-convert", "-w", str(W), "-h", str(H), svg_path, "-o", out], check=True)
print("wrote", out)
