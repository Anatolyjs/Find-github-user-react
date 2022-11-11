import s from './Paginator.module.scss';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        key={i}
        onClick={() => {
          props.onPageChanged(i);
        }}
        className={i === props.currentPage ? s.active : ""}
      >
        {i}
      </span>
    );
  }
  let startPage = props.currentPage - 5 < 0 ? 0 : props.currentPage - 5;
  let endPage =
    props.currentPage + 5 > pages.length ? pages.length : props.currentPage + 5;
  let actuallPages = pages.slice(startPage, endPage);

  const onPrevPageChanges = () => {
    if (props.currentPage > 1) {
      props.onPageChanged(props.currentPage - 1);
    }
  }
  const onNextPageChanges = () => {
    if (props.currentPage < pagesCount) {
      props.onPageChanged(props.currentPage + 1);
    }
  }
  return (
    <div className={s.pages__number}>
      <div className={s.page__arrow} onClick={onPrevPageChanges}>
        <div className={s.arrow__next} />
      </div>
      {actuallPages}
      <div className={s.page__arrow} onClick={onNextPageChanges}>
        <div className={s.arrow__prev} />
      </div>
    </div>
  );
};

export default Paginator;
