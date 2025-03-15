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
# Introduction

Hello everyone!

My name is Mattia Manzati, and I am proud to announce that I am now a Founding Engineer at Effectful!

Starting from the upcoming month, I'll be working on tools that will allow you, as Effect developers, to enhance your productivity in writing Effect-based codebases.

Today, we're going to discuss what's already available, which you might not be aware of, and what we'll be working on soon.

When I think about the process involved in building a effect applications, I see many steps that may receive some quality of life improvements.
-->


---

# It all starts with... code?

<!--
Well, it may seem obvious at first, but the first area we'll talk about is the coding phase.

When you start coding your Effect application, it's fully type-safe, and you feel confident. Everything works, is great right? Well, except for those times when you start battling the type system. Sure, type safety is great, but it comes at the cost of producing correct types. But what happens when you fail to do that? You get 30 lines of TypeScript errors complaining about something not being assignable. As developers, we try to decipher the error messages, but they aren't always clear or readable.

Many of you might not know this, but even at this phase, we have something that can significantly improve your coding experience with Effect. Just one line of code can make a big difference.

I'm talking about our Effect language service plugin! What is it? It's an extension to the TypeScript language service protocol. This protocol standardizes communication between the language service, which understands code semantics, and your editor. Whenever you hover over a function call to see its type, start typing to get autocompletion, or refactor a variable name, the language service handles these tasks.

How does this fit into the Effect world? Our plugin provides additional diagnostics and refactors based on deep insights into Effect code and types.

Let's look at a real-world example. Many of you know how painful it is to fix situations like this one: a screen full of red squiggly lines. An entire page of unclear errors. Can you immediately spot where the error is?

Now, let's try again with the language service turned on. The difference is immediate. One quick look, and the language server plugin points you to the error. In this case, we used `yield` instead of `yield*`.

Another common issue is missing services or errors in your Effect data type. With the language service, the difference is huge. If you enable code lenses to see errors in-line, what was once a section of squiggly nonsense now clearly shows where the problem is, without needing to hover over the error and dig into it.

But it's not just diagnostics. We also offer functionalities like refactors to help you write Effect code. For example, you can refactor an `async/await` function into an Effect by right-clicking and choosing the appropriate refactor. It will automatically define error objects and convert your `async/await` into an `effect.gen`.

However, language server plugins are only loaded by your editor, not when using TSC to compile your source. So, some errors might not be caught during compilation.

To address this, we plan to build an ESLint plugin specifically targeting these scenarios. 

Take for example floting effect, that is the situation where you have an effect that is not bound to a variable or used in a yield statement. Right now the compiler will not catch this error, and this is a scenario that we want to catch with our ESLint plugin.

This plugin is already published but currently limited to providing a styling rule using dprint instead of prettier. Long-term, we plan to add more rules, including stylistic ones, to improve your code.

I strongly believe that building an interactive experience inside your editor with the language service and lint rules will be a significant improvement for those learning Effect or enhancing their Effect codebases.

Take generic services, for example. Many of us have tried to create them while learning Effect, only to struggle with the types. Instead of spending time searching the docs, imagine getting a warning when you define a service with generics, pointing you to the relevant documentation explaining why it's not recommended. This would save time and guide you towards best practices.

-->

---

<!--
Even though language service and lint rules are great, they are not the only thing we plan for the effect devtools experience.

You may already know that there is already a published vscode extension that provides metrics and informations about the current effect context directly inside your vscode editor.

Setting it up its really easy, you just add it from the vscode marketplace, and you need to add few lines of code around your main effect program to enable them.

Once you have it enabled, you can use the clients panel to connect to a running effect program, and start getting informations like metrics and the current effect context when you are debugging your application.

This is great but we plan to improve this experience even more.

Debugging Effect is kinda different from any regular JS code out there.
Instead of writing code that is executed as-is, Effect is lazy and is just a description of a computation that can be re-executed as many times as we want.
And this description is run by the Effect runtime, that is the one that actually executes the code.

This means that placing a debug break and looking at the call stak will result in a different experience than what you are used to with plain sync JS code.




-->


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

# Future: Exploring experimental devtools API with createTask

If you like 