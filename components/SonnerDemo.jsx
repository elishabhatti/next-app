"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Megaphone } from "lucide-react";

const SonnerDemo = () => {
  return (
    <div>
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
      <button className="toast-button" onClick={() => {
        toast.success("This is a success toast")
      }}>Render Toast
      </button>
    </div>
  );
};

export default SonnerDemo;
