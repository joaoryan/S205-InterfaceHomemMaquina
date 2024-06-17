import styled from "styled-components";

interface Props {
    time: number,
}

export const Card = styled.div<Props>`
    .transform {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        transition: all ${props => props.time}s ease-out;
        transform: translateX(30px);
        opacity: 0;
    }
    .transform.show {
        opacity: 1;
        transform: translatex(0px);
    }
`;

export const CardDiv = styled.div`
    border-radius: 5px;
    border: 1px solid #8b8b8b;
    padding: 5px;
    width: 160px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    @media (max-width: 740px) {
        font-size: 13px;
    }
`;

export const Text = styled.div`
    font-size: 12px;
    cursor: default;
`;
