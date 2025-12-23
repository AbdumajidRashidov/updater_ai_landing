# AI Updater Agent - Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS for the AI Updater Agent product.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized for search engines
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- **Type-Safe**: Written in TypeScript for better code quality

## Sections

1. **Hero Section** - Compelling headline with key statistics
2. **Problem/Solution** - Clear value proposition
3. **Features** - 6 key features with icons and descriptions
4. **How It Works** - Step-by-step explanation of the system
5. **Pricing** - Cost comparison with manual dispatcher
6. **Security** - Multi-tenant architecture explanation
7. **FAQ** - Common questions and answers
8. **Contact Form** - Lead capture with validation
9. **Footer** - Links and company information

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, pnpm, or yarn

### Installation

1. Navigate to the landing page directory:
```bash
cd landing-page
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

Or export as static HTML:

```bash
npm run build
```

The static files will be in the `out` directory, ready to deploy to any static hosting service.

## Deployment

### Vercel (Recommended for Next.js)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Netlify

1. Build the site: `npm run build`
2. Drag and drop the `out` folder to Netlify
3. Or connect your Git repository for automatic deployments

### AWS S3 + CloudFront

1. Build the site: `npm run build`
2. Upload the `out` folder to an S3 bucket
3. Configure CloudFront as CDN
4. Point your domain to CloudFront

### Custom Server

```bash
npm run build
npm run start
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme. The current theme uses indigo and purple gradients.

### Content

All content is in `app/page.tsx`. Edit the:
- Text content directly in the JSX
- `features` array for feature cards
- `faqs` array for FAQ items
- `integrations` array for integration logos

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline with Tailwind classes
- Custom utilities: Add to `@layer utilities` in `globals.css`

## Project Structure

```
landing-page/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── public/              # Static assets (add images here)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Features to Add

- [ ] Add images/illustrations to sections
- [ ] Implement actual form submission (e.g., to email service or CRM)
- [ ] Add testimonials section
- [ ] Add demo video or screenshots
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Add cookie consent banner
- [ ] Implement dark mode toggle
- [ ] Add blog section
- [ ] Add case studies/success stories

## Performance Tips

- Images should be added to `public/` and use Next.js `<Image>` component
- Consider adding loading states for form submission
- Add error boundaries for better UX
- Implement proper form validation
- Add success/error toast notifications

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - AI Updater Agent

## Support

For questions or issues, contact the development team.

---

**Last Updated:** December 23, 2025
