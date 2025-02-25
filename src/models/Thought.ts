import { Document, model, ObjectId, Schema, Types } from "mongoose";

interface IReaction extends Document {
    reactionId: ObjectId,
    reactionBody: string,
    username: Schema.Types.ObjectId,
    createAt: Date  
}

const reactionSchema = new Schema<IReaction>({
    
    reactionId: {  
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280
    },
    username: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    createAt: { type: Date, default: Date.now() }
})


/***********Thought**************/

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: string
    reactions: IReaction[],
}

const thoughtSchema = new Schema<IThought>({
    thoughtText:{
        type: String,
        required:true,
        maxlength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now(),

    },
    username: {
        type: String,
        required:true
    },
    reactions: [ reactionSchema ]
},{
    toJSON: {
        virtuals: true
    },
    id: false
})

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    })

const Thought = model<IThought> ('Thought', thoughtSchema)

export default Thought;