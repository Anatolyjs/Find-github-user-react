import { connect } from "react-redux";
import {setCurrentPageAC, setUserReposAC, setRepos} from "../../../redux/body-reducer";
import React from "react";
import Profile from "./Profile/Profile";

const ProfileContainer = (props) => {
  const onPageChanged = (name, page, pageSize) => {
    props.setCurrentPageAC(page);
    props.setRepos(name, page, pageSize)
  };

  return (
    <Profile
      totalRepoCount={props.totalRepoCount}
      pageSize={props.pageSize}
      user={props.user}
      currentPage={props.currentPage}
      onPageChanged={onPageChanged}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.bodyPage.user,
    pageSize: state.bodyPage.pageSize,
    totalRepoCount: state.bodyPage.totalRepoCount,
    currentPage: state.bodyPage.currentPage,
    nameValue: state.bodyPage.nameValue,
  };
};

export default connect(mapStateToProps, {setCurrentPageAC, setUserReposAC, setRepos})(ProfileContainer);
