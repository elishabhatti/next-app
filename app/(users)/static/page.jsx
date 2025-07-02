import React from "react";
import { db } from "@/config/db";

const StaticPage = async () => {
  const doctors = await db.execute("select * from doctors");
  console.log(doctors);

  return <div>Hi Full Stack Developer</div>;
};

export default StaticPage;
