import { CarouselDemo } from "@/components/CarouselDemo";
import DialogDemo from "@/components/DialogDemo";
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo";

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
    </section>
  );
};

export default Page;
