"use client";
import MenuItem from "@/components/menu/MenuItem";
import SectionHeaders from "../../components/layouts/SectionsHeaders";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("./api/categories").then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => setMenuItems(menuItems));
    });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
 
  return (
    <section className="mt-8">
      {categories?.length > 0 ? (
        categories.map((c, i) => (
          <div key={i}>
            <div className="text-center">
              <SectionHeaders mainHeader={c.name} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-8 mb-12">
              {menuItems
                .filter((m) => m.category === c._id)
                .map((item, i) => (
                  <MenuItem key={i} {...item} />
                ))}
            </div>
          </div>
        ))
      ) : (
        <Loading className="min-h-[60vh]" />
      )}
    </section>
  );
}
