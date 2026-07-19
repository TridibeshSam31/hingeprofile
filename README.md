# 💘  HingeProfile Coach

An AI-powered dating profile generator that *interviews* you before writing a single word. Instead of asking you to describe yourself, it learns who you are through natural conversation — then crafts a Hinge profile that actually sounds like you.

---

## 🧠 The Core Idea

Most AI profile generators ask you to fill in a form. This one doesn't.

The platform runs a conversational onboarding interview, gradually building a structured personality model from your responses. Only once it understands your humor, lifestyle, values, and communication style does it generate prompt answers, a bio, and photo suggestions — all tailored specifically to you.

---

## ✨ Features

- **AI Interview Engine** — Conversational onboarding that asks natural questions instead of Hinge prompts directly
- **Dynamic Question Engine** — Tracks what it already knows; only asks what's missing
- **Personality Confidence System** — Each trait gets a confidence score; interview ends automatically when thresholds are met
- **Prompt Library with Metadata** — Every Hinge prompt tagged with the personality traits needed to answer it well
- **Structured Personality Extraction** — Converts raw conversation into a typed personality profile (humor, lifestyle, hobbies, relationship goals, etc.)
- **Prompt Recommendation Engine** — Selects the Hinge prompts that best match your personality
- **Authentic Prompt Answer Generator** — Writes answers grounded in your actual profile, not generic templates
- **Bio + Tagline Generator** — Produces a complete bio section from your personality data
- **Photo Suggestion Engine** — Recommends photo types based on your lifestyle (gym shots, travel pics, pet photos, etc.)
- **Hinge-style Profile Preview** — See exactly how your profile looks before copying it over
- **Streaming AI Responses** — Smooth, real-time chat experience via Vercel AI SDK
- **Idempotent Profile Generation** — Refreshing the profile page returns the existing profile; only the Regenerate button creates new versions
- **Profile Versioning** — Every regeneration creates a new version while archiving previous ones

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| Icons | Lucide React |
| State Management | Zustand |
| Schema Validation | Zod |
| Auth | Clerk |
| Database | MongoDB Atlas + Mongoose |
| AI | Google Gemini via Vercel AI SDK (`@ai-sdk/google`) |
| Smooth Scroll | Lenis |
| Webhooks | Svix (Clerk webhook verification) |
| Deployment | Vercel |

---

## 🔄 Product Flow

```
User Signs Up (Clerk Auth)
    ↓
AI Interview (natural conversation with streaming responses)
    ↓
Interview End → Personality Extraction Agent
    ↓
Prompt Recommendation Engine
    ↓
Answer Generator + Bio Generator + Photo Advisor
    ↓
Profile Composer
    ↓
Hinge-style Preview → Copy / Regenerate
```

---

## 🤖 AI Pipeline

The system runs a 7-agent pipeline:

1. **Interview Agent** (`InterviewAgent.ts`) — Conducts the conversation, builds context, stores message history
2. **Personality Extractor** (`PersonalityExtractor.ts`) — Converts conversation transcript → structured JSON personality profile
3. **Prompt Recommender** (`PromptRecommender.ts`) — Matches personality traits to the best-fit Hinge prompts
4. **Answer Generator** (`AnswerGenerator.ts`) — Writes personalized answers per selected prompt
5. **Bio Generator** (`BioGenerator.ts`) — Creates bio and tagline from the personality profile
6. **Photo Advisor** (`PhotoAdvisor.ts`) — Suggests photo types and compositions based on lifestyle data
7. **Profile Composer** (`ProfileComposer.ts`) — Assembles everything into a single renderable profile object

Supporting modules:
- `confidence.ts` — Scores traits and detects coverage gaps
- `questionEngine.ts` — Picks the next question topic based on current confidence scores
- `client.ts` — Vercel AI SDK + model provider setup

---

## 🌐 API Routes

### Interview

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/interview/start` | Initialize a new interview session |
| `POST` | `/api/interview/message` | Send a message and stream AI reply |
| `POST` | `/api/interview/end` | Close session and trigger personality extraction |

### Profile

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/profile/latest` | Fetch the user's latest active profile (no generation) |
| `POST` | `/api/profile/generate` | Generate initial profile (idempotent — returns existing if one exists) |
| `POST` | `/api/profile/regenerate` | Create a new profile version (archives previous) |
| `GET` | `/api/profile/[id]` | Fetch a specific saved profile by ID |

### Other

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/personality` | Return current personality profile |
| `GET` | `/api/prompts` | List available Hinge prompts |
| `POST` | `/api/webhooks/clerk` | Clerk `user.created` webhook sync |

---

## 📦 MongoDB Collections

| Collection | Model | Description |
|-----------|-------|-------------|
| `users` | `User` | User account linked to Clerk |
| `interviewsessions` | `InterviewSession` | Chat sessions with embedded messages |
| `personalityprofiles` | `PersonalityProfile` | Structured personality data extracted from interviews |
| `generatedprofiles` | `GeneratedProfile` | Generated Hinge profiles with versioning |
| `promptlibraries` | `PromptLibrary` | Hinge prompt catalog with metadata |
| `feedbacks` | `Feedback` | User feedback on generated content |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                          # Clerk sign-in / sign-up pages
│   ├── (dashboard)/
│   │   ├── layout.tsx                   # Auth guard layout
│   │   ├── interview/page.tsx           # Chat UI with onboarding flow
│   │   └── profile/
│   │       ├── page.tsx                 # Hinge profile preview
│   │       └── regenerate/page.tsx
│   ├── api/
│   │   ├── interview/
│   │   │   ├── start/route.ts
│   │   │   ├── message/route.ts
│   │   │   └── end/route.ts
│   │   ├── profile/
│   │   │   ├── generate/route.ts        # Idempotent initial generation
│   │   │   ├── latest/route.ts          # GET latest active profile
│   │   │   ├── regenerate/route.ts      # New version creation
│   │   │   └── [id]/route.ts
│   │   ├── personality/route.ts
│   │   ├── prompts/route.ts
│   │   └── webhooks/clerk/route.ts
│   ├── page.tsx                         # Landing page
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── auth/                            # Auth-related components
│   ├── interview/
│   │   ├── ChatWindow.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── TypingIndicator.tsx
│   │   ├── ProgressBar.tsx
│   │   └── InterviewInput.tsx
│   ├── landing/                         # Landing page sections
│   ├── profile/
│   │   ├── HingeCard.tsx
│   │   ├── PromptCard.tsx
│   │   ├── PhotoSlot.tsx
│   │   ├── RegenerateBtn.tsx
│   │   └── CopyButton.tsx
│   └── ui/                             # Shared UI primitives
│
├── lib/
│   ├── ai/
│   │   ├── agents/                      # 7 AI pipeline agents
│   │   ├── prompts/                     # System prompt templates
│   │   ├── confidence.ts
│   │   ├── questionEngine.ts
│   │   └── client.ts                    # AI SDK + model setup
│   ├── db/
│   │   ├── models/                      # Mongoose schemas
│   │   ├── connect.ts                   # Singleton DB connection
│   │   └── seed.ts                      # Seed PromptLibrary
│   ├── store/
│   │   ├── interviewStore.ts            # Zustand: messages, session, status
│   │   └── profileStore.ts             # Zustand: generated profile, loading
│   ├── types/                           # TypeScript type definitions
│   ├── utils/                           # Validators, helpers
│   ├── auth.ts                          # Clerk helpers
│   └── constants.ts                     # Personality categories, thresholds
│
└── middleware.ts                        # Clerk route protection
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- MongoDB Atlas cluster
- Google AI API key (Gemini)
- Clerk account

### Installation

```bash
git clone https://github.com/Ayush042004/hingeprofile.git
cd hingeprofile
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# MongoDB
MONGODB_URI=

# Google AI (Gemini)
GOOGLE_GENERATIVE_AI_API_KEY=
```

### Seed the Prompt Library

```bash
npm run seed
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🏛️ Architecture

```
┌────────────────────────────────────────────┐
│              Next.js Frontend              │
│  (React 19 + Zustand + Framer Motion)      │
└──────────────────┬─────────────────────────┘
                   │
┌──────────────────▼─────────────────────────┐
│        Next.js Route Handlers (API)        │
│   Interview · Profile · Personality · ...  │
└──────┬───────────────────────┬─────────────┘
       │                       │
┌──────▼──────┐    ┌───────────▼─────────────┐
│  MongoDB    │    │  Google Gemini API       │
│  Atlas      │    │  (via Vercel AI SDK)     │
└─────────────┘    └─────────────────────────┘
```

The frontend never communicates directly with the LLM — all AI calls are proxied through server-side route handlers.

---

## 🛣️ Roadmap

- [ ] AI Photo Rating & Ranking
- [ ] AI Conversation Coach (post-match)
- [ ] AI Profile Roast Mode
- [ ] Weekly Profile Refresh
- [ ] Multi-app support (Bumble, Tinder, etc.)
- [ ] AI Match Prediction
- [ ] Vision model integration for photo scoring

---

## 📄 License

MIT