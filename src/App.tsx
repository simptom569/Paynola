import { useState } from "react"
import styled from "styled-components"
import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './img/logo.svg'
import banner from './img/banner.png'
import sponsor1 from './img/sponsor1.png'
import sponsor2 from './img/sponsor2.png'
import sponsor3 from './img/sponsor3.png'
import sponsor4 from './img/sponsor4.png'
import sponsor5 from './img/sponsor5.png'
import block1 from './img/block1.png'
import block2 from './img/block2.png'
import block3 from './img/block3.png'
import iconbut1 from './img/iconbut1.svg'
import iconbut2 from './img/iconbut2.svg'
import iconbut3 from './img/iconbut3.svg'
import iconbut4 from './img/iconbut4.svg'
import iconblock1 from './img/iconblock1.svg'
import iconblock2 from './img/iconblock2.svg'
import iconblock3 from './img/iconblock3.svg'
import review1 from './img/review1.png'
import review2 from './img/review2.png'
import review3 from './img/review3.png'
import playicon from './img/playicon.svg'
import iconadvantage from './img/iconadvantage.svg'


const Warper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1210px;
    padding: 0px 20px;
    width: 100%;
    position: relative;
`

const Block1 = styled.div`
    background: rgb(16, 17, 17);
    padding-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderLogo = styled.img`
    height: 32px;
    width: auto;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    gap: 40px;
`

const MenuItem = styled.span`
    font-family: 'Epilogue';
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        color: rgb(147, 213, 225);
    }
`

const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const HeaderButtonSignIn = styled.span`
    font-family: 'Epilogue';
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
    letter-spacing: .04em;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        color: rgb(147, 213, 225);
    }
`

const HeaderButtonStart = styled.button`
    border: 1px solid #ffffff;
    border-radius: 24px;
    background: transparent;
    color: #ffffff;
    font-family: 'Epilogue';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .04em;
    width: 156px;
    height: 48px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: rgb(147, 213, 225);
        border-color: rgb(147, 213, 225);
        color: rgb(31, 39, 51);
    }
`

const Banner = styled.div`
    margin-top: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 950px) {
        & {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            text-align: center;
            margin-top: 80px;
        }
    }
`

const BannerBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    min-width: 585px;

    @media screen and (max-width: 950px) {
        & {
            min-width: 100%;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            gap: 28px;
            align-items: center;
        }
    }
`

const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 600px) {
        & {
            gap: 18px;
        }
    }
`

const BannerTextTitle = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    background: linear-gradient(90deg, #93D5E1 0%, rgba(147, 213, 225, 0.4) 97.33%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 600px) {
        & {
            font-size: 38px;
            line-height: 42px;
        }
    }
`

const BannerTextDescription = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: .02em;
    color: rgb(194, 192, 192);

    @media screen and (max-width: 600px) {
        & {
            font-size: 16px;
            line-height: 25px;
        }
    }
`

const BannerButton = styled.button`
    border: none;
    background: rgb(147, 213, 225);
    width: 167px;
    height: 56px;
    border-radius: 32px;
    color: rgb(31, 39, 51);
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: .04em;
    cursor: pointer;
`

const BannerImgBlock = styled.div`
    position: relative;
    max-width: 453px;
    min-width: 300px;

    @media screen and (max-width: 600px) {
        & {
            min-width: 100%;
        }
    }
`

const BannerImg = styled.img`
    width: 100%;
`

const Particles1 = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(147, 213, 225, 0.3);
    filter: blur(80px);
    position: absolute;
    top: 36px;
    left: -145px;
    z-index: 0;
`

const Particles2 = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(147, 213, 225, 0.4);
    filter: blur(100px);
    position: absolute;
    top: 85px;
    left: 115px;
    z-index: 0;
`

const Block2 = styled.div`
    background: rgb(16, 17, 17);
    padding-top: 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Block2Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media screen and (max-width: 600px) {
        & {
            gap: 32px;
        }
    }
`

const Block2Title = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: .02em;
    color: rgb(221, 221, 221);

    @media screen and (max-width: 600px) {
        & {
            font-size: 18px;
            line-height: 22px;
        }
    }
`

const Block2Sponsors = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        & {
            justify-content: center;
        }
    }
`

const Block2SponsorImg = styled.img`
    height: 48px;
    width: 139px;
`

const Block3 = styled.div`
    background: rgb(16, 17, 17);
    padding-top: 148px;
    padding-bottom: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 80px;
            padding-bottom: 76px;
        }
    }
`

const Block3Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    @media screen and (max-width: 600px) {
        & {
            gap: 32px;
        }
    }
`

const Block3Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const Block3Explanation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    border-radius: 14px;
    background: rgba(147, 213, 225, 0.13);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .08em;
    color: rgb(147, 213, 225);
`

const Block3Title = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: transparent;
    background: linear-gradient(90deg, rgba(147, 213, 225, 0.4) 0%, #93D5E1 42.65%, rgba(147, 213, 225, 0.4) 89.78%);
    background-clip: text;

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block3Description = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: .02em;
    color: rgb(194, 192, 192);

    @media screen and (max-width: 600px) {
        & {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
        }
    }
`

const Block3FeaturesBlocks = styled.div`
    display: grid;
    width: 100%;
    gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));

    @media screen and (max-width: 600px) {
        & {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
    }
`

const Block3FeaturesBlock = styled.div`
    background: linear-gradient(136.25deg, rgba(122, 201, 216, 0.08) 0%, rgba(129, 208, 222, 0.02) 100%);
    width: 100%;
    border-radius: 24px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 50px;
`

const Block3FeaturesBlockMax = styled.div`
    grid-column: 1 / -1;
`

const Block3FeaturesBlockImg = styled.img`
    width: 100%;
    height: fit-content;
    border-radius: 16px;
    flex: 1;
`

const Block3FeaturesBlockElements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    min-width: 320px;
    flex: 1;

    @media screen and (max-width: 600px) {
        & {
            min-width: 100%;
            gap: 20px;
        }
    }
`

const Block3FeaturesBlockText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Block3FeaturesBlockTitle = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;

    @media screen and (max-width: 600px) {
        & {
            font-size: 24px;
            line-height: 30px;
        }
    }
`

const Block3FeaturesBlockDescription = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.75);

    @media screen and (max-width: 600px) {
        & {
            font-size: 14px;
            line-height: 22px;
        }
    }
`

const Block3FeaturesBlockButton = styled.div`
    outline: 1px solid rgba(147, 213, 225, 0.4);
    border-radius: 30px;
    padding: 14px 28px;
    display: flex;
    gap: 8px;
    cursor: pointer;
`

const Block3FeaturesBlockButtonImg = styled.img`
    width: 24px;
    height: 24px;
`

const Block3FeaturesBlockButtonText = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(147, 213, 225);
`

const Block4 = styled.div`
    background: rgb(16, 17, 17);
    padding-top: 150px;
    padding-bottom: 294px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 80px;
            padding-bottom: 200px;
        }
    }
`

const Block4Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    position: relative;
    z-index: 2;
`

const Block4Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 36, 37, 0.3);
    z-index: 2;
    backdrop-filter: blur(60px);
`

const Block4Title = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(90deg, rgba(147, 213, 225, 0.4) 0%, #93D5E1 42.65%, rgba(147, 213, 225, 0.4) 89.78%);
    color: transparent;
    background-clip: text;

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block4WorkBlocks = styled.div`
    display: flex;
    gap: 48px;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        & {
            gap: 28px;
        }
    }
`

const Block4WorkBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 32px;
    border-radius: 24px;
    background: linear-gradient(136.25deg, rgba(255, 255, 255, 0.032) 0%, rgba(255, 255, 255, 0.006) 100%);
    flex: 1;
    min-width: 271px;
`

const Block4WorkBlockStep = styled.div`
    padding: 12px 16px;
    border-radius: 24px;
    background: rgba(147, 213, 225, 0.06);
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: .04em;
    color: rgba(147, 213, 225, 0.7);
`

const Block4WorkBlockImgBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 32px;
    background: rgba(147, 213, 225, 0.06);
`

const Block4WorkBlockImgBlockBorder = styled.div`
    background: rgba(21, 21, 22, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: 72px;
    height: 72px;
    border: 1px solid rgba(147, 213, 225, 0.3);
    box-shadow: 0px 0px 28px 0px rgba(147, 213, 225, 0.22);
`

const Block4WorkBlockImg = styled.img`
    width: 36px;
    height: 36px;
`

const Block4WorkBlockText = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -.02em;
    color: rgb(221, 221, 221);
    text-align: center;

    @media screen and (max-width: 600px) {
        & {
            font-size: 18px;
            line-height: 23px;
        }
    }
`

const Block4ExpertContainer = styled.div`
    position: absolute;
    max-width: 1210px;
    padding: 0px 20px;
    width: 100dvw;
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
`

const Block4ExpertBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px;
    border-radius: 24px;
    background: rgb(147, 213, 225);
    width: 100%;

    @media screen and (max-width: 800px) {
        & {
            justify-content: center;
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            padding: 30px 20px;
        }
    }
`

const Block4ExpertBlockText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 800px) {
        & {
            gap: 12px;
        }
    }
`

const Block4ExpertBlockTextTile = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color: rgb(31, 39, 51);

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block4ExpertBlockTextDescription = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: rgb(31, 39, 51);
    max-width: 530px;

    @media screen and (max-width: 600px) {
        & {
            font-size: 14px;
            line-height: 23px;
            text-align: center;
        }
    }
`

const Block4ExpertBlockButton = styled.div`
    padding: 18px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 30px;
    background: rgb(31, 39, 51);
    cursor: pointer;
`

const Block4ExpertBlockButtonImg = styled.img`
    width: 24px;
    height: 24px;
`

const Block4ExpertBlockButtonText = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(147, 213, 225);
    text-align: center;
`

const Block5 = styled.div`
    padding-top: 286px;
    padding-bottom: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgb(16, 17, 17);
    z-index: 1;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 200px;
            padding-bottom: 80px;
        }
    }
`

const Block5Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    position: relative;

    @media screen and (max-width: 600px) {
        & {
            gap: 30px;
        }
    }
`

const Block5Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    @media screen and (max-width: 850px) {
        & {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            align-items: center;
        }
    }
`

const Block5BlockTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
        & {
            align-items: center;
        }
    }
`

const Block5BlockTitleExplanition = styled.div`
    background: rgba(147, 213, 225, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    border-radius: 14px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .08em;
    color: rgba(147, 213, 225, 1);
`

const Block5Title = styled.div`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(90deg, #93D5E1 0%, rgba(147, 213, 225, 0.4) 100%);
    color: transparent;
    background-clip: text;

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block5Categorys = styled.div`
    display: flex;
    gap: 12px;
`

const Block5Category = styled.div<{selected: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 8px 16px;
    border: 1px solid transparent;
    transition: all .3s ease-in-out;
    color: rgb(255, 255, 255);
    color: ${({selected}) => (selected ? 'rgb(147, 213, 225)' : 'rgb(255, 255, 255)')};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    cursor: pointer;
    background: ${({selected}) => (selected ? 'rgb(16, 17, 17)' : 'rgb(21, 21, 22)')};
    border: 1px solid ${({selected}) => (selected ? 'rgb(147, 213, 225)' : 'transparent')};

    @media screen and (max-width: 600px) {
        & {
            font-size: 14px;
            line-height: 24px;
        }
    }
`

const Block5Reviews = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;

    @media screen and (max-width: 940px) {
        & {
            flex-direction: column;
        }
    }
`

const Block5Review = styled.div<{selected: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    transition: all .3s ease-in-out;
    opacity: ${({selected}) => (selected ? '1': '0.2')};
    cursor: pointer;
`

const Block5ReviewImgBlock = styled.div<{selected: boolean}>`
    max-width: ${({selected}) => (selected ? '670px' : '220px')};
    height: 480px;
    transition: all .3s ease-in-out;
    border-radius: 24px;
    position: relative;
    
    @media screen and (max-width: 940px) {
        & {
            max-width: 100%;
            width: 100%;
            max-height: ${({selected}) => (selected ? '480px' : '220px')};
        }
    }
`

const Block5ReviewImgBlockBackground = styled.div<{selected: boolean}>`
    background: rgba(20, 28, 35, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    z-index: 2;
    backdrop-filter: blur(3.2px);
    opacity: ${({selected}) => (selected? '0': '1')};
    transition: all .3s ease-in-out;
`

const Block5ReviewImgBlockBackground1 = styled.div<{selected: boolean}>`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 43.34%, #000000 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    z-index: 2;
    opacity: ${({selected}) => (selected? '1': '0')};
    transition: all .3s ease-in-out;
`

const Block5ReviewImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 12px;
    z-index: 1;
`

const Block5ReviewBlockPlay = styled.div<{selected: boolean}>`
    position: absolute;
    top: 29px;
    left: 24px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 3;
    opacity: ${({selected}) => (selected? '1': '0')};
    transition: all .3s ease-in-out;
`

const Block5ReviewBlockPlayImg = styled.img`
    width: 24px;
    height: 24px;
`

const Block5ReviewBlockPlayText = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
`

const Block5ReviewBlockTextBlock = styled.div<{selected: boolean}>`
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 24px 24px 32px 24px;
    z-index: 3;
    opacity: ${({selected}) => (selected ? '1' : '0')};
    transition: ${({selected}) => (selected ? 'all .3s ease-in-out' : 'all .0s ease-in-out')};
    transition-delay: ${({selected}) => (selected ? '0.3s' : '0s')};
`

const Block5ReviewBlockText = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: rgb(245, 245, 247);
    transition: all .3s ease-in-out;
    transition-delay: .3s;

    @media screen and (max-width: 600px) {
        & {
            font-size: 18px;
            line-height: 22px;
        }
    }
`

const Block5ReviewAuthorBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

const Block5ReviewAuthorName = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: rgb(245, 245, 245);
`

const Block5ReviewAuthorProfession = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .02em;
    color: rgb(255, 255, 255);
`

const Block6 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: radial-gradient(100% 100% at 50% 100%, #121414 0%, #121414 100%);
    padding-top: 150px;
    padding-bottom: 150px;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 80px;
            padding-bottom: 80px;
        }
    }
`

const Block6Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    position: relative;
`

const Block6PricesBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
`

const Block6PriceBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 856px) {
        & {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            align-items: center;
        }
    }
`

const Block6PriceBlockText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 600px) {
        & {
            gap: 20px;
        }
    }
`

const Block6PriceBlockTextTileBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    @media screen and (max-width: 600px) {
        & {
            align-items: center;
        }
    }
`

const Block6PriceBlockTextExplanition = styled.div`
    padding: 4px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(147, 213, 225, 0.13);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .08em;
    color: rgb(147, 213, 225);
    border-radius: 14px;
`

const Block6PriceBlockTextTitle = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(90deg, #93D5E1 0%, rgba(147, 213, 225, 0.4) 100%);
    color: transparent;
    background-clip: text;

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block6PriceBlockCategorys = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
        & {
            align-items: center;
            text-align: center;
            gap: 18px;
        }
    }
`

const Block6PriceCategorysBlock = styled.div`
    display: flex;
    padding: 8px;
    gap: 12px;
    border-radius: 12px;
    background: rgba(144, 213, 225, 0.04);

    @media screen and (max-width: 360px) {
        & {
            flex-direction: column;
            width: 100%;
        }
    }
`

const Block6PriceCategory = styled.div<{selected: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 24px;
    border-radius: 12px;
    background: ${({selected}) => (selected ? 'rgb(147, 213, 225)' : 'rgb(19, 19, 20)')};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: ${({selected}) => (selected ? 'rgba(31, 39, 51, 1)' : 'rgba(255, 255, 255, 0.75)')};
    cursor: pointer;
    transition: all .3s ease-in-out;
`

const Block6PriceDescription = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 28.44px;
    color: rgb(221, 221, 221);

    @media screen and (max-width: 600px) {
        & {
            font-size: 16px;
            line-height: 25px;
        }
    }
`

const Block6PriceTextPrice = styled.span`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 250px;
    line-height: 250px;
    outline: 2px solid transparent;
    background: linear-gradient(180deg, rgba(64, 118, 128, 0.13) 0%, rgba(65, 137, 150, 0.8) 48.4%, rgba(64, 118, 128, 0.11) 100%);
    color: transparent;
    background-clip: text;

    @media screen and (max-width: 950px) {
        & {
            font-size: 180px;
            line-height: 180px;
        }
    }

    @media screen and (max-width: 856px) {
        & {
            font-size: 250px;
            line-height: 250px;
        }
    }

    @media screen and (max-width: 748px) {
        & {
            font-size: 150px;
            line-height: 150px;
        }
    }

    @media screen and (max-width: 466px) {
        & {
            font-size: 100px;
            line-height: 100px;
        }
    }
`

const Block6PriceAdvantagesBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Block6PriceAdvantagesTitle = styled.span`
    font-family: 'Plus Jakarta Sans';
    font-weight: 600;
    font-size: 22px;
    line-height: 28.16px;
    color: rgb(147, 213, 225);
`

const Block6PriceAdvantages = styled.div`
    display: flex;
    row-gap: 24px;
    column-gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`

const Block6PriceAdvantage = styled.div`
    background: linear-gradient(136.25deg, rgba(255, 255, 255, 0.032) 0%, rgba(255, 255, 255, 0.006) 100%);
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 12px;
    width: 270px;
`

const Block6PriceAdvantageImg = styled.img`
    width: 20px;
    height: 20px;
`

const Block6PriceAdvantageText = styled.span`
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .02em;
    color: #ffffff;
`

const Block6PriceButton = styled.button`
    border: 1px solid rgb(147, 213, 255);
    background: transparent;
    border-radius: 32px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    letter-spacing: .04em;
    color: rgb(147, 213, 255);
    cursor: pointer;
    transition: all .3s ease-in-out;
    width: 163px;
    height: 54px;

    &:hover {
        background: rgb(147, 213, 255);
        color: rgb(31, 39, 51);
    }
`

const Block7 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgb(16, 17, 17);
    padding-top: 154px;
    padding-bottom: 150px;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 84px;
            padding-bottom: 80px;
        }
    }
`

const Block7Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    position: relative;
`

const Block7TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const Block7Explanition = styled.div`
    border-radius: 14px;
    background: rgba(147, 213, 225, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    letter-spacing: .08em;
    color: rgb(147, 213, 225);
`

const Block7Title = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(90deg, rgba(147, 213, 225, 0.4) 0%, #93D5E1 42.65%, rgba(147, 213, 225, 0.4) 89.78%);
    color: transparent;
    background-clip: text;

    @media screen and (max-width: 600px) {
        & {
            font-size: 28px;
            line-height: 32px;
            text-align: center;
        }
    }
`

const Block7FAQsBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & .accordion {
        width: 100%;
        max-width: 770px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    & .accordion-item {
        border: 0;
        border-radius: 16px !important;
        background: linear-gradient(136.25deg, rgba(255, 255, 255, 0.0256) 0%, rgba(255, 255, 255, 0.0048) 100%);
        padding: 24px 30px;
    }

    & .accordion-button {
        border-radius: 16px !important;
        background: none;
        padding: 0;
        box-shadow: none;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: rgb(255, 255, 255);
    }

    & .accordion-body {
        padding: 0px;
        padding-top: 12px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: rgb(194, 192, 192);
    }

    & .accordion-button::after {
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='43' height='43' rx='21.5' stroke='%234A494D'/%3E%3Cmask id='mask0_3987_174' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='10' y='10' width='24' height='24'%3E%3Crect x='10' y='10' width='24' height='24' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_3987_174)'%3E%3Cpath d='M21.25 28.75V22.75H15.25V21.25H21.25V15.25H22.7499V21.25H28.75V22.75H22.7499V28.75H21.25Z' fill='%234A494D'/%3E%3C/g%3E%3C/svg%3E%0A");
        background-size: cover;
        width: 44px;
        height: 44px;
        transition: all .3s ease-in-out;
    }

    & .accordion-button:not(.collapsed)::after {
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='43' height='43' rx='21.5' stroke='%234A494D'/%3E%3Cmask id='mask0_3987_169' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='10' y='10' width='24' height='24'%3E%3Crect x='10' y='10' width='24' height='24' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_3987_169)'%3E%3Cpath d='M15.25 22.75V21.25H28.75V22.75H15.25Z' fill='%234A494D'/%3E%3C/g%3E%3C/svg%3E%0A");
        background-size: cover;
        width: 44px;
        height: 44px;
        transition: all .3s ease-in-out;
    }

    @media screen and (max-width: 600px) {
        & .accordion {
            gap: 12px;
        }

        & .accordion-item {
            padding: 20px 26px;
        }

        & .accordion-button {
            font-size: 18px;
            line-height: 22px;
        }

        & .accordion-body {
            font-size: 14px;
            line-height: 23px;
        }

        & .accordion-button::after {
            width: 30px;
            height: 30px;
        }

        & .accordion-button:not(.collapsed)::after {
            width: 30px;
            height: 30px;
        }
    }
`

const Block8 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgb(18, 20, 20);
    padding-top: 130px;

    @media screen and (max-width: 600px) {
        & {
            padding-top: 60px;
        }
    }
`

const Block8Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    @media screen and (max-width: 600px) {
        & {
            gap: 40px;
        }
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 80px;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        & {
            justify-content: center;
            gap: 40px;
        }
    }
`

const FooterTitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 600px) {
        & {
            text-align: center;
        }
    }
`

const FooterTitle = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    background: linear-gradient(90deg, #93D5E1 0%, rgba(147, 213, 225, 0.4) 100%);
    color: transparent;
    background-clip: text;
`

const FooterDescription = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgb(194, 192, 192);
`

const FooterForm = styled.div`
    display: flex;

    @media screen and (max-width: 486px) {
        & {
            flex-direction: column;
            gap: 12px;
        }
    }
`

const FooterFormInput = styled.input`
    border: none;
    border-radius: 30px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.07);
    width: 342px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .02em;
    color: rgb(194, 192, 192);

    &::placeholder {
        color: rgb(194, 192, 192);
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 486px) {
        & {
            width: 100%;
        }
    }
`

const FooterFormButton = styled.button`
    border: none;
    padding: 16px 24px;
    border-radius: 30px;
    background: rgba(147, 213, 225, 1);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgb(31, 39, 51);

    @media screen and (max-width: 486px) {
        & {
            width: 100%;
        }
    }
`

const FooterMenu = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 470px;
    width: 100%;
    gap: 40px;
    min-width: 207px;
    flex: 1;

    @media screen and (max-width: 600px) {
        & {
            justify-content: space-evenly;
        }
    }
`

const FooterMenuBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

const FooterMenuTitle = styled.span`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .02em;
    color: #ffffff;
`

const FooterMenuItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const FooterMenuItem = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .02em;
    color: #ffffff;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        color: rgb(147, 213, 225);
    }
`

const CopyRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding: 32px 0px;
    column-gap: 40px;
    row-gap: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        & {
            justify-content: center;
            text-align: center;
        }
    }
`

const CopyRightTitle = styled.span`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    color: rgb(221, 221, 221);
`

const CopyRightLinks = styled.div`
    display: flex;
    gap: 30px;
`

const CopyRightLink = styled.span`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    color: rgb(221, 221, 221);
    cursor: pointer;
`

const Particles3 = styled.div`
    width: 220px;
    height: 220px;
    background: rgb(147, 213, 225);
    position: absolute;
    z-index: 0;
    top: 68px;
    left: -34px;
    filter: blur(40px);
    opacity: 0.2;
`

const Particles4 = styled.div`
    width: 220px;
    height: 220px;
    background: rgb(147, 213, 225);
    position: absolute;
    z-index: 0;
    top: -292px;
    transform: translateY(50%);
    filter: blur(120px);
    opacity: 0.2;
`

const Particles5 = styled.div`
    width: 220px;
    height: 220px;
    background: rgb(147, 213, 225);
    position: absolute;
    z-index: 2;
    right: -109px;
    bottom: 44px;
    filter: blur(120px);
    opacity: 0.4;
`

const App = () => {
    const [selectedReviewsCategory, setSelectedReviewsCategory] = useState(1)
    const [selectedReview, setSelectedReview] = useState(1)
    const [selectedPriceCategory, setSelectedPriceCategory] = useState(0)

    const reviews = [
        {
            img: review1,
            text: '“Illum praesentium recusandae qui unde libero rem. Similique et sit qui voluptatibus. Animi fugit aliquid eum.”',
            name: 'Melinda Stamm',
            profession: 'Product Intranet Designer'
        },
        {
            img: review2,
            text: '“Illum praesentium recusandae qui unde libero rem. Similique et sit qui voluptatibus. Animi fugit aliquid eum.”',
            name: 'Beverly Jerde',
            profession: 'Product Intranet Designer'
        },
        {
            img: review3,
            text: '“Illum praesentium recusandae qui unde libero rem. Similique et sit qui voluptatibus. Animi fugit aliquid eum.”',
            name: 'Rafael Keeling',
            profession: 'Product Intranet Designer'
        }
    ]

    return (
        <Warper>
            <Block1>
                <Particles1 />
                <Container>
                    <Header>
                        <HeaderLogo src={logo} />
                        <Menu>
                            <MenuItem>Product</MenuItem>
                            <MenuItem>Solution</MenuItem>
                            <MenuItem>Recourse</MenuItem>
                            <MenuItem>Price</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </Menu>
                        <HeaderButtons>
                            <HeaderButtonSignIn>Sign In</HeaderButtonSignIn>
                            <HeaderButtonStart>Get Started</HeaderButtonStart>
                        </HeaderButtons>
                    </Header>
                    <Banner>
                        <BannerBlock>
                            <BannerText>
                                <BannerTextTitle>Your Gateway to<br/>Seamless Payments</BannerTextTitle>
                                <BannerTextDescription>Experience the Future of Secure and Efficient Transactions</BannerTextDescription>
                            </BannerText>
                            <BannerButton>Get Started</BannerButton>
                        </BannerBlock>
                        <BannerImgBlock>
                            <BannerImg src={banner} />
                            <Particles2 />
                        </BannerImgBlock>
                    </Banner>
                </Container>
            </Block1>
            <Block2>
                <Container>
                    <Block2Block>
                        <Block2Title>Trusted by the worlds leading brands and agencies</Block2Title>
                        <Block2Sponsors>
                            <Block2SponsorImg src={sponsor1} />
                            <Block2SponsorImg src={sponsor2} />
                            <Block2SponsorImg src={sponsor3} />
                            <Block2SponsorImg src={sponsor4} />
                            <Block2SponsorImg src={sponsor5} />
                        </Block2Sponsors>
                    </Block2Block>
                </Container>
            </Block2>
            <Block3>
                <Container>
                    <Block3Block>
                        <Block3Text>
                            <Block3Explanation>FEATURES</Block3Explanation>
                            <Block3Title>Unlocking Powerful Capabilities</Block3Title>
                            <Block3Description>Explore the Key Features That Propel Paynola to Excellence</Block3Description>
                        </Block3Text>
                        <Block3FeaturesBlocks>
                            <Block3FeaturesBlock>
                                <Block3FeaturesBlockImg src={block1} />
                                <Block3FeaturesBlockElements>
                                    <Block3FeaturesBlockText>
                                        <Block3FeaturesBlockTitle>Effortless Transactions</Block3FeaturesBlockTitle>
                                        <Block3FeaturesBlockDescription>Simplify your payment processes and enhance efficiency with Paynola. Our intuitive interface and automated workflows make transactions seamless, allowing you to focus on business growth.</Block3FeaturesBlockDescription>
                                    </Block3FeaturesBlockText>
                                    <Block3FeaturesBlockButton>
                                        <Block3FeaturesBlockButtonImg src={iconbut1} />
                                        <Block3FeaturesBlockButtonText>Get Started</Block3FeaturesBlockButtonText>
                                    </Block3FeaturesBlockButton>
                                </Block3FeaturesBlockElements>
                            </Block3FeaturesBlock>
                            <Block3FeaturesBlock>
                                <Block3FeaturesBlockImg src={block2} />
                                <Block3FeaturesBlockElements>
                                    <Block3FeaturesBlockText>
                                        <Block3FeaturesBlockTitle>Robust Security Measures</Block3FeaturesBlockTitle>
                                        <Block3FeaturesBlockDescription>Trust in the security of your transactions with [Your Platform Name]. We implement bank-level security measures, actively prevent fraud, and handle data with the utmost confidentiality.</Block3FeaturesBlockDescription>
                                    </Block3FeaturesBlockText>
                                    <Block3FeaturesBlockButton>
                                        <Block3FeaturesBlockButtonImg src={iconbut2} />
                                        <Block3FeaturesBlockButtonText>Secure Now</Block3FeaturesBlockButtonText>
                                    </Block3FeaturesBlockButton>
                                </Block3FeaturesBlockElements>
                            </Block3FeaturesBlock>
                            <Block3FeaturesBlockMax>
                                <Block3FeaturesBlock>
                                    <Block3FeaturesBlockImg src={block3} />
                                    <Block3FeaturesBlockElements>
                                    <Block3FeaturesBlockText>
                                        <Block3FeaturesBlockTitle>Intuitive Dashboard</Block3FeaturesBlockTitle>
                                        <Block3FeaturesBlockDescription>Access real-time insights and take control of your financial activities through our user-friendly dashboard. Tailor it to your needs, effortlessly navigate your payment data, and make informed decisions to optimize your business's financial strategy.</Block3FeaturesBlockDescription>
                                    </Block3FeaturesBlockText>
                                    <Block3FeaturesBlockButton>
                                        <Block3FeaturesBlockButtonImg src={iconbut3} />
                                        <Block3FeaturesBlockButtonText>Explore Insights</Block3FeaturesBlockButtonText>
                                    </Block3FeaturesBlockButton>
                                </Block3FeaturesBlockElements>
                                </Block3FeaturesBlock>
                            </Block3FeaturesBlockMax>
                        </Block3FeaturesBlocks>
                    </Block3Block>
                </Container>
            </Block3>
            <Block4>
                <Particles3 />
                <Particles5 />
                <Block4Background />
                <Container>
                    <Block4Block>
                        <Block4Title>How It Works Section</Block4Title>
                        <Block4WorkBlocks>
                            <Block4WorkBlock>
                                <Block4WorkBlockStep>Step 1</Block4WorkBlockStep>
                                <Block4WorkBlockImgBlock>
                                    <Block4WorkBlockImgBlockBorder>
                                        <Block4WorkBlockImg src={iconblock1} />
                                    </Block4WorkBlockImgBlockBorder>
                                </Block4WorkBlockImgBlock>
                                <Block4WorkBlockText>Sign up and create your account</Block4WorkBlockText>
                            </Block4WorkBlock>
                            <Block4WorkBlock>
                                <Block4WorkBlockStep>Step 2</Block4WorkBlockStep>
                                <Block4WorkBlockImgBlock>
                                    <Block4WorkBlockImgBlockBorder>
                                        <Block4WorkBlockImg src={iconblock2} />
                                    </Block4WorkBlockImgBlockBorder>
                                </Block4WorkBlockImgBlock>
                                <Block4WorkBlockText>Choose your pricing plan</Block4WorkBlockText>
                            </Block4WorkBlock>
                            <Block4WorkBlock>
                                <Block4WorkBlockStep>Step 3</Block4WorkBlockStep>
                                <Block4WorkBlockImgBlock>
                                    <Block4WorkBlockImgBlockBorder>
                                        <Block4WorkBlockImg src={iconblock3} />
                                    </Block4WorkBlockImgBlockBorder>
                                </Block4WorkBlockImgBlock>
                                <Block4WorkBlockText>Start processing payments seamlessly</Block4WorkBlockText>
                            </Block4WorkBlock>
                        </Block4WorkBlocks>
                    </Block4Block>
                </Container>
                <Block4ExpertContainer>
                    <Block4ExpertBlock>
                        <Block4ExpertBlockText>
                            <Block4ExpertBlockTextTile>Talk to an Expert</Block4ExpertBlockTextTile>
                            <Block4ExpertBlockTextDescription>Aut neque impedit non voluptate repudiandae. Impedit fugiat ab et earum neque enim alias atque.</Block4ExpertBlockTextDescription>
                        </Block4ExpertBlockText>
                        <Block4ExpertBlockButton>
                            <Block4ExpertBlockButtonImg src={iconbut4} />
                            <Block4ExpertBlockButtonText>Start Your Journey</Block4ExpertBlockButtonText>
                        </Block4ExpertBlockButton>
                    </Block4ExpertBlock>
                </Block4ExpertContainer>
            </Block4>
            <Block5>
                <Container>
                    <Block5Block>
                        <Block5Text>
                            <Block5BlockTitle>
                                <Block5BlockTitleExplanition>TESTIMONIALS</Block5BlockTitleExplanition>
                                <Block5Title>What Our Customers Say</Block5Title>
                            </Block5BlockTitle>
                            <Block5Categorys>
                                {['Text Review', 'Video Review'].map((item, index) => (
                                    <Block5Category key={index} selected={ selectedReviewsCategory === index } onClick={() => {setSelectedReviewsCategory(index)}}>{item}</Block5Category>
                                ))}
                            </Block5Categorys>
                        </Block5Text>
                        <Block5Reviews>
                            {reviews.map((item, index) => (
                                <Block5Review key={index} onClick={() => {setSelectedReview(index)}} selected={ selectedReview === index }>
                                    <Block5ReviewImgBlock selected={ selectedReview === index }>
                                        <Block5ReviewImgBlockBackground selected={ selectedReview === index } />
                                        <Block5ReviewImgBlockBackground1 selected={ selectedReview === index } />
                                        <Block5ReviewImg src={item.img} />
                                        <Block5ReviewBlockPlay selected={ selectedReview === index }>
                                            <Block5ReviewBlockPlayImg src={playicon} />
                                            <Block5ReviewBlockPlayText>Play Video</Block5ReviewBlockPlayText>
                                        </Block5ReviewBlockPlay>
                                        <Block5ReviewBlockTextBlock selected={ selectedReview === index }>
                                            <Block5ReviewBlockText>{item.text}</Block5ReviewBlockText>
                                        </Block5ReviewBlockTextBlock>
                                    </Block5ReviewImgBlock>
                                    <Block5ReviewAuthorBlock>
                                        <Block5ReviewAuthorName>{item.name}</Block5ReviewAuthorName>
                                        <Block5ReviewAuthorProfession>{item.profession}</Block5ReviewAuthorProfession>
                                    </Block5ReviewAuthorBlock>
                                </Block5Review>
                            ))}
                        </Block5Reviews>
                    </Block5Block>
                </Container>
            </Block5>
            <Block6>
                <Container>
                    <Block6Block>
                        <Block6PricesBlock>
                            <Block6PriceBlock>
                                <Block6PriceBlockText>
                                    <Block6PriceBlockTextTileBlock>
                                        <Block6PriceBlockTextExplanition>PRICING</Block6PriceBlockTextExplanition>
                                        <Block6PriceBlockTextTitle>What It Costs</Block6PriceBlockTextTitle>
                                    </Block6PriceBlockTextTileBlock>
                                    <Block6PriceBlockCategorys>
                                        <Block6PriceCategorysBlock>
                                            {['Basic', 'Standart', 'Premium'].map((item, index) => (
                                                <Block6PriceCategory key={index} selected={ selectedPriceCategory === index } onClick={() => {setSelectedPriceCategory(index)}}>{item}</Block6PriceCategory>
                                            ))}
                                        </Block6PriceCategorysBlock>
                                        <Block6PriceDescription>Neque necessitatibus in eos est expedita sapiente<br/>eaque. Veritatis alias rerum ut maxime ipsum.</Block6PriceDescription>
                                    </Block6PriceBlockCategorys>
                                </Block6PriceBlockText>
                                <Block6PriceTextPrice>$299</Block6PriceTextPrice>
                            </Block6PriceBlock>
                            <Block6PriceAdvantagesBlock>
                                <Block6PriceAdvantagesTitle>What’s included</Block6PriceAdvantagesTitle>
                                <Block6PriceAdvantages>
                                    {['Tools to build optimized checkout flows', 'Global payments with a single integration', 'Comprehensive security and rigorous compliance', 'Fast, predictable payouts to your bank accounts', 'Financial reconciliation and reporting', '24x7 phone, chat, and email support', 'Manage business operations with a unified dashboard', 'Robust developer platform and third-party integrations'].map((item, index) => (
                                        <Block6PriceAdvantage key={index}>
                                            <Block6PriceAdvantageImg src={iconadvantage} />
                                            <Block6PriceAdvantageText>{item}</Block6PriceAdvantageText>
                                        </Block6PriceAdvantage>
                                    ))}
                                </Block6PriceAdvantages>
                            </Block6PriceAdvantagesBlock>
                        </Block6PricesBlock>
                        <Block6PriceButton>Get Started</Block6PriceButton>
                    </Block6Block>
                </Container>
            </Block6>
            <Block7>
                <Particles4 />
                <Container>
                    <Block7Block>
                        <Block7TitleBlock>
                            <Block7Explanition>FAQs</Block7Explanition>
                            <Block7Title>Frequently Asked Questions</Block7Title>
                        </Block7TitleBlock>
                        <Block7FAQsBlock>
                            <Accordion defaultActiveKey='0'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>How long do payouts take?</Accordion.Header>
                                    <Accordion.Body>Eos quas est voluptatibus distinctio odit ipsum aut provident est. Sit sunt esse harum dolorem. Ipsa aut ut beatae animi iure possimus fugit voluptatem non.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>Will I be charged tax?</Accordion.Header>
                                    <Accordion.Body>Eos quas est voluptatibus distinctio odit ipsum aut provident est. Sit sunt esse harum dolorem. Ipsa aut ut beatae animi iure possimus fugit voluptatem non.</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>How do refunds work?</Accordion.Header>
                                    <Accordion.Body>Eos quas est voluptatibus distinctio odit ipsum aut provident est. Sit sunt esse harum dolorem. Ipsa aut ut beatae animi iure possimus fugit voluptatem non.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Block7FAQsBlock>
                    </Block7Block>
                </Container>
            </Block7>
            <Block8>
                <Container>
                    <Block8Block>
                        <Footer>
                            <FooterTitleBlock>
                                <FooterTitle>Sing up to the Wrap up</FooterTitle>
                                <FooterDescription>Dolores eum dignissimos quis deleniti animi<br/>velit dignissimos veniam quia.</FooterDescription>
                                <FooterForm>
                                    <FooterFormInput placeholder="Enter email address" />
                                    <FooterFormButton>Subscribe</FooterFormButton>
                                </FooterForm>
                            </FooterTitleBlock>
                            <FooterMenu>
                                <FooterMenuBlock>
                                    <FooterMenuTitle>Company</FooterMenuTitle>
                                    <FooterMenuItems>
                                        <FooterMenuItem>Home</FooterMenuItem>
                                        <FooterMenuItem>About</FooterMenuItem>
                                        <FooterMenuItem>Features</FooterMenuItem>
                                        <FooterMenuItem>Pricing</FooterMenuItem>
                                    </FooterMenuItems>
                                </FooterMenuBlock>
                                <FooterMenuBlock>
                                    <FooterMenuTitle>Social Media</FooterMenuTitle>
                                    <FooterMenuItems>
                                        <FooterMenuItem>Facebook</FooterMenuItem>
                                        <FooterMenuItem>Instagram</FooterMenuItem>
                                        <FooterMenuItem>LinkedIn</FooterMenuItem>
                                    </FooterMenuItems>
                                </FooterMenuBlock>
                            </FooterMenu>
                        </Footer>
                        <CopyRight>
                            <CopyRightTitle>Copyright © 2024 Paynola. All rights reserved.</CopyRightTitle>
                            <CopyRightLinks>
                                <CopyRightLink>Terms and Conditions</CopyRightLink>
                                <CopyRightLink>Privacy statement</CopyRightLink>
                            </CopyRightLinks>
                        </CopyRight>
                    </Block8Block>
                </Container>
            </Block8>
        </Warper>
    )
}

export default App