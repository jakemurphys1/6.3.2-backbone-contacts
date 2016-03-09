
var $ = require("jquery");
 var Backbone = require("backbone");
var Collection = require("./models/contacts")
//var Contacts = require("./views/contacts")

Collection.ContactCollection.fetch().done(function(){

})

///submit button
 $("#addForm").submit(function(event){
     event.preventDefault();
   if($("#fname").val()===""){
     console.log("nothing there")
     return
   }

 $("#fname").val="";
  var contactList = new Collection.Contact({name:$("#fname").val(), Email: $("#femail").val(), Phone:$("#fphone").val(), Twitter: $("#ftwitter").val(), Linkedin:$("#flink").val()})
  contactList.save();
})
