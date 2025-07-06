import React from "react";
import { db } from "@/config/db";
import DoctorsList from "@/components/DoctorsList";
export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Dynamic Doctors ");

  return (
    <div>
      <h1>Hi Full Stack Developer</h1>
      <DoctorsList doctors={doctors} />
    </div>
  );
};

export default DynamicPage;
