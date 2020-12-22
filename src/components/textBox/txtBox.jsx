import './txtBox.css';

const TextBox =({isDarkMode})=>(

    <span >
        <input type="radio" disabled className={`${isDarkMode? 'dark-circle' :''} circle` }/>
        <input placeholder='Create a todo...' className={`${isDarkMode? 'dark-input' :''} input` }/>
    </span>
)

export default TextBox;