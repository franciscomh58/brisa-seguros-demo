export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  published: string;
  publishedLabel: string;
  author: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: {
    heading: string;
    paragraphs: string[];
    points: string[];
  }[];
  relatedInsuranceSlug: string;
  relatedInsuranceLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'tu-auto-y-tus-planes',
    title: 'Tu auto también forma parte de tus planes',
    category: 'Movilidad',
    summary:
      'El camino al trabajo, una visita o una escapada: un mismo auto puede acompañar planes muy distintos. Una historia sobre movilidad y preguntas claras.',
    published: '2026-10-10',
    publishedLabel: '10 de octubre de 2026',
    author: 'Equipo editorial Brisa · demo',
    image: {
      src: '/images/stock/13-blog-auto-viaje.webp',
      alt: 'Pareja junto a un auto estacionado y una bolsa de viaje; imagen ilustrativa generada.',
      width: 1536,
      height: 1024,
    },
    sections: [
      {
        heading: 'Un vehículo, muchas historias',
        paragraphs: [
          'Hay autos que parecen conocer de memoria el camino al trabajo. Otros se llenan de bolsas para una salida de fin de semana o de conversaciones al volver a casa. Más allá de su tamaño, un vehículo forma parte de rutinas que cambian con nosotros.',
          'En nuestra historia, una pareja comparte un sedán para ir al trabajo y visitar a su familia. Durante la semana predominan los trayectos cortos; el fin de semana aparecen distancias distintas y cosas que necesitan llevar consigo.',
        ],
        points: [],
      },
      {
        heading: 'Ponerle nombre al escenario',
        paragraphs: [
          'Cuando empieza a conversar sobre seguros, la pareja descubre que decir «tenemos un auto» cuenta sólo una parte de la historia. También importa explicar cómo lo usa y qué preguntas quiere resolver sobre cada alternativa.',
          'Uno piensa en los incidentes que pueden involucrar a otras personas. La otra persona quiere entender qué significa hablar de robo o de daños al propio vehículo. Son preocupaciones distintas, y ponerles nombre ayuda a mantener la conversación ordenada.',
        ],
        points: [],
      },
      {
        heading: 'Mirar lo que cambia entre opciones',
        paragraphs: [
          'Los paquetes ficticios de Brisa cuentan esas diferencias por capas: Esencial presenta responsabilidad civil y orientación vial; Ampliado añade robo total; Completo incorpora daños materiales. Los nombres sirven para organizar esta historia, no para describir condiciones de una aseguradora real.',
        ],
        points: [
          '¿Qué situación describe cada prestación?',
          '¿Qué añade una opción respecto de la anterior?',
          '¿Qué condiciones necesitaríamos conocer antes de decidir en un caso real?',
        ],
      },
      {
        heading: 'El siguiente trayecto',
        paragraphs: [
          'La pareja termina su conversación con preguntas más concretas. No ha encontrado una respuesta universal para todos los autos; ha aprendido a distinguir qué quiere entender sobre el suyo. En Brisa, esa claridad es el punto de partida para seguir explorando la movilidad y los planes que la acompañan.',
        ],
        points: [],
      },
    ],
    relatedInsuranceSlug: 'auto-individual',
    relatedInsuranceLabel: 'Explorar seguro de auto',
  },
  {
    slug: 'lo-que-hace-tu-hogar',
    title: 'Lo que hace de una casa tu hogar',
    category: 'Hogar',
    summary:
      'Un hogar reúne espacios, objetos y rutinas. Separarlos en una historia sencilla ayuda a conversar sobre distintas formas de cuidarlo.',
    published: '2026-10-07',
    publishedLabel: '7 de octubre de 2026',
    author: 'Equipo editorial Brisa · demo',
    image: {
      src: '/images/stock/14-blog-hogar-interior.webp',
      alt: 'Rincón de lectura con sofá claro, libros y plantas; imagen ilustrativa generada.',
      width: 1536,
      height: 1024,
    },
    sections: [
      {
        heading: 'Más que cuatro paredes',
        paragraphs: [
          'La mesa donde se comparte el desayuno, un rincón para leer o la ventana que recibe la luz de la tarde: un hogar también se construye con pequeñas rutinas. Cuando hablamos de cuidarlo, cada persona puede estar pensando en algo distinto.',
          'Para este artículo imaginamos un departamento rentado. Su habitante ha reunido libros, muebles y objetos que hacen suyo el espacio. Es un personaje ficticio, y no necesitamos conocer una dirección para acompañar su historia.',
        ],
        points: [],
      },
      {
        heading: 'Espacio y contenidos',
        paragraphs: [
          'En el catálogo de Brisa separamos dos ideas: la vivienda como espacio físico y los contenidos como los objetos que forman parte de la vida en ella. Esa distinción organiza los paquetes ilustrativos de la ficha de hogar.',
          'En la historia del departamento, algunos elementos pertenecen al espacio y otros llegaron con quien lo habita. Esa diferencia abre preguntas sobre qué se quiere considerar al conversar sobre un seguro, sin dar por hecho que todo se incluye de la misma manera.',
        ],
        points: [],
      },
      {
        heading: 'Las preguntas detrás de cada objeto',
        paragraphs: [
          'Un escritorio puede ser un lugar de trabajo y una mesa puede reunir recuerdos. El significado personal de un objeto no siempre es lo que describe una ficha de producto. Por eso, nuestro personaje separa lo que le importa de lo que todavía necesita comprender sobre las opciones.',
        ],
        points: [
          '¿El ejemplo habla de contenidos, vivienda o ambos?',
          '¿La asistencia aparece como una prestación diferente?',
          '¿Qué límites o condiciones necesitaría leer en una propuesta real?',
        ],
      },
      {
        heading: 'Dar espacio a tus preguntas',
        paragraphs: [
          'En Brisa, Esencial se concentra en contenidos, Ampliado añade vivienda y Completo incorpora asistencias ficticias. Son niveles ilustrativos para acompañar esa lectura. La historia del departamento termina donde comenzó: en los pequeños momentos que hacen suyo un lugar, ahora con preguntas más claras.',
        ],
        points: [],
      },
    ],
    relatedInsuranceSlug: 'hogar',
    relatedInsuranceLabel: 'Explorar seguro de hogar',
  },
  {
    slug: 'etapas-y-bienestar',
    title: 'Distintas etapas, nuevas preguntas sobre bienestar',
    category: 'Bienestar',
    summary:
      'Los planes personales cambian y con ellos aparecen nuevas preguntas. Una historia ficticia sobre bienestar, familia y conversaciones sencillas.',
    published: '2026-10-04',
    publishedLabel: '4 de octubre de 2026',
    author: 'Equipo editorial Brisa · demo',
    image: {
      src: '/images/stock/15-blog-bienestar.webp',
      alt: 'Dos mujeres conversan sentadas en una banca de jardín; imagen ilustrativa generada.',
      width: 1536,
      height: 1024,
    },
    sections: [
      {
        heading: 'Los planes también evolucionan',
        paragraphs: [
          'Empezar un proyecto, compartir casa o sumar nuevas rutinas puede cambiar aquello a lo que dedicamos atención. A veces queremos conocer opciones para nosotros; otras veces imaginamos una conversación que incluye a la familia.',
          'En esta historia, dos personas empiezan a compartir sus planes cotidianos. Al hablar de bienestar descubren que cada una da por conocidas cosas distintas: qué significa una consulta, cómo se presenta la atención hospitalaria o qué preguntas surgen cuando se menciona a un grupo familiar.',
        ],
        points: [],
      },
      {
        heading: 'Empezar por lo que queremos entender',
        paragraphs: [
          'La primera conversación no tiene que resolverlo todo. Nuestros personajes anotan los conceptos que quieren distinguir y evitan suponer que una misma palabra tiene idéntico alcance en todas las opciones que podrían encontrar.',
          'Su lista empieza con preguntas generales: a quién se dirige una alternativa, qué describe cada prestación y qué condiciones acompañan a la información. Esta historia no necesita diagnósticos ni recomendaciones de salud para mostrar el valor de una explicación comprensible.',
        ],
        points: [],
      },
      {
        heading: 'Leer las opciones a tu ritmo',
        paragraphs: [
          'En el universo ficticio de Brisa, Esencial presenta consultas y guía de atención; Ampliado añade atención hospitalaria; Completo incorpora seguimiento y orientación complementaria. Estas capas ilustran distintas conversaciones, sin describir una red médica o un servicio disponible para el lector.',
        ],
        points: [
          '¿La historia representa a una persona o a un grupo familiar?',
          '¿Qué diferencia hay entre las prestaciones descritas?',
          '¿Qué preguntas quedan abiertas al leer cada opción?',
        ],
      },
      {
        heading: 'Dejar espacio a las preguntas',
        paragraphs: [
          'Los personajes cierran su lista sin buscar una respuesta única para todas las etapas de la vida. Sus planes seguirán cambiando, y con ellos las preguntas. Esta lectura acompaña una experiencia ficticia; no ofrece evaluación médica, orientación clínica ni una recomendación de seguro para una situación real.',
        ],
        points: [],
      },
    ],
    relatedInsuranceSlug: 'gastos-medicos-individual',
    relatedInsuranceLabel: 'Explorar salud personal',
  },
  {
    slug: 'un-negocio-en-su-dia-a-dia',
    title: 'Un negocio se cuenta desde lo que hace cada día',
    category: 'Negocios',
    summary:
      'Abrir el local, preparar el espacio y recibir personas forma parte de una misma historia. Exploremos dos miradas dentro del catálogo ficticio.',
    published: '2026-10-01',
    publishedLabel: '1 de octubre de 2026',
    author: 'Equipo editorial Brisa · demo',
    image: {
      src: '/images/stock/16-blog-negocio-cafe.webp',
      alt: 'Persona preparando el mostrador de una cafetería; imagen ilustrativa generada.',
      width: 1536,
      height: 1024,
    },
    sections: [
      {
        heading: 'Antes de abrir la puerta',
        paragraphs: [
          'Imagina una pequeña tienda que empieza la mañana acomodando productos y preparando el espacio para recibir visitas. Detrás de esa rutina hay objetos, tareas y personas que cumplen funciones distintas.',
          'La tienda de esta historia no existe, pero permite observar dos miradas del universo Brisa: los bienes físicos y la actividad cotidiana. El mostrador forma parte del espacio; la conversación con una persona que entra al local forma parte de la operación. Cada mirada abre preguntas diferentes.',
        ],
        points: [],
      },
      {
        heading: 'Mirar los bienes',
        paragraphs: [
          'La ficha de daños para empresas se concentra en equipos, inventario, mobiliario y espacio de trabajo. Su recorrido permite representar una oficina, un taller o un almacén mediante opciones generales.',
          'En nuestra tienda imaginaria, distinguir esas categorías ayuda a reconocer qué se está describiendo. Hablar del mobiliario no responde por sí solo las preguntas sobre atención al público, del mismo modo que describir una rutina no equivale a detallar los bienes que la hacen posible.',
        ],
        points: [],
      },
      {
        heading: 'Mirar la actividad',
        paragraphs: [
          'Riesgos comerciales pone el foco en la atención al público y la operación cotidiana de una tienda, cafetería o negocio de servicios. Esencial presenta responsabilidad frente a terceros de ejemplo, Ampliado añade incidentes operativos ilustrativos y Completo suma orientación ficticia para organizar la respuesta del comercio.',
        ],
        points: [
          '¿La conversación se centra en un bien o en una actividad?',
          '¿Qué situaciones representa la descripción del paquete?',
          '¿Qué información haría falta aclarar en una propuesta real?',
        ],
      },
      {
        heading: 'Una historia, distintas preguntas',
        paragraphs: [
          'Al terminar el día, la tienda ha reunido ambas miradas sin confundirlas. Entender qué cuenta cada opción permite hacer preguntas más concretas. Los nombres y prestaciones de esta lectura pertenecen al universo ficticio de Brisa y no definen categorías comerciales reales ni garantizan protección.',
        ],
        points: [],
      },
    ],
    relatedInsuranceSlug: 'riesgos-comerciales',
    relatedInsuranceLabel: 'Explorar riesgos comerciales',
  },
];
