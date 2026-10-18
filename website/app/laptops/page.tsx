import { redirect } from 'next/navigation';

export default function LaptopsPage() {
  redirect('/buy-refurbished?category=laptops');
}
