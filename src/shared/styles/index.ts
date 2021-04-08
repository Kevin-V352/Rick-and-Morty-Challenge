import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    //Global font-size
    --big-font-size: 7vw;
    --normal-font-size: 5vw;

    @media (min-width: 1025px) {
      --big-font-size: 1.7vw;
      --normal-font-size: 1vw;
    }

    //Global colors
    --primary-color: #EEEEEE;
    --secondary-color: #00ADB5;
    --tertiary-color: #393E46;
    --background-color: #222831;

    //Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

    //Radius
    --border: .7vw;
  };

  body {
    min-height: 100vh;
    width: auto;
    padding: 0;
    margin: 0;
    background-color: var(--background-color);

    //Custom scrollbar - Chrome
		&::-webkit-scrollbar {
			width: 1vw;
		};
		&::-webkit-scrollbar-track {
			background-color: transparent;
		};
		&::-webkit-scrollbar-thumb {
			background: var(--secondary-color);
		};
  };

  * {
    font-family: 'Quicksand', sans-serif;
    font-size: var(--normal-font-size);
    font-weight: bold;
  };

  input:focus, 
	select:focus, 
	button:focus,
	textarea:focus {
        outline: none;
  };
`;

export default GlobalStyles;
