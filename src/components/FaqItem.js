import Collapsible from 'react-collapsible';


const FaqItem = (props) => {
    return (
        <Collapsible trigger={props.question}>
            <p>{props.answer}</p>

        </Collapsible>
    );
}

export default FaqItem;