const mongoose = require('mongoose');

let PostSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        require: true
    },
    latName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    avatar: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    textOfThePost:{
        type: String,
        require: true
    },
    likes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            }
        }
    ],
    comments:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
             name: {
                type: String,
                require: true
            },
            avatar: {
                type: String
            },
            date:{
                type: Date,
                default: Date.now()
            },
            likes: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "user",
                    }
                }
            ]
        },
    ]
});

const PostModel = mongoose.model("post", PostSchema)

module.exports = PostModel;