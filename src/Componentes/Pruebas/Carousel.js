import React, {Component} from 'react'
import Styles from './Carousel.css'

const Carousel = () =>{ 
    
        return(
            <div class= {Styles.gallery}>
                <div class = {Styles.galleryCell}></div>
                <div class = {Styles.galleryCell}></div>
                <div class = {Styles.galleryCell}></div>
                <div class = {Styles.galleryCell}></div>
                <div class = {Styles.galleryCell}></div>
                <div class = {Styles.galleryCell}></div>
            </div>
        )
    
}

export default Carousel