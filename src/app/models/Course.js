import mongoose from "mongoose";
import slugGenerator from "mongoose-slug-generator/lib/slug-generator.js";
import mongooseDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: "name", unique: true },
        videoId: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Add plugin
mongoose.plugin(slugGenerator);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

export { Course };
