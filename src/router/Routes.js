import About from "../pages/About"
import Login from "../pages/Login"
import PostIdPages from "../pages/PostIdPages"
import Posts from "../pages/Posts"

export const privateRoutes = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostIdPages />, exact: true },
    { path: "/", element: <Posts />, exact: true },
]

export const publicRoutes = [
    { path: "/login", element: <Login />, exact: true },

]