export interface Entry {
  year: string;
  role: string;
  org: string;
  body: string;
  tags?: string[];
}

// Newest first — the first item in each track gets the highlighted dot.
export const professional: Entry[] = [
  {
    year: "2026",
    role: "Research Intern",
    org: "Fraunhofer ITMP, Hamburg",
    body: "Built XGBoost and graph neural network models for an EU-funded pharmaceutical research consortium, plus the internal dashboards researchers used to interrogate them — benchmarking, applicability checks, and SHAP-based interpretability across two datasets. Closed out with a full handover document.",
    tags: ["XGBoost", "Graph neural nets", "SHAP"],
  },
  {
    year: "2025",
    role: "Data Science Intern",
    org: "Walwin — via TUHH Fishing for Experience",
    body: "Built a recommendation model combining BERT embeddings with TF-IDF, shipped as a Streamlit dashboard. Served as Scrum Master for the project team.",
    tags: ["BERT", "TF-IDF", "Streamlit"],
  },
  {
    year: "2023",
    role: "Data Intern",
    org: "Motiv AI",
    body: "Built data validation pipelines for incoming sensor data.",
    tags: ["Python", "Data validation"],
  },
];

export const academic: Entry[] = [
  {
    year: "2025",
    role: "MSc Data Science",
    org: "TU Hamburg",
    body: "Add focus areas or notable coursework.",
  },
  {
    year: "2024",
    role: "BSc — add your degree title",
    org: "Add your university",
    body: "Thesis: a hybrid quantum-classical pipeline for brain tumour MRI classification, reaching ~96% accuracy.",
    tags: ["PennyLane", "PyTorch"],
  },
];

export const clubs: Entry[] = [
  {
    year: "2026",
    role: "Google Developer Student Club",
    org: "Add your role here",
    body: "Describe what you did — sessions run, projects led, people reached.",
    tags: [],
  },
  {
    year: "2025",
    role: "Developer",
    org: "e-gnition — TU Hamburg Formula Student",
    body: "Add what you built for the team and what it enabled.",
    tags: ["Angular"],
  },
];
