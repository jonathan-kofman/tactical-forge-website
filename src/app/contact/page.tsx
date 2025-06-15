import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">Contact Us</h1>
      <form className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 rounded bg-gray-800 text-white" id="name" name="name" type="text" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 rounded bg-gray-800 text-white" id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 rounded bg-gray-800 text-white" id="message" name="message" rows={4} required />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">Send</button>
      </form>
      <div className="mt-8 text-blue-200 space-y-1">
        <p><span className="font-semibold">Contact:</span> Jonathan Kofman</p>
        <p><span className="font-semibold">Email:</span> <a href="mailto:jonkofm@hotmail.com" className="underline">jonkofm@hotmail.com</a></p>
        <p><span className="font-semibold">Phone:</span> <a href="tel:9087988082" className="underline">908-798-8082</a></p>
        <p><span className="font-semibold">Location:</span> Boston, MA, USA</p>
      </div>
      {/* Future: Add map, phone number, and social links here */}
    </div>
  );
} 