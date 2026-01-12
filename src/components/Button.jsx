export default function Button(props) {
    const [ colorFondo, setColorFondo ] = useState("Red")

    function handleChangeColor() {
        setColorFondo("Blue")
    }

    return (
        <>
        <button
        onClick={handleChangeColor}
        style={{backgroundColor: colorFondo}}
        > 
        {props.label}
        </button>
        </>
    )
}