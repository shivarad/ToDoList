import Item from '../item/item';
import TabBar from '../tab-bar/tabBar'
import {ListContainer} from './listStyles';

const List=({items})=>(
    <ListContainer className='list'>
        <Item>

        </Item>
        
        <TabBar></TabBar>
    </ListContainer>
)

export default List;