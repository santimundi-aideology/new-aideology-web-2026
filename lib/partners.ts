export const partnerCategories = [
  { id: "all", name: "All Partners" },
  { id: "infra-ai", name: "Infra AI" },
  { id: "gen-ai", name: "Gen AI" },
  { id: "3d-ai", name: "3D AI" },
];

// IMPORTANT: This list is sorted and exported as a new array to prevent in-place mutations from affecting other parts of the app.
// Do not modify this logic without understanding the potential side effects.
const partners = [
  // 3D AI Partners
  { name: "Meta", logo: "/partner-logos/meta-logo.webp", categories: ["3d-ai"], website: "https://about.meta.com/" },
  { name: "Autodesk", logo: "/partner-logos/autodesk-logo.webp", categories: ["3d-ai"], website: "https://www.autodesk.com/" },
  { name: "Unity", logo: "/partner-logos/unity-logo.webp", categories: ["3d-ai"], website: "https://unity.com/" },
  { name: "Unreal Engine", logo: "/partner-logos/unreal-logo.webp", categories: ["3d-ai"], website: "https://www.unrealengine.com/" },
  // Infra AI Partners
  { name: "Supermicro", logo: "/partner-logos/supermicro-logo.webp", categories: ["infra-ai"], website: "https://www.supermicro.com/" },
  { name: "Hewlett Packard Enterprise", logo: "/partner-logos/hpe-logo.webp", categories: ["infra-ai"], website: "https://www.hpe.com/" },
  { name: "Dell", logo: "/partner-logos/dell-logo.webp", categories: ["infra-ai"], website: "https://www.dell.com/" },
  { name: "Lenovo", logo: "/partner-logos/lenovo-logo.webp", categories: ["infra-ai"], website: "https://www.lenovo.com/" },
  { name: "NetApp", logo: "/partner-logos/netapp-logo.webp", categories: ["infra-ai"], website: "https://www.netapp.com/" },
  { name: "Cerebras", logo: "/partner-logos/cerebras-logo.webp", categories: ["infra-ai"], website: "https://www.cerebras.net/" },
  { name: "DDN", logo: "/partner-logos/ddn-logo.webp", categories: ["infra-ai"], website: "https://www.ddn.com/" },
  { name: "WEKA", logo: "/partner-logos/weka-logo.webp", categories: ["infra-ai"], website: "https://www.weka.io/" },
  { name: "VAST", logo: "/partner-logos/vast_logo.webp", categories: ["infra-ai"], website: "https://www.vastdata.com/" },
  // Gen AI Partners
  { name: "OpenAI", logo: "/partner-logos/openai-logo.webp", categories: ["gen-ai"], website: "https://openai.com/" },
  { name: "Google", logo: "/partner-logos/google-logo.webp", categories: ["gen-ai"], website: "https://ai.google/" },
  { name: "Hugging Face", logo: "/partner-logos/huggingface-logo.webp", categories: ["gen-ai"], website: "https://huggingface.co/" },
  // Cross-Category Partners
  { name: "TheCliff", logo: "/partner-logos/thecliff-logo.webp", categories: ["3d-ai", "infra-ai"], website: "https://the-cliff.com/" },
  { name: "NVIDIA Omniverse", logo: "/partner-logos/omniverse-logo.webp", categories: ["3d-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/omniverse/" },
  { name: "Run:ai", logo: "/partner-logos/runai-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://www.run.ai/" },
  { name: "Weights & Biases", logo: "/partner-logos/wandb-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://wandb.ai/" },
  // Center Partners
  { name: "Maind", logo: "/partner-logos/maind-logo.webp", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://maind.pro/" },
  { name: "NVIDIA", logo: "/partner-logos/nvidia-logo.webp", categories: ["3d-ai", "infra-ai", "gen-ai"], website: "https://www.nvidia.com/" },
  { name: "NVIDIA NEMO", logo: "/partner-logos/nemo-logo.webp", categories: ["infra-ai", "gen-ai"], website: "https://www.nvidia.com/en-us/ai-data-science/generative-ai/nemo-framework/" },
];

export const allPartners = [...partners].sort((a, b) => a.name.localeCompare(b.name)); 