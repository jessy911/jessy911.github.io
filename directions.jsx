// directions.jsx — four alternative design directions for the portfolio

const W = 1120;
const H = 760;

// ── Direction A: Editorial (current) ───────────────────────────────
function DirEditorial() {
  return (
    <div className="frame" style={{ background: 'oklch(0.972 0.008 80)', color: 'oklch(0.20 0.012 60)', fontFamily: '"Geist", system-ui, sans-serif', height: H, width: W, position: 'relative' }}>
      {/* topbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 40px', borderBottom: '1px solid oklch(0.86 0.012 70)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: '"Geist Mono", monospace', color: 'oklch(0.48 0.012 60)' }}>
        <span>Jessica Rieger / V.C. ’26</span>
        <span style={{ display: 'flex', gap: 16 }}>
          <span>Work</span><span>About</span><span>CV</span><span>Contact</span>
        </span>
        <span><span style={{ display: 'inline-block', width: 6, height: 6, background: 'oklch(0.58 0.135 35)', borderRadius: 6, marginRight: 8, verticalAlign: 'middle' }} />open · 2026</span>
      </div>
      {/* hero */}
      <div style={{ padding: '60px 40px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: 'oklch(0.48 0.012 60)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>[01] · introduction</div>
          <h1 style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontSize: 72, lineHeight: 1.02, margin: '14px 0 0' }}>
            Learning my way into<br />Visual Computing, <em style={{ fontStyle: 'italic' }}>one project</em><br />at a time.
          </h1>
          <p style={{ marginTop: 22, maxWidth: 500, fontSize: 14, lineHeight: 1.6, color: 'oklch(0.48 0.012 60)' }}>
            I'm Jessica — a Visual Computing master's student at TU Wien, currently on Erasmus in Leuven. I came from a computer engineering background and worked a few years at Porsche and Bosch.
          </p>
        </div>
        <div style={{ width: 260, border: '1px solid oklch(0.86 0.012 70)', borderRadius: 6, padding: 18, background: 'oklch(0.955 0.010 80)', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.48 0.012 60)' }}>— NOW</div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22 }}>Leuven, Belgium</div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: 'oklch(0.48 0.012 60)' }}>ERASMUS · KU LEUVEN</div>
          <div style={{ borderTop: '1px solid oklch(0.86 0.012 70)', paddingTop: 10, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {['Unreal Engine', 'CV', 'Blender'].map(s => <span key={s} style={{ fontSize: 10, padding: '2px 7px', border: '1px solid oklch(0.86 0.012 70)', borderRadius: 99, fontFamily: '"Geist Mono", monospace' }}>{s}</span>)}
          </div>
        </div>
      </div>
      {/* project row */}
      <div style={{ padding: '0 40px', borderTop: '1px solid oklch(0.86 0.012 70)', marginTop: 12 }}>
        <div style={{ padding: '18px 0', display: 'grid', gridTemplateColumns: '60px 1fr 30px', gap: 16, alignItems: 'center', borderBottom: '1px solid oklch(0.86 0.012 70)' }}>
          <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 12, color: 'oklch(0.48 0.012 60)' }}>2025</span>
          <div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 26 }}>Capture the Flag — VR Multiplayer</div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: 'oklch(0.48 0.012 60)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>TU WIEN · VIRTUAL AND AUGMENTED REALITY COURSE</div>
          </div>
          <span style={{ width: 26, height: 26, border: '1px solid oklch(0.86 0.012 70)', borderRadius: 99, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>+</span>
        </div>
      </div>
    </div>
  );
}

// ── Direction B: Atelier (dark, image-led, big sans) ──────────────
function DirAtelier() {
  const accent = '#FF6B3D';
  return (
    <div className="frame" style={{ background: '#0d0c0a', color: '#f4efe6', fontFamily: '"Geist", system-ui, sans-serif', height: H, width: W, position: 'relative' }}>
      {/* topbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', fontSize: 12 }}>
        <span style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Jessica Rieger<span style={{ color: accent }}>.</span></span>
        <span style={{ display: 'flex', gap: 22, fontSize: 12, color: '#a89e8f' }}>
          <span>Work</span><span>About</span><span>CV</span><span style={{ color: '#f4efe6' }}>Contact</span>
        </span>
      </div>
      {/* hero — full bleed image + overlay headline */}
      <div style={{ padding: '20px 40px 0' }}>
        <div style={{ position: 'relative', width: '100%', height: 440, borderRadius: 8, overflow: 'hidden', background: 'radial-gradient(at 70% 30%, #4a2e1f 0%, #1a1410 60%, #0d0c0a 100%)' }}>
          {/* image placeholder pattern */}
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)' }} />
          {/* overlaid info */}
          <div style={{ position: 'absolute', top: 24, left: 28, fontSize: 10.5, fontFamily: '"Geist Mono", monospace', color: '#a89e8f', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            ◐ 01 · spatial · 2026
          </div>
          <div style={{ position: 'absolute', top: 24, right: 28, fontSize: 10.5, fontFamily: '"Geist Mono", monospace', color: '#a89e8f', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            Leuven 50.88°N · 4.70°E
          </div>
          <h1 style={{ position: 'absolute', left: 28, bottom: 24, right: 28, margin: 0, fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
            Learning<br />my way into<br /><span style={{ color: accent }}>visual computing.</span>
          </h1>
        </div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, fontSize: 13, color: '#a89e8f', lineHeight: 1.55 }}>
          <div><strong style={{ color: '#f4efe6', fontWeight: 500 }}>Visual Computing</strong> M.Sc. at TU Wien, Erasmus in Leuven.</div>
          <div><strong style={{ color: '#f4efe6', fontWeight: 500 }}>Generalist</strong> — Unreal, Blender, AI tooling. Hands-on.</div>
          <div><strong style={{ color: '#f4efe6', fontWeight: 500 }}>Looking</strong> for working-student or internship in VR/AR.</div>
        </div>
      </div>
    </div>
  );
}

// ── Direction C: Terminal / Index (mono, listy) ───────────────────
function DirTerminal() {
  return (
    <div className="frame" style={{ background: '#fafaf7', color: '#1a1a1a', fontFamily: '"JetBrains Mono", "Geist Mono", monospace', height: H, width: W, position: 'relative', fontSize: 13, lineHeight: 1.65 }}>
      {/* topbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 40px', borderBottom: '1px dashed #c8c5b8', fontSize: 11, color: '#7a7669' }}>
        <span>~/jessica-rieger</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <span>[ work ]</span><span>about</span><span>cv</span><span>contact</span>
        </span>
        <span>· EN | DE ·</span>
      </div>
      <div style={{ padding: '36px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ color: '#7a7669', fontSize: 11 }}>// hello.txt</div>
          <div style={{ marginTop: 8, fontSize: 32, lineHeight: 1.25, color: '#1a1a1a' }}>
            <span style={{ color: '#7a7669' }}>$ whoami</span><br />
            jessica rieger,<br />
            visual computing student,<br />
            learning my way into <span style={{ background: '#1a1a1a', color: '#fafaf7', padding: '0 6px' }}>visual computing</span>.
          </div>
          <pre style={{ marginTop: 24, fontSize: 12, color: '#3a3a3a', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
{`> location ........ Leuven, BE (Erasmus)
> based ........... Vienna, AT
> studies ......... TU Wien · Visual Computing
> learning ........ unreal, computer vision, blender
> looking ......... internship / working-student
> roles ........... vr/ar · visual computing`}
          </pre>
        </div>
        <div>
          <div style={{ color: '#7a7669', fontSize: 11 }}>// projects/</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              ['2026', 'ai-training-platform', 'avatar simulations · freelance'],
              ['2025', 'vr-capture-the-flag', 'unreal multiplayer · TU Wien'],
              ['2022', 'emotion-recognition', 'b.sc. thesis · porsche'],
            ].map(([y, slug, desc]) => (
              <li key={slug} style={{ padding: '12px 0', borderBottom: '1px dashed #c8c5b8' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <span style={{ color: '#7a7669' }}>{y}</span>
                  <span>→ {slug}</span>
                </div>
                <div style={{ color: '#7a7669', fontSize: 11, marginLeft: 56 }}>{desc}</div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 22, fontSize: 11, color: '#7a7669' }}>
            <span style={{ display: 'inline-block', width: 7, height: 14, background: '#1a1a1a', verticalAlign: 'middle', animation: 'blink 1s infinite' }} /> open to roles · 2026
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Direction D: Notebook (warm, soft, friendly) ─────────────────
function DirNotebook() {
  const ink = '#2a2418';
  const paper = '#f5ebd6';
  const accent = '#c44e2a';
  return (
    <div className="frame" style={{ background: paper, color: ink, fontFamily: '"Fraunces", Georgia, serif', height: H, width: W, position: 'relative' }}>
      {/* paper texture */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(at 20% 20%, rgba(196,78,42,0.06), transparent 50%), radial-gradient(at 80% 80%, rgba(42,36,24,0.04), transparent 50%)', pointerEvents: 'none' }} />
      {/* topbar */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 44px', borderBottom: '1px solid rgba(42,36,24,0.15)' }}>
        <span style={{ fontFamily: '"Caveat", cursive', fontSize: 26, fontWeight: 600, color: accent }}>Jessica</span>
        <span style={{ display: 'flex', gap: 18, fontSize: 14, fontFamily: '"Fraunces", serif', fontWeight: 500 }}>
          <span>Work</span><span>About</span><span>CV</span><span>Say hi</span>
        </span>
      </div>
      <div style={{ position: 'relative', padding: '50px 44px 30px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 44 }}>
        <div>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 24, color: accent, marginBottom: 4, transform: 'rotate(-1.5deg)', display: 'inline-block' }}>hi, I'm —</div>
          <h1 style={{ margin: 0, fontFamily: '"Fraunces", serif', fontWeight: 500, fontSize: 86, lineHeight: 1.0, letterSpacing: '-0.02em', color: ink }}>
            Jessica<span style={{ color: accent }}>.</span>
          </h1>
          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 22, lineHeight: 1.4, marginTop: 18, maxWidth: 540, color: ink }}>
            I'm finding my way into <em style={{ fontWeight: 500, color: accent }}>Visual Computing</em>, one project at a time — at TU Wien, on Erasmus in Leuven, and freelancing on the side.
          </p>
          <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 13.5, lineHeight: 1.65, marginTop: 14, maxWidth: 520, color: 'rgba(42,36,24,0.7)' }}>
            A computer engineer pivoting toward visual computing. Generalist, hands-on, eager to learn. Looking for an internship or working-student role where I can spend real hours on real problems.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ transform: 'rotate(1.2deg)', background: 'white', border: '1px solid rgba(42,36,24,0.15)', borderRadius: 4, padding: '14px 16px', boxShadow: '0 6px 18px rgba(42,36,24,0.08)' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: accent }}>currently —</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, marginTop: 2 }}>Leuven, BE</div>
            <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 12, color: 'rgba(42,36,24,0.6)' }}>Erasmus · KU Leuven · AI + medical</div>
          </div>
          <div style={{ transform: 'rotate(-1deg)', background: 'white', border: '1px solid rgba(42,36,24,0.15)', borderRadius: 4, padding: '14px 16px', boxShadow: '0 6px 18px rgba(42,36,24,0.08)' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: accent }}>building —</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16, marginTop: 2 }}>VR Capture the Flag</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16 }}>AI Avatar platform</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', padding: '0 44px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderTop: '1px solid rgba(42,36,24,0.15)' }}>
          <span style={{ fontFamily: '"Fraunces", serif', fontSize: 26 }}>Capture the Flag — VR Multiplayer</span>
          <span style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: accent }}>2025 →</span>
        </div>
      </div>
    </div>
  );
}

// ── App: design canvas with the four directions ─────────────────────
function DirectionsApp() {
  return (
    <DesignCanvas
      title="Portfolio — design directions"
      subtitle="Four visual systems for the same content. Pick one and I'll build it out."
      bg="#efeae3"
    >
      <DCSection id="hero" title="Directions" subtitle="Each board: top nav · hero · a project row (where it fits)">
        <DCArtboard id="editorial" label="A · Editorial  (current)" width={W} height={H}>
          <DirEditorial />
        </DCArtboard>
        <DCArtboard id="atelier" label="B · Atelier  (dark, bold, image-led)" width={W} height={H}>
          <DirAtelier />
        </DCArtboard>
        <DCArtboard id="terminal" label="C · Index  (mono, listy, terminal-ish)" width={W} height={H}>
          <DirTerminal />
        </DCArtboard>
        <DCArtboard id="notebook" label="D · Notebook  (warm, personal, handwritten)" width={W} height={H}>
          <DirNotebook />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

// global blink keyframe for terminal cursor
const _s = document.createElement('style');
_s.textContent = `@keyframes blink { 50% { opacity: 0; } }`;
document.head.appendChild(_s);

Object.assign(window, { DirectionsApp });
