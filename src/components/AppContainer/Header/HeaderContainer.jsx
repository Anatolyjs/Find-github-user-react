import { connect } from "react-redux";
import Header from "./Header";
import { setTotalRepoCountAC, setUserAC, setUserReposAC, setUser, toglePreloaderAC } from "../../../redux/body-reducer";

const mapStateToProps = (state) => {
    return {
        nameValue: state.bodyPage.nameValue,
        pageSize: state.bodyPage.pageSize,
        totalUsersCount: state.bodyPage.totalUsersCount,
        currentPage: state.bodyPage.currentPage,
    }
};

const HeaderContainer = connect(mapStateToProps, {setUserAC, setUserReposAC, setTotalRepoCountAC, setUser, toglePreloaderAC})(Header);
export default HeaderContainer;