"use client";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

export default function ImageUpload() {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        try {
            const response = await axios.post("/api/upload-image", formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="flex flex-col items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="avatar"
                >
                    Upload Image
                </label>
                <div className="flex items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5">
                        <div className="flex text-sm text-gray-600">
                            <input
                                id="avatar"
                                name="avatar"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Upload
                </button>
                <CldUploadButton
                    options={{ multiple: false }}
                    uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                    }
                    onSuccess={(results) => {
                        console.log("Public ID", results.info.public_id);
                        console.log("success", results);
                    }}
                    onUploadAdded={(results) => {
                        console.log("Upload added", results);
                    }}
                />
            </form>
        </div>
    );
}
