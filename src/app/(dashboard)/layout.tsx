"use client"; // This marks the file as a Client Component

import { useState } from 'react';
import { VPSConnectButton } from "@app/components/ethereum/connect-button";
import Sidebar from "@app/components/layout/sidebar";
import HoldersAreaPage from './page';
import StakingPage from '@app/app/(dashboard)/staking/page';

function DashboardComponent() {
  return <HoldersAreaPage />;
}

function StakingComponent() {
  return <StakingPage />;
}

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');


  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <DashboardComponent />;
      case 'Staking':
        return <StakingComponent />;
      default:
        return <></>;
    }
  };

  return (
    <div className="min-h-screen w-full pb-[57px] md:pb-0 md:pl-[56px]">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="flex flex-col">
        <header className="fixed w-full md:w-[calc(100%-56px)] top-0 z-50 flex h-[57px] items-center gap-1 border-b bg-background px-4 justify-between">
          <div className="font-medium">
            VPS AI Community Dashboard
          </div>
          <VPSConnectButton />
        </header>
        <main className="flex-1 overflow-auto">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}
