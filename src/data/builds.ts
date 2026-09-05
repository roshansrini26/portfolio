export interface Build {
  title: string;
  year: string;
  body: string;
  stack: string[];
  size?: "featured" | "wide" | "normal"; // defaults to normal
  repo?: string; // GitHub URL — omit or leave empty if there's no public repo
  demo?: string; // live demo URL — optional
}

// Newest first. Use "featured" for your two or three strongest projects —
// they get a bigger tile and show the full description. Keep it to two or
// three, or nothing stands out. Grid auto-fills gaps, so order is flexible.
export const builds: Build[] = [
  {
    title: "Real-Time Radiation Tracking Pipeline",
    year: "2026",
    body: "TU Hamburg Big Data Lab project. Streams live sensor readings through Kafka and Flink into a FastAPI backend, plotted in real time on a React and Leaflet map, deployed on AWS EC2.",
    stack: ["Kafka", "Flink", "FastAPI", "React", "AWS EC2"],
    size: "featured",
    repo: "",
  },
  {
    title: "Quantum-Classical MRI Classifier",
    year: "2024",
    body: "Bachelor's thesis. A hybrid pipeline pairing quantum circuits with a classical deep network to classify brain tumour MRIs, reaching ~96% accuracy.",
    stack: ["PennyLane", "PyTorch", "Python"],
    size: "featured",
    repo: "",
  },
  {
    title: "Multi-Omics Factor Analysis",
    year: "2026",
    body: "Factor analysis over a large public cancer dataset to surface latent structure across data types.",
    stack: ["MOFA", "Python"],
    size: "wide",
    repo: "",
  },
  {
    title: "HCAI Web App",
    year: "2025",
    body: "Django app covering active learning and model-explainability workflows.",
    stack: ["Django", "Python"],
    repo: "",
  },
  {
    title: "Spreadsheet Consolidation Pipeline",
    year: "2024",
    body: "VBA macros consolidating scattered multi-source spreadsheets into one clean workbook.",
    stack: ["Excel", "VBA"],
    repo: "",
  },

  // --- Copy this block for each new project ---
  // {
  //   title: "",
  //   year: "",
  //   body: "",
  //   stack: [""],
  //   size: "normal",   // "featured" | "wide" | "normal"
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
