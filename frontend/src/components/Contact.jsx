import { useState } from "react";
import api from "../api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/inquiry", form);
    setForm({ name: "", email: "", message: "" });
    alert("Message sent");
  };

  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input className="w-full p-2 border" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="w-full p-2 border" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <textarea className="w-full p-2 border" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

        <button className="bg-black text-white px-4 py-2">Send</button>
      </form>
    </section>
  );
};

export default Contact;
