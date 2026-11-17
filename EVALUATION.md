# Evaluation and limits

## Repeatable tests

`npm test` exercises 33 cases: both note formats, reverse mode, bullets/blank lines, skipped lines, duplicate handling, bounds, Unicode and hostile text as data; schema and size checks on deck files; reveal/rate/retry state invariants; no unexpected external shell resources, HTML-injection sinks or note fetch; opt-in storage and shell-cache membership.

These tests check implementation behavior, not learning value, comprehension, answer correctness or device performance. UI, offline and keyboard results are recorded separately after direct interaction checks.

## Known limits

No semantic understanding. A colon inside ordinary prose can create an unhelpful card. An incorrect note creates an incorrect answer. Review every card. No translation or automatic marking. Review rounds record self-judgment only. A missed-card round is not a spaced-repetition algorithm. Plain note lines and exported deck files are not encrypted. Optional device storage may be visible to the next person using the same browser profile. Clear does not remove downloads or copies outside the app.

The offline cache requires an initial successful load on HTTPS or localhost and may be removed by the browser. Private-mode persistence and old/low-memory phones vary. Screen-reader and physical-phone testing remain necessary; do not claim universal compatibility or measured educational outcomes.
