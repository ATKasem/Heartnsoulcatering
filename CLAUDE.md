# Heart N Soul Catering — Multi-Page Build

## Project
Heart N Soul Catering, Del City, Oklahoma. Tracy Thomas, owner. 13+ years in business. Viral recipes (Blue Bandana Cake, Sweet Potato Cheesecake Pie). Current site is a single HTML file with all CSS/JS inline.

## Task
Refactor into a multi-page static site for SEO. Split the single-page site into separate HTML pages with shared CSS. Keep the EXACT SAME visual design — do not change colors, fonts, layout, spacing, or any styling.

## Design Tokens (DO NOT CHANGE)
- --red: #b73229; --red-dark: #8a1f18
- --gold: #c4924a; --gold-light: #e2c27a; --gold-pale: #f5e6c8
- --cream: #faf5ef; --warm: #efe3d3
- --brown: #2c1810; --brown-mid: #4a2c20; --brown-light: #6b4230
- --text: #2c1810; --text-light: #7a5c4a; --text-muted: #a68a7a
- --font-d: 'Cormorant Garamond', Georgia, serif (headings/serif)
- --font-b: 'Inter', -apple-system, sans-serif (body)
- Font loaded via Google Fonts: Cormorant Garamond (300,400,600,700 ital) + Inter (300,400,500,600)

## File Structure
```
/
├── index.html          # Homepage
├── services.html       # Catering services page
├── desserts.html       # Desserts & custom cakes page
├── gallery.html        # Viral creations gallery
├── contact.html        # Contact page
├── styles.css          # Shared CSS (extract from current inline <style>)
├── script.js           # Shared JS (nav hamburger, form handling)
└── CLAUDE.md           # This file
```

## Page Details

### styles.css
Extract EXACTLY the CSS from the current index.html <style> block. No changes to any values. Minify is fine but keep all classes and selectors identical.

### script.js
- Hamburger menu toggle (mobile nav)
- Contact form submission handler (POST to a placeholder or mailto)
- Active page highlighting in nav

### index.html
Same content as current page: hero, about section with stats, services grid (keep all 9 services), gallery grid (keep all images), contact form, footer. 
SEO: Title="Heart N Soul Catering — Del City, Oklahoma | Catering & Custom Cakes"
Meta description: "Heart N Soul Catering. Tracy Thomas brings 13 years of handcrafted catering to Del City, Oklahoma. Desserts, catering, meal prep, custom cakes, and viral creations."

### services.html
Dedicated services page. Hero smaller than homepage. Full description of all 9 services. 
SEO: Title="Catering Services Oklahoma City | Heart N Soul Catering Del City"
Meta description: "Full-service catering in Del City and Oklahoma City. Wedding catering, meal prep, custom cakes, charcuterie boards, event planning. Tracy Thomas, 13+ years."
H1: "Our Services"

### desserts.html
Focus on desserts, custom cakes, and sweet treats. Detail the viral creations. 
SEO: Title="Custom Cakes & Desserts Del City | Heart N Soul Catering OKC"
Meta description: "Custom cakes, cheesecakes, pies, cupcakes, and viral dessert creations in Del City, Oklahoma. Blue Bandana Cake, Sweet Potato Cheesecake Pie, and more."
H1: "Custom Cakes & Desserts"

### gallery.html
Gallery page for viral creations. All images from current gallery section.
SEO: Title="Gallery | Heart N Soul Catering — Viral Creations Gallery"
Meta description: "Browse viral creations from Heart N Soul Catering. Blue Bandana Cake, Sweet Potato Cheesecake Pie, Fried Ribs, and more custom catering in Del City, OK."
H1: "Our Viral Creations"

### contact.html
Contact page with form, phone, email, location. Social links.
SEO: Title="Contact Heart N Soul Catering | Del City, Oklahoma"
Meta description: "Contact Tracy Thomas at Heart N Soul Catering. Call (405) 561-4437 or email heartnsoulcatering74@gmail.com. Serving Del City and Oklahoma City."
H1: "Get in Touch"

## Navigation
Active page should be highlighted differently. Use a simple JS check on current URL path.

## Image Sources
All images are hosted on Wixstatic CDN. Copy the exact URLs from the current index.html. DO NOT change any image URLs.

## Critical Rules
1. DO NOT change any CSS values — same colors, fonts, spacing, animations
2. Preserve all social links (Facebook, Instagram, TikTok, YouTube, Twitter)
3. Keep all phone / email / location info identical
4. Keep all image URLs as-is from Wixstatic
5. Keep the same overall feel and content hierarchy
6. Each page needs unique title and meta description for SEO
7. Make nav links point to the new .html pages instead of # anchor sections
8. Contact form should POST to a Formspree or similar. Use method="POST" action="#" for now