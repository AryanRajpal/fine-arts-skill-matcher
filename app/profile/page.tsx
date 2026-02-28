"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  return (
    <main>
      <h1 className="text-3xl font-semibold">Create Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border px-3 py-2 rounded"
        />
        
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Profile
        </button>
      </form>
    </main>
  );
}

