"use client";
// import { contactAction } from "./contact.action";

const contactAction = (formData) => {
  const { full_name, email, message } = Object.fromEntries(formData.entries());
  console.log(full_name, email, message);
};

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#0e0e1a] p-8 rounded-lg w-full max-w-md shadow-lg">
        <h1 className="text-pink-400 text-3xl font-bold text-center mb-6">
          Get In Touch
        </h1>

        <form action={contactAction} className="flex flex-col space-y-4">
          <div>
            <label className="text-white text-sm mb-1 block">Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded bg-[#1e1e2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded bg-[#1e1e2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">Message</label>
            <textarea
              rows={5}
              name="message"
              placeholder="Enter your message..."
              className="w-full px-4 py-2 rounded bg-[#1e1e2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
