import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import React from "react";
import ComponentWrapper from "./style_components/ComponentWrapper";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, k) => (
					<Route
						key={k}
						path={`/${route.path}`}
						element={
							// route.page
							<React.Suspense>
								<ComponentWrapper
									Component={React.lazy(() =>
										import(`./layouts/${route.pageName}`)
									)}
								/>
							</React.Suspense>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
