---
board:
  eyebrow: Faculty of Engineering · University of Ottawa
  title: Course Project Board
  subtitle: Real projects for project-based courses. Professors post projects with an industry partner, the skills required, and the semester they run in. Students browse and reach out.
  countLabel: projects on the board
  filterLabel: 'Course:'
  filterAll: All courses
  emptyLabel: No projects for this course yet. Check back soon, or pick another course.
  note: Projects shown are illustrative examples. Posts you create are saved in your browser only — this demo has no backend.
  postButton: Post a project
  postCancel: Cancel
  formTitle: Post a project for your course
  formIntro: Fill in the project details. Your post appears on the board in your browser, so you can see how it would look.
  titleLabel: Project title
  titlePlaceholder: e.g. Predictive maintenance dashboard for a packaging line
  courseLabel: Course
  coursePlaceholder: e.g. GNG 4120
  semesterLabel: Semester
  semesterPlaceholder: e.g. Fall 2026
  professorLabel: Professor
  professorPlaceholder: e.g. Prof. A. Tremblay
  partnerLabel: Industry partner
  partnerPlaceholder: e.g. Ottawa Packaging Co.
  descriptionLabel: Project description
  descriptionPlaceholder: What the team will build, the problem it solves, and what the partner provides.
  skillsLabel: Required skill sets
  skillsHint: Separate skills with commas.
  skillsPlaceholder: e.g. Embedded systems, Python, Data visualization
  contactLabel: Contact email
  contactPlaceholder: name@uottawa.ca
  submitButton: Post the project
  formError: Please fill in the project title, course, semester, professor, description, at least one skill, and a contact email.
  partnerHeading: Industry partner
  skillsHeading: Required skills
  contactButton: Contact professor
  mailtoSubject: 'Course project inquiry:'
  yourPostBadge: Your post
  removeLabel: Remove
  footerLine: Faculty of Engineering · University of Ottawa
projects:
  - id: pb-grid-sensors
    title: Wireless sensor retrofit for a hydro substation
    course: GNG 4120
    semester: Fall 2026
    professor: Prof. A. Tremblay
    partner: Rideau Hydro
    description: Design and prototype a low-power wireless sensor package to retrofit older substation equipment, so the operator can monitor temperature and vibration without rewiring the site.
    skills:
      - Embedded systems
      - PCB design
      - Wireless protocols
    contact: a.tremblay@uottawa.ca
  - id: pb-packaging-vision
    title: Vision system for packaging-line quality control
    course: GNG 4120
    semester: Winter 2027
    professor: Prof. S. Okafor
    partner: Ottawa Packaging Co.
    description: Build a camera-based inspection station that flags damaged cartons on a moving line, with a simple dashboard for line operators and a weekly defect report.
    skills:
      - Computer vision
      - Python
      - Data visualization
    contact: s.okafor@uottawa.ca
  - id: pb-clinic-scheduler
    title: Scheduling tool for a community physiotherapy clinic
    course: SEG 4910 — Capstone
    semester: Fall 2026
    professor: Prof. M. Bouchard
    partner: Vanier Physio Group
    description: Replace the clinic's spreadsheet scheduling with a web app that handles recurring appointments, therapist availability, and automated patient reminders in both official languages.
    skills:
      - Full-stack web
      - UX design
      - Databases
    contact: m.bouchard@uottawa.ca
  - id: pb-hvac-energy
    title: Energy audit and HVAC optimization for a school board
    course: MCG 4322 — Capstone
    semester: Winter 2027
    professor: Prof. L. Nguyen
    partner: Eastern Ontario School Board
    description: Model the heating and cooling loads of three school buildings, then design and cost a control strategy that cuts energy use without touching occupant comfort.
    skills:
      - Thermodynamics
      - Energy modelling
      - CAD
    contact: l.nguyen@uottawa.ca
  - id: pb-assistive-arm
    title: Assistive feeding arm for a rehabilitation centre
    course: BMG 4900 — Capstone
    semester: Fall 2026
    professor: Prof. R. D'Souza
    partner: Élisabeth Bruyère Rehabilitation Centre
    description: Design a low-cost, easily cleaned assistive arm that helps patients with limited mobility eat independently, working from requirements gathered with the centre's occupational therapists.
    skills:
      - Mechanical design
      - 3D printing
      - Human factors
    contact: r.dsouza@uottawa.ca
  - id: pb-fleet-telemetry
    title: Telemetry pipeline for an electric delivery fleet
    course: CSI 4900 — Honours Project
    semester: Winter 2027
    professor: Prof. J. Martel
    partner: Capital Couriers
    description: Stand up a data pipeline that ingests battery and route telemetry from a 20-vehicle electric fleet, and build the queries and alerts the operations team needs to plan charging.
    skills:
      - Data engineering
      - Cloud services
      - SQL
    contact: j.martel@uottawa.ca
---

<!--
Edit the text in the block above. It is YAML: keep the field names, the
indentation, and the dashes for list items. Only change the words.

This file drives the standalone Course Project Board page (/projectboard.html).
It is not linked from the main site. "board" holds the page copy and form
labels; "projects" holds the seeded example projects (id, title, course,
semester, professor, partner, description, skills, contact email).
-->
