// /api/precioLuz.js

export default async function handler(req, res) {
    const token = process.env.ESIOS_API_TOKEN; // Tu token en variables de entorno

    const url = "https://api.esios.ree.es/indicators/1001"; // Ejemplo: precio luz

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token token=${token}`,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Error al obtener datos" });
        }

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor" });
    }
}
