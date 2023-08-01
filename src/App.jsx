import React from 'react'
import './App.css';
import HomePage from './pages/homePage';
import SkeletonPage from './components/skeleton';
import WorkPage from './pages/work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EducationTimeline } from './pages/education';
import PublicationsPage from './pages/publications';
import VolunteeringPage from './pages/volunteering';
import PersonalPage from "./pages/personal";
import {Pub} from './pages/individualPub'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  green,
  // purple,
  grey
} from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import {fetchDataAndUpdateItems} from "./commons/commons";
import pubData from "./content/publications.yml";
const theme = createTheme({
  palette: {
    primary: {
      main: '#639',
    },
    secondary: {
      main: green[600],
    },
    background: {
      default: grey[100],
      // paper: '#221212',
    },
  },
});

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <>
  //     <SkeletonPage>
  //       <HomePage/>
  //     </SkeletonPage>
  //     </>
  //   }, {
  //     path: "work",
  //     element: <>
  //     <SkeletonPage>
  //       <WorkPage/>
  //     </SkeletonPage>
  //     </>
  //   }
  // ]);

  const [pubItems, setPubItems] = React.useState([])
  React.useEffect(fetchDataAndUpdateItems(pubData, setPubItems), [])

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {/* <SkeletonPage> */}
          <Routes>
            <Route path="/" element={<SkeletonPage/>}>
              <Route index element={<HomePage/>} />
              <Route path="work" element={ <WorkPage/>} />
              <Route path='education' element={ <EducationTimeline/>} />
              <Route path="publications">
                <Route index element={ <PublicationsPage/> } />
                {pubItems.map((pub) => <Route path={pub.stub} element={<Pub pub={pub}/>} key={pub.stub}/>)}
                {/*{pubs().map(([title, pubComponent]) => <Route path={title} element={pubComponent} key={title}/>)}*/}
              </Route>
              <Route path="volunteering" element={ <VolunteeringPage/> } />
              <Route path="personal" element={ <PersonalPage/> }/>
            </Route>

          </Routes>

          {/* <Link to={'/work'} component={RouterLink}>Work</Link> */}

          {/* <br/><br/>
          <Link to={'/work'} component={RouterLink}>Work</Link>
          <br/><br/> <Link to={'/work'} component={RouterLink}>Work</Link>
          <br/><br/> <Link to={'/work'} component={RouterLink}>Work</Link>
          <br/><br/> */}
          {/* </SkeletonPage> */}

        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
