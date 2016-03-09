var Backbone = require("backbone");

var Contact = Backbone.Model.extend({
urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Contacts-JakeandBrandon/",
});

var ContactCollection = Backbone.Collection.extend({
  model:Contact,
    url:"http://tiny-lasagna-server.herokuapp.com/collections/Contacts-JakeandBrandon/",
});

module.exports= {
  "Contact":Contact,
  "ContactCollection":ContactCollection
};
