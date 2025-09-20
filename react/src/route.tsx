import Layout from "./components/layout";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Menu from "./menu";
 export  const routeApp=[
    {
        path:'/',
         element: <Layout/>,
        errorElement: <h2>Mauvaise route</h2>,
        children: [
            { index:true , element:<Accueil/>},
            {path:'about', element:<About/>},
            {path:'menu', element:<Menu/>},
            {path:'contact', element:<h1>Mon contact</h1>},
            {path:'*', element:<h1>No find page </h1>}       
            
        ]
    }
]