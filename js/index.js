$(document).ready(function () {
    $("#tel").mask("(00) 00000-0000");

    function error() {
        $(".form-control").addClass("border-danger");
    }

    $("form").submit((ev) => {
        ev.preventDefault();

        let nome = $("#name");
        let email = $("#email");
        let tel = $("#tel");

        if (nome.val() === "" || email.val() === "" || tel.val() === "") {
            $(".error").removeClass("d-none");
            if (nome.val() === "") {
                nome.addClass("border-danger");
            } else {
                nome.removeClass("border-danger");
            }

            if (email.val() === "") {
                email.addClass("border-danger");
            } else {
                email.removeClass("border-danger");
            }

            if (tel.val() === "") {
                tel.addClass("border-danger");
            } else {
                tel.removeClass("border-danger");
            }
        } else {
            $(".error").addClass("d-none");
            $(".confirmation").removeClass("d-none");
            $(".form-control").removeClass("border-danger");

            nome.val("");
            email.val("");
            tel.val("");
        }

        setTimeout(() => {
            $(".confirmation").addClass("d-none");
        }, 10000);
    });
});
