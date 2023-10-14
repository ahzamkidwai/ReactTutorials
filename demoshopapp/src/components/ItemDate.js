import './ItemDate.css'

function ItemDate(props)
{
    return(
        <div className='mfg-date'>
            <div className='month'>{props.month} </div>
            <div className='day'> {props.day} </div>
            <div className='year'> {props.year} </div>
        </div>
    );
}

export default ItemDate;