import React from "react";
import SearchButtonSrc from "./resource/search_button.svg";
import MoreButtonSrc from "./resource/more_button.svg";
import Activity from "./resource/activity.svg"
import Avatar from  "./resource/user_logo_noborder.svg"
export const DialogInfo = ({nickname}) => {
    return (
        <div className="dialog_info">
                <span className="user_info_block">
                    <img src={Avatar} alt=""/>
                    <div>
                        <h3>{nickname}</h3>
                        <span><img src={Activity} alt=""/><p>activity</p></span>
                    </div>
                </span>
            <div className="buttons_dialog">
                <button><img src={SearchButtonSrc} alt=""/></button>
                <button><img src={MoreButtonSrc} alt=""/></button>
            </div>
        </div>
    );
}
export default DialogInfo;