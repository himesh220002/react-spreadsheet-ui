type BadgeProps = {
  label: string;
  type: "status" | "priority";
};

const Badge = ({ label, type }: BadgeProps) => {
  const base = "px-2 py-1 text-xs font-medium rounded-xl";
  
  const statusColors: Record<string, string> = {
    "In-process": "bg-yellow-100 text-yellow-700",
    "Need to start": "bg-blue-100 text-blue-700",
    "Complete": "bg-green-100 text-green-700",
    "Blocked": "bg-red-100 text-red-700"
  };

  const priorityColors: Record<string, string> = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-blue-600"
  };

  const colorClass = type === "status"
    ? statusColors[label] || "bg-gray-100 text-gray-700"
    : priorityColors[label] || "text-gray-600";

  return <span className={`${base} ${colorClass}`}>{label}</span>;
};

export default Badge;
