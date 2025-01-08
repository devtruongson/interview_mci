import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BlogDetail from './pages/detail/BlogDetail';
import Home from './pages/home/Home';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
