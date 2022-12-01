import styled from "styled-components";

const BlockedPage = () => {
    return ( 
        <Text>
            <h1>Blocked Page</h1>
            <span>Please contact with your supervisor</span>
        </Text>

     );
}

const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10vh;

    & > h1 {
        font-size: 40px;
    }

    & > span {
        font-size: 16px;
    }
`;
 
export default BlockedPage;