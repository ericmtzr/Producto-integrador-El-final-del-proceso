import React from 'react';

function Page2(props) {
    return (
        <div>
            <h2>Sistema implementado</h2>
            <p>El proyecto contempla tener una base de datos donde se almacenaran los componentes vendidos, además de tenr un campo para el vendedor y un numero de identificación único. En esta sección podemos agregar, modificar, actualizar, eliminar.</p>
            <img src={ require('./web1.png') } />
            <img src={ require('./web2.png') } />
            <p>La sección fue la de Login, en la cual nos pedirá usuario y contraseña para poder entrar y revisar los componentes vendidos, en caso de no tener acceso, puede solicitar el acceso mediante la sección de olvidaste contraseña. Después recibirá un correo con los datos de acceso si es que usted esta en la base de datos de clientes o distribuidores autorizados.</p>
            <img src={ require('./web3.png') } />
            <p>Por ultimo tenemos la sección donde después de hacer login correctamente, podrá revisar los componentes disponibles registrados.</p>
            <img src={ require('./web4.png') } />
        </div>
    );
}

export default Page2;
