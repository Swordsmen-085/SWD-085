export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  location?: string;
}

export interface ApplicationPayload {
  name: string;
  email: string;
  callsign?: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredRole: string;
  message?: string;
}

const API_BASE = import.meta.env?.PUBLIC_API_BASE ?? 'https://api.swd085.example';

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`${API_BASE}/news`);
  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.status}`);
  }
  return res.json();
}

export async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch(`${API_BASE}/events`);
  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.status}`);
  }
  return res.json();
}

export async function submitApplication(
  payload: ApplicationPayload
): Promise<{ success: boolean; message?: string }> {
  const res = await fetch(`${API_BASE}/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Application submission failed: ${res.status}`);
  }
  return res.json();
}
