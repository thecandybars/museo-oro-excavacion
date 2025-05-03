const translations = {
  es: {
    header: {
      btnHome: "Inicio",
      btnBack: "Volver",
      settings: {
        menuFont: "Texto Grande",
        menuContrast: "Alto Contraste",
      },
    },
    inicio: {
      titulo: "Seretos de una casa cartagenera",
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
        "Explora los puntos de interés arqueológico en este mapa detallado de Cartagena. Haz clic en los marcadores para obtener más información sobre cada ubicación.",
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
          title: "Plaza Mayor",
          description: "Centro Histórico de Cartagena",
          button: "Visitar Casa Colonial",
        },
        {
          caption: "2",
          title: "Plaza Real",
          description: "Importante sitio histórico y religioso",
          button: "",
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
    },
  },
  en: {
    header: {
      btnHome: "Home",
      btnBack: "Back",
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
          caption: "1",
          title: "Plaza Mayor",
          description: "Cartagena's historic downtown",
          button: "Visit Colonial House",
        },
        {
          caption: "2",
          title: "Plaza Real",
          description: "Important historical and religious site",
          button: "",
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
