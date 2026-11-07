# David Aparicio — Engineering portfolio

A responsive professional portfolio for David Aparicio (`dave-adam-aparicio`), prepared for GitHub Pages at <https://dave-adam-aparicio.github.io/portfolio/>. It connects a background in data analysis and database development with a developing focus on Linux administration, infrastructure, and automation.

The first featured project is the [Salesforce-to-Snowflake Incremental ETL Pipeline](https://github.com/dave-adam-aparicio/salesforce-snowflake-etl), synchronizing Account, Contact, and Opportunity with metadata-driven schemas, SystemModstamp watermarks, temporary staging and ID-based MERGE. Its separate monthly reconciliation compares Salesforce IDs in Snowflake, retrieves and merges missing records, and soft-flags deleted records while preserving their payloads. The monthly notebook includes preview mode, deletion rechecks, and per-object transactions, and is intended to run after hours with daily loads paused. The owner reports both workflows working with live data; repository checks remain offline and do not establish production readiness. Both notebooks are linked from the homepage.

Contact links use the confirmed details:

- Email: [david.adam.aparicio@gmail.com](mailto:david.adam.aparicio@gmail.com)
- LinkedIn: [David Aparicio](https://www.linkedin.com/in/david-adam-aparicio/)

Unconfirmed background details and the remaining systems/automation entries stay explicitly labeled as placeholders.

## Structure and technologies

```text
portfolio/
├── index.html              # All homepage content and section anchors
├── assets/
│   ├── css/style.css       # Responsive layout, typography, and themes
│   ├── js/main.js          # Optional theme preference
│   └── images/             # Future public screenshots and images
├── projects/
│   └── README.md           # Guidance for verified project case studies
├── README.md
├── .gitignore
└── .nojekyll               # Serve static files without Jekyll processing
```

HTML5, modern CSS, and minimal vanilla JavaScript. No framework, dependencies, installation, external fonts, or build step. Resources use relative paths for the `/portfolio/` project URL. The page works without JavaScript; the theme button is progressively enabled. Themes follow the system preference until a visitor chooses a theme, which is saved locally when browser storage is available.

## Preview locally

From the repository root on Linux Mint, run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/> in your browser. Stop the server with `Ctrl+C`. To check the project-site URL shape, run the server from the parent directory and open <http://127.0.0.1:8000/portfolio/> instead.

Before publishing, check the page at narrow mobile, tablet, and desktop widths; follow every navigation link; use Tab and Enter to check the skip link, navigation, and theme button; test both themes and your system theme preference. Confirm there is no horizontal overflow, text stays readable at 200% zoom, and your browser console and Network panel show no errors or missing assets.

## Personalize the content

Edit `index.html` to:

1. Keep the confirmed name, page title, description, and header branding current.
2. Update your introduction and preferred career direction as needed; add a location only if desired.
3. Add verified employers, job titles, dates, responsibilities, and outcomes to Background. Remove bracketed guidance after filling it in.
4. Confirm skills and distinguish professional experience from learning. Do not add credentials unless earned.
5. Replace project placeholders with real work, an accurate status, technical descriptions, and supporting evidence. Remove the section's placeholder explanation only when all entries are real, or update it to match remaining placeholders.
6. Keep the email, LinkedIn, and GitHub profile links current. There is no contact form or backend.

Copy an existing `<article class="project-card">` to add a project. Each card supports a title, description, tags, status, and a footer. Replace footer text with meaningful links to real repositories, documentation, and case studies; do not use `href="#"` or nonexistent URLs. See `projects/README.md` for case-study guidance. Use `projects/your-case-study.html` for a case study linked from the homepage and `assets/images/your-image.webp` for homepage images. Include descriptive `alt` text and image dimensions when adding screenshots.

Change color variables at the top of `assets/css/style.css` to adjust the palette. The stylesheet uses system fonts, responsive grids, visible keyboard focus, and a reduced-motion preference. Keep headings in logical order and link text descriptive.

## Ongoing workflow

Edit a small set of content or styling changes, preview locally, check mobile layout and keyboard access, then review the diff before committing. Keep placeholder status honest as projects evolve. Once Pages is configured, each push to `main` triggers deployment automatically; a separate build command is unnecessary.

## Commit and push

Review and commit each intended update locally. Push only after approval:

```bash
git status
git diff
git add index.html assets projects README.md .gitignore .nojekyll
git diff --cached
git commit -m "docs: update portfolio content"
git push -u origin main
```

`git diff` does not show untracked file contents before staging; review the new files in your editor and use `git diff --cached` after staging. For later changes, stage only intended files, review, commit with a descriptive message, and push to `main`. Never include secrets or private professional data.

## Enable GitHub Pages

After the first push to `main`:

1. Open `dave-adam-aparicio/portfolio` on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose **main** and **/ (root)**, then **Save**.
5. Wait for the Pages deployment to finish. Check **Actions** for the Pages build/deployment result and **Settings → Pages** for the published address.
6. Visit <https://dave-adam-aparicio.github.io/portfolio/>. Verify the introduction, section anchors, stylesheet, theme toggle, and public profile links. Allow a few minutes for deployment; refresh if cached content appears.

For a failed deployment, inspect the failed Actions run and confirm `index.html` is at the repository root on `main`, Pages uses `main` and `/ (root)`, and filename capitalization matches links. The initial implementation does not configure Pages remotely or include a custom Actions workflow.
