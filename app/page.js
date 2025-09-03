'use client';

import { useState } from "react";

export default function Home() {
    const [status, setStatus] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        form.reset();
        setStatus('Form Submitted successfully: ');
        setTimeout(()=>{
          setStatus('');
        },2000);
      } else {
        setStatus('Upload failed: ' + result.error);
      }
    } catch (err) {
      setStatus('Error Uploading Data.');
    }
  };
  return (
    <div className="w-full max-w-lg min-h-96 rounded-lg p-8 md:p-10 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            placeholder="Full Name"
            name="fullname"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          <div className="flex flex-col">
            <input
              required
              placeholder="Email"
              name="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <input
          required
          placeholder="Address"
          name="address"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            placeholder="City"
            name="city"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          <input
            required
            placeholder="State"
            name="state"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>

        <input
          required
          placeholder="Contact Number"
          name="contactNumber"
          type="tel"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />

        <div>
          <input
            required
            name="image"
            type="file"
            accept=""
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300"
        >
          Submit Form
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-green-600">{status}</p>}
    </div>
  );
}
