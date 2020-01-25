import React,{useRef} from 'react';

function TextInputWithFocusButton(){
    // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        //strict null checks need us to check if inputEl and current exist.
        // but once current exists, it is of type HTMLInputElement, thus it
        // has the method focus! ✅
        if(inputEl && inputEl.current){
            inputEl.current.focus();
            console.log(inputEl.current.value);
        }
    }

    return (
        <>
            {/* in addition, inputEl only can be used with input elements. */}
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>focus the input</button>
        </>
    )
}

export default TextInputWithFocusButton;