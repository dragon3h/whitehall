import MainNavigation from '@/components/main-navigation/main-navigation';

export default function MainHeader() {
  return (
    <header className='col-span-2 flex bg-amber-100 h-14'>
      <div>Logo2</div>
      <MainNavigation />
      <div>User</div>
    </header>
  );
}