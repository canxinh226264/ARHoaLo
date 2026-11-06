import { toEnu } from './geo';
import routing from '../config/routing.json';

/**
 * Lấy tuyến đường đi bộ theo phố từ OpenRouteService (dữ liệu OpenStreetMap).
 * Chỉ gọi khi bắt đầu dẫn đường hoặc khi đi lệch tuyến, nên mỗi lượt dùng tốn vài lần gọi.
 * Key nằm trong bản build gửi tới trình duyệt (dịch vụ gọi thẳng từ điện thoại), nên chỉ
 * dùng key miễn phí; ai lấy được key cũng chỉ làm hết hạn mức ngày của nó.
 */
export interface LatLng {
  lat: number;
  lng: number;
}

export interface RouteResult {
  /** Mét Đông/Bắc so với điểm đến, từ chỗ người dùng tới điểm đến. */
  points: { e: number; n: number }[];
  distance: number;
  profile: string;
}

export const ROUTING = routing;

export function routingKey(): string {
  const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
  return (env?.VITE_ORS_KEY ?? '').trim();
}

/** Đọc GeoJSON của ORS (toạ độ [lng, lat]) thành mét Đông/Bắc so với điểm đến. */
export function parseRoute(json: unknown, to: LatLng, profile: string): RouteResult | null {
  const f = (json as { features?: { geometry?: { coordinates?: unknown }; properties?: { summary?: { distance?: number } } }[] })?.features?.[0];
  const coords = f?.geometry?.coordinates;
  if (!Array.isArray(coords) || coords.length < 2) return null;
  const points: RouteResult['points'] = [];
  for (const c of coords) {
    if (!Array.isArray(c) || !Number.isFinite(c[0]) || !Number.isFinite(c[1])) return null;
    points.push(toEnu(c[1], c[0], to.lat, to.lng));
  }
  return { points, distance: f?.properties?.summary?.distance ?? NaN, profile };
}

/** Thử lần lượt các profile; trả null nếu không lấy được (không có key, mất mạng, dịch vụ lỗi). */
export async function fetchRoute(from: LatLng, to: LatLng, key = routingKey(), fetchImpl: typeof fetch = fetch): Promise<RouteResult | null> {
  if (!key) return null;
  for (const profile of routing.profiles) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), routing.timeoutMs);
    try {
      const res = await fetchImpl(`${routing.url}/${profile}/geojson`, {
        method: 'POST',
        headers: { Authorization: key, 'Content-Type': 'application/json', Accept: 'application/geo+json, application/json' },
        body: JSON.stringify({ coordinates: [[from.lng, from.lat], [to.lng, to.lat]], instructions: false }),
        signal: ctrl.signal,
      });
      if (!res.ok) continue;
      const route = parseRoute(await res.json(), to, profile);
      if (route) return route;
    } catch {
      /* hết giờ hoặc lỗi mạng: thử profile tiếp theo */
    } finally {
      clearTimeout(timer);
    }
  }
  return null;
}
