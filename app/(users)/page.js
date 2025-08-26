import { CarouselDemo } from "@/components/CarouselDemo";
import DialogDemo from "@/components/DialogDemo";
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo";
import { ModeToggle } from "@/components/ModeToggle";
import SheetDemo from "@/components/SheetDemo";
import SonnerDemo from "@/components/SonnerDemo";

const Page = () => {
  return (
    <section className="grid place-items-center">
      <section>
        <DialogDemo />
      </section>
      <section>
        <DrawerDialogDemo />
      </section>
      <section>
        <CarouselDemo />
      </section>
      <section>
        <SheetDemo />
      </section>
      <section>
        <SonnerDemo/>
      </section>
      <section>
        <ModeToggle/>
      </section>
    </section>
  );
};

export default Page;
