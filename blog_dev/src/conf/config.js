const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwritePrjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),

}

export default conf
