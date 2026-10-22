/**
 * Public system status — edit `state` / `services` when incidents occur.
 * Footer + /status page + dashboard Support read from here.
 */
export const systemStatus = {
  state: "healthy", // "healthy" | "degraded" | "outage"
  label: "All systems operational",
  message: "All systems are operating normally.",
  detail: "No known incidents at this time.",
  updatedAt: new Date().toISOString().slice(0, 10),
};

export const isSystemHealthy = systemStatus.state === "healthy";

/** Core platform surfaces shown on the public status page */
export const STATUS_SERVICES = [
  { id: "api", name: "Platform API", group: "Core", status: "operational" },
  { id: "auth", name: "Authentication & accounts", group: "Core", status: "operational" },
  { id: "dashboard", name: "Dashboard & SD Hub", group: "Core", status: "operational" },
  { id: "credits", name: "Credits & billing", group: "Core", status: "operational" },
  { id: "mtn-data", name: "MTN Data", group: "Data", status: "operational" },
  { id: "mtn-verify", name: "MTN Verify", group: "Data", status: "operational" },
  { id: "exactmails", name: "ExactMails", group: "Outreach", status: "operational" },
  { id: "leadsdriver", name: "LeadsDriver", group: "Outreach", status: "operational" },
  { id: "sd-flow", name: "SD Flow", group: "Operations", status: "operational" },
  { id: "sd-callix", name: "SD Callix", group: "Outreach", status: "operational" },
  { id: "hyperpitch", name: "HyperPitch", group: "Outreach", status: "operational" },
  { id: "webhooks", name: "Webhooks & integrations", group: "Developers", status: "operational" },
];

export const STATUS_LABELS = {
  operational: { label: "Operational", color: "#16a34a", bg: "#f0fdf4" },
  degraded: { label: "Degraded", color: "#d97706", bg: "#fff7ed" },
  outage: { label: "Outage", color: "#dc2626", bg: "#fef2f2" },
  maintenance: { label: "Maintenance", color: "#2563eb", bg: "#eff6ff" },
};
