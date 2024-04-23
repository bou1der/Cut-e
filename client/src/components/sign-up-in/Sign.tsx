import uwu from './resource/•̀ ᴖ •́.svg';
import uwu1 from './resource/^•v•^.svg';
import uwu2 from './resource/ó﹏ò.svg';
import uwu3 from './resource/•‿•.svg';
import uwu4 from './resource/•ﻌ•.svg';
import uwu5 from './resource/,_﹏_,.svg';
import uwu6 from './resource/UωU.svg'
import uwu7 from './resource/_ω_.svg'

import './main.css'
import './ourStyle.css'
import AuthorizationStore from "../../stores/authorization-store.ts";


import {useState, ChangeEvent, ReactNode} from "react";

let i = 1
function Sign():ReactNode{
    const [registerValue, setRegisterValue] = useState({
        nickname:"",
        login:"",
        password:"",
        repitPassword:""

    })
    const InputHandler = (eventText:ChangeEvent,InputName:string):void =>{
        setRegisterValue({...registerValue, [InputName]:eventText})
    }
    console.log(AuthorizationStore.isAuth)
    return (
        <>
            <div className="carousel">
                <div className="content-carousel">
                    <img srcSet={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
            </div>
            <div className="carousel-2">
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
            </div>
            <div className="carousel-3">
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
                <div className="content-carousel">
                    <img src={uwu} alt=""/>
                    <img src={uwu1} alt=""/>
                    <img src={uwu2} alt=""/>
                    <img src={uwu} alt=""/>
                    <img src={uwu3} alt=""/>
                    <img src={uwu4} alt=""/>
                    <img src={uwu5} alt=""/>
                </div>
            </div>

            <div className="mainCard">
                <div className={"inCard"}>
                    <aside className="register">
                        <div className="inRegister ourcard">
                            <img src={uwu6} alt=""/>
                            <form>
                                <div>
                                    <input onInput={(el) => {InputHandler(el.target.value , el.currentTarget.name)}} type="text" placeholder="Nickname!" name="login"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                                <div>
                                    <input onInput={(el)=>{InputHandler(el.target.value , el.currentTarget.name)}} type="text" placeholder="Login!" name="login"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                                <div>
                                    <input onInput={(el) => {InputHandler(el.target.value , el.currentTarget.name)}} type="password" placeholder="Password!" name="password"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                                <div>
                                    <input type="password" placeholder="Repit-pass!" name="repitPassword"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                            </form>
                            <div className="label">
                                <label style={{cursor: "pointer"}} onClick={() => AuthorizationStore.Register(registerValue.nickname, registerValue.login,registerValue.password)}>Register!!</label>
                                {/*<small>dont work</small>*/}
                            </div>
                        </div>
                    </aside>
                    <aside className="login">
                        <div className="inLogin ourcard">
                            <img src={uwu7} alt=""/>
                            <form>
                                <div>
                                    <input type="text" placeholder="Login!" onInput={(el) =>loginingValue[0] = el.target.value} name="login"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                                <div>
                                <input type="password" placeholder="Password!" onInput={(el) =>loginingValue[1]= el.target.value} name="password"/>
                                    {/*<small>dont work</small>*/}
                                </div>
                                <input type="text" style={{opacity: "0", cursor: "default"}}/>

                            </form>
                            <label style={{cursor:"pointer"}} onClick={()=>Logining(loginingValue)}>Log-in!!</label>
                        </div>
                    </aside>
                    <div className="front">
                        <div className="Log">
                            <button style={{cursor:"pointer"}} onClick={() => List()}>Log-in</button>
                            <div></div>
                        </div>
                        <div>
                            <p>Password rule!!:</p>
                            <p>The minimum length for your lovely password is 8 characters! Isn't it exciting?</p>
                            <p>Don't forget to add some special characters to make it more unique and special! How about
                                sprinkling in some cool symbols like (!#$%^&*)? They'll give your password a charming
                                touch!</p>
                            <p>Remember, it's essential for your password to be complex. After all, you wouldn't want
                                any
                                unwanted intrusions, would you? Let's keep it super secure!</p>
                            <p>Lastly, kindly avoid using spaces in your password. We want to ensure it remains
                                perfectly
                                snug and tidy.</p>
                            <div className="separator"></div>
                            <div className="anotherLog">
                                <p>If you'd like, there is another delightful way for you to register!</p>
                                <img src="/resource/item/(ó﹏ò｡).svg" alt=""/>
                            </div>
                        </div>
                        <div className="links">
                            <a href="https://www.google.ru/webhp?hl"><img src="/resource/item/google.svg" alt=""/></a>
                            <a href="https://web.telegram.org"><img src="/resource/item/telegram.svg" alt=""/></a>
                            <a href="https://en.wikipedia.org/wiki/Facebook"><img src="/resource/item/facebook.svg"
                                                                                  alt=""/></a>
                            <a href="https://ru.wikipedia.org/wiki/Твиттер"><img src="/resource/item/twitter.svg"
                                                                                 alt=""/></a>
                            <a href="https://vk.com/nir4y"><img src="/resource/item/Vk.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inBack">
                            <div className="Log">
                                <button style={{cursor:"pointer"}} onClick={() => List()}>Reg-in</button>
                            </div>
                            <div className="backTxt">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque, esse id nihil
                                    earum totam voluptatem iste quasi voluptas tempore consequuntur quam aperiam
                                    repellendus
                                    sapiente autem voluptatum aliquam error soluta. Voluptatibus, voluptate omnis alias,
                                    iste veritatis dolores numquam provident, maiores hic dolorum explicabo iure ratione
                                    tempore quia quam voluptatum! Repellendus nemo quod iure quia vero, dolore aliquam
                                    labore aliquid, quo a, molestiae neque ratione. Tempore nobis perspiciatis deserunt
                                    praesentium ab.
                                </p>
                            </div>
                            <div className="links">
                                <a href="https://www.google.ru/webhp?hl"><img src="/resource/item/google.svg"
                                                                              alt=""/></a>
                                <a href="https://web.telegram.org"><img src="/resource/item/telegram.svg" alt=""/></a>
                                <a href="https://en.wikipedia.org/wiki/Facebook"><img src="/resource/item/facebook.svg"
                                                                                      alt=""/></a>
                                <a href="https://ru.wikipedia.org/wiki/Твиттер"><img src="/resource/item/twitter.svg"
                                                                                     alt=""/></a>
                                <a href="https://vk.com/nir4y"><img src="/resource/item/Vk.svg" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;

function List(){
    const front:HTMLElement = document.querySelector('.front');
    const back:HTMLElement  = document.querySelector('.back');

    i++
    if(i % 2 === 0)
    {
        front.style.transform = 'perspective(1500px) rotateY(-180deg)' ;
        back.style.transform = 'perspective(1500px) rotateY(-180deg)' ;
    }
    else
    {
        front.style.transform = 'perspective(1500px) rotateY(0deg)' ;
        back.style.transform = 'perspective(1500px) rotateY(0deg)' ;

    }
    }