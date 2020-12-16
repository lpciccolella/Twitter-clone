const {validationResult} = require("express-validator");
const Post = require('../../schemas/Post');

module.exports = async(req,res) => {
    const { searchInput} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: error.array()})
    try {
        if(searchInput === "" || searchInput === null){
            res.status(401).json(posts);
        }else{
            let findPostBySearchInput = this.posts.find(
                (post) => post.textOfThePost.toString().toLowerCase().split(" ").join("") === 
                searchInput.toString().toLowerCase().split(" ").join(""));
                res.json(findPostBySearchInput);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error");
    }
}