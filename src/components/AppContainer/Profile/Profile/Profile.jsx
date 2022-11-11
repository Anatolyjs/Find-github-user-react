import s from "../Profile.module.scss";
import Paginator from "./Paginator";

const Profile = (props) => {
    let repositories = props.user.repositories.map((el) => (
      <div key={el.id} className={s.repos__item}>
        <div className={s.repos__name}><a href={el.html_url} target='blank'>{el.name}</a></div>
        <div className={s.repos__description}>
          {el.description ? el.description : "No description"}
        </div>
      </div>
    ));
    const onPageChanged = (page) => {
      props.onPageChanged(props.user.login, page, 4);
    }
    return (
      <div className={s.user}>
        <div className={s.user__info}>
          <div className={s.user__photo}>
            <img src={props.user.avatar_url} alt="" />
          </div>
          <div className={s.user__name}>{props.user.name}</div>
          <div className={s.user__nick}><a href={props.user.html_url} target='blank'>{props.user.login}</a></div>
          <div className={s.user__followers}>
            <span className={s.followers}>
              <i className="fa fa-users" aria-hidden="true"></i>
              {props.user.followers} followers
            </span>
            <span className={s.follows}>
              <i className="fa fa-user" aria-hidden="true"></i>
              {props.user.following} following
            </span>
          </div>
        </div>
        <div className={s.user__repos}>
          <div className={s.repos__title}>
            Repositories ({props.user.public_repos})
          </div>
          <div className={s.repost__container}>{repositories}</div>
        </div>
        <div className={s.repos__pages}>
          <Paginator onPageChanged={onPageChanged} totalUsersCount={props.totalRepoCount} pageSize={props.pageSize} currentPage={props.currentPage}/>
        </div>
      </div>
    );
}

export default Profile;