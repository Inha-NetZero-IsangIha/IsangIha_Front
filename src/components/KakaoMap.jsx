import React, { useEffect, useRef } from "react"

const KakaoMap = ({ location }) => {
  const mapRef = useRef(null) // map 설정 저장 ref

  useEffect(() => {
    const script = document.createElement("script")
    const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY
    const scriptUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`
    console.log("Kakao Map script URL:", scriptUrl)
    script.src = scriptUrl
    script.async = true
    script.onload = () => {
      console.log("Kakao Map script load 성공")
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          console.log("Kakao Map API load 성공")
          const container = document.getElementById("map")
          const options = {
            center: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
            ),
            level: 3,
          }
          // 카카오맵 설정 적용
          const map = new window.kakao.maps.Map(container, options)
          mapRef.current = map

          // 현재 위치에 핀 추가
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              location.latitude,
              location.longitude
            ),
            map: map,
          })
        })
      } else {
        console.error("Kakao Map API 지원 오류")
      }
    }
    script.onerror = () => {
      console.error("Kakao Map script load 오류")
    }
    // index.html의 head에 <script> 태그로 추가
    document.head.appendChild(script)
  }, [location])

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>
}

export default KakaoMap
