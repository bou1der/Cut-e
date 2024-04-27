import {} from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';

import uwu from './resource/( ˶^▾^˶ ).svg'
import friends from './resource/myFriends.svg'
import news from './resource/News.svg'
import sendMessege from './resource/sendMessege.svg'
import myProfile from './resource/myProfile.svg'
import myGroups from './resource/myGroups.svg'

import authorizationStore from "../../stores/authorization-store";

const Navigation = () => {

    return(<header className={"header"}>
            <div className={"outList"}>
                <div className={"inList"}>
                    <NavLink to={"/"} className={"listButton navig fix-uwu"}><img alt={""} src={uwu}/></NavLink>
                    <NavLink to={"/profile"} className={"listButton navig"}><img alt={""} src={myProfile}/></NavLink>
                    <NavLink to={"/news"} className={"listButton navig"}><img alt={""} src={news}/></NavLink>
                    <NavLink to={"/messages"} className={"listButton navig"}><img alt={""} src={sendMessege}/></NavLink>
                    <NavLink to={"/friends"} className={"listButton navig"}><img alt={""} src={friends}/></NavLink>
                    <NavLink to={"/groups"} className={"listButton navig"}><img alt={""} src={myGroups}/></NavLink>
                    <button onClick={()=>{
                        authorizationStore.Logout()
                    }}>Logout</button>
                </div>
            </div>

           </header>
    );

}
export default Navigation