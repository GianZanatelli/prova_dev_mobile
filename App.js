import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RPG from './src/RPG';

export default function App() {

  const cards = [
    {
      name: "Espada Reforjada de Mistsplitter",
      url: "https://meups.com.br/wp-content/uploads/2023/01/Genshin-Impact-900x503.jpg",
      desc: "Uma espada reforjada das trevas que concede +15 roubo de alma do oponente causando-o mais dano.",
    },
    {
      name: "Asa do Companheirismo",
      url: "https://static.wikia.nocookie.net/genshin-impact/images/8/8d/Asas_do_Companheirismo_evento.jpg/revision/latest?cb=20220228142643&path-prefix=pt-br",
      desc: "Asa do companheirismo lhe dá a habilidade de voo por mais tempo e uma proteção de +7 contra fogo.",
    },
    {
      name: "Anel da Regeneração",
      url: "https://i.pinimg.com/736x/a5/0b/9d/a50b9d3d296b05158133ab4e8b18b496.jpg",
      desc: "Quando perde uma parte do corpo, o Anel faz com que essa parte volte e funcione normalmente após 2 rodadas.",
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <RPG key={index} card={card} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#7c142c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});