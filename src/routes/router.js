import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import routes from "./index";

function router() {
    return (
        <Router>
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))
                }
            </Routes>
        </Router>
    )
}

export default router