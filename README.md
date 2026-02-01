# Juan Peruzzo | Personal Portfolio

A modern, high-performance personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project showcases my professional journey, skills, and the software engineering projects I've built.

## 🚀 Technologies

This project leverages a modern tech stack for performance, accessibility, and developer experience:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) & [React Simple Typewriter](https://github.com/awibox/react-simple-typewriter)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## ✨ Key Features

- **🌍 Internationalization (i18n)**: Fully localized in both Portuguese and English with a custom dictionary-based implementation.
- **🌗 Dark Mode**: Beautifully crafted dark and light themes that respect system preferences.
- **📱 Fully Responsive**: Optimized for all screen sizes, from mobile to ultra-wide monitors.
- **⚡ Performance First**: Optimized images, fonts (Geist Sans/Mono), and zero-jitter layout stabilizers.
- **🛠️ Modular Architecture**: Clean and organized codebase following React best practices with separated components, sections, and logic.

## 📁 Project Structure

```bash
├── app/                  # Next.js App Router (pages and layouts)
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── globals.css       # Tailwind 4 global styles
│   ├── icon.svg          # Site favicon (SVG)
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Homepage (Hero + Featured Projects)
│   └── projects/         # Projects list page
├── components/           # React components
│   ├── layout/           # Shared layout (Header, Footer)
│   ├── sections/         # Page-specific sections (Hero, FeaturedProjects)
│   ├── ui/               # Base UI components (Button, Card, ProjectCard, etc.)
│   ├── language-context.tsx # i18n Context provider
│   ├── language-toggle.tsx  # Language switcher component
│   ├── mode-toggle.tsx      # Theme switcher component
│   └── theme-provider.tsx   # Next-themes provider
├── lib/                  # Shared utilities and data
│   ├── dictionaries/     # i18n dictionaries (en.ts, pt.ts)
│   ├── data.ts           # Shared data (projects, etc.)
│   └── utils.ts          # Tailwind merge and utility functions
└── public/               # Static assets
    └── profile.jpeg      # Profile image
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Uzzoper/personal-portfolio.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the project:**
    Navigate to `http://localhost:3000`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Juan Peruzzo](https://github.com/Uzzoper)
