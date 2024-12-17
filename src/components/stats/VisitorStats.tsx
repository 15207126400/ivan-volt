'use client';

import { useEffect, useState } from 'react';

export function VisitorStats() {
  const [stats, setStats] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (error: any) {
        console.error('Failed to fetch stats:', error);
        setError(error?.message || 'Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading stats...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        Failed to load stats: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border p-4">
        <h3 className="text-sm font-medium text-muted-foreground">页面浏览</h3>
        <p className="mt-2 text-3xl font-bold">{stats.pageViews}</p>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="text-sm font-medium text-muted-foreground">独立访客</h3>
        <p className="mt-2 text-3xl font-bold">{stats.uniqueVisitors}</p>
      </div>
    </div>
  );
} 