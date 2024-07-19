import React from "react"
import QrScanner from "react-qr-scanner"
import { useNavigate } from "react-router-dom"

const QR = () => {
  const navigate = useNavigate()

  const handleScan = (data) => {
    if (data) {
      console.log("QR src:", data.text)
      navigate("/user") // 스캔 후 유저 페이지로 돌아갑니다.
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  }

  return (
    <div className="qr-reader-container">
      <button onClick={() => navigate("/user")}>Close</button>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
        facingMode="environment" // 후면 카메라를 사용
      />
    </div>
  )
}

export default QR
