# Zephyr Defense Website

A modern, scalable business website for Zephyr Defense, built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
tactical-forge-website/
│
├── public/                  # Static assets (images, favicon, etc.)
│   ├── images/
│   │   ├── team/
│   │   ├── partners/
│   │   └── product/
│   └── favicon.ico
│
├── src/
│   ├── components/          # Reusable UI components
│   ├── sections/            # Major homepage/landing sections
│   ├── pages/               # Next.js pages (Home, About, etc.)
│   ├── data/                # Static data (team, partners, etc.)
│   ├── styles/              # Global and component styles
│   └── assets/              # Fonts, icons, etc.
│
├── .env.local               # Environment variables
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## Tech Stack
- Next.js (React framework)
- TypeScript
- Tailwind CSS

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Lint code

## How to Use
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev` to start the local server

## Contributing
- Fork the repo
- Create a feature branch
- Commit changes
- Open a pull request

## License
MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
