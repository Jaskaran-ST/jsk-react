import conf from "../conf/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


//database service need client, databases, bucket(storage)
export class DatabaseService {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwritePrjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    //createDocument need databaseID, collectionID, unique id, and data for new document
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    //updateDocument need databaseID, collectionID, unique id and data to be updated in the old document
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    //deleteDocu need database id, collection id, and unique id of docu to delete it
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    //getDocu need databse id, collection id, and unique id to retrieve docu
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
        }
    }

    //listdocus need database id,collection id, query(condition) to find the docs
    async getAllPosts(queries = [Query.equal('status', "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
                2,
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error", error);
        }
    }

    //createFile need bucket id(storage id),unique id and file
    async createFile(file) {
        try {
            await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: createFile :: error", error);
            return false
        }
    }

    //deleteFile need bucketID, fileID
    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
        }

    }

    //getfilepreview need bucket id and fileid 
    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileID
        )
    }
}
const dbService = new DatabaseService();

export default dbService;