import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import KakaoMap from "../../../components/KakaoMap" // 경로를 실제 경로로 수정
import Loading from "../../../components/Loading"
import axios from "axios"

const EventDetail = () => {
  const { id } = useParams()
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-54-180-141-4.ap-northeast-2.compute.amazonaws.com:8080/api/events/${id}`
        )
        setEventData(response.data)
      } catch (error) {
        console.error("Error fetching event data:", error)
      }
    }

    fetchEventData()
  }, [id])

  return (
    <div className="event-container">
      <h1>이벤트 정보</h1>
      {eventData ? (
        <>
          <KakaoMap
            location={eventData.coordinates[0]}
            coordinates={eventData.coordinates}
            cluster={eventData.cluster}
          />
          <p>Event ID: {id}</p>
          <p>Enterprise Name: {eventData.enterpriseName}</p>
          <p>Headcount: {eventData.headcount}</p>
          <p>Start Date: {eventData.startDate}</p>
          <p>End Date: {eventData.endDate}</p>
          <p>Delivery Date: {eventData.deliveryDate}</p>
          <p>Collection Date: {eventData.collectionDate}</p>
          <p>Location: {eventData.location}</p>
          <p>Cluster: {eventData.cluster}</p>
          <p>Meeting: {eventData.meeting ? "Yes" : "No"}</p>
          {eventData.meeting && <p>Meeting Date: {eventData.meetingDate}</p>}
          <h3>Coordinates</h3>
          <ul>
            {eventData.coordinates.map((coord, index) => (
              <li key={index}>
                위도: {coord.latitude}, 경도: {coord.longitude}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default EventDetail
