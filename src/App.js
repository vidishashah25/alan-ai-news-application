import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './style'


const alanKey = '900a3555ab104bdc3bc9ed6228dcc7d52e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles})=>{
                if(command==='newHeadLines')
                {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command==='hilight')
                {
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                }
            }
        })
    },[])

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://aleshere.github.io/alan-ai-newsreader-react/static/media/alan-logo.d3e2c60f.jpg" className={classes.alanLogo} alt="Alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;