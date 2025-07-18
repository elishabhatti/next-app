"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [state, setState] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setState({
      success: true,
      message: "Registration Successful! Welcome Aboard",
    });
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
    router.push("/");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#0e0e1a] p-8 rounded-lg w-full max-w-md shadow-lg">
        <h1 className="text-pink-400 text-3xl font-bold text-center mb-6">
          Get In Touch
        </h1>

        <form className="flex flex-col space-y-4">
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
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 rounded bg-[#1e1e2f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}
