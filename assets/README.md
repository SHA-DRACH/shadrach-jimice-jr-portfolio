# Assets

## Already here

| File | What it is |
| --- | --- |
| `logo-jsha.jpg` | Your J-Sha Dra brand mark — the source for the favicons |
| `favicon-32.png`, `favicon-48.png` | Browser tab icon, cropped to the JSH monogram (the wordmark turns to mush below ~64px) |
| `favicon-180.png` | Apple touch icon — the full circular mark, which reads fine at that size |
| `logo-unilak.png` | UNILAK crest, white background keyed out to transparency so it works as the hero watermark |
| `logo-welldone.jpg` | WellDone Group mark, resized 1170px → 256px (234KB → 23KB) |

Regenerate the favicons from `logo-jsha.jpg` if the brand mark ever changes; the crop box used for
the small sizes was `x=200 y=170 w=560 h=560` on the 1170×1157 original.

## Still to add

| File | What it is | Notes |
| --- | --- | --- |
| `profile.jpg` | Your photo for the hero | Square, ~800×800px. Already wired — just drop the file in |
| `Shadrach-Jimice-Jr-CV.pdf` | Your CV | Wired to the hero "Download CV" button |
| `project-campusconnect.png` | CampusConnect screenshot | ~1600×1000px |
| `project-farmer-registry.png` | Farmer Registration screenshot | ~1600×1000px |
| `project-welldone.png` | WellDone Group screenshot | ~1600×1000px |
| `og-image.png` | Social sharing preview | 1200×630px — shows when the link is pasted into WhatsApp, LinkedIn, X |

`profile.jpg` needs no code change, and it removes itself if missing rather than showing a broken
icon. Until it exists the hero card displays the UNILAK crest. The project screenshots and
`og-image.png` do need a small edit — see "Before you publish" in the root `README.md`.

Keep images under ~300KB each. Compress at [squoosh.app](https://squoosh.app) before committing —
a fast portfolio is part of the impression.
