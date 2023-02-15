import styled from 'styled-components'; 

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin: 1rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)` };
  grid-gap: 1rem;
  margin: 1rem 0;
`;

export const Item = styled.div`
  background: lightgray;
  text-align: center;
`;