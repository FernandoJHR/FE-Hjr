import react, {useState, useEffect} from "react";

function Form({addOrUpdateItem, itemToEdit}) {const[inputValue,setinputValue] = useState(");

useEffect(()=> {
if (itemToEdit){
    setinputValue(itemToEdit.Value);
} else {
    setinputValue(");
}
},[itemToEdit]);
const handleSubmit = (e) =>{
    e.preventDefault();
    if (inputValue.trim()){
        addOrUpdateItem(inputValue);
        setinputValue(");
    }
};

return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={(e)=>
    setinputValue(e.target.value)}
    />
    <button
    </form>
)