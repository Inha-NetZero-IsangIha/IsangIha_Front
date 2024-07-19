import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Loading from "../components/Loading"
import Layout from "../layout"

const Intro = lazy(() => import("../page/intro"))
const Authority = lazy(() => import("../page/authority"))
const User = lazy(() => import("../page/user"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Intro />
          </Suspense>
        ),
      },
      {
        path: "/authority",
        element: (
          <Suspense fallback={<Loading />}>
            <Authority />
          </Suspense>
        ),
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
