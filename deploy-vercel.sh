#!/bin/bash

echo "Deploying React app to Vercel..."

# Create a temporary vercel.json with environment variables
cat > vercel-deploy.json << EOF
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "api/send-to-telegram.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/send-to-telegram",
      "dest": "/api/send-to-telegram.js"
    },
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "TELEGRAM_BOT_TOKEN": "8520714783:AAGE9s43Ad2AnT51XSz-w69I1B8K7Y7ubY4",
    "TELEGRAM_CHAT_ID": "928132950"
  }
}
EOF

echo "Vercel configuration created with Telegram environment variables."
echo ""
echo "To deploy:"
echo "1. Go to https://vercel.com/new"
echo "2. Import Git repository: https://github.com/b7sj3o/test_repo_openclaws_react"
echo "3. Vercel will automatically detect the React app"
echo "4. Add environment variables in Vercel dashboard:"
echo "   - TELEGRAM_BOT_TOKEN = 8520714783:AAGE9s43Ad2AnT51XSz-w69I1B8K7Y7ubY4"
echo "   - TELEGRAM_CHAT_ID = 928132950"
echo "5. Click 'Deploy'"
echo ""
echo "Or use Vercel CLI:"
echo "npm install -g vercel"
echo "vercel --env TELEGRAM_BOT_TOKEN=8520714783:AAGE9s43Ad2AnT51XSz-w69I1B8K7Y7ubY4 --env TELEGRAM_CHAT_ID=928132950 --prod"