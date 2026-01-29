import {
  FadeInScale,
  FadeInScaleCode
} from '../components/Effects/FadeInScale';
import {
  StaggerContainer,
  StaggerContainerCode
} from '../components/Effects/StaggerContainer';
import {
  SpringBounce,
  SpringBounceCode
} from '../components/Effects/SpringBounce';
import {
  TextReveal,
  TextRevealCode
} from '../components/Effects/TextReveal';
import {
  LoadingSpinner,
  LoadingSpinnerCode
} from '../components/Effects/LoadingSpinner';
import {
  MorphingShape,
  MorphingShapeCode
} from '../components/Effects/MorphingShape';

// Text Effects
import {
  TextFollowMouse,
  TextFollowMouseCode
} from '../components/Effects/TextFollowMouse';
import {
  TextMagnetic,
  TextMagneticCode
} from '../components/Effects/TextMagnetic';
import {
  TextScramble,
  TextScrambleCode
} from '../components/Effects/TextScramble';
import {
  TextWave,
  TextWaveCode
} from '../components/Effects/TextWave';
import {
  TextGradientFlow,
  TextGradientFlowCode
} from '../components/Effects/TextGradientFlow';
import {
  Text3DTilt,
  Text3DTiltCode
} from '../components/Effects/Text3DTilt';

export interface EffectItem {
  id: string;
  title: string;
  description: string;
  category: 'entrance' | 'interaction' | 'loading' | 'text' | 'continuous';
  component: React.ComponentType;
  code: string;
}

export const effects: EffectItem[] = [
  // Entrance Effects
  {
    id: 'fade-in-scale',
    title: 'Fade In Scale',
    description: 'Smooth entrance animation with opacity and scale transition.',
    category: 'entrance',
    component: FadeInScale,
    code: FadeInScaleCode,
  },
  {
    id: 'stagger-container',
    title: 'Stagger Container',
    description: 'Sequential animation of multiple items with staggered delays.',
    category: 'entrance',
    component: StaggerContainer,
    code: StaggerContainerCode,
  },
  
  // Interaction Effects
  {
    id: 'spring-bounce',
    title: 'Spring Bounce',
    description: 'Physics-based spring animation with hover and tap interactions.',
    category: 'interaction',
    component: SpringBounce,
    code: SpringBounceCode,
  },
  
  // Text Effects
  {
    id: 'text-reveal',
    title: 'Text Reveal',
    description: 'Character-by-character text animation with gradient effect.',
    category: 'text',
    component: TextReveal,
    code: TextRevealCode,
  },
  {
    id: 'text-follow-mouse',
    title: 'Text Follow Mouse',
    description: 'Text smoothly follows mouse movement with spring physics.',
    category: 'interaction',
    component: TextFollowMouse,
    code: TextFollowMouseCode,
  },
  {
    id: 'text-magnetic',
    title: 'Text Magnetic',
    description: 'Individual letters are attracted to mouse cursor like magnets.',
    category: 'interaction',
    component: TextMagnetic,
    code: TextMagneticCode,
  },
  {
    id: 'text-scramble',
    title: 'Text Scramble',
    description: 'Matrix-style text decode effect on hover.',
    category: 'text',
    component: TextScramble,
    code: TextScrambleCode,
  },
  {
    id: 'text-wave',
    title: 'Text Wave',
    description: 'Letters animate in a wave pattern with color transitions.',
    category: 'text',
    component: TextWave,
    code: TextWaveCode,
  },
  {
    id: 'text-gradient-flow',
    title: 'Gradient Flow',
    description: 'Smooth flowing gradient animation across text.',
    category: 'text',
    component: TextGradientFlow,
    code: TextGradientFlowCode,
  },
  {
    id: 'text-3d-tilt',
    title: '3D Tilt',
    description: '3D perspective tilt effect following mouse position.',
    category: 'interaction',
    component: Text3DTilt,
    code: Text3DTiltCode,
  },
  
  // Loading Effects
  {
    id: 'loading-spinner',
    title: 'Loading Spinner',
    description: 'Multi-layer rotating spinner with different speeds.',
    category: 'loading',
    component: LoadingSpinner,
    code: LoadingSpinnerCode,
  },
  
  // Continuous Effects
  {
    id: 'morphing-shape',
    title: 'Morphing Shape',
    description: 'Shape transformation with scale, rotate and border-radius.',
    category: 'continuous',
    component: MorphingShape,
    code: MorphingShapeCode,
  },
];

export const categories = [
  { id: 'all', label: 'All Effects' },
  { id: 'entrance', label: 'Entrance' },
  { id: 'interaction', label: 'Interaction' },
  { id: 'loading', label: 'Loading' },
  { id: 'text', label: 'Text' },
  { id: 'continuous', label: 'Continuous' },
] as const;
