import { render, screen } from "@testing-library/react"
import { expect, test } from 'vitest'
import { Comment } from "./comment"
import { Provider } from 'react-redux'
import store from "../app/store.jsx"
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
test("Comment displays passed in data", () => {
    const testComment = {
        id: 1,
        body: "salam",
        author: "me",
        upvotes: 6,
        replies: ""
    }
    render(<Provider store={store}><Comment comment={testComment} /></Provider>)
    // Check if the comment text appears
    expect(screen.getByText('salam')).toBeInTheDocument()
    expect(screen.getByText('me')).toBeInTheDocument()
    expect(screen.getByText("Upvotes: 6")).toBeInTheDocument()
}
)
test("Does not display reply button if no replies", () => {
    const testComment = {
        id: 1,
        body: "salam",
        author: "me",
        upvotes: 6,
        replies: ""
    }
    render(<Provider store={store}><Comment comment={testComment} /></Provider>)
    // Check if the comment text appears
    const buttons = screen.queryAllByTestId('replies-button')

    buttons.forEach(button => {
        expect(button).not.toBeVisible()
    })

}
)