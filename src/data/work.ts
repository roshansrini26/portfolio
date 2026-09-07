export interface Role {
  title: string;
  year: string;
  bullets?: string[];
  tags?: string[];
}

export interface Entry {
  year: string;
  role: string;
  org: string;
  body?: string;
  bullets?: string[];
  tags?: string[];
  roles?: Role[];
}

// Newest first — the first item in each track gets the highlighted dot.
export const professional: Entry[] = [
  {
    year: "Feb 26 – Aug 26",
    role: "Research Intern",
    org: "Fraunhofer ITMP, Hamburg",
    body: "Three projects across predictive modelling, clinical tooling, and sensor data engineering.",
    bullets: [
      "COMBINE (EU IMI-funded): consolidated compound data scattered across multiple public sources into a single dataset under one schema, giving the team one reference set instead of several incompatible ones.",
      "COMBINE: benchmarked machine learning and deep learning models for compound permeability classification on that dataset; XGBoost performed best at 0.87 ROC-AUC.",
      "Built an analysis dashboard letting clinicians cross-verify model output against real-world cases, cutting a review from roughly two hours to thirty minutes.",
      "SYNTHIA: merged multi-sensor time-series readings into reproducible, analysis-ready pipelines, bringing compute load for downstream modelling down from 75% to 45%.",
    ],
    tags: ["XGBoost", "Deep learning", "Python", "pandas", "scikit-learn"],
  },
  {
    year: "Nov 25 – Apr 26",
    role: "Software Developer & Scrum Master",
    org: "Walwin × TUHH Fishing for Experience, Hamburg",
    body: "Built a central scholarship search tool and ran the team's Scrum process.",
    bullets: [
      "Scraped scholarship listings from sources scattered across the EU into a single structured database, replacing a search that previously meant visiting each site individually.",
      "Built an NLP search engine using cosine similarity over text embeddings, improving match accuracy by around 40% and cutting the search from hours to seconds.",
      "Shipped it as a dashboard giving students one place to search, with matched results ranked by relevance.",
      "Ran Scrum for the team: sprint planning, task assignment, workload tracking, and progress reporting to project stakeholders.",
    ],
    tags: ["Python", "Web scraping", "NLP", "Streamlit", "Scrum"],
  },
  {
    year: "Dec 24 - May 25",
    role: "Data Science & Analytics Intern",
    org: "Motiv AI",
    body: "Sensor data validation and machine learning features for a mobile telematics product.",
    bullets: [
      "Automated validation of mobile sensor readings from multiple sources in Excel, checking for missing and faulty data — cutting the process to 60% less time than the manual workflow it replaced.",
      "Delivered the validated datasets to the Centre of Excellence for Zero Emission Trucking (CoEZET) at IIT Madras for downstream modelling.",
      "Contributed to a feature detecting accident triggers from mobile sensor signals.",
      "Worked on a machine learning model predicting mode of transport from sensor data.",
    ],
    tags: ["Python", "Machine learning", "VBA", "Excel", "Sensor data"],
  },
];

export const academic: Entry[] = [
  {
    year: "2025 – present",
    role: "MSc Data Science",
    org: "Technical University of Hamburg-Harburg",
    bullets: [
      "Coursework in linear models and regression, big data, information geometry, and software testing.",
    ],
  },
  {
    year: "2021 – 25",
    role: "BTech Computer Science & Engineering",
    org: "Amrita Vishwa Vidyapeetham, Chennai",
    bullets: [
      "First Class with Distinction — CGPA 8.44/10.",
      "Thesis: Quantum-Assisted Deep Learning for Secure Brain Tumour Image Classification.",
      "Runner-up, Smart India Hackathon 2022.",
      "Campus coordinator — handled communication between the institution and parents.",
      "Campus basketball team; trained teammates for inter-college matches.",
    ],
  },
];

export const clubs: Entry[] = [
  {
    year: "2025 – 27",
    role: "e-gnition",
    org: "TU Hamburg Formula Student",
    roles: [
      {
        title: "Driverless Department",
        year: "2026 – 27",
        bullets: ["Add what you're working on."],
        tags: [],
      },
      {
        title: "Web Developer, Operations",
        year: "2025 – 26",
        bullets: [
          "Maintained the team's public website and integrated new features.",
          "Coordinated and managed team events alongside the development work.",
        ],
        tags: ["Angular", "TypeScript"],
      },
    ],
  },
    {
    year: "2023 - 2024",
    role: "Management Lead",
    org: "Google Developer Student Club, Amrita Chennai",
    body: "Ran technical events and workshops for the campus developer community.",
    bullets: [
      "Organised technical workshops and events, coordinating across departments to keep sessions on schedule and resolve problems as they came up.",
      "Led organisation of Tantrotsav 2022, a two-day campus tech fest, running the event workflow end to end.",
      "Built an online booking system in React with the team to handle visitor registration, replacing on-the-day sign-ups.",
      "Pitched the fest to sponsors in person, securing backing and bringing in startups to showcase their technology.",
    ],
    tags: ["React", "Event management", "Sponsorship"],
  },
];
