# Product Requirements Document (PRD)
## DELICI — Restaurant Landing Page

---

## 1. Project Overview

**Project Name:** DELICI  
**Type:** Restaurant Website / Landing Page  
**Platform:** Web (Desktop & Mobile)  
**Tech Stack:** HTML5, CSS3, Bootstrap 5, AOS (Animate On Scroll), Font Awesome, Google Fonts  

DELICI is a fully responsive, single-page restaurant website designed to showcase a fine-dining experience. It presents the restaurant's menu, story, team, events, and reservation system in a visually rich, dark-themed layout.

---

## 2. Goals & Objectives

- Give visitors a premium first impression of the restaurant through a full-screen video hero section.
- Allow customers to browse the menu, learn about the restaurant, and make table reservations online.
- Highlight the restaurant's strengths: hygiene, environment, skilled chefs, and event hosting.
- Provide easy access to contact information and social media links.
- Deliver a smooth, animated browsing experience across all screen sizes.

---

## 3. Target Users

| User Type | Description |
|---|---|
| Potential Customers | People looking to dine in or make a reservation |
| Returning Customers | Loyal diners checking for new menu items or events |
| Event Planners | Individuals or groups looking to host private events |
| General Visitors | Anyone discovering the restaurant online |

---

## 4. Sections & Features

### 4.1 Hero Section
- Full-screen background video (autoplay, muted, looped)
- Top info bar: address, opening hours, phone, and email
- Responsive navigation bar with links: Home, About, Menu, Contact
- Hero headline: *"Flavors Inspired by the Seasons"*
- Call-to-action button: **Explore Now**
- Scroll-to-top floating button

### 4.2 Royalty / Explore Section
- Highlights three food categories: **Breakfast**, **Appetizers**, **Drinks**
- Each category has an image and a "VIEW MENU" link
- Animated card flip effect using AOS library

### 4.3 Our Story (About Section)
- Restaurant background narrative
- Overlapping image layout (main image + badge image)
- Phone booking number prominently displayed
- "READ MORE" CTA button

### 4.4 Special Dish Highlight
- Featured dish: **Lobster Tortellini**
- Original price vs. discounted price display
- Badge icon and decorative separator
- "VIEW MORE" CTA button

### 4.5 Delicious Menu Section
- Menu categories: Morning, Weekday Lunch, Dinner, Wines
- Six menu items displayed with image, name, price, and description:
  - Greek Salad — $25.00
  - Lasagne (Seasonal) — $40.00
  - Butternut Pumpkin — $10.00
  - Tokusen Wagyu (New) — $39.00
  - Olivas Rellenas — $25.00
  - Opu Fish — $49.00
- Winter dining hours note
- "VIEW ALL MENU" CTA button

### 4.6 Best Specialties
- Four specialty dishes displayed in a staggered grid:
  - Butternut Pumpkin
  - Tokusen Wagyu
  - Greek Salad
  - Opu Fish
- Hover animation on images

### 4.7 Customer Testimonial
- Full-width image with dark overlay
- Featured quote from a satisfied customer
- Three customer avatar images

### 4.8 Online Reservation (Contact Section)
- Reservation form fields: Name, Phone, Number of Persons, Date, Time, Message
- Submit button: **BOOK A TABLE**
- Contact info panel: phone, address, lunch hours, dinner hours

### 4.9 Our Strength (Why Choose Us)
- Four strength cards:
  - Hygienic Food
  - Fresh Environment
  - Skilled Chefs
  - Event & Party
- Three-column featured section: Special Dishes, Upcoming Events, Chef Choice

### 4.10 Meet Our Chefs (Team Section)
- Three chef profiles with photos and social media icons (hover reveal):
  - Willium Joe — Master Chef
  - Steave Den — Master Chef
  - Lily Sopy — Master Chef

### 4.11 Video / Stats Section
- Background image with play button
- Restaurant statistics:
  - 150+ Daily Orders
  - 82+ Special Dishes
  - 35+ Expert Chefs
  - 10+ Awards Won

### 4.12 Upcoming Events
- Three event cards with date badges and category labels
- Events: Food & Flavour (15/09/2026), Healthy Food (08/09/2026), Recipe (03/09/2026)
- "VIEW OUR BLOG" CTA button

### 4.13 Footer
- Navigation links: Home, Menus, About Us, Our Chefs, Contact
- Central footer box with logo, address, email, phone, hours
- Newsletter subscription with email input and **SUBSCRIBE** button
- Social media links: Facebook, Instagram, Twitter, YouTube, Google Map
- Copyright notice

---

## 5. Design Specifications

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Background (primary) | Black | `#000000` |
| Background (sections) | Dark charcoal | `#171819` |
| Background (alternate) | Deep dark | `#1f2020` |
| Accent / Gold | Warm gold | `#e3be7f` / `#e5c387` |
| Text (primary) | White | `#ffffff` |
| Text (muted) | Gray | `#9b9b9b` / `#636562` |
| Border / Divider | Dark gray | `#454647` |
| Button hover | Gold | `#caa169` |

### Typography
| Font | Usage |
|---|---|
| Forum (serif) | Headings, section titles |
| DM Sans (sans-serif) | Body text, labels, navigation |

### Animations
- AOS (Animate On Scroll): fade-up, flip-left effects
- CSS hover transitions on buttons, images, nav links
- Chef card social icon reveal on hover
- Image scale and rotate effects on specialty items

---

## 6. Responsive Design

| Breakpoint | Behavior |
|---|---|
| Desktop (lg) | Full multi-column layouts, all sections visible |
| Tablet (md) | Two-column grids, some elements hidden |
| Mobile (sm) | Single-column stacked layout, hamburger menu |

Bootstrap 5 grid system is used throughout for responsive behavior.

---

## 7. External Dependencies

| Library | Purpose |
|---|---|
| Bootstrap 5.3.2 | Grid system, components, utilities |
| Bootstrap Icons 1.3.0 | UI icons |
| Font Awesome 6.5.0 | Social media and general icons |
| AOS 2.3.1 | Scroll-triggered animations |
| Google Fonts | Forum & DM Sans typefaces |

---

## 8. Non-Functional Requirements

- **Performance:** Video is muted and looped to minimize load impact; images are locally hosted.
- **Accessibility:** Semantic HTML tags used; alt attributes on images; keyboard-navigable nav.
- **SEO:** Proper heading hierarchy (h1–h6); descriptive page title; meta charset and viewport set.
- **Browser Compatibility:** Targets modern browsers (Chrome, Firefox, Edge, Safari).
- **Smooth Scrolling:** Enabled via `scroll-behavior: smooth` in CSS.

---

## 9. Out of Scope

- Backend / server-side processing (reservation form is front-end only)
- User authentication or accounts
- Real-time menu updates or CMS integration
- Payment processing
- Live chat or chatbot

---

## 10. Future Enhancements

- Connect reservation form to a backend (Node.js / PHP / Firebase)
- Add a working menu filter (Morning / Lunch / Dinner / Wines tabs)
- Integrate Google Maps for location
- Add a photo gallery or lightbox
- Implement a blog/news page for events
- Add multi-language support
