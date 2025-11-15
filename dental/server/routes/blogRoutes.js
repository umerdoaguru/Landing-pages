const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

router.get('/allBlogs', blogController.getAllBlogs);
router.get('/allBlogsForAdmin', blogController.getAllBlogsForAdmin);
router.get('/:slug', blogController.getSingleBlog);
router.post('/admin-create', blogController.upload.single('image'), blogController.createBlog);
router.get('/blogGetForEditing/:id', blogController.getBlogById);
router.put('/adminUpdateBlog/:id', blogController.upload.single('image'), blogController.updateBlog);
router.delete('/deleteByAdmin/:id', blogController.deleteBlog);

module.exports = router;