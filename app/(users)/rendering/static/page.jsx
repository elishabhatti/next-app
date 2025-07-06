import React from "react";
import { db } from "@/config/db";
import DoctorsList from "@/components/DoctorsList";
export const revalidate = 30;

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Static Doctors ");

  return (
    <div>
      <h1>Hi Full Stack Developer</h1>
      <DoctorsList doctors={doctors} />
    </div>
  );
};

export default StaticPage;
