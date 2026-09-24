# CYB3R_L0GS website

Official portfolio site for the CYB3R_L0GS competitive CTF and cybersecurity team.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The project is configured for zero-setup Vercel deployment; import the repository and Vercel will detect Vite automatically.

## Docker

Build and run the production container:

```bash
docker build -t cyb3r-l0gs .
docker run --rm -p 8080:8080 cyb3r-l0gs
```

Then open `http://localhost:8080`. The container serves a health check at `/health` and runs Nginx as a non-root user.

For Docker Compose, run `docker compose up --build`. Set `PORT` to change the host port, for example `PORT=3000 docker compose up --build`.

## Content and privacy

Only approved public-facing portraits, professional summaries, and LinkedIn links are used by the app. Source CVs, PDFs, and certificate artwork are ignored by Git and never included in the Vite production bundle.
