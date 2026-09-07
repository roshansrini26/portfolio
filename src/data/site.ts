export const site = {
  name: "Roshan Srinivasan",
  role: "AI and Machine Learning Engineer",
  title: "portfolio",
  description:
    "MSc Data Science candidate at TU Hamburg. Machine learning that holds up outside the notebook.",
  url: "https://roshansrini.vercel.app",
  location: "Hamburg, Germany",
  email: "roshansrini26@gmail.com",
  github: "https://github.com/roshansrini26",
  linkedin: "www.linkedin.com/in/roshansrini26", // add your LinkedIn URL here
  scholar: "", // Google Scholar profile URL
  huggingface: "https://huggingface.co/roshan2610", // Hugging Face profile URL
  availability: "Open to working student roles",
  facts: [
    "Msc Student at TUHH","Formula Student Germany (Egnition Hamburg)"
  ],

  // Square photo in public/. Leave empty to show initials instead.
  avatar: "/avatar.jpeg",
  initials: "RS",
  cv: "/cv.pdf", // put your CV at public/cv.pdf

  // Free key from web3forms.com — paste it here and the form starts working.
  formKey: "b919cb8a-ac6d-4d5f-bdc4-9d2d78c04af6",

  shortLocation: "Hamburg",
  timeZone: "Europe/Berlin",
    building: [
    "RAG pipelines with LangChain and LangGraph",
    "Computer vision",
    "Driverless automation",
  ],
    githubUser: "roshansrini26",
};

export const railLinks = [
  { label: "Top", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Builds", href: "#builds" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const interests: string[] = [
  "Where LLMs and agentic systems are actually heading — what holds up in production versus what only works in a demo",
  "Data work as the real bottleneck — most of the value comes from getting the inputs honest before any model touches them",
  "Computer vision, particularly on medical and scientific imaging",
  "Building software that scales — systems that stay reliable when the data volume and the number of people relying on them both grow",
];



// Photos for the profile panel collage. Put them in public/photos/.
// Leave the array empty and the panel shows just the cards.
export const photos: string[] = [];


// Logos for the profile panel. Drop files in public/logos/.
// status: "current" shows under Now, "past" under Previously.
// Leave `logo` empty and it falls back to initials.
export const orgs: {
  name: string;
  logo: string;
  status: "current" | "past";
  url?: string;
}[] = [
  { name: "e-gnition", logo: "/logos/egnition.png", status: "current" },
  { name: "Google Developer Student Club", logo: "/logos/gdsc.png", status: "current" },
  { name: "Fraunhofer ITMP", logo: "/logos/fraunhofer.svg", status: "past" },
  { name: "Walwin", logo: "", status: "past" },
  { name: "Motiv AI", logo: "", status: "past" },
];
