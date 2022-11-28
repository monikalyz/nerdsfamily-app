import styled from "styled-components";

const Text = ({content}) => {

        return(
            <>    
                {content.map((item, index) => (
                    <Item key={index}>
                        {item}<br/>
                    </Item>
                ))}
            </>
        )
}

const Item = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px 0px;
    font-size: 12px;
    color: rgb(110, 110, 110);
`;
 
export default Text;