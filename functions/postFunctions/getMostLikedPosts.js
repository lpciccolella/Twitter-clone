const Post = require('../../schemas/Post');

module.exports = async(req,res) => {
    try {
        // de mayor like a menor
        let posts = await Post.find().sort({likes: -1});
        res.json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error");
    }
}