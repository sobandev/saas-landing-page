# Deployment Guide - Vercel

This guide will help you deploy the LearnSphere landing page to Vercel.

## 🚀 Quick Deploy

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd "d:\Cybers Lab\Saas Landing Page"
   vercel --prod
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No (for first deployment)
   - Project name: learnsphere-landing (or your preferred name)
   - Directory: ./ (current directory)

### Option 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/learnsphere-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure project settings (usually auto-detected)
   - Click "Deploy"

## ⚙️ Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "version": 2,
  "name": "learnsphere-landing",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🔧 Environment Variables

If you need to add environment variables:

1. **In Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables:
     - `REACT_APP_API_URL`
     - `SENDGRID_API_KEY` (for email functionality)
     - `GA_TRACKING_ID` (for analytics)

2. **For local development**
   Create a `.env.local` file:
   ```env
   REACT_APP_API_URL=http://localhost:3000
   SENDGRID_API_KEY=your_sendgrid_key
   GA_TRACKING_ID=your_ga_id
   ```

## 📧 Email Integration Setup

The project includes a serverless function at `/api/contact.js` for handling form submissions.

### Option 1: SendGrid Integration

1. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Update the API function**
   Uncomment the SendGrid code in `/api/contact.js` and add your API key to environment variables.

3. **Set environment variable**
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

### Option 2: Other Email Services

You can integrate with other services like:
- **Resend**: Modern email API
- **Mailgun**: Reliable email service
- **ConvertKit**: Email marketing platform
- **Mailchimp**: Marketing automation

## 🌐 Custom Domain

1. **Add domain in Vercel**
   - Go to project settings
   - Navigate to "Domains"
   - Add your custom domain

2. **Configure DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers for full DNS management

## 📊 Analytics Setup

### Google Analytics 4

1. **Add tracking code to `public/index.html`**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

2. **Set environment variable**
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### Vercel Analytics

1. **Enable in project settings**
   - Go to "Analytics" tab
   - Enable Web Analytics
   - Add the script to your site

## 🔒 Security Headers

The `vercel.json` includes security headers:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy: Configured for external resources

## 🚀 Performance Optimization

### Automatic Optimizations

Vercel automatically provides:
- Global CDN
- Image optimization
- Gzip compression
- HTTP/2 support
- Edge caching

### Manual Optimizations

1. **Image optimization**
   - Use WebP format when possible
   - Implement lazy loading (already included)
   - Optimize image sizes

2. **Code splitting**
   - React automatically splits code
   - Consider dynamic imports for large components

## 📈 Monitoring

### Vercel Analytics

Monitor your site performance:
- Page views and unique visitors
- Core Web Vitals
- Real User Monitoring (RUM)

### Error Tracking

Consider integrating:
- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and debugging
- **Hotjar**: User behavior analytics

## 🔄 Continuous Deployment

With GitHub integration:
- Every push to `main` branch triggers deployment
- Pull requests create preview deployments
- Automatic rollbacks on deployment failures

## 📱 Preview Deployments

Vercel creates preview URLs for:
- Pull requests
- Branch deployments
- Manual deployments

Share preview links with stakeholders for feedback.

## 🛠️ Troubleshooting

### Common Issues

1. **Build failures**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **API function errors**
   - Check function logs in Vercel dashboard
   - Verify environment variables are set
   - Test API endpoints locally

3. **Routing issues**
   - Ensure `vercel.json` routes are configured
   - Check for conflicting routes
   - Verify SPA routing setup

### Getting Help

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Support](https://vercel.com/support)

## 🎯 Post-Deployment Checklist

- [ ] Test all forms and CTAs
- [ ] Verify mobile responsiveness
- [ ] Check page load speeds
- [ ] Test email functionality
- [ ] Validate analytics tracking
- [ ] Review security headers
- [ ] Test custom domain (if applicable)
- [ ] Set up monitoring and alerts

---

Your LearnSphere landing page is now live on Vercel! 🎉