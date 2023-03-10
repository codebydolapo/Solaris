import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/crew.module.css'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'




const Crew: NextPage = () => {

    const active = "w-[3.1rem] h-[3.1rem] rounded-full flex items-center justify-center bg-white text-black cursor-pointer"
    const inactive = "w-[3.1rem] h-[3.1rem] border-2 border-white rounded-full text-white flex items-center justify-center hover:bg-[#ffffffe8] hover:text-black cursor-pointer"

    const [douglasEffect, setDouglasEffect] = useState(inactive)
    const [anoushehEffect, setAnoushehEffect] = useState(inactive)
    const [markEffect, setMarkEffect] = useState(inactive)
    const [victorEffect, setVictorEffect] = useState(inactive)



    const [post, setPost] = useState("");
    const [name, setName] = useState("");
    const [intro, setIntro] = useState("");
    const [image, setImage] = useState("");

    // const effect = document.getElementsByClassName('circle')

    function switchDouglas() {
        const _post = "commander";
        const _name = "douglas hurley";
        const _intro =
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        const _image = "/images/crew/image-douglas-hurley.webp";

        setPost(_post);
        setName(_name);
        setIntro(_intro);
        setImage(_image);

        setDouglasEffect(active)
        setAnoushehEffect(inactive)
        setMarkEffect(inactive)
        setVictorEffect(inactive)

        // effect[0].setAttribute('id', 'effect')
        // effect[1].setAttribute('id', '')
        // effect[2].setAttribute('id', '')
        // effect[3].setAttribute('id', '')

    }

    useEffect(() => {
        switchDouglas();
    }, []);

    function switchAnousheh() {
        const _post = "flight engineer";
        const _name = "anousheh ansari";
        const _intro =
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
        const _image = "/images/crew/image-anousheh-ansari.webp";

        setPost(_post);
        setName(_name);
        setIntro(_intro);
        setImage(_image);

        setDouglasEffect(inactive)
        setAnoushehEffect(active)
        setMarkEffect(inactive)
        setVictorEffect(inactive)

        // effect[0].setAttribute('id', '')
        // effect[1].setAttribute('id', 'effect')
        // effect[2].setAttribute('id', '')
        // effect[3].setAttribute('id', '')

    }

    function switchMark() {
        const _post = "mission specialist";
        const _name = "mark shuttleworth";
        const _intro =
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        const _image = "/images/crew/image-mark-shuttleworth.webp";

        setPost(_post);
        setName(_name);
        setIntro(_intro);
        setImage(_image);

        setDouglasEffect(inactive)
        setAnoushehEffect(inactive)
        setMarkEffect(active)
        setVictorEffect(inactive)

        // effect[0].setAttribute("id", "");
        // effect[1].setAttribute("id", "");
        // effect[2].setAttribute("id", "effect");
        // effect[3].setAttribute("id", "");

    }

    function switchVictor() {
        const _post = "pilot";
        const _name = "victor glover";
        const _intro =
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
        const _image = "/images/crew/image-victor-glover.webp";

        setPost(_post);
        setName(_name);
        setIntro(_intro);
        setImage(_image);

        setDouglasEffect(inactive)
        setAnoushehEffect(inactive)
        setMarkEffect(inactive)
        setVictorEffect(active)

        // effect[0].setAttribute('id', '')
        // effect[1].setAttribute('id', '')
        // effect[2].setAttribute('id', '')
        // effect[3].setAttribute('id', 'effect')

    }


    return (
        <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center relative  ${styles.crew_main}`}>
            <Head>
                <title>Solaris | Crew</title>
                <meta name="description" content="Solaris: CodeByDolapo" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <Navbar place={"crew"} />
            <Menu />
            <div className={`w-[100%] h-[85vh] text-white flex lg:flex-row items-center lg:justify-center mt-[10vh] md:pt-[5rem] xs:flex-col-reverse xs:overflow-y-scroll overflow-x-hidden`}>
                <div className={`lg:w-[60%] lg:h-full lg:my-0 lg:text-left flex flex-col justify-around items-center md:px-5 xs:w-[100%] xs:h-[70vh] xs:my-[5rem] xs:text-center`}>
                    <div className={`w-[100%] h-[70%] flex flex-col items-left justify-center`}>
                        <h1 className={`uppercase text-white lg:text-lg tracking-[5px] lg:my-[20px] xs:text-[0rem]`}>02 meet your crew</h1>

                        <h1 className={`capitalize text-white text-2xl opacity-[70%] tracking-wider mt-5`}>{post}</h1>

                        <h1 className={`uppercase text-white lg:text-[3rem] tracking-5px font-bold font-times xs:text-[2.5rem]`}>{name}</h1>

                        <h3 className={`text-lg leading-[25px] text-white mt-5`}>{intro}</h3>
                    </div>
                    <div className={`lg:w-[60%] h-[4.5rem] lg:my-0 flex items-center justify-around xs:w-[95%] xl:my-3`}>
                        <div
                            className={`hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer  ${douglasEffect}`}
                            onClick={switchDouglas}
                        >
                            1
                        </div>
                        <div
                            className={`hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer  ${anoushehEffect}`}
                            onClick={switchAnousheh}
                        >
                            2
                        </div>
                        <div
                            className={`hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer  ${markEffect}`}
                            onClick={switchMark}
                        >
                            3
                        </div>
                        <div
                            className={`hover:scale-[110%] ease-in-out duration-[200ms] cursor-pointer  ${victorEffect}`}
                            onClick={switchVictor}
                        >
                            4
                        </div>
                    </div>
                </div>

                <div className={`lg:w-[50%] lg:h-full flex items-center justify-center xs:w-[100%] xs:h-auto`}>
                    <img src={image} className={`lg:h-[100%] lg:w-auto xs:h-auto xs:w-[95%] hover:scale-[110%] ease-in-out duration-[500ms] cursor-pointer `} alt='' />
                </div>
            </div>

        </div>
    );

}

export default Crew
