import type { ButtonType } from "./type/button.type";


const Button = ({children, onClick, disabled=false, variant='primary',className=''}:ButtonType) => {
     console.log(`btn-${variant}`);
    return <button className={`btn btn-${variant} ${className}`} onClick={onClick} disabled={disabled}>
        {children}
    </button>
}
export default Button;