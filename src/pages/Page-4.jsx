import React from 'react';
import PDF1 from "./proyecto1.pdf";
import PDF2 from "./proyecto2.pdf";

const Page4 = props => {
    return (
        <div>
            <h2>Reporte de las modificaciones realizadas</h2>
            <p>Se adjuntan los reportes de actividades de los dos proyectos trabajados, así como un pequeño visor en linea.</p>
            <h3>Download Proyecto 1</h3>
            <td><a href='./proyecto1.pdf' download>Click para descargar el reporte de actividades 1</a></td>
            <br/>
            <embed
                src={PDF1 + "#toolbar=0"}
                    type="application/pdf"
                    height={500}
                    width={1000}
                    scale={10}
            />
            <h3>Download Proyecto 2</h3>
            <td><a href='./proyecto2.pdf' download>Click para descargar el reporte de actividades 2</a></td>
            <br/>
            <embed
                src={PDF2 + "#toolbar=0"}
                    type="application/pdf"
                    height={500}
                    width={1000}
                    scale={20}
            />
        </div>
    );
};

export default Page4;
