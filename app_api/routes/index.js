const express = require('express');
const router = express.Router();
const ctrlEvents = require('../controllers/events');
const ctrlUsers = require('../controllers/users');

// locations
router
  .route('/events')
  .get(ctrlEvents.eventList)
  .post(ctrlEvents.eventsCreate);

router
  .route('/events/:eventid')
  .get(ctrlEvents.eventsReadOne)
  .put(ctrlEvents.eventsUpdateOne)
  .delete(ctrlEvents.eventsDeleteOne);

// Login
router.get('/login/:username/:password',ctrlUsers.signIn);

// Register
router.post('/register',ctrlUsers.CreateUser);

module.exports = router;
