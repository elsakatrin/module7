import React from "react"
import { useEffect, useState } from "react"
import upicon from '../public/caret-up-thin.svg'
import Image from 'next/image'
import styles from './navigation.module.css'

//Scroll to top arrow 
//Imported into pages/index.js so it shows up on landingpage
export default function BackToTopButton(){

    const [backToTopButton, setBackToTopButton] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 130) { //130 is how long on Y-axis we need to scroll so the button appears
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false) //button dissapear when it's above 130y-axis
            }
        })
    },[])
    //Scroll function, to where does the scroll function scroll + the behaviour of the scroll
    const scrollUp = () => {
        window.scrollTo({
            top: 10,
            behavior: "smooth" 
        })
    }
    return <div>
        {backToTopButton && (
            <button 
            style={{
                position:"fixed",
                bottom:"50px",
                right: "50px",
                height: "50px",
                width: "50px",
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            onClick={scrollUp}>
                {/* Arrow icon */}
                <img className={styles.backtotopbtn}
                alt='Go back'
                src="caret-up-thin.svg"
                />
            </button>
        )}
    </div>
} 