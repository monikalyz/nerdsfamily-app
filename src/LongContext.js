import styled from "styled-components";
import Text from "./Text";
import LongDate from "./LongDate";

const LongContext = ({ businessContext }) => {
  return (
    <>
      {businessContext.map((item, index) => (
        <>
          {item.status === "active" ? (
            <Content key={index}>
              <Title>{item.title}</Title>
              <Wrapper>
                <Img src={item.src} alt="" />
                <Container>
                  <Header>
                    <Author>{item.author}</Author>
                    <SpanSection>
                      <LongDate
                        key={index}
                        created_at={item.created_at}
                        day={item.created_at.day}
                        monthLong={item.created_at.monthLong}
                      />
                    </SpanSection>
                  </Header>
                  <Text content={item.content}></Text>
                </Container>
              </Wrapper>
            </Content>
          ) : null}
        </>
      ))}
    </>
  );
};

const Content = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Title = styled.h2`
  font-size: 22px;
  padding: 0 0 15px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Author = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border: 2px solid #dbdbdb;
  border-radius: 50%;
`;

const SpanSection = styled.div`
  font-weight: 400;
  color: gray;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
`;
export default LongContext;
