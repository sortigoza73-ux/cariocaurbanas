// CONFIGURACIÓN RÁPIDA
// Cambiar este número por el WhatsApp real de Carioca, con código país y sin signos.
// Ejemplo Argentina: 5493425980000
const WHATSAPP_NUMBER = "549342459234";
const WHATSAPP_TEXT = "Hola Carioca Urbanas, quiero consultar por un modelo del catálogo.";
const TOTAL_PAGES = 23;

const catalog = document.getElementById("catalog");
for (let i = 2; i <= TOTAL_PAGES; i++) {
  const section = document.createElement("section");
  section.className = "page";
  section.id = `pagina-${i}`;
  const img = document.createElement("img");
  img.src = `img/${i}.jpg`;
  img.alt = `Carioca Urbanas catálogo página ${i}`;
  img.loading = "lazy";
  section.appendChild(img);
  catalog.appendChild(section);
}

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
document.getElementById("topWhatsapp").href = waUrl;
document.getElementById("floatWhatsapp").href = waUrl;

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 800);
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
