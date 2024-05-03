import groupsImg from "./resource/myGroups.svg"
import friendsImg from "./resource/myFriends.svg"
import NewsImg from "./resource/News.svg"
import MusicImg from "./resource/music-svgrepo-com 1.svg"
const ProfileNavigation = () =>{
    return (
        <>
            <div className="absolute xl:w-96 xl:h-16 bg-StrongPink bottom-6 left-6 rounded-sm shadow-md">
                <div className="w-full h-full flex justify-center gap-4 items-center">
                    <label className="hover-button rounded-sm"><img className="w-14 xl:p-1.5 " src={`${NewsImg}`} alt=""/></label>
                    <div className="w-0.5 h-4 bg-Black bg-MainTextColor"></div>
                    <label className="hover-button rounded-sm"><img className="w-14 xl:p-1.5 " src={`${friendsImg}`} alt=""/></label>
                    <div className="w-0.5 h-4 bg-Black bg-MainTextColor"></div>
                    <label className="hover-button rounded-sm"><img className="w-14 xl:p-1.5 " src={`${groupsImg}`} alt=""/></label>
                    <div className="w-0.5 h-4 bg-Black bg-MainTextColor"></div>
                    <label className="hover-button rounded-sm"><img className="w-14 xl:p-1.5 " src={`${MusicImg}`} alt=""/></label>
                </div>
            </div>
        </>
    )
}

export default ProfileNavigation