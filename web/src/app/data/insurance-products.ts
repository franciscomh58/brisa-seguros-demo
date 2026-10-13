type InsuranceProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  audience: string;
  imageAlt: string;
  brief: string;
  proposal: Record<(typeof detailSections)[number]['id'], string[]>;
};

export const insuranceProducts: InsuranceProduct[] = [
  {
    slug: 'gastos-medicos-individual',
    name: 'Gastos médicos individual',
    category: 'Salud personal',
    description:
      'Una forma de explorar opciones de salud para ti y las personas que forman parte de tus planes.',
    audience:
      'Personas, parejas y familias ficticias que quieren conocer una experiencia de protección personal.',
    imageAlt: 'Mujer paseando en un jardín, imagen ilustrativa generada',
    brief:
      'Comienza por tu etapa de vida y descubre cómo se organizan tres niveles ilustrativos de acompañamiento.',
    proposal: {
      propuesta: [
        'Tu bienestar comienza con preguntas claras sobre lo que quieres cuidar.',
        'Este ejemplo reúne distintas opciones de atención para explorar a tu ritmo.',
      ],
      personas: [
        'Puedes representar a una persona, una pareja o una familia inventada.',
        'La selección describe el escenario; no evalúa salud ni determina aceptación.',
      ],
      coberturas: [
        'Esencial: consultas ilustrativas y guía de atención.',
        'Ampliado: añade atención hospitalaria de ejemplo.',
        'Completo: añade seguimiento y orientación complementaria ficticios.',
      ],
      condiciones: [
        'Las prestaciones son ejemplos; no habilitan acceso a médicos u hospitales.',
        'No hay evaluación médica, deducibles o periodos de espera contractuales en esta simulación.',
      ],
      acompanamiento: [
        'La ficha te ayuda a distinguir niveles de atención dentro del ejemplo.',
        'El resultado resume tus elecciones; no agenda consultas ni conecta con una red médica.',
      ],
      proceso: [
        'Elige una edad ficticia y si el escenario incluye pareja o familia.',
        'Compara aseguradoras de ejemplo y los tres paquetes.',
        'Revisa el resultado ilustrativo y vuelve a editarlo si quieres explorar otra opción.',
      ],
      preguntas: [
        '¿Puedo incluir familiares? Sí, el escenario admite pareja o familia sin nombres ni datos de sus integrantes.',
        '¿Tengo que describir mi salud? No. La actividad del personaje es opcional y no se piden diagnósticos.',
        '¿El importe cambia con la edad? No. Son cifras fijas de ejemplo según seguro, aseguradora y paquete.',
        '¿Puedo usar una red médica? No. No existen citas, servicios médicos ni pólizas asociadas al demo.',
      ],
      documentos: [
        'Guía de lectura: distingue el grupo ficticio elegido de las prestaciones del paquete.',
        'Consulta el resumen en pantalla; no se emiten pólizas, certificados ni documentos personales.',
      ],
    },
  },
  {
    slug: 'gastos-medicos-colectivo',
    name: 'Gastos médicos colectivo',
    category: 'Salud en equipo',
    description: 'Explora una idea de bienestar compartido para las personas de una organización.',
    audience: 'Equipos ficticios de oficinas, comercios y empresas de servicios.',
    imageAlt: 'Grupo de compañeros en un patio de oficinas, imagen ilustrativa generada',
    brief:
      'Un escenario colectivo permite pensar en las necesidades del grupo y en cómo organizar su acompañamiento.',
    proposal: {
      propuesta: [
        'Imagina una experiencia de salud que tenga en cuenta al equipo completo.',
        'Distingue la atención a integrantes de las tareas de organización del programa.',
      ],
      personas: [
        'El ejemplo admite grupos de 5–20, 21–50 o 51–100 integrantes.',
        'Puedes representar un grupo con dependientes sin introducir censos ni nombres.',
      ],
      coberturas: [
        'Esencial: orientación de salud ilustrativa para integrantes.',
        'Ampliado: añade atención hospitalaria de ejemplo para el grupo.',
        'Completo: añade seguimiento del programa y guía de movimientos ficticios.',
      ],
      condiciones: [
        'Los rangos de integrantes sólo permiten probar el formulario; no son requisitos de una aseguradora.',
        'El importe de muestra no se multiplica por personas ni representa el coste de un colectivo real.',
      ],
      acompanamiento: [
        'La organización puede explorar niveles de servicio en un mismo recorrido.',
        'Los integrantes no se registran ni reciben acceso a prestaciones reales.',
      ],
      proceso: [
        'Selecciona una organización, un tamaño de grupo y la opción de dependientes.',
        'Elige aseguradora de ejemplo y paquete para el escenario colectivo.',
        'Revisa el resumen; puedes editar el grupo sin cargar información de empleados.',
      ],
      preguntas: [
        '¿Puedo simular dependientes? Sí, mediante una selección general sin datos individuales.',
        '¿Necesito un censo? No. El demo no acepta archivos ni listas de integrantes.',
        '¿Puedo hacer altas o bajas? No. La guía de movimientos es una prestación ilustrativa, no una función operativa.',
        '¿El precio es por empleado? No. Es una cifra fija de muestra del escenario y no una prima real del grupo.',
      ],
      documentos: [
        'Guía del organizador: observa tamaño del grupo, dependientes y nivel seleccionado.',
        'El resumen es informativo; no genera contratos colectivos ni certificados individuales.',
      ],
    },
  },
  {
    slug: 'auto-individual',
    name: 'Seguro de auto individual',
    category: 'Tu movilidad',
    description: 'Encuentra un escenario para el auto que acompaña tus recorridos de cada día.',
    audience: 'Personas que quieren explorar un compacto, sedán o SUV ficticio de uso personal.',
    imageAlt: 'Automóvil azul junto a una carretera costera, imagen ilustrativa generada',
    brief:
      'Tu movilidad tiene su propio ritmo. Prueba distintas opciones para imaginar cómo cuidar el camino.',
    proposal: {
      propuesta: [
        'Parte del tipo de auto y de los recorridos que quieres representar.',
        'Compara tres niveles de prestaciones ilustrativas en una experiencia sencilla.',
      ],
      personas: [
        'Elige un compacto, sedán o SUV de ejemplo, con año 2020, 2023 o 2026.',
        'No necesitas placas, número de serie, licencia o datos del conductor.',
      ],
      coberturas: [
        'Esencial: responsabilidad civil y orientación vial de ejemplo.',
        'Ampliado: añade robo total ilustrativo.',
        'Completo: añade daños materiales de ejemplo al vehículo.',
      ],
      condiciones: [
        'Ninguna selección activa protección, asistencia o reparación del auto.',
        'El tipo y año contextualizan el resumen; no calculan el precio ni valor comercial del vehículo.',
      ],
      acompanamiento: [
        'Puedes revisar diferencias de paquete y volver al escenario inicial.',
        'El sitio no despacha grúas, recibe reportes ni ofrece un teléfono de emergencia.',
      ],
      proceso: [
        'Elige tipo, año y uso ficticios del auto.',
        'Selecciona aseguradora y paquete ilustrativos.',
        'Revisa el resumen y prueba otra combinación si quieres comparar la experiencia.',
      ],
      preguntas: [
        '¿Puedo introducir mi matrícula? No; el formulario utiliza únicamente opciones cerradas de ejemplo.',
        '¿Dónde elijo el tipo de cobertura? En el segundo paso, mediante Esencial, Ampliado o Completo.',
        '¿El año modifica el importe? No. La cifra de ejemplo corresponde a la combinación de seguro, aseguradora y paquete.',
        '¿Puedo solicitar asistencia? No. Las asistencias mencionadas describen el escenario ficticio.',
      ],
      documentos: [
        'Guía de lectura: identifica vehículo, paquete y prestaciones en el resumen.',
        'No se emiten pólizas ni comprobantes de cobertura; la simulación no debe usarse como acreditación.',
      ],
    },
  },
  {
    slug: 'auto-flotilla',
    name: 'Seguro de auto flotilla',
    category: 'Movilidad empresarial',
    description: 'Una mirada compartida a los vehículos que acompañan la operación de tu negocio.',
    audience: 'Empresas ficticias con grupos de autos, utilitarios o unidades mixtas.',
    imageAlt:
      'Tres vehículos utilitarios frente a un centro logístico, imagen ilustrativa generada',
    brief:
      'Explora cómo presentar distintas necesidades de movilidad empresarial desde un solo escenario.',
    proposal: {
      propuesta: [
        'Agrupa la movilidad del negocio para comparar alternativas con claridad.',
        'Usa un perfil predominante para probar el recorrido sin describir cada unidad.',
      ],
      personas: [
        'Representa flotillas de 3–5, 6–10 o 11–20 unidades de ejemplo.',
        'Selecciona tipo y año predominantes; no se carga un inventario de vehículos.',
      ],
      coberturas: [
        'Esencial: responsabilidad civil ilustrativa de flotilla y guía de administración.',
        'Ampliado: añade robo total de ejemplo para las unidades del escenario.',
        'Completo: añade daños materiales y orientación vial ficticios.',
      ],
      condiciones: [
        'El tamaño de flotilla es una selección de interfaz, no un mínimo comercial.',
        'El importe de muestra no es una tarifa por unidad ni una cotización total de una flotilla real.',
      ],
      acompanamiento: [
        'El administrador puede recorrer las opciones desde un resumen común.',
        'La demostración no incorpora unidades ni realiza seguimiento de conductores.',
      ],
      proceso: [
        'Define tamaño, tipo y año predominantes de la flotilla ficticia.',
        'Revisa los tres paquetes y elige una aseguradora de ejemplo.',
        'Consulta el resumen; vuelve a editar para representar otra operación.',
      ],
      preguntas: [
        '¿Puedo mezclar vehículos? Sí, la opción mixta representa ese escenario sin detallar unidades.',
        '¿Se necesitan números de serie? No. No se capturan datos de vehículos reales.',
        '¿Puedo dar de alta un auto? No. La administración aparece como parte del ejemplo, sin operaciones reales.',
        '¿El importe cubre mi flotilla? No; ninguna cifra o selección constituye cobertura o cotización comercial.',
      ],
      documentos: [
        'Guía del escenario: revisa tipo predominante, rango de unidades y paquete.',
        'No se generan inventarios, certificados por vehículo ni documentos de contratación.',
      ],
    },
  },
  {
    slug: 'vida-hombre-clave',
    name: 'Seguro de vida hombre clave',
    category: 'Continuidad del negocio',
    description: 'Explora el papel de las personas que ayudan a dar continuidad a una empresa.',
    audience:
      'Empresas ficticias que representan a una persona de dirección, especialidad o sociedad operativa.',
    imageAlt: 'Personas conversando en una reunión empresarial, imagen ilustrativa generada',
    brief:
      'Un punto de partida para pensar en roles importantes del negocio, con escenarios completamente inventados.',
    proposal: {
      propuesta: [
        'Reconoce funciones que aportan conocimiento, relaciones o dirección a una empresa.',
        'Este ejemplo organiza una conversación sobre continuidad sin prometer resultados financieros.',
      ],
      personas: [
        'Representa a una persona clave inventada mediante rol y rango de edad.',
        'El ejemplo tiene enfoque empresarial y no es un seguro de vida familiar.',
      ],
      coberturas: [
        'Esencial: respaldo económico ilustrativo ante fallecimiento de la persona clave.',
        'Ampliado: añade un escenario de invalidez ilustrativo.',
        'Completo: añade orientación ficticia para organizar la continuidad del negocio.',
      ],
      condiciones: [
        'No se determina elegibilidad, estado de salud, suma asegurada ni beneficiarios reales.',
        'No se atribuyen rendimientos, ventajas fiscales o continuidad garantizada a ningún paquete.',
      ],
      acompanamiento: [
        'El resumen separa el rol elegido de las prestaciones ilustrativas.',
        'La orientación no sustituye evaluación profesional ni activa servicios para una empresa.',
      ],
      proceso: [
        'Selecciona rol y edad de la persona ficticia; la actividad es opcional.',
        'Compara paquetes y aseguradoras de ejemplo.',
        'Revisa la simulación sin aportar nombres, documentos o información médica.',
      ],
      preguntas: [
        '¿Es vida familiar? No. Este escenario representa una necesidad empresarial alrededor de una persona clave.',
        '¿Quién recibe el respaldo? El demo no designa beneficiarios ni representa un contrato; sólo muestra el concepto.',
        '¿Se analiza la condición física? No. La actividad ficticia es opcional y no afecta aceptación ni precio.',
        '¿Hay beneficios fiscales? El demo no calcula ni anuncia beneficios fiscales.',
      ],
      documentos: [
        'Guía de roles: distingue persona clave, organización y prestaciones del ejemplo.',
        'No se solicitan expedientes médicos ni se emiten documentos fiscales o contractuales.',
      ],
    },
  },
  {
    slug: 'danos-empresas',
    name: 'Seguro de daños para empresas',
    category: 'Patrimonio empresarial',
    description:
      'Una forma de pensar en los espacios, equipos y bienes que sostienen tu operación.',
    audience: 'Oficinas, talleres y almacenes ficticios que exploran su patrimonio empresarial.',
    imageAlt: 'Interior de un taller industrial ordenado, imagen ilustrativa generada',
    brief:
      'Pon el foco en los bienes de la empresa y recorre alternativas ilustrativas para organizarlos.',
    proposal: {
      propuesta: [
        'Identifica qué equipos, inventario o espacios son importantes para tu actividad.',
        'En el universo Brisa, esta ficha se concentra en el patrimonio físico de la empresa.',
      ],
      personas: [
        'Elige oficina, taller o almacén como giro de ejemplo.',
        'Representa un espacio propio o rentado sin introducir ubicación ni valores reales.',
      ],
      coberturas: [
        'Esencial: daños físicos ilustrativos a equipos.',
        'Ampliado: añade inventario y mobiliario de ejemplo.',
        'Completo: añade afectación ilustrativa del espacio de trabajo y orientación patrimonial.',
      ],
      condiciones: [
        'Los ejemplos no valoran inmuebles ni implican protección frente a cualquier evento.',
        'No se simulan indemnizaciones, deducibles ni pérdidas de una empresa real.',
      ],
      acompanamiento: [
        'La ficha permite distinguir equipos, inventario y espacio de trabajo.',
        'No se realizan inspecciones ni se recibe evidencia de daños.',
      ],
      proceso: [
        'Define giro, relación con el espacio y bienes prioritarios del escenario.',
        'Revisa paquetes y selecciona aseguradora ficticia.',
        'Consulta el resumen y ajusta la prioridad para explorar otro ejemplo.',
      ],
      preguntas: [
        '¿Qué diferencia tiene frente a riesgos comerciales? Aquí el foco ficticio son los bienes físicos; riesgos comerciales trata la actividad cotidiana del comercio.',
        '¿Puedo incluir un local rentado? Sí, como descripción del escenario, sin evaluar derechos o condiciones de una póliza.',
        '¿Necesito declarar valores? No. No se piden importes patrimoniales ni inventarios reales.',
        '¿Se incluye interrupción del negocio? No se representa como prestación en estos paquetes de ejemplo.',
      ],
      documentos: [
        'Guía patrimonial: revisa qué categoría de bienes aparece en cada nivel.',
        'No adjuntes inventarios o avalúos; el demo no genera documentos de aseguramiento.',
      ],
    },
  },
  {
    slug: 'riesgos-comerciales',
    name: 'Seguro de riesgos comerciales',
    category: 'Tu actividad comercial',
    description:
      'Explora situaciones de la actividad diaria de un comercio, más allá de sus bienes.',
    audience: 'Tiendas, cafeterías y negocios de servicios ficticios con atención al público.',
    imageAlt: 'Dos comerciantes organizando productos en una tienda, imagen ilustrativa generada',
    brief:
      'En este demo, riesgos comerciales representa la actividad del local y su relación con clientes y terceros.',
    proposal: {
      propuesta: [
        'Imagina el recorrido de un día de trabajo y las interacciones que lo hacen posible.',
        'Este enfoque ficticio se distingue de daños para empresas, centrado en bienes físicos.',
      ],
      personas: [
        'Representa una tienda, cafetería o negocio de servicios de ejemplo.',
        'Elige atención al público, operación cotidiana o ambas como prioridad.',
      ],
      coberturas: [
        'Esencial: responsabilidad frente a terceros de ejemplo en el local.',
        'Ampliado: añade incidentes operativos ilustrativos durante la actividad.',
        'Completo: añade orientación ficticia para organizar la respuesta del comercio.',
      ],
      condiciones: [
        'Estas categorías sólo definen el universo Brisa; no describen un producto comercial estándar.',
        'No se promete recuperar ventas, deudas, pérdidas o beneficios de una operación real.',
      ],
      acompanamiento: [
        'Los ejemplos ayudan a distinguir atención al público y funcionamiento cotidiano.',
        'La web no atiende reclamaciones de terceros ni presta asesoría jurídica.',
      ],
      proceso: [
        'Elige actividad, tipo de local y prioridad del comercio ficticio.',
        'Selecciona una aseguradora y compara los paquetes ilustrativos.',
        'Revisa el escenario; edítalo para explorar otra prioridad de operación.',
      ],
      preguntas: [
        '¿Es lo mismo que daños para empresas? No en este demo: aquí se representa la actividad y relación con terceros, no el inventario patrimonial.',
        '¿Puedo indicar mis ventas? No. No se capturan cifras comerciales ni contratos.',
        '¿Incluye seguro de crédito? No; ese producto no forma parte del alcance ficticio definido aquí.',
        '¿El sitio gestiona reclamaciones? No. Sólo permite recorrer una simulación y su resumen.',
      ],
      documentos: [
        'Guía de alcance: lee la definición de riesgos comerciales utilizada exclusivamente por este demo.',
        'No existen convenios, contratos o expedientes descargables; toda la información del ejemplo está en pantalla.',
      ],
    },
  },
  {
    slug: 'afinidad',
    name: 'Afinidad',
    category: 'Una comunidad en común',
    description: 'Una comunidad, distintos planes y una forma compartida de explorar opciones.',
    audience: 'Asociaciones, empresas y comunidades educativas ficticias con intereses comunes.',
    imageAlt:
      'Integrantes de una comunidad conversando en una mesa de trabajo, imagen ilustrativa generada',
    brief:
      'En Brisa, Afinidad es un programa ficticio de acceso a opciones de movilidad y hogar para integrantes de una comunidad.',
    proposal: {
      propuesta: [
        'Parte del vínculo que reúne a una comunidad y de lo que le interesa explorar.',
        'Afinidad organiza un recorrido compartido; no equivale a gastos médicos colectivo.',
      ],
      personas: [
        'Representa una asociación, empresa o comunidad educativa inventada.',
        'Selecciona un rango de integrantes sin acreditar vínculos ni cargar padrones.',
      ],
      coberturas: [
        'Esencial: guía ilustrativa de opciones de movilidad para la comunidad.',
        'Ampliado: añade opciones de hogar de ejemplo dentro del programa.',
        'Completo: añade acompañamiento ficticio al organizador y a integrantes.',
      ],
      condiciones: [
        'Son niveles de un programa de demostración, no una póliza colectiva ni inscripción automática.',
        'El interés elegido contextualiza el resumen; no sustituye productos ni genera descuentos o coberturas para cada integrante.',
      ],
      acompanamiento: [
        'Distingue las preguntas del organizador de las decisiones de cada integrante.',
        'El sitio no incorpora personas, cobra cuotas o comparte datos de miembros.',
      ],
      proceso: [
        'Define comunidad, tamaño e interés de ejemplo.',
        'Elige aseguradora y nivel ilustrativo del programa.',
        'Revisa el resumen sin registrar a la comunidad ni a sus integrantes.',
      ],
      preguntas: [
        '¿Qué significa Afinidad aquí? Es el nombre de este programa ficticio para explorar opciones mediante un vínculo comunitario.',
        '¿Incluye seguro médico colectivo? No. Esa modalidad tiene su propia ficha y escenario.',
        '¿Pertenecer a la comunidad me da cobertura? No. El demo no registra personas ni activa prestaciones.',
        '¿Qué pasa si dejo la comunidad? No hay afiliación real ni derechos que cambiar; sólo estás recorriendo un escenario.',
      ],
      documentos: [
        'Guía del programa: distingue organizador, integrantes e intereses seleccionados.',
        'No se emiten convenios, credenciales o certificados, ni se piden datos de asociaciones reales.',
      ],
    },
  },
  {
    slug: 'hogar',
    name: 'Seguro de hogar',
    category: 'El lugar que habitas',
    description:
      'Explora opciones para el lugar donde transcurren tus días y las cosas que lo hacen tuyo.',
    audience: 'Propietarios y arrendatarios ficticios de casas o departamentos.',
    imageAlt: 'Dos personas en la terraza de una casa con jardín, imagen ilustrativa generada',
    brief:
      'Piensa en tu espacio, sus contenidos y las pequeñas rutinas que convierten una vivienda en hogar.',
    proposal: {
      propuesta: [
        'Distingue el espacio que habitas de los objetos que guardas en él.',
        'Compara niveles ilustrativos para representar distintos intereses de cuidado.',
      ],
      personas: [
        'El ejemplo admite casa o departamento, propio o rentado.',
        'No necesitas dirección, fotografías privadas ni un inventario de pertenencias.',
      ],
      coberturas: [
        'Esencial: contenidos del hogar de ejemplo.',
        'Ampliado: añade daños ilustrativos a la vivienda.',
        'Completo: añade orientación y asistencias domésticas ficticias.',
      ],
      condiciones: [
        'La selección de vivienda o tenencia describe el escenario, sin evaluar un inmueble real.',
        'Elegir un paquete no activa reparaciones, reposiciones ni atención en domicilio.',
      ],
      acompanamiento: [
        'La ficha te ayuda a separar contenidos, vivienda y asistencia en la comparación.',
        'El sitio no recibe reportes, fotografías de daños ni solicitudes de visita.',
      ],
      proceso: [
        'Elige tipo de vivienda, relación con ella e interés del personaje.',
        'Compara paquetes y selecciona una aseguradora ficticia.',
        'Revisa el resumen y vuelve a editar si quieres representar otro hogar.',
      ],
      preguntas: [
        '¿Puedo probarlo si rento? Sí, la opción arrendatario forma parte de los escenarios ficticios.',
        '¿Vivienda y contenidos son lo mismo? En este ejemplo se distinguen el espacio físico y los objetos; cada paquete muestra su alcance ilustrativo.',
        '¿Se solicitan mi domicilio o pertenencias? No. El formulario utiliza opciones generales sin información real.',
        '¿Puedo pedir una reparación? No; las asistencias son contenido ficticio y no conectan con proveedores.',
      ],
      documentos: [
        'Guía de lectura: identifica qué elementos del hogar aparecen en cada nivel.',
        'El resultado sólo es una simulación; no se generan pólizas, avalúos ni órdenes de servicio.',
      ],
    },
  },
];

export const detailSections = [
  { id: 'propuesta', title: 'La propuesta de protección' },
  { id: 'personas', title: '¿Para quién está pensado?' },
  { id: 'coberturas', title: 'Coberturas y opciones' },
  { id: 'condiciones', title: 'Condiciones que debes conocer' },
  { id: 'acompanamiento', title: 'Asistencia y acompañamiento' },
  { id: 'proceso', title: 'Cómo dar el siguiente paso' },
  { id: 'preguntas', title: 'Preguntas frecuentes' },
  { id: 'documentos', title: 'Documentación del producto' },
] as const;
