import PageActions from '../page-actions/page-actions';

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: any[];
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div>{subtitle}</div>
      </div>
      <div>
        <PageActions actions={actions} />
      </div>
    </div>
  );
}

export default PageHeader;
