"use client";
import React, { FC } from "react";
import { CategoryType } from "./types/CategoryTypes";
import Link from "next/link";

interface Props {
  category: CategoryType[];
}

const CATEGORY: FC<Props> = ({ category }) => {
  return (
    <>
     <div className="flex justify-center my-10">
            <Link href={'/addcategory'}>
                <button className="py-2 px-6 rounded-md bg-slate-500 text-white">ADD CATEGORY</button>

            </Link>
        </div>
    <div className="flex justify-center">
       
      <table className="shadow">
        <thead>
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Description</th>
            <th className="p-4">Image</th>
            <th className="p-4">Typye</th>
          </tr>
        </thead>

        <tbody>
          {category.map((item, index) => (
            <tr key={index}>
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.description}</td>
              <td className="p-4">
                <img
                  src={item.image}
                  alt="Category Image"
                  height={50}
                  width={50}
                />
              </td>
              <td className="p-4">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CATEGORY;
