'use client';
import './global.css'
import { useState } from 'react';
import Image from 'next/image';
import mountains from './../public/background.png'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export default function Page() {
    // state consts lol
    const [aboutMe, setAboutMe] = useState(true);
    const [padding, setPadding] = useState("pad");
    const [aboutInfo, setAboutInfo] = useState("");
    const [info, setInfo] = useState("hidden");
    const [social, setSocial] = useState("hidden");
    const [disclaimer, setDisclaimer] = useState("hidden");
    const [cssDisclaimer, setCssDisclaimer] = useState("");
    async function aboutMeToggle() {
        if (aboutMe == false) {
            setAboutMe(true);
            setPadding("pad");
            setAboutInfo("");
            setInfo("hidden");
            setSocial("hidden");
            setDisclaimer("hidden");
        } else {
            setAboutMe(false);
            setPadding("");
            setCssDisclaimer("");
        }
        return;
    }
    async function infoToggle() {

        setInfo("");
        setSocial("hidden");
        setAboutInfo("hidden");
        setDisclaimer("hidden");
        setCssDisclaimer("disclaimer");
        return;
    }
    async function socialToggle() {
        setSocial("");
        setInfo("hidden");
        setAboutInfo("hidden");
        setDisclaimer("hidden");
        setCssDisclaimer("");
        return;
    }

    async function aboutMeNavBar() {
        setAboutMe(true);
        setPadding("pad");
        setAboutInfo("");
        setInfo("hidden");
        setSocial("hidden");
        setDisclaimer("hidden");
        setCssDisclaimer("");
        return;
    }

    async function disclaimerToggle() {
        setDisclaimer("");
        setSocial("hidden");
        setInfo("hidden");
        setAboutInfo("hidden");
        setCssDisclaimer("disclaimer");
        return;
    }
    return (
        <div>
            <div className="bgimage">
                <div className={"container bg" + padding}>
                    <div className={"cardoutline" + padding}>
                        <div className="centered">
                            <button className={"button" + padding} onClick={aboutMeToggle}>
                                <p className="centeredText title">
                                    Nexint
                                </p>
                            </button>
                        </div>
                        <div className={"content" + padding + " " + cssDisclaimer}>
                            <p className={"centeredText header " + aboutInfo}>
                                About Me!
                            </p>
                            <p className={"centeredText text transition " + aboutInfo}>
                                Hi! I'm Nexint, a small Content Creator working to make the best videos for you!
                                <br></br><br></br>
                                - I play video games too much.
                                <br></br>
                                - NEXt Level INTer
                                <br></br>
                                - Video editor, coder and more!
                                <br></br>
                                - Dabbled in nearly everything!
                                <br></br><br></br>
                                Poke around on this website, or alternatively, visit my other public profiles!
                            </p>
                            <div className={"centeredLinks " + aboutInfo}>
                                <a className={"centeredText centeredLink " + aboutInfo} href="https://the-gospel.xyz">
                                    Jesus Loves You.
                                </a>
                            </div>
                            <p className={"centeredText text transition " + aboutInfo}>
                                All Rights Reserved. Nexint © 2025.
                            </p>
                            <p className={"centeredText header " + info}>
                                Nex T&C V3.0
                            </p>
                            <p className={"centeredText text transition " + info}>
                                Simplified version:
                                <br></br><br></br>
                                What you can do:
                                <br></br>
                                - Note: If said content is a collaboration, do not use it without contacting either me or the other party.
                                <br></br>
                                - Use my content freely!
                                <br></br>
                                (Credit is optional, but requested!)
                                <br></br>
                                - Unlimited personal usage (downliadng, etc) of my content, for free!
                                <br></br><br></br>
                                What you can't do:
                                <br></br>
                                - No AI usage.
                                <br></br>
                                - No usage that breaks the Christian Bible.
                                <br></br>
                                - No usage that breaks local and Canadian law.
                                <br></br>
                                - Do not use my content if you are a company, without contacting me.
                            </p>
                            <p className={"centeredText header " + disclaimer}>
                                Copyright Notice
                            </p>
                            <p className={"centeredText text transition " + disclaimer}>
                                - My Terms and Conditions are a simplified document for sake of berevity that is not legally binding.
                                <br></br><br></br>
                                - You must not indicate, whether implied or otherwise, that you are affiliated with me, unless given explicit permission.
                                <br></br><br></br>
                                - Unless otherwise specified, I still maintain all rights to all of my content.
                                <br></br><br></br>
                                - These terms can be updated at any time, for any reason, and all use cases must fall under the new TOS.
                                <br></br><br></br>
                                - I hold the right to revoke or allow any access to my content, for any reason, regardless of T&C.
                                <br></br><br></br>
                                - I do not guararantee ANY liability, nor availability, of any piece of content I make on the internet.
                                <br></br><br></br>
                                - Anything I own under the Nexint branding is protected by copyright law, and is not allowed to be used. This includes banners and other assets.
                                <br></br><br></br>
                                Contact me through my socials if you want to discuss this!
                            </p>
                            <p className={"centeredText header " + social}>
                                My socials!
                            </p>
                            <div className={"centeredLinks " + social}>
                                <a className={"centeredText centeredLink " + social} href="https://www.youtube.com/@Nexint">
                                    YT: @Nexint
                                </a>
                                <a className={"centeredText centeredLink " + social} href="https://discord.nexint.org/">
                                    Discord Server:
                                </a>
                                <a className={"centeredText centeredLink " + social} href="mailto:business@nexint.ca">
                                    E-mail: business@nexint.ca
                                </a>
                                <a className={"centeredText centeredLink " + social} href="https://x.com/@Nexints">
                                    Twitter: @Nexints
                                </a>
                                <p className={"centeredText centeredLink " + social}>
                                    Discord: @Nexint
                                </p>
                                <p className={"centeredText centeredLink " + social}>
                                    MC Username: Nexint
                                </p>
                            </div>
                            <p className={"centeredText text transition " + social}>
                                These are the places you can officially find me! Other profiles are not officially listed here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"navbar" + padding}>
                <div className="centered">
                    <button className="button margin" onClick={infoToggle}>
                        <p className="centeredText desc">
                            Terms
                        </p>
                    </button>
                    <button className="button margin" onClick={aboutMeNavBar}>
                        <p className="centeredText desc">
                            About Me
                        </p>
                    </button>
                    <button className="button margin" onClick={socialToggle}>
                        <p className="centeredText desc">
                            Socials
                        </p>
                    </button>
                </div>
            </div>
            <div className={"footer" + padding}>
                <div className="centered">
                    <button className="buttonpad margin" onClick={disclaimerToggle}>
                        <p className="centeredText desc">
                            Nexint © 2025
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}