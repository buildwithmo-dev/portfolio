import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-semibold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-500 mb-8">
          Want to work together? Send me a message.
        </p>

        {success && (
          <p className="text-green-500 mb-4">
            Message sent successfully 🚀
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="p-3 rounded-lg border"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="p-3 rounded-lg border"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="p-3 rounded-lg border h-32"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}