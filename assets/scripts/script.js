const baseUrl = "https://el-geladon-backend-by-ip.herokuapp.com/paletas";

async function findAllPaletas() {
    const response = await fetch(`${baseUrl}/find-paletas`);
    console.log(response);

    const paletas = await response.json();
    console.log(paletas);

    paletas.map(paleta => {
        return document.getElementById("paletaList").insertAdjacentHTML(
            "beforeend",
            `
                        <div class="PaletaListaItem">
                    <div>
                        <div class="PaletaListaItem__sabor">
                            ${paleta.sabor}
                        </div>
                        <div class="PaletaListaItem__preco">R$ ${paleta.preco},00</div>
                        <div class="PaletaListaItem__descricao">
                            ${paleta.descricao}
                        </div>
                    </div>
                    <img class="PaletaListaItem__foto"
                    src=${paleta.foto}
                    alt="Paleta ${paleta.sabor}" />
                </div>
        `,
        );
    });
}

findAllPaletas();
