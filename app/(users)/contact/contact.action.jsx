"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async ({ full_name, email, message }) => {
  try {
    console.log(full_name, email, message);

    await db.execute(
      "insert into contact_messages (full_name, email, message) values (?, ?, ?)",
      [full_name, email, message]
    );

    return { success: true, message: "Form Submitted Successfully!" };
    // redirect("/")
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    return { success: true, message: "Error While Submitting Form!" };
  }
};
