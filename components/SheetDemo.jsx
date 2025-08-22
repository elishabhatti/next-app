import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

const SheetDemo = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
          {/* can be used as a navbar */}
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          {/* can be used as a side form */}
          <div className="grid flex-1 auto-rows-min gap-6">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDemo;
