try {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("ouvert");
  });
} catch (erreur) {
  console.log(erreur);
}


// ===== 2. Carrousel de l'accueil =====
try {
  const image = document.querySelector("#image-carrousel");

  if (image) { // seulement sur la page d'accueil
    const photos = ["../img/residence1.jpg", "../img/residence2.jpg", "../img/residence3.jpg"];
    let numero = 0; // numéro de la photo affichée

    function photoSuivante() {
      numero = numero + 1;
      if (numero >= photos.length) {
        numero = 0; // après la dernière photo, on revient à la première
      }
      image.src = photos[numero];
    }

    function photoPrecedente() {
      numero = numero - 1;
      if (numero < 0) {
        numero = photos.length - 1; // avant la première, on va à la dernière
      }
      image.src = photos[numero];
    }

    document.querySelector("#suivant").addEventListener("click", photoSuivante);
    document.querySelector("#precedent").addEventListener("click", photoPrecedente);
    setInterval(photoSuivante, 3000); // change toute seule toutes les 3 secondes
  }
} catch (erreur) {
  console.log(erreur);
}


// ===== 3. Réservation : calcul du prix et vérification =====
try {
  const formReservation = document.querySelector("#form-reservation");

  if (formReservation) { // seulement sur la page Réservation
    // Calcul : loyer par mois × nombre de mois
    function calculerPrix() {
      const loyer = document.querySelector("#logement").value;
      const duree = document.querySelector("#duree").value;
      document.querySelector("#prix").textContent = loyer * duree;
    }

    // Le prix est recalculé à chaque changement dans le formulaire
    formReservation.addEventListener("input", calculerPrix);

    // Quand on clique sur "Réserver"
    formReservation.addEventListener("submit", function (e) {
      e.preventDefault(); // empêche la page de se recharger

      const nom = document.querySelector("#nom").value;
      const arrivee = document.querySelector("#arrivee").value;
      const message = document.querySelector("#message");
      const aujourdhui = new Date().toISOString().slice(0, 10); // date du jour "AAAA-MM-JJ"

      if (arrivee < aujourdhui) {
        message.textContent = "Erreur : la date d'arrivée est déjà passée.";
        message.className = "erreur";
      } else {
        message.textContent = "Merci " + nom + ", votre réservation est enregistrée !";
        message.className = "succes";
      }
    });
  }
} catch (erreur) {
  console.log(erreur);
}


// ===== 4. Formulaire de contact =====
try {
  const formContact = document.querySelector("#form-contact");

  if (formContact) { // seulement sur la page Contact
    formContact.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.querySelector("#contact-nom").value;
      const texte = document.querySelector("#contact-texte").value;
      const message = document.querySelector("#message-contact");

      if (texte.length < 10) {
        message.textContent = "Le message doit faire au moins 10 caractères.";
        message.className = "erreur";
      } else {
        message.textContent = "Merci " + nom + ", votre message est envoyé !";
        message.className = "succes";
        formContact.reset(); // vide le formulaire
      }
    });
  }
} catch (erreur) {
  console.log(erreur);
}