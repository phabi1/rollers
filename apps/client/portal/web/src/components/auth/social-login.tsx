import Link from 'next/link';

type Provider = {
  name: string;
  title: string;
  icon: string;
  bgColor?: string;
};

export function AuthSocialLogin() {
  const providers: Provider[] = [
    {
      name: 'google',
      title: 'Google',
      icon: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      icon: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg',
      bgColor: '#3b5998',
    },
    {
      name: 'microsoft',
      title: 'Microsoft',
      icon: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex gap-2">
        {providers.map((provider) => (
          <Link
            href={`https://localhost:3000/auth/provider/${provider.name}`}
            className="w-10 h-10 flex justify-center items-center rounded-full"
            key={provider.name}
            title={provider.title}
            style={{
              backgroundColor: provider.bgColor,
            }}
          >
            <img src={provider.icon} className='w-full h-auto' />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AuthSocialLogin;
