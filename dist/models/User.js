import { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return value.includes('@') && value.includes('.');
            },
            message: "please insert a valid email"
        }
    },
    thoughts: [{
            thoughtId: {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
            thoughtText: {
                type: String,
            }
        }],
    friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});
userSchema
    .virtual('friendCount')
    .get(function () {
    return this.friends.length;
});
const User = model('User', userSchema);
export default User;
