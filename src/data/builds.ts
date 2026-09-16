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
    title: "Local RAG Compliance Assistant",
    year: "2026",
    body: "A privacy-preserving document review tool that runs entirely on local hardware — no documents leave the machine. Hybrid BM25 and vector retrieval over a ChromaDB store, with Docling parsing PDFs and a folder watcher indexing new files as they arrive. Ollama serves the model locally; FastAPI backend, React frontend.",
    stack: ["Ollama", "ChromaDB", "LangChain", "FastAPI", "React", "Docling"],
    size: "featured",
    repo: "https://github.com/roshansrini26/local-rag-dashboard",
  },
  {
    title: "Real-Time Radiation Tracking Pipeline",
    year: "2026",
    body: "TU Hamburg Big Data Lab project. Streams live sensor readings through Kafka and Flink into a FastAPI backend, plotted in real time on a React and Leaflet map, deployed on AWS EC2.",
    stack: ["Kafka", "Flink", "FastAPI", "React", "AWS EC2"],
    size: "featured",
    repo: "",
  },
    {
    title: "EU Scholarship Search Engine",
    year: "2026",
    body: "Scholarship listings across the EU sat scattered over dozens of university and funding sites. Scraped them into a single structured database and built an NLP search over it using cosine similarity on text embeddings, improving match accuracy by around 40% over keyword search. Shipped as a dashboard so students search one place instead of browsing site by site.",
    stack: ["Python", "Web scraping", "NLP", "Streamlit"],
    size: "wide",
    repo: "https://github.com/vinay-hs/Walwin/tree/feature/StreamlitUI",
  },
    {
    title: "HCAI Web App",
    year: "2026",
    body: "Django app covering active learning and model-explainability workflows.",
    stack: ["Django", "Python"],
    size: "wide",
    repo: "https://github.com/NSVEGUR/human-centric-artificial-intelligence",
  },
    {
    title: "Excel Data Consolidation Pipeline",
    year: "2026",
    body: "A VBA tool that scans a folder of inconsistently formatted Excel exports, auto-detects header rows, maps varying column names to a standard schema, and normalises units into one consolidated table. Rows are flagged PASS, WARN or REJECT with reasons written to an audit log, so rejected records stay visible instead of silently disappearing. Validated on 180 rows across 4 files with deliberately injected defects — offset headers, multi-sheet workbooks, German decimal commas, censored values, missing identifiers.",
    stack: ["VBA", "Excel", "Python"],
    repo: "https://github.com/roshansrini26/assay-pipeline-automation",
  },
    {
    title: "Barbell Exercise Classifier",
    year: "2025",
    body: "End-to-end ML pipeline classifying six barbell exercises from raw accelerometer and gyroscope data. Cleaned the signal with outlier detection including Chauvenet's criterion, then used PCA and Fourier transforms for feature extraction and dimensionality reduction. Benchmarked several models — a neural network gave the best classification accuracy.",
    stack: ["Python", "TensorFlow", "scikit-learn", "pandas", "NumPy"],
    size: "wide",
    repo: "https://github.com/roshansrini26/code_fitness_tracker_ml",
  },
    {
    title: "Financial Data Quality & Revenue Analytics",
    year: "2026",
    body: "Scraped financial data from the web and parsed it into structured form, then ran pandas-based validation rules across Excel-sourced datasets to catch correctness and validity problems before they reached analysis. Designed the data model and built Power BI dashboards for revenue reporting on top of the cleaned data.",
    stack: ["Python", "pandas", "Power BI", "Web scraping"],
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
  {
    cat: "Programming",
    items: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    cat: "AI/ML Technologies",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "RAG", "Embeddings", "OpenCV", "LangChain"],
  },
  
  {
    cat: "Data Science and Engineering",
    items: ["Pandas", "Numpy","Kafka", "Flink", "ETL pipelines", "Automation"],
  },
  {
    cat: "Cloud & Tools",
    items: ["AWS", "Docker", "n8n", "Git", "Linux", "FastAPI"],
  },
  {
    cat: "Agile",
    items: ["Scrum", "Agile"],
  },
];