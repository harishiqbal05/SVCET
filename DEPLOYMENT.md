# SVCET Website - Deployment Guide

## 🚀 Complete Deployment Instructions

### Option 1: Netlify Deployment (Recommended)

Netlify is recommended because:
- ✅ Free hosting for static sites
- ✅ Automatic HTTPS
- ✅ Built-in form handling
- ✅ Continuous deployment from Git
- ✅ Custom domain support

#### Step-by-Step Netlify Deployment:

1. **Prepare Your Repository**
   ```bash
   # If not already a git repository
   git init
   git add .
   git commit -m "Initial commit - SVCET website"
   ```

2. **Push to GitHub** (if not already done)
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Deploy on Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - **Build Settings** (auto-detected from netlify.toml):
     - Build command: `yarn build`
     - Publish directory: `build`
   - Click "Deploy site"

4. **Configure Custom Domain** (Optional)
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to update DNS records

5. **Setup Form Notifications**
   - Go to "Forms" in Netlify dashboard
   - Click on "contact" form
   - Add notification email under "Form notifications"

### Option 2: Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /app
   vercel
   ```

3. **Follow CLI prompts**:
   - Set up and deploy? Y
   - Which scope? (choose your account)
   - Link to existing project? N
   - What's your project's name? svcet-website
   - In which directory is your code located? ./
   - Want to override settings? N

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Pages

1. **Add homepage to package.json**
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Install gh-pages**
   ```bash
   yarn add -D gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   yarn deploy
   ```

### Option 4: Other Static Hosting Services

You can deploy to any static hosting service:
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **Surge.sh**

**General Steps:**
1. Build the project: `yarn build`
2. Upload the contents of the `build/` folder to your hosting service

## 📋 Pre-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design verified
- [ ] Images loading properly
- [ ] Contact form tested
- [ ] All links working
- [ ] SEO meta tags present
- [ ] Google Maps loads correctly
- [ ] No console errors
- [ ] Production build successful

## 🔧 Post-Deployment Tasks

### 1. Update Google Maps
- Replace placeholder coordinates with actual college location
- Get embed code from Google Maps
- Update in `/app/src/pages/Contact.js`

### 2. Add College Logo
- Create favicon.ico (64x64 or 32x32)
- Add to `/app/public/favicon.ico`
- Create logo images:
  - logo192.png (192x192)
  - logo512.png (512x512)
- Add to `/app/public/`

### 3. Configure Form Notifications
- Setup email notifications for contact form submissions
- In Netlify: Forms → Form notifications → Add email

### 4. Setup Custom Domain
- Purchase domain (e.g., svcet.ac.in)
- Configure DNS records:
  - A record pointing to hosting service IP
  - CNAME for www subdomain
- Enable HTTPS (automatic on Netlify/Vercel)

### 5. Setup Analytics (Optional)
- Google Analytics
- Add tracking code to public/index.html

### 6. Social Media Integration
- Update social media links in Footer.js
- Replace `#` with actual URLs:
  - Facebook page URL
  - Twitter profile URL
  - LinkedIn page URL

### 7. SEO Optimization
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Verify meta tags with Facebook Debugger
- Test with Google Mobile-Friendly Test

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Netlify Forms Not Working
- Ensure `netlify` attribute is on form tag
- Verify form name matches Netlify dashboard
- Check Netlify build logs for form detection

### Images Not Loading
- Check image URLs are accessible
- Verify no CORS issues
- Use relative paths for local images

### Routing Issues on Hosting
- Ensure `netlify.toml` includes redirect rules
- For other hosts, configure server for SPA routing

## 📞 Support

For deployment support:
- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/docs/deployment/

## ✅ Deployment Success Checklist

- [ ] Website is live and accessible
- [ ] All pages load correctly
- [ ] HTTPS is enabled
- [ ] Contact form submissions working
- [ ] Mobile responsive on all devices
- [ ] Custom domain configured (if applicable)
- [ ] Form notifications setup
- [ ] Social media links updated
- [ ] Analytics tracking active (if added)
- [ ] SEO verified with Google Search Console

---

**Your SVCET website is ready to launch! 🎉**
