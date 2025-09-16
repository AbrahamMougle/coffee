
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeApp } from "./route";
const router=createBrowserRouter(routeApp)
function AppRouter() {
  return <RouterProvider router={router} />;
}
export default function App() {
  return <AppRouter />; 
}