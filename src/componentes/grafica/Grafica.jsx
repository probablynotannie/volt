import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

export default function Grafica() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/precioLuz")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          setError(json.error);
          return;
        }
        // Aquí transformamos los datos para el gráfico:
        // La estructura que devuelve la API es compleja, te doy un ejemplo:
        // Vamos a mapear los datos horarios o diarios a formato { mes: "Ene", precio: valor }

        // Supongamos que json.indicator.values es un array con { datetime, value }
        const valores = json.indicator.values;

        // Agrupar por mes (ejemplo simplificado)
        const meses = [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ];

        // Sumamos precio por mes y calculamos promedio
        const preciosPorMes = Array(12).fill(0);
        const countsPorMes = Array(12).fill(0);

        valores.forEach(({ datetime, value }) => {
          const fecha = new Date(datetime);
          const mes = fecha.getMonth(); // 0 - 11
          preciosPorMes[mes] += value;
          countsPorMes[mes]++;
        });

        const dataGrafica = preciosPorMes.map((total, i) => ({
          mes: meses[i],
          precio: countsPorMes[i] ? +(total / countsPorMes[i]).toFixed(2) : 0,
        }));

        setData(dataGrafica);
      })
      .catch(() => {
        setError("Error al cargar los datos");
      });
  }, []);

  if (error) return <p className="text-red-600 text-center">{error}</p>;
  if (!data) return <p className="text-center">Cargando datos...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded">
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
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
