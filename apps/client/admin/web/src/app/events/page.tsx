'use client';
import useEventsList from '@/hooks/events/list';
import { EventItem } from '@/models/event';
import {
  DatagridColumn,
  Datagrid,
  DatagridAction,
} from '@rollers/libs-client-datagrid';
import { Action, Page } from '@rollers/libs-client-admin-page';
import { useRouter } from 'next/navigation';

export default function EventListPage() {
  const router = useRouter();
  const { items, loading, error, empty } = useEventsList();

  const pageActions: Action[] = [
    {
      name: 'new',
      label: 'New Event',
      handle: () => {
        router.push('/events/new');
      },
    },
    {
      name: 'refresh',
      label: 'Refresh',
      handle: () => {
        router.refresh();
      },
    },
  ];

  const columns: DatagridColumn[] = [
    {
      name: 'title',
      header: 'Title',
      type: 'text',
      feature: true
    },
    {
      name: 'description',
      header: 'Description',
      type: 'text',
    },
    {
      name: 'startAt',
      header: 'Start At',
      type: 'date',
    },
    {
      name: 'endAt',
      header: 'End At',
      type: 'date',
    },
  ];

  const itemActions: DatagridAction[] = [
    {
      name: 'edit',
      label: 'Edit',
      handle: (item: EventItem) => {
        console.log('Edit action for item:', item);
        // Navigate to edit page or handle edit action
        router.push(`/events/${item.id}/edit`);
      },
    },
    {
      name: 'delete',
      label: 'Delete',
      handle: (item: EventItem) => {
        console.log('Delete action for item:', item);
        // Handle delete action
      },
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (empty) {
    return <div>No events found.</div>;
  }

  return (
    <Page
      headingTitle="Events"
      headingSubtitle="Manage your events"
      actions={pageActions}
    >
      <Datagrid
        source={items}
        columns={columns}
        actions={itemActions}
      ></Datagrid>
    </Page>
  );
}
