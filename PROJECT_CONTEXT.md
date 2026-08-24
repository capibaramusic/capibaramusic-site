# Capibara Music — Project Context

This document is the permanent design and development reference for the Capibara Music website. Future work must preserve the visual identity, structural principles, and approved decisions documented here.

## Project

Capibara Music is a cultural association based in Barcelona. Its work encompasses:

- Artistic circulation
- Cultural production
- International cooperation
- Education and mediation
- Funding and innovation

## Website Goal

This is not a promotional band website. It represents the identity, perspective, and work of the association itself.

The website must communicate:

- Professionalism
- International projection
- Trust
- Curation
- Contemporary cultural thinking

Every design and development decision should reinforce Capibara Music as a credible, thoughtful, internationally connected cultural organization.

## Visual Identity

The visual identity must be:

- Contemporary
- Minimal
- Editorial
- Elegant
- Typographically strong
- Generous with negative space
- Premium in feeling
- International

It must never feel:

- Corporate
- Overloaded
- Generic

Reference websites may be used only to study composition, hierarchy, and interaction. Never copy another studio's colors, typography, or visual identity. References are directional tools, not templates.

## Color System

### Primary base

- Off white
- Near black
- Neutral greys

These neutral colors form the dominant visual environment and support the editorial character of the site.

### Accent

- Lime green

Lime green must be used only as an accent. Appropriate uses include:

- Active language states
- Hover states
- Indicators
- Subtle interface details

Never use lime green as a dominant interface color, large background treatment, or substitute for the neutral foundation.

## Typography

Typography is a primary expression of the brand.

- Use large, bold headlines.
- Maintain a very strong and immediately legible hierarchy.
- Preserve an editorial feeling.
- Avoid decorative fonts.
- Favor clarity, confidence, and consistency.
- Treat consistency as more important than novelty.

Typography should feel contemporary and deliberate without becoming fashionable for its own sake.

The approved Hero is the typographic reference for the complete website. All interface typography must use the shared semantic roles defined in `app/globals.css`:

- Hero primary: black display type used only for the main Capibara Music title.
- Hero secondary: extra-bold association descriptor used only in the Hero.
- Hero metadata: regular supporting location line.
- Section label: small, semibold, uppercase text with consistent tracking.
- Section heading: bold editorial heading with a tight line height and negative tracking.
- Feature title: bold title for expanded or emphasized content.
- Card title: bold title for editorial cards.
- Item title: semibold title for project blocks and compact interactive items.
- Body: regular long-form text with generous line height.
- Small body: regular supporting text for cards and detail panels.
- Navigation and text links: restrained semibold or regular treatments.
- Footer signature, label, text, and metadata: a compact hierarchy derived from the main system.

Use only the shared regular, semibold, bold, extra-bold, and black weight tokens. Do not introduce one-off sizes, weights, line heights, or letter spacing when an existing semantic role applies.

## Hero

The Hero composition is approved:

- `CAPIBARA MUSIC` is the main visual element.
- `Asociación Cultural` sits directly underneath.
- `Barcelona · Europa · Latinoamérica` appears underneath the association label.
- The logo sits on the right.
- The EN/ES selector and hamburger menu sit in the upper-right.

Do not redesign this section unless explicitly instructed.

The official monochrome Capibara Music logo is stored at `public/logo/logo capi vectorial.svg`. This single asset must be reused everywhere the logo appears. Do not duplicate, recolor, rasterize, rotate, animate, or apply visual effects to it.

## About

The About section must remain minimal and editorial. Its focus is the association: its purpose, perspective, relationships, and cultural role.

Do not shift the section's focus toward individual artists.

## Areas

The Areas section consists of four horizontal areas.

- Areas are expandable.
- Only one area is expanded at a time.
- Preserve the horizontal editorial structure.
- Do not convert the areas into cards.

## Roster

The Roster is the signature element of the website. Its geometry is already approved and must be treated as permanent.

Rules:

- Use exactly eight irregular interlocking pieces.
- Use an SVG implementation.
- Preserve the approved geometry permanently.
- Never replace it with cards.
- Never replace it with a carousel.
- Never replace it with masonry.
- Desktop must keep the assembled geometry.
- Mobile must keep an assembled vertical composition.

Implementation is intentionally paused. Do not improvise, simplify, substitute, or resume it without explicit instruction.

## Services

Services use an editorial indexed list.

The presentation must remain:

- Simple
- Minimal
- Structured
- Easy to scan

Avoid turning services into promotional cards or adding unnecessary visual decoration.

## News

News uses minimal editorial cards with generous whitespace.

The section should prioritize content hierarchy and breathing room over density, decoration, or conventional marketing-card treatments.

## Contact

The Contact section must remain minimal, professional, and international in tone.

It should make communication feel direct and credible without becoming visually busy or sales-oriented.

## Footer

The Footer must remain:

- Minimal
- Elegant
- Focused on simple navigation

Avoid adding unnecessary columns, decoration, promotional content, or visual weight.

## Responsive Design

The design is desktop first, but responsive behavior must preserve the composition and its hierarchy.

Do not simply stack every element vertically as a default mobile solution. Each responsive adaptation must consider:

- Visual hierarchy
- Relationships between elements
- Editorial rhythm
- Negative space
- The identity of the original composition

Simplification is acceptable when necessary, but the design intent must remain recognizable.

## Development Rules

Before modifying any component:

1. Inspect the existing implementation.
2. Identify and preserve approved work.
3. Avoid unnecessary redesign.
4. Modify the minimum amount of code possible.

Never replace an entire component when a localized modification is sufficient.

Treat established geometry, composition, hierarchy, and interaction decisions as constraints rather than suggestions. New work should integrate with the existing system instead of resetting it.

### Canonical Development Language

Spanish (Castellano) is the canonical development language.

- Every section, heading, label, navigation item, placeholder, accessibility label, and piece of temporary content must be created and approved in Spanish first.
- An English version may be created only after the Spanish version has been approved.
- Spanish remains the canonical source language, while the published website defaults to English.
- All user-facing copy must live in the dedicated locale content modules rather than being hardcoded in components.
- Components must consume the centralized locale state and must remain independent of any specific language.
- New interface copy must use neutral, professional Spanish appropriate for an international cultural association.
- Avoid commercial language, bureaucratic phrasing, and literal machine translations.

## Future Development

The project is expected to include:

- Animations
- Multilingual support
- SVG Roster interaction
- CMS-ready content
- Accessibility improvements
- Performance optimization

These future capabilities must be introduced without compromising the approved visual identity or replacing established compositions unnecessarily.
