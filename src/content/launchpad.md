---
launchpadPage:
  eyebrow: Launchpad
  title: Find the cofounders your venture is missing.
  subtitle: A team formation board for the Faculty community. Browse ventures looking for cofounders, filter by the skills they need, and post your own idea to find collaborators.
  countLabel: ventures looking for cofounders
  filterLabel: Cofounder needed
  filterAll: All skills
  emptyLabel: No ventures are looking for that skill yet. Try another filter, or post your idea.
  note: Example posts are illustrative. Anything you post stays in your own browser and is not shared.
  postButton: Post your idea
  postCancel: Cancel
  formTitle: Post your venture
  formIntro: Share what you are building and who you need. Your post is saved in this browser only, so you can see how it would appear on the board.
  titleLabel: Venture name
  titlePlaceholder: For example, Maple Grid Energy
  visionLabel: The idea
  visionPlaceholder: What are you building, and what problem does it solve?
  teamLabel: Current team
  teamHint: One person per line, written as Name, Role.
  teamPlaceholder: "Alex Chen, Technical lead\nJordan Park, Business"
  seekingLabel: Cofounders you are looking for
  seekingHint: Separate skills with commas.
  seekingPlaceholder: Software, Machine learning, Sales
  contactLabel: Contact email
  contactPlaceholder: you@uottawa.ca
  submitButton: Post to the board
  formError: Add a venture name, the idea, and at least one cofounder skill.
  teamHeading: Current team
  seekingHeading: Looking for
  reachOut: Reach out
  yourPostBadge: Posted by you
  removeLabel: Remove this post
  fallbackContact: ceed@uottawa.ca
  mailtoSubject: Cofounder interest via the Engineering Entrepreneurship Launchpad
  calloutTitle: Looking for a cofounder?
  calloutBody: Browse ventures seeking teammates, or post your own idea, on the Launchpad.
  calloutCta: Open the Launchpad
launchpadPosts:
  - id: seed-northwind
    title: Northwind Robotics
    vision: An autonomous floor robot for small warehouses that cannot afford the big automation systems. We have a working chassis and need help making it smart and reliable.
    team:
      - name: Priya Nair
        role: Mechanical lead
    seeking:
      - Embedded systems
      - Software
  - id: seed-riviere
    title: Rivière Health
    vision: Scheduling and intake tools for community clinics across Eastern Ontario. We have piloted with two clinics and need to turn the prototype into a real product.
    team:
      - name: Marc Bélanger
        role: Clinical advisor
      - name: Sofia Reyes
        role: Designer
    seeking:
      - Software
      - Sales
    contact: riviere@example.com
  - id: seed-helios
    title: Helios Materials
    vision: A low-cost coating that extends the life of grid batteries, spun out of a uOttawa lab. The science works in the lab and now needs a path to a real product.
    team:
      - name: Dr. Aïsha Mohamed
        role: Chemistry, founder
    seeking:
      - Manufacturing
      - Business
    contact: helios@example.com
  - id: seed-tally
    title: Tally
    vision: A simple payments and bookkeeping app for student-run businesses and clubs. I have a working prototype and I am looking for a cofounder to own product and growth.
    team:
      - name: Daniel Okafor
        role: Technical founder
    seeking:
      - Design
      - Marketing
    contact: tally@example.com
  - id: seed-cortex
    title: Cortex Devices
    vision: A wearable that flags early signs of strain for industrial workers. We have a benchtop prototype and need to navigate the regulatory path and harden the software.
    team:
      - name: Hannah Weiss
        role: Biomedical lead
    seeking:
      - Regulatory
      - Software
  - id: seed-lumen
    title: Lumen Study
    vision: An AI study partner that turns lecture notes into practice questions for engineering courses. We have early users and want to make the model genuinely useful.
    team:
      - name: Kevin Nguyen
        role: Computer science, founder
      - name: Élise Gagnon
        role: Designer
    seeking:
      - Machine learning
      - Business
    contact: lumen@example.com
---

<!--
Edit the text in the block above. It is YAML: keep the field names, the
indentation, and the dashes for list items. Only change the words.

launchpadPage = the page headings, the post form labels, the card labels, and
the small callout shown on the Founder page.
launchpadPosts = the example team-formation posts that seed the board. Each post
has a title, a vision, a current team (name + role), the skills it is seeking,
and an optional contact email (if omitted, the Reach out button uses the
fallbackContact above).
-->
