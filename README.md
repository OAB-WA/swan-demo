# Swan Electric, Plumbing, Heating & Air - Next.js Website

This is a Next.js conversion of the Plumbox HTML template, customized for Swan Electric, Plumbing, Heating & Air in Dallas, Texas.

## Features

- ✅ 100% visual match with original template (Option A)
- ✅ All original CSS and styling preserved
- ✅ jQuery plugins maintained for exact behavior
- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Contact form API endpoint
- ✅ Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global CSS imports
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   └── Preloader.tsx      # Page preloader
├── public/               # Static assets
│   └── assets/           # CSS, JS, images, fonts
└── package.json          # Dependencies
```

## Pages Included

- Home (`/`) - Based on index-3.html ✅
- About (`/about`) - About us page with team and testimonials ✅
- Services (`/services`) - All services listing ✅
- Projects (`/projects`) - Recent projects gallery ✅
- Contact (`/contact`) - Contact form with map ✅
- Team (`/team`) - Team members showcase ✅
- Gallery (`/gallery`) - Image gallery ✅
- Pricing (`/pricing`) - Pricing plans ✅
- FAQ (`/faq`) - Frequently asked questions ✅
- Testimonials (`/testimonials`) - Customer testimonials ✅
- 404 (`/not-found`) - Custom 404 page ✅

## Customization

### Company Information

Update company details in:
- `components/Header.tsx` - Header contact info
- `components/Footer.tsx` - Footer contact info
- `app/layout.tsx` - Meta tags

### Contact Form

The contact form API endpoint is located at:
- `app/api/contact/route.ts` - Currently logs form submissions to console (can be extended with your preferred email/storage solution)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

The site will be automatically deployed on every push to main branch.

## Notes

- **Option A Implementation**: This project uses regular `<img>` tags (not Next.js Image) to ensure 100% visual match with the original template
- **jQuery**: jQuery and plugins are kept for exact behavior matching
- **CSS**: All original CSS files are preserved exactly as-is
- **Performance**: While optimized for visual match, you can switch to Next.js Image component later for better performance

## License

This is a demo project for Swan Electric, Plumbing, Heating & Air.
