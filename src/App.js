import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Calender from './pages/Calender/Calender';
import Map from './pages/Map/Map';
import Table from './pages/Table/Table';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderDashboard from './components/HeaderDashboard/HeaderDashboard';


function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='dashboard-container'>
          <HeaderDashboard/>
          <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path = "/calender" element= {<Calender/>}/>
          <Route path = "/map" element= {<Map/>}/>
          <Route path = "/table" element= {<Table/>}/>
      </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
