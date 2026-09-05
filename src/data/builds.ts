export interface Build {
  title: string;
  body: string;
  stack: string[];
  repo?: string; // GitHub URL — omit if the project has no public repo
  demo?: string; // live demo URL — optional
  wide?: boolean; // spans the full grid width
}

export const builds: Build[] = [
  {
    title: "Quantum-Classical MRI Classifier",
    body: "Bachelor's thesis. A hybrid pipeline pairing quantum circuits with a classical deep network to classify brain tumour MRIs, reaching ~96% accuracy.",
    stack: ["PennyLane", "PyTorch", "Python"],
    repo: "",
  },
  {
    title: "Real-Time Radiation Tracking Pipeline",
    body: "TU Hamburg Big Data Lab project. Streams sensor readings through Kafka and Flink to a FastAPI backend, plotted live on a React/Leaflet map, deployed on AWS EC2.",
    stack: ["Kafka", "Flink", "FastAPI", "React", "AWS EC2"],
    repo: "",
  },
  {
    title: "Multi-Omics Factor Analysis",
    body: "Lab rotation project applying factor analysis to a large public cancer dataset to surface latent structure across data types — full manuscript, presentation, and post-review debrief.",
    stack: ["MOFA", "Python"],
    repo: "",
  },
  {
    title: "HCAI Web App",
    body: "Django application built with course teammates covering active learning and model-explainability workflows.",
    stack: ["Django", "Python"],
    repo: "",
  },
  {
    title: "Spreadsheet Consolidation Pipeline",
    body: "Personal project — VBA macros consolidating scattered multi-source spreadsheets into one clean workbook.",
    stack: ["Excel", "VBA"],
    repo: "",
  },

  // --- Add new projects below. Delete a `repo` line if there's no public repo. ---
  // {
  //   title: "",
  //   body: "",
  //   stack: [""],
  //   repo: "",
  //   demo: "",
  // },
];

export const skills: { cat: string; items: string[] }[] = [
  { cat: "Programming", items: ["Python", "SQL", "JavaScript", "VBA"] },
  {
    cat: "Machine Learning",
    items: ["PyTorch", "scikit-learn", "XGBoost", "SHAP", "BERT", "PennyLane"],
  },
  {
    cat: "Data Science",
    items: ["pandas", "NumPy", "Statistical testing", "Streamlit", "Power BI"],
  },
  {
    cat: "Data Engineering",
    items: ["Kafka", "Flink", "FastAPI", "Docker"],
  },
  { cat: "Cloud & Tools", items: ["AWS", "Git", "Linux"] },
  { cat: "Ways of Working", items: ["Scrum", "Agile", "Technical writing"] },
];
