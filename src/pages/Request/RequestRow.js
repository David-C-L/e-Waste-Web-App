import Request from './Request';
import './RequestRow.css';

function RequestRow(props) {
    console.log(props.listings)
    return (
        <div className='Row'>
            <>
            { 
            props.listings.length > 0
                ? <Request listing={props.listings[0]}/>
                : <></> 
            }
            {
            props.listings.length > 1
                ? <Request listing={props.listings[1]}/>
                : <></> 
            }
            {
            props.listings.length > 2
                ? <Request listing={props.listings[2]}/>
                : <></> 
            }
            </>
        </div>
    );
}

export default RequestRow;