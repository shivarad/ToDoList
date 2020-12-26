import './item.css'

const Item=()=>(
    
<div className="item ">

    <label>
        <input type='checkbox' className="item-circle " />
        <svg aria-hidden="true" class="checkmark " width="16" height="16" viewBox="0 0 36 36">
            <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"></path>
        </svg>
        create
    </label>
    <button className="removeBtn ">&#x2715;</button>

</div>

)

export default Item;