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
import { gql, useQuery } from '@apollo/client';

const GET_EVENTS_GQL = gql`
  query GetEvents {
    events {
      nodes {
        id
        title
      }
      total
    }
  }
`;

export default function EventListPage() {
  const router = useRouter();

  const events = useQuery(GET_EVENTS_GQL);
  console.log('Events:', events);

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
      feature: true,
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
        router.push(`/events/${item.id}/edit`);
      },
    },
    {
      name: 'delete',
      label: 'Delete',
      handle: (item: EventItem) => {},
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
      <Page.Content>
        <Datagrid
          source={items}
          columns={columns}
          actions={itemActions}
          itemClick={(item: EventItem) => {
            console.log('Item clicked:', item);
            router.push(`/events/${item.id}`);
          }}
        ></Datagrid>
      </Page.Content>
    </Page>
  );
}
