# Lang Lab website

A custom, static lab site — plain HTML and CSS, no build step, no platform lock-in.
Five pages: Home, Research, People, Publications, Contact. Built to deploy on
GitHub Pages with the `langlab.info` custom domain.

```
langlab-site/
├── index.html          Home (hero + research summary)
├── research.html       Research focus areas + approaches
├── people.html         PI + lab members
├── publications.html   Papers grouped by year
├── contact.html        Address / email / affiliation
├── styles.css          All styling (design system at the top)
├── assets/site.js      Mobile menu toggle
├── CNAME               Tells GitHub Pages to serve langlab.info
└── .nojekyll           Skips Jekyll processing (serve files as-is)
```

## Editing it

Everything to fill in is marked with `[square brackets]` — search the files for
`[` to find them. Your name, email, and model organisms are already in place;
the research focus-area details are left as placeholders so you can decide
what's public (some of your current work is unpublished — keep grant-aim
specifics off until you're ready).

**Photos.** Drop images into `assets/` (e.g. `assets/kevin-lang.jpg`) and
replace the placeholder block in `people.html` with:
`<div class="photo"><img src="assets/kevin-lang.jpg" alt="Kevin Lang"></div>`

**Adding a person / paper.** Copy one `<article class="person">…</article>` or
`<article class="pub">…</article>` block and edit it. Wrap your own name in
`<span class="me">Lang K</span>` to bold it in a citation.

**Changing the look.** Open `styles.css` — the `:root` block at the top holds
the colors and fonts. Change `--accent` to recolor every link and highlight;
swap `--chan-mag` / `--chan-cyan` to retune the microscope-field motif; change
the four font variables to restyle the type.

## Deploying to GitHub Pages + keeping langlab.info

### 1. Put the files in a repo
Create a new GitHub repo (public — private needs a paid plan for Pages). Then,
from inside this folder:

```bash
git init
git add -A
git commit -m "Initial Lang Lab site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Or use GitHub's web uploader: "Add file" → "Upload files" → drag everything
in, including the dotfile `.nojekyll`.)

### 2. Turn on Pages
Repo → **Settings** → **Pages** → under "Build and deployment", Source =
**Deploy from a branch**, Branch = **main**, folder = **/ (root)** → Save.
It goes live at `https://<your-username>.github.io/<repo-name>/` in a minute or
two.

### 3. Point langlab.info at it
The `CNAME` file already tells Pages to expect `langlab.info`. On the Pages
settings page, enter `langlab.info` under "Custom domain" if it isn't already
shown. Then at whoever manages the domain's DNS, add:

- Four **A records** for the apex `langlab.info` →
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME record** for `www` → `<your-username>.github.io`

If `langlab.info` is still locked inside Wix, either move the domain's DNS to a
registrar you control (Cloudflare/Namecheap) or repoint it there. Once it
resolves, tick **"Enforce HTTPS"** in the Pages settings — GitHub issues the
certificate automatically.

### 4. Cancel Wix
Once langlab.info loads the new site over HTTPS, cancel the Wix plan. Ongoing
cost drops to just the ~$15/year domain registration.

## Later: automatic publications

Because this lives on GitHub Pages, the natural upgrade when hand-editing gets
old is a BibTeX-driven setup (e.g. the `al-folio` Jekyll template), where new
papers come from a `.bib` file instead of hand-written HTML. Happy to help you
migrate when you want it.
