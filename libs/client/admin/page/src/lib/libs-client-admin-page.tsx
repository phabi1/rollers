import { Children, isValidElement } from 'react';
import PageHeader from './components/page-header/page-header';

export interface PageProps {
  headingTitle: string;
  headingSubtitle?: string;
  children: React.ReactNode;
  actions?: any[];
}

export function Page({
  headingTitle,
  headingSubtitle,
  actions,
  children,
}: PageProps) {
  const HeaderComponent = findSlotOfType(children, Header);
  const ContentComponent = findSlotOfType(children, Content);
  const BottomComponent = findSlotOfType(children, Bottom);

  return (
    <div className="p-4 relative">
      {HeaderComponent || (
        <PageHeader
          title={headingTitle}
          subtitle={headingSubtitle}
          actions={actions}
        />
      )}
      {ContentComponent}
      {BottomComponent}
    </div>
  );
}

function Header({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function Content({ children }: { children?: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

function Bottom({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100 border-t">
      {children}
    </div>
  );
}

function findSlotOfType(children: React.ReactNode, type: React.ElementType) {
  if (!children) return null;

  const childrenArray = Children.toArray(children);
  for (const child of childrenArray) {
    if (isValidElement(child) && child.type === type) {
      return child;
    }
  }
  return null;
}

Page.Header = Header;
Page.Content = Content;
Page.Bottom = Bottom;

export default Page;
