Meteor.publish("allPublicPosts", function(){
  return Posts.find();
});