# Project case studies

The homepage features the published [Salesforce-to-Snowflake Incremental ETL Pipeline](https://github.com/dave-adam-aparicio/salesforce-snowflake-etl). Its daily incremental sync and separate monthly deleted-record reconciliation notebooks are linked from the homepage. The owner reports both workflows working with live data. Implementation details, monthly maintenance instructions, and notebook walkthroughs live in the project repository, avoiding duplicated technical documentation here.

This directory remains available for future verified project case studies. The systems and automation homepage entries are still placeholders.

When ready, add a static HTML case study (for example, `linux-lab.html`) and link it from the matching card in `../index.html`. Use `../assets/css/style.css` from this directory. GitHub Pages does not convert Markdown to HTML with `.nojekyll`; use HTML for browser-facing case studies, or link to Markdown on GitHub.

For each case study, document:

- Actual project status and dates
- Problem, scope, and environment
- Tools used and implementation decisions
- Validation, limitations, and lessons learned
- Confirmed results, with evidence where available
- Real repository, documentation, and screenshot links

Remove private data and credentials from code, screenshots, and logs before publishing. Store public images in `assets/images/`, give them descriptive alternative text, and use relative paths.
