"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Edit3,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          mobile: "",
          email: "",
          city: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-cyan-400">Me!</span>
      </h2>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 shadow-[0_0_2rem_#0ef] " >
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">
          {/* Left Side Info */}
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-black p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <div className="w-20 h-1 bg-black mb-6"></div>

            <p className="mb-6">
              Feel free to get in touch with us. We are always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone /> <span>+92 308 2735132</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail /> <span>babarzaidi1122@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin /> <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Right Side Form */}
          <div className="p-8 bg-gray-900 text-white">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left text-cyan-400">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden bg-gray-800">
                  <User className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none bg-gray-800 text-white"
                  />
                </div>
                <div className="flex items-center border rounded-lg overflow-hidden bg-gray-800">
                  <Phone className="ml-3 text-gray-400" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No *"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none bg-gray-800 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden bg-gray-800">
                  <Mail className="ml-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="p-3 w-full outline-none bg-gray-800 text-white"
                  />
                </div>
                <div className="flex items-center border rounded-lg overflow-hidden bg-gray-800">
                  <MapPin className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    placeholder="City Name *"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none bg-gray-800 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center border rounded-lg overflow-hidden bg-gray-800">
                <Edit3 className="ml-3 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="p-3 w-full outline-none bg-gray-800 text-white"
                />
              </div>

              <div className="flex items-start border rounded-lg overflow-hidden bg-gray-800">
                <MessageSquare className="ml-3 mt-3 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="p-3 w-full outline-none bg-gray-800 text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:from-cyan-400 hover:to-blue-400 transition p-3 rounded-lg font-semibold shadow-lg"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-cyan-400">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
