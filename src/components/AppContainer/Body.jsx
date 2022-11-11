import Main from "./Main/Main";
import HeaderContainer from "./Header/HeaderContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import s from "./Body.module.scss";
import Preloader from "./Preloader/Preloader";


const Body = (props) => {
    return (
        <div className={s.body}>
            <HeaderContainer />
            {props.isFetching && <Preloader />}
            {Object.keys(props.user).length ? <ProfileContainer /> : <Main />}
        </div>
    )
}

export default Body;