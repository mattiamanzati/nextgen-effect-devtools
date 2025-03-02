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
info: A presentation about the Devtools that will be available to Effect developers
transition: slide-left
title: Next-gen Devtools for Effect
mdc: true
---

---
layout: image-left
image: /image-me.jpg
---

# Ego Slide
<br/>

- Push buttons
- Type things
- Break stuff
- Wear sweatshirt as cape
- This picture is not stack safe
<!--
Hello everyone!
My name is Mattia Manzati, and I proud to announce that I am now a Founding Engineer at Effectful!

Today we're gonna talk together about the current devtools currently available and the future I envision and I'll work as hard as possible to make it a reality starting next month.
-->


---

# It all starts with... code?

<!--
Well, it may seems obvious at first, but everything initially starts out with some code.
And maybe a lot of you don't know about it but even at this phase, we already have something that may help a lot.
One line of code that will definitely improve your coding experience while using effect.

I am talking about our effect language service plugin!
What is it?
-->



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