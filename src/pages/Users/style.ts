import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const UsersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`

export const User = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    margin: 32px 64px;
    min-height: 100px;
    border-radius: 16px;
    position: relative;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    align-items: center;
    p {
        font-weight: bold;
        text-transform: uppercase;
        &:nth-child(2)  {
            color: grey;
            text-transform: none;
            font-weight: normal;
        }
        &:nth-child(3)  {
            color: grey;
            text-transform: none;
            font-weight: normal;
        }
    }
    img {
        width: 108px;
        height: 108px;
        margin: 8px 0;
        border-radius: 50%;
    }
`;

