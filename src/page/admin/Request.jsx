import React, { useState, useEffect } from 'react';

const Request = () => {
  const [formData, setFormData] = useState({
    enterpriseName: '',
    eventName: '',
    headcount: '',
    containers: [{
        containerType: 'small_cup',
        label: 'Small Cup',
        quantity: 0,
        checked: false,
    },
    {
        containerType: 'large_cup',
        label: 'Large Cup',
        quantity: 0,
        checked: false,
    },
    {
        containerType: 'small_dish',
        label: 'Small Dish',
        quantity: 0,
        checked: false,
    },
    {
        containerType: 'large_dish',
        label: 'Large Dish',
        quantity: 0,
        checked: false,
    }],
    startDate: '',
    endDate: '',
    deliveryDate: '',
    collectionDate: '',
    location: '',
    cluster: '',
    meeting: false,
    meetingDate: '',
  });

  useEffect(() => {
    console.log(formData)
  }, [formData])

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
          <input type="text" name="enterpriseName" value={formData.enterpriseName} onChange={handleChange} />
        </label>
        <label>
          행사 이름:
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
        </label>
        <label>
          예상 인원:
          <input type="number" name="headcount" value={formData.headcount} onChange={handleChange} />
        </label>
        <label className="direction-column">
          <span>다회용기 유형 및 수량:</span>
          {formData.containers.map((item, index) => (
                <div key={index} style={{gap: '10px', marginLeft: '30px'}} className="direction-row vertical-center-sender">
                    <input type="checkbox" />
                    <span>{item.label + ': '}</span>
                    <input style={{width: '100px'}} type="number" />
                </div>
            ))}
        </label>
        <label>
          행사 일자:
          <input type="datetime-local" name="startDate" value={formData.startDate} onChange={handleChange} />
        </label>
        <label>
          종료 일자:
          <input type="datetime-local" name="endDate" value={formData.endDate} onChange={handleChange} />
        </label>
        <label>
          희망 배송일:
          <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} />
        </label>
        <label>
          희망 수거일:
          <input type="date" name="collectionDate" value={formData.collectionDate} onChange={handleChange} />
        </label>
        <label>
          장소 (좌표):
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>
          클러스터:
          <input type="text" name="cluster" value={formData.cluster} onChange={handleChange} />
        </label>
        <label style={{gap: '10px'}} className="direction-row vertical-center-sender">
            <input type="checkbox" name="meeting" checked={formData.meeting} onChange={handleChange} />
            <span>답사 요청</span>
        </label>
        <label style={{marginLeft: '30px', visibility: formData.meeting ? 'visible' : 'hidden'}}>
            <input type="date" name="meetingDate" value={formData.meetingDate} onChange={handleChange} />
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Request;