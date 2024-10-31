import Card from "./Components/Card";

export default function App() {
  return (
    <>
      <h1>Playlist de Janderson</h1>
      <Card
        artista="Fleetwood Mac"
        musica="Go Your Own Way"
        foto="https://media.gazetadopovo.com.br/2013/03/e478b3e8e11e9aea266e4d379d964057-gpLarge.jpg"
        dia="Segunda-feira"
      />
      <Card
        artista="TOTO"
        musica="Rosanna"
        foto="https://static01.nyt.com/images/2024/07/27/arts/00PORCARO-TOTO/00PORCARO-TOTO-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        dia="Quarta-feira"
      />
      <Card
        artista="Alice Cooper"
        musica="Poison"
        foto="https://whiplash.net/imagens_promo_22/alicecooper_earmusic_por_jenny_risher.jpg?nocache"
        dia="Sexta-feira"
      />
    </>
  );
}
