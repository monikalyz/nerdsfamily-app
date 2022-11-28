import styled from "styled-components";

const ShortDate = ({created_at}) => {
    return ( 
        <>    
            {created_at.map((item, index) => (
                <Date key={index}>
                    <Dot>•</Dot>{item.monthShort} {item.day}
                </Date>
            ))}
        </>
     );
}

const Date = styled.div`
    font-size: 11px;
    color: gray;
    margin-top: 17px;
`;

const Dot = styled.span`
    margin: 5px 10px;
`;
 
export default ShortDate;