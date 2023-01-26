import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';

function ContactMini(){
    const { ref, inView } = useInView({
        threshold: 0,
    });
    return(
        <div className="contactMiniBox">
            <div className="contactMini">
                <h3 ref={ref} className={`contactTitle${inView}`}>Entrons en</h3>
                <Link to={`../Contact`}>
                    <p className={`toContact${inView}`}>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default ContactMini