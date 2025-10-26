export interface Project {
  id: string;
  title: string;
  tech: string[];
  link: string;
  github?: string;
  blurb: string;
  timeline: string;
  image: string;
  category: 'ml' | 'web' | 'research';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  impact: string;
  takeaway: string;
  image?: string;
}

export interface NowBuilding {
  id: string;
  title: string;
  desc: string;
  github: string;
  status: string;
  stack: string[];
}

export interface Exploring {
  id: string;
  type: 'book' | 'course' | 'framework' | 'conference';
  label: string;
  takeaway: string;
}

export interface LiveSession {
  when: string;
  theme: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'SocratifyMe',
    tech: ['LangGraph', 'AWS Bedrock', 'OpenSearch', 'Streamlit'],
    link: 'https://github.com/aishasartaj/socratifyme',
    github: 'https://github.com/aishasartaj/socratifyme',
    blurb: 'Multi-agent tutor pipeline for conceptual exploration through Socratic dialogue',
    timeline: '2024 - Present',
    image: '/img/socratifyme.jpg',
    category: 'ml',
  },
  {
    id: '2',
    title: 'Emotion-Aware Call Analysis',
    tech: ['Hume AI', 'Python', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com/aishasartaj/emotion-analysis',
    github: 'https://github.com/aishasartaj/emotion-analysis',
    blurb: 'Real-time emotion detection and analysis for sales calls using prosodic features',
    timeline: '2024',
    image: '/img/emotion-analysis.jpg',
    category: 'ml',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://buildwithaisha.com',
    github: 'https://github.com/aishasartaj/portfolio',
    blurb: 'Interactive portfolio with custom animations and accessibility-first design',
    timeline: '2024',
    image: '/img/portfolio.jpg',
    category: 'web',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovators Inc',
    role: 'AI/ML Engineer',
    period: '2023 - Present',
    impact: 'Built emotion-aware pipeline with Hume AI, processing 10K+ calls/month with 94% accuracy',
    takeaway: 'Learned to balance model complexity with production constraints',
    image: '/img/exp-1.jpg',
  },
  {
    id: '2',
    company: 'Data Solutions Co',
    role: 'Software Engineer',
    period: '2021 - 2023',
    impact: 'Architected real-time analytics platform serving 50K+ daily users with <200ms latency',
    takeaway: 'Discovered the power of simple, well-tested systems',
    image: '/img/exp-2.jpg',
  },
];

export const nowBuilding: NowBuilding[] = [
  {
    id: '1',
    title: 'SocratifyMe',
    desc: 'Multi-agent tutor pipeline for conceptual exploration using Socratic dialogue',
    github: 'https://github.com/aishasartaj/socratifyme',
    status: 'pushing updates weekly',
    stack: ['LangGraph', 'AWS Bedrock', 'OpenSearch', 'Streamlit'],
  },
];

export const exploring: Exploring[] = [
  {
    id: '1',
    type: 'course',
    label: 'Deep RL with Hugging Face',
    takeaway: 'Understanding policy gradient stability',
  },
  {
    id: '2',
    type: 'book',
    label: 'Designing Data-Intensive Applications',
    takeaway: 'Rethinking distributed system trade-offs',
  },
  {
    id: '3',
    type: 'framework',
    label: 'LangGraph Multi-Agent Patterns',
    takeaway: 'Exploring agent orchestration techniques',
  },
  {
    id: '4',
    type: 'conference',
    label: 'NeurIPS 2024',
    takeaway: 'Tracking advances in interpretability',
  },
];

export const liveSession: LiveSession = {
  when: 'Oct 20, 2024 @ 6pm EST',
  theme: 'Fine-tuning LoRA Adapters on Feedback Examples 🎥',
  href: 'https://youtube.com/@buildwithaisha',
};

export const skills = {
  'AI / ML': ['PyTorch', 'LangGraph', 'Hugging Face', 'RAG', 'Hume AI', 'AWS Bedrock'],
  'Data & Cloud': ['SQL', 'PostgreSQL', 'AWS', 'Docker', 'MLflow', 'OpenSearch'],
  'Development & Tools': ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Streamlit', 'FastAPI'],
};


