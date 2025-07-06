import React from 'react'

const DoctorsList = async ({doctors}) => {    
  return (
    <div>
        <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}>{doctor.first_name}</li>;
        })}
      </ul>
    </div>
  )
}

export default DoctorsList