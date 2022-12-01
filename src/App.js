import styled, { createGlobalStyle } from "styled-components";
import Task from "./Task";
import ShortContexts from "./ShortContexts";
import LongContext from "./LongContext";
import arrow from "./img/arrow.svg";
import check from "./img/check.svg";
import lock from "./img/lock.svg";
import mark from "./img/mark.svg";
import donatella from "./img/donatella.svg";
import karem from "./img/karem.svg";
import melisa from "./img/melisa.svg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import NoMatch from "./NoMatch";
import BlockedPage from "./BlockedPage";

const date = new Date();
const day = date.getDate();
const monthLong = date.toLocaleString("en", { month: "long" });
const monthShort = date.toLocaleString("en", { month: "short" });
const hour = date.getHours();
const minutes = date.getMinutes();
const time = `${hour < 10 ? "0" + hour : hour}:${
  minutes < 10 ? "0" + minutes : minutes
}`;

const tasksarray = [
  {
    id: "1",
    title: "Application Setup",
    status: "complited",
    businessContext: [
      {
        id: "1",
        status: "new",
        title: "Lorem ipsum dolor sit 🎉🙌",
        content: [
          "Sed dui eros, euismod fringilla pellentesque nec, molestie sit amet sapien. Suspendisse sit amet viverra tellus.",

          "Sed sed ex ac dolor lobortis ultricies et et libero. Aenean porta viverra justo, quis tempor nisi pulvinar sed. Duis scelerisque fermentum nisi vel rutrum. Suspendisse et odio eu urna congue fringilla id quis purus. Sed id nunc id nulla luctus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",

          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam arcu tortor, porttitor nec sem nec, scelerisque pharetra tellus. Pellentesque in pulvinar lectus. Duis sit amet lacinia velit, ut laoreet sem. Suspendisse at tellus at orci aliquam feugiat eget eget risus.",
        ],
        author: "Melisa Chan",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: melisa,
      },
      {
        id: "2",
        status: "active",
        title: "Aenean porta viverra",
        content: [
          " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sagittis nisi odio, non vehicula enim tincidunt sed.",

          "Sed varius faucibus tortor vitae tristique. Phasellus facilisis ante elit, ut tempor sapien blandit vitae. Praesent enim ex, condimentum quis tortor non, aliquet fringilla massa. Proin vitae nisl diam. In hac habitasse platea dictumst. Aliquam erat volutpat. Proin faucibus enim et mollis pulvinar. Cras nec ultricies risus. Nam ultrices ornare libero, in placerat tortor bibendum et. Phasellus sollicitudin, dui sed gravida efficitur, risus justo pharetra mi, finibus tempus urna tortor ut nisi. Aliquam erat volutpat. Mauris quis malesuada lacus, vitae condimentum ligula. Sed eget vestibulum mauris.",
        ],
        author: "Karem Island",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: karem,
      },
      {
        id: "3",
        status: "inactive",
        title: "Sed id nunc",
        content: [
          "Etiam aliquam, lectus a dignissim viverra, arcu ipsum commodo nulla, vitae tincidunt nunc lacus sit amet risus. In eu dolor mauris. Fusce non tristique est. Suspendisse potenti. Nulla eget commodo sem, sit amet auctor metus.",

          "Nam a nisi velit. Aliquam leo tellus, rutrum ac lorem ac, rutrum ullamcorper mi. Ut mattis massa ac justo efficitur, hendrerit dapibus libero dictum. Integer nec eros facilisis, porta lorem eu, porttitor tellus. Aliquam rutrum tincidunt tincidunt. Maecenas quis nulla massa.",
        ],
        author: "Donatella Wentes",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: donatella,
      },
    ],
    src: <img src={check} alt="" />,
    path: "/nerdsfamily-app",
  },
  {
    id: "2",
    title: "Static Books List",
    status: "complited",
    businessContext: [
      {
        id: "1",
        status: "new",
        title: "Pellentesque habitant morbi",
        content: [
          "Duis eu risus laoreet, fringilla tortor ut, rhoncus ex.",

          "Sed imperdiet urna vitae justo finibus, in mattis felis tempus. Nulla a nunc at sapien auctor finibus eu vel metus. Nam sem est, tempus sed rhoncus non, molestie sit amet ex. Proin eget erat enim. Donec congue mattis erat, sit amet facilisis lectus tincidunt at. Maecenas cursus lectus sit amet urna suscipit pharetra.",

          "Sed tincidunt nulla vel mauris convallis finibus. Nam varius dictum congue. Nulla facilisi. Pellentesque ac rutrum urna. Quisque pretium, tellus nec viverra sollicitudin, urna turpis placerat lacus, ac tincidunt diam ligula id arcu.",
        ],
        author: "Donatella Wentes",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: donatella,
      },
      {
        id: "2",
        status: "active",
        title: "Proin vitae nisl diam",
        content: [
          "Vitae condimentum ligula. Sed eget vestibulum mauris. Aenean a urna metus. Etiam aliquam, lectus a dignissim viverra, arcu ipsum commodo nulla, vitae tincidunt nunc lacus sit amet risus. In eu dolor mauris. Fusce non tristique est. Suspendisse potenti. Nulla eget commodo sem, sit amet auctor metus. Nam a nisi velit. Aliquam leo tellus, rutrum ac lorem ac, rutrum ullamcorper mi. ",
        ],
        author: "Melisa Chan",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: melisa,
      },
      {
        id: "3",
        status: "inactive",
        title: "Nam a nisi velit",
        content: [
          "Suspendisse at tellus at orci aliquam feugiat eget eget risus. In suscipit malesuada odio nec iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sagittis nisi odio, non vehicula enim tincidunt sed.",

          "Sed varius faucibus tortor vitae tristique. Phasellus facilisis ante elit, ut tempor sapien blandit vitae. Praesent enim ex, condimentum quis tortor non, aliquet fringilla massa. Proin vitae nisl diam. In hac habitasse platea dictumst. Aliquam erat volutpat. Proin faucibus enim et mollis pulvinar. ",
        ],
        author: " Karem Island",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: karem,
      },
    ],
    src: <img src={check} alt="" />,
    path: "/static-books-list",
  },
  {
    id: "3",
    title: "Administration Panel",
    status: "complited",
    businessContext: [
      {
        id: "1",
        status: "new",
        title: "Duis eu risus laoreet",
        content: [
          "Suspendisse sit amet viverra tellus. Sed sed ex ac dolor lobortis ultricies et et libero. Aenean porta viverra justo, quis tempor nisi pulvinar sed.",

          "Duis scelerisque fermentum nisi vel rutrum. Suspendisse et odio eu urna congue fringilla id quis purus. Sed id nunc id nulla luctus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam arcu tortor, porttitor nec sem nec, scelerisque pharetra tellus. Pellentesque in pulvinar lectus.",

          "Duis sit amet lacinia velit, ut laoreet sem. Suspendisse at tellus at orci aliquam feugiat eget eget risus.     In suscipit malesuada odio nec iaculis.",
        ],
        author: "Karem Island",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: karem,
      },
      {
        id: "2",
        status: "active",
        title: "Ut mattis massa",
        content: [
          "Nam sem est, tempus sed rhoncus non, molestie sit amet ex. Proin eget erat enim. Donec congue mattis erat, sit amet facilisis lectus tincidunt at. Maecenas cursus lectus sit amet urna suscipit pharetra. Sed tincidunt nulla vel mauris convallis finibus. Nam varius dictum congue.",

          "Nulla facilisi. Pellentesque ac rutrum urna. Quisque pretium, tellus nec viverra sollicitudin, urna turpis placerat lacus, ac tincidunt diam ligula id arcu. Donec sodales, sapien vel iaculis ullamcorper, nisl tortor ultricies sem, vitae fringilla risus nulla nec elit. ",
        ],
        author: "Donatella Wentes",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: donatella,
      },
      {
        id: "3",
        status: "inactive",
        title: "Proin eget erat enim",
        content: [
          "Aenean porta viverra justo, quis tempor nisi pulvinar sed.",

          "Duis scelerisque fermentum nisi vel rutrum. Suspendisse et odio eu urna congue fringilla id quis purus. Sed id nunc id nulla luctus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam arcu tortor, porttitor nec sem nec, scelerisque pharetra tellus. ",
        ],
        author: "Melisa Chan",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: melisa,
      },
    ],
    src: <img src={check} alt="" />,
    path: "/administration-panel",
  },
  {
    id: "4",
    title: "Connect Admin with Frontend",
    status: "active",
    businessContext: [
      {
        id: "1",
        status: "new",
        title: "Nam varius dictum",
        content: [
          "Proin vitae nisl diam. In hac habitasse platea dictumst. Aliquam erat volutpat. Proin faucibus enim et mollis pulvinar. Cras nec ultricies risus.",

          "Nam ultrices ornare libero, in placerat tortor bibendum et. Phasellus sollicitudin, dui sed gravida efficitur, risus justo pharetra mi, finibus tempus urna tortor ut nisi. Aliquam erat volutpat. Mauris quis malesuada lacus, vitae condimentum ligula. Sed eget vestibulum mauris.",

          "Aenean a urna metus. Etiam aliquam, lectus a dignissim viverra, arcu ipsum commodo nulla, vitae tincidunt nunc lacus sit amet risus. In eu dolor mauris. Fusce non tristique est. Suspendisse potenti. ",
        ],
        author: "Donatella Wentes",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: donatella,
      },
      {
        id: "2",
        status: "active",
        title: "Cras nec ultricies",
        content: [
          "Ut mattis massa ac justo efficitur, hendrerit dapibus libero dictum.",

          "Integer nec eros facilisis, porta lorem eu, porttitor tellus. Aliquam rutrum tincidunt tincidunt. Maecenas quis nulla massa. Aliquam massa orci, vulputate pharetra nunc vel, tempor iaculis lacus. Vestibulum lacinia magna eget pulvinar rutrum. Nulla porttitor vestibulum elit, eu viverra libero semper quis. Duis eu risus laoreet, fringilla tortor ut, rhoncus ex. Sed imperdiet urna vitae justo finibus, in mattis felis tempus.",

          "Nulla a nunc at sapien auctor finibus eu vel metus. Nam sem est, tempus sed rhoncus non, molestie sit amet ex.",
        ],
        author: "Melisa Chan",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: melisa,
      },
      {
        id: "3",
        status: "inactive",
        title: "Vestibulum ante",
        content: [
          "Donec congue mattis erat, sit amet facilisis lectus tincidunt at.",

          "Maecenas cursus lectus sit amet urna suscipit pharetra. Sed tincidunt nulla vel mauris convallis finibus. Nam varius dictum congue. Nulla facilisi. Pellentesque ac rutrum urna. Quisque pretium, tellus nec viverra sollicitudin, urna turpis placerat lacus, ac tincidunt diam ligula id arcu. Donec sodales, sapien vel iaculis ullamcorper, nisl tortor ultricies sem, vitae fringilla risus nulla nec elit. Aenean id nibh in nunc ornare viverra a eu erat. Sed non quam eu eros dignissim porttitor vitae ut sem. ",
        ],
        author: "Karem Island",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: karem,
      },
    ],
    src: <img src={arrow} alt="" />,
    path: "/connect-admin-with-frontend",
  },
  {
    id: "5",
    title: "Book Review Feature",
    status: "blocked",
    businessContext: [
      {
        id: "1",
        status: "new",
        title: "Aliquam erat volutpat",
        content: [
          "Phasellus facilisis ante elit, ut tempor sapien blandit vitae. Praesent enim ex, condimentum quis tortor non, aliquet fringilla massa. Proin vitae nisl diam. In hac habitasse platea dictumst. Aliquam erat volutpat. Proin faucibus enim et mollis pulvinar. Cras nec ultricies risus.",

          "Nam ultrices ornare libero, in placerat tortor bibendum et. Phasellus sollicitudin, dui sed gravida efficitur, risus justo pharetra mi, finibus tempus urna tortor ut nisi. Aliquam erat volutpat. Mauris quis malesuada lacus, vitae condimentum ligula. Sed eget vestibulum mauris.",
        ],
        author: "Karem Island",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: karem,
      },
      {
        id: "2",
        status: "active",
        title: "Nulla a nunc",
        content: [
          "Maecenas quis nulla massa. Aliquam massa orci, vulputate pharetra nunc vel, tempor iaculis lacus.",

          "Vestibulum lacinia magna eget pulvinar rutrum. Nulla porttitor vestibulum elit, eu viverra libero semper quis. Duis eu risus laoreet, fringilla tortor ut, rhoncus ex. Sed imperdiet urna vitae justo finibus, in mattis felis tempus. Nulla a nunc at sapien auctor finibus eu vel metus.",

          "Nam sem est, tempus sed rhoncus non, molestie sit amet ex. Proin eget erat enim. Donec congue mattis erat, sit amet facilisis lectus tincidunt at.",
        ],
        author: "Melisa Chan",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: melisa,
      },
      {
        id: "3",
        status: "inactive",
        title: "Donec sodales sapien",
        content: [
          "Sed eget vestibulum mauris. Aenean a urna metus. Etiam aliquam, lectus a dignissim viverra, arcu ipsum commodo nulla, vitae tincidunt nunc lacus sit amet risus. In eu dolor mauris.",

          "Fusce non tristique est. Suspendisse potenti. Nulla eget commodo sem, sit amet auctor metus. Nam a nisi velit. Aliquam leo tellus, rutrum ac lorem ac, rutrum ullamcorper mi. Ut mattis massa ac justo efficitur, hendrerit dapibus libero dictum. Integer nec eros facilisis, porta lorem eu, porttitor tellus. Aliquam rutrum tincidunt tincidunt. Maecenas quis nulla massa. Aliquam massa orci, vulputate pharetra nunc vel, tempor iaculis lacus. ",
        ],
        author: "Donatella Wentes",
        created_at: [
          {
            monthLong: monthLong,
            monthShort: monthShort,
            day: day,
            time: time,
          },
        ],
        src: donatella,
      },
    ],
    src: <img src={lock} alt="" />,
    path: "/book-review-feature",
  },
];

function App() {
  return (
    <Router>
      <AppWrapper>
        <GlobalResets />
        <ListWrapper>
          <Title>YOUR TASKS</Title>
          <TasksList>
            {tasksarray.map((item, index) => (
              <NavLink to={item.path} key={index}>
                <Task key={item.id} {...item} />
              </NavLink>
            ))}
          </TasksList>
        </ListWrapper>
        <BusinessContextWrapper>
          <ShortInfoTitle>
            <img src={mark} alt="mark" />
            <h2>Business Context</h2>
          </ShortInfoTitle>
          <BusinessContext>
            <Short>
              {tasksarray.map((item, index) => (
                <Routes key={index}>
                  <Route
                    key={index}
                    exact
                    path={item.path}
                    element={
                      <ShortContexts
                        key={index}
                        businessContext={item.businessContext}
                      />
                    }
                  ></Route>
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              ))}
            </Short>
            <Long>
              {tasksarray.map((item, index) => (
                <Routes key={index}>
                  <Route
                    key={index}
                    exact
                    path={item.path}
                    element={
                      item.status !== "blocked" ? (
                        <LongContext
                          key={index}
                          businessContext={item.businessContext}
                        />
                      ) : (
                        <BlockedPage />
                      )
                    }
                  ></Route>
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              ))}
            </Long>
          </BusinessContext>
        </BusinessContextWrapper>
      </AppWrapper>
    </Router>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`;

const GlobalResets = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f5f7;
    font-family: 'Poppins', sans-serif;
  }
`;

const ListWrapper = styled.div`
  background-color: #fff;
  margin: 0px 15px 30px 25px;
  width: 380px;
  border-radius: 15px 15px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  list-style: none;
  flex-basis: 70px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: 600;
  font-size: 13px;
  padding-left: 25px;
`;

const TasksList = styled.div`
  padding-top: 15px;
  padding-left: 25px;
  flex-basis: calc(100% - 70px);
  border-top: 1px solid #f4f5f7;

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

const BusinessContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 450px);
  background-color: #fff;
  border-radius: 15px 15px;
  margin-bottom: 30px;
  min-height: 100vh;
`;

const ShortInfoTitle = styled.div`
  flex-basis: 70px;
  list-style: none;
  width: 180px;
  font-weight: 600;
  text-transform: uppercase;
  color: #0165ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: #0165ff;
  border-bottom: 3px solid #0165ff;
  margin-left: 50px;
  padding: 20px 0px;

  & > img {
    width: 25px;
    height: 25px;
  }

  & > h2 {
    font-size: 14px;
    padding-left: 20px;
  }
`;

const BusinessContext = styled.div`
  border-top: 1px solid #f4f5f7;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Short = styled.div`
  background-color: #f4f5f7;
  width: 370px;
  height: calc(100% - 5px);
  margin-left: 5px;
  padding-top: 5px;
  border-radius: 0 0 0 10px;
  flex-basis: 370px;
`;

const Long = styled.div`
  width: calc(1000% - 370px);
  height: 90%;
`;

export default App;
