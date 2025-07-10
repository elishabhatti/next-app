"use server";
import { db } from "@/config/db";

export const contactAction = async (formData) => {
  const { full_name, email, message } = Object.fromEntries(formData.entries());
  console.log(full_name, email, message);

  await db.execute(
    "insert into contact_messages (full_name, email, message) values (?, ?, ?)",
    [full_name, email, message]
  );
};
