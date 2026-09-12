# Nimii Labs

### AI-Powered Content Creation Platform for Creators

Nimii Labs is an AI-powered content creation platform designed to help creators generate, evaluate, analyze, and improve short-form video scripts.

The application combines a React/Vite frontend, Firebase Authentication and Firestore, a Node.js/Express backend, and a multi-stage AI generation pipeline.

## Live Demo

**Production:** https://nimii-labs-ai.vercel.app

---

## Overview

Nimii Labs transforms a content idea into a structured short-form script through multiple AI processing stages.

Instead of relying on a single AI response, the platform uses a pipeline that separates planning, generation, evaluation, review, and scoring.

This architecture provides a more structured workflow for generating and improving creator-focused content.

---

## Key Features

### AI Script Generation

Generate structured short-form video scripts based on a topic, niche, platform, and creator requirements.

The generation workflow includes:

- Creative planning
- Content planning
- AI script generation
- AI evaluation
- Script review
- Viral scoring
- Script analysis

### Multi-Stage AI Pipeline

Nimii Labs processes content through multiple stages instead of relying on a single generation request.

```text
Creative Plan
     ↓
Planner
     ↓
Writer / Generation
     ↓
Judge
     ↓
Review
     ↓
Analysis & Scoring
     ↓
Final Script


## System Architecture

```text
                    ┌──────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + Vite       │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Firebase             │
                    │ Authentication       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Node.js + Express    │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │       AI Generation Pipeline    │
              │                                 │
              │ Creative Plan → Planner         │
              │ → Writer → Judge → Review       │
              │ → Analysis & Scoring            │
              └────────────────┬────────────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Generated / Revised  │
                    │       Content        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Firebase Firestore   │
                    └──────────────────────┘

                    
**Don't worry about making it look fancy yet.** GitHub will render the Markdown code block properly.

For your portfolio, I actually recommend keeping **both**:

- **System Architecture** → shows the overall application architecture.
- **AI Processing Pipeline** → shows the specific AI workflow.

That gives a recruiter a quick technical picture without forcing them to read your source code.

So yes: **paste it. Then save `README.md`, but don't commit yet.**