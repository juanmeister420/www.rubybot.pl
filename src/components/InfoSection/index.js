import React from 'react';
import { Button2 } from '../ButtonElements';
import { useHistory } from 'react-router';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements';

const InfoSection = ({lightBg, id, topLine, imgStart, lightText, headline, darkText, description, buttonLabel, img, alt, link }) => {
    const { push } = useHistory()
    return (
        
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button2 onClick={()=> window.open(link,"_self")}>
                                    {buttonLabel}
                                </Button2>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
