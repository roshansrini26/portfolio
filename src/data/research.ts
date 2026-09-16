export interface ResearchItem {
  title: string;
  year: string;
  body: string;
  stack: string[];
  link?: string; // GitHub URL — omit or leave empty if there's no public repo
  note?: string; // live demo URL — optional
}

export const researchItems: ResearchItem[] = [
  {
    title: "Gram-negative Permeability Prediction Tool",
    year: "2026",
    body: "Compound permeability data for Gram-negative bacteria sat scattered across public sources with incompatible schemas. Consolidated it into a single dataset — benchmarked XGBoost against multi-task neural networks for permeability classification. XGBoost performed best at 0.87 ROC-AUC, with SHAP analysis for interpretability and applicability domain checks to flag where the model shouldn't be trusted. Part of COMBINE, an EU IMI-funded research consortium at Fraunhofer ITMP.",
    stack: ["Python", "XGBoost", "Neural networks", "SHAP", "pandas"],
    link: "",
  },

  {
    title: "Quantum Assisted Brain Tumour classification using Deep learning",
    year: "2025",
    body: "Developed a quantum–classical hybrid method that preprocesses brain tumour MRI data using quantum circuits for feature extraction and then classifies it with a fully connected deep learning model, achieving up to 4× faster inference and higher accuracy than standard deep learning approaches in medical imaging.",
    stack: ["Python", "Deep learning", "Open CV"],
  },

  {
    title: "Optimizing Lung Cancer Classification prediction based on Random forest and SMOTE techniques",
    year: "2024",
    body: "Developed an ML-based model utilizing Random Forest on a lung cancer dataset, achieving 98% accuracy and an F1 score of 99%. Addressed class imbalance with SMOTE, significantly improving classification performance.",
    stack: ["Python", "Random Forest", "SMOTE"],
    link: "https://ieeexplore.ieee.org/abstract/document/10718616",
  },
];