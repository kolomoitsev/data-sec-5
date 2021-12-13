import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { PaymentForm } from './components/paymentForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaymentForm />} />
            </Routes>
        </Router>
    );
}
export default App;
