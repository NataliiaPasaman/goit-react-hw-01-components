// // import { getByTitle } from "@testing-library/react";
// import data from "data/data";
import css from "components/Statistics/Statistics.module.css";
import PropsTypes from "prop-types";
/* Опис компонента <Statistics>
Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.

title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.
Компонент повинен створювати DOM елемент наступної структури.
 */

export const Statistics = (title, stats) => {
  <section className={css.statistics}>
    {title} ? <h2 className={css.title}>{title}</h2> : null
    return <ul className={css.stat-list}>
      {stats.map(stat => {
        <li className={css.item} key={stat.id}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
        </li>
      }
      )}
    </ul>
  </section>
}

/** 
ОПИС PROPTYPES!!!!!!!
*/
Statistics.PropsTypes = {
  title: PropsTypes.string,
  stats: PropsTypes.arrayOf(PropsTypes.exact({
    id: PropsTypes.string.isRequired,
    label: PropsTypes.string.isRequired,
    percentage: PropsTypes.number.isRequired,
  })),
}