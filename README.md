# NoteSprint

Small recall rounds from your own structured notes, including when the connection drops. A free browser-local prototype built for AccessED Hacks in November 2026.

## One learner, one barrier

The intended learner is a student with an unreliable connection and a shared or older phone. Before: practice can depend on repeatedly opening a connected service. After: open this small page once, wait for **Ready offline**, make editable cards and return to them without a connection while the browser keeps the cache. No account or install is required. This is a design goal, not a claim that every other tool requires internet or that this prototype improves grades.

## Try it

Load the made-up networking example, make cards, and inspect the skipped line. Edit a question or answer. Start a round, attempt recall, reveal the note answer, and choose your own rating. Finish the round and revisit only the cards you marked for another look.

Two supported formats, one card per nonblank line:

```
Router: Sends packets between different networks.
What does a backup help you do? => Restore a copy of data after loss or damage.
```

Colon lines become `Explain: Term`, or can be reversed into term recall. Explicit `Question => answer` lines retain the original question. First matching separator wins (`=>` is preferred). Free-form paragraphs are not interpreted; skipped lines are reported, never silently converted into invented facts. Deduplicates exact generated cards. Up to 80 cards and 30,000 note characters. A prompt can contain 500 characters; an answer, 2,000.

## Local use and tests

No build or package dependency. Serve the folder using `python3 -m http.server 8080` and open `http://localhost:8080`. HTTPS or localhost is needed for service workers; opening index.html as a file does not provide offline caching. Run `npm test` (Node 18+) for the deterministic engine and safety checks.

## What it does, and does not do

- **Rule-based, not AI inference.** String splitting and templates only. No remote model, semantic grading, fact checking, OCR, translation or fabricated distractors. AI assisted the implementation, not the learner's runtime answers.
- Editable prompts and answers before practice. Source text is treated as text, not executable HTML. Non-Latin card text is preserved; the interface itself is English.
- Reveal before self-rating. A separate missed-card round is user-triggered, not a validated spaced-repetition scheduler. No timers, leaderboards or mastery claims.
- Deck JSON import/export is local, bounded and schema-checked. Imported files replace the editor only on successful validation. Downloaded files contain your card text; keep them private.
- Remembering is off by default. Opt in to save raw notes and edited cards in localStorage. Clear device notes removes the current tab's text and the app's localStorage record, not downloaded files. Current round answers/ratings are never stored. The browser may clear storage. Nothing is encrypted by this app.
- A service worker pre-caches only the app shell. "Ready offline" is shown after checking all required cached resources. First load, cache eviction, private mode, disabled storage, browser support and hosting changes can prevent offline use. No cloud sync or cross-device restore.
- Labelled controls, native buttons, visible focus, responsive layout, larger-text toggle, no motion and no time pressure support different interaction needs. These choices are not a WCAG-conformance certification; see EVALUATION.md for tests and untested devices.
- No analytics, remote fonts, CDN scripts or note endpoint. Hosting still receives normal connection metadata when you open the site. The app does not upload note/card contents.

## Event contribution and credits

New project created during the AccessED build window on November 17, 2026, not reused from Log Anomaly Lens or JobRaksha. All UI, generation rules, practice state, offline cache, tests, docs and made-up examples were built for this entry. Design, implementation, examples, tests and documentation were AI-assisted and reviewed through tests and browser checks. No third-party runtime libraries, datasets, images or icon packs are bundled. System fonts are used. GitHub Actions uses actions/checkout and actions/setup-node. The example is synthetic and not a curriculum endorsement. No real learner data or learning-outcome study was collected.

No source-code license has been selected. Do not treat the absence of a license as a reuse grant.
