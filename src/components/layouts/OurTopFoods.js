"use client";
import Image from "next/image";
import SectionHeaders from "./SectionsHeaders";
import Link from "next/link";

export default function OurTopFoods() {
  return (
    <section className=" mt-20">
      <div className="text-center">
        <SectionHeaders mainHeader={"OUR CATEGORIES"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-10 mt-20">
          <Link href={"/menu"}>
            <div className="scale-100 hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="h-[180px] md:min-h-[200px] flex justify-center items-center">
                <Image
                  src={"/pizzaa.png"}
                  alt={"pasta"}
                  height={400}
                  width={400}
                  layout="responsive"
                  className="relative top-5 h-5"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-4 cursor-pointer">
                  Pizza
                </h3>
                <p className="text-slate-500 line-clamp-3">
                  Pizza is a popular dish originating from Italy, consisting of
                  a flattened round dough topped with tomato sauce, cheese, and
                  various ingredients such as meats, vegetables, and herbs. It&apos;s
                  baked until crispy, offering a satisfying and versatile meal
                  enjoyed worldwide.
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/menu"}>
            <div className="scale-100 hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="h-[180px] md:min-h-[200px] flex justify-center items-center">
                <Image
                  src={"/shakes.png"}
                  alt={"pasta"}
                  height={400}
                  width={400}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-4 cursor-pointer">
                  Shakes
                </h3>
                <p className="text-slate-500 line-clamp-3">
                  Shakes are creamy beverages made by blending milk (or a milk
                  alternative) with flavorings, sweeteners, and often ice cream.
                  They come in various flavors, from classic chocolate and
                  vanilla to creative options like cookies and cream. Served
                  cold, shakes are a delicious treat enjoyed as a refreshing
                  drink or dessert.
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/menu"}>
            <div className="scale-100 hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="h-[180px] md:min-h-[200px] flex justify-center items-center">
                <Image
                  src={"/iceCream.png"}
                  alt={"pasta"}
                  height={200}
                  width={200}
                  className="relative md:bottom-5 md:left-0"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-4 cursor-pointer">
                  Ice Cream
                </h3>
                <p className="text-slate-500 line-clamp-3">
                  Ice cream is a frozen dessert loved worldwide, typically made
                  from dairy products like milk and cream, sweetened with sugar,
                  and flavored with various ingredients such as fruit,
                  chocolate, or nuts. It&apos;s churned to incorporate air, creating
                  a smooth and creamy texture. Enjoyed in cones, cups, or as
                  toppings, ice cream offers a refreshing and indulgent treat
                  for people of all ages.
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/menu"}>
            <div className="scale-100 hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="h-[180px] md:min-h-[200px] flex justify-center items-center">
                <Image
                  src={"/burger.png"}
                  alt={"pasta"}
                  height={300}
                  width={300}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-4 cursor-pointer">
                  Burger
                </h3>
                <p className="text-slate-500 line-clamp-3">
                  A vegetarian burger is a plant-based alternative to
                  traditional meat burgers, featuring a patty made from
                  ingredients like beans, lentils, tofu, or vegetables. It&apos;s
                  served on a bun with toppings such as lettuce, tomato, onion,
                  and sauces.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
