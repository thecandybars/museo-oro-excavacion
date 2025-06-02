const translations = {
  es: {
    header: {
      btnHome: "Inicio",
      btnBack: "Volver",
      btnNext: "Siguiente",
      settings: {
        menuFont: "Texto Grande",
        menuContrast: "Alto Contraste",
      },
    },
    inicio: {
      titulo: "Secretos de una casa cartagenera",
      subtitulo:
        "Vive esta experiencia arqueológica. Aquí encontrarás historias sobre…",
      indice: [
        "La ciudad colonial",
        "Excavaciones en la casa",
        "Cosas del pasado",
      ],
      boton: "Iniciar recorrido",
    },
    map: {
      sideTitle: "La ciudad colonial",
      sideParagraph:
        "Cartagena fue construida en territorios de indígenas malibúes asentados en la bahía. En 1533 Pedro de Heredia fundó la ciudad puerto en este lugar, a pesar de la escasez de agua para el consumo y por las ventajas que brindaba el lugar para la llegada de las embarcaciones y la defensa de la ciudad.\nExisten muchos planos de la ciudad que permiten conocer sus transformaciones a lo largo de los siglos. Este plano muestra a Cartagena y su entorno en 1586, cuando es sitiada y saqueada por el corsario Francis Drake. Explora con la lupa las manzanas y las casas.",
      sideBibliography: {
        title: "Bibliografia",
        books: [
          {
            title:
              "Historia de Cartagena de Indias durante la dominación española",
            author: "Gabriel Porras Troconis",
            footer: "Biblioteca Nacional de Colombia, 1954",
          },
          {
            title:
              "Cartagena de Indias: Ciudad y puerto durante el periodo colonial",
            author: "Carmen Borrego Plá",
            footer: "Editorial Escuela de Estudios Hispanoamericanos, 1983",
          },
          {
            title: "El Caribe colombiano en la historia colonial",
            author: "Alfonso Múnera",
            footer: "El Áncora Editores, 1998",
          },
        ],
      },
      markers: [
        {
          id: 0,
          caption: "1",
          title: "Modelo del muelle de Cartagena, 1571",
          description:
            "La Plaza Real, hoy Plaza de la Aduana, era el centro del comercio en donde se subastaban personas africanas para ser esclavizadas y se ofertaban mercancías. El comercio de personas estuvo amparado en el principio de la propiedad de un ser humano sobre el otro y sobre su descendencia. Esta plaza, al igual que la conocida hoy como del Reloj, ha sido testigo de la trata y explotación de personas a lo largo del tiempo.",
        },
        {
          id: 1,
          caption: "2",
          title: "Plaza Mayor",
          description:
            "En la plaza administrativa, conocida como Plaza Mayor, hoy Parque de Bolívar, se establecieron las instituciones coloniales que rigieron la vida de la ciudad y de sus habitantes. Fueron pocas las casas de propiedad de particulares en esta plaza.",
        },
        {
          id: 2,
          caption: "3",
          description:
            "En 1570, Cartagena tenía cerca de 400 casas construidas en piedra y en bahareque. Un incendio de 1552 había destruido las construcciones en palma y caña. En el ataque de Drake de 1586, la ciudad pierde de nuevo la mitad de sus casas. Por orden del cabildo, los propietarios fueron obligados a reconstruirlas en mampostería (piedra y ladrillo).",
          list: "Casas con fachadas de cal.Casas de bahareque o madera",
        },
        {
          id: 3,
          caption: "4",
          title: "La manzana del Museo del Oro Zenú durante la toma de Drake",
          list: "Gobernación.Casa del carcelero.Botica.Casa Museo del Oro Zenú.Centros de manzana verdes por las huertas",
          button: "Visita la excavación de la casa",
        },
      ],
    },
    casa: {
      sideTitle: "Casa Colonial",
      sideParagraph:
        "Explora el mapa de esta casa colonial de los siglos XVII - XVIII. Haz clic en los puntos de interés para obtener más información sobre cada área.",
      sideBibliography: {
        title: "Bibliografia",
        books: [
          {
            title:
              "Historia de Cartagena de Indias durante la dominación española",
            author: "Gabriel Porras Troconis",
            footer: "Biblioteca Nacional de Colombia, 1954",
          },
          {
            title:
              "Cartagena de Indias: Ciudad y puerto durante el periodo colonial",
            author: "Carmen Borrego Plá",
            footer: "Editorial Escuela de Estudios Hispanoamericanos, 1983",
          },
          {
            title: "El Caribe colombiano en la historia colonial",
            author: "Alfonso Múnera",
            footer: "El Áncora Editores, 1998",
          },
        ],
      },
      markers: [
        {
          caption: "1",
          title: "Aljibe",
          description:
            "Depósito de agua subterráneo típico de las casas coloniales.",
          button: "Ver excavacion",
        },
      ],
    },
    excavacion: {
      sideTitle: "Excavaciones en la casa",
      sideParagraph:
        "Las arqueólogas y arqueólogos seleccionaron dos áreas estratégicas para excavar en la casa del Museo del Oro Zenú. En cada una obtuvieron información diferente.\nEn la excavación de la antigua huerta o solar de la casa, donde los habitantes de las casas coloniales botaban los desechos, hallaron huellas de una letrina del siglo XIX con numerosos artefactos. La excavación al lado del aljibe, en lo que era el pozo de aguas residuales, permitió conocer sobre los pobladores indígenas prehispánicos y del contacto inicial con los españoles.",
      markers: [
        {
          caption: "1",
          title: "El albañal",
          sideParagraph:
            "El albañal, construido cerca de la cocina y del aljibe, sirvió como desagüe de las aguas sucias producto de las actividades domésticas.\nLa excavación arqueológica mostró en esta área una alteración de las capas de suelo causada por la construcción del aljibe. En estas capas se encontraron objetos de la vida cotidiana indígena.",
          description:
            "Este es el dibujo arqueológico de un perfil estratigráfico. Cada estrato o nivel es un depósito de actividades de una ocupación humana o de un evento natural. Aquí los estratos están revueltos.",
          button: "Cerrar",
        },
        {
          caption: "2",
          title: "Lo que cuenta una letrina",
          sideParagraph:
            "Una letrina es una estructura con foso para depositar los excrementos humanos que contribuye a disminuir los problemas de salubridad.\nEn la excavación de la letrina de la casa se encontró una acumulación de objetos que cuentan sobre los remedios usados para combatir las enfermedades más comunes en la ciudad, el cuidado personal y las prácticas de mesa.",
          description:
            "En este perfil estratigráfico se observa en la parte superior bacinicas, botellas y otros utensilios que se desecharon cuando se clausuró la letrina en el siglo XX.",
          button: "Cerrar",
        },
      ],
      botones: {
        linkNext: "Explorar excavaciones",
        linkPiezas: "Explorar piezas",
        reset: "Reiniciar exploración",
      },
    },

    piezas: {
      sideTitle: "Cosas del pasado",
      sideParagraph:
        "Arqueólogas y arqueólogos emplean dibujos técnicos y modelos tridimensionales para reconstruir la forma original de los objetos a partir de los fragmentos encontrados en las excavaciones. Los bordes, por ejemplo, permiten proyectar el diámetro de las vasijas, mientras los del cuerpo de los recipientes revelan su configuración. Para obtener información sobre su manufactura y el uso que se les dio, recurren a diversos tipos de microscopios que amplían la imagen hasta varios miles de veces y permiten explorar los detalles del fragmento a nivel microestructural. El análisis macroscópico, hecho con el ojo humano y los demás sentidos, les ayuda a identificar otros aspectos. Explora todos estos niveles de información. ",
      modelos: [
        {
          id: 4,
          title: "Embudo",
          sideTitle: "Embudo inglés del siglo XIX",
          sideParagraph:
            "El diseño azul de este fragmento de embudo fue inicialmente grabado en una plancha de cobre por un artesano. Luego se imprimió en una tinta azul con óxido de cobalto, sobre un papel de seda que se adhirió encima del bizcocho (primera cocción de la loza) recubierto con una capa de esmalte blanco.\nPara darle el vidriado brillante se le aplicó un esmalte transparente y se quemó de nuevo. En este proceso, el diseño se transfería a la pieza.",
          markers: [
            {
              id: 1,
              list: "Unión del diseño impreso en el papel",
            },
          ],
        },
        {
          id: 13,
          title: "Olla",
          sideTitle: "Olla de cocina elaborada por alfareros africanos",
          sideParagraph:
            "Parte de las vasijas usadas en las cocinas de la Cartagena colonial fueron elaboradas por personas africanas esclavizadas y “negros libres”.\nEllos abastecieron la continua y creciente demanda de estos utensilios en la ciudad y aportaron con sus tradiciones a las técnicas, formas y decoraciones.",
          markers: [
            {
              id: 1,
              description:
                "Decoración ungulada, es decir, hecha con impresiones de los dedos, típica de la tradición alfarera africana",
            },
            {
              id: 2,
              description: "Residuos de los alimentos preparados",
            },
          ],
        },
        {
          id: 2,
          title: "Botella",
          sideTitle: "Botella para jarabe",
          sideParagraph:
            "Varias de las botellas excavadas sirvieron de envase para medicamentos, algunos de producción local, como los de la Farmacia Román, situada en cercanías de la casa del Museo del Oro Zenú, y otros importados de Estados Unidos y Europa.\nEsta botella contenía un jarabe que calmaba el dolor del brote de dientes de niños y niñas. Aunque este fármaco se produjo desde el siglo XIX, solo hasta el siglo XX se descubrió que uno de sus contenidos, la morfina, era letal para los infantes.",
          markers: [
            {
              id: 1,
              title: "Marcas en la botella",
              list: "Comercializadores del medicamento: Curtis es el yerno de la señora Winslow y Perkins, su socio.El nombre del medicamento se toma de la médica Charlotte Winslow, suegra de Curtis; al asociarse a una mujer le daba un aire de confianza maternal al jarabe.Nombre de la compañía farmacéutica",
            },
          ],
        },
        {
          id: 3,
          title: "Cepillo",
          sideTitle: "Cepillo de dientes en hueso",
          sideParagraph:
            "Los cepillos de dientes de hueso y pelo animal se usaron en Europa desde el siglo XVII, cuando era considerado un objeto de lujo, hasta entrado el siglo XX.\nLos mayores productores de estos cepillos fueron Inglaterra, Alemania, Francia y Japón. Su producción solo se masificó con la invención de la máquina perforadora en 1870.",
          markers: [
            {
              id: 1,
              list: "Estandarización del tamaño de los orificios como indicador de elaboración industrial",
            },
          ],
        },
        {
          id: 10,
          title: "Escudilla",
          sideTitle: "Escudilla española",
          sideParagraph:
            "Las escudillas se usaban para servir sopas, caldos o potajes que se tomaban con cuchara o sorbidos. Esta es del tipo conocido como Columbia liso, una mayólica española producida entre 1490 y 1550.\nSu superficie vidriada brillante se obtenía con el uso del plomo triturado y el color blanco, con el estaño. Esta última técnica fue introducida en España por los árabes.",
          markers: [
            {
              id: 1,
              description:
                "Vidriado externo erosionado por el contacto con el suelo donde estuvo enterrada la escudilla",
            },
            {
              id: 2,
              list: "El vidriado en la superficie interior es más grueso y se preservó mejor.Pasta cerámica de la escudilla",
            },
          ],
        },
        {
          id: 11,
          title: "Fragmento de cerámica indígena",
          sideTitle: "Fragmento de cerámica indígena tipo Crespo",
          sideParagraph:
            "La decoración, el color y el material de este fragmento permiten asociarlo al tipo cerámico Crespo definido por la arqueóloga Alicia Dussán.\nEsta alfarería indígena se ha encontrado en contextos datados desde tiempos prehispánicos hasta entrado el siglo XIX, como testimonio de la continuidad de las tradiciones cerámicas locales después de la invasión española.",
          markers: [
            {
              id: 1,
              description: "Decoración incisa en forma de V y puntos",
            },
            {
              id: 2,
              list: "Estas inclusiones de arena que se encuentran en la pasta fueron el desgrasante usado para darle cuerpo a la arcilla",
            },
            {
              id: 3,
              description:
                "El núcleo oscuro del fragmento cerámico es evidencia de oxidación de materia orgánica de la pasta por un proceso de cocción que no superó los 600°C.",
            },
          ],
        },
        {
          id: 9,
          title: "Budare",
          sideTitle: "Fragmento de budare",
          sideParagraph:
            "La yuca, planta de origen americano, fue usada desde tiempos prehispánicos para la preparación de casabe o tortillas. Para hacer la masa se rallaba la yuca y se exprimía.\nLuego se extendía y tostaba sobre el budare caliente. Sobre este también se asaban tortillas de maíz y tostaban semillas. Los españoles incorporaron pronto estos alimentos a su dieta y estos utensilios.",
          markers: [
            {
              id: 1,
              list: "La capa de hollín indica que el budare fue puesto al fuego",
            },
            {
              id: 2,
              list: "Vitrificación del contenido de silicio por acción del calor",
            },
            {
              id: 3,
              list: "Veta de corrosión de mineral rico en hierro",
            },
            {
              id: 4,
              list: "Concreciones de sales formadas por la reacción con el suelo",
            },
          ],
        },
        {
          id: 6,
          title: "Tazón",
          sideTitle: "Tazón inglés con diseño floral",
          sideParagraph:
            "Los fragmentos de loza industrial encontrados en la casa no solo cuentan sobre los gustos de los miembros del hogar.\nTambién revelan las técnicas de producción de diferentes lugares y épocas en Europa, donde los ingleses eran los mayores productores y exportadores, y en menor proporción los franceses, alemanes y españoles.\nEste es un tazón de loza inglesa pintada a mano del siglo XIX.",
          markers: [
            {
              id: 1,
              description: "Diseños florales pintados a mano",
            },
          ],
        },
        {
          id: 8,
          title: "Bacín",
          sideTitle: "Bacin",
          sideParagraph:
            "La idea de higiene durante buena parte del periodo colonial fue distinta a la actual. La orina y heces se depositaban en los bacines, que se mantenían bajo las camas o acomodados en una silla inodoro.\nCuando estos desechos no se vertían en la huerta, en el albañal o en la letrina, eran botados a la calle. Sin lluvias, esta práctica contribuía al ambiente malsano de Cartagena de Indias.",
          markers: [
            {
              id: 1,
              list: "Superficie vidriada.Pasta cerámica",
            },
          ],
        },
        {
          id: 7,
          title: "Bacinica",
          sideTitle: "Bacinica inglesa",
          sideParagraph:
            "Esta bacinica decorada con la técnica de transferencia muestra un motivo elaborado tal vez por el artista inglés W.H. Bartlett (1809-1854).\nSon reconocidos sus grabados en acero de paisajes idealizados de la Gran Bretaña, Estados Unidos, Canadá y el Cercano Oriente. Según la decoración y el color, la bacinica fue elaborada a mediados del siglo XIX, en Inglaterra. ",
          markers: [
            {
              id: 1,
              description:
                "Para distinguirse, cada fábrica de loza diseñó una o varias marcas, que se imprimían en la base del objeto.",
            },
          ],
        },
        {
          id: 1,
          title: "Botija",
          sideTitle: "Botija para vino y aceite",
          sideParagraph:
            "Un recipiente popular para contener líquidos en la América colonial fue la botija producida en España.\nVenían en los barcos llenas con vino o aceite de oliva y ayudaban a darle peso a la embarcación. Una vez consumidos estos líquidos, se usaban para guardar el agua para beber u otras bebidas fermentadas.",

          markers: [
            {
              id: 1,
              description: "Baño de cal superficial precocción",
            },
          ],
        },
        {
          id: 5,
          title: "Plato",
          sideTitle: "Plato pando sevillano",
          sideParagraph:
            "Este plato del tipo azul sobre azul fue producido en Sevilla, en el barrio de Triana, entre 1550 y 1630. La loza de este tipo buscó imitar tanto la cerámica italiana, como la porcelana china.\nPudo haber sido parte del menaje de la familia Matute, quienes pretendían preservar en América las prácticas de mesa y los gustos hispanos a la hora de consumir sus alimentos.",
          markers: [
            {
              id: 1,
              list: "Vidriado opaco en dos tonos de azul",
            },
            {
              id: 2,
              list: "Pasta original quemada antes de aplicar el esmalte (bizcocho)",
            },
          ],
        },
        {
          id: 12,
          title: "Raspador",
          sideTitle: "Raspador de piedra",
          sideParagraph:
            "Los indígenas usaron la piedra para elaborar una gran diversidad de herramientas.\nRecurrieron a rocas muy duras, principalmente chert, cuya forma redondeada y estructura facilitaba la elaboración de objetos cortantes como esta raedera empleada para desprender el cuero de los animales.",
          markers: [
            {
              id: 1,
              list: "La transparencia es una característica propia de rocas ricas en sílice como el chert ",
            },
            {
              id: 2,
              list: "El filo cortante fue obtenido por la técnica de presión aplicada en ambos lados",
            },
          ],
        },
      ],
    },
  },
  en: {
    header: {
      btnHome: "Home",
      btnBack: "Back",
      btnNext: "Next",

      settings: {
        menuFont: "Larger Font",
        menuContrast: "Higher Contrast",
      },
    },
    inicio: {
      titulo: "Secrets of a Cartagena House",
      indice: [
        "The colonial city",
        // "The colonial house",
        "House excavations",
        "The objects",
      ],
      boton: "Start tour",
    },
    map: {
      sideTitle: "The colonial city",
      sideParagraph:
        "Explore the archaeological points of interest on this detailed map of Cartagena. Click on the markers to get more information about each location.",
      sideBibliography: {
        title: "Bibliography",
        books: [
          {
            title:
              "History of Cartagena de Indias During the Spanish Domination",
            author: "Gabriel Porras Troconis",
            footer: "National Library of Colombia, 1954",
          },
          {
            title:
              "Cartagena de Indias: City and Port During the Colonial Period",
            author: "Carmen Borrego Plá",
            footer: "Editorial School of Hispanic American Studies, 1983",
          },
          {
            title: "The Colombian Caribbean in Colonial History",
            author: "Alfonso Múnera",
            footer: "El Áncora Publishers, 1998",
          },
        ],
      },
      markers: [
        {
          id: 0,
          caption: "1",
          title: "Plaza Real",
          description: "Important historical and religious site",
          button: "",
        },
        {
          id: 1,
          caption: "2",
          title: "New1",
          description: "Cartagena's historic downtown",
        },
        {
          id: 2,
          caption: "3",
          title: "Plaza Mayor",
          description: "Cartagena's historic downtown",
        },
        {
          id: 3,
          caption: "4",
          title: "New 2",
          description: "Cartagena's historic downtown",
          button: "Visit the house",
        },
      ],
    },
    casa: {
      sideTitle: "Colonial House",
      sideParagraph:
        "Explore the map of this 17th-18th century colonial house. Click on the points of interest to get more information about each area.",
      sideBibliography: {
        title: "Bibliography",
        books: [
          {
            title:
              "Historia de Cartagena de Indias durante la dominación española",
            author: "Gabriel Porras Troconis",
            footer: "Biblioteca Nacional de Colombia, 1954",
          },
          {
            title:
              "Cartagena de Indias: Ciudad y puerto durante el periodo colonial",
            author: "Carmen Borrego Plá",
            footer: "Editorial Escuela de Estudios Hispanoamericanos, 1983",
          },
          {
            title: "El Caribe colombiano en la historia colonial",
            author: "Alfonso Múnera",
            footer: "El Áncora Editores, 1998",
          },
        ],
      },
      markers: [
        {
          caption: "1",
          title: "Aljibeition",
          description:
            "Depositation of aguation subterranation typical of las casas coloniales.",
          button: "Ver excavacion",
        },
      ],
    },
    excavacion: {
      sideTitle: "House excavations",
      sideParagraph:
        "Observe the different layers of the archaeological excavation. Click on points of interest to get more information and access the 3D view.",
      markers: [
        {
          caption: "1",
          title: "Archaeological piece",
          description:
            "This is the description of the archaeological piece. Click the button to see more details.",
          button: "Go to piece",
        },
      ],
      botones: {
        linkPiezas: "Explore pieces",
      },
    },

    piezas: {
      sideTitle: "The objects",
      sideParagraph:
        "Explore this archaeological piece in detail using the tools available.",
    },
  },
};
export default translations;
