import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    // Overall full-screen flex container to center the card
    // As per Layout Requirements: overall.definition: "flex justify-center items-center h-screen bg-background"
    <main
      className={cn(
        'flex justify-center items-center h-screen bg-background',
        className
      )}
    >
      {/* 
        Centered card container for the main content.
        As per Layout Requirements: overall.sizing.card: "w-[400px] p-6 rounded-md bg-surface shadow-md"
        - w-[400px]: Fixed width for the card.
        - p-6: Padding inside the card, handled by CardContent.
        - rounded-md: Border radius.
        - bg-surface: Background color, maps to Tailwind's `bg-card` via CSS variables.
        - shadow-md: Box shadow.
        Shadcn UI Card component defaults: rounded-lg, border, shadow-sm.
        We override these to match specific requirements.
      */}
      <Card className="w-[400px] rounded-md shadow-md border-0">
        {/* 
          CardContent is used to wrap the children.
          The requirement for "p-6" on the card implies content padding.
          Shadcn's CardContent defaults to "p-6 pt-0". To ensure uniform padding of p-6 on all sides,
          we explicitly set className="p-6".
        */}
        <CardContent className="p-6">
          {/* 
            The children (e.g., LoginForm via AuthTemplate) will be rendered here.
            Layout Requirements mainContent.layout ("flex flex-col gap-4") is expected 
            to be handled by the child components themselves (like LoginForm).
          */}
          {children}
        </CardContent>
      </Card>
    </main>
  );
};

export default MainAppLayout;
