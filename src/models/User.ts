import { model, ObjectId, Schema, type Document } from "mongoose";

interface IUser extends Document {
    username:string,
    email:string,
    thoughts: ObjectId[],
    friends: ObjectId[]
}

const userSchema = new Schema<IUser> (
    {
        username: {
            type: String,
            required:true,
            unique:true,
            trim:true
        },
        
        email: {
            type: String,
            required:true,
            unique:true,
            validate: {
                validator: (value) => {
                    return value.includes('@') && value.includes('.');
                },
                message:"please insert a valid email"
            }            
        },
        thoughts: [{
            thoughtId : {
                type: Schema.Types.ObjectId,
                ref:'thought'
            },
            thoughtText: {
                type: String,
            }
        }],

        friends:[{
            type: Schema.Types.ObjectId,
            ref:'User'
        }],
          
    },{
        toJSON: {
            virtuals: true
        },
        id : false 
    }
);


userSchema
    .virtual('friendCount')
    .get( function () {
        return this.friends.length
    })

const User = model<IUser>('User', userSchema);



export default User;