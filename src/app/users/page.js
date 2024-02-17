"use client";

import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/layouts/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const { loading, data } = useProfile();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }
  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="max-w-2x mt-8 mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 &&
          users.map((user, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4"
            >
              <div className="grow grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-gray-700 grow">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No name</span>}
                </div>
                <span>{user.email}</span>
              </div>
              <div>
                <Link className="button" href={"/users/" + user._id}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
