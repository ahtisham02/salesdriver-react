import exactMailsLogo from '../assets/new_assets/logo/exactmails (2).png';
import traferaLogo from '../assets/new_assets/logo/trafera.io.png';
import mtnVerifyLogo from '../assets/new_assets/logo/mtnverify (2).png';
import mtnDataLogo from '../assets/new_assets/logo/mtndata (2).png';
import hyperPitchLogo from '../assets/new_assets/logo/hyperpitch (2).png';
import salesDriverLogo from '../assets/new_assets/logo/salesdriver.png';
import {
    AtSign,
    Database,
    MousePointerClick,
    ShieldCheck,
    Sparkles,
    Video,
    Phone,
    Bot
} from 'lucide-react';

import exactMailsImg from '../assets/new_assets/DeepDive/exactmails.png';
import mtnDataImg from '../assets/new_assets/DeepDive/mtndata.png';
import traferaImg from '../assets/new_assets/DeepDive/trafera.png';
import mtnVerifyImg from '../assets/new_assets/DeepDive/mtnverify.png';
import enrichyImg from '../assets/new_assets/DeepDive/enrichy.png';
import hyperPitchImg from '../assets/new_assets/DeepDive/hyperpitch.png';
import callixImg from '../assets/new_assets/DeepDive/callix.png';
import aisdrImg from '../assets/new_assets/DeepDive/aisdr.png';

export const toolsData = {
    'exact-mails': {
        name: 'Exact Mails',
        logo: exactMailsLogo,
        image: exactMailsImg,
        icon: AtSign,
        tagline: 'Precision-Engineered Email Discovery',
        description: 'Finds verified business emails tied to real prospects with surgical precision. Our algorithms cross-reference multiple data points to ensure the highest accuracy in the industry.',
        longDescription: 'Exact Mails is not just another email finder. It is a sophisticated discovery engine that respects your domain health. By utilizing multi-step verification and real-time validation, we provide emails that are ready for immediate outreach. Whether you are building a new pipeline or refreshing an old CRM, Exact Mails delivers the clean, structured data your SDRs need to win.',
        whyItMatters: 'Clean, predictable, and structured for high-volume teams. Stop burning domains on unverified guesses.',
        features: [
            {
                title: 'Multi-Step Verification',
                desc: 'Every email undergoes a rigorous 7-step verification process before it reaches your list.'
            },
            {
                title: 'Real-Time Discovery',
                desc: 'We fetch fresh data in real-time to avoid the pitfalls of stale databases.'
            },
            {
                title: 'Global Domain Health Protection',
                desc: 'Built-in safety checks to ensure your email reputation remains pristine.'
            },
            {
                title: 'CRM Integration',
                desc: 'Seamlessly push discovered emails directly into your existing sales workflow.'
            }
        ],
        useCases: [
            'Build accurate contact lists from scratch',
            'Replace outdated and bounced CRM emails',
            'Supply SDRs with high-intent lead data',
            'Fill missing emails from ICP target lists'
        ],
        howItWorks: [
            'Define your target persona or company list.',
            'Exact Mails scans the global web for matching profiles.',
            'Our proprietary verification engine validates the email addresses.',
            'Export your clean, verified list to your preferred CRM or CSV.'
        ],
        highlights: [
            '99% accuracy rate',
            'Real-time lead discovery',
            'Domain health protection',
            'Seamless CRM sync'
        ]
    },
    'mtn-data': {
        name: 'MTN Data',
        logo: mtnDataLogo,
        image: mtnDataImg,
        icon: Database,
        tagline: 'Company and Contact Intelligence',
        description: 'Delivers detailed company data, job titles, revenue, signals, and contact attributes for superior targeting.',
        longDescription: 'MTN Data provides the context required for modern B2B sales. Instead of just "more leads," we provide "better intelligence." Understand company size, revenue growth, tech stacks, and organizational hierarchy. Our datasets are constantly updated to reflect the dynamic nature of the business world, giving you a competitive edge in every conversation.',
        whyItMatters: 'Get structured intelligence instead of just guesswork. Precision targeting leads to higher conversion rates.',
        features: [
            {
                title: 'Deep Firmographics',
                desc: 'Detailed insights into company revenue, employee count, industry, and location.'
            },
            {
                title: 'Buying Signals',
                desc: 'Track intent signals like funding rounds, tech spending, and hiring trends.'
            },
            {
                title: 'Advanced Persona Intent Mapping',
                desc: 'Identify decision-makers and influencers within target accounts automatically.'
            },
            {
                title: 'Market Segmentation',
                desc: 'Create ultra-targeted segments based on custom intelligence filters.'
            }
        ],
        useCases: [
            'ICP building and refinement',
            'Detailed account-based research',
            'Sales territory mapping search',
            'Competitive intelligence gathering'
        ],
        howItWorks: [
            'Search for companies using advanced filters.',
            'Access deep firmographic and technographic data.',
            'Identify key stakeholders within those organizations.',
            'Download enriched profiles for your outreach strategy.'
        ],
        highlights: [
            'Deep company intelligence',
            'Intent signal tracking',
            'Global data coverage',
            'Multi-source enrichment'
        ]
    },
    'trafera': {
        name: 'TRAFERA.IO',
        logo: traferaLogo,
        image: traferaImg,
        icon: MousePointerClick,
        tagline: 'Visitor Identification & Behavior Tracking',
        description: 'See which companies visit your site and what they click, without relying on outdated tracking methods.',
        longDescription: 'TRAFERA.IO turns your anonymous website traffic into actionable sales opportunities. By identifying the companies visiting your high-intent pages, your team can strike while the iron is hot. We don\'t just show you who visited; we show you their journey, enabling your reps to tailor their outreach based on actual interest.',
        whyItMatters: 'Timing is everything. Know when your ICP is interested before they even fill out a form.',
        features: [
            {
                title: 'Company Reveal',
                desc: 'Identify the specific headquarters and offices visiting your website.'
            },
            {
                title: 'Intent Scoring',
                desc: 'Automatically score visitors based on behavior, duration, and page depth.'
            },
            {
                title: 'Real-time High-Intent Alerts',
                desc: 'Get notified immediately when a strategic account lands on your site.'
            },
            {
                title: 'Integrations',
                desc: 'Sync visitor data with Slack, CRM, or email marketing tools.'
            }
        ],
        useCases: [
            'Identify warm buyers in real-time',
            'Trigger outreach on key account visits',
            'See which content pieces drive the most pipeline',
            'Prioritize follow-ups based on visit frequency'
        ],
        howItWorks: [
            'Install the TRAFERA lightweight tracking script.',
            'Identify anonymous traffic from business IP ranges.',
            'Monitor behavior and intent signals on specific pages.',
            'Convert visitors into leads with timely, relevant outreach.'
        ],
        highlights: [
            'Real-time identification',
            'Behavioral intent tracking',
            'Company visitor reveal',
            'High-intent activity alerts'
        ]
    },
    'mtn-verify': {
        name: 'MTN Verify',
        logo: mtnVerifyLogo,
        image: mtnVerifyImg,
        icon: ShieldCheck,
        tagline: 'Email and Data Validation Suite',
        description: 'Protects deliverability, reduces bounce rates, and ensures your database remains an asset, not a liability.',
        longDescription: 'Data decays fast. MTN Verify ensures your database stays fresh. Our validation suite goes beyond simple syntax checks, verifying server responses and mailbox health to ensure your emails actually arrive. Protect your sender reputation and maximize the ROI of every campaign by cleaning your data at the source.',
        whyItMatters: 'Stop wasting credits on bad data. Protect your domain and stay out of the spam folder.',
        features: [
            {
                title: '99% Accuracy',
                desc: 'Our validation engine is optimized for high-volume B2B deliverability.'
            },
            {
                title: 'Batch Processing',
                desc: 'Upload entire databases and receive cleaned records in minutes.'
            },
            {
                title: 'Advanced Spam Trap Detection',
                desc: 'Avoid damaging blacklists by identifying and removing dangerous emails.'
            },
            {
                title: 'API Integration',
                desc: 'Validate emails at the point of entry in your apps or forms.'
            }
        ],
        useCases: [
            'Pre-campaign list cleaning',
            'Periodic CRM database hygiene',
            'Preventing list decay over time',
            'Protecting new outreach domain reputations'
        ],
        howItWorks: [
            'Upload your email list or connect via API.',
            'MTN Verify runs multi-layer validation checks.',
            'Review the results categorized by status (Valid, Safe, Risky).',
            'Download only the verified, safe-to-send records.'
        ],
        highlights: [
            '99% validation accuracy',
            'Batch list cleaning',
            'Spam trap detection',
            'Deliverability protection'
        ]
    },
    'enrichy': {
        name: 'ENRICHY',
        logo: salesDriverLogo,
        image: enrichyImg,
        icon: Sparkles,
        tagline: 'Deep Profile & Record Enrichment',
        description: 'Turns partial records into strong, usable profiles with multi-source data appending.',
        longDescription: 'ENRICHY is the ultimate tool for rounding out your CRM. If you have an email but no name, or a company name but no revenue data, ENRICHY fills the gaps. We aggregate data from hundreds of public and private sources to give you a 360-degree view of your prospects.',
        whyItMatters: 'Weak profiles lead to weak outreach. Build a database you can actually sell with.',
        features: [
            {
                title: '360° Profile Building',
                desc: 'Append social links, job titles, technologies used, and more.'
            },
            {
                title: 'Company Insights',
                desc: 'Add revenue data, employee count, and office locations automatically.'
            },
            {
                title: 'Real-time Automated Data Updates',
                desc: 'Keep your records current as prospects move jobs or companies grow.'
            },
            {
                title: 'Custom Field Mapping',
                desc: 'Map enriched data exactly to your CRM\'s unique field structure.'
            }
        ],
        useCases: [
            'Account-level research for ABM',
            'Persona-specific enrichment',
            'CRM cleanup and data completion',
            'Lead scoring based on enriched attributes'
        ],
        howItWorks: [
            'Select the records you want to enrich.',
            'Define which data points you need (e.g., LinkedIn URLs, Tech stack).',
            'ENRICHY matches and appends data from our global network.',
            'Accept the changes and update your database.'
        ],
        highlights: [
            '360 profile depth',
            'Automated data appending',
            'Social link extraction',
            'Deep CRM enrichment'
        ]
    },
    'hyperpitch': {
        name: 'HyperPitch.io',
        logo: hyperPitchLogo,
        image: hyperPitchImg,
        icon: Video,
        tagline: 'Mass Personalized Landing Pages',
        description: 'Create unique, personalized landing pages for every prospect in your list automatically.',
        longDescription: 'Standard outreach is ignored. HyperPitch makes it impossible to overlook. By generating unique microsites for every prospect, you demonstrate a level of effort that scales. Each page features the prospect\'s name, company, and personalized content, driving engagement far beyond traditional email or LinkedIn messages.',
        whyItMatters: 'Stand out in a crowded inbox. Personalization at scale is the ultimate deal accelerator.',
        features: [
            {
                title: 'Dynamic Content',
                desc: 'Swap text, images, and videos based on the recipient\'s data.'
            },
            {
                title: 'High-Conversion Templates',
                desc: 'Use proven layouts designed to drive book-a-call actions.'
            },
            {
                title: 'Deep Tracking & Behavior Analytics',
                desc: 'See exactly who opened their page and which sections they engaged with.'
            },
            {
                title: 'One-Click Integration',
                desc: 'Embed personalized links into your existing email sequences.'
            }
        ],
        useCases: [
            'High-tier ABM outreach',
            'Account follow-up and deal acceleration',
            'Personalized video introductions',
            'Event-based lead nurturing'
        ],
        howItWorks: [
            'Upload your lead list and choose a template.',
            'Configure the dynamic personalization fields.',
            'HyperPitch generates a unique URL for every lead.',
            'Include these links in your outreach and track clicks.'
        ],
        highlights: [
            'Personalized video pages',
            'Custom landing microsites',
            'Real-time click tracking',
            'High-conversion layouts'
        ]
    },
    'callix': {
        name: 'CALLIX',
        logo: salesDriverLogo,
        image: callixImg,
        icon: Phone,
        tagline: 'Searchable Call Intelligence & History',
        description: 'Captures, transcribes, and organizes every sales call into a searchable asset for your team.',
        longDescription: 'Don\'t let valuable conversation data disappear as soon as you hang up. CALLIX acts as your team\'s collective memory. By transcribing every call and using AI to extract key insights, you ensure that context is shared across the organization and that no follow-up is ever missed.',
        whyItMatters: 'Call history is an asset, not a blind spot. Turn conversations into strategic data.',
        features: [
            {
                title: 'AI Transcription',
                desc: 'Highly accurate speech-to-text in multiple languages.'
            },
            {
                title: 'Keyword Tracking',
                desc: 'Identify when competitors, price, or specific pain points are mentioned.'
            },
            {
                title: 'Intelligent AI Note Organization',
                desc: 'Collaborative notes linked specifically to timestamps in the audio.'
            },
            {
                title: 'Deal Analysis',
                desc: 'AI-driven insights into deal sentiment and progression.'
            }
        ],
        useCases: [
            'Coaching and QA for SDRs/AEs',
            'Detailed pipeline reviews and forecasting',
            'Clarifying handoffs between sales and CS',
            'Collecting customer feedback for product teams'
        ],
        howItWorks: [
            'Connect CALLIX to your phone system or meeting platform.',
            'Recordings are automatically uploaded and transcribed.',
            'Search through calls for specific topics or keywords.',
            'Share highlights and insights with your team.'
        ],
        highlights: [
            'AI voice transcripts',
            'Keyword search history',
            'Sentiment analysis asset',
            'Seamless team sharing'
        ]
    },
    'aisdr-light': {
        name: 'AI SDR (LIGHT)',
        logo: salesDriverLogo,
        image: aisdrImg,
        icon: Bot,
        tagline: 'Intelligent Automation Support',
        description: 'Lightweight AI assistance to handle repetitive outreach tasks without losing the human touch.',
        longDescription: 'AI SDR (Light) is designed to assist, not replace, your sales team. It handles the "boring stuff"—drafting initial responses, scheduling follow-ups, and routing qualified leads—so your reps can focus on high-value human interactions. It is automation that feels personal, not robotic.',
        whyItMatters: 'Maximize efficiency without sacrificing quality. The perfect balance of AI and human sales.',
        features: [
            {
                title: 'Smart Response Drafting',
                desc: 'Generate relevant replies to inbound interest based on context.'
            },
            {
                title: 'Follow-up Logic',
                desc: 'Automatically trigger the next step in a sequence based on lead behavior.'
            },
            {
                title: 'Smart High-Priority Lead Routing',
                desc: 'Move qualified prospects to the right rep instantly.'
            },
            {
                title: 'Custom Persona Work',
                desc: 'Train the AI on your brand voice and specific selling style.'
            }
        ],
        useCases: [
            'Scaling outbound without adding headcount',
            'Handling simple inbound inquiries',
            'Maintaining consistent follow-up hygiene',
            'Drafting first-draft outreach for rep review'
        ],
        howItWorks: [
            'Connect your email or messaging channels.',
            'Configure your outreach templates and AI instructions.',
            'Review and approve drafted messages or let the AI handle routine follow-ups.',
            'Monitor performance and refine the AI\'s approach.'
        ],
        highlights: [
            'Intelligent draft engine',
            'Automated lead routing',
            'Smart follow-up logic',
            'Scalable outreach AI'
        ]
    }
};
