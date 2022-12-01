import styled from "styled-components";
import ShortDate from "./ShortDate";

const ShortContext = ({ businessContext }) => {
  
  return (
    <>
      {businessContext.map((item, index) => (
        <Content key={index} style={(item.status === "new" && blue) || (item.status === "active" && active) || (item.status === "inactive" && inactive)}> 
          <Header className="author">
            {item.status === "new" && <New>New</New>} 
            <Author>{item.author}</Author>
            <ShortDate key={index} created_at={item.created_at} day={item.created_at.day} monthShort={item.created_at.monthShort}/>
          </Header>
          <Title>{item.title}</Title>
          <Text>{item.content}</Text>
        </Content>
      ))}
    </>
  );
};

const Content = styled.div`
  width: 350px;
  height: 130px;
  background-color: #fff;
  border-radius: 15px;
  margin: 10px;
`;

  const Header = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 5px 20px;
    font-size: 12px;
`;

    
const Author = styled.h4`
  margin-top: 17px;
  color: gray;
`;

const Title = styled.h4`
   margin: 5px 20px;
    font-size: 15px;
`;

const Text = styled.div` 
  display: -webkit-box;
  width: 300px;
  overflow:hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 12px;
  color: rgb(110, 110, 110);
  margin: 5px 20px;
  
`;

const New = styled.div`
  background-color: #0165ff;
  width: 40px;
  height: 22px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  color: white;
  text-align: center;
  padding: 3px;
  margin-right: 10px;
  margin-top: 15px;
  border-radius: 5px;
`;

const blue = {
  color: "#0165ff",
  fontweight: "bold",
}

const active = {
  boxShadow: '2px 2px 9px #c5c5c5',
}

const inactive = {
  backgroundColor: "transparent",
}

export default ShortContext;
