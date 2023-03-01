/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@components/UI/atoms/Button";
import Input from "@components/UI/atoms/Input";
import DashboardLayout from "@components/dashboard/templates/DashboardLayout";
import React, { useRef, useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";

export default function AddProduct() {
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState("No Selected File");

  const [data, setData] = useState({
    name: "",
    price: "",
    desc: "",
    filename: "",
  });

  const handleOnChange = (e) => {
    e.target.name === "price" && isNaN(e.target.value)
      ? e.preventDefault()
      : setData({
          ...data,
          [e.target.name]: e.target.value,
        });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <DashboardLayout>
      <form className="grid grid-cols-2 gap-5" onSubmit={handleOnSubmit}>
        <div className="space-y-2">
          <p className="text-2xl font-bold uppercase">Add Product</p>

          <Input
            name="name"
            placeholder="Name"
            value={data.name}
            handleOnChange={handleOnChange}
          />

          <Input
            name="price"
            placeholder="Price"
            value={data.price}
            handleOnChange={handleOnChange}
          />

          <div
            className="flex h-1/2 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500"
            onClick={() => imageRef.current.click()}
          >
            <input
              ref={imageRef}
              type="file"
              name="image"
              placeholder="Upload Image"
              accept="image/*"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFilename(files[0].name);
                if (files) setImage(URL.createObjectURL(files[0]));
              }}
            />

            {image ? (
              <img src={image} className="h-[80%] w-[80%]" alt="" />
            ) : (
              <>
                <MdCloudUpload className="text-7xl text-blue-500" />
                <p className="text-sm font-semibold">Browse Files to Upload</p>
              </>
            )}
          </div>

          <section className="flex items-center space-x-1">
            <AiFillFileImage className="text-lg text-blue-500" />
            <p className="text-sm">{filename}</p>
          </section>

          <Button size="sm" className="mt-3">
            Add Product
          </Button>
        </div>

        <div>
          <p className="text-2xl font-bold uppercase">Description</p>
          <textarea
            placeholder="Description"
            className="mt-3 px-3 pt-2 outline-blue-500 "
            name="desc"
            cols="60"
            rows="10"
            value={data.desc}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </form>
    </DashboardLayout>
  );
}
