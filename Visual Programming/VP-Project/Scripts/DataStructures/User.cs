using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Media.Imaging;
using MongoDB.Bson;

namespace VP_Project.Scripts.DataStructures {
    public class User {
        
        public ObjectId Id { get; private set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public List<string> Follows { get; set; }
        public string ProfilePicture{ get; set; }
        //Dynamic Properties
        public string DisplayName => FirstName + " " + LastName + " (" + Username + ")";
        public bool isFollowed => SessionInfo.CurrentUser.Follows.Contains(Username);
        public User(){
            Follows = new List<string>();
            ProfilePicture = "https://firebasestorage.googleapis.com/v0/b/visual-programming-project.appspot.com/o/defaults%2FprofilePicture.jpg?alt=media&token=b9fbb897-ed92-4dcb-acf7-244b519dceb7";
        }

        // User related methods
        internal void addUserToDatabase() {
            var document = getBson();
            SessionInfo.DbManager.addDocument("Users", document);
            Id = new ObjectId(document["_id"].ToString());
        }
        private BsonDocument getBson() {
            return new BsonDocument() {
                {"first_name", FirstName},
                {"last_name", LastName},
                {"email", Email},
                {"username", Username},
                {"password", Password},
                {"profilePicture", ProfilePicture},
                {"follows", getFollowsBson()}
            };
        }
        internal void getUserFromDatabase(string username_) {
            BsonDocument userData = SessionInfo.DbManager.getDocument("Users", "username", username_);
            if (userData is null) return;
            getUserFromBson(userData);
        }
        internal void getUserFromBson(BsonDocument document) {
            Id = new ObjectId(document["_id"].ToString());
            FirstName = document["first_name"].ToString();
            LastName = document["last_name"].ToString();
            Email = document["email"].ToString();
            Username = document["username"].ToString();
            Password = document["password"].ToString();
            ProfilePicture = document.Contains("profilePicture")
                ? document["profilePicture"].ToString()
                : ProfilePicture;
            Follows = document.Contains("follows") ? getFollowersFromBson(document["follows"].AsBsonArray) : new List<string>();
        }
        // Deletes the user from database
        internal void deleteUser(){
            SessionInfo.DbManager.deleteDocument("Users", "username", Username);
            SessionInfo.DbManager.deleteDocuments("Posts", "poster", Username);
        }
        internal void updateUserInfo(){
            SessionInfo.DbManager.updateDocument("Users", "username", Username,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"first_name", FirstName},
                            {"last_name", LastName},
                            {"email", Email},
                            {"password", Password},
                            {"profilePicture", ProfilePicture}
                        }
                    }
                }
            );
        }

        // Followers related methods
        internal void addFollow(string username){
            if (Follows.Contains(username))
                Follows.Remove(username);
            else
                Follows.Add(username);
            updateFollowersToDatabase();
        }
        private void updateFollowersToDatabase(){
            SessionInfo.DbManager.updateDocument("Users", "username", Username,
                new BsonDocument(){
                    {"$set", new BsonDocument(){
                            {"follows", getFollowsBson()} 
                        }
                    }
                }
            );
        }
        internal BsonArray getFollowsBson(){
            return new BsonArray(Follows);
        }
        private List<string> getFollowersFromBson(BsonArray bsonArray){
            var bsonValues = bsonArray.ToList();
            return (from bsonValue in bsonValues
                select bsonValue.ToString()).ToList();
        }

        private BitmapImage getImageFromBson(BsonDocument document){
            return new BitmapImage(new Uri("Resources/Defaults/ProfilePicture.jpg"));
        }
        
        public override string ToString(){
            return $"id: {Id}\n" +
                   $"name: {Username}";
        }
    }
}