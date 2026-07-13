# L'Étoile | Contemporary Haute Cuisine & Fine Dining Website

An agency-grade, production-ready, dark-themed fine dining restaurant web application. Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## ✦ Key Features

- **Ambient Visuals**: High-resolution, dark-toned culinary and interior photography optimized with `next/image`.
- **Eelegant Typography**: Layout utilizing Google Fonts `Playfair Display` for high-end editorial headings and `Inter` for spacious, clean copy.
- **Scroll-Adaptive Navigation**: Floating navigation bar that transforms from transparent to a glassmorphic blurred overlay upon scroll.
- **Masonry Visual Gallery**: Pinterest-inspired image grid displaying atmosphere, beverages, and plating precision, featuring a custom interactive fullscreen lightbox overlay.
- **Testimonial Slider**: Dynamic slider displaying critic critiques and rating stars using Framer Motion's entry/exit transition states.
- **Premium Reservation Suite**: Interactive booking panel designed with glassmorphic fields, custom selections, simulated loading checks, and receipt-style confirmation cards.
- **Dark-Mode Coordinated Map**: Operations calendar details, phone/email contact nodes, and a Google Maps embed configured with custom CSS color filters.

---

## ✦ Architecture & Folder Layout

```text
luxe-restaurant/
├── public/                 # Favicons and static web assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root structure, font loading, SEO meta setup
│   │   ├── page.tsx        # Main layout compiling sections
│   │   └── globals.css     # CSS variables, Tailwind theme directives, custom scrollbars
│   ├── components/
│   │   └── sections/       # Modular UI sections
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── FeaturedDishes.tsx
│   │       ├── ChefsSpecials.tsx
│   │       ├── About.tsx
│   │       ├── Gallery.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Reservation.tsx
│   │       ├── Location.tsx
│   │       └── Footer.tsx
│   └── data/
│       └── restaurantData.ts  # Decoupled mock menu data, reviews, and gallery links
```

---

## ✦ Core Technologies

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ✦ Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Build for Production
```bash
npm run build
```

---

## ✦ Deployment to Vercel

The easiest way to deploy this Next.js project is directly through the Vercel Platform.

### Method A: Connect Git (Recommended)
1. Initialize git and push this folder to your GitHub/GitLab account.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository, keep all default configuration settings, and click **Deploy**.

### Method B: Deploy using Vercel CLI
Ensure you are logged into your vercel account and execute the following in the project root:
```bash
npx vercel
```
To promote it directly to production:
```bash
npx vercel --prod
```
