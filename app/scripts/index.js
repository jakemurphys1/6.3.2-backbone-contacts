
var $ = require("jquery");
 var Backbone = require("backbone");
var Collection = require("./models/contacts")
var Contacts = require("./views/contacts")
 var myCollection = new Collection.contactCollection();
 var myModel=new Collection.Contact();
 console.log(myModel)



 $("#addForm").submit(function(event){
     event.preventDefault();
   if($("#fname").val()===""){
     console.log("nothing there")
     return
   }

 $("#fname").val="";
  var contactList = new myModel({name:$("#fname").val(), Email: $("#femail").val(), Phone:$("#fphone").val(), Twitter: $("#ftwitter").val(), Linkedin:$("#flink").val()})
  contactList.save();
})
