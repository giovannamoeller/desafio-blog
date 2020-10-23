import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    margin-top: 32px;
`;

export const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const Post = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    margin: 32px;
    min-height: 220px;
    border-radius: 16px;
    position: relative;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    section {
        div:nth-child(1) img {
            width: 64px;
            height: 64px;
            margin: 8px 0;
            border-radius: 50%;
        }
        div:nth-child(2) img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        div {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        } 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h3 {
        text-transform: uppercase;
        line-height: 28px;
        font-size: 14px;   
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        color: #252a2f;
    }
    div {
        display: flex;
        margin-top: 16px;
        color: grey;
        justify-content: space-between;
    }
    button {
        padding: 8px 16px;
        background-color: #252a2f;
        color: white;
        border-radius: 8px;
        margin-top: 16px;
        display: flex;
        position: absolute;
        right: 15px;
        bottom: -16px;
        transition: 0.2s;

        &:hover {
            background-color: ${shade(0.4, '#252a2f')};
        }
    }

`;

