import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Hi, your phone book is waiting for you!{' '}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>
      </Title>
    </Container>
  );
}
