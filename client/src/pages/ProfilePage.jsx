import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import api from '../api/api';
import Container from '../components/layouts/Container';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({ name: user?.name || '', address: user?.address || {} });
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '' });
  const [profileMsg, setProfileMsg] = useState('');
  const [passMsg, setPassMsg] = useState('');
  const [profileErr, setProfileErr] = useState('');
  const [passErr, setPassErr] = useState('');

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileErr(''); setProfileMsg('');
    try {
      await api.put('/auth/profile', profile);
      setProfileMsg('Profile updated successfully');
    } catch (err) {
      setProfileErr(err.response?.data?.message || 'Update failed');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPassErr(''); setPassMsg('');
    try {
      await api.put('/auth/password', passwords);
      setPassMsg('Password updated successfully');
      setPasswords({ currentPassword: '', newPassword: '' });
    } catch (err) {
      setPassErr(err.response?.data?.message || 'Update failed');
    }
  };

  return (
    <Container>
      <div className="mt-8 lg:mt-16 mb-12 lg:mb-20">
        <div className="flex gap-2 items-center font-montserrat text-sm lg:text-base text-black mb-8">
          <Link to="/" className="hover:text-green">Home</Link> <span>|</span>
          <span className="font-bold">Profile</span>
        </div>

        <h1 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[40px] lg:leading-17 mb-8 lg:mb-12">
          My Profile
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Profile form */}
          <div className="w-full lg:flex-1">
            <h2 className="font-poppins text-2xl font-semibold mb-6">Personal Info</h2>
            {profileMsg && <p className="font-montserrat text-sm text-green mb-4 p-3 bg-green/10 rounded-10p">{profileMsg}</p>}
            {profileErr && <p className="font-montserrat text-sm text-red-500 mb-4 p-3 bg-red-50 rounded-10p">{profileErr}</p>}
            <form onSubmit={handleProfileSubmit} className="flex flex-col gap-4 lg:gap-6">
              <FormInput label="Full Name" star={true} placeholder="Your name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} name="name" />
              <FormInput label="Street Address" placeholder="123 Main St" value={profile.address?.street || ''} onChange={(e) => setProfile({ ...profile, address: { ...profile.address, street: e.target.value } })} name="street" />
              <div className="flex gap-4">
                <div className="flex-1">
                  <FormInput label="City" placeholder="City" value={profile.address?.city || ''} onChange={(e) => setProfile({ ...profile, address: { ...profile.address, city: e.target.value } })} name="city" />
                </div>
                <div className="flex-1">
                  <FormInput label="Country" placeholder="Country" value={profile.address?.country || ''} onChange={(e) => setProfile({ ...profile, address: { ...profile.address, country: e.target.value } })} name="country" />
                </div>
              </div>
              <Button text="Save Changes" className="w-full sm:w-auto" />
            </form>
          </div>

          {/* Password form */}
          <div className="w-full lg:w-[420px]">
            <h2 className="font-poppins text-2xl font-semibold mb-6">Change Password</h2>
            {passMsg && <p className="font-montserrat text-sm text-green mb-4 p-3 bg-green/10 rounded-10p">{passMsg}</p>}
            {passErr && <p className="font-montserrat text-sm text-red-500 mb-4 p-3 bg-red-50 rounded-10p">{passErr}</p>}
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4 lg:gap-6">
              <FormInput label="Current Password" star={true} inpType="password" placeholder="••••••••" value={passwords.currentPassword} onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })} name="currentPassword" />
              <FormInput label="New Password" star={true} inpType="password" placeholder="Min. 6 characters" value={passwords.newPassword} onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })} name="newPassword" />
              <Button text="Update Password" className="w-full sm:w-auto" />
            </form>

            <div className="mt-8 pt-8 border-t border-[#CBCBCB]">
              <button onClick={logout} className="font-montserrat font-bold text-base text-red-500 hover:underline">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
