# DOCUMENTATION

## 1: Overview
NextUP is a web application for viewing prospect stats, rankings, and scouting evaluations.

### Tech Stack
- **Frontend:** React, TypeScript, Vite, TailwindCSS, Shadcn UI, Storybook
- **Backend:** Python
- **Database:** TBD
- **Deployment:** TBD
- **Version Control:** GitHub

---

## 2: Project Structure
```text
/backend
  /src
/frontend
  /storybook
  /public
  /src
    /assets
    /components
      /ui (shadcn-ui imports)
      /example-component (folders for each component)
        ExampleComponent.stories.tsx
        ExampleComponent.test.tsx
        ExampleComponent.tsx
        index.ts
      ...
    /config
    /lib - (or util)
    /pages
    /routes
    /styles
    /types
    App.tsx
    main.tsx
```

---

## 3: Installation & Setup

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Install
```bash
git clone <repo-url>
cd project
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

---

## 4: Environment Variables
Create a .env file with:

```ini
VITE_API_URL=https://api.example.com
VITE_ANOTHER_KEY=xxxxxx
```

---

## 5: Frontend Architecture
### 5.1 Component Structure
Reusable UI components in /components

Feature-specific components in /features/<feature-name>

Types in /types

Shared utilities in /lib

State Management: Local state via React hooks

Global state via "TBD"

Styling: TailwindCSS

Shadcn UI components

---

## 6: API Documentation
### 6.1 Base URL: https://api.example.com

### 6.2 Endpoints:
#### 6.21 GET /players
Returns a list of players.
Response:
```json
[
  { "id": 1, "name": "John Doe", "position": "SG" }
]
```
#### 6.22 POST /auth/login
API call to login
Body:
```json
{ "email": "", "password": "" }
```

---

## 7: Visualizations (D3.js)

### 7.1. Bar Chart — Player PPG
Endpoint: /stats/ppg

Location: /visualizations/ppg

### 7.2. Scatter Plot — Height vs Wingspan
Endpoint: /measurements

### 7.3. Line Chart — Player Growth Over Season
Endpoint: /season/progression

---

## 8: Testing
Storybook
### Run Storybook:
```bash
npm run storybook
```
### Test Documentation:
TBD

### Unit Tests (Vitest/Jest)
TBD

---

## 9: Deployment
TBD

---

## 10: Troubleshooting
Common issues include:
- CORS errors
- Module resolution issues
- Tailwind config errors
- Storybook alias/path issues