export const dynamic = 'force-dynamic';

import { getGraphQLClient } from '../lib/graphql';

const HEALTH_QUERY = `
  query {
    health
  }
`;

export default async function Home() {
  const client = getGraphQLClient();
  const data = await client.request(HEALTH_QUERY);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-xl border p-6">
        <h1 className="text-xl font-semibold">Frontend OK</h1>
        <p>API health: {data.health}</p>
      </div>
    </div>
  );
}
