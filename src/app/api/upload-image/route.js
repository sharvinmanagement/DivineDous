import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";
import cloudinaryConfig from "@/helpers/cloudinaryConfig";
import fs from "fs";

connect();

export async function POST(request, response) {
    try {
        const formData = await request.formData();
        const image = formData.get("image");

        const arrayBuffer = await image.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        // await fs.writeFile(`./public/uploads/${image.name}`, buffer);

        fs.writeFileSync(`public/${image.name}`, buffer);

        const uploadRespone = await cloudinaryConfig.uploader.upload(`public/${image.name}`);

        const image_url = uploadRespone.secure_url;
        console.log(uploadRespone);
        // console.log("image_url", image_url);
        // console.log("formData", formData);
        // console.log("formData image", image);
        // console.log("formData image", image);

        return NextResponse.json({
            message: "Password changed successfully!",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
