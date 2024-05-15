"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    PID: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: Number, required: true },
    images: [{ key: String, link: String }],
    likes: {
        count: { type: Number, default: 0, required: false },
        users: { type: [Number], default: [], required: false }
    },
    views: {
        count: { type: Number, default: 0, required: false },
        users: { type: [Number], default: [], required: false }
    },
    params: {
        private: { type: Boolean, default: false, required: false }
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