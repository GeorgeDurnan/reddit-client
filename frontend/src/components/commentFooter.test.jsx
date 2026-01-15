import { render, screen } from "@testing-library/react"
import { expect, test } from 'vitest'
import { Footer } from "./commentFooter.jsx"
import { Provider } from 'react-redux'
import store from "../app/store.jsx"
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
test("Footer displays button and author", () => {
    const testPost = { id: "f39a9d8f-81a5-4633-b4a4-23913096507d", isVideo: false, thumbnail: "https://b.thumbs.redditmedia.com/-K4k9ijicB5sVUMCw3DYYp31HRwGsXWXY6OPBmgLjJs.jpg", author: "Embarrassed_Tip7359", url: "https://reddit-client-vx8k.onrender.com/getComments/?link=https://reddit.com/r/meirl/comments/1qdgnpi/meirl/.json", media: null, title: "Meirl", isMedia: true, text: "", image: "https://preview.redd.it/x5d6ks16whdg1.png?auto=webp&s=2dec57cb3ac3d0da0a4284ef17692ec18c63b0e0" }
    render(<Provider store={store}><Footer post={testPost} /></Provider>)
    // Check if the comment text appears
    expect(screen.getByText('Embarrassed_Tip7359')).toBeInTheDocument()
    expect(screen.getByText('Show comments')).toBeInTheDocument()
})