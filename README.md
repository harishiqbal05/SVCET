# SVCET College Website

## 🎓 Project Overview

A modern, professional, mobile-first website for **S.Veerasamy Chettiar College of Engineering and Technology (SVCET)**, an Anna University affiliated engineering college in Tamil Nadu.

### ✨ Key Features

- **8 Complete Pages**: Home, About, Departments, Programs, Admissions, Facilities, News & Events, Contact
- **9 Departments**: CSE, ECE, Mechanical, Civil, EEE, AI/ML, Cyber Security, MCA, MBA
- **SEO Optimized**: Meta tags, Open Graph tags, semantic HTML
- **Fully Responsive**: Mobile-first design, works on all devices
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Professional Images**: AI-sourced high-quality images from Unsplash
- **Contact Form**: Integrated with Netlify Forms
- **Google Maps**: Embedded map for college location

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Development Server

The application will run on `http://localhost:3000`

## 📁 Project Structure

```
/app/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation header with mobile menu
│   │   ├── Footer.js       # Footer with contact info and links
│   │   └── ScrollToTop.js  # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.js         # Landing page with hero and highlights
│   │   ├── About.js        # About college, vision, mission
│   │   ├── Departments.js  # All 9 departments with details
│   │   ├── Programs.js     # UG/PG programs overview
│   │   ├── Admissions.js   # TNEA admission process
│   │   ├── Facilities.js   # Campus facilities showcase
│   │   ├── NewsEvents.js   # News, events, announcements
│   │   └── Contact.js      # Contact form and location
│   ├── App.js              # Main app with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global styles with Tailwind
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── netlify.toml            # Netlify deployment config
└── README.md               # This file
```

## 🎨 Design & Styling

### Color Palette

- **Primary**: Navy Blue (#1e3a8a)
- **Secondary**: Sky Blue (#0ea5e9)
- **Accent**: White & Light Gray
- Professional and trustworthy appearance

### Typography

- **Font Family**: Inter (Google Fonts)
- Clean, modern, highly readable

### Layout

- Card-based sections
- Consistent spacing and visual hierarchy
- Mobile-first responsive design

## 📱 Pages Overview

### 1. Home Page
- Hero section with college name and tagline
- About SVCET summary
- Key highlights (Anna University, TNEA Code 4967, 9 Departments)
- Featured departments showcase
- Facilities snapshot
- Call-to-action buttons

### 2. About Us
- College overview and history
- Vision and Mission statements
- Anna University affiliation details
- Why Choose SVCET
- Campus life gallery

### 3. Departments
- Detailed information about all 9 departments:
  - Computer Science & Engineering
  - Electronics & Communication Engineering
  - Mechanical Engineering
  - Civil Engineering
  - Electrical & Electronics Engineering
  - Artificial Intelligence & Machine Learning
  - Cyber Security
  - Master of Computer Applications (MCA)
  - Master of Business Administration (MBA)
- Each with description, focus areas, and images

### 4. Programs Offered
- Undergraduate programs (B.E./B.Tech - 4 years)
- Postgraduate programs (MCA, MBA - 2 years)
- Program features and benefits
- Eligibility and admission information

### 5. Admissions
- TNEA counselling information
- College Code: **4967**
- Step-by-step admission process
- Eligibility criteria (UG & PG)
- Required documents
- Fee structure information

### 6. Facilities
- Modern classrooms
- Advanced laboratories
- Central library
- Hostel accommodation (Boys & Girls)
- Transportation services
- Sports facilities
- Cafeteria
- Computer center
- Additional amenities

### 7. News & Events
- Upcoming events
- Recent announcements
- Campus activities showcase
- Event categories (Technical, Cultural, Sports, Workshops)
- Image gallery

### 8. Contact Us
- Contact form (Netlify Forms integration)
- College address and location
- Phone numbers and email
- Google Maps embed
- Department contacts
- Office hours
- How to reach (Bus, Train, Air)
- FAQs

## 🌐 Deployment

### Netlify Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure Forms** (if needed):
   - Forms are automatically detected by Netlify
   - Check "Forms" section in Netlify dashboard
   - Setup email notifications for form submissions

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Manual Static Deployment

```bash
# Build the project
yarn build

# The build folder contains static files ready for deployment
# Upload contents of 'build/' folder to any static hosting service
```

## 🔧 Configuration

### Environment Variables

No environment variables required for the current setup.

### Netlify Forms

The contact form is configured to work with Netlify Forms automatically. When deployed to Netlify:
- Form submissions are captured in Netlify dashboard
- Email notifications can be configured
- Spam protection included

### Google Maps

To update the map location:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" > "Embed a map"
4. Copy the iframe src URL
5. Update `mapEmbedUrl` in `/app/src/pages/Contact.js`

## 📊 SEO Features

- Meta titles and descriptions on all pages
- Open Graph tags for social media sharing
- Semantic HTML5 elements
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- Clean URLs with React Router
- Mobile-friendly and responsive

## ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly
- Focus indicators
- Semantic HTML structure
- data-testid attributes for testing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive across all screen sizes.

## 🎯 College Information

**S.Veerasamy Chettiar College of Engineering and Technology (SVCET)**

- **Address**: SVCET, SV Nagar, Puliangudi – 627 855, Tirunelveli District, Tamil Nadu, India
- **Phone**: +91 9025262526, +91 4636 234742
- **Email**: info@svccollege.ac.in
- **TNEA Code**: 4967
- **Affiliation**: Anna University, Chennai
- **Approval**: AICTE Approved

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **SEO**: React Helmet Async
- **Forms**: Netlify Forms
- **Build Tool**: Create React App
- **Package Manager**: Yarn

## 📝 License

This project is created for S.Veerasamy Chettiar College of Engineering and Technology.

## 🤝 Support

For any issues or questions:
- Email: info@svccollege.ac.in
- Phone: +91 9025262526

---

**Built with ❤️ for SVCET**
