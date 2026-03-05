// src/services/api.js
// Central API configuration for RoutePace frontend

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
console.log("API URL:", import.meta.env.VITE_API_URL);
/**
 * Core fetch wrapper with auth headers and error handling
 */
async function request(endpoint, options = {}) {
  const token = localStorage.getItem("rp_access_token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    // If token expired, try refresh
    if (response.status === 401 && token) {
      const refreshed = await tryRefreshToken();
      if (refreshed) {
        // Retry original request with new token
        config.headers.Authorization = `Bearer ${localStorage.getItem("rp_access_token")}`;
        const retryRes = await fetch(`${BASE_URL}${endpoint}`, config);
        return retryRes.json();
      }
    }
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

/**
 * Attempt to refresh access token using stored refresh token
 */
async function tryRefreshToken() {
  const refreshToken = localStorage.getItem("rp_refresh_token");
  if (!refreshToken) return false;

  try {
    const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("rp_access_token", data.accessToken);
      localStorage.setItem("rp_refresh_token", data.refreshToken);
      return true;
    }
  } catch {
    localStorage.removeItem("rp_access_token");
    localStorage.removeItem("rp_refresh_token");
  }
  return false;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const authAPI = {
  register: (data) => request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
  login: (data) => request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  refreshToken: (refreshToken) => request("/auth/refresh-token", { method: "POST", body: JSON.stringify({ refreshToken }) }),
  getMe: () => request("/auth/me"),
  forgotPassword: (email) => request("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email }) }),
  resetPassword: (token, password) => request(`/auth/reset-password/${token}`, { method: "PATCH", body: JSON.stringify({ password }) }),
  updatePassword: (data) => request("/auth/update-password", { method: "PATCH", body: JSON.stringify(data) }),
};

// ─── Demo Bookings ────────────────────────────────────────────────────────────
export const demoAPI = {
  book: (data) => request("/demos", { method: "POST", body: JSON.stringify(data) }),
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/demos?${query}`);
  },
  getById: (id) => request(`/demos/${id}`),
  update: (id, data) => request(`/demos/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  getStats: () => request("/demos/stats"),
};

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contactAPI = {
  submit: (data) => request("/contact", { method: "POST", body: JSON.stringify(data) }),
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/contact?${query}`);
  },
  update: (id, data) => request(`/contact/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
};

// ─── Plans ────────────────────────────────────────────────────────────────────
export const plansAPI = {
  getAll: () => request("/plans"),
  getById: (id) => request(`/plans/${id}`),
};

// ─── Subscriptions ────────────────────────────────────────────────────────────
export const subscriptionAPI = {
  getMy: () => request("/subscriptions/me"),
  createCheckout: (data) => request("/subscriptions/checkout", { method: "POST", body: JSON.stringify(data) }),
  startTrial: (planId) => request("/subscriptions/trial", { method: "POST", body: JSON.stringify({ planId }) }),
  cancel: () => request("/subscriptions/cancel", { method: "POST" }),
  reactivate: () => request("/subscriptions/reactivate", { method: "POST" }),
  getBillingPortal: () => request("/subscriptions/billing-portal"),
};

// ─── Routes ───────────────────────────────────────────────────────────────────
export const routesAPI = {
  getAll: (params = {}) => request(`/routes?${new URLSearchParams(params)}`),
  getById: (id) => request(`/routes/${id}`),
  create: (data) => request("/routes", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => request(`/routes/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (id) => request(`/routes/${id}`, { method: "DELETE" }),
  updateStop: (routeId, stopId, data) => request(`/routes/${routeId}/stops/${stopId}`, { method: "PATCH", body: JSON.stringify(data) }),
  updateLocation: (id, coords) => request(`/routes/${id}/location`, { method: "PATCH", body: JSON.stringify(coords) }),
  syncOffline: (routes) => request("/routes/sync", { method: "POST", body: JSON.stringify({ routes }) }),
};

// ─── Inventory ────────────────────────────────────────────────────────────────
export const inventoryAPI = {
  getAll: (params = {}) => request(`/inventory?${new URLSearchParams(params)}`),
  getById: (id) => request(`/inventory/${id}`),
  create: (data) => request("/inventory", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => request(`/inventory/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (id) => request(`/inventory/${id}`, { method: "DELETE" }),
  adjustStock: (id, data) => request(`/inventory/${id}/adjust-stock`, { method: "POST", body: JSON.stringify(data) }),
  getLowStock: () => request("/inventory/low-stock"),
};

// ─── Invoices ─────────────────────────────────────────────────────────────────
export const invoicesAPI = {
  getAll: (params = {}) => request(`/invoices?${new URLSearchParams(params)}`),
  getById: (id) => request(`/invoices/${id}`),
  create: (data) => request("/invoices", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => request(`/invoices/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  void: (id) => request(`/invoices/${id}/void`, { method: "PATCH" }),
  send: (id, channel) => request(`/invoices/${id}/send`, { method: "POST", body: JSON.stringify({ channel }) }),
  recordPayment: (id, amount) => request(`/invoices/${id}/payment`, { method: "POST", body: JSON.stringify({ amount }) }),
};

// ─── Collections ──────────────────────────────────────────────────────────────
export const collectionsAPI = {
  getAll: (params = {}) => request(`/collections?${new URLSearchParams(params)}`),
  getById: (id) => request(`/collections/${id}`),
  create: (data) => request("/collections", { method: "POST", body: JSON.stringify(data) }),
  getSummary: (period = "today") => request(`/collections/summary?period=${period}`),
  reverse: (id) => request(`/collections/${id}/reverse`, { method: "POST" }),
};

// ─── Reports ──────────────────────────────────────────────────────────────────
export const reportsAPI = {
  getDashboard: () => request("/reports/dashboard"),
  getSales: (params = {}) => request(`/reports/sales?${new URLSearchParams(params)}`),
  getCollections: (params = {}) => request(`/reports/collections?${new URLSearchParams(params)}`),
  getRoutes: (params = {}) => request(`/reports/routes?${new URLSearchParams(params)}`),
};

export default { authAPI, demoAPI, contactAPI, plansAPI, subscriptionAPI, routesAPI, inventoryAPI, invoicesAPI, collectionsAPI, reportsAPI };
