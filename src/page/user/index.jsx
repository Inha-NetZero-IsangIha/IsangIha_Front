// import React, { useState, useEffect } from "react"
// import Main1 from "../../assets/Main1.png"
// import Main2 from "../../assets/Main2.png"

// const User = () => {
//   const [userCount, setUserCount] = useState(0)
//   const [events, setEvents] = useState([])

//   useEffect(() => {
//     // Mock user count
//     setUserCount(150)

//     // Mock event data
//     const eventData = [
//       {
//         eventName: "환경 보호 캠페인",
//         eventGreeting: "환경을 위한 뜻깊은 행사에 참여해주셔서 감사합니다!",
//       },
//       {
//         eventName: "제로 웨이스트 워크숍",
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
//               alt="Eco-friendly cityscape with recycling bins"
//             />
//             <p className="legend">Eco-friendly cityscape with recycling bins</p>
//           </div>
//           <div>
//             <img src={Slide2} alt="Users finding recycling bins using a map" />
//             <p className="legend">Users finding recycling bins using a map</p>
//           </div>
//         </Carousel>
//       </div>
//       <h1>현재 ish 서비스를 {userCount}명이 사용하고 있어요</h1>
//       <div className="event-list">
//         {events.map((event, index) => (
//           <div key={index} className="event-item">
//             <h2>{event.eventName}</h2>
//             <p>{event.eventGreeting}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default User
import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "../../assets/Main1.png"
import Slide2 from "../../assets/Main2.png"

const User = () => {
  const [userCount, setUserCount] = useState(0)
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Mock user count
    setUserCount(150)

    // Mock event data
    const eventData = [
      {
        eventName: "환경 보호 캠페인",
        eventGreeting: "환경을 위한 뜻깊은 행사에 참여해주셔서 감사합니다!",
      },
      {
        eventName: "제로 웨이스트 워크숍",
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
              alt="Eco-friendly cityscape with recycling bins"
            />
            <p className="legend">Eco-friendly cityscape with recycling bins</p>
          </div>
          <div>
            <img src={Slide2} alt="Users finding recycling bins using a map" />
            <p className="legend">Users finding recycling bins using a map</p>
          </div>
        </Carousel>
      </div>
      <h1>현재 ish 서비스를 {userCount}명이 사용하고 있어요</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h2>{event.eventName}</h2>
            <p>{event.eventGreeting}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
