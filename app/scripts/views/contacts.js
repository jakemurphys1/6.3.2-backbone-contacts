var Collection = require("../models/contacts")
var myCollection = new Collection.ContactCollection();
var Backbone=require("backbone");
var handlebars=require("handlebars");
var $ = require("jquery")
// var contactSource = $("#contacts").html();
// var contactTemplate = handlebars.compile(contactSource)

var Contact = Backbone.View.extend({
  tagName:"form",
  className:"addForm",
  events:{
    "submit": "complete",
  },
  'initialize': function(){
this.listenTo(this.collection,"add",this.render)
  },
'complete': function(){
console.log("it worked")
      // e.preventDefault();
    if($("#fname").val()===""){
      console.log("nothing there")
      return
    }


   var contactList = new Collection.Contact({name:$("#fname").val(), Email: $("#femail").val(), Phone:$("#fphone").val(), Twitter: $("#ftwitter").val(), Linkedin:$("#flink").val()})
   contactList.save().done(function(){
     $("#fphone").val('');
     $("#femail").val('');
     $("#ftwitter").val('');
     $("#flink").val('');
     $("#fname").val('');
     $('.contact').empty();
     refresh();
   });



},
doubleTime:function(){

},
render:function(){

  myCollection.fetch().done(function(){

    // var model;
    //
    //  while (model = myCollection.first()) {
    //    model.destroy();
    //  }

    myCollection.each(function(contacts){
      $('.contact').append("<li>" + contacts.get('name') + "</li>")
      $('.contact').append("<li>" + contacts.get('Email') + "</li>")
      $('.contact').append("<li>" + contacts.get('Phone') + "</li>")
      $('.contact').append("<li><a>" + contacts.get('Twitter') + "</a></li>")
      $('.contact').append("<li><a>" + contacts.get('Linkedin') + "</a></li>")
    });

  })
return this;

}
});

// var Contact = new Contact();


module.exports = Contact;
