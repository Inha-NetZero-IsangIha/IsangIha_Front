import React, { useState } from 'react';

const Request = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    eventName: '',
    expectedAttendance: '',
    reusableItems: '',
    eventDate: '',
    endDate: '',
    desiredDeliveryDate: '',
    desiredPickupDate: '',
    location: '',
    cluster: '',
    surveyRequest: false,
    surveyDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label>
          회사명:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </label>
        <label>
          행사 이름:
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
        </label>
        <label>
          예상 인원:
          <input type="number" name="expectedAttendance" value={formData.expectedAttendance} onChange={handleChange} />
        </label>
        <label>
          다회용기 유형 및 수량:
          <textarea name="reusableItems" value={formData.reusableItems} onChange={handleChange} />
        </label>
        <label>
          행사 일자:
          <input type="datetime-local" name="eventDate" value={formData.eventDate} onChange={handleChange} />
        </label>
        <label>
          종료 일자:
          <input type="datetime-local" name="endDate" value={formData.endDate} onChange={handleChange} />
        </label>
        <label>
          희망 배송일:
          <input type="date" name="desiredDeliveryDate" value={formData.desiredDeliveryDate} onChange={handleChange} />
        </label>
        <label>
          희망 수거일:
          <input type="date" name="desiredPickupDate" value={formData.desiredPickupDate} onChange={handleChange} />
        </label>
        <label>
          장소 (좌표):
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>
          클러스터:
          <input type="text" name="cluster" value={formData.cluster} onChange={handleChange} />
        </label>
        <label>
          답사 요청:
          <input type="checkbox" name="surveyRequest" checked={formData.surveyRequest} onChange={handleChange} />
        </label>
        {formData.surveyRequest && (
          <label>
            답사 일자:
            <input type="date" name="surveyDate" value={formData.surveyDate} onChange={handleChange} />
          </label>
        )}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Request;