import List from "../list/list";
import {BodyContainer,InfoTxt} from './bodyStyles';

const Body=()=>{

    return(
    <BodyContainer >
        <List />
        <InfoTxt>Drag and drop to reorder list</InfoTxt>
    </BodyContainer>
 )
}



export default Body;