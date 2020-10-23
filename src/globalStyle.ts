import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');  
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background-color: rgba(189, 195, 199, 0.5);
    }
    button {
        cursor: pointer;
    }
`;

export default globalStyle;