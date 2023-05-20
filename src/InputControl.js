
const InputControl = (props) => {
    return (
        <div className="flex flex-col w-full my-2 ml-2 mr-10">
            { props.label && <label className="text-sm">{props.label}</label> }
            <input className="text-lg bg-[#EBFFF7] bg-transparent focus:outline-none focus:bg-transparent" type="text" {...props} />
        </div>
    )
}

export default InputControl;