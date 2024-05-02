import uwu from './resource/•̀ ᴖ •́.svg';
import uwu1 from './resource/^•v•^.svg';
import uwu2 from './resource/ó﹏ò.svg';
import uwu3 from './resource/•‿•.svg';
import uwu4 from './resource/•ﻌ•.svg';
import uwu5 from './resource/,_﹏_,.svg';
import uwu6 from './resource/UωU.svg'

import uwu7 from './resource/_ω_.svg'

import vk from './resource/vk-svgrepo-com 1.svg'
import google from './resource/Group.svg'
import telegram from './resource/telegram-svgrepo-com 1.svg'
import facebook from './resource/facebook-176-svgrepo-com 1.svg'
import twitter from './resource/twitter-154-svgrepo-com 1.svg'

import "tailwindcss/tailwind.css"
import './carousel.css'

import {useState} from 'react'
import authorizationStore from '../../stores/authorization-store';
import { observer } from 'mobx-react-lite';
let i = 1

const Sign = ({}) => {
    const [registerValue, setRegisterValue] = useState({
        nickname:"",
        login:"",
        password:"",
        repitPassword:""
    })
    const [loginValue, setLoginValue] = useState({
        login:"",
        password:"",
    })
    const InputRegisterHandlers = (InputName :string, InputValue:string):void =>{
        setRegisterValue({
            ...registerValue,
            [InputName]:InputValue
        })
    }
    const InputLoginHandlers = (InputName :string, InputValue:string):void =>{
        setLoginValue({
            ...loginValue,
            [InputName]:InputValue
        })
    }
    

    return (
        <>
            {/*<div className="test absolute">*/}
            {/*    <div className="carousel">*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img className="w-20" srcSet={uwu} alt=""/>*/}
            {/*            <img className="w-20" src={uwu1} alt=""/>*/}
            {/*            <img className="w-20" src={uwu2} alt=""/>*/}
            {/*            <img className="w-20" src={uwu} alt=""/>*/}
            {/*            <img className="w-20" src={uwu3} alt=""/>*/}
            {/*            <img className="w-20" src={uwu4} alt=""/>*/}
            {/*            <img className="w-20" src={uwu5} alt=""/>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img className="" srcSet={uwu} alt=""/>*/}
            {/*            <img className="" src={uwu1} alt=""/>*/}
            {/*            <img className="" src={uwu2} alt=""/>*/}
            {/*            <img className="" src={uwu} alt=""/>*/}
            {/*            <img className="" src={uwu3} alt=""/>*/}
            {/*            <img className="" src={uwu4} alt=""/>*/}
            {/*            <img className="" src={uwu5} alt=""/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="carousel-2">*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="carousel-3">*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="content-carousel">*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu1} alt=""/>*/}
            {/*        <img src={uwu2} alt=""/>*/}
            {/*        <img src={uwu} alt=""/>*/}
            {/*        <img src={uwu3} alt=""/>*/}
            {/*        <img src={uwu4} alt=""/>*/}
            {/*        <img src={uwu5} alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="xl:w-4/6 xl:h-4/5 bg-White rounded-lg shadow-md relative">
                    <div className="flex flex-row h-full">
                        <aside className="w-1/2 h-full">
                            <div className="h-full flex flex-col items-center justify-evenly">
                                <img src={`${uwu6}`} alt=""/>
                                <form className="xl:w-80 flex flex-col gap-5">
                                    <div className="w-full h-12">
                                        <input className="input-authorization" onChange={(el) => {
                                            InputRegisterHandlers(el.target.name, el.target.value)
                                        }} type="text" placeholder="Nickname!" name="nickname"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                    <div className="w-full h-12">
                                        <input className="input-authorization" onChange={(el) => {
                                            InputRegisterHandlers(el.target.name, el.target.value)
                                        }} type="text" placeholder="Login!" name="login"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                    <div className="w-full h-12">
                                        <input className="input-authorization" onChange={(el) => {
                                            InputRegisterHandlers(el.target.name, el.target.value)
                                        }} type="password" placeholder="Password!" name="password"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                    <div className="w-full h-12">
                                        <input className="input-authorization" onChange={(el) => {
                                            InputRegisterHandlers(el.target.name, el.target.value)
                                        }} type="password" placeholder="Repit-pass!" name="repitPassword"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                </form>
                                <label
                                    className="ml-auto mr-auto h-12 block w-2/3 text-center p-2.5 bg-StrongPink drop-shadow-md rounded-lg text-MainTextColor font-MainFont text-18"
                                    onClick={() => authorizationStore.Register(registerValue.nickname, registerValue.login, registerValue.password)}>
                                    <p>Register!!</p></label>
                            </div>
                        </aside>
                        <aside className="w-1/2 h-full">
                            <div className="h-full flex flex-col items-center justify-evenly">
                                <img src={`${uwu7}`} alt=""/>
                                <form className="xl:w-80 flex flex-col gap-5">
                                    <div className="w-full h-12">
                                        <input className="input-authorization" type="text" placeholder="Login!"
                                               onChange={(el) => InputLoginHandlers(el.target.name, el.target.value)}
                                               name="login"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                    <div className="w-full h-12">
                                        <input className="input-authorization" type="password" placeholder="Password!"
                                               onChange={(el) => InputLoginHandlers(el.target.name, el.target.value)}
                                               name="password"/>
                                        {/*<small>dont work</small>*/}
                                    </div>
                                    <input className="w-full h-12" type="text"
                                           style={{opacity: "0", cursor: "default"}}/>
                                    <input className="w-full h-12" type="text"
                                           style={{opacity: "0", cursor: "default"}}/>
                                </form>
                                <label
                                    className="ml-auto mr-auto h-12 block w-2/3 text-center p-2.5 bg-StrongPink drop-shadow-md rounded-lg text-MainTextColor font-MainFont text-18"
                                    onClick={() => authorizationStore.Login(loginValue.login, loginValue.password)}>Log-in!!</label>
                            </div>
                        </aside>
                        <div id="front" className="list-authorization ease-in-out duration-700 z-20"
                             style={{backfaceVisibility: "hidden"}}>
                            <button
                                className="w-16 h-16 bg-CreamPink cursor-pointer rounded-md shadow-md hover:brightness-105 active:shadow-none"
                                onClick={() => List()}>
                                Sign-Up
                            </button>
                            <div>
                                <p>
                                    Password rule!!:
                                </p>
                                <p>
                                    The minimum length for your lovely password is 8 characters! Isn't it exciting?
                                </p>
                                <p>
                                    Don't forget to add some special characters to make it more unique and special! How
                                    about
                                    sprinkling in some cool symbols like (!#$%^&*)? They'll give your password a
                                    charming
                                    touch!
                                </p>
                                <p>
                                    Remember, it's essential for your password to be complex. After all, you wouldn't
                                    want
                                    any
                                    unwanted intrusions, would you? Let's keep it super secure!
                                </p>
                                <p>
                                    Lastly, kindly avoid using spaces in your password. We want to ensure it remains
                                    perfectly
                                    snug and tidy.
                                </p>
                                <div className="separator"></div>
                                <div className="anotherLog">
                                    <p>If you'd like, there is another delightful way for you to register!</p>
                                    <img src="/resource/item/(ó﹏ò｡).svg" alt=""/>
                                </div>
                            </div>
                            <div className="flex justify-evenly w-full">
                                <a href="https://www.google.ru/webhp?hl"><img src={`${google}`} alt=""/></a>
                                <a href="https://web.telegram.org"><img src={`${telegram}`} alt=""/></a>
                                <a href="https://en.wikipedia.org/wiki/Facebook"><img src={`${telegram}`} alt=""/></a>
                                <a href="https://ru.wikipedia.org/wiki/Твиттер"><img src={`${twitter}`} alt=""/></a>
                                <a href="https://vk.com/nir4y"><img src={`${vk}`} alt=""/></a>
                            </div>
                        </div>
                        <div id="back" className="list-authorization ease-in-out duration-700">
                            <div style={{transform: "rotateY(-180deg)"}}
                                 className="flex flex-col items-end justify-between h-full ">
                                <button
                                    className="w-16 h-16 bg-CreamPink cursor-pointer rounded-md shadow-md hover:brightness-105 active:shadow-none"
                                    onClick={() => List()}>Sign-In
                                </button>
                                <div className="backTxt">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque, esse id
                                        nihil
                                        earum totam voluptatem iste quasi voluptas tempore consequuntur quam aperiam
                                        repellendus
                                        sapiente autem voluptatum aliquam error soluta. Voluptatibus, voluptate omnis
                                        alias,
                                        iste veritatis dolores numquam provident, maiores hic dolorum explicabo iure
                                        ratione
                                        tempore quia quam voluptatum! Repellendus nemo quod iure quia vero, dolore
                                        aliquam
                                        labore aliquid, quo a, molestiae neque ratione. Tempore nobis perspiciatis
                                        deserunt
                                        praesentium ab.
                                    </p>
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <a href="https://www.google.ru/webhp?hl"><img src={`${google}`} alt=""/></a>
                                    <a href="https://web.telegram.org"><img src={`${telegram}`} alt=""/></a>
                                    <a href="https://en.wikipedia.org/wiki/Facebook"><img src={`${telegram}`} alt=""/></a>
                                    <a href="https://ru.wikipedia.org/wiki/Твиттер"><img src={`${twitter}`} alt=""/></a>
                                    <a href="https://vk.com/nir4y"><img src={`${vk}`} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(Sign)

function List() {
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    if (front === null || back === null) {
        return
    }
    i++
    if (i % 2 === 0) {
        front.style.transform = 'perspective(1500px) rotateY(-180deg)';
        back.style.transform = 'perspective(1500px) rotateY(-180deg)';
    } else {
        front.style.transform = 'perspective(1500px) rotateY(0deg)';
        back.style.transform = 'perspective(1500px) rotateY(0deg)';

    }
}