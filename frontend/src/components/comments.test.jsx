import { render, screen } from "@testing-library/react"
import { expect, test, vi } from 'vitest'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import { Comments } from "./comments.jsx"
import commentsReducer from '../features/commentsSlice'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
const testStore = configureStore({
    reducer: { comments: commentsReducer },
    preloadedState: {
        comments: {
            comments: {
                "1": [
                    { id: 2, body: "First comment", author: "user1", upvotes: 10, replies: "" }
                ]
            }
        }
    }
})
test("Comments are displayed", () => {

    render(<Provider store={testStore}><Comments id={"1"} /></Provider>)
    // Check if the comment text appears
    expect(screen.getByText('First comment')).toBeInTheDocument()
    expect(screen.getByText('user1')).toBeInTheDocument()
    expect(screen.getByText("Upvotes: 10")).toBeInTheDocument()
})