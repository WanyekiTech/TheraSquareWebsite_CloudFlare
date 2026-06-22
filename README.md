# TheraSquare - Modern EMR Platform

A modern, highly secure Electronic Medical Records (EMR) and practice management system built specifically for therapists, counsellors, and mental health clinics.

## Development Setup

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Production Build

To build the project for production (e.g. Netlify deployment):

```bash
npm run build
```

This will create optimized assets in the `dist/` directory. SPA routing rules for Netlify are handled by `public/_redirects`.
