import * as sdk from 'node-appwrite';

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID, 
    API_KEY, 
    DATABASE_ID, 
    PATIENT_COLLECTION_ID, 
    DOCTOR_COLLECTION_ID, 
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: NEXT_PUBLIC_BUCKET_ID,                                     
    
} = process.env // destructure above 

const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66c5ea9f001d47508e8f').setKey('91865986a47180ade07bf4c96ad5b86891d3cf536f7ad0619be1a2edc2075b0ddfb21bbc946d3ef541ff98ec47215ee9815d29a0899b289edc0b27f01574cefe34a075fdfef0dd928798f243411dc4949c10b540bda38371c28bebf1fcea9d10bfaf93e367b8be6b9345318830e24f472e11d42229c8370b3b14fd3d81d69ff0');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);