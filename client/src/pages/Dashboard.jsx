import { useContext } from 'react';
import AuthContext from '../context/auth.jsx';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800">Welcome, {user?.name}</h2>
              <p className="text-gray-600">Email: {user?.email}</p>
              <p className="text-gray-600">Membership: {user?.membershipPlan}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium text-orange-800">Workout Stats</h3>
                <p className="mt-2 text-gray-700">View your workout history and progress</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800">Membership</h3>
                <p className="mt-2 text-gray-700">Manage your membership plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;