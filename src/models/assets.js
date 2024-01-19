import mongoose from 'mongoose'

const assetsSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String, 
        },
        status: {
            type: String,
             
        },
        maritalStatus: {
            type: String,
             
        },  
        gender: {
            type: String,
            
        },
        startDate: {
            type: String, 
        },
    }
)

const assets = mongoose.model('assets', assetsSchema);
export default assets;