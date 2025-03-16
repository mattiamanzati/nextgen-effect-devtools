import { Effect } from "effect";

const program = Effect.gen(function* () {
  Effect.log("Hello, world!");
});

program.pipe(Effect.runPromise);
