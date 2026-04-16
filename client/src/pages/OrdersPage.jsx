import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import Container from '../components/layouts/Container';

const statusColor = {
  pending:    'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  shipped:    'bg-purple-100 text-purple-700',
  delivered:  'bg-green-100 text-green-700',
  cancelled:  'bg-red-100 text-red-700',
};

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => setOrders(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <div className="mt-8 lg:mt-16 mb-12 lg:mb-20">
        <div className="flex gap-2 items-center font-montserrat text-sm lg:text-base text-black mb-8 lg:mb-12">
          <Link to="/" className="hover:text-green">Home</Link> <span>|</span>
          <span className="font-bold">My Orders</span>
        </div>

        <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-8">
          My Orders
        </h1>

        {loading ? (
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse h-24 bg-lightGray rounded-15p" />
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-montserrat text-lg text-black mb-6">No orders yet.</p>
            <Link to="/all-products">
              <button className="font-montserrat font-bold text-base text-green underline">Start Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div key={order._id} className="p-4 lg:p-8 bg-white border border-transparent hover:border-black/20 rounded-15p transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                  <div>
                    <p className="font-montserrat text-xs text-black/50 uppercase tracking-widest mb-1">Order ID</p>
                    <p className="font-poppins font-semibold text-sm lg:text-base">{order._id}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-montserrat text-xs font-bold px-3 py-1 rounded-full capitalize ${statusColor[order.status] || 'bg-gray-100 text-gray-600'}`}>
                      {order.status}
                    </span>
                    <p className="font-poppins font-bold text-lg lg:text-xl text-green">
                      ${order.total?.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {order.items?.map((item, i) => (
                    <span key={i} className="font-montserrat text-xs bg-lightGray px-3 py-1 rounded-full line-clamp-1">
                      {item.title} × {item.quantity}
                    </span>
                  ))}
                </div>
                <p className="font-montserrat text-xs text-black/40 mt-3">
                  {new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default OrdersPage;
