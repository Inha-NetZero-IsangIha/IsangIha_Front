// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import KakaoMapAdmin from "../../components/KaKaoMapAdmin"

// const EventRequest = ({ formData, setFormData, prevStep }) => {
//   const navigate = useNavigate()
//   const [userLocation, setUserLocation] = useState(null)

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords
//           setUserLocation({ latitude, longitude })
//         },
//         (error) => {
//           console.error("위치 받아오기 오류", error)
//         }
//       )
//     } else {
//       console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
//     }
//   }, [])

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     })
//   }

//   const handleContainerChange = (index, e) => {
//     const { name, value, type, checked } = e.target
//     const newContainers = formData.containers.map((container, idx) => {
//       if (idx === index) {
//         return { ...container, [name]: type === "checkbox" ? checked : value }
//       }
//       return container
//     })
//     setFormData({ ...formData, containers: newContainers })
//   }

//   const handleMapClick = (coord) => {
//     setFormData({
//       ...formData,
//       coordinates: [...formData.coordinates, coord],
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     localStorage.setItem("eventData", JSON.stringify(formData))
//     navigate("/authority")
//   }

//   return (
//     <div className="input-form">
//       <form onSubmit={handleSubmit}>
//         <label>
//           회사명:
//           <input
//             type="text"
//             name="enterpriseName"
//             value={formData.enterpriseName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           행사 이름:
//           <input
//             type="text"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           예상 인원:
//           <input
//             type="number"
//             name="headcount"
//             value={formData.headcount}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="direction-column">
//           <span>다회용기 유형 및 수량:</span>
//           {formData.containers.map((item, index) => (
//             <div key={index} className="container-row">
//               <input
//                 type="checkbox"
//                 name="checked"
//                 checked={item.checked}
//                 onChange={(e) => handleContainerChange(index, e)}
//               />
//               <span>{item.label + ": "}</span>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={item.quantity}
//                 onChange={(e) => handleContainerChange(index, e)}
//               />
//             </div>
//           ))}
//         </label>
//         <label>
//           행사 일자:
//           <input
//             type="datetime-local"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           종료 일자:
//           <input
//             type="datetime-local"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           희망 배송일:
//           <input
//             type="date"
//             name="deliveryDate"
//             value={formData.deliveryDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           희망 수거일:
//           <input
//             type="date"
//             name="collectionDate"
//             value={formData.collectionDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="checkbox-row">
//           <input
//             type="checkbox"
//             name="meeting"
//             checked={formData.meeting}
//             onChange={handleChange}
//           />
//           <span>답사 요청</span>
//           {formData.meeting && (
//             <label className="date-picker">
//               <input
//                 type="date"
//                 name="meetingDate"
//                 value={formData.meetingDate}
//                 onChange={handleChange}
//               />
//             </label>
//           )}
//         </label>
//         <h3>선택한 위치 좌표</h3>
//         <div className="map-container">
//           {userLocation ? (
//             <KakaoMapAdmin
//               location={userLocation}
//               coordinates={formData.coordinates} // 좌표 배열 전달
//               onMapClick={handleMapClick}
//             />
//           ) : (
//             <p>현재 위치를 받아오는 중...</p>
//           )}
//         </div>
//         <ul className="coordinate-list">
//           {formData.coordinates.map((coord, index) => (
//             <li key={index}>
//               위도: {coord.latitude}, 경도: {coord.longitude}
//             </li>
//           ))}
//         </ul>
//         <button type="button" onClick={prevStep}>
//           이전
//         </button>
//         <button type="submit">제출</button>
//       </form>
//     </div>
//   )
// }
// export default EventRequest

// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import KakaoMapAdmin from "../../components/KaKaoMapAdmin"

// const EventRequest = ({ formData, setFormData, prevStep }) => {
//   const navigate = useNavigate()
//   const [userLocation, setUserLocation] = useState(null)

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords
//           setUserLocation({ latitude, longitude })
//         },
//         (error) => {
//           console.error("위치 받아오기 오류", error)
//         }
//       )
//     } else {
//       console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
//     }
//   }, [])

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     })
//   }

//   const handleContainerChange = (index, e) => {
//     const { name, value, type, checked } = e.target
//     const newContainers = formData.containers.map((container, idx) => {
//       if (idx === index) {
//         return { ...container, [name]: type === "checkbox" ? checked : value }
//       }
//       return container
//     })
//     setFormData({ ...formData, containers: newContainers })
//   }

//   const handleMapClick = (coord) => {
//     setFormData({
//       ...formData,
//       coordinates: [...formData.coordinates, coord],
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     localStorage.setItem("eventData", JSON.stringify(formData))
//     navigate("/authority")
//   }

//   return (
//     <div className="input-form">
//       <form onSubmit={handleSubmit}>
//         <label>
//           회사명:
//           <input
//             type="text"
//             name="enterpriseName"
//             value={formData.enterpriseName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           행사 이름:
//           <input
//             type="text"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           예상 인원:
//           <input
//             type="number"
//             name="headcount"
//             value={formData.headcount}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="direction-column">
//           <span>다회용기 유형 및 수량:</span>
//           {formData.containers.map((item, index) => (
//             <div key={index} className="container-row">
//               <input
//                 type="checkbox"
//                 name="checked"
//                 checked={item.checked}
//                 onChange={(e) => handleContainerChange(index, e)}
//               />
//               <span>{item.label + ": "}</span>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={item.quantity}
//                 onChange={(e) => handleContainerChange(index, e)}
//               />
//             </div>
//           ))}
//         </label>
//         <label>
//           행사 일자:
//           <input
//             type="datetime-local"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           종료 일자:
//           <input
//             type="datetime-local"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           희망 배송일:
//           <input
//             type="date"
//             name="deliveryDate"
//             value={formData.deliveryDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           희망 수거일:
//           <input
//             type="date"
//             name="collectionDate"
//             value={formData.collectionDate}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="checkbox-row">
//           <input
//             type="checkbox"
//             name="meeting"
//             checked={formData.meeting}
//             onChange={handleChange}
//           />
//           <span>답사 요청</span>
//           {formData.meeting && (
//             <label className="date-picker">
//               <input
//                 type="date"
//                 name="meetingDate"
//                 value={formData.meetingDate}
//                 onChange={handleChange}
//               />
//             </label>
//           )}
//         </label>
//         <h3>선택한 위치 좌표</h3>
//         <div className="map-container">
//           <KakaoMapAdmin
//             festivalLocation={formData.festivalLocation}
//             coordinates={formData.coordinates} // 좌표 배열 전달
//             onMapClick={handleMapClick}
//           />
//         </div>
//         <ul className="coordinate-list">
//           {formData.coordinates.map((coord, index) => (
//             <li key={index}>
//               위도: {coord.latitude}, 경도: {coord.longitude}
//             </li>
//           ))}
//         </ul>
//         <button type="button" onClick={prevStep}>
//           이전
//         </button>
//         <button type="submit">제출</button>
//       </form>
//     </div>
//   )
// }

// export default EventRequest

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import KakaoMapAdmin from "../../components/KaKaoMapAdmin"

const EventRequest = ({ formData, setFormData, prevStep }) => {
  const navigate = useNavigate()
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          console.error("위치 받아오기 오류", error)
        }
      )
    } else {
      console.error("브라우저가 Geolocation 위치정보를 지원하지 않습니다.")
    }
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleContainerChange = (index, e) => {
    const { name, value, type, checked } = e.target
    const newContainers = formData.containers.map((container, idx) => {
      if (idx === index) {
        return { ...container, [name]: type === "checkbox" ? checked : value }
      }
      return container
    })
    setFormData({ ...formData, containers: newContainers })
  }

  const handleMapClick = (coord) => {
    setFormData({
      ...formData,
      coordinates: [...formData.coordinates, coord],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("eventData", JSON.stringify(formData))
    navigate("/authority")
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label>
          회사명:
          <input
            type="text"
            name="enterpriseName"
            value={formData.enterpriseName}
            onChange={handleChange}
          />
        </label>
        <label>
          행사 이름:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
        </label>
        <label>
          예상 인원:
          <input
            type="number"
            name="headcount"
            value={formData.headcount}
            onChange={handleChange}
          />
        </label>
        <label className="direction-column">
          <span>다회용기 유형 및 수량:</span>
          {formData.containers.map((item, index) => (
            <div key={index} className="container-row">
              <input
                type="checkbox"
                name="checked"
                checked={item.checked}
                onChange={(e) => handleContainerChange(index, e)}
              />
              <span>{item.label + ": "}</span>
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleContainerChange(index, e)}
              />
            </div>
          ))}
        </label>
        <label>
          행사 일자:
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          종료 일자:
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          희망 배송일:
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
          />
        </label>
        <label>
          희망 수거일:
          <input
            type="date"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleChange}
          />
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            name="meeting"
            checked={formData.meeting}
            onChange={handleChange}
          />
          <span>답사 요청</span>
          {formData.meeting && (
            <label className="date-picker">
              <input
                type="date"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleChange}
              />
            </label>
          )}
        </label>
        <h3>선택한 위치 좌표</h3>
        <div className="map-container">
          <KakaoMapAdmin
            location={formData.festivalLocation}
            coordinates={formData.coordinates} // 좌표 배열 전달
            onMapClick={handleMapClick}
          />
        </div>
        <ul className="coordinate-list">
          {formData.coordinates.map((coord, index) => (
            <li key={index}>
              위도: {coord.latitude}, 경도: {coord.longitude}
            </li>
          ))}
        </ul>
        <button type="button" onClick={prevStep}>
          이전
        </button>
        <button type="submit">제출</button>
      </form>
    </div>
  )
}

export default EventRequest
