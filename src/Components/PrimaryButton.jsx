function PrimaryButton({title, action}) {
    return ( 
        <button onClick={(e) => {action(e)}}>{title}</button>
     );
}

export default PrimaryButton;