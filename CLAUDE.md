# FlightDeck PPL — Project Context

## What This Is
A self-hosted Private Pilot License (PPL) ground school study app built as a vanilla HTML/JS/CSS single-page app. Deployed via Netlify, source on GitHub.

## Purpose
Study companion for Gleim Online Ground School content — structured around the 10 Gleim study guides. Features flashcards and MCQ quizzes for all 10 study guide topics, with local progress tracking.

## Google Drive Source Content
- **Folder**: "Pilot Cert 2" — ID `1HiwJB-6d714ZtTnGgLerIkhN0o286bw3`
- **Stage 1** subfolder ID: `1-1aEyafY1bOoHSPDpg3kq8PVlTkwMxDd`
  - SG 1: Airplanes and Aerodynamics (`1c60QGyqPLQ9Eud4lLRujN--Tb3l64Wr5`)
  - SG 2: Airplane Instruments, Engines, and Systems (`1VTKorUT505EkZK3Pb_SoTf97hP0C19Lz`)
  - SG 3: Airports, ATC, and Airspace (`1kfgMUqDp8YcbaeUxtZZ2gR6N4Z-4PL5r`)
  - SG 4: Federal Aviation Regulations (`1kpA6eCjX79K6LRtEclCt2a9vhpsG_4ek`)
  - SG 5: Airplane Performance and Weight & Balance (`1-nx6FEtrugbKaJ26N48-HCWnn629zr03`)
- **Stage 2** subfolder ID: `1yDNfNKebTvu-lqVLEcJLzJovpiDITpvp`
  - SG 6: Aeromedical Factors and ADM (`1lOFLS2kAPEEAiAVpUnY9UXJWFfL_8hn2`)
  - SG 7: Aviation Weather (`1GKnkrfVlLmQwbK-o_aLoRgTjTFweltrs`)
  - SG 8: Aviation Weather Services (`1bA94GDRRfL1uamc8ERrB6XT9E4YzKXz6`)
  - SG 10: Navigation Systems (`1aqmKI1hyJUnMj4n5t5B7C8irAu8h17z5`)
  - SG 9: Cross-Country Flight Planning (no Drive file — content from FAA knowledge test bank)

**Access policy**: Only access the Pilot Cert 2 folder and its Stage 1/Stage 2 subfolders. Do not browse other Drive content.

## File Structure
```
/
├── index.html         # Single-page app shell with all view containers
├── css/styles.css     # Aviation dark theme (amber on navy)
├── js/
│   ├── data.js        # All study guide data: flashcards, quiz questions, progress utils
│   └── app.js         # View rendering, quiz engine, flashcard logic, nav
├── netlify.toml       # Netlify publish config
└── CLAUDE.md          # This file
```

## Architecture
- **No build step** — pure HTML/JS/CSS, no npm, no bundler
- **No dependencies** — no React, no libraries, no CDN imports
- **Progress** stored in `localStorage` under key `flightdeck_progress`
- **Routing** is in-memory via `state.view` (no URL hash routing — SPA reload always shows dashboard)
- **Data** is in `js/data.js` as a `STUDY_GUIDES` array with `flashcards[]` and `quiz[]` per guide

## Study Data Schema
```js
// In STUDY_GUIDES[]:
{
  id: 1,            // SG number (1-10)
  title: "...",
  stage: 1 | 2,
  icon: "char",     // single ASCII char displayed in icon box
  description: "...",
  driveId: "...",   // Google Drive PDF file ID (null for SG 9)
  flashcards: [
    { front: "question", back: "answer" }
  ],
  quiz: [
    { q: "question", opts: ["A","B","C","D"], ans: 0-3, exp: "explanation" }
  ]
}
```

## Adding Content
To add questions to a study guide:
1. Open `js/data.js`
2. Find the study guide by `id`
3. Add to `flashcards[]` or `quiz[]` using the schema above
4. Use `mcp__claude_ai_Google_Drive__read_file_content` with the `driveId` to pull content from the Gleim PDFs

## Deployment
- **GitHub repo**: `flightdeck-ppl` (github.com/SilentWraith9425/flightdeck-ppl)
- **Netlify**: Connected to GitHub repo via Netlify dashboard
  - Publish directory: `.` (root)
  - Build command: (none)
  - Auto-deploys on push to `main`

## Owner
Max Doerr — FirstEpochMP@gmail.com / maxdoerr2508@gmail.com
PPL training in progress, using Gleim Online Ground School.
