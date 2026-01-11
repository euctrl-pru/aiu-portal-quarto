# CLAUDE.md - AIU Portal Quarto Migration Guide

This file provides guidance for AI assistants working on this codebase.

## Project Overview

This is a **Quarto migration** of the EUROCONTROL Aviation Intelligence Portal, originally built with Hugo/blogdown. The live site is at [ansperformance.eu](https://ansperformance.eu/).

**Goal:** Reproduce the website visually while using native Quarto features and cleaner CSS/SCSS, minimizing embedded HTML.

## Tech Stack

- **Framework:** Quarto (website project)
- **Language:** R (for data processing, some HTML generation)
- **Styling:** SCSS with Bootstrap 5 (Cosmo theme base)
- **Extensions:** `mcanouil/quarto-iconify`, `quarto-ext`
- **Deployment:** Netlify

## Project Structure

```
├── _quarto.yml              # Main Quarto config (navbar, footer, theme)
├── index.qmd                # Homepage with network dashboard + carousel
├── styles.scss              # SCSS rules (should contain all styles)
├── styles.css               # Legacy CSS (to be merged into SCSS)
├── _network-*.qmd           # Network dashboard components
├── _subscribe.qmd           # Subscribe footer section
├── carousel.R               # R code generating Bootstrap carousel
├── carousel.yml             # Carousel content data
├── performance-areas-gallery.yml  # Performance area cards data
├── ejs/                     # EJS templates for listings
├── _extensions/             # Quarto extensions
├── images/                  # Static images
│   └── landing/            # Homepage thumbnails
├── about/                   # About section pages
├── acronym/                 # Acronym definitions (mostly .md)
├── bibliography/            # Bibliography pages
├── dashboard/               # Stakeholder dashboards
├── data/                    # Data download page
├── definition/              # Term definitions
├── methodology/             # Methodology documentation
├── traffic/                 # Traffic section
└── _freeze/                 # Quarto freeze cache
```

## Build Commands

```bash
# Preview site locally
quarto preview

# Render full site
quarto render

# Render single file
quarto render index.qmd
```

## Key Conventions

### Quarto Markdown

- Use `:::` div syntax instead of raw HTML `<div>` where possible
- Use `{.class}` for CSS classes: `[text]{.classname}`
- Use shortcodes: `{{< iconify fa6-solid plane >}}`
- Use includes: `{{< include "_file.qmd" >}}`

### SCSS Organization

The `styles.scss` file should follow Quarto's structure:
```scss
/*-- scss:defaults --*/
$brand-primary: #053253;
// ... variables

/*-- scss:rules --*/
// ... CSS rules
```

### Naming

- Quarto files: `kebab-case.qmd`
- CSS classes: `kebab-case`
- IDs for JS hooks: `snake_case` (e.g., `#day_traffic`)

## Migration Status

### ✅ Completed
- Basic Quarto structure and navigation
- Homepage skeleton with network dashboard
- Definition, acronym, methodology sections
- About pages with PRC member listings
- Data download page

### 🔄 In Progress
- CSS/SCSS consolidation
- Network dashboard (uses raw HTML)
- Carousel (R-generated HTML)

### ❌ Not Yet Migrated
- Publications section (`/publications/`)
- Capacity section (`/capacity/`)
- Efficiency section (`/efficiency/`)
- Economics section (`/economics/`)
- Full footer with app download QR codes
- Hero section with CTA buttons

## Migration Priorities

### Phase 1: CSS Cleanup
1. Merge `styles.css` into `styles.scss`
2. Fix invalid CSS syntax (// comments → /* */)
3. Define SCSS variables for brand colors

### Phase 2: Remove Embedded HTML
Convert `{=html}` blocks to Quarto native syntax:

**Before:**
```html
{=html}
<div class="stat-card">
  <p class="label">Total flights</p>
  <p id="day_traffic" class="value">n/a</p>
</div>
```

**After:**
```markdown
::: {.stat-card}
[Total flights]{.label}

[n/a]{.value #day_traffic}
:::
```

### Phase 3: Footer Enhancement
Add missing elements to footer:
- Subscribe section with newsletter button
- App download section with QR codes
- RSS link

### Phase 4: Simplify Carousel
Options:
1. Replace R-generated carousel with Quarto native cards
2. Use simpler "What's New" list format
3. Keep carousel but move to cleaner implementation

### Phase 5: Complete Content Sections
- `/publications/` - listing of reports
- `/capacity/`, `/efficiency/`, `/economics/` - performance area pages
- Stakeholder dashboards (airport, ANSP, state views)

## Important Files

| File | Purpose | Notes |
|------|---------|-------|
| `_quarto.yml` | Site config | Navbar structure, footer, theme |
| `index.qmd` | Homepage | Contains dashboard + carousel |
| `_network-api.qmd` | API data fetching | JavaScript for live data |
| `_network-dashboard-flights.qmd` | Flight stats display | Heavy HTML, needs refactor |
| `carousel.R` | Carousel generator | Consider replacing |
| `data/index.qmd` | Data downloads | Complex tables, works well |

## Brand Colors

```scss
$brand-primary: #053253;      // Header/footer background
$brand-secondary: #337ab7;    // Links, accents
$bg-light: #f8f9fa;           // Light backgrounds
$hero-bg: rgb(240, 245, 249); // Hero section
```

## External Dependencies

- Network data: `https://www.eurocontrol.int/Economics/Oscar/` (iframes)
- Newsletter signup: `https://www.eurocontrol.int/form/aviation-intelligence-unit-aiu-newsletter`
- External dashboards: Various EUROCONTROL hosted dashboards

## Testing

1. Run `quarto preview` and check all navigation links
2. Verify network dashboard loads data (requires internet)
3. Check responsive layout at mobile/tablet breakpoints
4. Validate carousel transitions work

## Common Issues

### Carousel not displaying
- Check `carousel.yml` has valid image paths
- Ensure images exist in `images/landing/`

### Network data showing "n/a"
- JavaScript in `_network-api.qmd` fetches from external API
- May fail if EUROCONTROL API is down

### SCSS not applying
- Ensure `styles.scss` is referenced in `_quarto.yml`
- Check for syntax errors (SCSS is strict)

## Reference

- [Original Hugo site repo](https://github.com/euctrl-pru/aiu-portal)
- [Live site](https://ansperformance.eu/)
- [Quarto documentation](https://quarto.org/docs/guide/)
- [Bootstrap 5 docs](https://getbootstrap.com/docs/5.3/)
