import toastr from "toastr"

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 4000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
}

function showMessage(message: string, title: string, type: ToastrType) {
    toastr[type](message, title);
}

export function errorMessage(message: string) {
    showMessage(message, "Erro :/", "error");
}

export function successMessage(message: string) {
    showMessage(message, "Ok !", "success");
}

export function warningMessage(message: string) {
    showMessage(message, 'Ops...', "warning");
}