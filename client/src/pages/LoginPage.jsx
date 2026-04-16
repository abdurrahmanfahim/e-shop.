import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Container from '../components/layouts/Container';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="mt-8 lg:mt-16 mb-12 lg:mb-20 flex justify-center">
        <div className="w-full max-w-[500px]">
          <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-2">
            Login
          </h1>
          <p className="font-montserrat text-sm lg:text-base text-black mb-8 lg:mb-12">
            Don't have an account?{' '}
            <Link to="/register" className="text-green font-bold underline">Register</Link>
          </p>

          {error && (
            <p className="font-montserrat text-sm text-red-500 mb-4 p-3 bg-red-50 rounded-10p">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
            <div>
              <FormInput
                label="Email Address"
                star={true}
                inpType="email"
                placeholder="amelia.watson@eshop.com"
                value={form.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <FormInput
                label="Password"
                star={true}
                inpType="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="flex justify-between items-center">
              <Link to="#" className="font-montserrat text-sm text-green underline">
                Forgot password?
              </Link>
            </div>
            <Button
              text={loading ? 'Logging in...' : 'Login'}
              className="w-full"
              flexGrow={true}
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
