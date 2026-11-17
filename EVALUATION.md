# Evaluation and limits

## Repeatable tests

`npm test` exercises 35 cases: both note formats, reverse mode, bullets/blank lines, skipped lines, duplicate handling, bounds, Unicode and hostile text as data; schema and size checks on deck files; reveal/rate/retry state invariants; no unexpected external shell resources, HTML-injection sinks or note fetch; opt-in storage and shell-cache membership.

These tests check implementation behavior, not learning value, comprehension, answer correctness or device performance. UI, offline and keyboard results are recorded separately after direct interaction checks.

## Known limits

No semantic understanding. A colon inside ordinary prose can create an unhelpful card. An incorrect note creates an incorrect answer. Review every card. No translation or automatic marking. Review rounds record self-judgment only. A missed-card round is not a spaced-repetition algorithm. Plain note lines and exported deck files are not encrypted. Optional device storage may be visible to the next person using the same browser profile. Clear does not remove downloads or copies outside the app.

The offline cache requires an initial successful load on HTTPS or localhost and may be removed by the browser. Private-mode persistence and old/low-memory phones vary. Screen-reader and physical-phone testing remain necessary; do not claim universal compatibility or measured educational outcomes.

## Direct browser checks (November 17, 2026)

Local Chromium at 390 x 844: made-up example -> four cards and one skipped heading; edited prompt -> recall/reveal -> one missed and three recalled -> missed-only round. Verified attempted answer clears between cards; export/download -> valid import; opt-in storage -> reload restores edits; explicit network OFF -> reload from service worker -> reveal and rate still work; clear removes app storage and current note/card text; larger text does not overflow. Hostile markup remains text, empty answer blocks practice. No page errors; observed request origins were localhost only.

An automated axe scan on the mobile practice screen returned zero findings after fixing a visible-name mismatch on the brand link. This is a limited automated check, not a screen-reader test or accessibility certification. No physical old Android phone, iOS Safari, real learner or learning-outcome study was tested.

The same 390 x 844 flow also passed against the deployed GitHub Pages app, including network-offline reload and practice. Request origins were only https://hadhiabdulla.github.io. Keyboard-only checks covered skip navigation, larger text, loading the example, generation, skipped-line expansion, editing a prompt, revealing/rating a whole round and retrying the missed card. A 320px larger-text check exposed a header overflow; the mobile header now wraps rather than forcing horizontal scrolling. Automated checks do not establish usability for all assistive technologies.
