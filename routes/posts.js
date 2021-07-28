const router = require('express').Router();
const postController = require('../controller/post.controller');
const {tokenAuth, roleAuth} = require('../middleware/auth');
const auth = require('../middleware/auth')

router.post('/create', tokenAuth, roleAuth(0), postController.create);
router.get('/',  postController.read);
router.get('/:id', tokenAuth, postController.fetch);
router.put('/:id', tokenAuth, postController.update);
router.delete('/:id', tokenAuth, roleAuth(0), postController.destroy)

module.exports = router