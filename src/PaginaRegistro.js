// PaginaRegistro.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PaginaRegistro() {
    const history = useHistory();

    useEffect(() => {
        document.getElementById('loginform').addEventListener('submit', function (event) {
            event.preventDefault();

            const usuario = document.getElementById('usuario').value;
            const password = document.getElementById('password').value;
            const campaña = document.getElementById('campaña').value;

            registrar(usuario, password, campaña);
        });
    }, []);

    function registrar(usuario, password, campaña) {
        const extensionesValidas = ['101', '102', '103'];
        const claveValida = '123456';
        const campañaValida = 'paneles';

        if (
            extensionesValidas.includes(usuario) &&
            password === claveValida &&
            campaña === campañaValida
        ) {
            history.push('/index_1.html'); // Ruta relativa a la página 2
            alert('Registro exitoso. ¡Bienvenido!');
        } else {
            alert('Error en el registro. Verifica los datos ingresados.');
        }
    }

    return (
        <div>
            <form id="loginform">
                <input type="text" id="usuario" />
                <input type="password" id="password" />
                <input type="text" id="campaña" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default PaginaRegistro;
