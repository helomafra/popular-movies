import styled from 'styled-components';

export const Container = styled.div`

  padding: 10rem 0;
  height: 100vh;

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 40%;
  }

  button {
    background: #52796f;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover{
    background: #84a98c;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%
  }

  .release-date {
    opacity: 0.5;
  }
`
export default Container;