
var $ = require("jquery");
 var Backbone = require("backbone");
var Collection = require("./models/contacts")
var Contacts = require("./views/contacts")
 var myCollection = new Collection.contactCollection();

 $("#addForm").submit(function(event){
  event.preventDefault();
 $("#fname").val="";
  var contactList = new Character({name:$("#fname").val(), Email: $("#femail").val(), Phone:$("#fphone").val(), Twitter: $("#ftwitter").val(), Linkedin:$("#flink").val()})
  contactList.save();
})
