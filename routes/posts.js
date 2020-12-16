const express = require("express");
const router = express.Router();
const authentication = require('../middleware/authentication');
const { createPostValidator, searchForPostValidator, addCommentValidator } = require("../middleware/express validator/expressValidator");
const getPosts = require("../functions/postFunctions/getPosts");
const getMostLikedPosts = require("../functions/postFunctions/getMostLikedPosts");
const getMostCommentedPosts = require("../functions/postFunctions/getMostCommentedPosts");
const getPostsByDate = require("../functions/postFunctions/getPostsByDate");
const getSinglePost = require("../functions/postFunctions/getSinglePost");
const getUserPostsByMiddleware = require("../functions/postFunctions/getUserPostsByMiddleware");
const getUserPostsById = require("../functions/postFunctions/getUserPostsById");
const createPost = require("../functions/postFunctions/createPost");
const searchForPost = require("../functions/postFunctions/searchForPost");
const addLike = require("../functions/postFunctions/addLike");
const addComment = require("../functions/postFunctions/addComment");
const likeComment = require("../functions/postFunctions/likeComment");
const deletePost = require("../functions/postFunctions/deletePost");
const removeLikeFromPost = require("../functions/postFunctions/removeLikeFromPost");
const removeComment = require("../functions/postFunctions/removeComment");
const removeLikeFromComment = require("../functions/postFunctions/removeLikeFromComment");



router.get("/posts", getPosts);

// post con mas likes
router.get("/posts/most_liked",getMostLikedPosts );

// ordena de mas reciente
router.get("/posts/the_most_recent", getPostsByDate);

// mas comentado
router.get("/posts/the_most_commented", getMostCommentedPosts);

// busca un post por id
router.get("/single_post/:post_id", getSinglePost);

// posts de un user
router.get("/user_posts/:user_id", getUserPostsById);

// ver todos los posts del user
router.get("/user_posts", authentication, getUserPostsByMiddleware);

router.post('/', authentication, createPostValidator, createPost);

// buscar post
router.put('/search_for_post', searchForPostValidator, searchForPost);

// likes
router.put('/likes/:post_id', authentication, addLike);

// comentarios
router.put('/add_comment/:post_id', authentication, addCommentValidator, addComment);

// like comentario
router.put('/like_comment/:post_id/:comment_id', authentication, likeComment);

// eliminar post
router.delete( "/delete_post/:post_id", authentication, deletePost)

// quitar like de post
router.delete( "/remove_like_from_post/:post_id/:like_id", authentication, removeLikeFromPost)

// eliminar comentario
router.delete( "/remove_comment/:post_id/:comment_id", authentication, removeComment)

// eliminar like del comentario
router.delete( "/remove_like_from_comment/:post_id/:comment_id/:like_id", authentication, removeLikeFromComment)

module.exports = router;