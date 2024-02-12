"use client";

import Link from "next/link";
import { useProfile } from "../../../../components/UseProfile";
import UserTabs from "../../../../components/layouts/UserTabs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Left from "@/components/icons/Left";
import { redirect, useParams } from "next/navigation";

export default function NewMenuItemPage() {
  const { id } = useParams();
  const { loading, data } = useProfile();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [redirectToItems, setRedirectToItems] = useState(false);

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setName(item.name);
        setDescription(item.description);
        setBasePrice(item.basePrice);
      });
    });
  }, []);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = { name, description, basePrice, _id: id };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(savingPromise, {
      loading: "Saving this tasty item",
      success: "Saved",
      error: "Error",
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-md mx-auto mt-8">
        <Link className="button" href={"/menu-items"}>
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex gap-2 items-start">
          <div>Image</div>
          <div className="grow">
            <label>Item name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
            />
            <label>Description</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
            />
            <label>Base price</label>
            <input
              value={basePrice}
              onChange={(event) => setBasePrice(event.target.value)}
              type="text"
            />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}