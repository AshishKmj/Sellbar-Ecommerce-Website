import { redirect } from 'next/navigation';

export default function TabletsPage() {
  redirect('/buy-refurbished?category=tablets');
}
