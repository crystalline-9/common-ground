---------------------------------------------------------------------------------------------------------------------------------------

Oct 04 2026

# Common Ground — Running Ideas

A living list of product ideas, questions, design decisions, and future work. Add ideas as they arise; they do not need to be fully formed.

## Current direction

### Two entry experiences

Common Ground will have two primary ways to enter and use the platform:

1. **Visual** — picture- and symbol-first, designed to work without requiring literacy, written language, or familiarity with smartphones.
2. **Open** — a more conventional exploratory interface for navigating resources and community information.

“Learn More” is informational content, not a third mode. It can live in About and other explanatory pages.

Both experiences should use the same underlying information. The presentation and interaction may differ; the resources themselves should not.

### Visual experience: accessibility checks

Design and test this experience against the possibility that a person:

- Cannot read any written language.
- Does not recognize common letters or interface conventions.
- Has little or no experience using smartphones.
- May not understand icons unless they are concrete and clearly presented.

Do not assume that an icon is universally understood. Test symbols and actions with people who have different experiences.

## Feedback and sharing

Once the prototype is ready to share, invite feedback in deliberate waves from people with different perspectives, including community partners, technical people, educators, and other potential users.

Make it clear that this is an evolving prototype. Invite people to look whenever they have time; feedback is welcome, but participation is not an obligation.

## Open questions

- What should the two entry experiences be called?
- What visual symbols and interaction patterns are understandable without written instructions?
- How can someone recover easily after choosing the wrong thing?
- How should the two experiences stay synchronized as the platform grows?
- What feedback should we seek from each group of people?

## New idea capture

**Date:**
**Idea:**
**Why it matters:**
**Questions / possible next steps:**
**Status:** Unsorted / Exploring / Planned / In progress / Parked

---------------------------------------------------------------------------------------------------------------------------------------

Oct 13 2026

## Integrations, Data Sources & Scalability

**Status:** Exploratory idea — future research and development  
**Core principle:** Complement existing community systems rather than unnecessarily duplicate them.

### 1. Connect to existing information sources

Common Ground should explore ways to gather information from organizations that already publish events, services, and community resources online.

Rather than requiring every organization to manually maintain a second listing on Common Ground, the platform could eventually support connections to existing sources, such as:

- **Organization calendars:** Explore integrations with Google Calendar and other calendar providers, where organizations can authorize their calendars or share supported calendar feeds.
- **Municipal and nonprofit websites:** Investigate ways to collect or synchronize publicly available event and resource information.
- **Existing community directories:** Explore partnerships or data-sharing arrangements with established directories and information services.
- **Direct submissions:** Provide an optional portal where organizations, municipalities, and authorized community partners can submit new listings, update information, or correct outdated entries.

The goal is to make participation as easy as possible for organizations while helping community members discover information across multiple sources in one place.

### 2. Preserve source attribution and trust

Information should retain its original source wherever possible.

Potential features include:

- Identifying the organization responsible for a listing.
- Visually distinguishing verified organizations or official government sources from unverified community submissions.
- Displaying links to the original source so users can confirm details.
- Recording when information was last synchronized or reviewed.
- Providing a way to flag incorrect, outdated, or unavailable information.

Verification should communicate what has actually been verified. An official source, for example, does not automatically guarantee that every listing is current.

### 3. Design for multiple communities and locations

Common Ground should be designed to expand beyond its initial community without requiring a separate platform for every city or region.

The initial focus can remain local, with Orillia and the surrounding area providing a practical starting point. The underlying approach should eventually support communities such as Toronto and other locations, potentially internationally.

Areas to explore:

- Location-aware discovery and filtering.
- Different data sources and community partners in different regions.
- Support for multiple languages and regional differences in terminology.
- Reusable integrations that can serve more than one organization or location.
- A consistent core platform that can accommodate local needs without assuming every community works the same way.

### 4. Keep accessibility central

Integrations should support Common Ground's accessibility goals, not undermine them.

The platform should make complex information easier to discover and understand, regardless of a person's literacy level, language proficiency, disability, familiarity with technology, or circumstances.

This includes considering people who may struggle with conventional search interfaces, long descriptions, unfamiliar terminology, or navigating multiple websites.

Potential future considerations include plain-language summaries, symbol-first navigation, multilingual information, and clear explanations of where information comes from.

### 5. Technical approaches to investigate

These are possibilities to research rather than implementation decisions:

- Calendar APIs and authorized integrations.
- Public calendar feeds and supported event formats.
- APIs or data exports offered by municipalities and existing directories.
- A centralized resource database that stores source information and synchronization metadata.
- Scheduled synchronization, duplicate detection, and update handling.
- Optional organization accounts or submission portals.
- AI-assisted categorization or matching, if it provides a clear benefit beyond simpler, more reliable methods.

Prefer free, open, interoperable, and maintainable solutions wherever practical. Avoid unnecessary paid services and avoid making AI a dependency when conventional software can solve the problem more reliably.

### 6. Questions to answer before implementation

- Which calendar providers and data formats can realistically be supported?
- What permissions are required, and can organizations revoke access?
- How frequently can information be updated?
- How should cancellations, deleted events, and outdated listings be handled?
- How can duplicate listings be detected across multiple sources?
- How will source ownership, attribution, privacy, and verification work?
- Which integrations offer the greatest value for the least development and maintenance effort?
- How can the system remain affordable and reliable as the number of communities grows?

### Guiding principle

**Common Ground should connect people to existing community knowledge, make that knowledge easier to access, and reduce unnecessary work for the organizations providing it.**

The objective is not to replace every calendar, directory, or community initiative. It is to make useful information easier to find across them.

---------------------------------------------------------------------------------------------------------------------------------------


