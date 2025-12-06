import girassolMargaridas from '@/assets/products/girassol-margaridas.jpg';
import rosasEternas from '@/assets/products/rosas-eternas.jpg';
import lavandaProvence from '@/assets/products/lavanda-provence.jpg';
import peoniaLuxo from '@/assets/products/peonia-luxo.jpg';
import buqueNoiva from '@/assets/products/buque-noiva.jpg';
import tulipasHolandesas from '@/assets/products/tulipas-holandesas.jpg';
import orquideaPhalaenopsis from '@/assets/products/orquidea-phalaenopsis.jpg';
import margaridasCampo from '@/assets/products/margaridas-campo.jpg';
import hortensiasAzuis from '@/assets/products/hortensias-azuis.jpg';
import cestaPrimavera from '@/assets/products/cesta-primavera.jpg';
import rosaIndividual from '@/assets/products/rosa-individual.jpg';
import centroMesa from '@/assets/products/centro-mesa.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  materials: string[];
  dimensions?: string;
  colors?: string[];
  image: string;
  category: 'bouquets' | 'singles' | 'arrangements' | 'special';
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'girassol-margaridas',
    name: 'Ramo de Girassol e Margaridas',
    price: 30,
    shortDescription: 'O best-seller que alegra qualquer casa.',
    fullDescription: 'Um ramo encantador que combina a alegria dos girassóis com a delicadeza das margaridas. Feito à mão com amor e atenção aos detalhes, este arranjo traz a energia positiva do sol para qualquer ambiente. Perfeito para presentear ou decorar a sua casa.',
    materials: ['Papel crepom italiano', 'Arame florístico', 'Fita de cetim'],
    dimensions: 'Altura: 35-40cm',
    colors: ['Amarelo', 'Branco', 'Verde'],
    image: girassolMargaridas,
    category: 'bouquets',
    featured: true,
  },
  {
    id: 'rosas-eternas',
    name: 'Rosas Eternas',
    price: 25,
    shortDescription: 'Elegância clássica que dura para sempre.',
    fullDescription: 'Um trio de rosas feitas à mão que capturam a beleza eterna desta flor tão especial. Cada pétala é cuidadosamente moldada para criar um resultado realista e encantador. Disponível em várias cores para combinar com qualquer decoração.',
    materials: ['Papel crepom alemão', 'Arame revestido', 'Fita floral'],
    dimensions: 'Altura: 30cm',
    colors: ['Rosa claro', 'Vermelho', 'Branco', 'Pêssego'],
    image: rosasEternas,
    category: 'singles',
    featured: true,
  },
  {
    id: 'lavanda-provence',
    name: 'Bouquet de Lavanda',
    price: 22,
    shortDescription: 'O aroma da Provence na sua casa.',
    fullDescription: 'Inspirado nos campos de lavanda da Provence, este bouquet traz a serenidade e elegância desta flor mediterrânica. Perfeito para quem aprecia um estilo mais rústico e romântico. Ideal para decorar quartos e escritórios.',
    materials: ['Papel crepom', 'Arame fino', 'Ráfia natural'],
    dimensions: 'Altura: 25-30cm',
    colors: ['Lilás', 'Roxo'],
    image: lavandaProvence,
    category: 'bouquets',
  },
  {
    id: 'peonia-luxo',
    name: 'Peónia de Luxo',
    price: 35,
    shortDescription: 'A rainha das flores em papel.',
    fullDescription: 'A peónia é conhecida pela sua beleza exuberante e romantismo. Esta versão em papel captura toda a sua magnificência com camadas e camadas de pétalas delicadas. Uma verdadeira obra de arte para os amantes de flores.',
    materials: ['Papel crepom italiano premium', 'Arame florístico', 'Fita de seda'],
    dimensions: 'Diâmetro: 15cm',
    colors: ['Rosa', 'Coral', 'Branco'],
    image: peoniaLuxo,
    category: 'singles',
    featured: true,
  },
  {
    id: 'buque-noiva',
    name: 'Bouquet de Noiva',
    price: 65,
    shortDescription: 'Para o dia mais especial da sua vida.',
    fullDescription: 'Um bouquet de noiva personalizado, feito especialmente para si. Combinamos as suas flores favoritas para criar um arranjo único que durará para sempre como recordação do seu dia especial. Inclui consultoria prévia para definir o design perfeito.',
    materials: ['Papel crepom italiano', 'Arame revestido', 'Fita de cetim', 'Pérolas decorativas'],
    dimensions: 'Personalizado',
    colors: ['Personalizado'],
    image: buqueNoiva,
    category: 'special',
  },
  {
    id: 'tulipas-holandesas',
    name: 'Tulipas Holandesas',
    price: 28,
    shortDescription: 'A simplicidade elegante das tulipas.',
    fullDescription: 'Um arranjo de tulipas que traz a elegância holandesa para a sua casa. Cada tulipa é esculpida à mão para capturar a forma característica e a graciosidade desta flor primaveril. Perfeitas para decoração moderna e minimalista.',
    materials: ['Papel crepom', 'Arame verde', 'Fita de organza'],
    dimensions: 'Altura: 35cm',
    colors: ['Rosa', 'Amarelo', 'Vermelho', 'Branco'],
    image: tulipasHolandesas,
    category: 'bouquets',
  },
  {
    id: 'orquidea-phalaenopsis',
    name: 'Orquídea Phalaenopsis',
    price: 40,
    shortDescription: 'Sofisticação e elegância oriental.',
    fullDescription: 'A orquídea Phalaenopsis é símbolo de luxo e sofisticação. Esta versão artesanal captura a beleza exótica desta flor com detalhes incríveis. Inclui vaso decorativo para uma apresentação perfeita.',
    materials: ['Papel crepom japonês', 'Arame moldável', 'Vaso cerâmico'],
    dimensions: 'Altura total: 45cm',
    colors: ['Branco', 'Rosa', 'Lilás'],
    image: orquideaPhalaenopsis,
    category: 'arrangements',
  },
  {
    id: 'margaridas-campo',
    name: 'Margaridas do Campo',
    price: 18,
    shortDescription: 'A frescura do campo na sua mesa.',
    fullDescription: 'Um molho de margaridas que traz toda a frescura e simplicidade do campo. Perfeitas para quem aprecia um estilo mais natural e descontraído. Ideais para decorar cozinhas e espaços luminosos.',
    materials: ['Papel crepom', 'Arame fino', 'Ráfia'],
    dimensions: 'Altura: 25cm',
    colors: ['Branco com centro amarelo'],
    image: margaridasCampo,
    category: 'singles',
  },
  {
    id: 'hortensias-azuis',
    name: 'Hortênsias Azuis',
    price: 32,
    shortDescription: 'A magia das hortênsias dos Açores.',
    fullDescription: 'Inspiradas nas famosas hortênsias açorianas, este arranjo traz a magia azulada destas flores icónicas. Cada pequena flor é feita individualmente para criar um efeito volumoso e impressionante.',
    materials: ['Papel crepom', 'Arame florístico', 'Fita decorativa'],
    dimensions: 'Diâmetro: 20cm',
    colors: ['Azul', 'Lilás', 'Rosa'],
    image: hortensiasAzuis,
    category: 'singles',
  },
  {
    id: 'cesta-primavera',
    name: 'Cesta de Primavera',
    price: 45,
    shortDescription: 'Um jardim completo numa cesta.',
    fullDescription: 'Uma cesta repleta de flores variadas que celebra a chegada da primavera. Inclui uma mistura harmoniosa de cores e texturas que transformará qualquer espaço num jardim encantado. Perfeita para oferecer em ocasiões especiais.',
    materials: ['Papel crepom variado', 'Cesta de vime', 'Musgo decorativo', 'Laço de cetim'],
    dimensions: 'Altura: 30cm, Largura: 25cm',
    colors: ['Multicolor'],
    image: cestaPrimavera,
    category: 'arrangements',
    featured: true,
  },
  {
    id: 'rosa-individual',
    name: 'Rosa Individual',
    price: 8,
    shortDescription: 'Uma rosa perfeita para momentos especiais.',
    fullDescription: 'Uma única rosa feita com todo o cuidado e atenção aos detalhes. Perfeita para oferecer num gesto romântico ou como lembrança de um momento especial. Embalada com elegância, pronta para oferecer.',
    materials: ['Papel crepom italiano', 'Arame revestido', 'Embalagem individual'],
    dimensions: 'Altura: 30cm',
    colors: ['Vermelho', 'Rosa', 'Branco', 'Amarelo'],
    image: rosaIndividual,
    category: 'singles',
  },
  {
    id: 'centro-mesa',
    name: 'Centro de Mesa',
    price: 38,
    shortDescription: 'Elegância para as suas celebrações.',
    fullDescription: 'Um centro de mesa sofisticado, perfeito para jantares especiais, casamentos ou eventos. Desenhado para impressionar sem obstruir a conversa à mesa. Personalizável de acordo com a sua paleta de cores.',
    materials: ['Papel crepom premium', 'Base de madeira', 'Folhagem decorativa'],
    dimensions: 'Altura: 15cm, Diâmetro: 25cm',
    colors: ['Personalizado'],
    image: centroMesa,
    category: 'arrangements',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};
