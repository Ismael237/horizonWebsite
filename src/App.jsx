import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import Contact from './pages/Contact/Contact';

function Inter({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Inter><Homepage /></Inter>}></Route>
            <Route path="/Services" element={<Inter><ServicesPage /></Inter>}></Route>
            <Route path="/Contact" element={<Inter><Contact /></Inter>}></Route>
        </Routes>
    )
}

export default App;
