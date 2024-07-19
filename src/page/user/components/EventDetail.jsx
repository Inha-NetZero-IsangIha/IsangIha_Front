import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import KakaoMap from "../../../components/KakaoMap" // 경로를 실제 경로로 수정
import Loading from "../../../components/Loading"

const EventDetail = () => {
  const { id } = useParams()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ latitude, longitude })
        },
        (error) => {
          console.error("위치 받아오기 오류", error)
        }
      )
    } else {
      console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
    }
  }, [])

  return (
    <div className="event-container">
      <h1>이벤트 정보</h1>
      {location ? <KakaoMap location={location} /> : <Loading />}
      <p>Event ID: {id}</p>
    </div>
  )
}

export default EventDetail
