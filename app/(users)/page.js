import CarouselDemo from "@/components/CarouselDemo";
import DialogDemo from "@/components/DialogDemo";
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo";

const Page = () => {
  let isDarkMode;
  return (
    <>
      <section>
        <DialogDemo />
      </section>
      <section>
        <DrawerDialogDemo />
      </section>
      <section>
        <CarouselDemo />
      </section>
    </>
  );
};

export default Page;
