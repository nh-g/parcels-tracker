import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,
   faShippingFast,
   faStoreAlt,
   faRocket} 
   from '@fortawesome/free-solid-svg-icons';

export default function StatusIcon({ orderStatus }) {
  return (
    <div className="StatusIcon">
      {orderStatus === "order-info-received" && (
        <FontAwesomeIcon icon={faRocket} color="rgba(34, 167, 240, 1)" />
      )}
      {orderStatus === "on-the-way" && (
        <FontAwesomeIcon icon={faShippingFast} color="rgba(34, 167, 240, 1)" />
      )}
      {orderStatus === "delivered" && (
        <FontAwesomeIcon icon={faCheckCircle} color="rgba(34, 167, 240, 1)" />
      )}
      {orderStatus === "ready-for-pickup" && (
        <FontAwesomeIcon icon={faStoreAlt} color="rgba(34, 167, 240, 1)" />
      )}
    </div>
  );
}
