# Performance Testing Guide

This guide will help you test and measure the performance improvements made to the Next.js application.

## Prerequisites

1. Install dependencies: `npm install`
2. Build the production version: `npm run build`
3. Start the production server: `npm start`

## Testing Methods

### 1. Lighthouse (Recommended)

Lighthouse is the most comprehensive tool for measuring Core Web Vitals and overall performance.

#### Using Chrome DevTools (Easiest)

1. **Start the production server:**
   ```bash
   npm run build
   npm start
   ```

2. **Open Chrome and navigate to:**
   - `http://localhost:3000` (or your port)

3. **Open DevTools:**
   - Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
   - Go to the **Lighthouse** tab

4. **Run Lighthouse:**
   - Select categories: **Performance**, **Accessibility**, **Best Practices**, **SEO**
   - Select device: **Desktop** or **Mobile**
   - Click **Analyze page load**

5. **Review Results:**
   - **Performance Score**: Should be 90+ (aim for 95+)
   - **Core Web Vitals:**
     - **LCP (Largest Contentful Paint)**: Should be < 2.5s
     - **FID/INP (Interaction to Next Paint)**: Should be < 100ms
     - **CLS (Cumulative Layout Shift)**: Should be < 0.1
   - **Total Blocking Time**: Should be < 200ms
   - **Speed Index**: Should be < 3.4s

#### Using Lighthouse CLI

```bash
# Install Lighthouse CLI globally
npm install -g lighthouse

# Run Lighthouse test
lighthouse http://localhost:3000 --view --output html --output-path ./lighthouse-report.html

# Run with specific settings
lighthouse http://localhost:3000 --only-categories=performance --view
```

### 2. Next.js Built-in Analytics

Next.js provides built-in performance monitoring:

1. **Check build output:**
   ```bash
   npm run build
   ```
   
   Look for:
   - Route sizes
   - First Load JS sizes
   - Image optimization info

2. **Use Next.js Speed Insights (Optional):**
   Add to your project for real user monitoring:
   ```bash
   npm install @vercel/speed-insights
   ```

### 3. Chrome DevTools Performance Tab

1. **Open DevTools** → **Performance** tab
2. **Click Record** (circle icon)
3. **Reload the page**
4. **Stop recording** after page loads
5. **Analyze:**
   - Total load time
   - JavaScript execution time
   - Rendering time
   - Network requests

### 4. Network Tab Analysis

1. **Open DevTools** → **Network** tab
2. **Reload page** with throttling:
   - Select "Slow 3G" or "Fast 3G"
   - Check "Disable cache"
3. **Review:**
   - Total page size
   - Number of requests
   - Load time
   - Largest resources

### 5. WebPageTest (Online Tool)

1. Go to https://www.webpagetest.org/
2. Enter your URL
3. Select test location and browser
4. Run test
5. Review:
   - Performance metrics
   - Waterfall chart
   - Core Web Vitals

## Key Metrics to Monitor

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: Time to render largest content
  - Good: < 2.5s
  - Needs improvement: 2.5s - 4.0s
  - Poor: > 4.0s

- **FID/INP (Interaction to Next Paint)**: Responsiveness
  - Good: < 100ms
  - Needs improvement: 100ms - 300ms
  - Poor: > 300ms

- **CLS (Cumulative Layout Shift)**: Visual stability
  - Good: < 0.1
  - Needs improvement: 0.1 - 0.25
  - Poor: > 0.25

### Other Important Metrics

- **First Contentful Paint (FCP)**: < 1.8s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Speed Index**: < 3.4s

## Before/After Comparison

### Before Optimization (Baseline)
Run tests before applying optimizations to establish baseline:
- Note all Core Web Vitals scores
- Document bundle sizes
- Record load times

### After Optimization
Compare against baseline:
- Performance score improvement
- Core Web Vitals improvements
- Bundle size reduction
- Load time reduction

## Quick Test Script

Create a simple test script to automate some checks:

```bash
# Test production build
npm run build

# Check bundle sizes
npm run build | grep -A 10 "Route (app)"

# Start production server
npm start

# In another terminal, run Lighthouse
lighthouse http://localhost:3000 --only-categories=performance --output json --output-path ./perf-report.json
```

## Common Issues to Check

1. **Large JavaScript bundles**: Check if code splitting is working
2. **Unoptimized images**: Verify Next.js Image component is used
3. **Render-blocking resources**: Check script loading strategies
4. **Unused CSS**: Use coverage tab in DevTools
5. **Third-party scripts**: Check if they're loading efficiently

## Performance Budget

Set targets for your application:

- **Performance Score**: 90+
- **LCP**: < 2.5s
- **INP**: < 100ms
- **CLS**: < 0.1
- **First Load JS**: < 200KB (gzipped)
- **Total Page Size**: < 2MB

## Continuous Monitoring

For production:
1. Use Vercel Analytics (if deployed on Vercel)
2. Set up Google Search Console
3. Monitor Core Web Vitals in Google Analytics
4. Use Real User Monitoring (RUM) tools

## Troubleshooting

If performance is still poor:

1. **Check Network tab**: Look for slow requests
2. **Check Coverage tab**: Find unused JavaScript/CSS
3. **Check Performance tab**: Identify long tasks
4. **Review Lighthouse recommendations**: Follow suggestions
5. **Check bundle analyzer**: Use `@next/bundle-analyzer`
