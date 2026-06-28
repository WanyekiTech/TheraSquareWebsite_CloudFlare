# TheraSquare - Modern EMR Platform

A modern, highly secure Electronic Medical Records (EMR) and practice management system built specifically for therapists, counsellors, and mental health clinics.

## Technology Stack

- **Framework**: React + Vite (Single Page Application)
- **Forms**: Formspree (React SDK)
- **Deployment**: Cloudflare Pages
- **Styling**: Tailwind CSS

## Development Setup

**Prerequisites:** Node.js

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the root of the project with your Formspree Endpoint IDs:
   ```env
   VITE_FORMSPREE_CONTACT=your_contact_form_id
   VITE_FORMSPREE_SIGNUP=your_signup_form_id
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Production Build & Cloudflare Pages

To build the project for production:

```bash
npm run build
```

This will create optimized assets in the `dist/` directory. 

### Cloudflare Pages Configuration
This repository is pre-configured to be deployed seamlessly to **Cloudflare Pages**. 
- SPA routing rules are handled automatically by `public/_redirects`.
- To deploy, connect this repository to Cloudflare Pages via the dashboard, and set the build output directory to `dist`.
- Ensure you set the `VITE_FORMSPREE_CONTACT` and `VITE_FORMSPREE_SIGNUP` environment variables in your Cloudflare Pages dashboard under **Settings > Environment variables**.
