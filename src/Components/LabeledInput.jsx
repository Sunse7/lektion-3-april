function LabeledInput({label, placeholder, type, action, value}) {
    
    return ( 
        <section>
            <label htmlFor="">{label}</label>
            <input value={value} type={type} id="" placeholder={placeholder} onChange={(e) => action(e.target.value)} />
        </section>
     );
}

export default LabeledInput;