"use strict";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Result from './pages/Result';
import Profile from './pages/Profile';
import CreateGroup from './pages/CreateGroup';
import JoinGroup from './pages/JoinGroup';

const App = () => {
  return (
    <div className="font-NotoSansJP">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/result" element={<Result />} />
          <Route path="/create" element={<CreateGroup />} />
          <Route path="/join" element={<JoinGroup />} />
          {/* 他のルートを追加する場合はここに記述 */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;