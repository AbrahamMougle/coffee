import Layout from "./components/layout";
import Accueil from "./pages/Accueil";
 export  const routeApp=[
    {
        path:'/',
         element: <Layout/>,
        errorElement: <h2>Mauvaise route</h2>,
        children: [
            { index:true , element:<Accueil/>},
            {path:'about', element:<h1>Mon a propos</h1>},
            {path:'menu', element:<h1>Mon menu</h1>},
            {path:'contact', element:<h1>Mon contact</h1>},
            {path:'*', element:<h1>No find page </h1>}       
            
        ]
    }
]