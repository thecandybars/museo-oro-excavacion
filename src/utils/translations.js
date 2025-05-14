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
      indice: [
        "La ciudad colonial",
        // "La casa colonial",
        "Excavaciones en la casa",
        "Los objetos",
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
          title: "Plaza Real",
          description: "Importante sitio histórico y religioso",
          button: "",
        },
        {
          id: 1,
          caption: "2",
          title: "Nuevo 1",
          description: "Centro Histórico de Cartagena",
        },
        {
          id: 2,
          caption: "3",
          title: "Plaza Mayor",
          description: "Centro Histórico de Cartagena",
        },
        {
          id: 3,
          caption: "4",
          title: "Nuevo 2",
          description: "Centro Histórico de Cartagena",
          button: "Visitar Casa Colonial",
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
        "Observa las diferentes capas de la excavación arqueológica. Haz clic en los puntos de interés para obtener más información y acceder a la vista 3D.",
      markers: [
        {
          caption: "1",
          title: "Excavación Arqueológica",
          description:
            "La descripción de la excavación arqueológica se muestra aquí.",
          button: "Cerrar",
        },
        {
          caption: "2",
          title: "Excavación Arqueológica",
          description:
            "La descripción de la excavación arqueológica se muestra aquí.",
          button: "Cerrar",
        },
      ],
      botones: {
        linkPiezas: "Explorar piezas",
      },
    },

    piezas: {
      sideTitle: "Los objetos",
      sideParagraph:
        "Explora esta pieza arqueológica en detalle utilizando las herramientas disponibles.",
      modelos: [
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
          id: 2,
          title: "Botella",
          sideTitle: "Botella para jarabe",
          sideParagraph:
            "Varias de las botellas excavadas sirvieron de envase para medicamentos, algunos de producción local, como los de la Farmacia Román, situada en cercanías de la casa del Museo del Oro Zenú, y otros importados de Estados Unidos y Europa.\nEsta botella contenía un jarabe que calmaba el dolor del brote de dientes de niños y niñas. Aunque este fármaco se produjo desde el siglo XIX, solo hasta el siglo XX se descubrió que uno de sus contenidos, la morfina, era letal para los infantes.",
          markers: [
            {
              id: 1,
              title: "CURTIS & PERKINS PROPRIETORS",
              description:
                "Comercializadores del medicamento. Curtis es el yerno de la señora Winslow y Perkins, su socio. ",
            },
            {
              id: 2,
              title: "Mrs. WINSLOW'S SYRUP",
              description:
                "El nombre del medicamento se toma de la médica Charlotte N. Winslow, suegra de Curtis. Al asociarse a una mujer le daba un aire de confianza maternal al jarabe.",
            },
            {
              id: 3,
              title: "THE ANGLO AMERICAN DRUG CO SUCCESSORS",
              description: "Nombre de la compañía farmacéutica",
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
              description:
                "Estandarización del tamaño de los orificios como indicador de elaboración industrial",
            },
          ],
        },
        {
          id: 4,
          title: "Embudo",
          sideTitle: "Embudo inglés del siglo XIX",
          sideParagraph:
            "El diseño azul de este fragmento de embudo fue inicialmente grabado en una plancha de cobre por un artesano. Luego se imprimió en una tinta azul con óxido de cobalto, sobre un papel de seda que se adhirió encima del bizcocho (primera cocción de la loza) recubierto con una capa de esmalte blanco. Para darle el vidriado brillante se le aplicó un esmalte transparente y se quemó de nuevo. En este proceso, el diseño se transfería a la pieza.",
          markers: [
            {
              id: 1,
              description: "Unión del diseño impreso en el papel",
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
              description: "Vidriado opaco en dos tonos de azul",
            },
            {
              id: 2,
              description:
                "Pasta original quemada antes de aplicar el esmalte (bizcocho)",
            },
          ],
        },
        {
          id: 6,
          title: "Tazón",
          sideTitle: "Tazón inglés con diseño floral",
          sideParagraph:
            "Los fragmentos de loza industrial encontrados en la casa no solo cuentan sobre los gustos de los miembros del hogar. También revelan las técnicas de producción de diferentes lugares y épocas en Europa, donde los ingleses eran los mayores productores y exportadores, y en menor proporción los franceses, alemanes y españoles.\nEste es un tazón de loza inglesa pintada a mano del siglo XIX.",
          markers: [
            {
              id: 1,
              description: "Diseños florales pintados a mano",
            },
          ],
        },
        {
          id: 7,
          title: "Basinica",
          sideTitle: "Bacinica inglesa",
          sideParagraph:
            "Esta bacinica decorada con la técnica de transferencia muestra un motivo elaborado tal vez por el artista inglés W.H. Bartlett (1809-1854). Son reconocidos sus grabados en acero de paisajes idealizados de la Gran Bretaña, Estados Unidos, Canadá y el Cercano Oriente. Según la decoración y el color, la bacinica fue elaborada a mediados del siglo XIX, en Inglaterra. ",
          markers: [
            {
              id: 1,
              description:
                "Para distinguirse, cada fábrica de loza diseñó una o varias marcas, que se imprimían en la base del objeto.",
            },
          ],
        },
        {
          id: 8,
          title: "Basin",
          sideTitle: "Bacinica inglesa",
          sideParagraph:
            "La idea de higiene durante buena parte del periodo colonial fue distinta a la actual. La orina y heces se depositaban en los bacines, que se mantenían bajo las camas o acomodados en una silla inodoro.\nCuando estos desechos no se vertían en la huerta, en el albañal o en la letrina, eran botados a la calle. Sin lluvias, esta práctica contribuía al ambiente malsano de Cartagena de Indias.",
          markers: [
            {
              id: 1,
              description: "Superficie vidriada",
            },
            {
              id: 2,
              description: "Pasta cerámica",
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
          button: "Visit Colonial House",
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
