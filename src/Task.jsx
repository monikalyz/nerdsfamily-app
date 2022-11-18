import styled from "styled-components";

const Task = ({ title, src }) => 

    <TaskWrapper>
        <IconTask>
            {src}
        </IconTask>
        <IconTitle>{title}</IconTitle>
    </TaskWrapper>

const TaskWrapper = styled.div`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 15px 0px 0px 0px;
`;
       
const IconTask = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 15px;
`;
 
const IconTitle = styled.div``;

export default Task;