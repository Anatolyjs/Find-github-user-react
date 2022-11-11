import preloader from '../../../img/preloader.gif';
import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt=''/>
        </div> 
    )
}

export default Preloader;