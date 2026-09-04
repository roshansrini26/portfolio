export interface WorkEntry {
  when: string;
  status: string;
  role: string;
  org: string;
  body: string;
  metrics?: string[];
}

export const work: WorkEntry[] = [
  {
    when: "2026",
    status: "Completed",
    role: "Research Intern",
    org: "Fraunhofer ITMP, Hamburg — EU IMI-funded research consortium",
    body: "Built XGBoost and graph neural network models for a pharmaceutical research project, plus the internal dashboards researchers used to interrogate them — benchmarking, applicability checks, and SHAP-based interpretability across two datasets. Also contributed to two smaller projects: one applying classical hypothesis testing to lab data, another merging multi-source time-series data. Closed out with a full handover document.",
    metrics: ["XGBoost", "Graph neural nets", "SHAP"],
  },
  {
    when: "Ongoing",
    status: "Current",
    role: "Developer",
    org: "e-gnition — TU Hamburg Formula Student",
    body: "Contributing Angular frontend work to the team's public site alongside coursework.",
  },
  {
    when: "Prior",
    status: "Internship",
    role: "Data Science Intern",
    org: "Walwin — via TUHH Fishing for Experience",
    body: "Built a recommendation model combining BERT embeddings with TF-IDF, shipped as a Streamlit dashboard. Served as Scrum Master for the project team.",
  },
  {
    when: "Prior",
    status: "Internship",
    role: "Data Intern",
    org: "Motiv AI",
    body: "Built data validation pipelines for incoming sensor data.",
  },
];
