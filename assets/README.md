# Assets

## Already here

| File | What it is |
| --- | --- |
| `logo-jsha.jpg` | Your J-Sha Dra brand mark — the source everything else is cut from |
| `logo-mark.png` | Header and footer logo: the JSH monogram, letterboxed on white at 160px (4× its 40px display size) |
| `favicon-32.png`, `favicon-48.png` | Browser tab icon, cropped to the JSH monogram (the wordmark turns to mush below ~64px) |
| `favicon-180.png` | Apple touch icon — the full circular mark, which reads fine at that size |
| `logo-unilak.png` | UNILAK crest, white background keyed out to transparency so it works as the hero watermark |
| `logo-welldone.jpg` | WellDone Group mark, resized 1170px → 256px (234KB → 23KB) |
| `profile.jpg` | Hero photo — 800×800 square cut from `profile-full.jpg` (crop box `x=210 y=40 side=660`) |
| `profile-full.jpg` | The original 1080×718 landscape shot, kept so the crop can be redone |

If the brand mark ever changes, regenerate these from the new source. On the 1170×1157 original the
monogram sits at roughly `x=240 y=130 w=500 h=700` — everything except `favicon-180.png` is cut from
that box, because the "J-Sha Dra" wordmark is unreadable below about 64px and only the monogram
survives at favicon and header sizes.

## Still to add

| File | What it is | Notes |
| --- | --- | --- |
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
