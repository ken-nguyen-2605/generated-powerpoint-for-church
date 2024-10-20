import mongoose from "mongoose";

const songSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: false,
		},
		part: {
			type: String,
			required: true,
		},
		lyrics: {
			type: [String],
			required: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
songSchema.set('autoIndex', true);
const Song = mongoose.model("Song", songSchema);
export default Song;
