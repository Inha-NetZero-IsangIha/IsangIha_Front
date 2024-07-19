import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "../../assets/Main1.png"
import Slide2 from "../../assets/Main2.png"

const User = () => {
  const [userCount, setUserCount] = useState(0)
  const [events, setEvents] = useState([])

  useEffect(() => {
    setUserCount(150)

    // Mock data
    const eventData = [
      {
        eventName: "인하대학교",
        eventGreeting: "환경을 위한 뜻깊은 행사에 참여해주셔서 감사합니다!",
      },
      {
        eventName: "힙합플레이페스티벌",
        eventGreeting: "제로 웨이스트의 가치를 배워보세요!",
      },
    ]

    setEvents(eventData)
  }, [])

  return (
    <div className="user-container">
      <div className="home-container">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div>
            <img
              src={Slide1}
              alt="ish는 재활용 수거함이 있는 친환경 도시를 만듭니다."
            />
            <p className="legend">
              ish는 재활용 수거함이 있는 친환경 도시를 만듭니다.
            </p>
          </div>
          <div>
            <img
              src={Slide2}
              alt="지도를 사용하여 재할용 수거함을 찾아보세요."
            />
            <p className="legend">
              지도를 사용하여 재할용 수거함을 찾아보세요.
            </p>
          </div>
        </Carousel>
      </div>
      <h1 className="user-h1-title">
        현재 ish 서비스를 {userCount}명이 사용하고 있어요
      </h1>
      <div className="user-event-list">
        <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
        {events.map((event, index) => (
          <div key={index} className="user-event-list-item">
            <h2>{event.eventName}</h2>
            <p>{event.eventGreeting}</p>
          </div>
        ))}
      </div>
      <div className="user-event-qr-move-detail">QR</div>
    </div>
  )
}

export default User
