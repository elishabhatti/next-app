import { CarouselDemo } from "@/components/CarouselDemo";
import DialogDemo from "@/components/DialogDemo";
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo";
import SheetDemo from "@/components/SheetDemo";

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
    </section>
  );
};

export default Page;
