# Common Ground — Project Vision & Architecture

**Project:** Common Ground  
**Status:** Early-stage prototype  
**Purpose:** A location-based community resource discovery and information platform.

## 1. The central idea

Common Ground helps people discover what is available in their community based on where they are and what they need.

A user should be able to enter a location or drop a pin on a map, select a search radius, and discover relevant local resources, services, activities, events, and opportunities.

The platform should not depend entirely on users already knowing which organizations or services exist.

Common Ground should actively help discover, organize, maintain, and make local information accessible.

**Guiding principle:** Community is not just a safety net.

## 2. How the platform should work

### A. Location selection

Users can:

- Enter an address, town, postal code, or other location.
- Drop a pin on a map.
- Select a search radius.
- Search by category or specific need.
- Use optional browser geolocation if they choose.

Location sharing should remain optional. The platform should avoid collecting unnecessary personal information.

### B. Resource discovery

Common Ground should gather information from multiple permitted sources, including:

- Community organization websites.
- Municipal and government directories.
- Local event calendars.
- Public datasets and resource databases.
- Food banks, shelters, libraries, healthcare and support services.
- Existing community platforms and information providers.
- Direct submissions from local organizations and residents.

Sources may be accessed through APIs, public feeds, permitted crawling, partnerships, or manual contributions.

### C. Data processing and organization

Incoming information should be:

- Cleaned and standardized.
- Categorized consistently.
- Associated with geographic locations.
- Checked for duplicate listings.
- Linked to its original source.
- Assigned verification and update statuses.

Uncertain, conflicting, or outdated information should be identified rather than presented as confirmed.

### D. Community contributions

Local organizations and community members should be able to:

- Submit missing resources.
- Update existing listings.
- Report incorrect information.
- Share local events and opportunities.

Contributions should enter an appropriate review and verification process.

The platform should not rely exclusively on automated discovery. Local knowledge is an essential source of information.

### E. Central resource database

The platform should maintain structured, searchable records containing information such as:

- Resource name and description.
- Categories and resource type.
- Address and geographic coordinates.
- Contact information and source links.
- Hours and availability information.
- Cost and eligibility.
- Accessibility information.
- Verification status and last-updated date.

The database should support information from multiple sources and distinguish verified information from unverified submissions.

### F. Maps and discovery interface

Google Maps is the intended mapping integration.

The map should:

- Display actual resource locations.
- Show markers based on geographic coordinates.
- Update markers when search results and filters change.
- Support pin selection and location-based searches.
- Connect map markers to resource details.

### G. AI community assistant

Common Ground should eventually include a conversational assistant.

The assistant should:

- Understand what someone is looking for.
- Search the platform's actual resource database.
- Use the user's chosen location and relevant search criteria.
- Explain eligibility, cost, accessibility, hours, and other useful details.
- Help users discover options they may not have considered.
- Clearly communicate uncertainty and information gaps.

It must not invent resources, contact details, availability, or eligibility information.

## 3. Development architecture

The intended system consists of several connected layers:

1. **Frontend:** User interface, location selection, search, filters, maps, resource cards and conversational interface.
2. **Resource data model:** Consistent structure for all resource records.
3. **Database:** Persistent storage for resources, locations, sources, contributions and updates.
4. **Discovery and ingestion:** Systems for retrieving information from permitted external sources.
5. **Data processing:** Cleaning, categorization, deduplication and verification.
6. **Community contribution system:** Submissions, corrections and review workflows.
7. **External integrations:** Google Maps, calendars, APIs and other permitted services.
8. **AI assistant:** Conversational access to grounded platform information.

These components should remain modular so individual services can be replaced or improved without rebuilding the entire application.

## 4. Development roadmap

### Phase 1 — Resource data foundation

Establish a consistent resource model, source tracking, geographic fields and reusable resource data.

### Phase 2 — Location and map integration

Implement Google Maps, address entry, pin selection, coordinates and radius-based discovery.

### Phase 3 — Database

Move from local demonstration data to persistent structured storage.

### Phase 4 — Automated discovery and ingestion

Develop integrations with permitted public datasets, websites, APIs, feeds and local calendars.

### Phase 5 — Data processing and verification

Implement cleaning, categorization, deduplication, source tracking and update workflows.

### Phase 6 — Community contributions

Allow organizations and residents to submit resources, corrections and local information.

### Phase 7 — AI community assistant

Connect a conversational assistant to the actual resource database.

### Phase 8 — Public launch preparation

Address accessibility, privacy, security, reliability, backups, maintenance and deployment.

## 5. Core principles

- Accessibility is fundamental, not an optional feature.
- The platform should be useful without requiring an account.
- Avoid unnecessary personal data collection.
- Preserve source attribution and information provenance.
- Distinguish verified information from unverified information.
- Support both automated discovery and local community knowledge.
- Do not invent information to fill data gaps.
- Prefer open, interoperable and maintainable technologies.
- Build incrementally without losing sight of the complete architecture.
- The platform should serve communities rather than prioritize monetization.

## 6. Current prototype status — November 6, 2026

The project is an early-stage Next.js prototype.

### Existing implementation

- Resource finder page.
- Shared TypeScript resource structure in `app/data/resources.ts`.
- Seven fictional demonstration resource records.
- Keyword search.
- Category filters.
- Free-only filter.
- Radius filter.
- Resource cards and detail panels.
- Illustrative map component.
- Separate project ideas and development documentation.

### Recent work

- Tested the existing search and filtering functionality.
- Confirmed that resource details display correctly.
- Modified `MapPanel` to accept a `resources` prop.
- Modified the finder page to pass its filtered `results` into `MapPanel`.

These last two changes establish preliminary data passing between components. They do NOT constitute a functioning map integration.

### Not yet implemented

- Google Maps integration.
- Real geographic coordinates or geocoding.
- Real resource listings.
- Persistent database.
- Automated web discovery or ingestion.
- External calendar connections.
- Data cleaning and deduplication pipeline.
- Community submission and verification workflows.
- AI assistant connected to real resource data.

## 7. Instructions for future development sessions

When continuing work on Common Ground:

1. Use this document as the reference for the overall project vision.
2. Consult `docs/development-tracker.md` for the current implementation status.
3. Inspect existing code before proposing replacements or rewrites.
4. Work in small, understandable steps.
5. Explain what each code change does and why it is needed.
6. Do not claim a feature is implemented until it has actually been built and tested.
7. Distinguish planning, testing, partial implementation and completed functionality.
8. Preserve working code and avoid unnecessary rewrites.
9. Keep the long-term architecture in mind when choosing short-term solutions.
10. Update the development tracker when actual work is completed.

**The objective is to build the complete Common Ground platform described above, not merely to improve the appearance of the current demonstration website.**
