const mongoose = require('mongoose');
const Event = mongoose.model('Event');

const _buildEventList = function(req, res, results) {
  let events = [];
  results.forEach((doc) => {
    events.push({
      name: doc.name,
      description: doc.description,
      when: doc.when,
      where: doc.where,
      imagelocation: doc.imagelocation,
      _id: doc._id
    });
  });
  return events;
};

const eventList = function (req, res) {

  Event.find(
 
		function(err, results){
			console.log(results);
			const events = _buildEventList(req, res, results);
			console.log('Results', results);
			res
			.status(200)
			.json(events);
			}
	  )
};

const eventsCreate = function (req, res) {
    Event.create({
      name: req.body.name,
      description: req.body.description,
      when: req.body.when,
      where: req.body.where,
      imageLocation: req.body.imageLocation
    }, (err, event) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(event);
      }
    });
  };

  const eventsReadOne = function (req, res) {
    if (req.params && req.params.eventid) {
      Event
        .findById(req.params.eventid)
        .exec((err, event) => {
          if (!event) {
            res	
              .status(404) 
              .json({	
                "message": "eventid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(event);
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "No eventid in request"
        });		
    }
  };
  
  const eventsUpdateOne = function (req, res) {
    if (!req.params.eventid) {
      res
        .status(404)
        .json({
          "message": "Not found, eventid is required"
        });
      return;
    }
    Event
      .findById(req.params.eventid)
      .select('-reviews -rating')
      .exec((err, event) => {
        if (!event) {
          res
            .json(404)
            .status({
              "message": "eventid not found"
            });
          return;
        } else if (err) {
          res
            .status(400)
            .json(err);
          return;
        }
        event.name = req.body.name;
        event.description = req.body.description;
        event.when = req.body.when;
        event.where = req.body.where;
        event.imageLocation = req.body.imageLocation;
    
        event.save((err, event) => {
          if (err) {
            res
              .status(404)
              .json(err);
          } else {
            res
              .status(200)
              .json(event);
          }
        });
      }
    );
  };

  const eventsDeleteOne = function (req, res) {
    const eventid = req.params.eventid;
    if (eventid) {
      Event
        .findByIdAndRemove(eventid) 
        .exec((err, event) => {
            if (err) {
              res
                .status(404)
                .json(err);
              return;
            }
            res
              .status(204)
              .json(null);
          }
      );
    } else {
      res
        .status(404)
        .json({
          "message": "No eventid"
        });
    }
  };

  module.exports = {
    eventList,
    eventsCreate,
    eventsReadOne,
    eventsUpdateOne,
    eventsDeleteOne
  };