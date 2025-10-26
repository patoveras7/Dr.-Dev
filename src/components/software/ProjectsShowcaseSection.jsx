import React from "react";
import IndividualProject from "./IndividualProject";

const ProjectsShowcaseSection = ({ onShowTechs }) => {
  return (
    <section className="flex flex-col gap-12 items-center w-full mt-3 bg-clearIceFullLight pb-[48px] pt-[15px]">
      <IndividualProject
        id="alkemy-pocket"
        title="AlkemyPocket"
        description='Desarrollo de billetera virtual "digitalizando" el bolsillo del consumidor. La aplicación cuenta con una interfaz interactiva, responsiva e intuitiva para el cliente capaz de efectuar depósitos, concretar transacciones, listar contactos frecuentes, extraer dinero, asociar tarjetas o solicitar alta de nuevas cuentas tanto en pesos argentinos como en moneda extranjera. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
        images={[
          "/images/Proyectos/AlkemyPocket1.jpg",
          "/images/Proyectos/AlkemyPocket2.jpg",
          "/images/Proyectos/AlkemyPocket3.jpg",
          "/images/Proyectos/AlkemyPocket4.jpg",
          "/images/Proyectos/AlkemyPocket5.jpg",
          "/images/Proyectos/AlkemyPocket6.jpg",
          "/images/Proyectos/AlkemyPocket7.jpg",
          "/images/Proyectos/AlkemyPocket8.jpg",
          "/images/Proyectos/AlkemyPocketDataBase.png"
        ]}
        githubUrl="https://github.com/patoveras7/WalletAP-Back"
        onShowTechs={onShowTechs}
      />

      <IndividualProject
        id="apple-be"
        title="AppleBe"
        description='Plataforma e-commerce dedicada a la venta de artículos de tecnología en general pero centrada en su mayoría a la comercialización de productos Apple. El usuario puede observar productos, registrarse, loguearse y completar su carrito de compras. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
        images={[
          "/images/Proyectos/Apple1.jpg",
          "/images/Proyectos/Apple2.jpg",
          "/images/Proyectos/Apple3.jpg",
          "/images/Proyectos/Apple4.jpg"
        ]}
        githubUrl="https://github.com/patoveras7/appleBe"
        onShowTechs={onShowTechs}
      />

      <IndividualProject
        id="rompiendo-barreras"
        title="RompiendoBarreras"
        description='Plataforma web destinada a la enseñanza de todo tipo de idiomas. El sitio acepta el pago de determinadas membresías que posibilitan el acceso a ciertos cursos de distintos lenguajes. Cada lenguaje cuenta con distintos tipos de curso dependiendo la motivación que haya tenido el usuario a la hora de estudiar el idioma, sea rendir un exámen internacional, viajar por placer, viajar por trabajo, trabajar para extranjero, etc. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
        images={[
          "/images/Proyectos/RB1.jpeg",
          "/images/Proyectos/RB2.jpeg",
          "/images/Proyectos/RB3.jpeg"
        ]}
        githubUrl="https://github.com/patoveras7/RompiendoBarreras-Frontend"
        onShowTechs={onShowTechs}
      />
    </section>
  );
};

export default ProjectsShowcaseSection;
