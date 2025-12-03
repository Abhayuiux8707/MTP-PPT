
import { Brain, Music, Image as ImageIcon, Wind, Hand, Heart, Activity, Users, Layout, MapIcon, MessageCircle, FileText, Smartphone, Eye, Mic, Puzzle, ClipboardList, BookOpen, Smile, Zap, Sun, CloudRain, Coffee, Feather, Target, Compass, Anchor, AlertTriangle, Monitor, MousePointer2, Clock, Search, RefreshCw, Fingerprint } from 'lucide-react';

export const NAV_TABS = [
  { id: 'overview', label: 'Overview', icon: Layout },
  { id: 'cognitive', label: 'Cognitive Map', icon: Brain },
  { id: 'therapeutic', label: 'Therapeutic Benchmarking', icon: ClipboardList },
  { id: 'sensory', label: 'Sensory Trigger Map', icon: Zap },
  { id: 'benchmarking', label: 'Experience Benchmarking', icon: Target },
  { id: 'hypotheses', label: 'Design Hypotheses', icon: Heart },
  { id: 'eimc', label: 'The EIMC Loop', icon: RefreshCw },
  { id: 'personas', label: 'Personas', icon: Users },
  { id: 'storyboard', label: 'Scenario', icon: FileText },
  { id: 'journey', label: 'Journey Map', icon: Activity },
  { id: 'levelflow', label: 'Level 1 Flow', icon: Wind },
  { id: 'wireframes', label: 'Wireframes', icon: Smartphone },
  { id: 'chat', label: 'Jury Chat', icon: MessageCircle },
];

export const PERSONAS = {
  primary: {
    name: 'Arun Kumar',
    age: 67,
    role: 'Retired Teacher',
    condition: 'Mild Alzheimer’s',
    quote: "I know I know this... why can't I say it?",
    needs: ['Familiar cues', 'Emotional safety', 'Error-free interactions'],
    painPoints: ['Confusion in evenings', 'Repetitive questioning', 'Fear of failure'],
    interaction: 'Interacts via simple touch and voice. Responds best to auditory cues from his youth (AIR radio).',
  },
  caregiver: {
    name: 'Meera',
    age: 62,
    role: 'Full-time Caregiver (Wife)',
    condition: 'High Stress',
    quote: "I just want to see him smile like he used to.",
    needs: ['Simple monitoring tools', 'Moments of respite', 'Emotional clarity'],
    painPoints: ['Burnout', 'Unpredictable agitation', 'Guilt'],
    gain: 'Gains peace of mind through the "Mood Dashboard" and seeing Arun engaged safely.',
  }
};

export const SENSORY_TRIGGER_DATA = [
  { 
    type: 'Visual', 
    examples: ['Warm Lighting', 'Family photos', 'Old Radio', 'Vintage Posters'], 
    color: 'indigo', 
    icon: ImageIcon, 
    desc: 'Stimulates recognition',
    mechanism: 'Occipital Lobe Activation'
  },
  { 
    type: 'Sound', 
    examples: ['Birds Chirping', 'AIR Static', 'Temple Bells', 'Old Hindi Songs'], 
    color: 'rose', 
    icon: Music, 
    desc: 'Triggers emotion',
    mechanism: 'Temporal Lobe Resonance'
  },
  { 
    type: 'Smell', 
    examples: ['Incense Stick', 'Mitti (Petrichor)', 'Jasmine', 'Cardamom/Spices'], 
    color: 'emerald', 
    icon: Wind, 
    desc: 'Direct memory link',
    mechanism: 'Olfactory Bulb Direct Path'
  },
  { 
    type: 'Touch', 
    examples: ['Old Blanket', 'Wood Texture', 'Brass Utensils', 'Velvet Cushion'], 
    color: 'amber', 
    icon: Hand, 
    desc: 'Grounds attention',
    mechanism: 'Somatosensory Feedback'
  },
];

export const JOURNEY_DATA = [
  { stage: 'Before', action: 'Restless Pacing', emotion: 3, pain: 'Agitation', opp: 'Identify mood shift early' },
  { stage: 'Trigger', action: 'Meera opens Sanjeevani', emotion: 4, pain: 'Technological friction', opp: 'One-tap launch' },
  { stage: 'Interaction', action: 'Arun taps Radio', emotion: 6, pain: 'Confusion if delay', opp: 'Instant auditory feedback' },
  { stage: 'Peak', action: 'Recognition / Smile', emotion: 9, pain: 'Overstimulation risk', opp: 'Soft transitions' },
  { stage: 'After', action: 'Calm / Tagging', emotion: 8, pain: 'Transition out', opp: 'Data logging for Meera' },
];

export const EXPERIENCE_MATRIX_POINTS = [
  { name: 'Generic VR Games', x: 2, y: 2, type: 'competitor', desc: 'Overstimulating & Foreign' },
  { name: 'Western Dementia VR', x: 3, y: 6, type: 'competitor', desc: 'Calm but Culturally Mismatched' },
  { name: 'Meditation Apps', x: 4, y: 8, type: 'competitor', desc: 'Globally Calming, Not Personal' },
  { name: 'Indian Cultural VR', x: 8, y: 3, type: 'competitor', desc: 'Familiar but Stressful (Loud)' },
  { name: 'Sanjeevani', x: 9.2, y: 9.2, type: 'hero', desc: 'The Sweet Spot: Calm + Cultural' },
];

export const MATRIX_STRATEGIC_INSIGHTS = [
  {
    title: "Calm without Culture fails memory.",
    desc: "Meditation apps help regulation but fail to trigger identity retrieval.",
    icon: Brain,
    color: "amber"
  },
  {
    title: "Culture without Calm causes anxiety.",
    desc: "Existing Indian VR apps are often too loud or fast for dementia patients.",
    icon: AlertTriangle,
    color: "rose"
  },
  {
    title: "The Sweet Spot is Empty.",
    desc: "Sanjeevani occupies the unserved 'Blue Ocean': High Comfort × High Relevance.",
    icon: Target,
    color: "emerald"
  }
];

export const STORYBOARD_STEPS = [
  { title: 'The Confusion', desc: '5:30 PM. Arun becomes restless and forgets where he is (Sundowning).', icon: 'cloud-drizzle' },
  { title: 'The Intervention', desc: 'Meera notices the signs. She hands him the tablet with Sanjeevani open.', icon: 'tablet' },
  { title: 'The Anchor', desc: 'Arun sees the virtual "Old Radio". It looks just like his father’s.', icon: 'radio' },
  { title: 'The Trigger', desc: 'He taps it. Static noise fades into a classic AIR weather report.', icon: 'volume-2' },
  { title: 'The Recall', desc: 'Arun smiles. "I remember this tune." Agitation subsides.', icon: 'smile' },
  { title: 'The Log', desc: 'Meera tags the session as "Positive". The system records the mood.', icon: 'check-circle' },
];

export const COLORS = {
  current: '#4f46e5', // Indigo
  healthy: '#10b981', // Emerald
  healthyBorder: '#059669',
  currentBorder: '#4338ca',
};

// Cognitive Map Tab Data
export const COGNITIVE_CHART_DATA = [
  { subject: 'Memory', healthy: 5, mild: 3, moderate: 1, fullMark: 5 },
  { subject: 'Attention', healthy: 5, mild: 3, moderate: 2, fullMark: 5 },
  { subject: 'Spatial', healthy: 5, mild: 4, moderate: 2, fullMark: 5 },
  { subject: 'Language', healthy: 5, mild: 4, moderate: 2, fullMark: 5 },
  { subject: 'Emotional', healthy: 5, mild: 3, moderate: 1, fullMark: 5 },
  { subject: 'Executive', healthy: 5, mild: 3, moderate: 1, fullMark: 5 },
];

export const MAPPING_DATA = [
  {
    domain: 'Memory',
    struggle: 'Difficulty recalling recent events or names.',
    implication: 'Use familiar, nostalgic cues (Reminiscence Therapy).',
    level: 'Level 1: Nostalgia Room',
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
    icon: Brain
  },
  {
    domain: 'Attention',
    struggle: 'Hard to focus amidst distractions.',
    implication: 'Minimalist UI with single focal points.',
    level: 'All Levels',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    icon: Eye
  },
  {
    domain: 'Visuospatial',
    struggle: 'Getting lost, misjudging distances.',
    implication: 'High contrast, clear wayfinding, linear paths.',
    level: 'Level 2: The Garden',
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
    icon: MapIcon
  },
  {
    domain: 'Language',
    struggle: 'Finding the right words (Aphasia).',
    implication: 'Use universal icons and voice commands.',
    level: 'All Levels',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    icon: Mic
  },
  {
    domain: 'Executive',
    struggle: 'Planning and problem solving.',
    implication: 'Step-by-step guidance, no complex puzzles.',
    level: 'Level 3: Sorting',
    bg: 'bg-rose-50',
    color: 'text-rose-600',
    icon: Layout
  }
];

// --- THERAPEUTIC BENCHMARKING DATA ---

export const THERAPY_HEATMAP_DATA = [
  {
    id: 'reminiscence',
    method: 'Reminiscence',
    cognitive: 'High',
    emotional: 'High',
    identity: 'High',
    opp: 'Level 1 objects + stories',
    icon: ImageIcon,
    color: 'indigo'
  },
  {
    id: 'sensory',
    method: 'Sensory Integration',
    cognitive: 'Medium',
    emotional: 'High',
    identity: 'Medium',
    opp: 'Level 2 nature + multisensory',
    icon: Wind,
    color: 'emerald'
  },
  {
    id: 'cst',
    method: 'CST',
    cognitive: 'High',
    emotional: 'Medium',
    identity: 'Medium',
    opp: 'Level 4 gentle puzzles',
    icon: Puzzle,
    color: 'amber'
  },
  {
    id: 'music',
    method: 'Music Therapy',
    cognitive: 'Medium',
    emotional: 'High',
    identity: 'High',
    opp: 'Sound cues Level 1 & 3',
    icon: Music,
    color: 'rose'
  },
  {
    id: 'green',
    method: 'Green Therapy',
    cognitive: 'Medium',
    emotional: 'High',
    identity: 'Medium',
    opp: 'Level 2 Garden environment',
    icon: Activity,
    color: 'teal'
  },
  {
    id: 'narrative',
    method: 'Narrative Identity',
    cognitive: 'Medium',
    emotional: 'Medium',
    identity: 'High',
    opp: 'Level 3 Identity Scenes',
    icon: BookOpen,
    color: 'blue'
  }
];

export const THERAPY_RADAR_DATA = {
  reminiscence: [
    { subject: 'Personalization', A: 10, fullMark: 10 },
    { subject: 'Engagement', A: 8, fullMark: 10 },
    { subject: 'Culture Fit', A: 9, fullMark: 10 },
    { subject: 'Emotional', A: 8, fullMark: 10 },
    { subject: 'Simplicity', A: 7, fullMark: 10 },
    { subject: 'Observability', A: 6, fullMark: 10 },
  ],
  sensory: [
    { subject: 'Personalization', A: 5, fullMark: 10 },
    { subject: 'Engagement', A: 9, fullMark: 10 },
    { subject: 'Culture Fit', A: 8, fullMark: 10 },
    { subject: 'Emotional', A: 10, fullMark: 10 },
    { subject: 'Simplicity', A: 6, fullMark: 10 },
    { subject: 'Observability', A: 7, fullMark: 10 },
  ],
  cst: [
    { subject: 'Personalization', A: 4, fullMark: 10 },
    { subject: 'Engagement', A: 10, fullMark: 10 },
    { subject: 'Culture Fit', A: 6, fullMark: 10 },
    { subject: 'Emotional', A: 5, fullMark: 10 },
    { subject: 'Simplicity', A: 8, fullMark: 10 },
    { subject: 'Observability', A: 10, fullMark: 10 },
  ],
  music: [
    { subject: 'Personalization', A: 9, fullMark: 10 },
    { subject: 'Engagement', A: 9, fullMark: 10 },
    { subject: 'Culture Fit', A: 10, fullMark: 10 },
    { subject: 'Emotional', A: 10, fullMark: 10 },
    { subject: 'Simplicity', A: 8, fullMark: 10 },
    { subject: 'Observability', A: 5, fullMark: 10 },
  ],
  green: [
    { subject: 'Personalization', A: 3, fullMark: 10 },
    { subject: 'Engagement', A: 7, fullMark: 10 },
    { subject: 'Culture Fit', A: 10, fullMark: 10 },
    { subject: 'Emotional', A: 10, fullMark: 10 },
    { subject: 'Simplicity', A: 10, fullMark: 10 },
    { subject: 'Observability', A: 4, fullMark: 10 },
  ],
  narrative: [
    { subject: 'Personalization', A: 10, fullMark: 10 },
    { subject: 'Engagement', A: 7, fullMark: 10 },
    { subject: 'Culture Fit', A: 8, fullMark: 10 },
    { subject: 'Emotional', A: 9, fullMark: 10 },
    { subject: 'Simplicity', A: 5, fullMark: 10 },
    { subject: 'Observability', A: 8, fullMark: 10 },
  ]
};

export const THERAPY_CARDS_DATA = [
  {
    title: 'Reminiscence Therapy',
    evidence: 'Strongest in activating autobiographical memory.',
    translation: ['Object-based recall', 'Vintage sound cues', 'Low cognitive load interactions'],
    level: 'Level 1 — Nostalgia Room',
    impact: 'Meaningful recall moments increase confidence and reduce agitation.',
    color: 'indigo',
    icon: ImageIcon
  },
  {
    title: 'Sensory Integration',
    evidence: 'Multi-sensory stimulation improves mood regulation.',
    translation: ['Layered sound design', 'Soft ambient lighting', 'Optional scent module (future)'],
    level: 'Level 2 — Garden of Memories',
    impact: 'Emotion-first grounding stabilizes attention.',
    color: 'emerald',
    icon: Wind
  },
  {
    title: 'Cognitive Stimulation (CST)',
    evidence: 'Improves attention and problem-solving skills.',
    translation: ['Two-piece puzzles', 'Familiar photos', 'Gradual complexity increase'],
    level: 'Level 4 — Puzzle Play',
    impact: 'Small wins build confidence.',
    color: 'amber',
    icon: Puzzle
  },
  {
    title: 'Music Therapy',
    evidence: 'Activates deep memory networks.',
    translation: ['Personalized sound cues', 'Rhythm-triggered memories', 'Familiar cultural music'],
    level: 'Level 1 + Level 3',
    impact: 'Music acts as a time machine for identity.',
    color: 'rose',
    icon: Music
  },
  {
    title: 'Green/Nature Therapy',
    evidence: 'Reduces physiological stress.',
    translation: ['Slow animations (bloom)', 'Nature-inspired palette', 'Ambient generative soundscape'],
    level: 'Level 2',
    impact: 'Nature offers predictable calm.',
    color: 'teal',
    icon: Activity
  },
  {
    title: 'Narrative Identity',
    evidence: 'Story recall enhances identity recognition.',
    translation: ['Micro-scenes from memory', 'Short identity prompts', 'First-person flashbacks'],
    level: 'Level 3 — Identity Moment',
    impact: 'Story-based recall helps reconstruct self-awareness.',
    color: 'blue',
    icon: BookOpen
  }
];

export const THERAPY_TRIANGLE_DATA = [
  { id: 'memory', x: 10, y: 10, label: 'Memory' },
  { id: 'identity', x: 50, y: 90, label: 'Identity' },
  { id: 'emotion', x: 90, y: 10, label: 'Emotion' },
  { id: 'reminiscence', x: 30, y: 30, label: 'Reminiscence' },
  { id: 'green', x: 50, y: 30, label: 'Green Therapy' },
  { id: 'cst', x: 40, y: 20, label: 'CST' },
  { id: 'music', x: 70, y: 30, label: 'Music' },
  { id: 'narrative', x: 50, y: 70, label: 'Narrative' },
  { id: 'sensory', x: 50, y: 50, label: 'Sensory' }, 
];

// --- SIMPLE HYPOTHESES DATA ---
export const SIMPLE_HYPOTHESES = [
  {
    id: 'H1',
    title: 'Nostalgic cues → increased recall & positive affect',
    reference: 'see Reminiscence Therapy literature',
    translation: 'Level 1 uses familiar objects + short audio cues.',
    measurable: 'smile rate (% of taps leading to smile), verbal recall instances per session.',
    icon: Music,
    color: 'indigo'
  },
  {
    id: 'H2',
    title: 'Nature environments → reduce agitation',
    reference: 'see Biophilia Hypothesis',
    translation: 'Level 2 Garden uses slow animations + natural sounds.',
    measurable: 'agitation score drop (caregiver tag), heart rate proxy if available.',
    icon: Wind,
    color: 'emerald'
  },
  {
    id: 'H3',
    title: 'Micro-sessions (2–5 mins) → better sustained engagement',
    reference: 'see Cognitive Reserve Theory',
    translation: 'each session capped at 3 minutes with option to pause.',
    measurable: 'session completion rate, repeat engagement after one week.',
    icon: Clock,
    color: 'amber'
  }
];

// --- EIMC LOOP DATA ---
export const EIMC_PHASES = [
  {
    id: 1,
    title: "Sensory Cue",
    subtitle: "Trigger Layer",
    desc: "A familiar sensory input activates emotional networks.",
    examples: ["Photo", "Old Song", "Jasmine Smell"],
    icon: Zap,
    color: "blue"
  },
  {
    id: 2,
    title: "Emotion",
    subtitle: "Affective Layer",
    desc: "The cue creates a spark of warmth and safety.",
    examples: ["Nostalgia", "Safety", "Warmth"],
    icon: Heart,
    color: "rose"
  },
  {
    id: 3,
    title: "Identity Activation",
    subtitle: "Self Layer",
    desc: "The person reconnects with who they are.",
    examples: ["“This is mine”", "“I remember me”"],
    icon: Fingerprint,
    color: "amber"
  },
  {
    id: 4,
    title: "Memory & Calm",
    subtitle: "Cognitive Layer",
    desc: "Identity unlocks memory, reducing anxiety.",
    examples: ["Recall", "Reduced Agitation", "Smile"],
    icon: Smile,
    color: "emerald"
  }
];

export const EIMC_MAPPING = [
  { phase: "Sensory Cue", level: "Level 1 (Nostalgia Room)", mechanic: "Object tap → old sound cue" },
  { phase: "Emotion", level: "Level 2 (Garden)", mechanic: "Calm nature → emotional softening" },
  { phase: "Identity Activation", level: "Level 3 (Identity Moment)", mechanic: "Childhood scenes → “This was me”" },
  { phase: "Memory & Calm", level: "Level 4 + Level 5", mechanic: "Recall during puzzle + caregiver notes" }
];

// --- COMPLEX DATA (Kept for reference if needed, but unused in simple view) ---

export const HYPOTHESIS_NODES = [
  { id: 'H1', type: 'core', x: 25, y: 30, label: 'H1: Nostalgia', color: 'indigo' },
  { id: 'H2', type: 'core', x: 75, y: 30, label: 'H2: Biophilia', color: 'emerald' },
  { id: 'H3', type: 'core', x: 50, y: 75, label: 'H3: Micro-Sessions', color: 'amber' },
  { id: 'H1a', type: 'satellite', x: 15, y: 20, label: 'Audio+Visual', parent: 'H1', color: 'indigo' },
  { id: 'H1b', type: 'satellite', x: 35, y: 20, label: 'Personalized', parent: 'H1', color: 'indigo' },
  { id: 'H1c', type: 'satellite', x: 25, y: 45, label: 'Cultural Fit', parent: 'H1', color: 'indigo' },
  { id: 'H2a', type: 'satellite', x: 85, y: 20, label: 'Bloom Anim', parent: 'H2', color: 'emerald' },
  { id: 'H2b', type: 'satellite', x: 65, y: 20, label: 'Water Sound', parent: 'H2', color: 'emerald' },
  { id: 'H2c', type: 'satellite', x: 80, y: 45, label: 'Natural Green', parent: 'H2', color: 'emerald' },
  { id: 'H3a', type: 'satellite', x: 40, y: 85, label: '< 5 Mins', parent: 'H3', color: 'amber' },
  { id: 'H3b', type: 'satellite', x: 60, y: 85, label: 'One-Tap', parent: 'H3', color: 'amber' },
  { id: 'H3c', type: 'satellite', x: 50, y: 60, label: 'Predictable', parent: 'H3', color: 'amber' },
];

export const HYPOTHESIS_LINKS = [
  { source: 'H1', target: 'H2', label: 'Emotion Regulates Identity' },
  { source: 'H2', target: 'H3', label: 'Calm Increases Focus' },
  { source: 'H3', target: 'H1', label: 'Engagement Fuels Recall' },
  { source: 'H1', target: 'H1a' }, { source: 'H1', target: 'H1b' }, { source: 'H1', target: 'H1c' },
  { source: 'H2', target: 'H2a' }, { source: 'H2', target: 'H2b' }, { source: 'H2', target: 'H2c' },
  { source: 'H3', target: 'H3a' }, { source: 'H3', target: 'H3b' }, { source: 'H3', target: 'H3c' },
];

export const DETAILED_HYPOTHESES = [
  {
    id: 'H1',
    code: 'H1',
    title: 'Nostalgic Cues activate autobiographical memory',
    scientific: 'Exposure to culturally familiar triggers (audio, objects) activates hippocampal networks, bypassing short-term deficits.',
    design: 'Level 1: 5-12s AIR radio clips, large vintage objects, slow pacing.',
    metrics: 'Memory Trigger Score = (smile rate × recall instances)',
    icon: Music,
    color: 'indigo',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    text: 'text-indigo-900',
    subtext: 'text-indigo-600'
  },
  {
    id: 'H2',
    code: 'H2',
    title: 'Nature-based stimuli regulate anxiety',
    scientific: 'Biophilia theory: Slow-moving natural stimuli activate the parasympathetic nervous system, lowering cortisol.',
    design: 'Level 2: Bloom animations, gentle water sounds, no sharp edges.',
    metrics: 'Calmness Index = (Decrease in agitation × time spent)',
    icon: Wind,
    color: 'emerald',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-900',
    subtext: 'text-emerald-600'
  },
  {
    id: 'H3',
    code: 'H3',
    title: 'Micro-sessions reduce cognitive fatigue',
    scientific: 'Short "wins" create dopamine boosts without taxing limited cognitive reserve.',
    design: 'Strict 2-minute level caps, one interaction per screen.',
    metrics: 'Engagement Score = (completion rate × repeat rate)',
    icon: Clock,
    color: 'amber',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-900',
    subtext: 'text-amber-600'
  }
];

export const TRI_IMPACT_MODEL = [
  { id: 'H1', cognitive: 'High (Recall)', emotional: 'Medium', identity: 'High' },
  { id: 'H2', cognitive: 'Medium', emotional: 'High (Calm)', identity: 'Low' },
  { id: 'H3', cognitive: 'High (Focus)', emotional: 'Medium', identity: 'Medium' },
];

export const EXPERIMENT_PLANS = [
  {
    title: 'H1 Validation Test',
    method: 'Give user 3 nostalgic objects vs 3 generic objects.',
    measure: 'Count verbal recall phrases ("I remember...") and duration of smile.',
    icon: Search
  },
  {
    title: 'H2 Agitation Study',
    method: 'Compare 5 mins in "Garden" vs 5 mins in generic menu.',
    measure: 'Caregiver rates agitation (1-10) pre and post session.',
    icon: Activity
  },
  {
    title: 'H3 Fatigue A/B Test',
    method: 'Compare 2-min auto-exit vs open-ended play.',
    measure: 'Track dropout rate and visible signs of frustration.',
    icon: Clock
  }
];
