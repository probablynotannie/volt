import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const fetchPrecioLuzMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { mes: "Ene", precio: 20.28 },
        { mes: "Feb", precio: 13.67 },
        { mes: "Mar", precio: 20.28 },
        { mes: "Abr", precio: 13.67 },
        { mes: "May", precio: 32.27 },
        { mes: "Jun", precio: 32.27 },
        { mes: "Jul", precio: 32.27 },
        { mes: "Ago", precio: 32.27 },
        { mes: "Sep", precio: 32.27 },
        { mes: "Oct", precio: 32.27 },
        { mes: "Nov", precio: 104.43 },
        { mes: "Dic", precio: 111.23 },
      ]);
    }, 500);
  });
};

export default function GraficaPrecioLuzMock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrecioLuzMock().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Cargando datos...</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Precio medio de la luz en España - 2024 (€/MWh)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} €/MWh`} />
          <Line
            type="monotone"
            dataKey="precio"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
