import styled from 'styled-components';

export const Container = styled.div`
    margin: 32px;
    h1 {
        margin: 0 64px;
        color: #252a2f;
    }
`;

export const CommentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
`

export const Comments = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    margin: 32px 64px;
    min-height: 60px;
    border-radius: 16px;
    p + p {
       color: grey;
       font-size: 12px;
    }
    img {
        border-radius: 50%; 
        width: 64px;
        height: 64px;
    }
`

export const Post = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    margin: 32px 64px;
    min-height: 220px;
    border-radius: 16px;
    position: relative;
    h1 {
        margin: 0 64px;
        color: #252a2f;
    }
    p {
        line-height: 32px;
    }
    img {
        width: 108px;
        height: 108px;
        margin: 8px 0;
        border-radius: 50%;
    }
    div {
        display: grid;
        grid-template-columns: 64px 1fr;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 32px;
        padding-bottom: 16px;
        section p {
            margin: 0 64px;
        }
    }
    button {
        padding: 8px 16px;
        background-color: #8a705f;
        color: white;
        border-radius: 8px;
        margin-top: 16px;
        display: flex;
        position: absolute;
        right: 15px;
    }
`;

