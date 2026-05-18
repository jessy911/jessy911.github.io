// portfolio.jsx — Jessica Rieger personal site (bilingual: EN / DE)

const PALETTES = {
  paper: {
    bg: 'oklch(0.972 0.008 80)',
    surface: 'oklch(0.955 0.010 80)',
    fg: 'oklch(0.20 0.012 60)',
    muted: 'oklch(0.48 0.012 60)',
    line: 'oklch(0.86 0.012 70)',
    accent: 'oklch(0.58 0.135 35)',
    accentSoft: 'oklch(0.92 0.04 40)'
  },
  ink: {
    bg: 'oklch(0.158 0.010 260)',
    surface: 'oklch(0.198 0.012 260)',
    fg: 'oklch(0.94 0.006 80)',
    muted: 'oklch(0.66 0.012 250)',
    line: 'oklch(0.30 0.014 260)',
    accent: 'oklch(0.78 0.13 75)',
    accentSoft: 'oklch(0.28 0.04 260)'
  },
  sage: {
    bg: 'oklch(0.965 0.012 145)',
    surface: 'oklch(0.945 0.014 145)',
    fg: 'oklch(0.22 0.014 160)',
    muted: 'oklch(0.48 0.014 160)',
    line: 'oklch(0.84 0.018 145)',
    accent: 'oklch(0.50 0.10 170)',
    accentSoft: 'oklch(0.90 0.04 160)'
  },
  cobalt: {
    bg: 'oklch(0.965 0.008 250)',
    surface: 'oklch(0.945 0.010 250)',
    fg: 'oklch(0.20 0.014 260)',
    muted: 'oklch(0.48 0.014 260)',
    line: 'oklch(0.86 0.014 250)',
    accent: 'oklch(0.52 0.16 255)',
    accentSoft: 'oklch(0.90 0.05 250)'
  }
};

// ───────────────────── copy: EN / DE ─────────────────────

const COPY = {
  en: {
    locale: 'en',
    nav: { work: 'Work', about: 'About', cv: 'CV', contact: 'Contact' },
    status: '2026',
    role: 'Visual Computing student · learning my way into Visual Computing',
    introKicker: '[01] · introduction',
    heroH1pre: 'Learning my way into',
    heroH1mid: 'Visual Computing,',
    heroH1post: 'one project',
    heroH1end: 'at a time.',
    blurb:
    "I'm a Visual Computing master's student at TU Wien, currently on Erasmus in Leuven. I came from a computer engineering background and worked a few years at Porsche and Bosch. Now I'm steering toward visual computing and AR/VR.",
    blurb2:
    "I work self-responsible, I like figuring out how to make a process a little better, and I learn best on real projects where I can see my impact. A generalist, hands-on, still learning a lot — and very happy about that.",
    pills: ['VR / AR', 'Unreal Engine', 'Computer Vision', 'AI', 'Generalist'],

    workKicker: 'selected projects · 2022 – 2026',
    workTitlePre: 'A few things I',
    workTitleItalic: "'ve built",
    workTitlePost: ' so far.',
    featuredLabel: 'Featured',
    moreLabel: 'More projects',
    aboutPull: "The visual side kept pulling at me.",

    aboutKicker: 'about',
    aboutTitlePre: 'Quietly switching',
    aboutTitleItalic: 'tracks',
    aboutTitlePost: '.',
    aboutP1pre:
    "I started in computer engineering at Porsche, working close to vehicle data, classifiers and process pipelines. I learned a lot there — especially how to show impact in a project and team and how to ",
    aboutP1italic: 'optimise the unglamorous parts',
    aboutP1post: " of a project. But the side of the work that kept pulling at me was the visual one.",
    aboutP2:
    "That's why I picked Visual Computing for my master's: it's a field where I can interact with what I'm building and see the result immediately. I'm still learning Unreal, Blender and the maths behind real-time graphics — I'm not claiming expertise, but I pick things up by trying.",
    aboutP3:
    "Off-keyboard: hiking, strength training, cooking and baking, knitting. Pattern-following hobbies, all of them. I notice the overlap.",
    currentlyKicker: 'Currently',
    currentlyDate: '05 / 2026',
    currentlyBody:
    'Erasmus at KU Leuven (AI · medical applications) and building an AI-avatar training platform as a freelancer.',
    softKicker: 'Soft skills',
    hobbiesKicker: 'Off-keyboard',

    cvKicker: 'experience · education · skills',
    cvTitlePre: 'The ',
    cvTitleItalic: 'long form',
    cvTitlePost: '.',
    cvRange: 'since 2019',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    volunteer: 'Volunteer',

    contactKicker: 'contact',
    contactTitlePre: 'Get in ',
    contactTitleItalic: 'touch',
    contactTitlePost: '.',
    contactBlurb:
    "",
    contactBlurbItalic: "",
    writeMe: 'Find me on LinkedIn',
    seeCode: 'See code on GitHub',
    based: 'Based',
    now: 'Now',
    footer: 'Designed & built in Vienna · Updated 05/2026',
    footerV: 'v 1.0 · single page · always learning',
    copyright: '©  2026',

    projects: [
    {
      id: 'ctf-vr',
      year: '2025',
      title: 'Capture the Flag — VR Multiplayer',
      venue: 'TU Wien · Virtual and Augmented Reality course',
      stack: ['Unreal Engine', 'Blueprints', 'Networking', 'Spatial Audio'],
      summary:
      "My first proper VR project. Two teams, one flags, a small arena — built in Unreal Engine for the VR course at TU Wien. A lot of it was learning as I went: how multiplayer state actually behaves, how to make hand-locomotion feel okay, how to mix spatial audio.",
      bullets: [
      'Multiplayer for up to 4 simultaneous players',
      'Inventory system bound to wrist',
      'Wrist-mounted minimap with player positions',
      'Spatial audio mix tuned around pickups',
      'Hand-based locomotion + smooth-turn fallback']

    },
    {
      id: 'ai-training',
      media: false,
      year: '2026',
      title: 'AI Training Platform — Avatar Simulations',
      venue: 'Freelance · client work',
      stack: ['GPT-5.4', 'Cloudflare Workers', 'REST APIs', 'JavaScript'],
      summary:
      "An ongoing freelance project: a web app where an AI avatar supported training was implemented in an existing company learning platform. I scoped it with the client, sketched the interaction, wired the model layer behind Cloudflare Workers and shipped the UI. A good crash course in moving from a vague brief to something running in production.",
      bullets: [
      'Avatar conversational interface with branching scripts',
      'Worker-side prompt orchestration and rate limiting',
      'External AI service integration via REST',
      'Direct client communication → spec → ship']

    },
    {
      id: 'emotion-thesis',
      media: false,
      year: '2022',
      title: 'Emotion recognition from driving context',
      venue: 'B.Sc. Thesis · DHBW × Porsche AG',
      stack: ['Python', 'Classification', 'Vehicle data'],
      summary:
      "My bachelor thesis, written while I was working at Porsche. The idea: infer a driver's emotional state by classifying the surrounding traffic and environment from in-vehicle sensor data. Mostly a conceptual framework — the kind of project that taught me how to scope a research question end to end.",
      bullets: [
      'Survey of affective computing in automotive context',
      'Feature design from traffic and environment signals',
      'Classification pipeline + evaluation protocol']

    },
    {
      id: 'blender-2021',
      media: { type: 'sketchfab', id: '48824d98f45d4d8787f881f25eea381b' },
      year: '2021',
      title: 'First steps in Blender',
      venue: 'Personal · learning by doing',
      stack: ['Blender', 'Modelling', 'Texturing'],
      summary:
      "Where my interest in 3D started. Small modelling exercises — props, sketches — done while I was still studying computer engineering, just to find out whether I'd actually enjoy making things in 3D. Spoiler: I did, and it's part of why I'm now in Visual Computing.",
      bullets: [
      'Beginner-level modelling exercises',
      'Materials, lighting, basic UV unwrapping',
      'A handful published on Sketchfab as Jessy0.12']

    }],


    experienceItems: [
    {
      range: '02/2026 — now',
      role: 'Software Developer',
      org: 'Freelance',
      note: 'Building an AI-driven web training platform with avatar interfaces. Client scoping → spec → ship. Stack: GPT-5.4, Cloudflare Workers, REST APIs, JavaScript.'
    },
    {
      range: '01/2025 — 01/2026',
      role: 'Working student — Customer Sample Coordination',
      org: 'Robert Bosch AG',
      note: 'Coordinated sample orders from automotive partners end-to-end — pricing, logistics, delivery — with optimised Excel workflows and Power BI dashboards.'
    },
    {
      range: '10/2022 — 12/2024',
      role: 'Lecturer — Databases module',
      org: 'DHBW Stuttgart',
      note: 'Prepared and delivered lectures, exercises and assessments for the Databases course alongside my engineering job. A good way to find out where I actually understood things and where I only thought I did.'
    },
    {
      range: '10/2022 — 10/2024',
      role: 'Junior Software Engineer',
      org: 'Dr. Ing. h.c. Porsche AG',
      note: 'Software architecture modelling and project management in agile teams. Owned a lot of the bridge between technical detail and stakeholder-facing presentations.'
    },
    {
      range: '01/2022 — 09/2022',
      role: 'Working student — Data Analytics',
      org: 'Dr. Ing. h.c. Porsche AG',
      note: 'Data analysis with SQL, PySpark and Matplotlib on vehicle and process datasets.'
    }],


    educationItems: [
    {
      range: '10/2024 — now',
      degree: 'Dipl.-Ing. Visual Computing',
      school: 'TU Wien',
      focus: 'Focus on VR / AR, Computer Vision and AI.'
    },
    {
      range: '02/2026 — 06/2026',
      degree: 'Erasmus semester — Visual Computing',
      school: 'KU Leuven',
      focus: 'Focus on AI and medical applications.'
    },
    {
      range: '09/2019 — 09/2022',
      degree: 'B.Sc. Computer Engineering',
      school: 'DHBW × Porsche AG (dual study programme)',
      focus: 'Thesis on emotion recognition from driving context.'
    }],


    volunteerItem: {
      range: '03/2025 — 07/2025',
      org: 'TU.impact',
      note: 'Organised workshops introducing schoolgirls to engineering and computer science at TU Wien.'
    },

    skillGroups: {
      Engines: ['Unreal Engine', 'Unity', 'Blender'],
      Code: ['Python', 'SQL', 'Web app development'],
      Tools: ['MS Office', 'Data analysis', 'Power BI', 'Cloudflare Workers'],
      Methods: ['Agile', 'Software architecture', 'Stakeholder presenting']
    },

    languagesList: [
    { name: 'German', level: 'Native', dots: 5 },
    { name: 'English', level: 'Fluent', dots: 4 },
    { name: 'French', level: 'Basics', dots: 2 },
    { name: 'Russian', level: 'Basics', dots: 2 }],


    soft: ['Hardworking', 'Eager to learn', 'Hands-on', 'Curious', 'Teamwork', 'Communication'],
    hobbies: ['Hiking', 'Strength training', 'Cooking & baking', 'Knitting']
  },

  de: {
    locale: 'de',
    nav: { work: 'Projekte', about: 'Über mich', cv: 'Lebenslauf', contact: 'Kontakt' },
    status: '2026',
    role: 'Visual-Computing-Studentin · auf dem Weg in VR / AR',
    introKicker: '[01] · einleitung',
    heroH1pre: 'Learning my way into',
    heroH1mid: 'VR / AR,',
    heroH1post: 'one project',
    heroH1end: 'at a time.',
    blurb:
    "Ich bin eine Master-Studentin im Studiengang Visual Computing an der TU Wien, gerade im Erasmus-Semester in Leuven. Ich komme aus der technischen Informatik und habe einige Jahre bei Porsche und Bosch gearbeitet. Jetzt orientiere ich mich Richtung Visual Computing und AR/VR.",
    blurb2:
    "Ich arbeite selbstständig, optimiere gerne Abläufe und lerne am besten an echten Projekten, bei denen ich sehe, was ich gerade baue. Generalistin, hands-on, lerne noch viel — und das macht mir Spaß.",
    pills: ['VR / AR', 'Unreal Engine', 'Computer Vision', 'KI', 'Generalistin'],

    workKicker: 'ausgewählte projekte · 2022 – 2026',
    workTitlePre: 'Ein paar Dinge,',
    workTitleItalic: ' die ich',
    workTitlePost: ' bisher gebaut habe.',
    featuredLabel: 'Featured',
    moreLabel: 'Weitere Projekte',
    aboutPull: "Die visuelle Seite hat mich immer mehr angezogen.",

    aboutKicker: 'über mich',
    aboutTitlePre: 'Einen',
    aboutTitleItalic: 'neuen Weg',
    aboutTitlePost: ' einschlagen.',
    aboutP1pre:
    "Ich habe in der technischen Informatik bei Porsche angefangen — Fahrzeugdaten, Klassifikatoren, Prozesspipelines. Dort habe ich viel gelernt, besonders, wie ich einem Team nützlich werde und wie man die ",
    aboutP1italic: 'unglamourösen Teile',
    aboutP1post: " eines Projekts optimiert. Aber die visuelle Seite hat mich immer mehr angezogen.",
    aboutP2:
    "Deshalb habe ich mich für Visual Computing als Master entschieden: hier kann ich direkt mit dem interagieren, was ich baue, und sofort sehen, was passiert. Unreal, Blender und die Algorithmen dahinter lerne ich noch genauer kennen — ich behaupte nicht, Expertin zu sein, aber ich lerne durch Ausprobieren.",
    aboutP3:
    "Abseits der Tastatur: Wandern, Krafttraining, Kochen und Backen, Stricken. Lauter Hobbies, in denen man Mustern folgt. Die Überschneidung fällt mir auf.",
    currentlyKicker: 'Aktuell',
    currentlyDate: '05 / 2026',
    currentlyBody:
    'Erasmus an der KU Leuven (KI · medizinische Anwendungen) und freiberuflicher Aufbau einer KI-Avatar-Schulungsplattform.',
    softKicker: 'Soft Skills',
    hobbiesKicker: 'Hobbies',

    cvKicker: 'erfahrung · ausbildung · skills',
    cvTitlePre: 'Die ',
    cvTitleItalic: 'Langfassung',
    cvTitlePost: '.',
    cvRange: 'seit 2019',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    skills: 'Skills',
    languages: 'Sprachen',
    volunteer: 'Ehrenamt',

    contactKicker: 'kontakt',
    contactTitlePre: 'Kontakt',
    contactTitleItalic: ' aufnehmen',
    contactTitlePost: '.',
    contactBlurb:
    " ",
    contactBlurbItalic: "",
    writeMe: 'Auf LinkedIn vernetzen',
    seeCode: 'Code auf GitHub',
    based: 'Wohnort',
    now: 'Aktuell',
    footer: 'Designed & gebaut in Wien · Stand 05/2026',
    footerV: 'v 1.0 · single page · always learning',
    copyright: '©  2026',

    projects: [
    {
      id: 'ctf-vr',
      year: '2025',
      title: 'Capture the Flag — VR-Multiplayer',
      venue: 'TU Wien · Kurs Virtual and Augmented Reality',
      stack: ['Unreal Engine', 'Blueprints', 'Networking', 'Spatial Audio'],
      summary:
      "Mein erstes richtiges VR-Projekt. Zwei Teams, eine Flaggen, eine kleine Arena — gebaut in Unreal im VR-Kurs an der TU Wien. Vieles habe ich unterwegs gelernt: wie sich Multiplayer-State tatsächlich verhält, wie man Hand-Locomotion erträglich macht, wie man Spatial Audio so mischt, dass Sound einen leitet.",
      bullets: [
      'Multiplayer für bis zu 4 Spieler',
      'Inventory-System am Handgelenk',
      'Minimap am Handgelenk mit Spielerpositionen',
      'Spatial-Audio-Mix abgestimmt auf Pickups',
      'Hand-Locomotion']

    },
    {
      id: 'ai-training',
      media: false,
      year: '2026',
      title: 'KI-Schulungsplattform — Avatar-Simulationen',
      venue: 'Freiberuflich · Kundenprojekt',
      stack: ['GPT-5.4', 'Cloudflare Workers', 'REST APIs', 'JavaScript'],
      summary:
      "Ein laufendes Freelance-Projekt: eine Web-App, in der ich für ein Unternehmen KI-gestütze Schulungen in ihre bestehende Plattform einbaue. Ich habe es mit dem Kunden gescopet, die Interaktion skizziert, das Model-Layer hinter Cloudflare Workers verdrahtet und das UI gebaut. Ein guter Crashkurs darin, von einer Idee zu etwas zu kommen, das in Produktion läuft.",
      bullets: [
      'Avatar-Konversations-Interface mit verzweigten Abläufen',
      'Prompt-Orchestrierung und Rate-Limiting in Workers',
      'Anbindung externer KI-Dienste via REST',
      'Direkte Kundenabstimmung → Spec → Release']

    },
    {
      id: 'emotion-thesis',
      media: false,
      year: '2022',
      title: 'Emotionserkennung aus dem Fahrkontext',
      venue: 'B.Sc.-Thesis · DHBW × Porsche AG',
      stack: ['Python', 'Klassifikation', 'Fahrzeugdaten'],
      summary:
      "Meine Bachelorarbeit, geschrieben parallel zu meinem Job bei Porsche. Idee: den emotionalen Zustand des Fahrers über die Klassifikation der Verkehrs- und Umgebungssituation aus Fahrzeugdaten ableiten. Vor allem ein konzeptioneller Rahmen — die Art Projekt, bei der ich gelernt habe, eine Forschungsfrage end-to-end zu strukturieren.",
      bullets: [
      'Überblick über Affective Computing im Automotive-Kontext',
      'Feature-Design aus Verkehrs- und Umgebungssignalen',
      'Klassifikations-Pipeline + Evaluationsschema']

    },
    {
      id: 'blender-2021',
      media: { type: 'sketchfab', id: '48824d98f45d4d8787f881f25eea381b' },
      year: '2021',
      title: 'Erste Schritte in Blender',
      venue: 'Persönlich · Learning by doing',
      stack: ['Blender', 'Modeling', 'Texturing'],
      summary:
      "Hier hat mein Interesse an 3D begonnen. Kleine Modeling-Übungen — Props, Skizzen — entstanden noch während meines Informatik-Studiums, einfach um herauszufinden, ob mir 3D-Arbeit Spaß macht. Spoiler: ja, und das ist mit ein Grund, warum ich jetzt Visual Computing studiere.",
      bullets: [
      'Anfänger-Modeling-Übungen',
      'Materialien, Beleuchtung, einfaches UV-Unwrapping',
      'Einige davon auf Sketchfab als Jessy0.12 veröffentlicht']

    }],


    experienceItems: [
    {
      range: '02/2026 — heute',
      role: 'Softwareentwicklerin',
      org: 'Freiberuflich',
      note: 'End-to-End-Aufbau einer KI-gestützten Web-Schulungsanwendung mit Avatar-Schnittstellen. Kundenscoping → Spec → Release. Stack: GPT-5.4, Cloudflare Workers, REST APIs, JavaScript.'
    },
    {
      range: '01/2025 — 01/2026',
      role: 'Werkstudentin — Musterkoordination',
      org: 'Robert Bosch AG',
      note: 'Koordination von Musterbestellungen aus der Automobilbranche von A bis Z — Preise, Logistik, Lieferung — mit optimierten Excel-Workflows und Power-BI-Dashboards.'
    },
    {
      range: '10/2022 — 12/2024',
      role: 'Lehrbeauftragte — Modul Datenbanken',
      org: 'DHBW Stuttgart',
      note: 'Vorlesungen, Übungen und Leistungsbewertungen für das Modul Datenbanken — parallel zum Engineering-Job. Ein guter Realitätscheck, wo ich Dinge wirklich verstanden hatte und wo nur fast.'
    },
    {
      range: '10/2022 — 10/2024',
      role: 'Junior Software Engineer',
      org: 'Dr. Ing. h.c. Porsche AG',
      note: 'Softwarearchitektur-Modellierung und Projektmanagement in agilen Teams. Häufig die Brücke zwischen technischer Tiefe und Präsentationen für den Fachbereich.'
    },
    {
      range: '01/2022 — 09/2022',
      role: 'Werkstudentin — Datenanalyse',
      org: 'Dr. Ing. h.c. Porsche AG',
      note: 'Datenanalyse mit SQL, PySpark und Matplotlib auf Fahrzeug- und Prozessdaten.'
    }],


    educationItems: [
    {
      range: '10/2024 — heute',
      degree: 'Dipl.-Ing. Visual Computing',
      school: 'TU Wien',
      focus: 'Fokus auf VR / AR, Computer Vision und KI.'
    },
    {
      range: '02/2026 — 06/2026',
      degree: 'Erasmus-Semester — Visual Computing',
      school: 'KU Leuven',
      focus: 'Fokus auf KI und medizinische Anwendungen.'
    },
    {
      range: '09/2019 — 09/2022',
      degree: 'B.Sc. Technische Informatik',
      school: 'DHBW × Porsche AG (duales Studium)',
      focus: 'Thesis über Emotionserkennung aus dem Fahrkontext.'
    }],


    volunteerItem: {
      range: '03/2025 — 07/2025',
      org: 'TU.impact',
      note: 'Organisation von Workshops, die Schülerinnen einen Einstieg in Technik und Informatik an der TU Wien geben.'
    },

    skillGroups: {
      Engines: ['Unreal Engine', 'Unity', 'Blender'],
      Code: ['Python', 'SQL', 'Webentwicklung'],
      Tools: ['MS Office', 'Datenanalyse', 'Power BI', 'Cloudflare Workers'],
      Methoden: ['Agile', 'Softwarearchitektur', 'Stakeholder-Präsentation']
    },

    languagesList: [
    { name: 'Deutsch', level: 'Muttersprache', dots: 5 },
    { name: 'Englisch', level: 'Fließend', dots: 4 },
    { name: 'Französisch', level: 'Grundkenntnisse', dots: 2 },
    { name: 'Russisch', level: 'Grundkenntnisse', dots: 2 }],


    soft: ['Fleißig', 'Lernbereit', 'Hands-on', 'Neugierig', 'Teamfähig', 'Kommunikativ'],
    hobbies: ['Wandern', 'Krafttraining', 'Kochen & Backen', 'Stricken']
  }
};

const PROFILE = {
  name: 'Jessica Rieger',
  email: 'jessica.hieb@web.de',
  phone: '+49 171 8613917',
  github: 'jessy911',
  sketchfab: 'Jessy0.12',
  linkedin: 'jessica-rieger-2b53b0206',
  basedCity: 'Vienna, Austria',
  basedCityDe: 'Wien, Österreich',
  nowCity: 'Leuven, Belgium',
  nowCityDe: 'Leuven, Belgien'
};

// ───────────────────── utilities ─────────────────────

const Mono = ({ children, style }) =>
<span
  style={{
    fontFamily: '"Geist Mono", ui-monospace, monospace',
    fontFeatureSettings: '"tnum"',
    letterSpacing: '0.01em',
    ...style
  }}>
  
    {children}
  </span>;


const Italic = ({ children }) =>
<em
  style={{
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontStyle: 'italic',
    fontWeight: 400
  }}>
  
    {children}
  </em>;


function ProjectMedia({ p }) {
  const [failed, setFailed] = React.useState(false);
  const isSketchfab = p.media && typeof p.media === 'object' && p.media.type === 'sketchfab';
  const sketchfabId = isSketchfab ? p.media.id : null;
  const hasValidSketchfab = sketchfabId && sketchfabId !== 'PASTE_MODEL_ID';

  if (isSketchfab && hasValidSketchfab) {
    const params = new URLSearchParams({
      autospin: '0.3',
      autostart: '1',
      preload: '1',
      transparent: '1',
      ui_theme: 'dark',
      ui_controls: '1',
      ui_infos: '0',
      ui_inspector: '0',
      ui_stop: '0',
      ui_watermark: '0',
      ui_watermark_link: '0',
      ui_hint: '0',
      ui_help: '0',
      ui_settings: '0',
      ui_annotations: '0',
      ui_fullscreen: '0',
      ui_vr: '0',
      ui_ar: '0',
      ui_loading: '0',
    });
    return (
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: 6, border: '1px solid var(--line)', overflow: 'hidden', background: 'var(--surface)' }}>
        <iframe
          title={p.title}
          src={`https://sketchfab.com/models/${sketchfabId}/embed?${params.toString()}`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        />
        <div style={{ position: 'absolute', left: 10, bottom: 10, fontFamily: '"Geist Mono", monospace', fontSize: 10, color: 'var(--muted)', background: 'var(--bg)', padding: '3px 7px', borderRadius: 3, border: '1px solid var(--line)' }}>
          drag to rotate · scroll to zoom
        </div>
      </div>
    );
  }

  if (isSketchfab) {
    // sketchfab requested but no id yet
    return (
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '4 / 3',
        border: '1px dashed var(--line)', borderRadius: 6,
        background: 'var(--surface)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 20, gap: 8, textAlign: 'center'
      }}>
        <span style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 10.5,
          color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em'
        }}>sketchfab model</span>
        <span style={{
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 20, color: 'var(--fg)', lineHeight: 1.2
        }}>paste a Sketchfab model id</span>
        <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: 'var(--muted)' }}>
          set media.id on project “{p.id}”
        </span>
      </div>
    );
  }

  const src = `media/${p.id}.mp4`;
  const poster = `media/${p.id}.jpg`;
  if (failed) {
    return (
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '4 / 3',
        border: '1px dashed var(--line)', borderRadius: 6,
        background: 'var(--surface)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 20, gap: 8, textAlign: 'center'
      }}>
        <span style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 10.5,
          color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em'
        }}>drop a video here</span>
        <span style={{
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 20, color: 'var(--fg)', lineHeight: 1.2
        }}>media/{p.id}.mp4</span>
        <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: 'var(--muted)' }}>
          (optional poster: media/{p.id}.jpg)
        </span>
      </div>
    );
  }
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setFailed(true)}
      style={{
        width: '100%', aspectRatio: '4 / 3', objectFit: 'cover',
        borderRadius: 6, border: '1px solid var(--line)',
        background: 'var(--surface)', display: 'block'
      }}
    />
  );
}

function PlaceholderBlock({ label, ratio = '16 / 9', tone = 'rgba(0,0,0,0.06)' }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${tone} 0 1px, transparent 1px 9px), var(--surface)`,
        border: '1px solid var(--line)',
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: 14
      }}>
      
      <Mono
        style={{
          fontSize: 11,
          color: 'var(--muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          background: 'var(--bg)',
          padding: '4px 8px',
          border: '1px solid var(--line)',
          borderRadius: 3
        }}>
        
        {label}
      </Mono>
    </div>);

}

// ───────────────────── ambient hero glyph ─────────────────────

function HeroCard({ c, lang }) {
  const nowLabel = lang === 'de' ? 'Aktuell' : 'Now';
  const placeLabel = lang === 'de' ? 'Standort' : 'Location';
  const learnLabel = lang === 'de' ? 'Lerne gerade' : 'Currently learning';
  const sideLabel = lang === 'de' ? 'Nebenbei' : 'On the side';
  const learnItems = ['Unreal Engine', 'Computer Vision', 'Blender'];
  const sideText = lang === 'de'
    ? 'KI-Avatar-Schulungsplattform (freiberuflich)'
    : 'AI-avatar training platform (freelance)';
  const place = lang === 'de' ? PROFILE.nowCityDe : PROFILE.nowCity;
  const erasmus = lang === 'de' ? 'Erasmus · KU Leuven' : 'Erasmus · KU Leuven';

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 360,
        border: '1px solid var(--line)',
        borderRadius: 8,
        background: 'var(--surface)',
        padding: '22px 24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* faint corner registration marks for a quiet "draft" vibe */}
      {[
        { top: 6, left: 6, br: '0 0 6px 0' },
        { top: 6, right: 6, bl: '0 0 0 6px' },
        { bottom: 6, left: 6, br: '6px 0 0 0' },
        { bottom: 6, right: 6, bl: '0 6px 0 0' }
      ].map((p, i) => (
        <span key={i} aria-hidden="true" style={{
          position: 'absolute', width: 8, height: 8,
          borderTop: (p.top !== undefined) ? '1px solid var(--line)' : 0,
          borderBottom: (p.bottom !== undefined) ? '1px solid var(--line)' : 0,
          borderLeft: (p.left !== undefined) ? '1px solid var(--line)' : 0,
          borderRight: (p.right !== undefined) ? '1px solid var(--line)' : 0,
          top: p.top, bottom: p.bottom, left: p.left, right: p.right
        }} />
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Mono style={{ fontSize: 10.5, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
          — {nowLabel}
        </Mono>
        <Mono style={{ fontSize: 10.5, color: 'var(--accent)' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 6, background: 'var(--accent)', marginRight: 6, verticalAlign: 'middle' }} />
          05 / 2026
        </Mono>
      </div>

      <div>
        <Mono style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{placeLabel}</Mono>
        <div style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 26,
          lineHeight: 1.15,
          marginTop: 4,
          color: 'var(--fg)'
        }}>
          {place}
        </div>
        <Mono style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2, display: 'inline-block' }}>
          {erasmus}
        </Mono>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14 }}>
        <Mono style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{learnLabel}</Mono>
        <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {learnItems.map((s) => (
            <Mono key={s} style={{
              fontSize: 10.5, color: 'var(--fg)',
              padding: '3px 8px', border: '1px solid var(--line)', borderRadius: 999
            }}>{s}</Mono>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14 }}>
        <Mono style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{sideLabel}</Mono>
        <div style={{ marginTop: 6, fontSize: 13.5, color: 'var(--fg)', lineHeight: 1.5 }}>
          {sideText}
        </div>
      </div>

      <a
        href={`https://github.com/${PROFILE.github}`}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 14px',
          border: '1px solid var(--line)',
          borderRadius: 6,
          textDecoration: 'none',
          color: 'var(--fg)',
          background: 'var(--bg)'
        }}>
        <Mono style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>GitHub</Mono>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          {PROFILE.github} <span aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  );
}

function SoftOrb() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: 320,
        height: 320,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 70%, transparent), transparent 70%)',
        filter: 'blur(28px)',
        animation: 'orbPulse 9s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', inset: '14%', borderRadius: '50%',
        background: 'radial-gradient(closest-side, color-mix(in oklab, var(--fg) 18%, transparent), transparent 70%)',
        filter: 'blur(20px)',
        animation: 'orbPulse 11s ease-in-out infinite reverse'
      }} />
      {/* hairline circle for editorial structure */}
      <div style={{
        position: 'absolute', inset: '6%', borderRadius: '50%',
        border: '1px solid var(--line)'
      }} />
      <div style={{
        position: 'absolute', inset: '26%', borderRadius: '50%',
        border: '1px solid var(--line)', opacity: 0.6
      }} />
      <style>{`@keyframes orbPulse { 0%,100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 1; } }`}</style>
    </div>
  );
}

function AmbientCube({ accent }) {
  const [tilt, setTilt] = React.useState({ x: -22, y: 28 });
  React.useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth,h = window.innerHeight;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      setTilt({ x: -22 + ny * -12, y: 28 + nx * 18 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const size = 260;
  const half = size / 2;
  const faceStyle = {
    position: 'absolute',
    width: size,
    height: size,
    border: `1px solid ${accent}`,
    background: 'transparent'
  };
  return (
    <div style={{ perspective: 1400, width: size, height: size, position: 'relative' }} aria-hidden="true">
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.2, 0.6, 0.2, 1)'
        }}>
        
        <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `translateZ(-${half}px) rotateY(180deg)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
        <div
          style={{
            position: 'absolute',
            inset: '30%',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${-tilt.x * 1.6}deg) rotateY(${-tilt.y * 1.6}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1)'
          }}>
          
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const s = size * 0.4;
            const h2 = s / 2;
            const tr = [
            `translateZ(${h2}px)`,
            `translateZ(-${h2}px) rotateY(180deg)`,
            `rotateY(90deg) translateZ(${h2}px)`,
            `rotateY(-90deg) translateZ(${h2}px)`,
            `rotateX(90deg) translateZ(${h2}px)`,
            `rotateX(-90deg) translateZ(${h2}px)`][
            i];
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: s,
                  height: s,
                  border: '1px solid var(--fg)',
                  transform: tr,
                  opacity: 0.55
                }} />);


          })}
        </div>
      </div>
    </div>);

}

// ───────────────────── sections ─────────────────────

function TopBar({ active, onJump, c, lang, setLang }) {
  const items = [
  ['work', c.nav.work],
  ['about', c.nav.about],
  ['cv', c.nav.cv],
  ['contact', c.nav.contact]];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        background: 'color-mix(in oklab, var(--bg) 78%, transparent)',
        borderBottom: '1px solid var(--line)'
      }}>
      
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '14px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 16
        }}>
        
        <Mono
          style={{
            fontSize: 11,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}>
          
          Jessica Rieger / V.C. ’26
        </Mono>
        <nav style={{ display: 'flex', gap: 4 }}>
          {items.map(([id, label]) =>
          <button
            key={id}
            onClick={() => onJump(id)}
            style={{
              appearance: 'none',
              background: 'transparent',
              border: 0,
              padding: '6px 12px',
              fontSize: 13,
              color: active === id ? 'var(--fg)' : 'var(--muted)',
              fontWeight: active === id ? 500 : 400,
              cursor: 'pointer',
              position: 'relative',
              fontFamily: 'inherit'
            }}>
            
              {label}
              {active === id &&
            <span
              style={{
                position: 'absolute',
                left: 12,
                right: 12,
                bottom: 2,
                height: 1,
                background: 'var(--accent)'
              }} />

            }
            </button>
          )}
        </nav>
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              display: 'inline-flex',
              border: '1px solid var(--line)',
              borderRadius: 999,
              padding: 2,
              background: 'var(--bg)'
            }}>
            
            {['en', 'de'].map((l) =>
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                appearance: 'none',
                border: 0,
                cursor: 'pointer',
                padding: '4px 10px',
                fontFamily: '"Geist Mono", ui-monospace, monospace',
                fontSize: 10.5,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: 999,
                background: lang === l ? 'var(--fg)' : 'transparent',
                color: lang === l ? 'var(--bg)' : 'var(--muted)',
                transition: 'all 0.2s'
              }}>
              
                {l}
              </button>
            )}
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: 6, background: 'var(--accent)' }} />
            <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{c.status}</Mono>
          </div>
        </div>
      </div>
    </header>);

}

function Hero({ c, lang, heroSide }) {
  return (
    <section
      id="top"
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '96px 32px 80px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 64,
        alignItems: 'center',
        position: 'relative'
      }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Mono
          style={{
            fontSize: 11,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em'
          }}>
          
          {c.introKicker}
        </Mono>
        <h1
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(54px, 7vw, 104px)',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
            margin: '18px 0 0',
            color: 'var(--fg)'
          }}>
          
          {c.heroH1pre}
          <br />
          {c.heroH1mid} <Italic>{c.heroH1post}</Italic>
          <br />
          {c.heroH1end}
        </h1>
        <p
          style={{
            marginTop: 28,
            maxWidth: 560,
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--muted)'
          }}>
          
          {c.blurb}
        </p>
        <p
          style={{
            marginTop: 12,
            maxWidth: 560,
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--muted)'
          }}>
          
          {c.blurb2}
        </p>
        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {c.pills.map((label) =>
          <Pill key={label} label={label} />
          )}
        </div>
      </div>
      <div
        className="hero-side"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {heroSide === 'card' && <HeroCard c={c} lang={lang} />}
        {heroSide === 'orb' && <SoftOrb />}
      </div>
    </section>);

}

function Pill({ label }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 11px',
        border: '1px solid var(--line)',
        borderRadius: 999,
        fontSize: 12,
        color: 'var(--fg)',
        background: 'var(--bg)'
      }}>
      
      <span style={{ width: 4, height: 4, borderRadius: 4, background: 'var(--accent)' }} />
      {label}
    </span>);

}

function SectionHead({ index, title, kicker }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: 32,
        alignItems: 'baseline',
        marginBottom: 40,
        paddingTop: 24,
        borderTop: '1px solid var(--line)'
      }}>
      
      <Mono
        style={{
          fontSize: 11,
          color: 'var(--muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          paddingTop: 8
        }}>
        
        {index}
      </Mono>
      <div>
        <Mono
          style={{
            fontSize: 11,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em'
          }}>
          
          {kicker}
        </Mono>
        <h2
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(36px, 4.4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: '4px 0 0',
            color: 'var(--fg)'
          }}>
          
          {title}
        </h2>
      </div>
    </div>);

}

function FeaturedProject({ p, c }) {
  return (
    <article style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '32px 0 40px',
      position: 'relative'
    }}>
      {/* Featured ribbon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
        <span style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 10.5,
          color: 'var(--bg)', background: 'var(--accent)',
          padding: '4px 9px', borderRadius: 3,
          textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600
        }}>★ {c.featuredLabel}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{p.year}</Mono>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 36 }}>
        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <h3 style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(34px, 3.6vw, 48px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            margin: 0,
            color: 'var(--fg)'
          }}>
            {p.title}
          </h3>
          <Mono style={{
            fontSize: 11, color: 'var(--muted)',
            textTransform: 'uppercase', letterSpacing: '0.1em'
          }}>{p.venue}</Mono>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg)', margin: 0 }}>
            {p.summary}
          </p>

          <ul style={{
            margin: 0, padding: 0, listStyle: 'none',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 4
          }}>
            {p.bullets.map((b, i) => (
              <li key={i} style={{
                fontSize: 13, color: 'var(--muted)', lineHeight: 1.45,
                display: 'grid', gridTemplateColumns: '22px 1fr', alignItems: 'baseline'
              }}>
                <Mono style={{ fontSize: 9.5, color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</Mono>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
            {p.stack.map((s) => (
              <Mono key={s} style={{
                fontSize: 10.5, color: 'var(--muted)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                padding: '4px 8px', border: '1px solid var(--line)', borderRadius: 3
              }}>{s}</Mono>
            ))}
          </div>
        </div>

        {/* Right: big media */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PlaceholderBlock label={`media · ${p.id}`} ratio="4 / 3" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Mono style={{ fontSize: 10.5, color: 'var(--muted)' }}>fig. 01</Mono>
            <Mono style={{ fontSize: 10.5, color: 'var(--muted)' }}>{p.id}.mp4 · drop here</Mono>
          </div>
        </div>
      </div>
    </article>
  );
}

function Work({ c }) {
  const [open, setOpen] = React.useState('ctf-vr');
  return (
    <section id="work" style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 40px' }}>
      <SectionHead
        index="[02]"
        kicker={c.workKicker}
        title={
        <>
            {c.workTitlePre}
            <Italic>{c.workTitleItalic}</Italic>
            {c.workTitlePost}
          </>
        } />
      
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32 }}>
        <div />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {c.projects.map((p, i) =>
          <ProjectRow
            key={p.id}
            p={p}
            open={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
            first={i === 0} />
          )}
        </div>
      </div>
    </section>);

}

function ProjectRow({ p, open, onToggle, first }) {
  return (
    <article
      style={{
        borderTop: first ? '1px solid var(--line)' : 'none',
        borderBottom: '1px solid var(--line)'
      }}>
      
      <button
        onClick={onToggle}
        style={{
          appearance: 'none',
          background: 'transparent',
          border: 0,
          padding: '22px 0',
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
          color: 'var(--fg)',
          fontFamily: 'inherit',
          display: 'grid',
          gridTemplateColumns: '80px 1fr auto',
          gap: 20,
          alignItems: 'center'
        }}>
        
        <Mono style={{ fontSize: 12, color: 'var(--muted)' }}>{p.year}</Mono>
        <div>
          <div
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.15
            }}>
            
            {p.title}
          </div>
          <Mono
            style={{
              fontSize: 11,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: 4,
              display: 'inline-block'
            }}>
            
            {p.venue}
          </Mono>
        </div>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            border: '1px solid var(--line)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s, background 0.3s, color 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            background: open ? 'var(--accent)' : 'transparent',
            color: open ? 'var(--bg)' : 'var(--fg)',
            fontSize: 16,
            lineHeight: 1
          }}>
          
          +
        </span>
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.45s cubic-bezier(0.2, 0.6, 0.2, 1)'
        }}>
        
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: p.media === false ? '1fr' : '1.2fr 1fr',
              gap: 36,
              padding: '8px 0 32px'
            }}>
            
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg)', margin: 0 }}>
                {p.summary}
              </p>
              <ul
                style={{
                  marginTop: 18,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8
                }}>
                
                {p.bullets.map((b, i) =>
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                    display: 'grid',
                    gridTemplateColumns: '24px 1fr',
                    alignItems: 'baseline'
                  }}>
                  
                    <Mono style={{ fontSize: 10, color: 'var(--accent)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </Mono>
                    <span>{b}</span>
                  </li>
                )}
              </ul>
              <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map((s) =>
                <Mono
                  key={s}
                  style={{
                    fontSize: 10.5,
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '4px 8px',
                    border: '1px solid var(--line)',
                    borderRadius: 3
                  }}>
                  
                    {s}
                  </Mono>
                )}
              </div>
            </div>
            {p.media !== false && (
              <div>
                <ProjectMedia p={p} />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>);

}

function About({ c }) {
  return (
    <section id="about" style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 32px 40px' }}>
      <SectionHead
        index="[03]"
        kicker={c.aboutKicker}
        title={
        <>
            {c.aboutTitlePre} <Italic>{c.aboutTitleItalic}</Italic>
            {c.aboutTitlePost}
          </>
        } />
      
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32 }}>
        <div style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
          <Mono style={{
            fontSize: 10, color: 'var(--muted)',
            textTransform: 'uppercase', letterSpacing: '0.12em'
          }}>note</Mono>
          <p style={{
            margin: '8px 0 0',
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 18, lineHeight: 1.3,
            color: 'var(--accent)'
          }}>
            “{c.aboutPull}”
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48 }}>
          <div>
            <p
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 26,
                lineHeight: 1.4,
                margin: 0,
                color: 'var(--fg)'
              }}>
              
              {c.aboutP1pre}
              <Italic>{c.aboutP1italic}</Italic>
              {c.aboutP1post}
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--muted)',
                marginTop: 24
              }}>
              
              {c.aboutP2}
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--muted)',
                marginTop: 14
              }}>
              
              {c.aboutP3}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <SidebarCard title={c.currentlyKicker}>
              <Mono style={{ fontSize: 12, color: 'var(--muted)' }}>{c.currentlyDate}</Mono>
              <p
                style={{
                  margin: '6px 0 0',
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: 'var(--fg)'
                }}>
                
                {c.currentlyBody}
              </p>
            </SidebarCard>
            <SidebarCard title={c.softKicker}>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}>
                
                {c.soft.map((s) =>
                <li key={s} style={{ fontSize: 13, color: 'var(--fg)' }}>
                    {s}
                  </li>
                )}
              </ul>
            </SidebarCard>
            <SidebarCard title={c.hobbiesKicker}>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}>
                
                {c.hobbies.map((s) =>
                <li key={s} style={{ fontSize: 13, color: 'var(--fg)' }}>
                    {s}
                  </li>
                )}
              </ul>
            </SidebarCard>
          </div>
        </div>
      </div>
    </section>);

}

function SidebarCard({ title, children }) {
  return (
    <div
      style={{
        border: '1px solid var(--line)',
        borderRadius: 6,
        padding: '16px 18px',
        background: 'var(--surface)'
      }}>
      
      <Mono
        style={{
          fontSize: 10.5,
          color: 'var(--muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em'
        }}>
        
        {title}
      </Mono>
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>);

}

function CV({ c }) {
  return (
    <section id="cv" style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 32px 40px' }}>
      <SectionHead
        index="[04]"
        kicker={c.cvKicker}
        title={
        <>
            {c.cvTitlePre}
            <Italic>{c.cvTitleItalic}</Italic>
            {c.cvTitlePost}
          </>
        } />
      
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32 }}>
        <Mono
          style={{
            fontSize: 11,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em'
          }}>
          
          {c.cvRange}
        </Mono>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <SubHead label={c.experience} />
            <ul
              style={{
                margin: '20px 0 0',
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}>
              
              {c.experienceItems.map((e, i) =>
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                  padding: '16px 0',
                  borderTop: '1px solid var(--line)'
                }}>
                
                  <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{e.range}</Mono>
                  <div style={{ fontSize: 15, color: 'var(--fg)', fontWeight: 500 }}>{e.role}</div>
                  <Mono
                  style={{
                    fontSize: 11,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                  
                    {e.org}
                  </Mono>
                  <p style={{ margin: '4px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--muted)' }}>
                    {e.note}
                  </p>
                </li>
              )}
              <li
                style={{
                  padding: '16px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)'
                }}>
                
                <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{c.volunteerItem.range}</Mono>
                <div style={{ fontSize: 14, color: 'var(--fg)', marginTop: 4 }}>
                  {c.volunteer} — {c.volunteerItem.org}
                </div>
                <p style={{ margin: '4px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--muted)' }}>
                  {c.volunteerItem.note}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <SubHead label={c.education} />
            <ul
              style={{
                margin: '20px 0 0',
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}>
              
              {c.educationItems.map((e, i) =>
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                  padding: '16px 0',
                  borderTop: '1px solid var(--line)'
                }}>
                
                  <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{e.range}</Mono>
                  <div style={{ fontSize: 15, color: 'var(--fg)', fontWeight: 500 }}>{e.degree}</div>
                  <Mono
                  style={{
                    fontSize: 11,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                  
                    {e.school}
                  </Mono>
                  <p style={{ margin: '4px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--muted)' }}>
                    {e.focus}
                  </p>
                </li>
              )}
            </ul>

            <div style={{ marginTop: 36 }}>
              <SubHead label={c.skills} />
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {Object.entries(c.skillGroups).map(([k, arr]) =>
                <div
                  key={k}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: 16,
                    paddingBottom: 16,
                    borderBottom: '1px solid var(--line)'
                  }}>
                  
                    <Mono
                    style={{
                      fontSize: 10.5,
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                    
                      {k}
                    </Mono>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {arr.map((s, i) =>
                    <span key={s} style={{ fontSize: 13, color: 'var(--fg)' }}>
                          {s}
                          {i < arr.length - 1 &&
                      <span style={{ color: 'var(--line)', margin: '0 8px' }}>·</span>
                      }
                        </span>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <SubHead label={c.languages} />
              <ul
                style={{
                  margin: '20px 0 0',
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}>
                
                {c.languagesList.map((l) =>
                <li
                  key={l.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto',
                    gap: 16,
                    alignItems: 'center'
                  }}>
                  
                    <span style={{ fontSize: 14, color: 'var(--fg)' }}>{l.name}</span>
                    <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{l.level}</Mono>
                    <span style={{ display: 'inline-flex', gap: 4 }}>
                      {[0, 1, 2, 3, 4].map((i) =>
                    <span
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        background: i < l.dots ? 'var(--accent)' : 'var(--line)'
                      }} />

                    )}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function SubHead({ label }) {
  return (
    <Mono
      style={{
        fontSize: 11,
        color: 'var(--fg)',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontWeight: 600
      }}>
      
      ── {label}
    </Mono>);

}

function Contact({ c, lang }) {
  return (
    <section id="contact" style={{ maxWidth: 1240, margin: '0 auto', padding: '60px 32px 120px' }}>
      <SectionHead
        index="[05]"
        kicker={c.contactKicker}
        title={
        <>
            {c.contactTitlePre}
            <Italic>{c.contactTitleItalic}</Italic>
            {c.contactTitlePost}
          </>
        } />
      
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32 }}>
        <div />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`https://www.linkedin.com/in/${PROFILE.linkedin}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  textDecoration: 'none',
                  borderRadius: 999,
                  fontSize: 14
                }}>
                
                {c.writeMe} <span aria-hidden="true">→</span>
              </a>
              <a
                href={`https://github.com/${PROFILE.github}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  border: '1px solid var(--line)',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  borderRadius: 999,
                  fontSize: 14
                }}>
                
                {c.seeCode}
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ContactRow k="GitHub" v={PROFILE.github} href={`https://github.com/${PROFILE.github}`} />
            <ContactRow
              k="Sketchfab"
              v={PROFILE.sketchfab}
              href={`https://sketchfab.com/${PROFILE.sketchfab}`} />
            
            <ContactRow k={c.based} v={lang === 'de' ? PROFILE.basedCityDe : PROFILE.basedCity} />
            <ContactRow k={c.now} v={lang === 'de' ? PROFILE.nowCityDe : PROFILE.nowCity} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 32,
          marginTop: 80
        }}>
        
        <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{c.copyright}</Mono>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderTop: '1px solid var(--line)',
            paddingTop: 18,
            flexWrap: 'wrap',
            gap: 16
          }}>
          
          <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{c.footer}</Mono>
          <Mono style={{ fontSize: 11, color: 'var(--muted)' }}>{c.footerV}</Mono>
        </div>
      </div>
    </section>);

}

function ContactRow({ k, v, href }) {
  const inner =
  <>
      <Mono
      style={{
        fontSize: 11,
        color: 'var(--muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
      
        {k}
      </Mono>
      <span style={{ fontSize: 15, color: 'var(--fg)' }}>{v}</span>
    </>;

  const baseStyle = {
    display: 'grid',
    gridTemplateColumns: '90px 1fr',
    alignItems: 'baseline',
    gap: 16,
    padding: '14px 0',
    borderTop: '1px solid var(--line)',
    textDecoration: 'none',
    color: 'inherit'
  };
  return href ?
  <a
    href={href}
    style={baseStyle}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer">
    
      {inner}
    </a> :

  <div style={{ ...baseStyle, height: "48.6667px" }}>{inner}</div>;

}

// ───────────────────── scroll indicator ─────────────────────

function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  const pct = Math.round(p * 100);
  return (
    <div aria-hidden="true" style={{
      position: 'fixed', right: 18, top: '50%', transform: 'translateY(-50%)',
      zIndex: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
      pointerEvents: 'none'
    }}>
      <span style={{
        fontFamily: '"Geist Mono", monospace', fontSize: 9.5,
        color: 'var(--muted)', letterSpacing: '0.1em',
        writingMode: 'vertical-rl', transform: 'rotate(180deg)'
      }}>
        {String(pct).padStart(3, '0')} %
      </span>
      <div style={{
        width: 1, height: 180,
        background: 'var(--line)', position: 'relative'
      }}>
        <div style={{
          position: 'absolute', left: -2, width: 5, height: 5,
          background: 'var(--accent)', borderRadius: 5,
          top: `calc(${pct}% - 2.5px)`, transition: 'top 0.1s linear'
        }} />
      </div>
    </div>
  );
}

// ───────────────────── page background ─────────────────────

function PageBackground({ kind }) {
  if (!kind || kind === 'plain') return null;

  const common = {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
  };

  if (kind === 'grid') {
    return (
      <div aria-hidden="true" style={{
        ...common,
        backgroundImage:
          'linear-gradient(to right, color-mix(in oklab, var(--fg) 6%, transparent) 1px, transparent 1px),' +
          'linear-gradient(to bottom, color-mix(in oklab, var(--fg) 6%, transparent) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 35%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 35%, black 30%, transparent 100%)'
      }} />
    );
  }

  if (kind === 'dots') {
    return (
      <div aria-hidden="true" style={{
        ...common,
        backgroundImage:
          'radial-gradient(color-mix(in oklab, var(--fg) 16%, transparent) 1px, transparent 1.4px)',
        backgroundSize: '22px 22px',
        opacity: 0.55,
        maskImage: 'radial-gradient(ellipse 70% 70% at 70% 30%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 70% 30%, black 0%, transparent 75%)'
      }} />
    );
  }

  if (kind === 'rules') {
    return (
      <div aria-hidden="true" style={{
        ...common,
        backgroundImage:
          'repeating-linear-gradient(to right, transparent 0 159px, color-mix(in oklab, var(--fg) 7%, transparent) 159px 160px)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
      }} />
    );
  }

  if (kind === 'topo') {
    return (
      <div aria-hidden="true" style={{
        ...common,
        backgroundImage:
          'repeating-linear-gradient(180deg, color-mix(in oklab, var(--fg) 5%, transparent) 0 1px, transparent 1px 14px)',
        maskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black 30%, transparent 100%)'
      }} />
    );
  }

  if (kind === 'aura') {
    return (
      <>
        <div aria-hidden="true" style={{
          ...common,
          backgroundImage:
            'radial-gradient(circle at 75% 18%, color-mix(in oklab, var(--accent) 40%, transparent) 0%, transparent 35%),' +
            'radial-gradient(circle at 12% 78%, color-mix(in oklab, var(--accent) 28%, transparent) 0%, transparent 35%)',
          filter: 'blur(40px)',
          opacity: 0.7,
          animation: 'auraDrift 18s ease-in-out infinite'
        }} />
        <style>{`@keyframes auraDrift {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(0,-3%,0) scale(1.06); }
        }`}</style>
      </>
    );
  }

  if (kind === 'noise') {
    const svg = encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
      '<filter id="n"><feTurbulence baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0"/></filter>' +
      '<rect width="100%" height="100%" filter="url(%23n)" opacity="0.4"/></svg>'
    );
    return (
      <>
        <div aria-hidden="true" style={{
          ...common,
          backgroundImage:
            'radial-gradient(ellipse 90% 60% at 50% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)'
        }} />
        <div aria-hidden="true" style={{
          ...common,
          backgroundImage: `url("data:image/svg+xml,${svg}")`,
          opacity: 0.55,
          mixBlendMode: 'multiply'
        }} />
      </>
    );
  }

  return null;
}

// ───────────────────── app ─────────────────────

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "paper",
    "heroSide": "none",
    "headlineFont": "Instrument Serif",
    "background": "aura",
    "lang": "en"
  } /*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('top');

  const p = PALETTES[t.palette] || PALETTES.paper;
  const lang = t.lang === 'de' ? 'de' : 'en';
  const c = COPY[lang];

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  React.useEffect(() => {
    const ids = ['work', 'about', 'cv', 'contact'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.
        filter((e) => e.isIntersecting).
        sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onJump = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  const rootStyle = {
    '--bg': p.bg,
    '--surface': p.surface,
    '--fg': p.fg,
    '--muted': p.muted,
    '--line': p.line,
    '--accent': p.accent,
    '--accent-soft': p.accentSoft,
    background: 'var(--bg)',
    color: 'var(--fg)',
    fontFamily: '"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
    minHeight: '100vh'
  };

  const swatches = [
  [PALETTES.paper.accent, PALETTES.paper.fg, PALETTES.paper.bg],
  [PALETTES.ink.accent, PALETTES.ink.fg, PALETTES.ink.bg],
  [PALETTES.sage.accent, PALETTES.sage.fg, PALETTES.sage.bg],
  [PALETTES.cobalt.accent, PALETTES.cobalt.fg, PALETTES.cobalt.bg]];

  const paletteKeys = ['paper', 'ink', 'sage', 'cobalt'];

  return (
    <div style={rootStyle}>
      <PageBackground kind={t.background} />
      <TopBar
        active={active}
        onJump={onJump}
        c={c}
        lang={lang}
        setLang={(v) => setTweak('lang', v)} />
      
      <Hero c={c} lang={lang} heroSide={t.heroSide} />
      <Work c={c} />
      <About c={c} />
      <CV c={c} />
      <Contact c={c} lang={lang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Language"
          value={lang}
          options={['en', 'de']}
          onChange={(v) => setTweak('lang', v)} />
        
        <TweakSection label="Palette" />
        <TweakColor
          label="Theme"
          value={swatches[paletteKeys.indexOf(t.palette)] || swatches[0]}
          options={swatches}
          onChange={(v) => {
            const idx = swatches.findIndex((sw) => sw[0] === v[0]);
            setTweak('palette', paletteKeys[idx] || 'paper');
          }} />
        
        <TweakSection label="Background" />
        <TweakSelect
          label="Pattern"
          value={t.background}
          options={['plain', 'dots', 'grid', 'rules', 'topo', 'aura', 'noise']}
          onChange={(v) => setTweak('background', v)} />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Hero side"
          value={t.heroSide}
          options={['card', 'orb', 'none']}
          onChange={(v) => setTweak('heroSide', v)} />
        
        <TweakSection label="Typography" />
        <TweakRadio
          label="Headline font"
          value={t.headlineFont}
          options={['Instrument Serif', 'Geist']}
          onChange={(v) => setTweak('headlineFont', v)} />
        
      </TweaksPanel>

      <style>{`
        ${t.headlineFont === 'Geist' ?
        `
          h1, h2 {
            font-family: "Geist", "Inter", ui-sans-serif, system-ui, sans-serif !important;
            font-weight: 500 !important;
            letter-spacing: -0.02em !important;
          }
          h1 em, h2 em { font-style: normal !important; font-family: inherit !important; }
        ` :
        ''}
        ${t.heroSide === 'none' ? `.hero-side { display: none !important; } #top { grid-template-columns: minmax(0, 1fr) !important; }` : ''}
      `}</style>
    </div>);

}

Object.assign(window, { App, PALETTES, COPY });
