"use client";



const CustomButton = ({ containerStyles, title }) => {


    // const handleClick = () => {
    //     console.log('Button clicked!');
    // }


    console.log(title);

    return (
        <button
            type={"button"}
            className={`custom-btn ${containerStyles}`}
        // onClick={handleClick}
        >
            <span>{title}</span>
        </button>
    );
}




export default CustomButton;