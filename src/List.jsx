import styled from "styled-components";
import Task from "./Task";
import arrow from "./img/arrow.svg";
import check from "./img/check.svg";
import lock from "./img/lock.svg";

const tasksarray = [
    {
        id: "1",
        title: "Application Setup",
        status: "complited",
        businessContext: [],
        src: <img src={check} alt=""/>,
    },
    {
        id: "2",
        title: "Static Books List",
        status: "complited",
        businessContext: [],
        src: <img src={check} alt=""/>,
    },
    {
        id: "3",
        title: "Administration Panel",
        status: "complited",
        businessContext: [],
        src: <img src={check} alt=""/>,
    },
    {
        id: "4",
        title: "Connect Admin with Frontend",
        status: "active",
        businessContext: [],
        src: <img src={arrow} alt=""/>,
    },
    {
        id: "5",
        title: "Book Review Feature",
        status: "blocked",
        businessContext: [],
        src: <img src={lock} alt=""/>,
    },
]

const List = () => { 

    return ( 
        <ListWrapper>
            <Title>
                YOUR TASKS
            </Title>
            <TasksList>
                {tasksarray.map((item) => (
                    <a href={item.title} key={item.id}>
                        <Task
                            key={item.id}
                            {...item}
                        />
                    </a>
                ))}
            </TasksList>
        </ListWrapper>
     );
}

const ListWrapper = styled.div`
    background-color: #fff;
    margin: 20px;
    width: 380px;
    height: 95%;
    border-radius: 15px 15px 0px 0px;
    padding-left: 25px;
`;

const Title = styled.div`
    list-style: none;
    height: 70px;
    border-bottom: 1px solid #f4f5f7;
    padding-top: 25px;
    font-weight: 600;
    font-size: 13px;
`;

const TasksList = styled.div`
    padding-top: 15px;

    & > a {
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: black;
        &:last-child {
            color: #bcbcbc;
        }
    }
`;

export default List;