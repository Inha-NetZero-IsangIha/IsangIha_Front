import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Loading from "../components/Loading"
import Layout from "../layout"

const Intro = lazy(() => import("../page/intro"))
const Authority = lazy(() => import("../page/authority"))
const User = lazy(() => import("../page/user"))
const UserMainPage = lazy(() => import("../page/user/components/Main"))
const QR = lazy(() => import("../page/user/components/QR"))
const EventDetail = lazy(() => import("../page/user/components/EventDetail"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true, // 기본 경로를 authority로 설정
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Intro />
          </Suspense>
        ),
      },
      {
        path: "authority",
        element: (
          <Suspense fallback={<Loading />}>
            <Authority />
          </Suspense>
        ),
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <UserMainPage />
              </Suspense>
            ),
          },
          {
            path: "qr",
            element: (
              <Suspense fallback={<Loading />}>
                <QR />
              </Suspense>
            ),
          },
          {
            path: "event/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <EventDetail />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

export default router
