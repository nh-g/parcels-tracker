export default function StatusWording({ orderStatus }) {
  return (
    <div>
      {orderStatus === "order-info-received" && (
        <p className="status">Order info received</p>
      )}
      {orderStatus === "on-the-way" && <p className="status">On the way</p>}
      {orderStatus === "delivered" && <p className="status">Delivered</p>}
      {orderStatus === "ready-for-pickup" && (
        <p className="status">Ready for PickUp</p>
      )}
    </div>
  );
}
