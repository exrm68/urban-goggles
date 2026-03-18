# 🎬 Cineflix Main App — Optimized

## এই Project এ কী কী করা হয়েছে

### ⚡ Performance Fixes (Lag দূর করা)

| সমস্যা | Fix |
|--------|-----|
| `layout` prop MovieTile এ — সব card recalculate করতো | ❌ Remove করা হয়েছে |
| `AnimatePresence mode="popLayout"` — সবচেয়ে ভারি | ✅ `mode="wait"` করা হয়েছে |
| AdminPanel সবসময় bundle এ থাকতো | ✅ `React.lazy()` দিয়ে lazy load |
| Animation duration অনেক বেশি ছিল | ✅ 0.5s → 0.2-0.3s করা হয়েছে |
| Scroll handler main thread block করতো | ✅ `requestAnimationFrame` + `passive` listener |
| Image decode main thread block করতো | ✅ `decoding="async"` যোগ করা হয়েছে |
| Stagger animation delay বেশি ছিল | ✅ Max delay 0.25s এ cap করা হয়েছে |
| Font অনেক weight load হতো | ✅ শুধু দরকারি weights load হয় |
| `will-change` missing ছিল | ✅ GPU hint যোগ করা হয়েছে |
| Vite build optimize ছিল না | ✅ Code splitting + terser minify |
| Overscroll bounce iOS lag | ✅ `overscroll-behavior: none` যোগ |

---

## 🚀 Vercel Deploy Steps

### ১. GitHub এ push করো
```bash
cd cineflix-main
git init
git add .
git commit -m "cineflix main app"
git remote add origin https://github.com/তোমার-username/cineflix-main.git
git push -u origin main
```

### ২. Vercel এ deploy
1. [vercel.com](https://vercel.com) এ যাও
2. "New Project" → GitHub repo select করো
3. **Framework:** Vite
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`
6. Deploy করো ✅

### ৩. Telegram Mini App সেটআপ
- BotFather তে `/newapp` বা `/myapps`
- Web App URL: `https://তোমার-app.vercel.app`

---

## 📁 Project Structure
```
cineflix-main/
├── src/
│   ├── App.tsx          ← Optimized, AdminPanel lazy
│   ├── main.tsx
│   ├── firebase.ts
│   ├── types.ts
│   ├── constants.ts
│   └── components/
│       ├── MovieTile.tsx    ← layout prop removed ✅
│       ├── StoryCircle.tsx  ← React.memo + faster ✅
│       ├── Banner.tsx
│       ├── BottomNav.tsx
│       └── ... (বাকি সব)
├── index.html           ← Optimized fonts + GPU hints
├── vite.config.ts       ← Code splitting + terser
├── vercel.json          ← SPA routing + cache headers
└── package.json
```

---

## 🔐 Admin Panel Access
Main app এ এখনও **5 বার লোগো tap** করলে Admin Panel খুলবে।
কিন্তু এখন এটা **Lazy Load** — মানে user না খুললে এই code load-ই হবে না।

Admin Panel আলাদা deploy করার জন্য `cineflix-admin` folder দেখো।
