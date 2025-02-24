---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# apply any unocss classes to the current slide
class: 'text-center'
# https://sli.dev/custom/config-highlighter.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# Effect devtools
- Observability tools
- language service

---

# Effect code is lazy

Debugging Effect is kinda different from any regular JS code out there.
Instead of writing code that is executed as-is, Effect is lazy and is just a description of a computation that can be re-executed as many times as we want.

And this pattern is not so uncommon.
This pattern occurs also in React, where instead of writing actual code that modifies the DOM and is run single shot, you write a description of how the component should appear, and the React runtime will call and instantiate that component as many times we want.

And unfortuately this approach shares the same downside.

---

# Debugging Effect is no regular debugging

The first one that may seems obvious is that placing a debug break over a call does not mean that the debug break will be hit while executing the effect.

Based on the position it could be hit either while constructing the effect, or while executing it.

---



---

# Language Service: Converting an async/await to Effect

---

# Future: Exploring experimental devtools API with createTask

If you like 