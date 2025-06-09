import React, { useState } from "react";

export default function App() {
  // State to store all input values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
  });

  // Update state on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert(`Submitted data:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({
      username: "",
      password: "",
      email: "",
      address: "",
    });

    // Here you can send data to API or backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded"
    >
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>

      <label className="block mb-2">
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter username"
        />
      </label>

      <label className="block mb-2">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter password"
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter email"
        />
      </label>

      <label className="block mb-4">
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter address"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
