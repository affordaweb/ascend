Site Facts Requirement



Before performing any content, SEO, or design changes:



/\* READ\_SITE\_FACTS \*/



Agents must read SITE\_FACTS.md.



SITE\_FACTS.md contains the authoritative information for:



• business context

• services

• content voice

• design philosophy

• brand messaging



Agents must not invent or override information defined there.



Repository Management



All repositories must be created under the AffordaWeb GitHub organization.



Personal accounts must never be used.



/\* GITHUB\_RULES \*/



Allowed

AffordaWeb organization repositories



Not allowed

Personal repositories



This ensures all projects remain within the managed infrastructure.



Date Reference

/\* CURRENT\_DATE \*/



Today's date is:



\[YYYY-MM-DD]



Agents should use the current date for logs, documentation updates, and project records.



Project README Requirements



Project-specific README files must follow a consistent structure.



/\* README\_RULES \*/



Every README must start with:



The technology stack



Any mandatory operational information



Examples



• framework

• language

• hosting provider

• Vercel dev URL

• production domain



README files should remain concise and practical.



Avoid unnecessary explanations.



Documentation Style



The project owner prefers documentation that is:



• accurate

• current

• succinct



README files must remain up to date with the current project configuration.



Avoid command snippets unless absolutely required.



Do not wrap instructions in backticks.



Autonomous Agent Requirements



Projects using autonomous agents must include an agents directory.



/\* AGENT\_DIRECTORY\_RULE \*/



Required structure



/agents/



Inside the agents directory there must be a root README.md.



This file should contain copy-and-paste commands to run the agents.



Example execution command



WORK=\~/affordaweb/CLIENT-NAME/agents/design-agent MODEL="sonnet" MAX\_LOOPS=5 bash \~/affordaweb/ENGINE/run.sh



Rules



• Keep instructions short

• Do not describe how the agents work

• Do not list all parameters or model options

• Only provide runnable commands



Browser Automation Rules



When using Playwright or other browser automation tools:



/\* BROWSER\_AUTOMATION\_RULES \*/



Always run browsers in headless mode.



This prevents automation tools from interrupting the user’s workspace.



Agents must avoid launching visible browser windows unless debugging is required.



Universal Agent Guardrails



All agents operating within the project must follow these safety constraints.



/\* UNIVERSAL\_AGENT\_GUARDRAILS \*/

Respect Project Facts



Agents must treat SITE\_FACTS.md as the authoritative source.



Never invent business details.



Preserve Site Structure



Agents must not:



• restructure navigation

• remove core sections

• modify architecture



Structural changes require human approval.



Maintain Performance



Agents must avoid changes that significantly reduce:



• page speed

• Core Web Vitals

• layout stability



Protect SEO Foundations



Agents must not remove or damage:



• page titles

• canonical URLs

• schema markup

• sitemap entries



unless replacing them with improved versions.



Follow Design Constraints



Visual changes must respect the design philosophy defined in SITE\_FACTS.md.



Agents must reject changes that conflict with the defined aesthetic.



Single Improvement Rule



Each agent should perform one improvement per run.



This prevents large, risky automated changes.



Purpose of This Document



These rules exist to ensure that:



• autonomous agents behave predictably

• repositories remain organized

• documentation stays consistent

• automation does not disrupt the user



The rules help maintain stable, high-quality AffordaWeb projects.



Contact Form Rule

/* CONTACT_FORM_RULE */

All websites must use the AffordaWeb centralized contact form API.

Never use web3forms, Formspree, Netlify Forms, or any third-party form service.

API endpoint: https://contact-form-lake-theta.vercel.app/api/contact

Required fields in every POST request:

• name (required)
• email (required)
• message (required)
• website — set to the client site shortname (e.g. "johnsplumbing")
• _honeypot — hidden text input, must always be empty string

Optional extra fields (service, budget, phone, etc.) are passed through and displayed in the email.

The _honeypot field must be a hidden text input with display:none and tabIndex={-1}.

Honeypot example:

<input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

To add a new client domain to the allowed origins, update the ALLOWED_ORIGINS environment variable in the Vercel project at:

https://vercel.com/affordawebsolutions-3179s-projects/contact-form/settings/environment-variables

SEO and Technical Standards Rule

/* SEO_TECHNICAL_STANDARDS */

Every AffordaWeb site must include all of the following before launch.

robots.txt

Generate a robots.txt at /public/robots.txt or via app/robots.ts that:

• allows all crawlers on public pages
• disallows /api/ routes
• includes the sitemap URL

XML Sitemap

Generate a dynamic sitemap at app/sitemap.ts that:

• includes all public pages with canonical URLs
• includes lastModified dates
• updates automatically when pages are added

Open Graph and Social Sharing

Every page must have full Open Graph metadata:

• og:title
• og:description
• og:image (1200x630px, hosted on the domain)
• og:url
• og:type
• twitter:card (summary_large_image)
• twitter:title
• twitter:description
• twitter:image

Use Next.js metadata API for all meta tags. Never use raw HTML head tags.

Per-Page SEO Metadata

Every page must have unique:

• title tag (under 60 characters, includes primary keyword and brand)
• meta description (140-160 characters, written for humans)
• canonical URL

Schema Markup

Every site must include at minimum:

• Organization schema on the homepage
• LocalBusiness schema if the client has a physical location
• WebPage schema on key pages
• FAQPage schema on any FAQ section
• BreadcrumbList on interior pages

Use JSON-LD format inside a <script type="application/ld+json"> block.

PageSpeed Requirements

Every site must score above 90 on Google PageSpeed Insights (mobile) before launch.

Required optimizations:

• All images in WebP or AVIF format with width and height defined
• next/image used for all images
• next/font used for all fonts (no external font requests)
• No render-blocking scripts
• Lazy load below-the-fold content
• Core Web Vitals: LCP under 2.5s, CLS under 0.1, INP under 200ms

Agents must run PageSpeed analysis and fix issues until score is above 90.

Design Standard Rule

/* DESIGN_STANDARD */

All AffordaWeb sites must be visually striking, luxury, and professional.

Flat, plain, boring, or generic-looking sites are not acceptable.

Every site must pass this checklist before launch:

• Hero is bold and immersive — full-viewport, strong headline, rich background
• Cards have visual depth — shadows, borders, or glass-morphism
• Typography has clear hierarchy — strong contrast between heading levels
• Spacing is generous — sections breathe
• CTAs are prominent with hover animations
• Color palette is intentional — not default Tailwind gray
• Animations are present — scroll reveals, hover lifts, fade-ins
• Mobile is as polished as desktop

/* END_PROJECT_RULES */

