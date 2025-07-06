import React from "react";
import { db } from "@/config/db";
export const dynamic = "force-dynamic";
import { cache } from "react";

const DynamicPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <div>
      <h1>Hi Full Stack Developer</h1>
      <DoctorsList doctors={doctors} />
    </div>
  );
};

export default DynamicPage;

export const DoctorsList = async () => {
  const doctors = await getAllDoctors();
  return (
    <div>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}>{doctor.first_name}</li>;
        })}
      </ul>
    </div>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Dynamic Doctors ");
  return doctors;
});
