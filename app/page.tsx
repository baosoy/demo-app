"use client";

import { FormEventHandler, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ username: "", password: "" });

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("password", form.password);

    const result = await fetch(
      "https://staging.api.naturebound.ai/v1/auth/login",
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    console.log(result);
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <label>
          Email address
          <input
            className="border border-black"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.currentTarget.value })
            }
            type="email"
          />
        </label>
        <label>
          Password
          <input
            className="border border-black"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.currentTarget.value })
            }
            type="password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
