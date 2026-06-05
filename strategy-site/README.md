# Engineering Entrepreneurship Programming — website

A clean, institutional static site built from two source documents:

- `content/01-programming-revamp.md` — the strategy and the approval ask (the spine of the site).
- `content/02-product-studio.md` — the operating design for Product Studio, the Validate-stage program, presented as a section you drill into from the strategy.

The site has two tiers. The strategy is the parent; Product Studio is a child you open from it. The consolidated budget (about $52,600) and the pipeline outcomes table live only in the strategy. The Product Studio pages link back to them rather than repeating them.

## What the build does

`build.mjs` is a small zero-dependency Node generator. It reads the two markdown files (using their frontmatter for titles, ordering, and the Draft tag), renders the body to HTML, turns every markdown table into a responsive table that stacks into readable cards on a phone, and writes a static site to `dist/`:

- `dist/index.html` — the strategy
- `dist/product-studio.html` — Product Studio
- `dist/styles.css`

No JavaScript runs on the published site, and there are no runtime dependencies.

## Preview

You need Node (v18+). There is nothing to `npm install`.

```bash
cd strategy-site
node build.mjs            # writes the dist/ folder
```

Then either open the file directly:

```bash
open dist/index.html      # macOS  (use xdg-open on Linux, start on Windows)
```

or serve it locally (nicer for clicking between pages):

```bash
npm run serve             # builds, then serves dist/ at http://localhost:8080
# or:  cd dist && python3 -m http.server 8080
```

The pages are fully static and use relative links, so opening `dist/index.html` straight from disk works too.

## Deploy

`dist/` is the whole site. Deploy it to any static host.

- **GitHub Pages (project subpath).** Push `dist/` to a branch and point Pages at it, or use an action that publishes `dist/`. The `.nojekyll` file is already included so Pages serves it as-is. The site uses relative links, so it works from any subpath.
- **Netlify / Cloudflare Pages / Vercel.** Set the build command to `node build.mjs` and the publish directory to `dist`.
- **Any web server.** Copy the contents of `dist/` to the web root.

## Renaming "Product Studio"

The name is provisional (see Appendix D in the Product Studio document). It lives only in the two markdown files. To rename, find-and-replace `Product Studio` across `content/01-programming-revamp.md` and `content/02-product-studio.md`, then rebuild.

## Editing content

Edit the markdown in `content/`, then run `node build.mjs` again. Section
headings (`##`) become the page sections and the on-this-page navigation, in
document order.
