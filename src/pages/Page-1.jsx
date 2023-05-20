import React from 'react';
import PDF1 from "./proyecto1.pdf";
import PDF2 from "./proyecto2.pdf";

function Page1(props) {
    return (
        <div>
            <h1>Actividades realizadas en el curso</h1>
            <h2>Unidad 1</h2>
            <p>En la primera unidad trabajamos primero en la definición de SCRUM, cuales son las bases, definición, características, aplicaciones, beneficios, flexibilidades, ventajas, desventajas, etc.</p>
            <p>Teniendo las bases teóricas empezamos a trabajar con el backlog de nuestro proyecto, definiendo las tareas principales, requerimientos del cliente, identificando las prioridades, organizando las actividades, definiendo con el cliente los requisitos.</p>
            <p>Después empezamos a elaborar lo sprints, desglosar las actividades principales definidas en el backlog en pequeñas tareas, entregables que serán asignadas al desarrollador para empezar a trabajar en la implementación del proyecto requerido por el cliente.</p>
            <h3>Backlog</h3>
            <img src={ require('./backlog1.png') } />
            <img src={ require('./backlog2.png') } />
            <img src={ require('./backlog3.png') } />
            <h3>Sprints</h3>
            <img src={ require('./sprint1.png') } />
            <img src={ require('./sprint2.png') } />
            <img src={ require('./sprint3.png') } />
            <img src={ require('./sprint4.png') } />
            <img src={ require('./sprint5.png') } />
            <img src={ require('./sprint6.png') } />
            <h2>Unidad 2</h2>
            <p>En la segunda unidad continuamos trabajando con el backlog y los sprints, para este punto, con la experiencia adquirida en el trabajo, la experiencia desarrollada en la primera unidad y con las recomendaciones de la tutora, se mejoro la redacción del backlog y de los sprints, se comenzó a trabajar con Jira, herramienta de gestión de proyectos para trackear el progreso de las actividades.</p>
            <p>En Jira se plasmo el backlog por medio de las epic y las actividades de los sprints en tareas por sprints que se enlazan a cada epic correspondiente. Con esto podemos visualizar el timeline del tiempo que nos llevara en realizar todo el proyecto, cuantos puntos de historia tomara cada tarea, visualizar el progreso de cada sprint, verificar si algo falta, si no se planeo correctamente una actividad, si se tiene que agregar mas actividades o el sprint esta muy cargado.</p>
            <h3>Backlog</h3>
            <img src={ require('./jira1.png') } />
            <h3>Sprints</h3>
            <img src={ require('./jira2.png') } />
            <h3>GitHub</h3>
            <img src={ require('./github.png') } />
            <h2>Unidad 3</h2>
            <p>En la unidad tres, trabajamos en equipo, definimos los roles principales de la metodología SCRUM, en nuestro caso fue una persona tomo el rol de desarrollador y la otra persona los roles de PO y de SM.</p>
            <p>Para continuar con las actividades, el equipo se reunión 3 veces por semana, lunes miércoles y jueves, para revisar avances, revisar código, revisar la planeación, definir nuevas estrategias, agendar actividades, actualizar sprints, eliminar o agregar nuevas actividades, etc.</p>
            <h3>Reporte de actividades</h3>
            <embed
                src={PDF1 + "#toolbar=0"}
                    type="application/pdf"
                    height={500}
                    width={600}
            />
            <h2>Unidad 4</h2>
            <p>En la ultima unidad retomamos el proyecto del otro compañero, se definieron los mismos roles y los mismos días de reunión para el equipo, revisamos el backlog, los sprints, se volvio de redefinir todas las actividades del backlog y de los sprints, se agrego un tablero en Jira donde se plasmaron las epic y los sprints.</p>
            <p>Se inicio con las actividades, el código se agrego en GitHub, en cada junta se revisaban las actividades a realizar del sprint en curso para ver si la tarea estaba bien definida o se tenia que redefinir o dividir en las tareas.</p>
            <h3>Reporte de Actividades</h3>
            <embed
                src={PDF2 + "#toolbar=0"}
                    type="application/pdf"
                    height={500}
                    width={600}
            />
        </div>
    );
}

export default Page1;
