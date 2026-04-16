import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Container from '../components/layouts/Container';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="mt-8 lg:mt-16 mb-12 lg:mb-20 flex justify-center">
        <div className="w-full max-w-[500px]">
          <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-2">
            Register
          </h1>
          <p className="font-montserrat text-sm lg:text-base text-black mb-8 lg:mb-12">
            Already have an account?{' '}
            <Link to="/login" className="text-green font-bold underline">Login</Link>
          </p>

          {error && (
            <p className="font-montserrat text-sm text-red-500 mb-4 p-3 bg-red-50 rounded-10p">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
            <div>
              <FormInput label="Full Name" star={true} placeholder="Amelia Watson" value={form.name} onChange={handleChange} name="name" />
            </div>
            <div>
              <FormInput label="Email Address" star={true} inpType="email" placeholder="amelia.watson@eshop.com" value={form.email} onChange={handleChange} name="email" />
            </div>
            <div>
              <FormInput label="Password" star={true} inpType="password" placeholder="Min. 6 characters" value={form.password} onChange={handleChange} name="password" />
            </div>
            <Button text={loading ? 'Creating account...' : 'Create Account'} className="w-full" flexGrow={true} />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
