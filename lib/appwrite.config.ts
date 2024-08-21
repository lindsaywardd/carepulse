import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: NEXT_PUBLIC_BUCKET_ID,                                     
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env // destructure above 

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!) // ! to declare / set existence
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);