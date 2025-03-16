import { NodeRuntime, NodeSocket } from "@effect/platform-node";
import { Effect, Metric, Layer } from "effect";
import { DevTools} from "@effect/experimental"

const hiCounterMetric = Metric.counter("hi_counter");

const program = Effect.gen(function* () {
  yield* Effect.log("Hello!");
  yield* Metric.increment(hiCounterMetric);
  yield* Effect.sleep(2000);
}).pipe(Effect.withSpan("Hi", { attributes: { foo: "bar" } }), Effect.forever);

const DevToolsLive = DevTools.layerWebSocket().pipe(
  Layer.provide(NodeSocket.layerWebSocketConstructor),
)

program.pipe(Effect.provide(DevToolsLive), NodeRuntime.runMain);
