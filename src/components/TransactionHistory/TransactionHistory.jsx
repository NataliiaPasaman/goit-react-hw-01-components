import css from 'components/TransactionHistory/TransactionHistory.module.css';
import PropsTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

// ОПИС PROPTYPES!!!!!!!!!
TransactionHistory.propsTypes = {
  items: PropsTypes.arrayOf(
    PropsTypes.exact({
      type: PropsTypes.string.isRequired,
      amount: PropsTypes.string.isRequired,
      currency: PropsTypes.string.isRequired,
    })
  ),
};
