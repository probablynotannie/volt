import PaginaLegal from "./PaginaLegal";

export default function PoliticaCookies() {
  return (
    <PaginaLegal
      title="Política de cookies"
      description="Información sobre cookies y almacenamiento local en el sitio web de Volt Energía."
      canonical="https://volt-green.vercel.app/cookies"
    >
      <p>En la versión actual de este sitio no se han integrado herramientas de analítica, publicidad ni seguimiento, y no se utiliza un sistema propio de cookies. Por ello, actualmente no se muestra un banner de consentimiento.</p>
      <p>El código del proyecto contiene una función de modo oscuro que guardaría la preferencia en el almacenamiento local del navegador, pero no está activa ni se muestra en la web. Si se activa o se incorporan cookies o tecnologías similares, esta política se actualizará y, cuando sea necesario, se solicitará consentimiento antes de utilizarlas.</p>
      <p>Algunos recursos enlazados o servidos por terceros pueden estar sujetos a las políticas de esos proveedores. Este sitio carga una imagen alojada en Unsplash; el navegador solicita ese recurso directamente al proveedor. Consulta la información de privacidad del tercero para conocer sus prácticas.</p>
      <h2>Cómo gestionar cookies</h2>
      <p>También puedes consultar la configuración de privacidad de tu navegador para revisar o eliminar cookies almacenadas. Si en el futuro se incorporan cookies no necesarias, se ofrecerán opciones para aceptarlas o rechazarlas con la misma visibilidad.</p>
      <p>Para dudas sobre esta política, escribe a <a href="mailto:administracion@voltenergia.es">administracion@voltenergia.es</a>.</p>
    </PaginaLegal>
  );
}
