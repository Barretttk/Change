import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Purpose from './Components/Purpose';
import Stories from './Components/Stories';
import AllStories from './Pages/AllStories';
import Appreciation from './Pages/Appreciation';
import EditStory from './Pages/EditStory';
import NewStory from './Pages/NewStory';
import ViewStory from './Pages/ViewStory';


const App = () => {
  return (
    <>
        <Nav />
        <Routes>
            <Route path={'/'} element= { <Navigate to='/home' /> }/>
            <Route path={'/home'} element= { <Purpose /> }/>

            <Route path={'/stories'} element= { <Stories /> }/>
                <Route index element={ <AllStories />} />
                <Route path=':id' element={<ViewStory/> } />  //figure out why its not showing
                <Route path='new' element= {<NewStory /> } />
                <Route path=':id/edit' element= { <EditStory />} />

            <Route path={'/appreciation'} element= { <Appreciation /> }/>

        </Routes>
    </>
  // anything you want on all pages goes above your Routes
  );
};
export default App;