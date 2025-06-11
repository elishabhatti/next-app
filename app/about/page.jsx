import Link from "next/link";

const About = async () => {
  return (
    <>
      <h1>Hello About</h1>
      <button>
        <Link href="/">Home Page </Link>
      </button>
    </>
  );
};
export default About;
