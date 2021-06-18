using System;
using System.IO;
using Firebase.Storage;

namespace Test{
    public class StorageManager{
        private FirebaseStorage storage = new FirebaseStorage("visual-programming-project.appspot.com");
        
        public async void pushFile(string collection, string name ,string filePath){
            var stream = File.Open(filePath, FileMode.Open);
            var extension = Path.GetExtension(filePath);

            var storagePath = storage
                .Child(collection)
                .Child(name + extension);

            var task = storagePath.PutAsync(stream);
            task.Progress.ProgressChanged += (s, e) => Console.WriteLine($"Progress: {e.Percentage} %");
            
            
            var downloadUrl = await task;;
            Console.WriteLine(downloadUrl);
        }
    }
}