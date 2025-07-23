import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Grafica() {
  const data = [
    { mes: "Ene", precio: 20.28, precioDescuento: 16.22 },
    { mes: "Feb", precio: 13.67, precioDescuento: 10.94 },
    { mes: "Mar", precio: 20.28, precioDescuento: 16.22 },
    { mes: "Abr", precio: 13.67, precioDescuento: 10.94 },
    { mes: "May", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Jun", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Jul", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Ago", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Sep", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Oct", precio: 32.27, precioDescuento: 25.82 },
    { mes: "Nov", precio: 104.43, precioDescuento: 83.54 },
    { mes: "Dic", precio: 111.23, precioDescuento: 88.98 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 my-10 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Precio medio de la luz 2024 (€/MWh)
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
            name="Precio normal"
          />
          <Line
            type="monotone"
            dataKey="precioDescuento"
            stroke="#10b981"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Precio con Volt"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
