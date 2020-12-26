import './tab-bar.css';

const TabBar=()=>(
    <div className='tabBar'>
        <button className='tabBtn'>3 items left</button>
        <div className='middleBtns'>
            <button className='tabBtn'>All</button>
            <button className='tabBtn'>Active</button>
            <button className='tabBtn'>Completed</button>
        </div>
        <button className='tabBtn'>Clear Completed</button>
    </div>    
)


export default TabBar;