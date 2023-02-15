import { Title, Wrapper, Grid, Item } from '../styles/components/about.styles';

function About() {
    return (
        <>
            <Wrapper>
                <Title>Styled components</Title>
            </Wrapper>
            <Grid columns={3}>
                <Item><Title>Grid item</Title>lorem ipsum</Item>
                <Item><Title>Grid item</Title>lorem ipsum</Item>
                <Item><Title>Grid item</Title>lorem ipsum</Item>
            </Grid>
            <Grid columns={2}>
                <Item><Title>Grid item</Title>lorem ipsum</Item>
                <Item><Title>Grid item</Title>lorem ipsum</Item>
            </Grid>
            <Wrapper>
                <Title>Try making your own styled component, and customize this page</Title>
            </Wrapper>
        </>
    )
  }
  
  export default About