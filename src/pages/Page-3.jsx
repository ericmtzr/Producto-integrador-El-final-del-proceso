import React from 'react';

const Page3 = props => {
    return (
        <div>
            <h2>Código fuente (comprimido)</h2>
            <p>Se adjunta los links de Jira, GitHub y de descarga.</p>
            <h3>Download</h3>
            <td><a href={"https://github.com/ericmtzr/ldsw_proyecto_ii/archive/refs/heads/main.zip"}>Click para descargar el codigo fuente de GitHub</a></td>
            <h3>Jira</h3>
            <td><a href="https://ericmtzr89.atlassian.net/jira/software/projects/LP2/boards/1" target="_blank">Proyecto Jira</a></td>
            <img src={ require('./jira1.png') } />
            <h3>GitHub</h3>
            <td><a href="https://github.com/ericmtzr/ldsw_proyecto_ii" target="_blank">Proyecto GitHub</a></td>
            <img src={ require('./github.png') } />
        </div>
    );
};

export default Page3;
