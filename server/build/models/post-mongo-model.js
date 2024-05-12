"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    UID: { type: Number, required: true },
    title: { type: String, required: true },
    likes: {
        count: { type: Number, default: 1, required: false },
        users: { type: [Number], default: [], required: false }
    },
    views: {
        count: { type: Number, default: 1, required: false },
        users: { type: [Number], default: [], required: false }
    }
    // comments:{
    //     count:Number,
    //     text:{
    //
    //     }
    // }
});
exports.default = (0, mongoose_1.model)('post', PostSchema);
//# sourceMappingURL=post-mongo-model.js.map