
import { createRoot } from 'react-dom/client'
import{jsx as _jsx} from "react/jsx-runtime.js"

import App from './App.jsx'
  
createRoot(document.getElementById('root')).render(

    // <MyApp /> 
    // MyApp() this can also work

    // reactElement //not worked 
    anotherElement, //it worked
    reactElement2 //it also worked

)

const anotherElement = (
    <a href = "https://google.com" target='_blank'>Visit google</a>
)

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click for google'
// }

const reactElement2 = React.createElement(
    'a',{
        href:'https://googgle.com',target:'_blank'
    },
    'click to visit'
)


function MyApp(){
    return(
        <div>
            <h1>Custom App in vite</h1>
        </div>
    )
}
