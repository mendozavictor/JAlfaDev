var usuarios = ["victor", "hugo", "mayra", "camila", "ramon", "ali", "luis", "alfonzo"]

function bienvenido() {
    alert('bienvenido')
}

function iniciarSesion() {
    let auxUser;
    do {
        auxUser = prompt('ingrese el nombre de usuario')
        if (auxUser == "" || auxUser == null) {
            alert('debe ingreser un dato!!!');
        } else {
            if (usuarios.indexOf(auxUser) != -1) {
                alert(`bienvenido ${auxUser}`);
            } else {
                alert('el usuario no esta registrado');
            }
        }

    } while (auxUser == "" || auxUser == null);

}
