using System;
using System.Collections.Generic;
using System.IO;
using Firebase.Storage;
using MongoDB.Bson;  
using MongoDB.Driver;

namespace VP_Project.Scripts {
    public class DatabaseManager {
        private static IMongoDatabase database;
        private FirebaseStorage storage;

        internal void connectToDatabase() {
            try {
                storage = new FirebaseStorage("visual-programming-project.appspot.com");
                var client = new MongoClient("mongodb+srv://standardUser:XNvKRUSWjUWgohuF@socialmediaapplication.o3kj5.mongodb.net/MainDatabase?retryWrites=true&w=majority");
                database = client.GetDatabase("MainDatabase");
            }
            catch (Exception) {
                CommonMethods.showAlert("Database connection failed");
            }
        }
        internal bool checkForUser(string userName) {
            var signInFilter = Builders<BsonDocument>.Filter.Eq("username", userName);
            var usernameCheck = database.GetCollection<BsonDocument>("Users").Find(signInFilter).FirstOrDefault();
            if (usernameCheck == null) {
                return false;
            }
            return true;
        }
        internal BsonDocument getDocument(string collection, string key, Object value) {
            var filter = Builders<BsonDocument>.Filter.Eq(key, value);
            return database.GetCollection<BsonDocument>(collection).Find(filter).FirstOrDefault();
        }
        internal void addDocument(string collection, BsonDocument document) {
            database.GetCollection<BsonDocument>(collection).InsertOneAsync(document);
        }
        internal List<BsonDocument> getDocuments(string collection){
            return database.GetCollection<BsonDocument>(collection).Find(_ => true).ToList();
        }
        internal List<BsonDocument> getDocumentsFiltered(string collection, string key, Object value){
            var filter = Builders<BsonDocument>.Filter.Eq(key, value);
            return database.GetCollection<BsonDocument>(collection).Find(filter).ToList();
        }
        internal void updateDocument(string collection, string key, Object value, BsonDocument update){
            var filter = Builders<BsonDocument>.Filter.Eq(key, value);
            database.GetCollection<BsonDocument>(collection).UpdateOne(filter, update);
        }
        public void deleteDocument(string collection, string key, Object value){
            var filter = Builders<BsonDocument>.Filter.Eq(key, value);
            database.GetCollection<BsonDocument>(collection).DeleteOne(filter);
        }
        public void deleteDocuments(string collection, string key, Object value){
            var filter = Builders<BsonDocument>.Filter.Eq(key, value);
            database.GetCollection<BsonDocument>(collection).DeleteMany(filter);
        }
        public FirebaseStorageTask pushFile(string collection, string name ,string filePath){
            var stream = File.Open(filePath, FileMode.Open);
            var extension = Path.GetExtension(filePath);

            var storagePath = storage
                .Child(collection)
                .Child(name + extension);

            var task = storagePath.PutAsync(stream);
            return task;
        }
        
    }
}