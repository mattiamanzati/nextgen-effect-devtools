---
# try also 'default' to start simple
theme: default
# apply any unocss classes to the current slide
class: 'text-center'
# https://sli.dev/custom/config-highlighter.html
highlighter: shiki
# some information about the slides, markdown enabled
info: A presentation about the Devtools that will be available to Effect developers
transition: fade
title: Next-gen Devtools for Effect
mdc: true
---

# Next-gen Devtools for Effect

---
layout: image-left
image: /image-me.jpg
preload: false
---

# Ego Slide
<br/>

- Push buttons
- Type things
- Break stuff
- Wear sweatshirt as cape
- This picture is not stack safe
- Does anyone care about stack safety?

<!--
Hello everyone!

My name is Mattia Manzati, you may remember me from last year's talk about Effect Cluster.

I'm used to wear my red sweatshirt as a cape, but I think it's now time to toss it away to make an announcment.
-->
---
preload: false
layout: center
---

# ![effectful](/image-effectful.png)

<!--
I am proud to announce that I am now a Founding Engineer at Effectful!

Starting from the upcoming month, I'll be working on tools that will allow you, as Effect developers, to enhance your productivity in writing Effect-based codebases.

Today, we're going to discuss what's already available, which you might not be aware of, and what we'll be working on soon.

When I think about the process involved in building a effect applications, I see many steps that may receive some quality of life improvements.
-->

---
layout: fact
preload: false
---
## It all starts with... code?

<!--
Well, it may seem obvious at first, but the first area we'll talk about is the coding phase.

When you start coding your Effect application, it's fully type-safe, and you feel confident. Everything works, is great right? Well, except for those times when you start battling the type system. Sure, type safety is great, but it comes at the cost of producing correct types. But what happens when you fail to do that? -->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-wtf-error.mp4" type="video/mp4" />
</SlidevVideo>

<!--
You get lines of TypeScript errors complaining about something not being assignable. 

And as a developer, I would say that my first reaction was...

-->
---

![ts error](/image-meme-confused.png)
<!--

Many of you might not know this, but even at this phase, we have something that can significantly improve your coding experience with Effect. Just one line of code can make a big difference.
-->
---
preload: false
---

# @effect/langugage-service <sup>(already available!)</sup>
<br/>

- Works with any editor that supports TypeScript Language Service Protocol
- Provides additional Effect diagnostics
- Provides refactors for Effect code
<!--

I'm talking about our Effect language service plugin! What is it? It's an extension to the TypeScript language service protocol. This protocol standardizes communication between the language service, which understands code semantics, and your editor. Whenever you hover over a function call to see its type, start typing to get autocompletion, or refactor a variable name, the language service handles these tasks.

And the language service plugin works for any editor that supports the TypeScript language service protocol, not just vscode, so most editors are covered.

How does this fit into the Effect world? Our plugin provides additional diagnostics and refactors based on deep insights into Effect code and types.
-->

---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-error-yield.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Let's look at a real-world example. Many of you know how painful it is to fix situations like this one. 

Can you immediately spot where the error is?

I only see TypeScript gibberish of things I don't care about.
-->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-enable-lsp.mp4" type="video/mp4" />
</SlidevVideo>

<!--
So let's try to enable the effect language service plugin for our project and see what happens.

We first install it via npm and then we edit our tsconfig.json to add the effect lsp to the list.
-->

---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-enable-tsc-workspace.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Last step, is to tell vscode to use the typescript version that comes from the node modules.
Et voi la, we have the effect language service plugin enabled for our project.

As you can see the difference is immediate. One quick look, and the language server plugin points you to the error. In this case, we used `yield` instead of `yield*`.
-->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-missing-error.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Another common issue is missing services or errors in your Effect data type.

Even in this case, the error is not immediately clear. You need to hover over the error and deep dive to see what's wrong.
-->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-missing-error-lsp.mp4" type="video/mp4" />
</SlidevVideo>

<!-- 
With the language service, the difference is huge.

The LSP will provide additional errors, and if you enable code lenses to see errors in-line, what was once a section of squiggly nonsense now clearly shows where the problem is, without needing to hover over the error and dig into it.
-->

---
layout: center
---

![image relieved](/image-meme-relieved.png)

---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-rewrite-gen.mp4" type="video/mp4" />
</SlidevVideo>

<!--
But it's not just diagnostics. We also offer functionalities like refactors to help you write Effect code. For example, you can refactor an `async/await` function into an Effect by right-clicking and choosing the appropriate refactor. It will automatically define error objects and convert your `async/await` into an `effect.gen`.
-->


---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-floating-effect.mp4" type="video/mp4" />
</SlidevVideo>

<!--
However, language server plugins are only loaded by your editor.

Take for example floting effect, that is the situation where you have an effect that is not bound to a variable or used in a yield statement. 

Right now we have a LSP rule, but the compiler will not catch this error, because the LSP is loaded only inside the editor, and not by the TSC compiler.

-->
---
preload: false
---

# @effect/eslint-plugin <sup>(future)</sup>
- Allows to prevent mistakes like 
- Will provide an in-editor way to teach Effect best practices
- ...we'll also look into other linters as well!

<!--

To address this kind of errors, we plan to build an ESLint plugin specifically targeting these scenarios, so we can catch this errors in the linting phase before compiling your code.

Long-term, we plan to add more rules, including stylistic ones, to improve your code.

I strongly believe that building an interactive experience inside your editor with the language service and lint rules will be a significant improvement for those learning Effect or enhancing their Effect codebases.

Take generic services, for example. Many of us have tried to create them while learning Effect, only to struggle with the types. Instead of spending time searching the docs, imagine getting a warning when you define a service with generics, pointing you to the relevant documentation explaining why it's not recommended. This would save time and guide you towards best practices.

And we plan on starting with eslint, but definitely will look into supporting other linting tools as well.

-->

---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-install-devtools.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Even though language service and lint rules are great, they are not the only thing we plan for the effect devtools experience.

You may already know that there is already a published vscode extension that provides metrics and informations about the current effect context directly inside your vscode editor.

Setting it up its really easy, you just add it from the vscode marketplace.
-->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-devtools-setup.mp4" type="video/mp4" />
</SlidevVideo>

<!--
In your code you need to install the @effect/experimental package.

And finally you need to add few lines of code around your main effect program to enable the instrumentation.
-->

---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-devtools-enabled.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Once you have it enabled, you can use the clients panel to start the server and connect to a running effect program, and start getting informations like metrics, traces and the current effect context when you are debugging your application.

This is great but we plan to improve this experience even more.
-->
---
preload: false
---

<SlidevVideo autoplay autoreset="slide">
  <source src="/video-debug-stack.mp4" type="video/mp4" />
</SlidevVideo>

<!--
Debugging Effect is kinda different from any regular JS code out there.
Instead of writing code that is executed as-is, Effect is lazy and is just a description of a computation that can be re-executed as many times as we want.
And this description is run by the Effect runtime, that is the one that actually executes the code.

This means that placing a debug break and looking at the call stack will result in a different experience than what you are used to with plain sync JS code.
All of the code in the debug stack is related to the effect runtime, and not to your actual code.
-->
---
preload: false
layout: center
---

![span viewer](/image-trace-viewer.png)

<!--
This is why we plan to allow to see your effect spans directly inside your vscode editor when you are debugging your application.

Just like we already provide the ability inside of the current effect playground.

We plan to make those spans interactive so that things like jumping to the source code of the span, or seeing the actual code that generated the error span will be possible, all of this without leaving your vscode editor.
-->
---
preload: false
---

# DevTools for every environment <sup>(future)</sup>
<br/>

- Chrome extension
- VSCode extension
- Standalone application

<!--
Speaking of editor, we also plan to make the devtools agnostic of the editor you are using. Just like the react devtools, we plan to build an experience that can be run in the browser as a chrome extension, inside vscode, or as a standalone application.

In order to reach this approach, we will also research in removing the need to wrap your main effect application with some code in order to enable the devtools.

Just like the react devtools, we plan to make the devtools to be able to connect to any running effect application in the current js context, and start getting informations about it.x
-->

---
preload: false
layout: center
---

# What's next?
Let's shape it together!

<!--
What's next for the devtools?
You decide!

I can't wait to speak with you all hearing what are your pain points and what you would like to see next in the devtools, so we can work together and improve the effect experience.
-->

---
layout: image-right
image: /image-sebastian.jpeg
preload: false
---

<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 

# Thank you!

x.com/mattiamanzati


---

