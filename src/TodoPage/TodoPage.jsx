
import {CenterWrapper,InfoTxt,Container,BackGroundImage} from './TodoPageStyles';
import Header from '../components/header/header';
import  List  from "../components/list/list";
import TextBox from '../components/textBox/txtBox'

const TodoPage=()=>(
    <Container>
        <BackGroundImage>
    <CenterWrapper>
        <Header/>
        <TextBox/>
        <List />
        <InfoTxt>Drag and drop to reorder list</InfoTxt>
    </CenterWrapper>
    </BackGroundImage>
    </Container>
)

export default TodoPage;