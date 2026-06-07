---
preview:
  eyebrow: Preview · design in testing
  title: A clearer path, and a finder that routes you right
  intro: This is a test page. It tries out a new shape for the four stages and a revised starting-point finder. Nothing here changes the live site yet.
  mapTitle: How the path branches
  mapSubtitle: Start in Explore. From there you either build your way up through Product Studio, or go straight to MakerLaunch if you already have the proof. Both routes lead to the Founders Network.
  mapBranchLabel: choose your route
  finderTitle: Find your starting point
  finderSubtitle: Three quick questions. The finder looks at the proof you have and whether a founder is ready to commit.
  finderReasonLabel: Why this stage
  backLabel: Back to the live site
finderQuestionsV2:
  - id: idea
    prompt: Where are you with your venture?
    options:
      - label: I’m exploring, with no real idea yet
        stage: explore
      - label: I have a validated idea, but I haven’t built it
        stage: validate
      - label: I have a working prototype or a shipped product
        stage: build
      - label: I’m incorporated with real traction
        stage: scale
  - id: evidence
    prompt: What proof do you have so far?
    options:
      - label: Nothing concrete yet
        stage: explore
      - label: An idea I believe in, but no proof yet
        stage: validate
      - label: Customer-discovery proof, or a working prototype
        stage: build
      - label: Paying customers, pilots, or committed funding
        stage: scale
  - id: team
    prompt: Is a founder ready to commit?
    options:
      - label: Just me, exploring for now
        stage: explore
      - label: A team forming, still weighing it up
        stage: validate
      - label: Yes, a founder is ready to commit
        stage: build
---

<!--
Preview-only content. This drives the experimental /preview.html page: a new
branching stage map and a revised starting-point finder. Editing this does not
touch the live site.

The finder logic: your recommendation is the furthest stage your proof supports
(the best of your idea maturity and your evidence). Reaching MakerLaunch also
needs a founder ready to commit; without that, the finder points you to Product
Studio to build first.
-->
