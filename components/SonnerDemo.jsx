"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Megaphone } from "lucide-react";

const SonnerDemo = () => {
  return (
    <div className="flex gap-5 items-center">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 5000,
            icon: <Megaphone className="size-4" />,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <button
        className="toast-button"
        onClick={() => {
          toast.success("This is a success toast");
        }}
      >
        Render Success Toast
      </button>
      <button
        className="toast-button"
        onClick={() => {
          toast.warning("This is a warning toast");
        }}
      >
        Render Warning Toast
      </button>
      <button
        className="toast-button"
        onClick={() => {
          toast.error("This is a error toast");
        }}
      >
        Render Error Toast
      </button>
      <button
        className="toast-button"
        onClick={() => {
          toast(
            <div>
              A Custom toast with a
              <a
                href="https://youtu.be/RUG5GVDZkOQ?list=PLwGdqUZWnOp0lwvSBaIzzgV9X0ZiZ-42O"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-2"
              >
                link
              </a>
            </div>
          );
        }}
      >
        Next.js Shadcn Sonner
      </button>
    </div>
  );
};

export default SonnerDemo;
