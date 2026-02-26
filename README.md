# 1199SEIU Connections Newsletter App

📱 **Mobile PWA for Android Galaxy A15 & iPhone**

---

## 📦 WHAT YOU'RE GETTING

A complete Progressive Web App (PWA) that transforms the **1199SEIU Connections Newsletter (2026 Issue #1)** into a mobile-friendly, swipeable reading experience.

### ✨ Features
- **Full word-for-word content** (English only, Spanish removed)
- **Clean, readable layout** with scrollable text
- **Swipe navigation** (left/right) or tap zones
- **Chapter menu** for quick section jumping
- **Progress tracking** with localStorage
- **Offline capability** after first load
- **Works on Android Galaxy A15 & iPhone**
- **Culturally relevant images** featuring African American seniors (50-70 years old)

---

## 📂 FILE STRUCTURE

```
1199-newsletter-jan-2026/
├── index.html              # Main app page
├── manifest.json           # PWA configuration
├── sw.js                   # Service worker (offline cache)
├── icon.png               # App icon (192×192)
├── icon-192.png           # Android icon
├── icon-512.png           # Android icon (high-res)
├── icon-new.svg           # White "M" icon (optional)
├── icon-512-new.svg       # White "M" icon (optional)
├── css/
│   └── style.css          # Responsive styles
└── js/
    ├── app.js             # Navigation & menu logic
    └── content.js         # Newsletter content (21 pages)
```

---

## 🚀 DEPLOYMENT OPTIONS

### **Option 1: GitHub Pages** (Recommended)

1. **Create a new public GitHub repository** named `1199-newsletter-jan-2026`
2. **Upload all files** (not the folder, just the contents):
   - index.html
   - manifest.json
   - sw.js
   - icon files (icon.png, icon-192.png, icon-512.png)
   - css/ folder
   - js/ folder
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: branch `main` (or `master`), folder `/` (root)
   - Save
4. **Wait 2-3 minutes** for deployment
5. **Access your site** at: `https://[your-username].github.io/1199-newsletter-jan-2026`

### **Option 2: Netlify Drop** (Fastest)

1. Visit https://app.netlify.com/drop
2. Drag & drop the entire project folder
3. Get instant public URL (e.g., `https://1199-newsletter-xyz.netlify.app`)

### **Option 3: Vercel**

1. Visit https://vercel.com
2. Import your GitHub repo or upload files
3. Deploy with one click

---

## 📱 INSTALLING ON ANDROID GALAXY A15

1. **Open the deployed URL** in Chrome or Samsung Internet browser
2. **Tap the menu (⋮)** → "Add to Home screen" or "Install app"
3. **Confirm** and the app icon will appear on your home screen
4. **Launch** like a native app - works offline after first load!

---

## 📱 INSTALLING ON iPHONE

1. **Open the deployed URL** in Safari
2. **Tap the Share button** (square with arrow)
3. **Scroll and tap** "Add to Home Screen"
4. **Name it** and tap "Add"
5. **Launch** from home screen - works offline!

---

## 📖 CONTENT BREAKDOWN

### Sections Included (21 pages total):

1. **Welcome & Messages** (4 pages)
   - Table of contents
   - Retired Nurses meetings & Zoom links
   - FindHelp resources
   - Executive Director message (Donna Rey)

2. **Leadership Messages** (3 pages)
   - President's message (Mary Stovall-Merrill)
   - Health & wellness advice
   - Union President message (Yvonne Armstrong)

3. **Health & Wellness** (3 pages)
   - Health building blocks
   - Healthy Living Resource Center
   - "Health Is the Key" Podcast S3

4. **Programs & Classes** (11 pages)
   - Seniors Out Speaking Medicare meetings (Feb-Apr)
   - Online Mind & Body classes (Zoom links)
   - In-person classes at Manhattan HQ

### Sections Removed:
- ❌ Spanish content (pages with "EN ESPAÑOL")
- ❌ Monthly Chapter Meetings (pages 11-13)
- ❌ Summary Annual Reports (pages 14-15)
- ❌ 1199SEIU Benefit Funds legal text

---

## 🔧 CUSTOMIZATION

### Change App Name
Edit `manifest.json`:
```json
{
  "name": "Your Custom Name",
  "short_name": "Short Name"
}
```

### Change Colors
Edit `css/style.css`:
```css
:root {
    --bg-color: #FFFFFF;
    --text-color: #000000;
    --accent-color: #0066CC;
}
```

### Replace Icon
Replace `icon.png`, `icon-192.png`, and `icon-512.png` with your own images (use PNG format).

You can use https://favicon.io/favicon-generator/ to create new icons.

---

## 🔄 CREATING NEW NEWSLETTER APPS

**Want to convert a different newsletter?** Follow these steps:

1. **Scan/convert** your PDF to individual JPG images (one per page)
2. **Upload images** to an AI assistant (like me!)
3. **Request** full text extraction (specify what to include/exclude)
4. **Replace** `js/content.js` with the new content
5. **Update** `manifest.json` with new name/issue
6. **Deploy** to a new GitHub repo or Netlify URL

### Template Structure:
```javascript
const CHAPTERS = [
  {id: 1, name: "Section Name", pages: 5},
  // Add more sections...
];

const LESSONS = [
  {
    page: 1,
    chapter: 1,
    title: "Page Title",
    text: "Full text content here...",
    image: "https://images.unsplash.com/photo-xyz"
  },
  // Add more pages...
];
```

---

## 📊 TECHNICAL SPECS

- **Optimized for:** Android Galaxy A15 (1080×2340) & iPhone 13 Pro Max (428×926)
- **Font size:** 17-18px (responsive)
- **Framework:** Vanilla JavaScript (no dependencies)
- **Storage:** localStorage for progress tracking
- **Offline:** Service Worker caching
- **Size:** ~35 KB (without images)
- **Images:** Hosted on Unsplash CDN

---

## 🐛 TROUBLESHOOTING

### App won't install on Android
- Make sure you're using **Chrome** or **Samsung Internet**
- Check that the site is served over **HTTPS**
- Clear browser cache and try again

### Images not loading
- Check internet connection (first load requires internet)
- Verify Unsplash URLs are accessible
- Try hard refresh: Ctrl+Shift+R (desktop) or clear cache (mobile)

### Progress not saving
- Check browser allows localStorage
- Try different browser (Chrome/Safari)
- Ensure cookies/site data is enabled

### Menu won't close on Android
- Tap the overlay (dark area) or back button
- Update `js/app.js` if needed

---

## 📧 SHARING THE APP

Once deployed, simply share the URL:
- **GitHub Pages:** `https://[username].github.io/1199-newsletter-jan-2026`
- **Netlify:** `https://[project-name].netlify.app`

Recipients can:
1. Open the link on their phone
2. Add to Home Screen
3. Use it like a native app
4. Access offline after first visit

**Perfect for sharing newsletters with remote family members!**

---

## 🎯 FUTURE IMPROVEMENTS

- [ ] Add search functionality
- [ ] Bookmark favorite pages
- [ ] Print-friendly mode
- [ ] Dark mode toggle
- [ ] Font size adjuster
- [ ] Share specific pages

---

## 💡 TIPS

1. **First time?** Test locally by opening `index.html` in a browser
2. **Icons:** Use white background with black "M" or custom logo
3. **Content:** Keep text concise for better mobile reading
4. **Images:** Use 800px wide images for faster loading
5. **Updates:** Just replace `js/content.js` and redeploy

---

## 📞 SUPPORT

For issues or questions about deployment, check:
- GitHub Pages docs: https://pages.github.com
- Netlify docs: https://docs.netlify.com
- PWA basics: https://web.dev/progressive-web-apps/

---

**Built with ❤️ for 1199SEIU retired members**

*Last updated: February 26, 2026*
