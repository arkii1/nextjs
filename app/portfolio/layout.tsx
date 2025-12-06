import NavHeader from '@/app/ui/portfolio/navheader';

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <main className="grow  md:overflow-y-auto md:p-12">{children}</main>
  );
}