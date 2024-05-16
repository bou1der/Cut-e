"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profile_model_1 = __importDefault(require("../profile-model"));
const blob_storage_model_1 = __importDefault(require("../blob-storage-model"));
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
});
const profile = PostSchema.virtual('profile');
profile.get(async function () {
    var _a;
    const p = await profile_model_1.default.findOne({ where: { id: this.author }, include: [{ model: blob_storage_model_1.default, as: "av" }] });
    return { id: p === null || p === void 0 ? void 0 : p.id, nickname: p === null || p === void 0 ? void 0 : p.name, avatar: (_a = p === null || p === void 0 ? void 0 : p.av) === null || _a === void 0 ? void 0 : _a.link };
});
PostSchema.path("author").set(function (v) {
    return v;
});
// function setter(v){
//     console.log(v)
//     return v
// }
// async function getter(id:number){
//     const p = await Profile.findOne({where:{id},include:[{model:Storage,as:"av"}]})
//     return {id:p?.id,avatar:p?.av?.link}
// }
// PostSchema.virtual('profile').get(async function (){
//     const p = await Profile.findOne({where:{id:this.author},include:[{model:Storage,as:"av"}]})
//     return {UID:p?.id,avatar:p?.av?.link}
// })
exports.default = (0, mongoose_1.model)('post', PostSchema);
//# sourceMappingURL=post-mongo-model.js.map