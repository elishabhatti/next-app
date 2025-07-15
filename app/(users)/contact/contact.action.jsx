"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (previousState, formData) => {
  try {
    const { full_name, email, message } = Object.fromEntries(
      formData.entries()
    );
    console.log(full_name, email, message);

    await db.execute(
      "insert into contact_messages (full_name, email, message) values (?, ?, ?)",
      [full_name, email, message]
    );

    // return { success: true, message: "Form Submitted Successfully!" };
    redirect("/")
  } catch (error) {
    if(error.message === "NEXT_REDIRECT") throw error
    return { success: true, message: "Error While Submitting Form!" };
  }
};
