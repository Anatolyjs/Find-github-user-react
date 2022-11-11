import { connect } from "react-redux";
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        user: state.bodyPage.user,
        isFetching: state.bodyPage.isFetching
    }
}

export default connect(mapStateToProps, null)(Body);