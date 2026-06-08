import { Compass, Workflow, DatabaseZap, LineChart, ShieldCheck, Sparkles } from 'lucide-react'

export const services = [
  {
    icon: Compass,
    title: 'AI Opportunity Audit',
    summary: 'Map where AI can create measurable value before investing in large implementation.',
    deliverables: ['AI use case map', 'ROI potential ranking', 'Risk and feasibility review', 'Implementation roadmap'],
    fit: 'Best for teams that want to start with clarity rather than random AI experiments.',
  },
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    summary: 'Turn repetitive business processes into AI-assisted workflows your team can actually use.',
    deliverables: ['Process redesign', 'Agent-assisted tasks', 'Email and document automation', 'CRM and spreadsheet sync'],
    fit: 'Best for operations-heavy businesses with repeated manual work.',
  },
  {
    icon: DatabaseZap,
    title: 'Internal Knowledge AI',
    summary: 'Make company knowledge searchable, conversational, and useful across documents and systems.',
    deliverables: ['Document ingestion', 'Knowledge assistant', 'Role-based answers', 'Source-linked responses'],
    fit: 'Best for firms with PDFs, Word files, Excel files, emails, Notion or Drive content.',
  },
  {
    icon: LineChart,
    title: 'AI Management Layer',
    summary: 'Use AI to surface business issues, summarize operations, and support management decisions.',
    deliverables: ['Weekly operating reports', 'KPI anomaly detection', 'Task progress summaries', 'Management insight dashboard'],
    fit: 'Best for founders and managers who need visibility across teams and workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Moat Building',
    summary: 'Convert domain expertise, proprietary data, and workflows into long-term AI capability.',
    deliverables: ['Data strategy', 'Workflow architecture', 'Custom AI assistant', 'AI governance model'],
    fit: 'Best for companies that want AI to become a competitive advantage, not a tool subscription.',
  },
  {
    icon: Sparkles,
    title: 'Custom AI System Build',
    summary: 'Design and build custom AI products, internal platforms, and operational systems.',
    deliverables: ['Prototype design', 'Frontend and dashboard', 'AI integration', 'Deployment-ready system'],
    fit: 'Best for businesses building a unique AI-enabled product or internal system.',
  },
]

export const workModels = [
  {
    title: 'AI Discovery Sprint',
    period: '2–4 weeks',
    description: 'A focused diagnostic engagement to identify practical AI opportunities and the best first project.',
  },
  {
    title: 'AI Workflow Pilot',
    period: '4–8 weeks',
    description: 'A small but real implementation that validates value through one workflow or team process.',
  },
  {
    title: 'AI Transformation Retainer',
    period: '3–12 months',
    description: 'Ongoing strategy, automation, and system-building support for businesses serious about AI transformation.',
  },
  {
    title: 'Custom AI System Build',
    period: 'Project-based',
    description: 'A dedicated build for AI-native systems, dashboards, internal tools, or product prototypes.',
  },
]
