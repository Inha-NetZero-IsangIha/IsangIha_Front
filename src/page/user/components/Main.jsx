// import React, { useState, useEffect } from "react"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import Slide1 from "../../../assets/Main1.png"
// import Slide2 from "../../../assets/Main2.png"
// import { useNavigate } from "react-router-dom"
// import { v4 as uuidv4 } from "uuid"

// const Main = () => {
//   const [userCount, setUserCount] = useState(0)
//   const [events, setEvents] = useState([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     setUserCount(150)

//     // Mock data with UUIDs
//     const eventData = [
//       {
//         id: uuidv4(),
//         eventName: "인하대학교",
//         eventGreeting: "환경을 위한 뜻깊은 행사에 참여해주셔서 감사합니다!",
//       },
//       {
//         id: uuidv4(),
//         eventName: "힙합플레이페스티벌",
//         eventGreeting: "제로 웨이스트의 가치를 배워보세요!",
//       },
//     ]

//     setEvents(eventData)
//   }, [])

//   return (
//     <div className="user-container">
//       <div className="home-container">
//         <Carousel
//           showArrows={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           autoPlay={true}
//           interval={5000}
//         >
//           <div>
//             <img
//               src={Slide1}
//               alt="ish는 재활용 수거함이 있는 친환경 도시를 만듭니다."
//             />
//             <p className="legend">
//               ish는 재활용 수거함이 있는 친환경 도시를 만듭니다.
//             </p>
//           </div>
//           <div>
//             <img
//               src={Slide2}
//               alt="지도를 사용하여 재할용 수거함을 찾아보세요."
//             />
//             <p className="legend">
//               지도를 사용하여 재할용 수거함을 찾아보세요.
//             </p>
//           </div>
//         </Carousel>
//       </div>
//       <h1 className="user-h1-title">
//         현재 ish 서비스를 {userCount}명이 사용하고 있어요
//       </h1>
//       <div className="user-event-list">
//         <div className="user-event-list-title">현재 진행중인 이벤트 공간</div>
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="user-event-list-item"
//             onClick={() => navigate(`/user/event/${event.id}`)}
//           >
//             <h2>{event.eventName}</h2>
//             <p>{event.eventGreeting}</p>
//           </div>
//         ))}
//       </div>
//       <div
//         className="user-event-qr-move-detail"
//         onClick={() => navigate("/user/qr")}
//       >
//         QR
//       </div>
//     </div>
//   )
// }

// export default Main

import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "../../../assets/Main1.png"
import Slide2 from "../../../assets/Main2.png"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const [userCount, setUserCount] = useState(0)
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setUserCount(150)

    // 로컬스토리지에서 데이터를 가져옴
    const storedData = localStorage.getItem("eventData")
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setEvents([parsedData])
    }
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
          <div
            key={index}
            className="user-event-list-item"
            onClick={() => navigate(`/user/event/${event.eventName}`)}
          >
            <h2>{event.eventName}</h2>
            <p>{event.enterpriseName}</p>
          </div>
        ))}
      </div>
      <div
        className="user-event-qr-move-detail"
        onClick={() => navigate("/user/qr")}
      >
        QR
      </div>
    </div>
  )
}

export default Main
