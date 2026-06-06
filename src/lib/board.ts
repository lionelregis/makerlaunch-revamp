// Shared helpers for the Launchpad boards (ventures and students). Both sides
// are filterable lists seeded from content plus the visitor's own posts, which
// are persisted to localStorage and shown only in their browser.
import { useEffect, useRef, useState } from 'react';

/** A stable unique id, with a fallback for older browsers. */
export function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Parse a comma-separated string into trimmed, de-duplicated tags. */
export function parseTags(text: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const part of text.split(',').map((s) => s.trim()).filter(Boolean)) {
    const key = part.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(part);
    }
  }
  return out;
}

/** Sorted union of a tag field across items, prefixed with the "all" label. */
export function tagUnion<T>(items: T[], getTags: (item: T) => string[], allLabel: string): string[] {
  const set = new Set<string>();
  for (const it of items) for (const t of getTags(it)) set.add(t);
  return [allLabel, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

function loadStored<T extends { id: string; local?: boolean }>(key: string): T[] {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return (parsed as T[])
      .filter((p) => p && typeof p.id === 'string')
      .map((p) => ({ ...p, local: true }));
  } catch {
    return [];
  }
}

/**
 * A localStorage-backed collection of user-created items. Loads once via a lazy
 * initializer (so we never call setState in an effect), and saves on change,
 * skipping the first render. Degrades silently when storage is unavailable.
 */
export function useStoredCollection<T extends { id: string; local?: boolean }>(key: string) {
  const [items, setItems] = useState<T[]>(() => loadStored<T>(key));
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch {
      /* quota or private mode: ignore */
    }
  }, [items, key]);

  const add = (item: T) => setItems((prev) => [item, ...prev]);
  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  return { items, add, remove };
}
