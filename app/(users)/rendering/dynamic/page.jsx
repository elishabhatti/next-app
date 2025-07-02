import React from "react";
import { db } from "@/config/db";

const DynamicPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Dynamic Doctors ",doctors);

  return (
    <div>
      <h1>Hi Full Stack Developer</h1>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}>{doctor.first_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DynamicPage;
