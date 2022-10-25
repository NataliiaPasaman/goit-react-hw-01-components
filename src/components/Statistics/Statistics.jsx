// import { getByTitle } from "@testing-library/react";
import css from 'components/Statistics/Statistics.module.css';
import PropsTypes from 'prop-types';

const getBgColor = () => {
  const r = (Math.random() * (255 - 1) + 1).toFixed(0);
  const g = (Math.random() * (255 - 1) + 1).toFixed(0);
  const b = (Math.random() * (255 - 1) + 1).toFixed(0);
  const rgb = `rgb(${r} ${g} ${b})`;
  return rgb;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} 
            style={{backgroundColor: getBgColor()}}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

/** 
ОПИС PROPTYPES!!!!!!!
*/
Statistics.propsTypes = {
  title: PropsTypes.string,
  stats: PropsTypes.arrayOf(
    PropsTypes.exact({
      id: PropsTypes.string.isRequired,
      label: PropsTypes.string.isRequired,
      percentage: PropsTypes.number.isRequired,
    })
  ),
};
