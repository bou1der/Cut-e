import DefAvatar from "./resource/Ellipse 7.svg"
import likeSvg from "./resource/heart-svgrepo-com 1.svg"
import commentsSvg from "./resource/comment-3-svgrepo-com 1.svg"
import watchesSvg from "./resource/eye-svgrepo-com 1.svg"
import shareSvg from "./resource/share-2-svgrepo-com 1.svg"
import {author, post} from "../../types/axios-response-types.ts";
import Carousel from "./carousel.tsx";
const Post = ({props}:{props:{post:post , author:author}}) =>{
    console.log(props)
    return(
    <>
        <div className="w-3/4 ml-auto mr-auto mt-5 font-MainFont text-MainTextColor">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row items-center gap-4">
                    <img className="w-20 rounded-full" src={`${props.author.avatar || "https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076"}`} alt="" />
                    <div>
                        <h2 className="text-24">{props.author.nickname}</h2>
                        {false && <p className="text-20">timestamp</p>}
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-0.5">
                        <img src={`${watchesSvg}`} alt="" />
                        <p className="">{props.post.views.count}</p>
                    </div>
                    <button className="text-20 w-32 h-9 bg-CreamPink rounded-2sm hover:bg-opacity-75 transition">Subscribe</button>
                </div>
            </div>
            <h2 className="w-11/12 mx-auto indent-6 my-7">
                {props.post.title}
            </h2>
            {
                props.post.images.length != 0 &&
                   <div className="xl:h-40 w-full">
                       <Carousel>
                           {
                               props.post.images.map(image =>{
                                   return <img className="xl:h-36 xl:w-36 rounded-md -z-0" src={image.link} alt=""/>
                               })
                           }
                       </Carousel>
                   </div>
            }
            <div className="flex items-center justify-between">
                <div className="flex flex-row gap-5">
                    <button className="flex items-center justify-center gap-1.5 text-BackTextColor bg-CreamPink rounded-2sm w-20 "><img src={`${likeSvg}`} alt="" /><p>{props.post.likes.count}</p></button>
                    <button className="flex items-center justify-center gap-1.5 bg-CreamPink rounded-2sm w-20 py-1.5"><img src={`${commentsSvg}`} alt="" /><p>22</p></button>
                </div>
                <label><img src={`${shareSvg}`} alt="" /></label>
            </div>
        </div>
    </>
    )
}

export default Post