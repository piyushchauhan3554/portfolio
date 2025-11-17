import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esy8up8",
        "template_53rn9i4",
        form.current,
        "dWUh1sY5ICWOh5f79"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! 🚀");
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[8vw]"
    >
      <ToastContainer />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or any queries.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white text-center"
        >
          Send Me a Message ✨
        </motion.h3>

        <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-5">
          
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-purple-400" size={20} />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 pl-10 rounded-md bg-[#131125] text-white border border-gray-700 focus:border-purple-500 transition"
            />
          </div>

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-purple-400" size={20} />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 pl-10 rounded-md bg-[#131125] text-white border border-gray-700 focus:border-purple-500 transition"
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-purple-400" size={20} />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 pl-10 rounded-md bg-[#131125] text-white border border-gray-700 focus:border-purple-500 transition"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131125] text-white border border-gray-700 focus:border-purple-500 transition resize-none"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 py-3 text-white font-bold rounded-md shadow-lg shadow-purple-900/40 transition"
          >
            Send Message <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
