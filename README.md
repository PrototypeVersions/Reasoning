# Inside the Argument

An original interactive CARS learning concept by **Blake Myers**.

**Live site:** https://prototypeversions.github.io/Reasoning/

The experience turns an answer explanation into something a learner can investigate. Read a passage, commit to an interpretation, find its evidence, revise a faulty claim, and examine the structure of the argument.

## Explore

- **Decide:** nine original questions across three passages, with explanations for all 36 answer choices.
- **Trace:** select passage sentences and compare them with a compact model evidence route, including routes that explain distractor errors.
- **Repair:** six exercises that distinguish a defensible claim from an overstatement, reversal, or unsupported inference.
- **What if?:** nine hypothetical findings that strengthen, weaken, or have no clear effect on a precise claim.
- **Map:** arrange five cards into supporting reason, assumption, conclusion, objection, and response. Use drag and drop, click a card then a slot, or keyboard controls.

The passages concern public museums (515 words), urban evaluation (542 words), and translation (569 words). Each includes questions addressing comprehension, reasoning within the text, and reasoning beyond the text. There is no time limit.

## Run locally

No build step or dependencies are required. From the repository directory:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766/. Serve over HTTP because the application uses native JavaScript modules.

For GitHub Pages, deploy `main` from `/ (root)`. The `.nojekyll` file keeps the site static.

## Implementation

- `data.js`: passages, answer explanations, evidence references, repairs, new findings, and map cards.
- `app.js`: activity state, interactions, keyboard support, and browser-local persistence.
- `style.css`: responsive layout, readable typography, focus states, and reduced-motion support.
- `index.html`: accessible page structure, reading tools, tour, and field notes.
- `assets/`: self-hosted DM Sans and DM Serif Display fonts with their licenses.

Progress is stored locally under `inside-the-argument-v1`. No account, server, analytics, runtime AI service, or external assets are required. “Start over” resets the current passage. Activity completion indicates exploration, not an accuracy score or mastery estimate.

## Editorial scope

All passages and questions were created for this independent portfolio concept with AI assistance. No UWorld or AAMC question content is reproduced. The interactive activities are learning aids rather than a reproduction of the actual MCAT interface. Evidence routes and argument maps are reasoned instructional interpretations; they are not exhaustive representations.

The prototype is not affiliated with or endorsed by UWorld or the AAMC. MCAT is an AAMC trademark. It has not undergone psychometric validation or independent editorial review. The AAMC’s official overview informed the skill categories: https://students-residents.aamc.org/whats-mcat-exam/critical-analysis-and-reasoning-skills-section-overview

## Validation

Content checks cover passage lengths, answer indexes, evidence references, focus phrases, and the completeness of map roles. Browser checks cover answer review, evidence selection, repairs, hypothetical findings, card placement, saved progress, and responsive layouts.

Companion project: [Inside the Answer — Cell Atlas](https://prototypeversions.github.io/Cell_Explanation/).
