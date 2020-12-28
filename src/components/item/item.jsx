import {ItemContainer,ItemLabel,RemoveBtn,CircularCheckBox,SVGCheckmark} from './itemStyles'
const Item=()=>(
    
<ItemContainer>

    <ItemLabel>
        <CircularCheckBox  />
        <SVGCheckmark aria-hidden="true"  width="16" height="16" viewBox="0 0 36 36">
            <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"></path>
        </SVGCheckmark>
        create
    </ItemLabel>
    <RemoveBtn className='removeBtn'>&#x2715;</RemoveBtn>

</ItemContainer>

)

export default Item;