import PaginaLegal from "./PaginaLegal";

export default function AvisoLegal() {
  return (
    <PaginaLegal
      title="Aviso legal"
      description="Información sobre el titular y las condiciones de uso del sitio web de Volt Energía."
      canonical="https://volt-green.vercel.app/aviso-legal"
    >
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, se informa de los datos del titular del sitio:</p>
      <ul className="legal-facts">
        <li><strong>Titular:</strong> GT 2018 Energy Solutions SL</li>
        <li><strong>NIF:</strong> B09836016</li>
        <li><strong>Domicilio:</strong> Polígono Makarraztegi, 3, bajo</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:administracion@voltenergia.es">administracion@voltenergia.es</a></li>
        <li><strong>Teléfono:</strong> <a href="tel:+34697113639">+34 697 11 36 39</a></li>
      </ul>
      <h2>Objeto y condiciones de uso</h2>
      <p>Este sitio ofrece información sobre los servicios de asesoramiento energético de Volt Energía y permite enviar consultas. El acceso al sitio atribuye la condición de usuario e implica el uso responsable de sus contenidos y funcionalidades.</p>
      <p>Los contenidos se ofrecen con carácter informativo y no constituyen por sí solos una oferta contractual ni garantizan un resultado de ahorro. La contratación de servicios, si procede, estará sujeta a las condiciones que se faciliten específicamente.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los contenidos, diseños y elementos de este sitio están protegidos por la normativa aplicable. No se permite su reproducción o reutilización fuera de los límites legales sin autorización de sus titulares. Las marcas y logotipos de terceros pertenecen a sus respectivos titulares y se muestran con fines informativos.</p>
      <h2>Responsabilidad y enlaces</h2>
      <p>El titular procura mantener la información actualizada, pero no garantiza la ausencia de errores o interrupciones. Los enlaces a sitios de terceros se ofrecen como referencia; sus contenidos y políticas son responsabilidad de sus respectivos titulares.</p>
      <h2>Legislación aplicable</h2>
      <p>Este sitio se rige por la legislación española. Las controversias se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.</p>
    </PaginaLegal>
  );
}
