import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { motion, useInView } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${BACKEND_URL}/send-email`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      toast(data.message, {
        type: data.status,
      });

      if (data.status === "success") {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Error sending email, please try again later.", {
        type: "error",
      });
    }
  };

  return (
    <section id="contact" className="px-[40px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="contact-wrap flex flex-col gap-8"
      >
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            You can reach out to me for collaboration, job opportunities, or
            freelance work.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="contactForm"
          className="w-[80%] mx-auto border border-gray-200 shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="form-name flex flex-col gap-3"
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded-lg shadow-lg p-3"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="form-email flex flex-col gap-3"
          >
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 rounded-lg shadow-lg p-3"
            />
          </motion.div>

          {/* Subject Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="form-subject col-span-2 flex flex-col gap-3"
          >
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-200 rounded-lg shadow-lg p-3"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="form-text-area col-span-2 flex flex-col gap-3"
          >
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="border border-gray-200 rounded-lg shadow-lg p-3"
              id="message"
              name="message"
              rows="10"
              placeholder="Enter your message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="form-btn col-span-2 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="cursor-pointer bg-[#149ddd] text-white py-3 px-6 rounded-lg shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
