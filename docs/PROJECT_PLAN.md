# Project Plan

This project aims to automate job tracking, scoring, and resume tailoring.  We will build it incrementally, verifying each step before moving on.

## Milestones

1. **Bootstrap project**
   - Initialize TypeScript project using [Mastra](https://mastra.ai/) for agent orchestration.
   - Provide Docker configuration and `.env` support for local development and deployment.
   - Load personal résumé data from a plain text file.

2. **Data ingestion**
   - Parse the résumé text into structured sections.
   - Persist user data in a pluggable store (Baserow, Teable, or Supabase).
   - Expose simple CLI utilities to view the stored data.

3. **Job monitoring agents**
   - Create agents that browse job boards for desired roles.
   - Control a locally signed‑in browser (e.g. via Playwright) to access sites.
   - Store job listings in the data store.

4. **Job scoring & selection**
   - Compare job descriptions against the résumé to produce a match score.
   - Allow the user to mark interesting jobs for application.

5. **Resume optimization**
   - For selected jobs, generate a tailored résumé from the full experience dataset.
   - Output an optimized document ready for submission.

6. **Extensibility & UI**
   - Provide clear interfaces so new data sources or scoring strategies can be added easily.
   - Offer a lightweight web or dashboard interface for viewing and managing jobs.

Each milestone will result in a working, verifiable increment of functionality.

