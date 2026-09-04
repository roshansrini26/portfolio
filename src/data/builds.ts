export interface Build {
  title: string;
  body: string;
  stack: string[];
  wide?: boolean;
  href?: string;
}

export const builds: Build[] = [
  {
    title: "Quantum-Classical MRI Classifier",
    body: "Bachelor's thesis. A hybrid pipeline pairing quantum circuits with a classical deep network to classify brain tumour MRIs, reaching ~96% accuracy.",
    stack: ["PennyLane", "PyTorch", "Python"],
  },
  {
    title: "Real-Time Radiation Tracking Pipeline",
    body: "TU Hamburg Big Data Lab project. Streams sensor readings through Kafka and Flink to a FastAPI backend, plotted live on a React/Leaflet map, deployed on AWS EC2.",
    stack: ["Kafka", "Flink", "FastAPI", "React", "Leaflet", "AWS EC2"],
  },
  {
    title: "Multi-Omics Factor Analysis",
    body: "Lab rotation project applying factor analysis to a large public cancer dataset to surface latent structure across data types — full manuscript, presentation, and post-review debrief.",
    stack: ["MOFA", "Python"],
  },
  {
    title: "HCAI Web App",
    body: "Django application built with course teammates covering active learning and model-explainability workflows.",
    stack: ["Django", "Python"],
  },
  {
    title: "Spreadsheet Consolidation Pipeline",
    body: "Personal project — VBA macros consolidating scattered multi-source spreadsheets into one clean workbook.",
    stack: ["Excel", "VBA"],
    wide: true,
  },
];

export const skills: { cat: string; items: string[] }[] = [
  { cat: "Core", items: ["Python", "SQL"] },
  { cat: "ML / Data", items: ["pandas", "scikit-learn", "XGBoost", "PyTorch", "SHAP"] },
  { cat: "Research / QML", items: ["PennyLane"] },
  { cat: "Agentic / LLM", items: ["LangChain"] },
  { cat: "Infra & Tools", items: ["Docker", "Git", "AWS"] },
  { cat: "Frontend / Viz", items: ["React", "Power BI"] },
];
