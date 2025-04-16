import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.tableHeader}>Type</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableRow}>
            <td className={styles.tableCell}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td className={styles.tableCell}>{amount}</td>
            <td className={styles.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
