import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <p>
        The command above will add the Button component to your project. You can
        then import it like this:
      </p>
      <Button asChild={true} variant={"outline"} size={"lg"}>
        <Link href="https://youtu.be/7TqsIx_UnFI?si=nU0yzMCLrtSe9cRJ">
          Click Me
        </Link>
      </Button>
      <Input/>
    </>
  );
};

export default Page;
