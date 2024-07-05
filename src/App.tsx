import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from './components/onnOff/onOff';
import {UncontrolAcc} from './components/Accordion/UncontrolAcc';
import {UnControlRating} from './components/Rating/UnControlRating';

function App() {
  return (
    <div className="App">

        {/*console.log("rendering App")*/}

        <OnOff />
        <UncontrolAcc titleValue={"Menu"}/>
        <UnControlRating/>
        {/*<OnOff on={true}/>*/}
        {/*<OnOff on={false}/>*/}


        {/*<AppTitle title = {"This is APP Componet"}/>*/}
        {/*<AppTitle title = {"My friend"}/>*/}
        {/*Article 1*/}
        {/*<Rating value = {3}/>*/}
        {/*Article 2*/}
        {/*<Rating value = {0}/>*/}
        {/*<Rating value = {1}/>*/}
        {/*<Rating value = {2}/>*/}
        {/*<Rating value = {3}/>*/}
        {/*<Rating value = {4}/>*/}
        {/*<Rating value = {5}/>*/}
        {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}


    </div>
  );
}

type AppTitleProps = {
    title: string
}

function AppTitle(props: AppTitleProps) {
    console.log("rendering AppTitle")
    return <>{props.title}</>
}



export default App;
