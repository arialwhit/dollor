
# DOLLUXE Nail Salon - Pink & Glitter Luxury Nails

A modern, elegant nail salon website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern React with TypeScript
- 🎨 Beautiful Tailwind CSS styling
- 🤖 AI-powered trend suggestions (Gemini API)
- 📱 Fully responsive design
- 🎬 Video gallery integration
- 💅 Comprehensive service pricing
- 📞 Contact and booking forms

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deploy to Netlify

### Option 1: Direct Upload
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set the build command: `npm run build`
4. Set the publish directory: `dist`
5. Add environment variable in Netlify dashboard:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

### Netlify Configuration
The project includes `netlify.toml` with proper SPA routing configuration.

## Deploy to Vercel

### Option 1: Direct Upload
1. Build the project: `npm run build`
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" → "Import Git Repository" or "Deploy"
4. Upload the `dist` folder

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Import the repository
4. Vercel will auto-detect settings from `vercel.json`:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Add environment variable in Vercel dashboard:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key

### Vercel Configuration
The project includes `vercel.json` with proper SPA routing and security headers.

## Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key for AI trend suggestions (optional - falls back to static content if not provided)

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **AI Integration:** Google Gemini API
- **Deployment:** Netlify or Vercel ready

## Project Structure

```
src/
├── components/          # React components
├── services/           # API services (Gemini)
├── types.ts           # TypeScript type definitions
├── constants.ts       # App constants and data
└── vite-env.d.ts      # Vite environment types
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request
