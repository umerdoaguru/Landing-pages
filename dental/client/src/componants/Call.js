import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ScrollTop() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <Container >
        <Link to="tel:+91-7440992424" >
        <div
            onClick={scrollToTop}
            id="back-to-top"
            className="whatsup-only rounded-pill border-icon "
            style={{
                position: 'fixed',
                bottom: '150px',
                right: '22px',
                cursor: 'pointer',
                display: 'inline',
                backgroundColor: '#202942',
                marginTop:"-1rem"
            }}
        >
         <FiPhoneCall className="fea icon-lg icons align-middle mt-2 no-border vibrate "  />
        </div>
        </Link>
        </Container >
    );
} 
const Container = styled.div`
.border-icon {
        position: absolute;
        right: 45px;
        top: 80%;
        z-index: 2;
        transform: translateY(-50%);
        background-color: $color-white;
        border-radius: 50%;
        box-shadow: 0px 10px 60px 0px rgba(73, 154, 250, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-size: 40px;

        @include respond-below(lg) {
            top: auto;
            right: auto;
            // bottom: 45px;
            // left: 50%;
            transform: translateX(-50%);
        }

        img {
            width: auto;
            max-width: 40px;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: transparent;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px dashed $color-secondary;
            animation: pulse-border 1500ms ease-out infinite;
        }

        &::after {
            width: 115%;
            height: 115%;
        }
    }
`; 