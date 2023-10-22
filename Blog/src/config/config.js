const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE.DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE.COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE.BUCKET_ID),
};

export default config;
