import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: url('https://c0.wallpaperflare.com/preview/748/226/445/interior-office-workspace-computer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    min-width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 64px 102px;
    border-radius: 8px;
    text-align: center;
    h1 {
        text-transform: uppercase;
        font-size: 64px;
        font-weight: 600;
        color: white;
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
    }
    p {
        text-shadow: 2px 2px 10px black;
        color: white;
    }
`;

export const Menu = styled.div`
    background-color: #252a2f;
    width: 100vw;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        list-style: none;
        gap: 64px;
        li {
            display: inline-block;
            & + li {
                margin-left: 64px;
            }
        }
        a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            font-size: 18px;
            transition: 0.2s;
            &:hover {
                color: ${shade(0.2, 'white')}
            }
        }
    }
`;



