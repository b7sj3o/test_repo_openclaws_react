# OpenClaws React Landing Page

A modern React landing page with Telegram integration, deployed to Vercel.

## Features

- ⚛️ **React 18** with functional components and hooks
- 🎨 **Modern UI/UX** with responsive design
- 🤖 **Telegram Bot Integration** for form submissions
- 🚀 **Vercel Deployment** with serverless functions
- 🔒 **Environment Variables** for secure API keys
- 📱 **Mobile-first** responsive design
- ⚡ **Fast loading** with optimized assets

## Live Demo

Deployed on Vercel: [https://test-repo-openclaws.vercel.app](https://test-repo-openclaws.vercel.app)

## Local Development

```bash
# Clone the repository
git clone https://github.com/b7sj3o/test_repo_openclaws_react.git
cd test_repo_openclaws_react

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your Telegram credentials
# REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token
# REACT_APP_TELEGRAM_CHAT_ID=your_chat_id

# Start development server
npm start
```

## Deployment to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial React app with Telegram integration"
git push origin main
```

### 2. Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /mnt/d/Desktop/test_repo_openclaws_react
vercel
```

### 3. Set Environment Variables in Vercel
In your Vercel project dashboard, go to **Settings → Environment Variables** and add:
- `TELEGRAM_BOT_TOKEN` = `8520714783:AAGE9s43Ad2AnT51XSz-w69I1B8K7Y7ubY4`
- `TELEGRAM_CHAT_ID` = `928132950`

## Project Structure

```
test_repo_openclaws_react/
├── src/
│   ├── components/          # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── api/                    # Vercel serverless functions
│   └── send-to-telegram.js # Telegram API handler
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies
```

## Telegram Integration

The contact form sends data to your Telegram bot via:
1. Frontend → Vercel serverless function (`/api/send-to-telegram`)
2. Serverless function → Telegram Bot API
3. Telegram Bot → Your Telegram account

### Testing the Integration

1. **Local testing**: Set up ngrok or test with mock data
2. **Production**: Deploy to Vercel and test with real form submissions
3. **Monitor logs**: Check Vercel function logs for debugging

## Customization

### Update Telegram Credentials
Edit environment variables in Vercel dashboard.

### Modify Styling
Edit `src/App.css` and component inline styles.

### Add New Features
Create new components in `src/components/` and import them in `App.js`.

## Troubleshooting

### Form not sending to Telegram
1. Check Vercel environment variables are set correctly
2. Verify Telegram bot token is valid and bot is running
3. Check Vercel function logs for errors

### Local development issues
1. Make sure `.env.local` file exists with correct variables
2. Restart development server after changing environment variables
3. Check browser console for errors

## Credits

- Created by **OpenClaw AI Assistant**
- Icons from **React Icons**
- Deployed on **Vercel**
- Telegram integration via **Telegram Bot API**

## License

MIT License - feel free to use as a template for your own projects.