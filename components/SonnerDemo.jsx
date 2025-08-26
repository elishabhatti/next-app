"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const SonnerDemo = () => {
  return (
    <div>
      <Button onClick={() => toast("Hello React.js")}>Toast</Button>
    </div>
  );
};

export default SonnerDemo;
