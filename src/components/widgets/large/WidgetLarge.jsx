import "./WidgetLarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widget-large-button " + type}>{type}</button>;
  };
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest Transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-table-row">
          <th className="widget-large-table-heading">Customers</th>
          <th className="widget-large-table-heading">Date</th>
          <th className="widget-large-table-heading">Amount</th>
          <th className="widget-large-table-heading">Status</th>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="images/Ojok.jpg"
              alt=""
              className="widget-large-user-image"
            />
            <span className="widget-large-usernane">Ojok Simon Peter</span>
          </td>
          <td className="widget-large-date">01 Jan 2022</td>
          <td className="widget-large-amount">UGX 376,500</td>
          <td className="widget-large-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="images/Ojok.jpg"
              alt=""
              className="widget-large-user-image"
            />
            <span className="widget-large-usernane">Ojok Simon Peter</span>
          </td>
          <td className="widget-large-date">01 Jan 2022</td>
          <td className="widget-large-amount">UGX 376,500</td>
          <td className="widget-large-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="images/Ojok.jpg"
              alt=""
              className="widget-large-user-image"
            />
            <span className="widget-large-usernane">Ojok Simon Peter</span>
          </td>
          <td className="widget-large-date">01 Jan 2022</td>
          <td className="widget-large-amount">UGX 376,500</td>
          <td className="widget-large-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="images/Ojok.jpg"
              alt=""
              className="widget-large-user-image"
            />
            <span className="widget-large-usernane">Ojok Simon Peter</span>
          </td>
          <td className="widget-large-date">01 Jan 2022</td>
          <td className="widget-large-amount">UGX 376,500</td>
          <td className="widget-large-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widget-large-table-user">
            <img
              src="images/Ojok.jpg"
              alt=""
              className="widget-large-user-image"
            />
            <span className="widget-large-usernane">Ojok Simon Peter</span>
          </td>
          <td className="widget-large-date">01 Jan 2022</td>
          <td className="widget-large-amount">UGX 376,500</td>
          <td className="widget-large-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
