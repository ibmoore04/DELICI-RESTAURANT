# Codebase Error Report

A full audit of `index.html` and `style.css`. Errors are grouped by category.

---

## 1. HTML Errors

### 1.1 Duplicate `id` Attribute — `id="explore-link"` used 3 times
**File:** `index.html` — Royalty section  
**Problem:** IDs must be unique per page. Using the same ID on multiple elements breaks CSS targeting, JavaScript `getElementById`, and accessibility tools.  
**Fix:** Replace `id="explore-link"` with a class: `class="explore-link"` on all three anchor tags, then update CSS selector from `#explore-link` to `.explore-link`.

---

### 1.2 Duplicate `<link rel="preconnect">` Tags for Google Fonts
**File:** `index.html` — `<head>`  
**Problem:** `https://fonts.googleapis.com` and `https://fonts.gstatic.com` are each preconnected twice. This is redundant and adds unnecessary overhead.  
**Fix:** Keep only one set of preconnect tags for Google Fonts.

```html
<!-- Keep only these, remove the duplicate pair below them -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

---

### 1.3 Missing `alt` Text on Several Images
**File:** `index.html`  
**Problem:** Empty `alt=""` on meaningful images fails accessibility (WCAG 1.1.1). Screen readers skip them entirely.  
**Affected images:**
- `./IMAGE/delici.jpg` (navbar logo) — use `alt="Delici Restaurant Logo"`
- `./IMAGE/del1.jpg`, `del2.jpg`, `del3.jpg` — describe the food category (e.g. `alt="Breakfast dish"`)
- `./IMAGE/story.jpg`, `best.jpg` — describe the scene
- `./IMAGE/special.jpg`, `badge.jpg` — describe content
- `./IMAGE/team2.jpg`, `team3.jpg` — use the chef's name (e.g. `alt="Chef Steave Den"`)
- Separator SVGs — add `role="presentation"` to explicitly mark as decorative

---

### 1.4 `<h6>` Nested Inside `<span>` — Invalid HTML
**File:** `index.html` — Events section  
**Problem:** `<h6>` is a block-level element and must not be nested inside `<span>`. This is invalid HTML and causes unpredictable rendering.  
**Fix:** Replace the inner `<h6>` with a `<span>` or `<p>`.

```html
<!-- Wrong -->
<span class="badge bg-dark px-1 py-1 position-absolute text-center">
    <h6 class="text-center">15/09/2026</h6>
</span>

<!-- Correct -->
<span class="badge bg-dark px-1 py-1 position-absolute text-center">
    <span class="d-block">15/09/2026</span>
</span>
```

---

### 1.5 Reservation Form Has No `action` or `method` Attribute
**File:** `index.html` — Reservation section  
**Problem:** `<form>` has no `action` or `method`, so submitting it just reloads the page and sends no data anywhere.  
**Fix:** Add a proper `action` URL and `method="post"`, or handle submission with JavaScript.

```html
<form action="/reserve" method="post">
```

---

### 1.6 Form Inputs Missing `name` and `id` Attributes
**File:** `index.html` — Reservation form  
**Problem:** All `<input>`, `<select>`, and `<textarea>` elements are missing `name` attributes (required for form submission) and `id` attributes (required to associate `<label>` elements for accessibility).  
**Fix:** Add `name`, `id`, and a matching `<label>` to every field.

```html
<!-- Example fix -->
<label for="guest-name">Your Name</label>
<input type="text" id="guest-name" name="guest_name" class="form-control rounded-0 p-3" placeholder="Your Name">
```

---

### 1.7 Footer Navigation Links to Non-Existent Anchor `#chefs`
**File:** `index.html` — Footer  
**Problem:** `href="#chefs"` has no matching `id="chefs"` anywhere on the page. Clicking it does nothing useful.  
**Fix:** Add `id="chefs"` to the team section element, or change the link to match an existing ID.

```html
<!-- Add to the team section -->
<section class="team mt-5" id="chefs" data-aos="fade-up">
```

---

### 1.8 Location Text Duplicated in Contact Box
**File:** `index.html` — Reservation section, Contact Info column  
**Problem:** The address reads `"London 9578, UK 9578, UK"` — the postcode and country are repeated twice.  
**Fix:**
```html
<p class="con">Restaurant St, Delicious City, <br> London 9578, UK</p>
```

---

### 1.9 Social Media Footer Links Are Dead (`href="#"`)
**File:** `index.html` — Footer  
**Problem:** All social links (Facebook, Instagram, Twitter, YouTube, Google Map) point to `#`, which just scrolls to the top of the page instead of the actual profiles.  
**Fix:** Replace `#` with real URLs, or remove the links until they are ready.

---

### 1.10 Copyright Year Outdated + Typo
**File:** `index.html` — Footer  
**Problem:** `© 2022 Restaurt.` — the year is outdated and "Restaurt" is a typo of "Restaurant".  
**Fix:**
```html
<p>© 2026 Restaurant. All Rights Reserved</p>
```

---

### 1.11 `<video>` Tag Missing `playsinline` Attribute
**File:** `index.html` — Hero section  
**Problem:** On iOS Safari, autoplay videos require the `playsinline` attribute or they will not autoplay and will open fullscreen instead.  
**Fix:**
```html
<video autoplay muted loop playsinline>
```

---

### 1.12 Chef Name Typo — "Willium" and "Steave"
**File:** `index.html` — Team section and Video section  
**Problem:** "Willium Joe" should likely be "William Joe", and "Steave Den" should likely be "Steve Den". Also inconsistent — the video section spells it "WILLIUM JOE".  
**Fix:** Decide on the correct spelling and apply it consistently across both sections.

---

## 2. CSS Errors

### 2.1 Overly Broad `p` Selector Overrides All Paragraphs Globally
**File:** `style.css`  
**Problem:** Two grouped selectors accidentally target ALL `<p>` tags on the entire page:
```css
.contact-box h2, p { line-height: 40px; }
.footer-box h2, p  { line-height: 40px; }
```
This overrides intentional line-heights set elsewhere (e.g. `.story p`, `.delicious p`, `.team p`, `.specialities p`).  
**Fix:** Scope the `p` selector to its parent:
```css
.contact-box h2, .contact-box p { line-height: 40px; }
.footer-box h2, .footer-box p   { line-height: 40px; }
```

---

### 2.2 `.tt` Class Defined Twice (Duplicate Rule)
**File:** `style.css`  
**Problem:** `.tt { color: #e5c387; }` is declared twice — once near the reservation section styles and once near the footer styles. The second silently overrides the first.  
**Fix:** Remove the duplicate and keep a single definition near the top of shared utilities.

---

### 2.3 `text-decoration: double underline` is Not Valid CSS
**File:** `style.css` — Multiple hover rules  
**Problem:** `double` is a valid `border-style` value but NOT a valid `text-decoration` shorthand value. All browsers ignore it.  
**Affected selectors:**
- `.nav-item a:hover`
- `.royalty a:hover`
- `.strength a:hover`
- `footer a:hover`
- `.contact-box .tt:hover`
- `.footer-box .tt:hover`
- `.delicious h4:hover`

**Fix:** Use the separate `text-decoration-style` property:
```css
text-decoration: underline;
text-decoration-style: double;
```

---

### 2.4 `font-size` Change on Hover Causes Layout Shift
**File:** `style.css`  
**Problem:** Several hover rules increase `font-size` (e.g. from `12px` to `15px` or `18px`). This causes surrounding elements to jump and shift on hover, which is jarring UX.  
**Affected:** `.nav-item a:hover`, `.royalty a:hover`, `.strength a:hover`, `footer a:hover`, `.contact-box .tt:hover`, `.footer-box .tt:hover`  
**Fix:** Remove the `font-size` change from all hover states. Use only `color` or `text-decoration` for hover feedback.

---

### 2.5 `position: absolute` in `.scroll-top` Conflicts with Bootstrap `position-fixed` Class
**File:** `index.html` + `style.css`  
**Problem:** The scroll-to-top button uses Bootstrap's `position-fixed` class in HTML, but the CSS rule `.scroll-top` sets `position: absolute`. These conflict. Bootstrap wins due to specificity, making the CSS rule dead weight and misleading.  
**Fix:** Remove `position: absolute` from `.scroll-top` in `style.css` since the HTML already applies `position-fixed` via Bootstrap.

---

### 2.6 `font-family: "Poppins"` Used But Never Imported
**File:** `style.css`  
**Problem:** `.reservation-section { font-family: "Poppins", sans-serif; }` — Poppins is not loaded via any `<link>` in the HTML. The browser silently falls back to `sans-serif`.  
**Fix:** Either import Poppins in the `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
```
Or replace `"Poppins"` with `"DM Sans"` which is already imported.

---

### 2.7 Bootstrap Icons Version is Outdated
**File:** `index.html` — `<head>`  
**Problem:** `bootstrap-icons@1.3.0` is loaded. The current stable version is 1.11+. Some icons used in the HTML (e.g. `bi-geo-alt-fill`) may not exist in 1.3.0 and will render as blank.  
**Fix:** Update to the latest version:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
```

---

## 3. Summary Table

| # | File | Type | Severity | Issue |
|---|------|------|----------|-------|
| 1.1 | index.html | HTML | High | Duplicate `id="explore-link"` on 3 elements |
| 1.2 | index.html | HTML | Low | Duplicate Google Fonts preconnect tags |
| 1.3 | index.html | Accessibility | Medium | Missing `alt` text on meaningful images |
| 1.4 | index.html | HTML | Medium | `<h6>` nested inside `<span>` (invalid) |
| 1.5 | index.html | Functional | High | Form missing `action` and `method` |
| 1.6 | index.html | Functional/A11y | High | Form fields missing `name` and `id` |
| 1.7 | index.html | Functional | Medium | Footer `#chefs` anchor does not exist |
| 1.8 | index.html | Content | Low | Address text duplicated |
| 1.9 | index.html | Functional | Low | Social links all point to `#` |
| 1.10 | index.html | Content | Low | Outdated copyright year + typo "Restaurt" |
| 1.11 | index.html | Browser Compat | Medium | Video missing `playsinline` for iOS |
| 1.12 | index.html | Content | Low | Chef name typos ("Willium", "Steave") |
| 2.1 | style.css | CSS | High | Global `p` selector overrides all paragraphs |
| 2.2 | style.css | CSS | Low | `.tt` class declared twice |
| 2.3 | style.css | CSS | Medium | `text-decoration: double underline` invalid |
| 2.4 | style.css | UX | Medium | `font-size` on hover causes layout shift |
| 2.5 | style.css | CSS | Low | `position: absolute` conflicts with Bootstrap class |
| 2.6 | style.css | CSS | Medium | `font-family: Poppins` used but never imported |
| 2.7 | index.html | CSS | Medium | Bootstrap Icons version 1.3.0 is outdated |
