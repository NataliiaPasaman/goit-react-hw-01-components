// import { getByTitle } from "@testing-library/react";
import css from "components/Statistics/Statistics.module.css";
import PropsTypes from "prop-types";
/* Опис компонента <Statistics>
Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.

Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.
 */

export const Statistics = ({ title, stats }) => {
  <section className={css.statistics}>
    {title} ? <h2 className={css.title}>{title}</h2> : null
    <ul className={css.stat_list}>{stats.map(stat => {
        return (<li className={css.item} key={stat.id}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
        </li>)
      }
      )}
    </ul>
  </section>
}

/** 
ОПИС PROPTYPES!!!!!!!
*/
Statistics.propsTypes = {
  title: PropsTypes.string,
  stats: PropsTypes.arrayOf(PropsTypes.exact({
    id: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    percentage: PropsTypes.number.isRequired,
  })),
}