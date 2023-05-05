const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: function (date) {
                return dayjs(date).format("dd/mm/yyyy hh:mm:ss")
            },
        },
    },
        {
            toJSON: {
                virtuals: true,
            },
                 id: false
        },
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 444,
            minlength: 1
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

         username: {
            type: String,
            required: true,
         },

         reactions:  [reactionSchema],
 },
     {
        toJSON: {
            virtuals: true,
        },
             id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;