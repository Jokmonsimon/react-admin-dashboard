import "./WidgetLarge.css";

export default function WidgetLarge() {
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-table-row">
          <th className="widget-large-table-head">Customers</th>
          <th className="widget-large-table-head">Date</th>
          <th className="widget-large-table-head">Amount</th>
          <th className="widget-large-table-head">Status</th>
        </tr>
      </table>
    </div>
  );
}
