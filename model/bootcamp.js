import mongoose from "mongoose";

const bootcampSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add the name, name is required'],
        unique:true,
        trim:true,
        maxlength:[50,'name cannot be more than 50 characters']
    },
    slug:String,
    description:{
        type:String,
        required:[true,'Please add the description, description is required'],
        maxlength:[500,'name cannot be more than 50 characters']
    },
    website:{
        type: String,
        match:[
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use the valid URL with HTTP/HTTPS']
    },
    phone:{
        type: String,
        maxlength: [20, 'phone number cannot be more than 20 characters']
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ]
    },
    address:{
        type: String,
        required: [true, 'Please add an address']
    },
    location:{
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
          },
          coordinates: {
            type: [Number], // array of number
            required: true,
            index:'2dsphere'
          },
          formattedAddress:String,
          street:String,
          city:String,
          state:String,
          zipcode:String,
          country:String,
    },
    careers:{
        type:[String], // careeres going to be array of strings
        required:true,
        enum:[ //these are the only available value that it can have
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min: [1, 'Rating must be atleast 1'],
        max: [10, 'Rating cannot be more than 10']
    },
    averageCost:Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default:false
    },
    jobAssistance:{
        type:Boolean,
        default:false
    },
    jobGarrantee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
export default mongoose.model('Bootcamp',bootcampSchema)