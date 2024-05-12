import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const ProfileLoading = ({count}:{count:number}) =>{
    return(
        <>
            {
            <div className="w-full h-full">
                <Skeleton
                className="first:mt-0 mt-8"
                    circle={false}
                    width={"100%"}
                    height={"96px"}
                    borderRadius={"25px"}
                    count={count}
                />
            </div>
            }
        </>
    )
}

export default ProfileLoading