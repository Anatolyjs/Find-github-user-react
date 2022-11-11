import {getCurrentRepo, getUser} from '../api/api';

const SET_USER = 'SET_USER',
    SET_USER_REPOS = 'SET_USER_REPOS',
    FIND_USER_NAME = 'FIND_USER_NAME',
    SET_TOTAL_REPO_COUNT = 'SET_TOTAL_REPO_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    TOOGLE_PRELOADER = 'TOOGLE_PRELOADER';

let initialState = {
    user: {},
    pageSize: 4,
    totalRepoCount: 0,
    currentPage: 1,
    isFetching: false
}

const bodyReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                nameValue: ''
            }
        case SET_USER_REPOS:
            return {
                ...state,
                user: {...state.user, repositories: [...action.repos]},
                repos: action.repos
            }
        case SET_TOTAL_REPO_COUNT: 
            return {
                ...state,
                totalRepoCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOOGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state;

    }
}

export const setUserAC = (user) => ({type: SET_USER, user: user});
export const setUserReposAC = (repos) => ({type: SET_USER_REPOS, repos: repos});
export const setTotalRepoCountAC = (count) => ({type: SET_TOTAL_REPO_COUNT, count: count});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page: page});
export const toglePreloaderAC = (value) => ({type: TOOGLE_PRELOADER, value: value});
export default bodyReducer;

export const setRepos = (name, page, pageSize = 4) => async (dispatch) => {
    dispatch(toglePreloaderAC(true));
    const response = await getCurrentRepo(name, page, pageSize);
    dispatch(toglePreloaderAC(false));
    dispatch(setUserReposAC(response.data))
}

export const setUser = (name) => async (dispatch) => {
    dispatch(toglePreloaderAC(true));
    const responseUser = await getUser(name),
        responseRepos = await getCurrentRepo(name, 1, 4);
    const data = await Promise.all([responseUser, responseRepos]);

    dispatch(toglePreloaderAC(false));
    dispatch(setUserAC(data[0].data));
    dispatch(setTotalRepoCountAC(data[0].data.public_repos));  
    dispatch(setUserReposAC(data[1].data));
    dispatch(setCurrentPageAC(1));
}