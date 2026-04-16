# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio website for Lê Trung Kiên, built with plain HTML/CSS/JS — no build tools, bundlers, or frameworks. Open `index.html` directly in a browser to run it.

## Architecture

Three files, each with a single responsibility:

- **`index.html`** — all content and structure. Sections follow the order: `#about` (hero), `#skills`, `#education`, `#projects`, `#contact`. The nav links anchor to these IDs.
- **`style.css`** — dark theme using CSS custom properties defined in `:root`. Layout uses CSS Grid and Flexbox. Scroll-reveal animation state is toggled via the `.reveal` / `.visible` classes added by JS.
- **`script.js`** — three behaviors: typed-text loop (phrases array at top), IntersectionObserver-based scroll reveal, and active nav highlight on scroll.

## Key Conventions

- All theme colors are CSS variables in `:root` (`--accent`, `--bg`, `--surface`, etc.) — change colors there, not inline.
- Scroll-reveal: any new card/element that should animate in must be matched by the `querySelectorAll` selector in `script.js`.
- The typed phrases list is at the top of `script.js` in the `phrases` array — easy to extend.
- No external dependencies except two Google Fonts (`Inter`, `Fira Code`) loaded via CDN `<link>` in `<head>`.
