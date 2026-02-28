"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts"

// Sample Data
const data = [
  { name: "Mon", uv: 4000 },
  { name: "Tue", uv: 3000 },
  { name: "Wed", uv: 2000 },
  { name: "Thu", uv: 2780 },
  { name: "Fri", uv: 1890 },
  { name: "Sat", uv: 2390 },
  { name: "Sun", uv: 3490 },
]

const Chart = () => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>

          {/* Gradient */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7C5CFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7C5CFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

          {/* Axes */}
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />

          {/* Tooltip (Hover Popup) */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
            }}
            cursor={{ stroke: "#7C5CFF", strokeWidth: 1 }}
          />

          {/* Area */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#7C5CFF"
            fill="url(#colorUv)"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />

        </AreaChart>
      </ResponsiveContainer>
  )
}

export default Chart