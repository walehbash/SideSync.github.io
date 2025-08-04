# Skyline Realty - Progressive Web App

A modern real estate website with PWA capabilities for iOS and Android installation.

## 🌟 Features

- **Progressive Web App (PWA)** - Installable on mobile devices
- **Shopping Cart System** - Add properties to cart and checkout
- **Multiple Payment Options** - PayPal, Cryptocurrency, Credit/Debit Cards
- **Dark/Light Mode** - Toggle between themes
- **AI Chat Support** - Built-in customer support
- **Responsive Design** - Works on all devices
- **Offline Support** - Service worker for offline functionality

## 📱 Mobile Installation

### iOS (Safari)
1. Open the website in Safari
2. Tap the Share button (📤)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" to install

### Android (Chrome)
1. Open the website in Chrome
2. Tap the menu (⋮)
3. Tap "Add to Home screen"
4. Tap "Add" to install

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder to deploy
3. Get a shareable link instantly

### Option 2: Vercel
1. Create a free account at [vercel.com](https://vercel.com)
2. Import the project from GitHub
3. Deploy automatically

### Option 3: GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in settings
3. Get a shareable link

### Option 4: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Deploy with `firebase deploy`

## 🔗 Shareable Links

Once deployed, you can share these links with your customers:

- **Main Website**: `https://your-domain.com`
- **Direct PWA Link**: `https://your-domain.com` (same link, works as PWA)

## 📋 Customer Demo Instructions

Share this with your customers:

```
🏠 Skyline Realty Demo

Experience our new real estate platform:

📱 Mobile App: [Your PWA Link]
💻 Desktop: [Your PWA Link]

Features to test:
✅ Browse properties
✅ Add to cart
✅ Complete checkout
✅ Try payment options (PayPal, Crypto, Cards)
✅ Dark/Light mode toggle
✅ AI chat support

Install on your phone:
• iOS: Safari → Share → Add to Home Screen
• Android: Chrome → Menu → Add to Home Screen

This is a demo - no real transactions will be processed.
```

## 🛠️ Local Development

1. Start local server:
   ```bash
   npx http-server -p 8000 -o
   ```

2. Open: `http://localhost:8000`

## 📁 File Structure

```
/
├── index.html              # Main page
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker
├── pages/                 # Additional pages
│   ├── properties.html
│   ├── buy.html
│   ├── rent.html
│   ├── sell.html
│   ├── about.html
│   ├── contact.html
│   ├── cart.html
│   ├── payment-demo.html
│   ├── quick-move-in.html
│   └── verified.html
└── README.md
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `index.html`
- **Properties**: Update the `properties` array in `index.html`
- **Payment**: Modify payment options in `pages/payment-demo.html`
- **Branding**: Update logo and company info throughout

## 📞 Support

For technical support or customization requests, contact your development team.

---

**Note**: This is a demo application. For production use, implement proper security, authentication, and payment processing. 