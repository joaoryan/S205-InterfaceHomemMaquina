import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import * as Styled from './styled';
import { BsFillEmojiWinkFill } from 'react-icons/bs';
import image from '../../assets/image/software1.jpeg';

interface TeamCardProps {
    Title: string,
    Text: string,
    timeAnimate: number,
    threshold?: number,
}

const TeamCard = ({
    Title,
    Text,
    timeAnimate,
    threshold = 0.5,
}: TeamCardProps) => {
    const { ref, inView } = useInView({ threshold })
    return (
        <Styled.Card time={timeAnimate}>
            <div ref={ref} className={`transform ${inView ? "show" : ""}`}>
                <Styled.CardDiv>
                    <Styled.Title>{Title}</Styled.Title>
                    <Styled.Text>{Text}</Styled.Text>
                </Styled.CardDiv>
            </div>
        </Styled.Card>
    );
};

export default TeamCard;
