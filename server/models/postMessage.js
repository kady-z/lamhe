import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    selectedFile: String,
    message: String,
    likeCount: {
        type: Number,
        default: 0
    },
    Creator: String,
    CreatedAt: {
        type: Date,
        default: new Date()
    },
    tags: [String]
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;