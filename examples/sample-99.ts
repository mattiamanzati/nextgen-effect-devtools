import { Effect, Data, Context } from "effect";

class ProductNotFoundError extends Data.TaggedError("ProductNotFoundError")<{
  productId: string;
}> {}

class PricingNotFoundError extends Data.TaggedError("PricingNotFoundError")<{
  productId: string;
}> {}

interface UserService {
  getName(): {
    name: string;
  };
}
const UserService = Context.GenericTag<UserService>("UserService");

interface TodoService {
    getName(todoId: string): {
        name: string;
        id: number
    };
}
const TodoService = Context.GenericTag<TodoService>("TodoService");

export const getData: Effect.Effect<void, never, TodoService> = Effect.gen(function* () {
  yield* UserService;
});
