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

Starting from the incoming month, I'll be working as hard as possible on tools that will allow you, as a effect developer, 
to enhance your productivity in writing effect based codebases.
Today we're gonna talk together about what's already available, and maybe you don't know about, and what we'll be working on soon.

When I think about the process involved in building a new application, I basically see three major steps.
-->


---

# It all starts with... code?

<!--
Well, it may seems obvious at first, but the first area we'll talk about is the coding phase.

So you start coding your effect application, its fully typesafe, you are happy, and it everything works right?
Well, except for those times you start fighting against the type system.
Sure, type safety is great, but comes at a cost of actually producing correct types.
And sometimes that's not so easy.
Remember all of those times you get 30 lines of typescript complaining for something not being assignable and well,
 as developers we try to look at the error and even there it's not really fully clean and readable, right? 

And maybe a lot of you don't know about it but even at this phase, we already have something that may help a lot.
One line of code that will definitely improve your coding experience while using effect.

I am talking about our effect language service plugin!
What is it?
A language service plugin is an extension to the TypeScript language service protocol.
The language service protocol is the protocol that many editors use and agreed on as a way to standardize the communication between the
actual language service side, that fully understands the code semantics, and the editor you use.
Whenever you hover a function call in your code to see the type, or start typing anything to get autocompletion info, or refactor a variable name; 
all of those tasks are performed by the language service.

How does that fit into the Effect world?
Our plugin is able to provide new additional diagnostics and refactors based on a lot of informations about our Effect code and types.

Ok, let's take a real world example. I am sure that many of you know how painful it is to fix situations like this one.
That's basically a red squiggly screen of death. An entire page of non-clear errors. Can you spot immediately where the error is?

Let's try now again with the language service turned on. As you can see, the difference is almost immediate, 
one quick look and the language server plugin points you towards an error, in this case we were using a yield instead of yield star.

And another situation where typescript errors have always been cryptic is for example when you are missing services or errors in your effect datatype.
As you can see here the difference is in my opinion pretty huge, if we have for example the code lenses enabled to see errors in-line,
what before was just a huge section of squiggly non-sense, now its almost immediate to see where the problem actually is, without trying to hover the error and dig into it.

But it's not just diagnostics, we also have other functionalities like refactors to help you writing effect code.

One very simple we provide is the ability to refactor an async/await function into an Effect by just right clicking and chosing the appropriate refactor.
It will automatically define error objects and convert your async await into an effect.gen.

But unfortunately language server plugins are loaded just by your editor.
They are not loaded when trying to use TSC to compile your source.
So there may be some errors that you may want to become blocking or trigger a red alarm once they are detected.

For that purpose, we plan to build an eslint plugin that will specifically target this kind of scenarios.

Take as an example the floating effects. 

Right now this plugin is already published, but it's limited to providing a styling rule limited to using dprint instead of prettier as code formatter.
But long term, we plan to have in there additional rules, even stylistics one, that will help improve your code.

And I personally strongly belive, that building an interactive experience inside your editor thanks to the language service and the lint rules
will definetely be an improvement for all the people looking forward learning effect, or improving their effect codebases.

Take for example Generic services, a common thing that I think most of us tried to do at least one time while learning effect.
You initially think that's a good idea, then you try to model that in effect, and then, not able to get the types working,
you start to search into the docs how to do that, but the real thing is, that generic services are not recommended at all.
Instead in effect we usually create factory services instead. So imagine that instead of all of this time spent searching how to do that,
the moment you try to define a service that accepts generics, you get a warning saying that's not recommended, and pointing you to the chapter of the docs explaining why.

-->

---

<!--
Even though language service and lint rules are great, they are not the only thing we plan for the effect devtools experience.

You may already know that there is already a published vscode extension that provides metrics and informations about the current effect context directly inside your vscode editor.

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

# Future: Exploring experimental devtools API with createTask

If you like 