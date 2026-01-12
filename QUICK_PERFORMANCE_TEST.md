# Quick Performance Testing Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Build for Production
```bash
npm run build
```

This will show you:
- Bundle sizes for each route
- First Load JS sizes
- Image optimization info

### Step 2: Start Production Server
```bash
npm start
```

### Step 3: Run Lighthouse Test

**Option A: Chrome DevTools (Easiest)**
1. Open `http://localhost:3000` in Chrome
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Go to **Lighthouse** tab
4. Click **Analyze page load**
5. Review the Performance score and Core Web Vitals

**Option B: Lighthouse CLI**
```bash
# Install Lighthouse globally (one time)
npm install -g lighthouse

# Run test
lighthouse http://localhost:3000 --view
```

## 📊 What to Look For

### Performance Score
- **90-100**: Excellent ✅
- **50-89**: Needs Improvement ⚠️
- **0-49**: Poor ❌

### Core Web Vitals (Most Important)

1. **LCP (Largest Contentful Paint)**
   - Target: < 2.5 seconds
   - Shows when main content loads

2. **INP (Interaction to Next Paint)**
   - Target: < 100 milliseconds
   - Measures interactivity

3. **CLS (Cumulative Layout Shift)**
   - Target: < 0.1
   - Measures visual stability

## 🔍 Quick Checks in Chrome DevTools

### Network Tab
1. Open DevTools → Network tab
2. Reload page
3. Check:
   - Total page size (should be < 2MB)
   - Number of requests
   - Load time

### Performance Tab
1. Open DevTools → Performance tab
2. Click Record
3. Reload page
4. Stop recording
5. Look for:
   - Long tasks (red bars)
   - JavaScript execution time
   - Rendering time

### Coverage Tab (Find Unused Code)
1. Open DevTools → Coverage tab
2. Click Record
3. Reload page
4. See unused JavaScript/CSS

## 📈 Expected Improvements

After the optimizations, you should see:

- ✅ **LCP**: Improved by 30-50% (faster image loading)
- ✅ **INP**: Improved by 20-40% (optimized event handlers)
- ✅ **CLS**: Near 0 (proper image dimensions)
- ✅ **Bundle Size**: Reduced (lazy-loaded scripts)
- ✅ **Performance Score**: 10-30 point improvement

## 🎯 Performance Targets

| Metric | Target | Good |
|--------|--------|------|
| Performance Score | 90+ | 95+ |
| LCP | < 2.5s | < 1.8s |
| INP | < 100ms | < 50ms |
| CLS | < 0.1 | < 0.05 |
| FCP | < 1.8s | < 1.2s |
| TTI | < 3.8s | < 2.5s |

## 🛠️ Advanced Testing

### Compare Before/After

1. **Before**: Note all scores
2. **After**: Compare improvements

### Test Different Pages
```bash
# Homepage
lighthouse http://localhost:3000 --view

# About page
lighthouse http://localhost:3000/about --view

# Services page
lighthouse http://localhost:3000/services --view
```

### Test Mobile Performance
- In Lighthouse, select "Mobile" device
- This simulates slower connections and devices

## 💡 Pro Tips

1. **Always test production build** (`npm run build && npm start`)
   - Dev mode is slower and not representative

2. **Test with throttling**
   - Use "Slow 3G" in Network tab
   - Simulates real-world conditions

3. **Test multiple times**
   - Performance can vary
   - Average 3-5 runs

4. **Check different pages**
   - Homepage (most important)
   - Other key pages

5. **Monitor in production**
   - Use Vercel Analytics (if deployed)
   - Google Search Console
   - Real User Monitoring tools

## 🐛 Troubleshooting

**Low Performance Score?**
- Check Network tab for slow requests
- Look for large JavaScript bundles
- Check for render-blocking resources

**High CLS?**
- Verify all images have width/height
- Check for dynamic content loading

**Slow LCP?**
- Ensure hero images are optimized
- Check image loading priority
- Verify critical CSS is loaded first

## 📝 Quick Command Reference

```bash
# Build and start
npm run build && npm start

# Just build (see bundle sizes)
npm run build

# Run Lighthouse (if installed)
lighthouse http://localhost:3000 --view

# Check bundle sizes in build output
npm run build | grep "First Load JS"
```

---

**Need more details?** See `PERFORMANCE_TESTING.md` for comprehensive guide.
