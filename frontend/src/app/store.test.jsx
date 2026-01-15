import { test, expect } from 'vitest'
import store from './store'
test("Test if store has initalised", ()=>{
    expect(store).toBeDefined
    expect(store.getState).toBeInstanceOf(Function)

})
test("Test if store contains all reducers", ()=>{
    expect(store.getState()).toHaveProperty("posts")
    expect(store.getState()).toHaveProperty("subreddits")
    expect(store.getState()).toHaveProperty("comments")
})