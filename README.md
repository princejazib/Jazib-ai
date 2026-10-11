# Jazib AI
Personal + business AI assistant for web and Android (installable PWA).

## Deploy (recommended: Vercel)
1. Upload this folder's contents to a GitHub repository named `jazib-ai`.
2. Import the repository at Vercel using your GitHub account.
3. In Vercel → Project Settings → Environment Variables, add `OPENAI_API_KEY` with your private API key. Optional: `OPENAI_MODEL` = `gpt-4.1-mini`.
4. Redeploy, then open the Vercel URL on Android Chrome. Use ⋮ → Add to Home screen / Install app.

The key belongs only in server-side environment variables, never in `public/index.html`. API usage may cost money. An OpenAI ChatGPT subscription does not automatically include API credits; set a billing limit.

## Features
- Personal and LINKS INN Interior business modes
- Roman Urdu, Urdu and English prompts
- Voice typing where browser supports it, spoken replies toggle
- Responsive and installable web app

## Business details
Business context is in `api/chat.js`. Current WhatsApp number: +92 318 2064707. Products: Ceiling Panel 8x4, PVC Ceiling Panel, Ceiling 2x2, PVC Wall Panel, Wallpaper, Glass Paper, Vinyl Flooring, Wood Flooring, UV Sheet, Aluminium Doors & Windows, PVC Doors & Windows.

## Notes
No user login or cloud chat history yet. Voice support depends on browser and permissions. The assistant drafts content but does not automatically send WhatsApp messages or change your other website.
