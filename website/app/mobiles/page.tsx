import { redirect } from 'next/navigation';

export default function MobilesPage() {
  redirect('/buy-refurbished?category=phones');
}
