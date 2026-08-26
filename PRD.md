# Product Requirements Document
## ResMed Omnichannel Strategy Microsite

---

## 1. Overview

### Purpose
A strategic positioning microsite designed to demonstrate Slalom's understanding of ResMed's omnichannel transformation opportunity. The site serves as a pre-RFP positioning tool that educates, aligns stakeholders, and shapes how ResMed approaches their upcoming RFP.

### Primary User
Rahul (Senior GTS Executive, ResMed) — new to role, not new to company. Needs to build internal consensus and may share this with cross-functional stakeholders.

### Secondary Users
- ResMed leadership who Rahul shares the link with
- Procurement/sourcing teams evaluating RFP responses
- Cross-functional stakeholders (IT, Marketing, Operations, Clinical)

### Success Metrics
- Slalom is invited to respond to the RFP
- The RFP reflects Slalom's strategic framing
- Rahul shares the site internally (trackable via analytics if implemented)
- Slalom is perceived as a strategic partner, not a technology vendor

---

## 2. Core Design Principles

### Progressive Disclosure
- Content is layered: headline → summary → detail → supporting context
- Users control depth; nothing overwhelms on first view
- Designed for live presentation AND asynchronous exploration
- No appendices; all detail is inline and expandable

### Consultative Tone
- Question-driven, not answer-driven
- Demonstrates sophistication through the questions we ask
- Confident but not arrogant
- Partnership-oriented, not vendor-oriented

### ResMed Brand Alignment
- Uses ResMed's visual identity (colors, typography, aesthetic)
- Feels like it could be theirs—positions Slalom as extension of their team
- Human-centered, science-backed, outcome-focused

### Mobile-First Responsive
- Works on phone (Rahul may share via mobile)
- Optimized for tablet and desktop presentation
- Touch-friendly interactive elements

---

## 3. Site Structure

### Navigation
- Single-page scrolling experience
- Sticky navigation bar with section anchors
- Current section indicator
- Optional: "Expand All" / "Collapse All" global toggle

### Sections (in order)

| # | Section | Purpose | Primary Interaction |
|---|---------|---------|-------------------|
| 1 | Opening: The Opportunity | Hook with possibility | Animated patient journey |
| 2 | Why This Matters | Create urgency | Timeline with inflection points |
| 3 | The Strategic Challenge | Demonstrate sophistication | Expandable question domains |
| 4 | The Approach | Show phased roadmap | Progressive phase reveal |
| 5 | What Good Looks Like | Set benchmarks | Metric comparisons |
| 6 | Why Slalom | Differentiate | Team/capability visualization |
| 7 | Next Steps | Drive action | Clear CTAs |

---

## 4. Section Specifications

### Section 1: Opening — The Opportunity

**Content Layers:**
- L1 (Always visible): Headline + subhead + animated visual
- L2 (Always visible): 2-3 sentence framing of the opportunity
- L3 (Expandable): Supporting data points (ŌURA stats, market data)

**Interaction:**
- Animated patient journey visualization
- Touchpoints light up sequentially on scroll or after delay
- CTA button scrolls to Section 3

**Visual Concept:**
- Full-width hero section
- Patient journey as horizontal flow diagram
- Nodes: Awareness → Screening → Diagnosis → Prescription → Setup → Adherence → Ongoing Engagement
- ResMed touchpoints highlighted in brand blue
- Partner touchpoints (DME, physician) shown in complementary color

**Responsive Behavior:**
- Desktop: Horizontal journey, full animation
- Mobile: Vertical journey, simplified animation

---

### Section 2: Why This Matters

**Content Layers:**
- L1 (Always visible): Section headline + three pillar cards
- L2 (Expandable per card): Supporting detail for each pillar
- L3 (Expandable): Data points and market evidence

**Interaction:**
- Three cards displayed in row (desktop) or stacked (mobile)
- Click card to expand detail
- Optional: Timeline showing key inflection points

**Cards:**
1. Consumer Expectations Have Changed
2. Market Dynamics Shifted
3. The Window Is Closing

**Responsive Behavior:**
- Desktop: Three-column card layout
- Tablet: Two-column, third wraps
- Mobile: Single column, stacked

---

### Section 3: The Strategic Challenge

**Content Layers:**
- L1 (Always visible): Headline + brief intro + four domain cards
- L2 (Expandable per domain): 3 strategic questions each
- L3 (Expandable per domain): Key considerations and sub-questions
- L4 (Optional tooltip/link): References or examples

**Interaction:**
- Four domain cards displayed in grid
- Click domain to expand questions
- Within expanded domain, click "+ Show key considerations" for deeper detail
- Visual connector lines between domains showing interdependencies
- "Expand All Questions" button at section level

**Domains:**
1. Strategy (3 questions + considerations)
2. Experience (3 questions + considerations)
3. Technology (3 questions + considerations)
4. Organization (3 questions + considerations)

**States:**
- Collapsed: Domain name + icon + brief descriptor
- Expanded L2: Domain name + 3 questions visible
- Expanded L3: Domain name + 3 questions + key considerations

**Responsive Behavior:**
- Desktop: 2x2 grid of domain cards
- Tablet: 2x2 grid
- Mobile: Single column, stacked cards

**Accessibility:**
- Expandable sections use aria-expanded attribute
- Focus management on expand/collapse
- Keyboard navigable (Enter/Space to toggle)

---

### Section 4: The Approach — Discovery Before Decisions

**Content Layers:**
- L1 (Always visible): Headline + visual roadmap showing 3 phases
- L2 (Expandable per phase): "What we'll do" and "What you'll have"
- L3 (Expandable within Phase 1): Detailed activities and deliverables

**Interaction:**
- Roadmap displayed as horizontal timeline (desktop) or vertical (mobile)
- Phase 1 in full color; Phase 2 and 3 in muted/grayscale
- Click any phase to expand details
- Phase 1 expansion includes deeper activity breakdown
- Toggle: "What you'll know" vs. "What you'll be able to do"

**Phases:**
1. Strategic Assessment + Pilot Design (8-12 weeks) — HIGHLIGHTED
2. Pilot Build + Test (6-12 months) — MUTED
3. Scale + Optimize (1+ years) — MUTED

**Visual Treatment:**
- Phase 1: Full brand blue, solid borders, detailed content
- Phase 2: 50% opacity, dashed borders, summary content
- Phase 3: 30% opacity, dashed borders, minimal content

**Responsive Behavior:**
- Desktop: Horizontal timeline with expandable panels below
- Mobile: Vertical timeline, phases stack

---

### Section 5: What Good Looks Like

**Content Layers:**
- L1 (Always visible): Headline + 5 metric categories
- L2 (Expandable per metric): Description and benchmark framing
- L3 (Expandable): How we'd help measure this

**Interaction:**
- Five metric cards or rows
- Click to expand description and benchmark context
- Frame as "questions we'd help you answer" not "here are the answers"

**Metrics:**
1. Demand Generation
2. Conversion
3. Patient Engagement
4. Partner Health
5. Business Impact

**Responsive Behavior:**
- Desktop: Card grid or table layout
- Mobile: Stacked cards

---

### Section 6: Why Slalom

**Content Layers:**
- L1 (Always visible): Headline + three differentiator cards
- L2 (Expandable per card): Supporting detail and proof points
- L3 (Optional links): Case studies, POVs, external references

**Interaction:**
- Three differentiator cards
- Click to expand detail
- Optional: Links to external Slalom resources open in new tab

**Differentiators:**
1. We've Navigated This Transition Before
2. We Bring Strategy AND Execution
3. We De-Risk Through Learning

**Responsive Behavior:**
- Desktop: Three-column layout
- Mobile: Stacked cards

---

### Section 7: Next Steps

**Content Layers:**
- L1 (Always visible): Headline + 2-3 CTA options
- No progressive disclosure needed; this is action-oriented

**Interaction:**
- Clear, prominent CTA buttons
- Optional: Contact form or calendar embed

**CTAs:**
- Schedule a conversation
- Download the assessment framework
- Explore our DTC POV

**Responsive Behavior:**
- Desktop: Buttons in row
- Mobile: Stacked buttons, full-width

---

## 5. Global Interactions

### Scroll Behavior
- Smooth scrolling between sections
- Sections fade in as they enter viewport (subtle, not distracting)
- Sticky nav updates current section indicator

### Expand/Collapse
- All expandable elements use consistent animation (300ms ease)
- Chevron or plus/minus icon indicates expandable state
- Click anywhere on the header row to toggle (large hit target)
- Smooth height transition (no jarring jumps)

### Navigation
- Sticky top nav with section names
- Click nav item to smooth-scroll to section
- Current section highlighted in nav
- Optional: Progress indicator

### Keyboard Navigation
- Tab through interactive elements
- Enter/Space to toggle expand/collapse
- Escape to collapse current section
- Focus visible indicators

---

## 6. Technical Requirements

### Performance
- First contentful paint: < 1.5 seconds
- Total page weight: < 500KB (excluding images)
- No external dependencies required for core functionality
- JavaScript enhances but page is readable without it

### Browser Support
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari
- Android Chrome

### Accessibility (WCAG 2.1 AA)
- Color contrast ratios meet 4.5:1 minimum
- All interactive elements keyboard accessible
- ARIA labels and roles for custom components
- Screen reader compatible
- Reduced motion media query support

### Analytics (Optional/Future)
- Section scroll depth tracking
- Expand/collapse interaction tracking
- CTA click tracking
- Time on page/section

---

## 7. File Structure
/resmed-microsite/
├── index.html # Main page
├── styles.css # All styles
├── script.js # Interactions and animations
├── content.md # Source content (reference)
├── PRD.md # This document
└── assets/
├── icons/ # SVG icons
└── images/ # Any images needed
---

## 8. Content Principles

### Headlines
- Clear, benefit-oriented
- Use ResMed's language where possible
- No jargon or consultant-speak

### Body Copy
- Short paragraphs (2-3 sentences max)
- Bullet points for lists
- Active voice
- Second person ("you" / "your") when addressing ResMed

### Expandable Content
- Each expandable section should be self-contained
- Don't require reading expanded content to understand the summary
- Expanded content adds depth, not essential context

### CTAs
- Action-oriented verbs
- Low-friction (no forms, just links)
- Clear value proposition for clicking

---

## 9. Presentation Mode Considerations

### Live Presentation Use Case
- Presenter (Slalom team) walks through site with Rahul
- Scrolls through sections, covering L1 and L2 content
- When questions arise, expands L3 content inline
- No need to switch to slides, appendix, or other documents
- Everything is accessible within the flow

### Asynchronous Use Case
- Rahul shares link with colleagues
- They can explore at their own pace
- Progressive disclosure lets them go as deep as they want
- Site is self-explanatory without a presenter

### Design Implications
- Content must work both narrated and self-guided
- Headlines and summaries must stand alone
- Expanded content must be clear without verbal context
- Navigation must be intuitive for first-time visitors

---

## 10. Open Questions / Future Considerations

- [ ] Hosting location (TBD)
- [ ] Custom domain (TBD)
- [ ] Analytics implementation (optional)
- [ ] Password protection (may be needed for confidentiality)
- [ ] PDF export capability (for procurement processes)
- [ ] Version control (if content needs updating)
- [ ] Legal review of claims and case study references