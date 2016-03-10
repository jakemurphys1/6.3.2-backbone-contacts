
var $ = require("jquery");
 var Backbone = require("backbone");
var Collection = require("./models/contacts")
//var Contacts = require("./views/contacts")

var myCollection = new Collection.ContactCollection();



function refresh(){
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

}
refresh();

///submit button
 $("#addForm").submit(function(event){
     event.preventDefault();
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


})
