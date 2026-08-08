# Assets

Drop these files here. Filenames matter — the site already points at them.

| File | What it is | Notes |
| --- | --- | --- |
| `profile.jpg` | Your photo for the hero | Square, ~800×800px. Already wired — just drop the file in |
| `logo-unilak.png` | UNILAK logo, shown in the About credentials card | ~256×256px. Wired; vanishes cleanly until you add it |
| `Shadrach-Jimice-Jr-CV.pdf` | Your CV | Wired to the hero "Download CV" button |
| `project-campusconnect.png` | CampusConnect screenshot | ~1600×1000px |
| `project-farmer-registry.png` | Farmer Registration screenshot | ~1600×1000px |
| `project-welldone.png` | WellDone Group screenshot | ~1600×1000px |
| `og-image.png` | Social sharing preview | 1200×630px — shows when the link is pasted into WhatsApp, LinkedIn, X |

`profile.jpg` and `logo-unilak.png` need no code change — both paths are already in the HTML, and
each image removes itself if the file is missing rather than showing a broken icon. The project
screenshots and `og-image.png` do need an edit — see "Before you publish" in the root `README.md`.

`logo-welldone.jpg` is already here (resized to 256×256, 23KB from the 234KB original).

Keep images under ~300KB each. Compress at [squoosh.app](https://squoosh.app) before committing —
a fast portfolio is part of the impression.
