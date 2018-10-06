const request = (data, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), ms);
  });

const response = {
  data: [
    {
      id: 1,
      title: 'Pai Rico, Pai Pobre',
      year: 2017,
      language: 'Português',
      author: 'Robert Kiyosaki',
      synopsis:
        'Um dos livros mais falados da última década, abriu os olhos do mundo para a necessidade de pensar o planejamento de finanças pessoais. Pai Rico, Pai Pobre foi o primeiro best-seller de Robert T. Kyiosaki e Sharon Lechter, e deu origem a uma série de enorme sucesso. ',
      summary: {
        title: 'Gostei',
        paragraphs: ['Não tem', 'Biscoito', 'Só café'],
      },
      rating: 5,
      price: 59.8,
      url:
        'https://www.amazon.com.br/Pai-Rico-Pobre-Robert-Kiyosaki/dp/8550801488?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3Q2K86CIOL3T0&keywords=pai+rico+pai+pobre&qid=1535723541&sprefix=Pai%2Cstripbooks%2C271&sr=1-2&ref=sr_1_2',
      comments: [],
      createdAt: '',
      updatedAt: '',
      releasedAt: '',
      readed: true,
      image:
        'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=447204&qld=90&l=430&a=-1',
    },
    {
      id: 2,
      title: 'Os Segredos da Mente Milionária',
      year: 2006,
      language: 'Português',
      author: 'T. Harv Eker',
      synopsis:
        'Se as suas finanças andam na corda bamba, talvez esteja na hora de você refletir sobre o que T. Harv Eker chama de "o seu modelo de dinheiro" – um conjunto de crenças que cada um de nós alimenta desde a infância e que molda o nosso destino financeiro, quase sempre nos levando para uma situação difícil.',
      summary: { title: '', paragraphs: ['', '', ''] },
      rating: 4,
      price: 17.4,
      url: '',
      comments: [],
      createdAt: '',
      updatedAt: '',
      releasedAt: '',
      readed: true,
      image:
        'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=1416781&qld=90&l=430&a=-1',
    },
    {
      id: 3,
      title: 'Quem Pensa Enriquece',
      year: 2015,
      language: 'Português',
      author: 'Napoleon Hill',
      synopsis:
        'Todos querem ficar ricos. Poucos conseguem. Qual será o segredo, a fórmula que cria milionários? Por vinte anos, Napoleon Hill, autor de "Quem Pensa Enriquece", se dedicou a descobri-la. E conseguiu. Ele acompanhou de perto a ascensão de 500 das maiores fortunas do mundo. Convivendo com mitos com Henry Ford, Theodore Roosevelt, King Gillette e John Rockefeller, o autor encontrou 15 características comuns a todos esses grandes vencedores. ',
      summary: { title: '', paragraphs: ['', '', ''] },
      rating: 0,
      price: '',
      url: '',
      comments: [],
      createdAt: '',
      updatedAt: '',
      releasedAt: '',
      readed: true,
      image:
        'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2654138&qld=90&l=430&a=-1',
    },
    {
      id: 4,
      title: 'O Poder do Hábito',
      year: 2012,
      language: 'Português',
      author: 'Charles Duhigg ',
      synopsis:
        'Segundo o autor, a chave para se exercitar regularmente, perder peso, educar os filhos, tornar-se mais produtivo, criar empresas revolucionárias e alcançar o sucesso é entender como os hábitos funcionam. Ele procura mostrar que, ao dominar esta ciência, todos podem transformar suas empresas e suas vidas.',
      summary: { title: '', paragraphs: ['', '', ''] },
      rating: 0,
      price: 43.11,
      url: '',
      comments: [],
      createdAt: '',
      updatedAt: '',
      releasedAt: '',
      readed: true,
      image:
        'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4238667&qld=90&l=430&a=-1',
    },
    {
      id: 5,
      title: 'Rápido E Devagar',
      year: 2012,
      language: 'Português',
      author: 'Daniel Kahneman',
      synopsis:
        'Nesta obra, Daniel Kahneman procura mostrar as formas que controlam a mente - o pensamento rápido, intuitivo e emocional e o devagar, lógico e ponderado. Daniel busca mostrar a capacidade do pensamento rápido, sua influência persuasiva nas decisões e até onde se pode ou não confiar nele. Segundo a obra, o entendimento do funcionamento dessas duas formas de pensar pode ajudar em decisões pessoais e profissionais.',
      summary: { title: '', paragraphs: ['', '', ''] },
      rating: 0,
      price: 42.1,
      url: '',
      comments: [],
      createdAt: '',
      updatedAt: '',
      releasedAt: '',
      readed: false,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41alIv87Z5L.jpg',
    },
  ],
};

export const getAllBooks = async () => {
  try {
    return await request(response);
  } catch (error) {
    console.log('test', error);
  }
};
