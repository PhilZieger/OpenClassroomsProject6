import Arrow from '../../assets/Vector.png'
import { useState } from 'react'


function Collapse({ name, text, source, etat }) {
    const [open, setOpen] = useState(etat)

    const toggle = (e) => {
        const move = e.target;
        if (open) {
            move.style.transform = 'rotate(0deg)';
        } else {
            move.style.transform = 'rotate(180deg)';
        }
        
        setOpen(!open);
      };
	return (
        <div className='kasa-about-collapse-box'>
            <div>
            <div className='kasa-about-collapse'>
                <h2>{name}</h2>
                <img id='arrow' alt="Arrow" src={Arrow} onClick={toggle} />
            </div>
            {open && (
                <div className='kasa-about-expend' id='kasa-expend'>
                {source === true && (
                    text.map(name => <span>{name}<br></br></span>)
                )}
                {source === false && (
                    <span>{text}</span>
                )}
                
                
                
                </div>
            )}
            </div>
        </div>
	)
}

export default Collapse