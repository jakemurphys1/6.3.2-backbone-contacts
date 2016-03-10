var Backbone = require("backbone");

var Contact = Backbone.Model.extend({
urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Contacts-JakeandBrandon/",
// idAttribute: "_id"
});


var ContactCollection = Backbone.Collection.extend({
  model:Contact,
    url:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-JakeandBrandon/",
});



module.exports= {
  "Contact":Contact,
  "ContactCollection":ContactCollection
};
