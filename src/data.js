import HeroImage from "/assets/hero-img.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/nextjs.png";
import Tools3 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/nodejs.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/tailwind.png";
import Tools7 from "/assets/tools/bootstrap.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Next JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "React JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "JavaScript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Preorder Food Platform",
    desk: "Full-stack food preorder application with shopping cart, order management, and admin dashboard. Built for real-world food business operations.",
    tools: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "Midtrans"],
    dad: "100",
    github: "https://github.com/SalmanZulkarnain/preorder-app",
    demo: "https://preorder-app-pi.vercel.app/"
  },
];
