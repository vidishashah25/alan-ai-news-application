import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const alanKey = '900a3555ab104bdc3bc9ed6228dcc7d52e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command})=>{
                if(command==='testCommand')
                {
                    alert('This code executed');
                }
            }
        })
    },[])

    return(
        <div>
            <h1>
                Alan AI News Application
            </h1>
        </div>
    );
}

export default App;