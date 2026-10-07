import PaginaLegal from "./PaginaLegal";

export default function PoliticaPrivacidad() {
  return (
    <PaginaLegal
      title="Política de privacidad"
      description="Cómo Volt Energía trata los datos personales enviados a través de su formulario de contacto."
      canonical="https://volt-green.vercel.app/privacidad"
    >
      <p>Esta política explica cómo se tratan los datos personales que se facilitan a través del formulario de contacto de este sitio.</p>
      <h2>Responsable del tratamiento</h2>
      <ul className="legal-facts">
        <li><strong>Responsable:</strong> GT 2018 Energy Solutions SL</li>
        <li><strong>NIF:</strong> B09836016</li>
        <li><strong>Domicilio:</strong> Polígono Makarraztegi, 3, bajo</li>
        <li><strong>Contacto:</strong> <a href="mailto:administracion@voltenergia.es">administracion@voltenergia.es</a> · +34 697 11 36 39</li>
      </ul>
      <h2>Datos y finalidad</h2>
      <p>El formulario solicita nombre, dirección de correo electrónico y el contenido del mensaje. Se usan para recibir, gestionar y responder a la consulta, y para las actuaciones que la persona solicite en relación con ella. No se deben incluir datos sensibles ni información de terceros que no sea necesaria.</p>
      <h2>Base jurídica</h2>
      <p>La base del tratamiento es atender la solicitud de la persona interesada y, cuando corresponda, adoptar medidas precontractuales a petición suya. Si posteriormente se inicia una relación contractual, podrán aplicarse las bases jurídicas correspondientes a esa relación.</p>
      <h2>Destinatarios y servicios utilizados</h2>
      <p>El formulario se envía a través de EmailJS, proveedor técnico de envío de mensajes configurado en esta web. El titular debe formalizar y mantener, cuando resulte exigible, las garantías contractuales aplicables al proveedor y verificar en su cuenta sus condiciones, ubicación de tratamiento y posibles transferencias internacionales. No se venden los datos personales.</p>
      <h2>Conservación</h2>
      <p>Los datos se conservarán durante el tiempo necesario para responder y gestionar la consulta. Después, se suprimirán o bloquearán cuando proceda, salvo que deban conservarse durante los plazos legales aplicables para atender responsabilidades.</p>
      <h2>Derechos</h2>
      <p>Se pueden ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, cuando correspondan, escribiendo a <a href="mailto:administracion@voltenergia.es">administracion@voltenergia.es</a> e identificando la solicitud. También se puede presentar una reclamación ante la <a href="https://www.aepd.es/" target="_blank" rel="noreferrer">Agencia Española de Protección de Datos</a>.</p>
      <h2>Seguridad y cambios</h2>
      <p>El titular aplicará medidas razonables para proteger los datos y actualizará esta política cuando cambien los tratamientos o las obligaciones aplicables.</p>
    </PaginaLegal>
  );
}
