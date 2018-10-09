import ExperienceValues from './Experience-Values'
import Humancentereddesign from './Human-centered-design'
import AboutChildWelfare from './About-Child-Welfare'
import DesignOpsScrumban from './DesignOps-Scrumban'
import DefinitionofReadyandDone from './Definition-of-Ready-and-Done'
import CeremoniesSessionsandCommunicationChannels from './Ceremonies-Sessions-and-Communication-Channels'
import DesignReview from './Design-Review'
import ComponentLibrary from './Component-Library'
import ContributionGuidelines from './Contribution-Guidelines'
import TechnicalDesignBrief from './Technical-Design-Brief'
import UXUIPrinciples from './UX-UI-Principles'
import AccessibleDesign from './Accessible-Design'
import contentstrategy from './content-strategy'
import TechnologyApproach from './Technology-Approach'
import DiscoveryResearch from './Discovery-Research'
import Tools from './Tools'

export default [
  {
    "title": "CWDS DesignOps",
    "children": [
      {
        "title": "Experience Values",
        "file": "Experience-Values",
        "component": ExperienceValues,
        "slug": "Experience-Values"
      },
      {
        "title": "Human-centered design",
        "file": "Human-centered-design",
        "component": Humancentereddesign,
        "slug": "Human-centered-design"
      },
      {
        "title": "About Child Welfare",
        "file": "About-Child-Welfare",
        "component": AboutChildWelfare,
        "slug": "About-Child-Welfare"
      }
    ],
    "slug": "CWDS-DesignOps"
  },
  {
    "title": "ScrumBan",
    "children": [
      {
        "title": "DesignOps Scrumban",
        "file": "DesignOps-Scrumban",
        "component": DesignOpsScrumban,
        "slug": "DesignOps-Scrumban"
      },
      {
        "title": "DesignOps Definition of Ready/Done",
        "file": "Definition-of-Ready-and-Done",
        "component": DefinitionofReadyandDone,
        "slug": "DesignOps-Definition-of-ReadyDone"
      },
      {
        "title": "Ceremonies, Sessions, and Communication Channels",
        "file": "Ceremonies-Sessions-and-Communication-Channels",
        "component": CeremoniesSessionsandCommunicationChannels,
        "slug": "Ceremonies-Sessions-and-Communication-Channels"
      },
      {
        "title": "Design Review",
        "file": "Design-Review",
        "component": DesignReview,
        "slug": "Design-Review"
      }
    ],
    "slug": "ScrumBan"
  },
  {
    "title": "Component Library",
    "children": [
      {
        "title": "Component Library",
        "file": "Component-Library",
        "component": ComponentLibrary,
        "slug": "Component-Library"
      },
      {
        "title": "Contribution Guidelines",
        "file": "Contribution-Guidelines",
        "component": ContributionGuidelines,
        "slug": "Contribution-Guidelines"
      },
      {
        "title": "Technical Design Brief",
        "file": "Technical-Design-Brief",
        "component": TechnicalDesignBrief,
        "slug": "Technical-Design-Brief"
      },
      {
        "title": "UX/UI Principles",
        "file": "UX-UI-Principles",
        "component": UXUIPrinciples,
        "slug": "UXUI-Principles"
      },
      {
        "title": "Accessible Design",
        "file": "Accessible-Design",
        "component": AccessibleDesign,
        "slug": "Accessible-Design"
      },
      {
        "title": "Content Strategy",
        "file": "content-strategy",
        "component": contentstrategy,
        "slug": "Content-Strategy"
      },
      {
        "title": "Technology Approach",
        "file": "Technology-Approach",
        "component": TechnologyApproach,
        "slug": "Technology-Approach"
      }
    ],
    "slug": "Component-Library"
  },
  {
    "title": "Research",
    "children": [
      {
        "title": "Conducting Discovery Research",
        "file": "Discovery-Research",
        "component": DiscoveryResearch,
        "slug": "Conducting-Discovery-Research"
      }
    ],
    "slug": "Research"
  },
  {
    "title": "The Team",
    "children": [
      {
        "title": "Tools",
        "file": "Tools",
        "component": Tools,
        "slug": "Tools"
      }
    ],
    "slug": "The-Team"
  }
]