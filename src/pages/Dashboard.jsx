import React from 'react';

function Dashboard(props) {
    console.log("Dashboard props", props);
    return (
        <div className="App">
            <h2>Introducción</h2>
            <h3>SCRUM</h3>
            <p>Scrum es un marco de trabajo ágil utilizado para la gestión y desarrollo de proyectos. Se basa en la implementación de buenas prácticas y valores que fomentan el trabajo colaborativo y la entrega de productos de alta calidad en ciclos cortos de tiempo conocidos como Sprints. Scrum está diseñado para adaptarse a proyectos y equipos de cualquier tamaño y puede aplicarse en una gran variedad de industrias. El proceso de Scrum incluye reuniones diarias breves, en las que el equipo revisa los avances del día anterior y establece objetivos para el día siguiente, reuniones de planificación de Sprint, revisiones de Sprint y retrospectivas de Sprint, que son utilizadas para mejorar constantemente el proceso. </p>
            <img src={ require('./scrum.png') } /> <a>Imagen tomada de Scrum: el pasado y el futuro, ver refeencia [1]</a>
            <h3>Bibliografía</h3>
            <p>[1] Miquel Rodríguez, 24 de diciembre de 2020, Scrum: el pasado y el futuro</p>
            <td><a href="https://netmind.net/es/scrum-el-pasado-y-el-futuro/" target="_blank">Scrum: el pasado y el futuro</a></td>
            <p>[2] Joel Francia Huambachano, 25 de septiembre de 2017, ¿Qué es Scrum?</p>
            <td><a href="https://www.scrum.org/resources/blog/que-es-scrum" target="_blank">¿Qué es Scrum?</a></td>
        </div>
    );
}

export default Dashboard;
