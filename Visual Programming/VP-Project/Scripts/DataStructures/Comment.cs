using System;
using MongoDB.Bson;

namespace VP_Project.Scripts.DataStructures {
    public class Comment {
        public string Content { get; set; }
        public Post ParentPost { get; set; }
        public User CommentCreator { get; set; }
        public DateTime DatePosted{ get; set; }
        
        

        // Dynamic Properties
        public string posterProfilePicture => CommentCreator.ProfilePicture;
        public bool isPosterFollowed => CommentCreator.isFollowed;
        public string PosterName => CommentCreator.DisplayName;

        public Comment(){
        }

        // Initialize from Bson
        public Comment(BsonDocument document){
            getCommentFromBson(document);
        }
        
        // Get a Bson Object for the comment
        internal BsonDocument getBson(){
            return new BsonDocument(){
                {"content", Content},
                {"poster", CommentCreator.Username ?? ""},
                {"date", DatePosted},
            };
        }

        // Get comment details from Bson Document
        private void getCommentFromBson(BsonValue document){
            Content = document["content"].ToString();
            CommentCreator = new User();
            CommentCreator.getUserFromDatabase(document["poster"].ToString());
            DatePosted = document["date"].ToLocalTime();
        }
    }
}