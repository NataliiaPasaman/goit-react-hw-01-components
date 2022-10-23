import css from "components/TransactionHistory/TransactionHistory.module.css";
import PropsTypes from "prop-types";

/** Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.
У прикладі наведена розмітка двох транзакцій.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
 */

export const TransactionHistory = ({ items }) => {
    <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {items.map(item => {
        return (
            <tbody key={item.id}>
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      </tbody>
        )
  }
    )}
</table>
}

TransactionHistory.propsTypes = {
    items: PropsTypes.arrayOf(PropsTypes.exact({
      type: PropsTypes.string.isRequired,
      amount: PropsTypes.string.isRequired,
      currency: PropsTypes.string.isRequired,
    })),
  }