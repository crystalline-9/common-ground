# Common Ground — Development Tracker

**Project:** Common Ground  
**Purpose:** Track technical development, milestones, testing, and future improvements.

---

## Current development phase

**Phase 1 — Connect the resource finder to shared resource data**

Goal: Make the resource finder use the central resource dataset rather than separate hardcoded examples.

- [ ] Inspect `app/data/resources.ts`
- [ ] Review how `app/find-resources/page.tsx` currently retrieves resources
- [ ] Standardize the resource data structure
- [ ] Add realistic sample resources with names, categories, locations, eligibility, hours, and source links
- [ ] Connect the finder page to the shared dataset
- [ ] Test that resources display correctly
- [ ] Commit completed changes to Git

---

## Development roadmap

### Phase 1 — Shared resource data

Connect the resource finder to `app/data/resources.ts` and establish a consistent resource structure.

### Phase 2 — Search and filtering

Implement functional keyword search and filters for resource categories, locations, eligibility, and other relevant criteria.

### Phase 3 — Location-based discovery

Introduce location-based resource discovery, manual location entry, optional browser geolocation, and map integration.

### Phase 4 — Database integration

Move beyond local TypeScript sample data to a persistent database.

### Phase 5 — Resource verification and contributions

Develop processes for updating, verifying, and contributing resource listings.

### Phase 6 — External data integrations

Explore permitted municipal, government, and community datasets to expand resource coverage.

### Phase 7 — AI community assistant

Introduce an assistant that can search the platform's actual resource data and provide grounded answers without inventing resources.

### Phase 8 — Public launch preparation

Review accessibility, privacy, security, backups, reliability, and deployment readiness.

---

## Development principles

- Build incrementally and test each feature.
- Keep resource information structured and reusable.
- Prioritize accessibility and clear navigation.
- Avoid collecting unnecessary personal information.
- Use reliable, traceable sources for resource listings.
- Keep the platform useful without requiring an account.
- Document meaningful changes and commit completed work to Git.

---

## Progress log

| Date       | Phase    | Work completed              | Notes                                        |
| ---------- | -------- | --------------------------- | -------------------------------------------- |
| 2026-11-06 | Planning | Created development roadmap | Phase 1 is the next implementation milestone |

---

## Future ideas

Record potential features and improvements here before they become active development tasks.

- [ ] Add ideas as they emerge.

-----------------------------------------------------------------<3--------------------------------------------------------------
