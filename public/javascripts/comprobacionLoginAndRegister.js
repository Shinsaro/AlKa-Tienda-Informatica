$(function(){
	$('#formRegister').bootstrapValidator({
        container: '#mensajes',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            usuario: {
                validators: {
                    notEmpty: {
                        message: 'El nombre no puede estar vacio.'
                    }
                }
            },
            correo: {
                validators: {
                    notEmpty: {
                        message: 'El correo no lo puedes dejar vacio.'
                    },
                    emailAddress: {
                        message: 'El correo no es valido.'
                    }
                }
            },
            contrasena: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña no puede estar vacia.'
                    }
                }
            },
            contrasena2: {
                validators: {
                    identical: {
                        field: "contrasena",
                        message: 'La contraseña no es igual.'   
                    },
                    notEmpty: {
                        message: 'La contraseña no puede estar vacia.'
                    }
                }
            }
        }
    });
	$('#formLogin').bootstrapValidator({
        framework: 'bootstrap',
        container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            usuario: {
                validators: {
                    notEmpty: {
                        message: 'El nombre no puede estar vacio.'
                    }
                }
            },
            contrasena: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña no puede estar vacia.'
                    }
                }
            }
        }
    });
});