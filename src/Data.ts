export type Release = {
  artist: string;
  album: string;
  label: string;
  description: string;
  year: string;
  format: string;
  link?: string;
  listen?: string;
};

const releases: Release[] = [
  {
    artist: "Racionais Mc's",
    album: "Holocausto Urbano",
    label: "Zimbabwe Records",
    description: "Produzido por Alexandre e Marcelo2, Habone artist'",
    year: "1993",
    format: 'Mixtape',
    link: "https://www.discogs.com/Various-Holocausto-Urbano/release/995212",
    listen: "https://www.youtube.com/watch?v=sXRE3OtRjZE"
            
  },
  {
    artist: "Racionais Mc's",
    album: "Escolha o seu Caminho",
    label: "Zimbabwe Records",
    description: 'Produzido por Alexandre e Marcelo2, Habone artist',
    year: "1994",
    format: 'Mixtape',
    link: "https://www.discogs.com/Various-Escolha-O-Seu-Caminho/release/995213",  
    listen: "https://www.youtube.com/watch?v=91cRKymFak0"
  },
  {
    artist: "Racionais Mc's",
    album: "Raio X Brasil",
    label: "Zimbabwe Records",
    description:
    "Newton CarneiroRacionais MC'sWander",
    year: "1994",
    format: '12"',
    link:
      "https://www.discogs.com/Various-A-Raio-X-Brasil/release/995214",
    listen: "https://www.youtube.com/watch?v=EbdmPtiQ0ls&list=PLMkYq1X0XeqtRKmXKc_zRM1YHwmy1j6gx"
  },
  {
    artist: "Racionais Mc's",
    album: "Sobrevivendo no Inferno",
    label: "Cosa Nostra",
    description:
    "Racionais MC's",
    year: "1997",
    format: 'CD',
    link: "https://www.discogs.com/Racionais-MCs-Sobrevivendo-No-Inferno/release/995215",
    listen: "https://www.youtube.com/watch?v=W4I3wm7vMTo&list=PLcbqoj6PmK64QJxqeNpO4CVN5ROB-5Jvb"
  },
  

  {
    artist: "Racionais Mc's",
    album: "Nada como um Dia após o Outro Dia",
    label: "Cosa Nostra",
    description:
    "Racionais MC's, Dj Ze Gonzales",
    year: "2002",
    format: 'CD',
    "link": "https://www.discogs.com/Racionais-MCs-Nada-Como-Um-Dia-Ap%C3%B3s-O-Outro-Dia/release/995216",
    listen: "https://www.youtube.com/watch?v=Z3Z1YX0r4qk&list=PLcbqoj6PmK64QJxqeNpO4CVN5ROB-5Jvb&index=2"
  },
  {
    artist: "Racionais Mc's",
    album: "‎Cores e Valores",
    label: "Cosa Nostra",
    description:
    "Mano Brown, Ice Blue, DJ CIA, BloodBeatz, Lino Krizz e entre outros",
    year: "2014",
    format: 'CD'
  }


  
   
];

export default releases;
