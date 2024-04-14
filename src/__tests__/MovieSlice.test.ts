import { fetchRandomMovies } from "../app/features/movie/movieAPI";
import store from "../app/store";

describe("movieSlice tests", () => {
  it("should handle initial state", () => {
    expect(store.getState().movie).toEqual({
      entities: [],
      loading: "idle",
    });
  });

  it("fetchRandomMovies updates state upon fetch success", async () => {
    const result = await store.dispatch(fetchRandomMovies());
    expect(result.type).toBe("movies/fetchRandom/fulfilled");
    expect(store.getState().movie.entities).not.toHaveLength(0);
  });
});
