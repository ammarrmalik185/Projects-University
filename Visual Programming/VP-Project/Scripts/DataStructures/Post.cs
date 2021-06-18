using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MongoDB.Bson;
using VP_Project.Scripts.Enums;

namespace VP_Project.Scripts.DataStructures {
    public class Post {
        
        // Static Properties
        public ObjectId Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DatePosted { get; set; }
        public User PostCreator { get; set; }
        public PostType postType { get; set; }
        internal List<Comment> Comments { get; set; }
        private List<string> Likes { get; set; }
        private List<string> Dislikes { get; set; }
        public string fileUri{ get; set; }
        
        
        // Dynamic Properties
        public string PosterName => PostCreator.DisplayName;
        public int LikeCount => Likes.Count;
        public int DislikeCount => Dislikes.Count;
        public int CommentCount => Comments.Count;
        public bool isLiked => Likes.Contains(SessionInfo.CurrentUser.Username);
        public bool isDisliked => Dislikes.Contains(SessionInfo.CurrentUser.Username);
        public string posterProfilePicture => PostCreator.ProfilePicture;
        public bool isPosterFollowed => PostCreator.isFollowed;
        public bool isPosterSelf => PostCreator.Username == SessionInfo.CurrentUser.Username;
        
        // Default Values Initializer
        public Post(){
            PostCreator = SessionInfo.CurrentUser;
            postType = PostType.Text;
            DatePosted = DateTime.Now;
            Likes = new List<string>();
            Dislikes = new List<string>();
            Comments = new List<Comment>();
            fileUri = "../../Resources/Defaults/defaultImage.jpg";
        }

        // Post related Methods
        internal void addPostToDatabase() {
            BsonDocument document = getBson();
            SessionInfo.DbManager.addDocument("Posts", document);
            Id = new ObjectId(document["_id"].ToString());
        }
        // Get the post from database
        internal void getPostFromDatabase() {
            try {
                BsonDocument document = SessionInfo.DbManager.getDocument("Posts", "_id", Id);
                getPostFromBson(document);
            }
            catch (Exception e) {
                CommonMethods.showAlert(e.Message);
            }
        }
        // Get Bson Object for this post
        private BsonDocument getBson() {
            return new BsonDocument {
                {"title", Title},
                {"description", Description},
                {"date", DatePosted},
                {"poster", PostCreator.Username},
                {"postType", postType},
                {"likes", new BsonArray(Likes)},
                {"dislikes", new BsonArray(Dislikes)},
                {"comments", getCommentsArray()}
            };
        }
        
        internal void getPostFromBson(BsonDocument document) {
            Id = new ObjectId(document["_id"].ToString());
            Title = document["title"].ToString();
            Description = document["description"].ToString();
            DatePosted = document["date"].ToLocalTime();
            postType = (PostType)Enum.ToObject(typeof(PostType) , document["postType"].AsInt32);
            PostCreator = new User();
            PostCreator.getUserFromDatabase(document["poster"].ToString());
            Likes = document.Contains("likes") ? getStringListFromBson(document["likes"].AsBsonArray) : Likes;
            Dislikes = document.Contains("dislikes") ? getStringListFromBson(document["dislikes"].AsBsonArray) : Dislikes;
            Comments = document.Contains("comments")
                ? getCommentListFromBson(document["comments"].AsBsonArray)
                : Comments;
            fileUri = document.Contains("fileUri") ? document["fileUri"].ToString() : fileUri;
        }
        internal void updatePostToDatabase(){
            SessionInfo.DbManager.updateDocument("Posts", "_id", Id,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                                {"title", Title},
                                {"description", Description},
                            }
                    }
                }
            );
        }
        internal void deletePost(){
            SessionInfo.DbManager.deleteDocument("Posts", "_id", Id);
            
        }

        
        // Post Likes related Methods
        internal void likePost() {
            if (Dislikes.Contains(SessionInfo.CurrentUser.Username))
                dislikePost();
            if (Likes.Contains(SessionInfo.CurrentUser.Username)){
                Likes.Remove(SessionInfo.CurrentUser.Username);
            }
            else{
                Likes.Add(SessionInfo.CurrentUser.Username);
            }
            updateLikesToDatabase();
        }
        // Updates the likes to database
        private void updateLikesToDatabase(){
            SessionInfo.DbManager.updateDocument("Posts", "_id", Id,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"likes", new BsonArray(Likes)} 
                        }
                    }
                }
            );
        }

        
        // Post Dislikes related Methods
        internal void dislikePost() {
            if (Likes.Contains(SessionInfo.CurrentUser.Username))
                likePost();
            if (Dislikes.Contains(SessionInfo.CurrentUser.Username)){
                Dislikes.Remove(SessionInfo.CurrentUser.Username);
            }
            else{
                Dislikes.Add(SessionInfo.CurrentUser.Username);
            }
            updateDisLikesToDatabase();
        }
        // Updates the dislikes to database
        private void updateDisLikesToDatabase(){
            SessionInfo.DbManager.updateDocument("Posts", "_id", Id,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"dislikes", new BsonArray(Dislikes)} 
                        }
                    }
                }
            );
        }
        
        // Like dislike common methods
        private List<string> getStringListFromBson(BsonArray bsonArray){
            var bsonValues = bsonArray.ToList();
            return (from bsonValue in bsonValues
                select bsonValue.ToString()).ToList();
        }

        // Updates the fileUri of the Post
        internal void updateFilePath(){
            SessionInfo.DbManager.updateDocument("Posts", "_id", Id,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"fileUri", fileUri} 
                        }
                    }
                }
            );
        }
        
        // Comment related methods  
        internal void makeComment(string content) {
            Comment newComment = new Comment {
                ParentPost = this,
                DatePosted = DateTime.Now,
                Content = content,
                CommentCreator = SessionInfo.CurrentUser
            };
            Comments.Add(newComment);
            updateCommentsToDatabase();
        }

        // Get a Bson Array from comments
        private BsonArray getCommentsArray(){
            BsonArray bsonArray = new BsonArray();
            foreach (var comment in Comments){
                bsonArray.Add(comment.getBson());
            }
            return bsonArray;
        }
        // Update the comments to database
        private void updateCommentsToDatabase(){
            SessionInfo.DbManager.updateDocument("Posts", "_id", Id,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"comments", getCommentsArray()} 
                        }
                    }
                }
            );
        }
        // Get a list of comments from Bson
        private List<Comment> getCommentListFromBson(BsonArray bsonArray){
            var bsonValues = bsonArray.ToList();
            return (from bsonValue in bsonValues
                select new Comment(bsonValue.AsBsonDocument)).ToList();
        }
        
        // Generic
        public override string ToString() {
            return $"id: {Id}" +
                   $"\ntitle: {Title}" +
                   $"\ndescription: {Description}" +
                   $"\nDate Posted: {DatePosted}" +
                   $"\nPosted By: {PostCreator.Id}" +
                   $"\nPost Type: {postType}";
        }
    }
}