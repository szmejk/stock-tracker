import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CompanyOverview } from './views/CompanyOverview/CompanyOverview'
import { Portfolio } from './views/Portfolio/Portfolio'

export const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/overview/:companySymbol" element={<CompanyOverview />} />
        </Routes>
    </Router>
)
