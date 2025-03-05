import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";  // 추가

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  sans-serif;
  }

  button {
    background: none;
    
    color: white;
    border: none;
    cursor: pointer;
  }

  .dongle-light {
    font-family:  sans-serif;
    font-weight: 300;
    font-style: normal;
}

  .dongle-regular {
    font-family:  sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .dongle-bold {
    font-family: sans-serif;
    font-weight: 700;
    font-style: normal;
  }
`;

export default GlobalStyles;

const StyledButton = styled.button`
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;