import {useContext} from 'react';
import {ItemContainer,ItemLabel,RemoveBtn,CircularCheckBox,SVGCheckmark} from './itemStyles';
import {ThemeContext} from '../../providers/theme/theme-provider';

const Item=()=>{
    const {darkMode}=useContext(ThemeContext);

    return( 
<ItemContainer darkMode={darkMode}>

    <ItemLabel >
        <CircularCheckBox darkMode={darkMode} />
        <SVGCheckmark aria-hidden="true"  width="16" height="16" viewBox="0 0 36 36" darkMode={darkMode}>
            <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"></path>
        </SVGCheckmark>
        create
    </ItemLabel>
    <RemoveBtn className='removeBtn' >&#x2715;</RemoveBtn>

</ItemContainer>

)}

export default Item;