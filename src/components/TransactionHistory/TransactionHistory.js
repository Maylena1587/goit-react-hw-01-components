import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
function TransactionHistory({ items }) {
    return (
    <table class={history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
     {items.map(({ id, type, amount, currency }) => (
       <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
   ))
                    
    }
  </tbody>
</table>
    )
}

Transactions.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
