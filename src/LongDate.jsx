import styled from "styled-components";

const LongDate = ({created_at}) => {
    return ( 
        <>    
            {created_at.map((item, index) => (
                <Date key={index}>
                    <Dot>•</Dot>
                    Today, {
                    (item.day === 1 && item.day + "st") ||
                    (item.day === 2 && item.day + "nd") ||
                    (item.day === 3 && item.day +"rd") ||
                    (item.day >= 4 && item.day+"th")
                    } {item.monthLong}  <Dot>•</Dot> {item.time}
                </Date>
            ))}
        </>
     );
}
 
const Date = styled.span`
    font-size: 11px;
`;

const Dot = styled.span`
    margin: 5px;
`;
export default LongDate;