import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/onnOff/onOff';
import {UncontrolAcc} from './components/Accordion/UncontrolAcc';
import {UnControlRating} from './components/Rating/UnControlRating';
import {useState} from 'react';
import {UnControlledOnOff} from './components/onnOff/UnControlledOnOff';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] =useState<boolean>(true)
  let [switchOn, switchSetOn] =useState<boolean>(true)
  return (
    <div className="App">

        {/*console.log("rendering App")*/}

        <Rating value = {ratingValue} onClick = {setRatingValue}/>
        <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
        {/*<UncontrolAcc titleValue={"Menu"}/>*/}
        {/*<UnControlRating/>*/}
        <OnOff on ={switchOn} onChange={on => {switchSetOn(on)}}/>
        <UnControlledOnOff onChangeOn = {switchSetOn}/> {switchOn.toString()}
        {/*<OnOff on={false}/>*/}


        {/*<AppTitle title = {"This is APP Componet"}/>*/}
        {/*<AppTitle title = {"My friend"}/>*/}
        {/*Article 1*/}

        {/*Article 2*/}
        {/*<Rating value = {0}/>*/}
        {/*<Rating value = {1}/>*/}
        {/*<Rating value = {2}/>*/}
        {/*<Rating value = {3}/>*/}
        {/*<Rating value = {4}/>*/}
        {/*<Rating value = {5}/>*/}

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
